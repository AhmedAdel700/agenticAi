import type { Metadata } from "next";
import { Space_Grotesk, Marcellus, Cairo } from "next/font/google";

import "@/public/assets/css/bootstrap.min.css";
import "@/public/assets/css/style.css";
import "@/public/assets/css/responsive.css";
import "@/public/assets/css/rtl.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import 'swiper/css/effect-fade'
import CustomCursor from "@/components/elements/CustomCursor";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const marcellus = Marcellus({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Agentic Ai - Autonomous Intelligence for Institutional Operations",
  description: "Agentic Ai systems that execute work autonomously for organizations in Abu Dhabi and across the GCC.",
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  const fontClass = locale === 'ar' ? cairo.className : spaceGrotesk.className;

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`custom-cursor ${fontClass}`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <CustomCursor />
          <div className={marcellus.className}></div>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
