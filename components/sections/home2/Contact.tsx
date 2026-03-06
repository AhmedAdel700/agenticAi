"use client";

import Link from "next/link";
import AnimatedTitle from "@/components/elements/AnimatedTitle";
import ContactForm from "@/components/elements/ContactForm";
import { useTranslations, useLocale } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact_page");
  const locale = useLocale();
  const isRtl = locale === 'ar';

  return (
    <>
        <section className="contact-one" id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Effects */}
            <div className="about-four__bg-shape"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop)", position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.4, pointerEvents: 'none' }}></div>
            <div className="about-four__bg-shape-2"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop)", position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', opacity: 0.4, pointerEvents: 'none' }}></div>
            
            {/* Custom Glow Effects */}
            <div style={{ 
                position: 'absolute', 
                top: '20%', 
                left: '10%', 
                width: '400px', 
                height: '400px', 
                background: 'radial-gradient(circle, rgba(0, 163, 255, 0.15) 0%, rgba(0, 163, 255, 0) 70%)', 
                filter: 'blur(60px)', 
                zIndex: 0,
                pointerEvents: 'none'
            }}></div>
            <div style={{ 
                position: 'absolute', 
                bottom: '10%', 
                right: '5%', 
                width: '500px', 
                height: '500px', 
                background: 'radial-gradient(circle, rgba(0, 163, 255, 0.1) 0%, rgba(0, 163, 255, 0) 70%)', 
                filter: 'blur(80px)', 
                zIndex: 0,
                pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row">
                    <div className="col-xl-6 col-lg-6" style={{ display: 'flex' }}>
                        <div className="contact-one__left wow slideInLeft" data-wow-delay="100ms"
                            data-wow-duration="2500ms" style={{ 
                                padding: '40px', 
                                background: 'rgba(255, 255, 255, 0.03)', 
                                backdropFilter: 'blur(15px)', 
                                borderRadius: '30px', 
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                                height: '100%',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                textAlign: isRtl ? 'right' : 'left'
                            }}>
                            <div className="contact-one__left-shape-1"></div>
                            <div className="contact-one__left-shape-2"></div>
                            <h3 className="contact-one__from-title">{useTranslations("contact_form")("help_title")}</h3>
                            <ContactForm/>
                            <div className="result"></div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6" style={{ display: 'flex' }}>
                        <div className="contact-one__right" style={{ 
                                padding: '40px', 
                                background: 'rgba(255, 255, 255, 0.03)', 
                                backdropFilter: 'blur(15px)', 
                                borderRadius: '30px', 
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                                height: '100%',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                textAlign: isRtl ? 'right' : 'left'
                            }}>
                            <div className={`section-title ${isRtl ? 'text-right' : 'text-left'} sec-title-animation animation-style2`}>
                            <div className="section-title__tagline-box">
                                <div className="section-title__tagline-shape-1"></div>
                                <span className="section-title__tagline">{t("tagline")}</span>
                                <div className="section-title__tagline-shape-2"></div>
                            </div>
                            <AnimatedTitle>
                            <h2 className="section-title__title title-animation">
                                {t("title")}<br />
                                <span>{t("sub_title")}</span>
                            </h2>
                            </AnimatedTitle>
                            </div>
                            <p className="contact-one__text">
                                {t("text")}
                            </p>
                            <ul className="contact-one__list list-unstyled" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                <li>
                                    <div className="icon">
                                        <span className="icon-pin"></span>
                                    </div>
                                    <div className="content">
                                        <h4>{t("headquarters")}</h4>
                                        <p>{useTranslations()("address")}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-mail"></span>
                                    </div>
                                    <div className="content">
                                        <h4>{t("email_us")}</h4>
                                        <p><Link href="mailto:info@agenticaids.ae">info@agenticaids.ae</Link></p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-phone-call"></span>
                                    </div>
                                    <div className="content">
                                        <h4>{t("contact")}</h4>
                                        <p>{t("mob")}: <Link href="tel:+971547111343">+971 54 711 1343</Link></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
