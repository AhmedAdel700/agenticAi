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

    const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        dir: isRtl ? 'rtl' : 'ltr',

        // Navigation
        navigation: false,

        // Pagination
        pagination: false,

        breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 30 },
            575: { slidesPerView: 1, spaceBetween: 30 },
            767: { slidesPerView: 1, spaceBetween: 30 },
            991: { slidesPerView: 1, spaceBetween: 30 },
            1199: { slidesPerView: 1, spaceBetween: 30 },
            1350: { slidesPerView: 1, spaceBetween: 30 },
        }
    }

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

    return (
        <>
            <section className="portfolio-two" id="portfolio" dir={isRtl ? 'rtl' : 'ltr'}>
                <div className="portfolio-two__shape-1 float-bob-y">
                    <Image src="/assets/images/shapes/portfolio-two-shape-1.png" alt="Image" width={783} height={1104} priority />
                </div>
                <div className="portfolio-two__shape-2"></div>
                <div className="portfolio-two__shape-3"></div>
                <div className="portfolio-two__shape-4"></div>
                <div className="container">
                    <div className={`section-title text-center sec-title-animation animation-style1`}>
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
                    <div className="portfolio-two__carousel-container">
                        <Swiper {...swiperOptions} className="portfolio-two__carousel" key={locale}>
                            <SwiperSlide key="slide-1">
                                <div className="item">
                                    <div className="portfolio-two__single-box">
                                        <ul className="portfolio-two__box list-unstyled">
                                            {slide1Items.map((item, i) => (
                                                <li key={item.key}
                                                    className={activeIndex === 12 + i ? "active" : ""}
                                                    onMouseEnter={() => setActiveIndex(12 + i)}>
                                                    <div className="portfolio-two__box-content">
                                                        <div className="single-portfolio-two__bg"
                                                            style={{ backgroundImage: `url(${item.bg})` }}>
                                                        </div>
                                                        <div className="portfolio-two__title">
                                                            <h3>{t(`${item.key}.title` as Parameters<typeof t>[0])}</h3>
                                                        </div>
                                                        <div className="portfolio-two__content-box">
                                                            <div onClick={() => { setIndex(item.idx); setOpen(true); }} className="portfolio-two__icon">
                                                                <Link href="#" className="img-popup">
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
                                                    onMouseEnter={() => setActiveIndex(16 + i)}>
                                                    <div className="portfolio-two__box-content">
                                                        <div className="single-portfolio-two__bg"
                                                            style={{ backgroundImage: `url(${item.bg})` }}>
                                                        </div>
                                                        <div className="portfolio-two__title">
                                                            <h3>{t(`${item.key}.title` as Parameters<typeof t>[0])}</h3>
                                                        </div>
                                                        <div className="portfolio-two__content-box">
                                                            <div onClick={() => { setIndex(item.idx); setOpen(true); }} className="portfolio-two__icon">
                                                                <Link href="#" className="img-popup">
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