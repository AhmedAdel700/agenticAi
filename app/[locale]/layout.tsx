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
import Script from 'next/script'

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
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Agentic Ai - Autonomous Intelligence for Institutional Operations",
  description: "Agentic Ai systems that execute work autonomously for organizations in Abu Dhabi and across the GCC.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/images/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/images/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
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
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body className={`custom-cursor ${fontClass}`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <CustomCursor />
          <div className={marcellus.className}></div>
          {children}
          {/* Tawk.to Script */}
            <Script id="tawk-script" strategy="afterInteractive">
              {`
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/default';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
                })();

                Tawk_API.onLoad = function(){
                  Tawk_API.hideWidget();
                };
              `}
            </Script>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
