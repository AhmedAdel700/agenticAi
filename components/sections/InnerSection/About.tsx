"use client";
import Image from "next/image";
import AnimatedTitle from "@/components/elements/AnimatedTitle";
import { useTranslations, useLocale } from "next-intl";

export default function About() {
  const t = useTranslations("about_mission");
  const locale = useLocale();
  const isRtl = locale === 'ar';

  return (
    <>
        <section className="about-four" style={{ textAlign: isRtl ? 'right' : 'left' }}>
            <div className="container">
                <div className="row" style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                    <div className="col-xl-6">
                        <div className={`about-four__left wow ${isRtl ? 'slideInRight' : 'slideInLeft'}`}
                            data-wow-delay="100ms"
                            data-wow-duration="2500ms">
                            <div className="about-four__img-box">
                                <div className="about-four__img">
                                    <Image
                                      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1100&auto=format&fit=crop"
                                      alt="Enterprise control room with data visualizations"
                                      width={480}
                                      height={550}
                                      priority
                                      style={{ objectFit: 'cover', borderRadius: '40px' }}
                                    />
                                </div>

                                <div className="about-four__experience" style={{ left: isRtl ? 'auto' : '-45px', right: isRtl ? '-45px' : 'auto' }}>
                                    <div className="about-four__experience-inner">
                                        <div className="about-four__experience-count-box">
                                            <h3 className="odometer">10x</h3>
                                        </div>
                                        <p className="about-four__experience-count-text">
                                            {t("efficiency").split(' ').map((word, i) => (
                                                <span key={i}>{word}<br /></span>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <ul className="about-four__points-2 list-unstyled" style={{ marginTop: '40px' }}>
                                <li style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                    <div className="icon" style={{ [isRtl ? 'marginLeft' : 'marginRight']: '20px' }}>
                                        <span className="icon-technical-support"></span>
                                    </div>
                                    <div className="content">
                                        <h5>{t("solutions1.title")}</h5>
                                        <p>{t("solutions1.desc")}</p>
                                    </div>
                                </li>
                                <li style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                    <div className="icon" style={{ [isRtl ? 'marginLeft' : 'marginRight']: '20px' }}>
                                        <span className="icon-real-estate-agency"></span>
                                    </div>
                                    <div className="content">
                                        <h5>{t("solutions2.title")}</h5>
                                        <p>{t("solutions2.desc")}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-four__right">
                            <div className={`section-title ${isRtl ? 'text-right' : 'text-left'} sec-title-animation animation-style2`} style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                <div className="section-title__tagline-box" style={{ justifyContent: 'flex-start' }}>
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline">{t("tagline")}</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                <h2 className="section-title__title title-animation">
                                    {t("title1")}<br />
                                    <span>{t("title2")}</span>
                                </h2>
                                </AnimatedTitle>
                            </div>
                            <p className="about-four__text" style={{ 
                                padding: '30px', 
                                background: 'rgba(255, 255, 255, 0.03)', 
                                backdropFilter: 'blur(15px)', 
                                borderRadius: '30px', 
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                                marginBottom: '30px',
                                textAlign: isRtl ? 'right' : 'left'
                            }}>
                                {t("text")}
                            </p>
                            <div className="about-four__points-box">
                                <ul className="about-four__points-list list-unstyled" style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: 0, padding: 0 }}>
                                    <li style={{ 
                                        padding: '12px 25px', 
                                        background: 'rgba(255, 255, 255, 0.03)', 
                                        backdropFilter: 'blur(12px)', 
                                        borderRadius: '20px', 
                                        border: '1px solid rgba(255, 255, 255, 0.06)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '15px',
                                        width: '100%',
                                        margin: 0
                                    }}>
                                        <div className="icon" style={{ marginBottom: 0 }}>
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <p style={{ margin: 0 }}>{t("points.point1")}</p>
                                    </li>
                                    <li style={{ 
                                        padding: '12px 25px', 
                                        background: 'rgba(255, 255, 255, 0.03)', 
                                        backdropFilter: 'blur(12px)', 
                                        borderRadius: '20px', 
                                        border: '1px solid rgba(255, 255, 255, 0.06)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '15px',
                                        width: '100%',
                                        margin: 0
                                    }}>
                                        <div className="icon" style={{ marginBottom: 0 }}>
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <p style={{ margin: 0 }}>{t("points.point2")}</p>
                                    </li>
                                    <li style={{ 
                                        padding: '12px 25px', 
                                        background: 'rgba(255, 255, 255, 0.03)', 
                                        backdropFilter: 'blur(12px)', 
                                        borderRadius: '20px', 
                                        border: '1px solid rgba(255, 255, 255, 0.06)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '15px',
                                        width: '100%',
                                        margin: 0
                                    }}>
                                        <div className="icon" style={{ marginBottom: 0 }}>
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <p style={{ margin: 0 }}>{t("points.point3")}</p>
                                    </li>
                                    <li style={{ 
                                        marginTop: '4px',
                                        padding: '20px 25px', 
                                        background: 'rgba(0, 163, 255, 0.05)', 
                                        backdropFilter: 'blur(10px)', 
                                        borderRadius: '24px', 
                                        border: '1px solid rgba(0, 163, 255, 0.2)',
                                        width: '100%',
                                        marginLeft: 0,
                                        marginRight: 0,
                                        marginBottom: 0,
                                        textAlign: isRtl ? 'right' : 'left'
                                    }}>
                                        <div className="about-four__points-list-content">
                                            <p style={{ margin: 0, color: '#fff', fontSize: '16px', fontWeight: '500', lineHeight: '1.6', textAlign: isRtl ? 'right' : 'left' }}>
                                                {t("founded", { brand: "Agentic Ai" })}
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
