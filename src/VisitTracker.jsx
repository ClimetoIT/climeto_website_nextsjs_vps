"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "climeto_visit_id";

function sessionId() {
  let id = sessionStorage.getItem(STORAGE_KEY);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(STORAGE_KEY, id);
  }
  return id;
}

function rememberAdClick() {
  const oppref = new URLSearchParams(window.location.search).get("oppref");
  if (!oppref) return;
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `__oppref=${encodeURIComponent(oppref)}; Max-Age=2592000; Path=/; SameSite=Lax${secure}`;
}

function send(data) {
  const body = JSON.stringify(data);
  try {
    if (navigator.sendBeacon) {
      const queued = navigator.sendBeacon(
        "/api/analytics",
        new Blob([body], { type: "application/json" })
      );
      if (queued) return;
    }
  } catch {
    // fetch below covers browsers that reject the beacon
  }

  fetch("/api/analytics", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {});
}

export default function VisitTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || pathname.startsWith("/api")) return undefined;

    const id = sessionId();
    const startedAt = Date.now();
    let flushedUntil = startedAt;

    rememberAdClick();
    send({ sessionId: id, path: pathname, durationMs: 0, pageView: true });

    const flush = () => {
      const now = Date.now();
      const durationMs = now - flushedUntil;
      if (durationMs < 500) return;
      flushedUntil = now;
      send({ sessionId: id, path: pathname, durationMs, pageView: false });
    };

    const onHide = () => {
      if (document.visibilityState === "hidden") flush();
    };

    const timer = setInterval(() => {
      if (document.visibilityState === "visible") flush();
    }, 30000);

    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("pagehide", flush);

    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("pagehide", flush);
      flush();
    };
  }, [pathname]);

  return null;
}
