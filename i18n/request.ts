import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let resolvedLocale = await requestLocale;
  
  // Ensure we have a valid locale, otherwise fallback to default
  const activeLocale = resolvedLocale && routing.locales.includes(resolvedLocale as any) 
    ? resolvedLocale 
    : routing.defaultLocale;

  try {
    const messageModule = await import(`@/messages/${activeLocale}/home.json`);
    const messages = messageModule.default || messageModule;
    return {
      locale: activeLocale,
      messages: messages,
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${activeLocale}`, error);
    return {
      locale: activeLocale,
      messages: {},
    };
  }
});
