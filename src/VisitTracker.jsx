"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "climeto_visit_id";
const TRACK_ENDPOINT = "/api/visit";
let memorySessionId = "";

function generateUuid() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function getVisitSessionId() {
  try {
    let id = sessionStorage.getItem(STORAGE_KEY);
    if (!id) {
      id = memorySessionId || generateUuid();
      sessionStorage.setItem(STORAGE_KEY, id);
    }
    memorySessionId = id;
    return id;
  } catch {
    if (!memorySessionId) {
      memorySessionId = generateUuid();
    }
    return memorySessionId;
  }
}

function rememberAdClick() {
  try {
    const oppref = new URLSearchParams(window.location.search).get("oppref");
    if (!oppref) return;
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `__oppref=${encodeURIComponent(oppref)}; Max-Age=2592000; Path=/; SameSite=Lax${secure}`;
  } catch {
    // Ignore cookie errors in restricted contexts
  }
}

function send(data, useBeacon = false) {
  const body = JSON.stringify(data);
  if (useBeacon) {
    try {
      if (navigator.sendBeacon) {
        const queued = navigator.sendBeacon(
          TRACK_ENDPOINT,
          new Blob([body], { type: "application/json" })
        );
        if (queued) return;
      }
    } catch {
      // fetch below covers browsers that reject the beacon
    }
  }

  fetch(TRACK_ENDPOINT, {
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

    const id = getVisitSessionId();
    const startedAt = Date.now();
    let flushedUntil = startedAt;

    rememberAdClick();
    send({ sessionId: id, path: pathname, durationMs: 0, pageView: true }, false);

    const flush = (useBeacon = true) => {
      const now = Date.now();
      const durationMs = now - flushedUntil;
      if (durationMs < 500) return;
      flushedUntil = now;
      send({ sessionId: id, path: pathname, durationMs, pageView: false }, useBeacon);
    };

    const onHide = () => {
      if (document.visibilityState === "hidden") flush(true);
    };

    const onPageHide = () => flush(true);

    const timer = setInterval(() => {
      if (document.visibilityState === "visible") flush(false);
    }, 30000);

    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("pagehide", onPageHide);

    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("pagehide", onPageHide);
      flush(true);
    };
  }, [pathname]);

  return null;
}
