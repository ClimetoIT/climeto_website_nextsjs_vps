import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();

  if (url.pathname === "/" && url.searchParams.get("page_id") === "3091") {
    url.search = "";
    return NextResponse.redirect(url, 308);
  }

  const segments = url.pathname.split("/").filter(Boolean);
  if (segments[0]?.toLowerCase() === "epr") {
    const normalizedPath = `/EPR${segments
      .slice(1)
      .map((segment) => segment.replace(/\.html$/i, "").toLowerCase())
      .map((segment) => `/${segment}`)
      .join("")}`;

    const hasQueryParams = url.searchParams.toString().length > 0;
    if (url.pathname !== normalizedPath || hasQueryParams) {
      url.pathname = normalizedPath;
      url.search = "";
      return NextResponse.redirect(url, 308);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/EPR/:path*", "/epr/:path*"],
};
