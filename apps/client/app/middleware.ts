import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("jwt");
  const isDashboardRoute = req.nextUrl.pathname.startsWith("/dashboard");
  if (isDashboardRoute && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/dashboard/:path*"],
};
