"use client";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function Footer1() {
    const t = useTranslations("footer");
    const t_root = useTranslations();
    const locale = useLocale();
    const isRtl = locale === 'ar';

    return (
        <>
            <footer className="site-footer-two">
                <div className="site-footer-two__shape-1"></div>
                <div className="site-footer-two__shape-2"></div>
                <div className="site-footer-two__shape-3"></div>
                <div className="site-footer-two__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="site-footer-two__about">
                                    <div className="site-footer-two__logo" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                        <Link href="/"><Image src="/next.svg" alt="Agentic Ai logo" width={120} height={60} priority /></Link>
                                    </div>
                                    <ul className="list-unstyled site-footer-two__contact-list">
                                        <li style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                            <div className="site-footer-two__contact-icon">
                                                <span className="icon-contact"></span>
                                            </div>
                                            <div className="site-footer-two__contact-content">
                                                <h5 className="site-footer-two__contact-title">{t("contact_info")}</h5>
                                                <p className="site-footer-two__contact-info">
                                                    <Link href="mailto:info@agenticaids.ae"
                                                        className="site-footer-two__contact-mail">info@agenticaids.ae</Link>
                                                    <Link href="tel:+971547111343" className="site-footer-two__contact-phone">
                                                        +971 54 711 1343
                                                    </Link>
                                                </p>
                                            </div>
                                        </li>
                                        <li style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                            <div className="site-footer-two__contact-icon">
                                                <span className="icon-pin"></span>
                                            </div>
                                            <div className="site-footer-two__contact-content">
                                                <h5 className="site-footer-two__contact-title">{t("location")}</h5>
                                                <p className="site-footer-two__contact-info">
                                                    {t_root("address")}
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget-two__quick-links" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                    <h4 className="footer-widget-two__title">{t("pages")}</h4>
                                    <ul className="footer-widget-two__quick-links-list list-unstyled">
                                        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
                                                <span className="icon-right-arrow-2" style={{ transform: isRtl ? 'scaleX(-1)' : 'none', display: 'inline-block', marginLeft: isRtl ? '10px' : '0', marginRight: isRtl ? '0' : '10px' }}></span>
                                                {t_root("menu.home")}
                                            </Link>
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', width: "120px" }}>
                                            <Link href="/about" style={{ display: 'flex', alignItems: 'center' }}>
                                                <span className="icon-right-arrow-2" style={{ transform: isRtl ? 'scaleX(-1)' : 'none', display: 'inline-block', marginLeft: isRtl ? '10px' : '0', marginRight: isRtl ? '0' : '10px' }}></span>
                                                {t_root("menu.about")}
                                            </Link>
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', width: "120px" }}>
                                            <Link href="/services" style={{ display: 'flex', alignItems: 'center' }}>
                                                <span className="icon-right-arrow-2" style={{ transform: isRtl ? 'scaleX(-1)' : 'none', display: 'inline-block', marginLeft: isRtl ? '10px' : '0', marginRight: isRtl ? '0' : '10px' }}></span>
                                                {t_root("menu.services")}
                                            </Link>
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', width: "150px" }}>
                                            <Link href="/contact" style={{ display: 'flex', alignItems: 'center' }}>
                                                <span className="icon-right-arrow-2" style={{ transform: isRtl ? 'scaleX(-1)' : 'none', display: 'inline-block', marginLeft: isRtl ? '10px' : '0', marginRight: isRtl ? '0' : '10px' }}></span>
                                                {t_root("menu.contact")}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget-two__support" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                    <h4 className="footer-widget-two__title">{t("our_services")}</h4>
                                    <ul className="footer-widget-two__quick-links-list list-unstyled">
                                        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', color: 'var(--techguru-gray)' , width: "200px" }}>
                                            <span className="icon-right-arrow-2" style={{ transform: isRtl ? 'scaleX(-1)' : 'none', display: 'inline-block', marginLeft: isRtl ? '10px' : '0', marginRight: isRtl ? '0' : '10px' }}></span>
                                            {t("intelligent_agents")}
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', color: 'var(--techguru-gray)', width: "300px" }}>
                                            <span className="icon-right-arrow-2" style={{ transform: isRtl ? 'scaleX(-1)' : 'none', display: 'inline-block', marginLeft: isRtl ? '10px' : '0', marginRight: isRtl ? '0' : '10px' }}></span>
                                            {t("governance")}
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', color: 'var(--techguru-gray)' , width: "200px" }}>
                                            <span className="icon-right-arrow-2" style={{ transform: isRtl ? 'scaleX(-1)' : 'none', display: 'inline-block', marginLeft: isRtl ? '10px' : '0', marginRight: isRtl ? '0' : '10px' }}></span>
                                            {t("team_enablement")}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="footer-widget-two__services" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                    <h4 className="footer-widget-two__title">{t("follow_us")}</h4>
                                    <ul className="footer-widget-two__quick-links-list list-unstyled">
                                        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <Link href="https://www.linkedin.com/company/agenticaids/" style={{ display: 'flex', alignItems: 'center' }}>
                                                <span className="icon-right-arrow-2" style={{ transform: isRtl ? 'scaleX(-1)' : 'none', display: 'inline-block', marginLeft: isRtl ? '10px' : '0', marginRight: isRtl ? '0' : '10px' }}></span>
                                                LinkedIn
                                            </Link>
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <Link href="https://x.com/AgenticAI215463" style={{ display: 'flex', alignItems: 'center' }}>
                                                <span className="icon-right-arrow-2" style={{ transform: isRtl ? 'scaleX(-1)' : 'none', display: 'inline-block', marginLeft: isRtl ? '10px' : '0', marginRight: isRtl ? '0' : '10px' }}></span>
                                                X (Twitter)
                                            </Link>
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <Link href="https://www.instagram.com/ag_entic_ai/" style={{ display: 'flex', alignItems: 'center' }}>
                                                <span className="icon-right-arrow-2" style={{ transform: isRtl ? 'scaleX(-1)' : 'none', display: 'inline-block', marginLeft: isRtl ? '10px' : '0', marginRight: isRtl ? '0' : '10px' }}></span>
                                                Instagram
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer-two__bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="site-footer-two__bottom-inner" style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                                    <div className="site-footer-two__copyright">
                                        <p className="site-footer-two__copyright-text">
                                            ⓒ {t("copyright")} {new Date().getFullYear()} <Link href="/#">Agentic Ai</Link> {t("rights")}
                                        </p>
                                    </div>
                                    <div className="site-footer-two__social-box" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                        <h4 className="site-footer-two__social-title" style={{ margin: 0 }}>{t("follow_us")}:</h4>
                                        <div className="site-footer-two__social-box-inner" style={{ display: 'flex', gap: '10px' }}>
                                            <Link href="https://www.linkedin.com/company/agenticaids/"><span className="icon-linkedin"></span></Link>
                                            <Link href="https://x.com/AgenticAI215463"><span className="icon-dribble"></span></Link>
                                            <Link href="https://www.instagram.com/ag_entic_ai/"><span className="icon-facebook"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
