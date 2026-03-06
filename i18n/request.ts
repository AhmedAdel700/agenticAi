import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const resolved = await requestLocale;
  const activeLocale =
    resolved && routing.locales.includes(resolved as any)
      ? resolved
      : routing.defaultLocale;

  try {
    // Use a relative path so it works reliably in production builds
    const messageModule = await import(`../messages/${activeLocale}/home.json`);
    const messages = messageModule.default || messageModule;

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
