'use client'
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link";
import Image from "next/image";
import "swiper/css/effect-fade";
import SliderBrand from "./SliderBrand";
import { useTranslations, useLocale } from "next-intl";
import { Linkedin, Instagram, Zap } from "lucide-react";

const XIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill={color}/>
  </svg>
);

export default function Banner() {
    const t = useTranslations("banner");
    const locale = useLocale();
    const isRtl = locale === 'ar';

    const swiperOptions = {
        modules: [Autoplay, EffectFade],
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
    }

    return (
        <>
            <section className="main-slider-two" style={{ position: 'relative' }}>
                <style jsx>{`
                    @keyframes bannerContentFadeIn {
                        from { opacity: 0; transform: translateY(30px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .banner-text-content-wrapper {
                        animation: bannerContentFadeIn 1s ease-out forwards;
                        position: relative;
                        z-index: 10;
                    }
                    @keyframes fadeInUpBadge {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    :global(.badge-item) {
                        animation: fadeInUpBadge 0.6s ease forwards;
                        opacity: 0;
                    }
                    .static-overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        pointer-events: none;
                        display: flex;
                        align-items: center;
                        z-index: 5;
                    }
                    .static-overlay :global(.container),
                    .static-overlay :global(.thm-btn),
                    .static-overlay :global(a) {
                        pointer-events: auto;
                    }
                    :global(.main-slider-two__sub-title-box),
                    :global(.main-slider-two__title),
                    :global(.main-slider-two__text),
                    :global(.main-slider-two__btns-box) {
                        opacity: 1 !important;
                        transform: none !important;
                        visibility: visible !important;
                    }
                    :global(.main-slider-two__btns-box) {
                        position: relative;
                        z-index: 10;
                    }
                `}</style>

                {/* Background Carousel */}
                <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider" key={locale}>
                    {["/banner1.jpg", "/banner2.jpg", "/banner3.jpg"].map((img) => (
                        <SwiperSlide key={img}>
                            <div className="swiper-slide">
                                <div className="main-slider-two__bg"
                                    style={{ backgroundImage: `url(${img})` }}></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Static Content and Shapes (Animate once on load) */}
                <div className="static-overlay">
                    <div className="main-slider-two__shape-1"></div>
                    <div className="main-slider-two__shape-2 float-bob-x">
                        <Image
                          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
                          alt="Abstract technology shape"
                          width={588}
                          height={519}
                          priority
                        />
                    </div>
                    <div className="main-slider-two__shape-3 float-bob-y">
                        <Image
                          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop"
                          alt="Abstract technology shape"
                          width={381}
                          height={582}
                          priority
                        />
                    </div>

                    <div className="main-slider-two__social-box">
                        <h4 className="main-slider-two__social-title">{t("follow_us_text") || "Follow Us:"}</h4>
                        <div className="main-slider-two__social-box-inner">
                            <Link href="https://www.linkedin.com/company/agenticaids/"><Linkedin size={20} color="white" /></Link>
                            <Link href="https://x.com/AgenticAI215463"><XIcon size={18} color="white" /></Link>
                            <Link href="https://www.instagram.com/ag_entic_ai/"><Instagram size={20} color="white" /></Link>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                <div className="main-slider-two__content">
                                    <div className="banner-text-content-wrapper">
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '15px', justifyContent: isRtl ? 'flex-start' : 'flex-start' }}>
                                            <div className="main-slider-two__sub-title-box" style={{ 
                                                display: 'inline-flex', 
                                                alignItems: 'center',
                                                background: 'rgba(255, 255, 255, 0.08)',
                                                padding: '8px 16px',
                                                borderRadius: '30px',
                                                border: '1px solid rgba(255, 255, 255, 0.5)'
                                            }}>
                                                <p className="main-slider-two__sub-title" style={{ 
                                                    fontWeight: isRtl ? '800' : '600', 
                                                    fontSize: isRtl ? '15px' : '14px',
                                                    lineHeight: '1',
                                                    color: '#fff',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.1em',
                                                    margin: 0
                                                }}>{t("sub_title")}</p>
                                            </div>
                                            
                                            <div className="main-slider-two__sub-title-box" style={{ 
                                                display: 'inline-flex', 
                                                alignItems: 'center',
                                                background: 'rgba(255, 255, 255, 0.08)',
                                                padding: '8px 16px',
                                                borderRadius: '30px',
                                                border: '1px solid rgba(255, 255, 255, 0.5)'
                                            }}>
                                                <p className="main-slider-two__sub-title" style={{ 
                                                    fontWeight: isRtl ? '800' : '600', 
                                                    fontSize: isRtl ? '15px' : '14px',
                                                    lineHeight: '1',
                                                    color: 'var(--techguru-base)',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.05em',
                                                    margin: 0
                                                }}>{t("sub_title_extra")}</p>
                                            </div>
                                        </div>
                                        <h2 className="main-slider-two__title" style={{
                                            fontSize: isRtl ? 'clamp(32px, 4.5vw, 65px)' : 'clamp(36px, 5vw, 75px)',
                                            fontWeight: '900',
                                            textTransform: 'uppercase',
                                            lineHeight: '1.15',
                                            background: 'linear-gradient(90deg, #844584 0%, #BD565A 50%, #DF995A 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            color: 'transparent',
                                            display: 'block',
                                            width: '100%',
                                            marginBottom: '5px'
                                        }}>
                                            {t("title")}
                                        </h2>
                                        <h3 style={{
                                            fontSize: isRtl ? '30px' : '28px',
                                            fontWeight: '600',
                                            color: 'var(--techguru-white)',
                                            marginTop: '5px',
                                            marginBottom: '20px',
                                            letterSpacing: '0.02em',
                                            display: 'block',
                                            width: '100%'
                                        }}>
                                            {t("layer")}
                                        </h3>
                                        <p className="main-slider-two__text">
                                            {t("text").split('\n').map((line: string, i: number) => (
                                                <span key={i}>{line}{i === 0 && <br />}</span>
                                            ))}
                                        </p>
                                        <div className="main-slider-two__badges-list" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '35px', marginTop: '25px', justifyContent: isRtl ? 'flex-start' : 'flex-start' }}>
                                            {[
                                                { key: 'private_offices', default: 'Private Offices' },
                                                { key: 'family_businesses', default: 'Family Businesses' },
                                                { key: 'real_estate', default: 'Real Estate' },
                                                // { key: 'construction', default: 'Construction' },
                                                { key: 'government', default: 'Government' }
                                            ].map((badge, index) => (
                                                <span key={index} 
                                                    className="badge-item"
                                                    style={{
                                                        padding: '6px 16px',
                                                        background: 'rgba(255, 255, 255, 0.05)',
                                                        border: '1px solid rgba(255, 255, 255, 0.15)',
                                                        borderRadius: '50px',
                                                        color: 'rgba(255, 255, 255, 0.9)',
                                                        fontSize: '11px',
                                                        fontWeight: '600',
                                                        letterSpacing: '0.08em',
                                                        textTransform: 'uppercase',
                                                        backdropFilter: 'blur(4px)',
                                                        display: 'inline-block',
                                                        animationDelay: `${0.8 + index * 0.1}s`
                                                    }}>
                                                    {t(`badges.${badge.key}`) || badge.default}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="main-slider-two__btns-box" style={{ justifyContent: isRtl ? 'flex-start' : 'flex-start', display: 'flex' }}>
                                            <div className="main-slider-two__btn-box-1" style={{ pointerEvents: 'auto' }}>
                                                <Link href="/contact" className="thm-btn" style={{ height: '48px', lineHeight: '48px', padding: '0 30px', display: 'inline-flex', alignItems: 'center' }}>{t("btn")}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
