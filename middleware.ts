import { NextResponse, type NextRequest } from "next/server";
import { getLocaleFromAcceptLanguage, isLocale } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  if (isLocale(firstSegment)) {
    return NextResponse.next();
  }

  const locale = getLocaleFromAcceptLanguage(
    request.headers.get("accept-language"),
  );
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  url.search = search;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
