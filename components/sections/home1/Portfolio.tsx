'use client'

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image";
import Link from "next/link";
import AnimatedTitle from "@/components/elements/AnimatedTitle";
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.swiper-prev',
        prevEl: '.swiper-next',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
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

export default function Portfolio() {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const [activeIndex, setActiveIndex] = useState(12)

    // Collect all lightbox images in one array
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

  return (
    <>
        <section className="portfolio-two" id="portfolio">
            <div className="portfolio-two__shape-1 float-bob-y">
                <Image src="/assets/images/shapes/portfolio-two-shape-1.png" alt="Image" width={783} height={1104} priority />
            </div>
            <div className="portfolio-two__shape-2"></div>
            <div className="portfolio-two__shape-3"></div>
            <div className="portfolio-two__shape-4"></div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape-1"></div>
                        <span className="section-title__tagline">Strategic Impact</span>
                        <div className="section-title__tagline-shape-2"></div>
                    </div>
                    <AnimatedTitle>
                    <h2 className="section-title__title title-animation">
                        Enterprise Impact<br />
                        <span>Real outcomes from autonomous systems</span>
                    </h2>
                    </AnimatedTitle>
                </div>
                <div className="portfolio-two__carousel-container">
                    <Swiper {...swiperOptions} className="portfolio-two__carousel">
                        <SwiperSlide>
                            <div className="item">
                                <div className="portfolio-two__single-box">
                                    <ul className="portfolio-two__box list-unstyled">
                                        <li className={`${activeIndex === 12 ? "active" : ""}`} onMouseEnter={() => setActiveIndex(12)}>
                                            <div className="portfolio-two__box-content">
                                                <div className="single-portfolio-two__bg"
                                                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop)" }}>
                                                </div>
                                                <div className="portfolio-two__title">
                                                    <h3>Cost Efficiency</h3>
                                                </div>
                                                <div className="portfolio-two__content-box">
                                                    <div onClick={() => { setIndex(0); setOpen(true); }} className="portfolio-two__icon">
                                                        <Link href="#"
                                                            className="img-popup"><span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                    <div className="portfolio-two__title-box">
                                                        <h3 className="portfolio-two__title-2">
                                                            Cost Efficiency
                                                        </h3>
                                                        <p className="portfolio-two__text">
                                                            Measurable reduction in operational expenses within the
                                                            first deployment cycle.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={`${activeIndex === 13 ? "active" : ""}`} onMouseEnter={() => setActiveIndex(13)}>
                                            <div className="portfolio-two__box-content">
                                                <div className="single-portfolio-two__bg"
                                                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop)" }}>
                                                </div>
                                                <div className="portfolio-two__title">
                                                    <h3>Speed to Value</h3>
                                                </div>
                                                <div className="portfolio-two__content-box">
                                                    <div onClick={() => { setIndex(1); setOpen(true); }} className="portfolio-two__icon">
                                                        <Link href="#"
                                                            className="img-popup"><span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                    <div className="portfolio-two__title-box">
                                                        <h3 className="portfolio-two__title-2">
                                                            Speed to Value
                                                        </h3>
                                                        <p className="portfolio-two__text">
                                                            Faster execution of complex workflows — from weeks to minutes.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={`${activeIndex === 14 ? "active" : ""}`} onMouseEnter={() => setActiveIndex(14)}>
                                            <div className="portfolio-two__box-content">
                                                <div className="single-portfolio-two__bg"
                                                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop)" }}>
                                                </div>
                                                <div className="portfolio-two__title">
                                                    <h3>Continuous Governance</h3>
                                                </div>
                                                <div className="portfolio-two__content-box">
                                                    <div onClick={() => { setIndex(2); setOpen(true); }} className="portfolio-two__icon">
                                                        <Link href="#"
                                                            className="img-popup"><span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                    <div className="portfolio-two__title-box">
                                                        <h3 className="portfolio-two__title-2">
                                                            Continuous Governance
                                                        </h3>
                                                        <p className="portfolio-two__text">
                                                            Consistent, auditable execution across all governed operations.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={`${activeIndex === 15 ? "active" : ""}`} onMouseEnter={() => setActiveIndex(15)}>
                                            <div className="portfolio-two__box-content">
                                                <div className="single-portfolio-two__bg"
                                                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop)" }}>
                                                </div>
                                                <div className="portfolio-two__title">
                                                    <h3>Team Empowerment</h3>
                                                </div>
                                                <div className="portfolio-two__content-box">
                                                    <div onClick={() => { setIndex(3); setOpen(true); }} className="portfolio-two__icon">
                                                        <Link href="#"
                                                            className="img-popup"><span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                    <div className="portfolio-two__title-box">
                                                        <h3 className="portfolio-two__title-2">
                                                            Team Empowerment
                                                        </h3>
                                                        <p className="portfolio-two__text">
                                                            Free your team to focus on strategy instead of repetitive tasks.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <div className="portfolio-two__single-box">
                                    <ul className="portfolio-two__box list-unstyled">
                                        <li className={`${activeIndex === 16 ? "active" : ""}`} onMouseEnter={() => setActiveIndex(16)}>
                                            <div className="portfolio-two__box-content">
                                                <div className="single-portfolio-two__bg"
                                                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop)" }}>
                                                </div>
                                                <div className="portfolio-two__title">
                                                    <h3>Predictive Analytics</h3>
                                                </div>
                                                <div className="portfolio-two__content-box">
                                                    <div onClick={() => { setIndex(4); setOpen(true); }} className="portfolio-two__icon">
                                                        <Link href="#"
                                                            className="img-popup"><span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                    <div className="portfolio-two__title-box">
                                                        <h3 className="portfolio-two__title-2">
                                                            Predictive<br />
                                                            Analytics
                                                        </h3>
                                                        <p className="portfolio-two__text">Anticipate market shifts with real-time autonomous data modeling.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={`${activeIndex === 17 ? "active" : ""}`} onMouseEnter={() => setActiveIndex(17)}>
                                            <div className="portfolio-two__box-content">
                                                <div className="single-portfolio-two__bg"
                                                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop)" }}>
                                                </div>
                                                <div className="portfolio-two__title">
                                                    <h3>Autonomous Infrastructure</h3>
                                                </div>
                                                <div className="portfolio-two__content-box">
                                                    <div onClick={() => { setIndex(5); setOpen(true); }} className="portfolio-two__icon">
                                                        <Link href="#"
                                                            className="img-popup"><span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                    <div className="portfolio-two__title-box">
                                                        <h3 className="portfolio-two__title-2">Autonomous Infrastructure</h3>
                                                        <p className="portfolio-two__text">Self-healing systems that adapt to global demand dynamically.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={`${activeIndex === 18 ? "active" : ""}`} onMouseEnter={() => setActiveIndex(18)}>
                                            <div className="portfolio-two__box-content">
                                                <div className="single-portfolio-two__bg"
                                                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800&auto=format&fit=crop)" }}>
                                                </div>
                                                <div className="portfolio-two__title">
                                                    <h3>Intelligent Security</h3>
                                                </div>
                                                <div className="portfolio-two__content-box">
                                                    <div onClick={() => { setIndex(6); setOpen(true); }} className="portfolio-two__icon">
                                                        <Link href="#"
                                                            className="img-popup"><span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                    <div className="portfolio-two__title-box">
                                                        <h3 className="portfolio-two__title-2">Intelligent Security</h3>
                                                        <p className="portfolio-two__text">Continuous monitoring and proactive threat neutralization powered by AI.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={`${activeIndex === 19 ? "active" : ""}`} onMouseEnter={() => setActiveIndex(19)}>
                                            <div className="portfolio-two__box-content">
                                                <div className="single-portfolio-two__bg"
                                                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop)" }}>
                                                </div>
                                                <div className="portfolio-two__title">
                                                    <h3>Strategic Scalability</h3>
                                                </div>
                                                <div className="portfolio-two__content-box">
                                                    <div onClick={() => { setIndex(7); setOpen(true); }} className="portfolio-two__icon">
                                                        <Link href="#"
                                                            className="img-popup"><span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                    <div className="portfolio-two__title-box">
                                                        <h3 className="portfolio-two__title-2">Strategic Scalability</h3>
                                                        <p className="portfolio-two__text">Scale operations worldwide with consistent, automated precision.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                        <div className="swiper-pagination"></div>

                        <div className="swiper-nav">
                            <div className="swiper-prev"><span className="icon-right-up"></span></div>
                            <div className="swiper-next"><span className="icon-right-up"></span></div>
                        </div>
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