'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image";
import Link from "next/link";
import AnimatedTitle from "@/components/elements/AnimatedTitle";
import { useTranslations, useLocale } from 'next-intl';

export default function Testimonial() {
    const t = useTranslations('testimonials');
    const locale = useLocale();
    const isRtl = locale === 'ar';

    const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        dir: isRtl ? 'rtl' : 'ltr',

        breakpoints: {
            320:  { slidesPerView: 1, spaceBetween: 30 },
            575:  { slidesPerView: 1, spaceBetween: 30 },
            767:  { slidesPerView: 2, spaceBetween: 30 },
            991:  { slidesPerView: 2, spaceBetween: 30 },
            1199: { slidesPerView: 3, spaceBetween: 30 },
            1350: { slidesPerView: 3, spaceBetween: 30 },
        }
    };

    const testimonials = [
        {
            key: 'item1',
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
        },
        {
            key: 'item2',
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
        },
        {
            key: 'item3',
            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
        },
        {
            key: 'item4',
            img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
        },
    ];

    return (
        <section className="testimonial-two" id="testimonial" dir={isRtl ? 'rtl' : 'ltr'}>
            <div className="testimonial-two__shape-1"></div>
            <div className="testimonial-two__shape-2"></div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape-1"></div>
                        <span className="section-title__tagline">{t('tagline')}</span>
                        <div className="section-title__tagline-shape-2"></div>
                    </div>
                    <AnimatedTitle>
                        <h2 className="section-title__title title-animation">
                            {t('title_part1')} <br /> <span>{t('title_part2')}</span>
                        </h2>
                    </AnimatedTitle>
                </div>

                <Swiper {...swiperOptions} className="testimonial-two__carousel" key={locale}>
                    {testimonials.map((item) => (
                        <SwiperSlide key={item.key}>
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
                                        <p className="testimonial-two__text">
                                            &quot;{t(`${item.key}.text` as any)}&quot;
                                        </p>
                                    </div>
                                    <div className="testimonial-two__client-info">
                                        <div className="testimonial-two__client-img">
                                            <Image
                                                src={item.img}
                                                alt={t(`${item.key}.name` as any)}
                                                width={64}
                                                height={64}
                                                priority
                                                style={{ borderRadius: '50%', objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div className="testimonial-two__client-content">
                                            <h4 className="testimonial-two__client-name">
                                                <Link href="/testimonials">{t(`${item.key}.name` as any)}</Link>
                                            </h4>
                                            <p className="testimonial-two__sub-title">{t(`${item.key}.role` as any)}</p>
                                        </div>
                                    </div>
                                    <div className="testimonial-two__quote">
                                        <span className="icon-right-quote"></span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}