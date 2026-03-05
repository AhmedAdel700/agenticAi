'use client'
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}

export default function Testimonial() {
  return (
    <>
        <section className="testimonial-two" id="testimonial">
            <div className="testimonial-two__shape-1"></div>
            <div className="testimonial-two__shape-2"></div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline">What Our Partners Say</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                    <AnimatedTitle>
                    <h2 className="section-title__title title-animation">
                        Enterprise outcomes<br />that <span>redefine scale</span>
                    </h2>
                    </AnimatedTitle>
                </div>
                <Swiper {...swiperOptions} className="testimonial-two__carousel">
                    <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-two__single">
                                <div className="testimonial-two__single-inner">
                                    <div className="testimonial-two__star">
                                        <span className="icon-pointed-star"></span>
                                        <span className="icon-pointed-star"></span>
                                        <span className="icon-pointed-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                    </div>
                                    <p className="testimonial-two__text">
                                        AGENTIC AI didn&apos;t just add AI to our workflow; they re-architected how we think
                                        about scale. Their operating platform reduced our institutional response time by 40%.
                                    </p>
                                </div>
                                <div className="testimonial-two__client-info">
                                    <div className="testimonial-two__client-img">
                                        <Image
                                          src="https://images.unsplash.com/photo-1544723795-3fb0b90cffc6?q=80&w=200&auto=format&fit=crop"
                                          alt="Portrait of Ahmed Al-Mansoori"
                                          width={60}
                                          height={60}
                                          priority
                                        />
                                    </div>
                                    <div className="testimonial-two__client-content">
                                        <h4 className="testimonial-two__client-name">
                                            <Link href="/testimonials">Ahmed Al-Mansoori</Link>
                                        </h4>
                                        <p className="testimonial-two__sub-title">Government Entity Executive</p>
                                    </div>
                                </div>
                                <div className="testimonial-two__quote">
                                    <span className="icon-right-quote"></span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-two__single">
                                <div className="testimonial-two__single-inner">
                                    <div className="testimonial-two__star">
                                        <span className="icon-pointed-star"></span>
                                        <span className="icon-pointed-star"></span>
                                        <span className="icon-pointed-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                    </div>
                                    <p className="testimonial-two__text">
                                        The precision of their AI agent orchestration is unparalleled. We shifted from
                                        fragmented automation to a cohesive, autonomous ecosystem in less than a year.
                                    </p>
                                </div>
                                <div className="testimonial-two__client-info">
                                    <div className="testimonial-two__client-img">
                                        <Image
                                          src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=200&auto=format&fit=crop"
                                          alt="Portrait of Fatima Al-Hashimi"
                                          width={60}
                                          height={60}
                                          priority
                                        />
                                    </div>
                                    <div className="testimonial-two__client-content">
                                        <h4 className="testimonial-two__client-name">
                                            <Link href="/testimonials">Fatima Al-Hashimi</Link>
                                        </h4>
                                        <p className="testimonial-two__sub-title">Transformation Lead</p>
                                    </div>
                                </div>
                                <div className="testimonial-two__quote">
                                    <span className="icon-right-quote"></span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-two__single">
                                <div className="testimonial-two__single-inner">
                                    <div className="testimonial-two__star">
                                        <span className="icon-pointed-star"></span>
                                        <span className="icon-pointed-star"></span>
                                        <span className="icon-pointed-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                    </div>
                                    <p className="testimonial-two__text">
                                        A strategic partnership that delivered more than technology. Their focus on
                                        governance and risk framework ensured our AI transformation was both robust and
                                        compliant.
                                    </p>
                                </div>
                                <div className="testimonial-two__client-info">
                                    <div className="testimonial-two__client-img">
                                        <Image
                                          src="https://images.unsplash.com/photo-1544723795-3fb0b9c9f9c9?q=80&w=200&auto=format&fit=crop"
                                          alt="Portrait of Khalid Al-Amiri"
                                          width={60}
                                          height={60}
                                          priority
                                        />
                                    </div>
                                    <div className="testimonial-two__client-content">
                                        <h4 className="testimonial-two__client-name">
                                            <Link href="/testimonials">Khalid Al-Amiri</Link>
                                        </h4>
                                        <p className="testimonial-two__sub-title">Board Member</p>
                                    </div>
                                </div>
                                <div className="testimonial-two__quote">
                                    <span className="icon-right-quote"></span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Extra slide removed to match AG testimonial data */}
                    <div className="swiper-pagination"></div>
                </Swiper>
            </div>
        </section>
    </>
  )
}
