import { NextRequest, NextResponse } from "next/server";

const COOKIE_KEY = "cdm_deadline";
const DURATION_MS = 45 * 60 * 1000; // 45 minutes

export function middleware(request: NextRequest) {
  // API traffic: log to stdout (container). Do not call request.json() / request.text() here — the body
  // is a single-use stream; reading it in middleware empties it for the route and breaks POST handlers.
  if (request.nextUrl.pathname.startsWith("/api")) {
    const path = `${request.nextUrl.pathname}${request.nextUrl.search}`;
    const len = request.headers.get("content-length");
    console.log("[api]", request.method, path, len ? `content-length:${len}` : "");
    return NextResponse.next();
  }

  const response = NextResponse.next();

  // Bypass in development or for admins
  if (process.env.NODE_ENV !== "production" || request.cookies.get("cdm_admin")) {
    return response;
  }

  if (!request.cookies.get(COOKIE_KEY)) {
    const deadline = Date.now() + DURATION_MS;
    response.cookies.set(COOKIE_KEY, String(deadline), {
      maxAge: 60 * 60 * 24 * 365 * 10, // 10 years
      httpOnly: false, // must be readable by client JS
      sameSite: "lax",
      path: "/",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next|api|favicon).*)", "/api/:path*"],
};
