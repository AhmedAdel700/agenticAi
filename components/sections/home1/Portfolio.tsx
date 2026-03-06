'use client'

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image";
import Link from "next/link";
import AnimatedTitle from "@/components/elements/AnimatedTitle";
import { useTranslations, useLocale } from "next-intl";

export default function Portfolio() {
    const t = useTranslations('portfolio');
    const locale = useLocale();
    const isRtl = locale === 'ar';

    // Mobile swiper: one card per slide
    const mobileSwiperOptions = {
        modules: [Autoplay, Pagination],
        slidesPerView: 1 as const,
        spaceBetween: 20,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        loop: true,
        dir: isRtl ? 'rtl' : 'ltr' as 'rtl' | 'ltr',
        pagination: {
            clickable: true,
        },
    };

    // Desktop swiper: groups of 4 (the accordion slide)
    const desktopSwiperOptions = {
        modules: [Autoplay, Navigation, Pagination],
        slidesPerView: 1 as const,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        dir: isRtl ? 'rtl' : 'ltr' as 'rtl' | 'ltr',
        navigation: false,
        pagination: false,
    };

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(12);

    const slides = [
        { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop" },
        { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop" },
        { src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop" },
        { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop" },
        { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop" },
        { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop" },
        { src: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1600&auto=format&fit=crop" },
        { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop" },
    ];

    const items = [
        { key: 'item1', bg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", idx: 0 },
        { key: 'item2', bg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop", idx: 1 },
        { key: 'item3', bg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop", idx: 2 },
        { key: 'item4', bg: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop", idx: 3 },
        { key: 'item5', bg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", idx: 4 },
        { key: 'item6', bg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop", idx: 5 },
        { key: 'item7', bg: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800&auto=format&fit=crop", idx: 6 },
        { key: 'item8', bg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop", idx: 7 },
    ];

    const slide1Items = items.slice(0, 4);
    const slide2Items = items.slice(4, 8);

    const renderCard = (item: typeof items[0], i: number, groupOffset: number) => (
        <div className="portfolio-mobile-card"
            style={{ backgroundImage: `url(${item.bg})` }}
            onClick={() => { setIndex(item.idx); setOpen(true); }}
        >
            <div className="portfolio-mobile-card__overlay" />
            <div className="portfolio-mobile-card__content">
                <h3 className="portfolio-mobile-card__title">
                    {t(`${item.key}.title` as Parameters<typeof t>[0])}
                </h3>
                <p className="portfolio-mobile-card__text">
                    {t(`${item.key}.text` as Parameters<typeof t>[0])}
                </p>
                <div className="portfolio-mobile-card__icon">
                    <span className={`icon-right-arrow-1${isRtl ? ' flip-icon' : ''}`}></span>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <style>{`
                /* Shared fixes */
                .portfolio-two__box li {
                    transition: flex 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
                }
                .portfolio-two__box-content {
                    filter: none !important;
                }
                .portfolio-two__shape-2, .portfolio-two__shape-3, .portfolio-two__shape-4 {
                    display: none !important;
                }

                /* Mobile card styles */
                .portfolio-mobile-card {
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    height: 420px;
                    background-size: cover;
                    background-position: center;
                    cursor: pointer;
                }
                .portfolio-mobile-card__overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(5,23,61,0) 30%, rgba(5,23,61,0.95) 100%);
                    border-radius: 20px;
                }
                .portfolio-mobile-card__content {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 24px;
                    z-index: 2;
                }
                .portfolio-mobile-card__title {
                    font-size: 22px;
                    font-weight: 700;
                    color: #fff;
                    margin-bottom: 8px;
                    line-height: 1.3;
                }
                .portfolio-mobile-card__text {
                    font-size: 14px;
                    color: rgba(255,255,255,0.8);
                    margin-bottom: 16px;
                    line-height: 1.5;
                }
                .portfolio-mobile-card__icon {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: linear-gradient(270deg, #5CB0E9 0%, #3D72FC 100%);
                    font-size: 16px;
                    color: #fff;
                }

                /* Mobile swiper pagination */
                .portfolio-mobile-swiper .swiper-pagination {
                    position: relative;
                    margin-top: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                }
                .portfolio-mobile-swiper .swiper-pagination-bullet {
                    width: 8px;
                    height: 8px;
                    background: rgba(255,255,255,0.3);
                    border-radius: 50%;
                    opacity: 1;
                    transition: all 0.3s ease;
                }
                .portfolio-mobile-swiper .swiper-pagination-bullet-active {
                    background: linear-gradient(270deg, #5CB0E9 0%, #3D72FC 100%);
                    width: 24px;
                    border-radius: 4px;
                }

                /* Show/hide by breakpoint */
                .portfolio-mobile-view { display: block; }
                .portfolio-desktop-view { display: none; }

                @media (min-width: 768px) {
                    .portfolio-mobile-view { display: none; }
                    .portfolio-desktop-view { display: block; }
                }
            `}</style>

            <section className="portfolio-two" id="portfolio" dir={isRtl ? 'rtl' : 'ltr'}>
                <div className="portfolio-two__shape-1 float-bob-y" style={{ filter: 'none' }}>
                    <Image
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
                        alt="Abstract technology background"
                        width={783}
                        height={1104}
                        priority
                    />
                </div>
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline">{t('tagline')}</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title title-animation">
                                {t('title')}<br />
                                <span>{t('subtitle')}</span>
                            </h2>
                        </AnimatedTitle>
                    </div>

                    {/* ── MOBILE: one card per swipe ── */}
                    <div className="portfolio-mobile-view">
                        <Swiper
                            {...mobileSwiperOptions}
                            className="portfolio-mobile-swiper"
                            key={`mobile-${locale}`}
                        >
                            {items.map((item, i) => (
                                <SwiperSlide key={item.key}>
                                    {renderCard(item, i, 0)}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* ── DESKTOP: accordion group slides ── */}
                    <div className="portfolio-desktop-view">
                        <div className="portfolio-two__carousel-container">
                            <Swiper {...desktopSwiperOptions} className="portfolio-two__carousel" key={`desktop-${locale}`}>
                                <SwiperSlide key="slide-1">
                                    <div className="item">
                                        <div className="portfolio-two__single-box">
                                            <ul className="portfolio-two__box list-unstyled">
                                                {slide1Items.map((item, i) => (
                                                    <li key={item.key}
                                                        className={activeIndex === 12 + i ? "active" : ""}
                                                        onMouseEnter={() => setActiveIndex(12 + i)}
                                                        style={{
                                                            flex: activeIndex === 12 + i ? (isRtl ? '1.5' : '1.9') : '1',
                                                            transition: 'flex 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                            willChange: 'flex'
                                                        }}>
                                                        <div className="portfolio-two__box-content">
                                                            <div className="single-portfolio-two__bg"
                                                                style={{ backgroundImage: `url(${item.bg})` }}>
                                                            </div>
                                                            <div className="portfolio-two__title">
                                                                <h3>{t(`${item.key}.title` as Parameters<typeof t>[0])}</h3>
                                                            </div>
                                                            <div className="portfolio-two__content-box">
                                                                <div onClick={() => { setIndex(item.idx); setOpen(true); }} className="portfolio-two__icon">
                                                                    <Link href="#" className="img-popup" onClick={(e) => e.preventDefault()}>
                                                                        <span className={`icon-right-arrow-1${isRtl ? ' flip-icon' : ''}`}></span>
                                                                    </Link>
                                                                </div>
                                                                <div className={`portfolio-two__title-box${isRtl ? ' text-right' : ''}`}>
                                                                    <h3 className="portfolio-two__title-2">{t(`${item.key}.title` as Parameters<typeof t>[0])}</h3>
                                                                    <p className="portfolio-two__text">{t(`${item.key}.text` as Parameters<typeof t>[0])}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide key="slide-2">
                                    <div className="item">
                                        <div className="portfolio-two__single-box">
                                            <ul className="portfolio-two__box list-unstyled">
                                                {slide2Items.map((item, i) => (
                                                    <li key={item.key}
                                                        className={activeIndex === 16 + i ? "active" : ""}
                                                        onMouseEnter={() => setActiveIndex(16 + i)}
                                                        style={{
                                                            flex: activeIndex === 16 + i ? (isRtl ? '1.5' : '1.9') : '1',
                                                            transition: 'flex 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                            willChange: 'flex'
                                                        }}>
                                                        <div className="portfolio-two__box-content">
                                                            <div className="single-portfolio-two__bg"
                                                                style={{ backgroundImage: `url(${item.bg})` }}>
                                                            </div>
                                                            <div className="portfolio-two__title">
                                                                <h3>{t(`${item.key}.title` as Parameters<typeof t>[0])}</h3>
                                                            </div>
                                                            <div className="portfolio-two__content-box">
                                                                <div onClick={() => { setIndex(item.idx); setOpen(true); }} className="portfolio-two__icon">
                                                                    <Link href="#" className="img-popup" onClick={(e) => e.preventDefault()}>
                                                                        <span className={`icon-right-arrow-1${isRtl ? ' flip-icon' : ''}`}></span>
                                                                    </Link>
                                                                </div>
                                                                <div className={`portfolio-two__title-box${isRtl ? ' text-right' : ''}`}>
                                                                    <h3 className="portfolio-two__title-2">{t(`${item.key}.title` as Parameters<typeof t>[0])}</h3>
                                                                    <p className="portfolio-two__text">{t(`${item.key}.text` as Parameters<typeof t>[0])}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                </div>
                <Lightbox
                    open={open}
                    index={index}
                    close={() => setOpen(false)}
                    slides={slides}
                />
            </section>
        </>
    )
}