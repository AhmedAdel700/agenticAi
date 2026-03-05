import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  // Ensure we have a valid locale, otherwise fallback to default
  const activeLocale = locale && routing.locales.includes(locale as any) 
    ? locale 
    : routing.defaultLocale;

  return {
    locale: activeLocale,
    messages: (await import(`../messages/${activeLocale}/home.json`)).default,
  };
});
