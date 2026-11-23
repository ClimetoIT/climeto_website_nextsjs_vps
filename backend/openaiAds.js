import { randomUUID } from "crypto";
import { isIP } from "net";

const ENDPOINT = "https://bzr.openai.com/v1/events";

function publicIp(ip) {
  if (!ip || !isIP(ip)) return "";
  if (
    ip === "::1" ||
    ip.startsWith("10.") ||
    ip.startsWith("127.") ||
    ip.startsWith("192.168.") ||
    ip.startsWith("169.254.") ||
    ip.startsWith("fc") ||
    ip.startsWith("fd") ||
    /^172\.(1[6-9]|2\d|3[0-1])\./.test(ip)
  ) {
    return "";
  }
  return ip;
}

function cookieValue(request, name) {
  const value = request.cookies?.get(name)?.value || "";
  return value.trim().slice(0, 512);
}

export async function sendPageViewed({ request, path }) {
  const apiKey = process.env.OPENAI_ADS_API_KEY || "";
  const pixelId = process.env.OPENAI_ADS_PIXEL_ID || "";
  if (!apiKey || !pixelId) return { skipped: true };

  const host = (request.headers.get("x-forwarded-host") || request.headers.get("host") || "climeto.com")
    .split(",")[0]
    .trim();
  const proto = (request.headers.get("x-forwarded-proto") || "https").split(",")[0].trim();
  const sourceUrl = `${proto}://${host}${path}`;

  const event = {
    id: randomUUID(),
    type: "page_viewed",
    timestamp_ms: Date.now(),
    source_url: sourceUrl,
    action_source: "web",
    data: { type: "contents" },
  };

  const oppref = cookieValue(request, "__oppref");
  if (oppref) event.oppref = oppref;

  const user = {};
  const obref = cookieValue(request, "__obref");
  const ip = publicIp(clientIpFrom(request));
  const userAgent = (request.headers.get("user-agent") || "").trim().slice(0, 512);
  if (obref) user.obref = obref;
  if (ip) user.ip_address = ip;
  if (userAgent) user.user_agent = userAgent;
  if (Object.keys(user).length > 0) event.user = user;

  const response = await fetch(`${ENDPOINT}?pid=${encodeURIComponent(pixelId)}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      validate_only: false,
      integration_source: "climeto_website",
      events: [event],
    }),
    signal: AbortSignal.timeout(4000),
  });

  if (!response.ok) {
    const detail = (await response.text()).slice(0, 300);
    throw new Error(`OpenAI ads ${response.status}: ${detail}`);
  }

  return { ok: true };
}

function clientIpFrom(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return (request.headers.get("x-real-ip") || request.ip || "").trim();
}
