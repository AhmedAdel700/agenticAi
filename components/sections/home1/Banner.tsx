'use client'
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link";
import Image from "next/image";
import "swiper/css/effect-fade";
import SliderBrand from "./SliderBrand";
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
  return (
    <>
        <section className="main-slider-two">
            <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="main-slider-two__bg"
                            style={{ backgroundImage: "url(/assets/images/banner/ai-banner.png)" }}></div>

                        <div className="main-slider-two__social-box">
                            <h4 className="main-slider-two__social-title">Follow Us:</h4>
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
                                <div className="col-xl-12">
                                    <div className="main-slider-two__content">
                                        <div className="main-slider-two__sub-title-box">

                                            <p className="main-slider-two__sub-title">Agentic Ai for real institutions</p>
                                        </div>
                                        <h2 className="main-slider-two__title">
                                            Autonomous Intelligence<br />for Agentic Operations
                                        </h2>
                                        <p className="main-slider-two__text">
                                            We engineer autonomous operating layers on top of your existing systems —<br />
                                            they execute, govern, and scale without continuous human intervention
                                        </p>
                                        <div className="main-slider-two__badges-list" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '35px', marginTop: '25px' }}>
                                            {['Private Offices', 'Family Businesses', 'Real Estate', 'Construction', 'Government'].map((badge, index) => (
                                                <span key={index} style={{
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
                                                    display: 'inline-block'
                                                }}>
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="main-slider-two__btns-box">
                                            <div className="main-slider-two__btn-box-1">
                                                <Link href="/contact" className="thm-btn">Let&apos;s Talk<span
                                                        className="icon-right-arrow"></span></Link>
                                            </div>
                                            <div className="main-slider-two__btn-box-2"></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="main-slider-two__nav">
                    <div className="swiper-button-prev" id="main-slider__swiper-button-next">
                        <i className="icon-right-up"></i>
                    </div>
                    <div className="swiper-button-next" id="main-slider__swiper-button-prev">
                        <i className="icon-right-up"></i>
                    </div>
                </div>
            </Swiper>
        </section>
    </>
  )
}
