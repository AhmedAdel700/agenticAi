'use client'
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link";
import Image from "next/image";
import "swiper/css/effect-fade";
import SliderBrand from "./SliderBrand";
import { useTranslations, useLocale } from "next-intl";
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation, EffectFade],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    effect: "fade", // enables fade transition
    fadeEffect: {
        crossFade: true, // smooth fade between slides
    },

    // Navigation
    navigation: {
        nextEl: '#main-slider__swiper-button-next',
        prevEl: '#main-slider__swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
}

export default function Banner() {
    const t = useTranslations("banner");
    const locale = useLocale();
    const isRtl = locale === 'ar';

    return (
        <>
            <section className="main-slider-two">
                <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="main-slider-two__bg"
                                style={{ backgroundImage: "url(/assets/images/banner/ai-banner.png)" }}></div>

                            <div className="main-slider-two__social-box">
                                <h4 className="main-slider-two__social-title">{t("follow_us_text") || "Follow Us:"}</h4>
                                <div className="main-slider-two__social-box-inner">
                                    <Link href="https://www.linkedin.com/company/agenticaids/"><span className="icon-linkedin"></span></Link>
                                    <Link href="https://x.com/AgenticAI215463"><span className="icon-dribble"></span></Link>
                                    <Link href="https://www.instagram.com/ag_entic_ai/"><span className="icon-facebook"></span></Link>
                                </div>
                            </div>


                            
                            <div className="main-slider-two__shape-1"></div>
                            <div className="main-slider-two__shape-2 float-bob-x">
                                <Image src="/assets/images/shapes/main-slider-two-shape-2.png" alt="shape" width={588} height={519} priority />
                            </div>
                            <div className="main-slider-two__shape-3 float-bob-y">
                                <Image src="/assets/images/shapes/main-slider-two-shape-3.png" alt="shape" width={381} height={582} priority />
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                        <div className="main-slider-two__content">
                                            <div className="main-slider-two__sub-title-box" style={{ justifyContent: isRtl ? 'flex-start' : 'flex-start' }}>

                                                <p className="main-slider-two__sub-title">{t("sub_title")}</p>
                                            </div>
                                            <h2 className="main-slider-two__title">
                                                {t("title").split('\n').map((line: string, i: number) => (
                                                    <span key={i}>{line}{i === 0 && <br />}</span>
                                                ))}
                                            </h2>
                                            <p className="main-slider-two__text">
                                                {t("text").split('\n').map((line: string, i: number) => (
                                                    <span key={i}>{line}{i === 0 && <br />}</span>
                                                ))}
                                            </p>
                                            <div className="main-slider-two__badges-list" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '35px', marginTop: '25px', justifyContent: isRtl ? 'flex-start' : 'flex-start' }}>
                                                <style jsx>{`
                                                    @keyframes fadeInUpBadge {
                                                        from {
                                                            opacity: 0;
                                                            transform: translateY(20px);
                                                        }
                                                        to {
                                                            opacity: 1;
                                                            transform: translateY(0);
                                                        }
                                                    }
                                                    .badge-item {
                                                        animation: fadeInUpBadge 0.6s ease forwards;
                                                        opacity: 0;
                                                    }
                                                `}</style>
                                                {[
                                                    { key: 'private_offices', default: 'Private Offices' },
                                                    { key: 'family_businesses', default: 'Family Businesses' },
                                                    { key: 'real_estate', default: 'Real Estate' },
                                                    { key: 'construction', default: 'Construction' },
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
                                                <div className="main-slider-two__btn-box-1">
                                                    <Link href="/contact" className="thm-btn">{t("btn")}</Link>
                                                </div>
                                                <div className="main-slider-two__btn-box-2"></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="main-slider-two__nav" style={{ direction: 'ltr' }}>
                        <div className="swiper-button-prev" id="main-slider__swiper-button-next" style={{ transform: isRtl ? 'scaleX(-1)' : 'none' }}>
                            <i className="icon-right-up"></i>
                        </div>
                        <div className="swiper-button-next" id="main-slider__swiper-button-prev" style={{ transform: isRtl ? 'scaleX(-1)' : 'none' }}>
                            <i className="icon-right-up"></i>
                        </div>
                    </div>
                </Swiper>
            </section>
        </>
    )
}
