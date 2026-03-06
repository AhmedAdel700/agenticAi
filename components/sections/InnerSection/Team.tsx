'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import AnimatedTitle from "@/components/elements/AnimatedTitle";
import { useTranslations, useLocale } from "next-intl";

export default function Team() {
  const t = useTranslations("team_section");
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
  
      // Navigation
      navigation: {
          nextEl: isRtl ? '.owl-next' : '.owl-prev',
          prevEl: isRtl ? '.owl-prev' : '.owl-next',
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

  return (
    <>
        <section className="team-two" style={{ textAlign: isRtl ? 'right' : 'left' }}>
            <div className="team-two__bg-shape float-bob-y"
                style={{ backgroundImage: "url(/assets/images/shapes/team-two-bg-shape.png)" }}>
            </div>
            <div className="team-two__shape-1"></div>
            <div className="container">
                <div className="row" style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                    <div className="col-xl-5">
                        <div className="team-two__left">
                            <div className={`section-title ${isRtl ? 'text-right' : 'text-left'} sec-title-animation animation-style2`} style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                <div className="section-title__tagline-box" style={{ justifyContent: isRtl ? 'flex-end' : 'flex-start' }}>
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline">{t("tagline")}</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                <h2 className="section-title__title title-animation">
                                    {t("title").split('\n').map((line, i, arr) => (
                                        <span key={i}>
                                            {line}
                                            {i < arr.length - 1 && <br />}
                                        </span>
                                    ))}
                                </h2>
                                </AnimatedTitle>
                            </div>
                            <p className="team-two__text">
                                {t("text")}
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="team-two__right team-two__carousel" style={{ direction: 'ltr' }}>
                            <Swiper {...swiperOptions} className="team-two__carousel">
                                <SwiperSlide>
                                    <div className="item">
                                        <div className="team-two__single">
                                            <div className="team-two__img-box">
                                                <div className="team-two__img">
                                                    <Image
                                                      src="/sahar.jpeg"
                                                      alt="Portrait of Sahar Gebril, General Manager"
                                                      width={410}
                                                      height={450}
                                                      priority
                                                      style={{ objectFit: 'cover' }}
                                                    />
                                                </div>
                                                <div className="team-two__social" style={{ background: 'rgba(0,0,0,0.5)', padding: '10px 5px', borderRadius: '15px', backdropFilter: 'blur(4px)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                                                    <Link href="#"><span className="icon-facebook"></span></Link>
                                                    <Link href="#"><span className="icon-dribble"></span></Link>
                                                    <Link href="#"><span className="icon-linkedin"></span></Link>
                                                </div>
                                                <div className="team-two__title-box" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                                    <h3><Link href="#">{t("manager1")}</Link></h3>
                                                    <p>{t("role1")}</p>
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
                                                      src="/Kaifi.jpeg"
                                                      alt="Portrait of Kaifi Durani, IT Manager"
                                                      width={410}
                                                      height={450}
                                                      priority
                                                      style={{ objectFit: 'cover' }}
                                                    />
                                                </div>
                                                <div className="team-two__social" style={{ background: 'rgba(0,0,0,0.5)', padding: '10px 5px', borderRadius: '15px', backdropFilter: 'blur(4px)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                                                    <Link href="#"><span className="icon-facebook"></span></Link>
                                                    <Link href="#"><span className="icon-dribble"></span></Link>
                                                    <Link href="#"><span className="icon-linkedin"></span></Link>
                                                </div>
                                                <div className="team-two__title-box" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                                    <h3><Link href="#">{t("manager2")}</Link></h3>
                                                    <p>{t("role2")}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
