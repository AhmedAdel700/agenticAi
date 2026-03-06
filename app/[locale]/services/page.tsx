"use client";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import Services from "@/components/sections/home1/Services";
import { useTranslations, useLocale } from "next-intl";

export default function ServicePage() {
  const t = useTranslations("services_page");
  const locale = useLocale();
  const isRtl = locale === 'ar';

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t("tagline")}>
      {/* High-level capabilities (already mapped to AG data) */}
      <Services />

      {/* Detailed services page content based on AG services page data */}
      <section className="services-four">
        <div
          className="services-four__bg-shape float-bob-y"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop)",
          }}
        ></div>
        <div className="container">
          <div className="row" style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}>
            {/* Left: illustrative images (swapped in RTL via row-reverse) */}
            <div className="col-xl-6">
              <div
                className={`services-four__left wow ${isRtl ? 'slideInRight' : 'slideInLeft'}`}
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="services-four__img-box">
                  <div className="services-four__img">
                    <Image
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=900&auto=format&fit=crop"
                      alt="Advanced technology infrastructure"
                      width={360}
                      height={440}
                      priority
                      style={{ objectFit: 'cover', borderRadius: '24px' }}
                    />
                  </div>
                  <div className="services-four__img-2">
                    <Image
                      src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=900&auto=format&fit=crop"
                      alt="Data-driven autonomous execution"
                      width={360}
                      height={440}
                      priority
                      style={{ objectFit: 'cover', borderRadius: '24px' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: copy and features from AG services page */}
            <div className="col-xl-6">
              <div className="services-four__right" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                <div className={`section-title ${isRtl ? 'text-right' : 'text-left'} sec-title-animation animation-style2`}>
                  <div className="section-title__tagline-box">
                    <div className="section-title__tagline-shape-1"></div>
                    <span className="section-title__tagline">{t("tagline")}</span>
                    <div className="section-title__tagline-shape-2"></div>
                  </div>
                  <h2 className="section-title__title title-animation" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                    {t("title")}<br />
                    <span>{t("subtitle")}</span>
                  </h2>
                </div>
                <p className="services-four__text">
                  {t("text")}
                </p>
                {/* Process – Our Execution Logic (1–4) brought into Capabilities section */}
                <ul className="services-four__points-box list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-technical-support"></span>
                    </div>
                    <div className="content">
                      <h4>{t("step1.title")}</h4>
                      <p>{t("step1.desc")}</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-technical-support"></span>
                    </div>
                    <div className="content">
                      <h4>{t("step2.title")}</h4>
                      <p>{t("step2.desc")}</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-technical-support"></span>
                    </div>
                    <div className="content">
                      <h4>{t("step3.title")}</h4>
                      <p>{t("step3.desc")}</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-technical-support"></span>
                    </div>
                    <div className="content">
                      <h4>{t("step4.title")}</h4>
                      <p>{t("step4.desc")}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process steps now integrated into the Capabilities section above */}
    </Layout>
  );
}
