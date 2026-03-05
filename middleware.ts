import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Only match root, locale-prefixed paths, and the 4 main routes
  // This leaves legacy detail pages (/backup-recovery etc.) untouched
  matcher: [
    "/",
    "/(en|ar)/:path*",
    "/(en|ar)",
    "/about",
    "/services",
    "/contact",
  ],
};