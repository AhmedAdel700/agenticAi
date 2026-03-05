'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image";
import Link from "next/link";
import AnimatedTitle from "@/components/elements/AnimatedTitle";
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
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
                        <span className="section-title__tagline">Testimonials</span>
                        <div className="section-title__tagline-shape-2"></div>
                    </div>
                    <AnimatedTitle>
                    <h2 className="section-title__title title-animation">Customer Experiences <br /> That <span>Speak
                            Volumes</span></h2>
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
                                        <span className="icon-pointed-star"></span>
                                        <span className="icon-pointed-star"></span>
                                    </div>
                                    <p className="testimonial-two__text">"Agentic Ai has revolutionized our document processing workflows. The speed and accuracy of their autonomous agents are truly institutional-grade for Abu Dhabi."</p>
                                </div>
                                <div className="testimonial-two__client-info">
                                    <div className="testimonial-two__client-img">
                                        <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" alt="Ahmed Al-Mansoori" width={64} height={64} priority style={{ borderRadius: '50%', objectFit: 'cover' }} />
                                    </div>
                                    <div className="testimonial-two__client-content">
                                        <h4 className="testimonial-two__client-name"><Link href="/testimonials">Ahmed Al-Mansoori</Link></h4>
                                        <p className="testimonial-two__sub-title">Director of Transformation</p>
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
                                        <span className="icon-pointed-star"></span>
                                        <span className="icon-pointed-star"></span>
                                    </div>
                                    <p className="testimonial-two__text">"The multi-agent orchestration provided by Agentic Ai is a game-changer for our operational efficiency across the GCC. Their systems actually execute work."</p>
                                </div>
                                <div className="testimonial-two__client-info">
                                    <div className="testimonial-two__client-img">
                                        <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" alt="Fatima Al-Hashimi" width={64} height={64} priority style={{ borderRadius: '50%', objectFit: 'cover' }} />
                                    </div>
                                    <div className="testimonial-two__client-content">
                                        <h4 className="testimonial-two__client-name"><Link href="/testimonials">Fatima Al-Hashimi</Link></h4>
                                        <p className="testimonial-two__sub-title">CTO, Al-Khalidiya Assets</p>
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
                                        <span className="icon-pointed-star"></span>
                                        <span className="icon-pointed-star"></span>
                                    </div>
                                    <p className="testimonial-two__text">"Ensuring UAE regulatory compliance is critical for us. Agentic Ai's built-in governance models made the transition to autonomous AI seamless and secure."</p>
                                </div>
                                <div className="testimonial-two__client-info">
                                    <div className="testimonial-two__client-img">
                                        <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" alt="Khalid bin Rashid" width={64} height={64} priority style={{ borderRadius: '50%', objectFit: 'cover' }} />
                                    </div>
                                    <div className="testimonial-two__client-content">
                                        <h4 className="testimonial-two__client-name"><Link href="/testimonials">Khalid bin Rashid</Link></h4>
                                        <p className="testimonial-two__sub-title">Head of Compliance</p>
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
                                        <span className="icon-pointed-star"></span>
                                        <span className="icon-pointed-star"></span>
                                    </div>
                                    <p className="testimonial-two__text">"The capability transfer we received was outstanding. Agentic Ai didn't just give us a tool; they empowered our team to manage our new AI systems confidently."</p>
                                </div>
                                <div className="testimonial-two__client-info">
                                    <div className="testimonial-two__client-img">
                                        <Image src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop" alt="Mariam Al-Khouri" width={64} height={64} priority style={{ borderRadius: '50%', objectFit: 'cover' }} />
                                    </div>
                                    <div className="testimonial-two__client-content">
                                        <h4 className="testimonial-two__client-name"><Link href="/testimonials">Mariam Al-Khouri</Link></h4>
                                        <p className="testimonial-two__sub-title">Operations Manager</p>
                                    </div>
                                </div>
                                <div className="testimonial-two__quote">
                                    <span className="icon-right-quote"></span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="swiper-pagination"></div>
                </Swiper>
            </div>
        </section>
    </>
  )
}