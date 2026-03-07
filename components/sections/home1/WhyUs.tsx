"use client";
import { useTranslations, useLocale } from "next-intl";
import AnimatedTitle from "@/components/elements/AnimatedTitle";
import Image from "next/image";
import { Cpu, ShieldCheck, Landmark, GraduationCap, TrendingDown, Clock, Lightbulb, CheckCircle } from "lucide-react";

export default function WhyUs() {
  const t = useTranslations("why_us");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const points = [
    { icon: <Cpu size={24} />, title: t("point1_title"), text: t("point1_text") },
    { icon: <ShieldCheck size={24} />, title: t("point2_title"), text: t("point2_text") },
    { icon: <Landmark size={24} />, title: t("point3_title"), text: t("point3_text") },
    { icon: <GraduationCap size={24} />, title: t("point4_title"), text: t("point4_text") },
  ];

  const expects = [
    { icon: <TrendingDown size={20} />, text: t("expect1") },
    { icon: <Clock size={20} />, text: t("expect2") },
    { icon: <Lightbulb size={20} />, text: t("expect3") },
    { icon: <CheckCircle size={20} />, text: t("expect4") },
  ];

  return (
    <section className="why-us-section" style={{ 
        padding: '120px 0', 
        background: '#051129', 
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.03)',
        overflow: 'hidden'
    }}>
        <div style={{
            position: 'absolute',
            left: isRtl ? 'auto' : '-15%',
            right: isRtl ? '-15%' : 'auto',
            top: '10%',
            width: '600px',
            height: '600px',
            opacity: 0.5,
            filter: 'blur(120px)',
            background: 'radial-gradient(50% 50% at 50% 50%, #D866D4 0%, rgba(7, 12, 20, 0) 100%)',
            zIndex: 0,
            pointerEvents: 'none'
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="row align-items-center">
                <div className={`col-xl-6 col-lg-6 mb-5 mb-lg-0 ${isRtl ? 'order-lg-2' : ''}`}>
                    <div className={`section-title ${isRtl ? 'text-right' : 'text-left'} sec-title-animation animation-style1`}>
                        <div className="section-title__tagline-box" style={{ display: 'flex', width: '100%', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <div className="section-title__tagline-shape-1" style={{ display: isRtl ? 'none' : 'block' }}></div>
                            <span className="section-title__tagline">{t("tagline")}</span>
                            <div className="section-title__tagline-shape-2" style={{ display: isRtl ? 'none' : 'block' }}></div>
                            <div className="section-title__tagline-shape-1" style={{ display: isRtl ? 'block' : 'none' }}></div>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title title-animation" style={{ color: 'var(--techguru-base)' }}>
                                {t("title")}
                            </h2>
                        </AnimatedTitle>
                    </div>
                    
                    <div className="mt-5">
                        {points.map((point, index) => (
                            <div key={index} className="d-flex mb-4 align-items-start" style={{ gap: '20px' }}>
                                <div style={{ 
                                    minWidth: '60px', height: '60px', 
                                    background: 'rgba(92, 176, 233, 0.05)', 
                                    borderRadius: '16px', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    color: '#5CB0E9',
                                    border: '1px solid rgba(92, 176, 233, 0.1)'
                                }}>
                                    {point.icon}
                                </div>
                                <div style={{ textAlign: 'start' }}>
                                    <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>{point.title}</h4>
                                    <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>{point.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`col-xl-5 offset-xl-1 col-lg-6 ${isRtl ? 'order-lg-0' : ''}`}>
                    <div className={`section-title ${isRtl ? 'text-right' : 'text-left'} sec-title-animation animation-style1`}>
                        <div className="section-title__tagline-box" style={{ display: 'flex', width: '100%', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '20px' }}>
                            <div className="section-title__tagline-shape-1" style={{ display: isRtl ? 'none' : 'block' }}></div>
                            <span className="section-title__tagline">{t("subtitle")}</span>
                            <div className="section-title__tagline-shape-2" style={{ display: isRtl ? 'none' : 'block' }}></div>
                            <div className="section-title__tagline-shape-1" style={{ display: isRtl ? 'block' : 'none' }}></div>
                        </div>
                    </div>
                    
                    <div className="mt-5" style={{ 
                        padding: '50px 40px', 
                        background: 'rgba(255, 255, 255, 0.01)', 
                        borderRadius: '40px', 
                        border: '1px solid rgba(255, 255, 255, 0.03)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                    }}>
                        {expects.map((expect, index) => (
                            <div key={index} className="d-flex mb-4 align-items-start" style={{ gap: '15px' }}>
                                <div style={{ color: '#5CB0E9', marginTop: '3px' }}>
                                    {expect.icon}
                                </div>
                                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '17px', lineHeight: '1.5', margin: 0, textAlign: 'start' }}>
                                    {expect.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
