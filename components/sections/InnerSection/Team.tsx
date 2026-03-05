'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link";
import Image from "next/image";
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
        nextEl: '.owl-prev',
        prevEl: '.owl-next',
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

export default function Team() {
  return (
    <>
        <section className="team-two">
            <div className="team-two__bg-shape float-bob-y"
                style={{ backgroundImage: "url(/assets/images/shapes/team-two-bg-shape.png)" }}>
            </div>
            <div className="team-two__shape-1"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="team-two__left">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline">Executive Leadership</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                <h2 className="section-title__title title-animation">
                                    The Architects of<br />
                                    <span>Transformation</span>
                                </h2>
                                </AnimatedTitle>
                            </div>
                            <p className="team-two__text">
                                A specialized cohort of enterprise architects, intelligence engineers, and strategic advisors
                                dedicated to engineering the future of digital operations.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="team-two__right team-two__carousel">
                            <Swiper {...swiperOptions} className="team-two__carousel">
                                <SwiperSlide>
                                    <div className="item">
                                        <div className="team-two__single">
                                            <div className="team-two__img-box">
                                                <div className="team-two__img">
                                                    <Image
                                                      src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop"
                                                      alt="Portrait of Sahar Gebril, General Manager"
                                                      width={410}
                                                      height={450}
                                                      priority
                                                    />
                                                </div>
                                                <div className="team-two__social">
                                                    <Link href="#"><span className="icon-facebook"></span></Link>
                                                    <Link href="#"><span className="icon-dribble"></span></Link>

                                                    <Link href="#"><span className="icon-linkedin"></span></Link>
                                                </div>
                                                <div className="team-two__title-box">
                                                    <h3><Link href="/team-details">Sahar Gebril</Link></h3>
                                                    <p>General Manager</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="item">
                                        <div className="team-two__single">
                                            <div className="team-two__img-box">
                                                <div className="team-two__img">
                                                    <Image
                                                      src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop"
                                                      alt="Portrait of Kaifi Durani, IT Manager"
                                                      width={410}
                                                      height={450}
                                                      priority
                                                    />
                                                </div>
                                                <div className="team-two__social">
                                                    <Link href="#"><span className="icon-facebook"></span></Link>
                                                    <Link href="#"><span className="icon-dribble"></span></Link>

                                                    <Link href="#"><span className="icon-linkedin"></span></Link>
                                                </div>
                                                <div className="team-two__title-box">
                                                    <h3><Link href="/team-details">Kaifi Durani</Link></h3>
                                                    <p>IT Manager</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* Extra team member slides removed to match AG team data */}
                                {/* Duplicate carousel slides removed to avoid extra UI beyond AG data */}
                            </Swiper>
                            <div className="owl-nav">
                                <div className="owl-prev"><span className="icon-right-up"></span></div>
                                <div className="owl-next"><span className="icon-right-up"></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
