"use client";
import { useTranslations, useLocale } from "next-intl";
import AnimatedTitle from "@/components/elements/AnimatedTitle";
import { Briefcase, Home, Calculator, Settings } from "lucide-react";

export default function Solutions() {
  const t = useTranslations("solutions");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const items = [
    { key: "item1", icon: <Briefcase size={32} /> },
    { key: "item2", icon: <Home size={32} /> },
    { key: "item3", icon: <Calculator size={32} /> },
    { key: "item4", icon: <Settings size={32} /> },
  ];

  return (
    <section className="solutions-section" style={{ padding: '120px 0', background: '#051129', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
            <div className={`section-title text-center sec-title-animation animation-style1`}>
                <div className="section-title__tagline-box">
                    <div className="section-title__tagline-shape-1"></div>
                    <span className="section-title__tagline">{t("tagline")}</span>
                    <div className="section-title__tagline-shape-2"></div>
                </div>
                <AnimatedTitle>
                    <h2 className="section-title__title title-animation">
                        {t("title")}<br />
                        <span>{t("text")}</span>
                    </h2>
                </AnimatedTitle>
            </div>

            <div className="row mt-5 g-4">
                {items.map((item, index) => (
                    <div key={index} className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${index * 100}ms`}>
                        <div style={{
                            padding: '40px 30px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '30px',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            height: '100%',
                            transition: 'all 0.4s ease',
                            textAlign: isRtl ? 'right' : 'left',
                            position: 'relative',
                            zIndex: 1
                        }}
                        className="solution-card"
                        >
                            <div style={{
                                width: '70px',
                                height: '70px',
                                borderRadius: '20px',
                                background: 'linear-gradient(270deg, #5CB0E9 0%, #3D72FC 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '25px',
                                color: '#fff'
                            }}>
                                {item.icon}
                            </div>
                            <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '15px' }}>
                                {t(`${item.key}.title`)}
                            </h3>
                            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.6', margin: 0 }}>
                                {t(`${item.key}.desc`)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <style jsx>{`
            .solution-card {
                cursor: pointer;
            }
            .solution-card:hover {
                transform: translateY(-10px);
                background: rgba(255, 255, 255, 0.06) !important;
                border-color: rgba(92, 176, 233, 0.3) !important;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
            }
        `}</style>
    </section>
  );
}
