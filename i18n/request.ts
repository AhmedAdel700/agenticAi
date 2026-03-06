import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const resolved = await requestLocale;
  const activeLocale =
    resolved && routing.locales.includes(resolved as any)
      ? resolved
      : routing.defaultLocale;

  try {
    // Use explicit imports so Vercel trace can statically analyze and bundle the JSON files
    const messages =
      activeLocale === "ar"
        ? (await import("../messages/ar/home.json")).default
        : (await import("../messages/en/home.json")).default;

    return {
      locale: activeLocale,
      messages,
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${activeLocale}`, error);
    return {
      locale: activeLocale,
      messages: {},
    };
  }
});
