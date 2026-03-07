"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import AnimatedTitle from "@/components/elements/AnimatedTitle";

const partners = [
    { src: "/partner1.jpeg", alt: "Partner 1" },
    { src: "/partner2.jpeg", alt: "Partner 2" },
    { src: "/partner3.jpeg", alt: "Partner 3" },
    { src: "/partner4.jpeg", alt: "Partner 4" },
    { src: "/partner5.jpeg", alt: "Partner 5" },
    { src: "/partner6.jpeg", alt: "Partner 6" },
    { src: "/partner7.jpeg", alt: "Partner 7" },
    { src: "/partner8.jpeg", alt: "Partner 8" },
];

export default function PartnerSlider() {
    const locale = useLocale();
    const isRtl = locale === "ar";
    const t = useTranslations("partners");

    return (
        <>
            <style>{`
                /* ─── Section wrapper ─── */
                .partner-slider-section {
                    overflow: hidden;
                    position: relative;
                    background: transparent;
                }

                /* ─── Top decorative rule ─── */
                .partner-slider-section .partner-rule {
                    width: 100%;
                    max-width: 880px;
                    margin: 0 auto 56px;
                    height: 1px;
                    background: linear-gradient(
                        to right,
                        transparent 0%,
                        rgba(92, 176, 233, 0.28) 30%,
                        rgba(61, 114, 252, 0.28) 70%,
                        transparent 100%
                    );
                }

                /* ─── Section heading block ─── */
                .partner-slider-section .partner-heading {
                    margin-bottom: 48px;
                }

                /* ─── Edge fade overlays ─── */
                .partner-track-wrap {
                    position: relative;
                }
                .partner-track-wrap::before,
                .partner-track-wrap::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    width: 100px;
                    z-index: 2;
                    pointer-events: none;
                }
                .partner-track-wrap::before {
                    left: 0;
                    background: linear-gradient(to right, #05173d 0%, transparent 100%);
                }
                .partner-track-wrap::after {
                    right: 0;
                    background: linear-gradient(to left, #05173d 0%, transparent 100%);
                }

                /* ─── Each slide ─── */
                .partner-slide-item {
                    display: flex !important;
                    align-items: center;
                    justify-content: center;
                }

                /* ─── Card ─── */
                .partner-card {
                    width: 160px;
                    height: 96px;
                    border-radius: 14px;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    background: rgba(255, 255, 255, 0.04);
                    backdrop-filter: blur(6px);
                    -webkit-backdrop-filter: blur(6px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 10px 14px;
                    overflow: hidden;
                    transition:
                        border-color 0.3s ease,
                        background 0.3s ease,
                        transform 0.3s ease,
                        box-shadow 0.3s ease;
                    cursor: pointer;
                }

                .partner-card:hover {
                    border-color: rgba(92, 176, 233, 0.40);
                    background: rgba(255, 255, 255, 0.09);
                    transform: translateY(-4px);
                    box-shadow: 0 12px 32px rgba(61, 114, 252, 0.18);
                }

                /* ─── Image inside card — full color, uniform size ─── */
                .partner-card .partner-img {
                    width: 132px !important;
                    height: 76px !important;
                    object-fit: cover;
                    border-radius: 8px;
                    display: block;
                    transition: transform 0.3s ease;
                }

                .partner-card:hover .partner-img {
                    transform: scale(1.04);
                }

                /* ─── Smooth continuous scroll ─── */
                .partner-swiper {
                    transition-timing-function: linear !important;
                }
                .partner-swiper .swiper-wrapper {
                    transition-timing-function: linear !important;
                    padding: 10px 0;
                }
            `}</style>

            <section className="partner-slider-section">
                <div className="partner-rule" />

                {/* ── Section title matching app-wide pattern ── */}
                <div className="container">
                    <div className="partner-heading section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline">
                                {t("tagline")}
                            </span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle animationStyle="style1">
                            <h2 className="section-title__title title-animation">
                                {t("title")} <br />
                                <span>{t("subtitle")}</span>
                            </h2>
                        </AnimatedTitle>
                    </div>
                </div>

                {/* ── Swiper track ── */}
                <div className="partner-track-wrap">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={2}
                        spaceBetween={20}
                        loop={true}
                        dir={isRtl ? "rtl" : "ltr"}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                            reverseDirection: isRtl,
                        }}
                        speed={6000}
                        allowTouchMove={true}
                        breakpoints={{
                            480:  { slidesPerView: 3, spaceBetween: 20 },
                            768:  { slidesPerView: 4, spaceBetween: 24 },
                            1024: { slidesPerView: 5, spaceBetween: 24 },
                            1280: { slidesPerView: 6, spaceBetween: 28 },
                        }}
                        className="partner-swiper"
                    >
                        {partners.map((partner, i) => (
                            <SwiperSlide key={i} className="partner-slide-item">
                                <div className="partner-card">
                                    <Image
                                        src={partner.src}
                                        alt={partner.alt}
                                        width={132}
                                        height={76}
                                        className="partner-img"
                                        priority={i < 6}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
}
