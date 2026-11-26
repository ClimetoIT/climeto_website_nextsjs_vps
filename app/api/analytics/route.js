import { timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import connectMongoDB from "../../../backend/db";
import { sendPageViewed } from "../../../backend/openaiAds";
import VisitSession from "../../../backend/models/VisitSession";
import { recordVisitSession } from "../../../backend/visitSession";

const MAX_DURATION_MS = 2 * 60 * 60 * 1000;

function clientIp(request) {
  const cfIp = request.headers.get("cf-connecting-ip");
  if (cfIp) return cfIp.trim().slice(0, 64);

  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0].trim();
    if (first) return first.slice(0, 64);
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim().slice(0, 64);
  if (request.ip) return String(request.ip).slice(0, 64);
  return "unknown";
}

function authorized(request) {
  const secret = process.env.ANALYTICS_SECRET || "";
  const key = request.headers.get("x-analytics-key") || "";
  const expected = Buffer.from(secret);
  const given = Buffer.from(key);
  if (expected.length < 16 || expected.length !== given.length) return false;
  return timingSafeEqual(expected, given);
}

function formatDuration(ms) {
  const totalSeconds = Math.round(Math.max(0, ms) / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  if (hours > 0) return `${hours}h ${minutes}m ${seconds}s`;
  if (minutes > 0) return `${minutes}m ${seconds}s`;
  return `${seconds}s`;
}

export async function POST(request) {
  try {
    const ua = request.headers.get("user-agent") || "";
    if (/bot|crawl|spider|slurp|headless/i.test(ua)) {
      return NextResponse.json({ ok: true, skipped: true });
    }

    const body = await request.json();
    const sessionId = String(body.sessionId || "");
    const path = String(body.path || "");
    const durationMs = Math.max(
      0,
      Math.min(Number(body.durationMs) || 0, MAX_DURATION_MS)
    );
    const pageView = Boolean(body.pageView);

    if (!/^[0-9a-f-]{36}$/i.test(sessionId)) {
      return NextResponse.json({ message: "Invalid session" }, { status: 400 });
    }
    if (!path.startsWith("/") || path.length > 300 || path.startsWith("/api")) {
      return NextResponse.json({ message: "Invalid path" }, { status: 400 });
    }

    if (pageView) {
      try {
        await sendPageViewed({ request, path });
      } catch (error) {
        console.error("OpenAI ads page_viewed failed:", error.message);
      }
    }

    await connectMongoDB();

    const ip = clientIp(request);
    await recordVisitSession({ sessionId, ip, path, durationMs, pageView });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("POST /api/analytics error:", error);
    return NextResponse.json({ message: "Failed to save visit" }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    if (!authorized(request)) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const limit = Math.max(1, Math.min(Number(searchParams.get("limit")) || 50, 200));

    await connectMongoDB();
    const sessions = await VisitSession.find()
      .sort({ lastSeenAt: -1 })
      .limit(limit)
      .lean();

    const visits = sessions.map((session) => ({
      ip: session.ip,
      pageCount: session.pageCount,
      totalDurationMs: session.totalDurationMs,
      timeSpent: formatDuration(session.totalDurationMs),
      pages: (session.pages || []).map((page) => ({
        path: page.path,
        views: page.views,
        durationMs: page.durationMs,
        timeSpent: formatDuration(page.durationMs),
      })),
      firstSeenAt: session.firstSeenAt,
      lastSeenAt: session.lastSeenAt,
    }));

    return NextResponse.json({ visits });
  } catch (error) {
    console.error("GET /api/analytics error:", error);
    return NextResponse.json({ message: "Failed to fetch visits" }, { status: 500 });
  }
}
