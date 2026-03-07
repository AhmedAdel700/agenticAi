"use client";
import { useTranslations, useLocale } from "next-intl";
import AnimatedTitle from "@/components/elements/AnimatedTitle";
import { Search, Zap, Code, ShieldCheck, Users, TrendingUp, Calendar, Award } from "lucide-react";

export default function Methodology() {
  const t = useTranslations("methodology");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const steps = [
    { num: "01", key: "step1", icon: <Search size={28} /> },
    { num: "02", key: "step2", icon: <Zap size={28} /> },
    { num: "03", key: "step3", icon: <Code size={28} /> },
    { num: "04", key: "step4", icon: <ShieldCheck size={28} /> },
    { num: "05", key: "step5", icon: <Users size={28} /> },
    { num: "06", key: "step6", icon: <TrendingUp size={28} /> },
  ];

  return (
    <section className="methodology-section" style={{ padding: '120px 0', position: 'relative', background: 'var(--techguru-black)' }}>
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
                        <span>{t("subtitle")}</span>
                    </h2>
                </AnimatedTitle>
            </div>

            <div className="row mt-5 pt-4">
                {steps.map((step, index) => (
                    <div key={index} className="col-xl-4 col-lg-6 col-md-6 mb-4 wow fadeInUp" data-wow-delay={`${index * 100}ms`}>
                        <div style={{
                            padding: '40px',
                            background: 'rgba(255, 255, 255, 0.02)',
                            borderRadius: '30px',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            height: '100%',
                            position: 'relative',
                            transition: 'all 0.3s ease',
                            textAlign: isRtl ? 'right' : 'left',
                            zIndex: 1
                        }}
                        className="methodology-card"
                        >
                            <div style={{
                                position: 'absolute',
                                top: '30px',
                                [isRtl ? 'left' : 'right']: '40px',
                                fontSize: '60px',
                                fontWeight: '900',
                                color: 'rgba(255, 255, 255, 0.03)',
                                lineHeight: '1',
                                pointerEvents: 'none'
                            }}>
                                {step.num}
                            </div>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '15px',
                                background: 'linear-gradient(270deg, #5CB0E9 0%, #3D72FC 100%)',
                                color: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '25px',
                                fontSize: '24px',
                                fontWeight: '700'
                            }}>
                                {step.icon}
                            </div>
                            <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '15px' }}>
                                {t(`${step.key}.title`)}
                            </h3>
                            <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.7', margin: 0 }}>
                                {t(`${step.key}.desc`)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row mt-5 pt-4">
                {[
                    { key: "stats_1", icon: <Calendar size={24} /> },
                    { key: "stats_2", icon: <Zap size={24} /> },
                    { key: "stats_3", icon: <ShieldCheck size={24} /> },
                    { key: "stats_4", icon: <Award size={24} /> },
                ].map((stat, index) => (
                    <div key={index} className="col-xl-3 col-lg-6 col-md-6 mb-4 wow fadeInUp" data-wow-delay={`${200 + index * 100}ms`}>
                        <div style={{
                            padding: '25px',
                            background: 'rgba(255, 255, 255, 0.01)',
                            borderRadius: '20px',
                            border: '1px solid rgba(223, 153, 90, 0.1)',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            transition: 'all 0.3s ease',
                        }}
                        className="stat-card"
                        >
                            <div style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                background: 'rgba(223, 153, 90, 0.1)',
                                color: 'var(--techguru-base)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '15px'
                            }}>
                                {stat.icon}
                            </div>
                            <h4 style={{ fontSize: '24px', fontWeight: '800', color: '#fff', marginBottom: '5px' }}>
                                {t(`${stat.key}_title`)}
                            </h4>
                            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)', margin: 0, lineHeight: '1.5' }}>
                                {t(`${stat.key}_text`)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <style jsx>{`
            .methodology-card:hover {
                transform: translateY(-5px);
                background: rgba(61, 114, 252, 0.05) !important;
                border-color: rgba(61, 114, 252, 0.3) !important;
                box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
            }
            .stat-card:hover {
                transform: translateY(-3px);
                background: rgba(223, 153, 90, 0.05) !important;
                border-color: rgba(223, 153, 90, 0.3) !important;
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            }
        `}</style>
    </section>
  );
}
