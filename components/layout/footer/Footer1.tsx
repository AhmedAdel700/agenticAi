"use client";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Linkedin, Instagram, Mail, Phone, MapPin, ChevronRight, ChevronLeft } from "lucide-react";

const XIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill={color}/>
  </svg>
);

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
                                        <Link href="/"><Image src="/ag-logo.png" alt="Agentic Ai logo" width={300} height={50} priority style={{maxWidth:"100%" , maxHeight:"100%", objectFit:"cover"}} /></Link>
                                    </div>
                                    <ul className="list-unstyled site-footer-two__contact-list" style={{ 
                                        marginTop: '30px', 
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        gap: '20px' 
                                    }}>
                                        <li style={{ 
                                            textAlign: isRtl ? 'right' : 'left', display: 'flex', gap: '20px', alignItems: 'flex-start',
                                            background: 'rgba(255, 255, 255, 0.02)', padding: '24px', borderRadius: '16px',
                                            border: '1px solid rgba(255, 255, 255, 0.04)',
                                            transition: 'all 0.3s ease'
                                        }}>
                                            <div style={{ 
                                                minWidth: '50px', height: '50px', background: 'rgba(223, 153, 90, 0.1)', 
                                                borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                border: '1px solid rgba(223, 153, 90, 0.15)'
                                            }}>
                                                <Mail size={22} color="var(--techguru-base)" />
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <h5 className="site-footer-two__contact-title" style={{ marginBottom: '12px', fontSize: '16px', color: '#fff', fontWeight: '600' }}>{t("contact_info")}</h5>
                                                <div className="site-footer-two__contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '8px', lineHeight: '1.6', fontSize: '15px', whiteSpace: 'normal', wordBreak: 'break-word' }}>
                                                    <Link href="mailto:info@agenticaids.ae"
                                                        className="site-footer-two__contact-mail" style={{ color: 'rgba(255, 255, 255, 0.7)', transition: 'color 0.3s ease', wordBreak: 'break-all' }}>info@agenticaids.ae</Link>
                                                    <div style={{ width: '100%', textAlign: isRtl ? 'right' : 'left' }}>
                                                        <Link href="tel:+971547111343" className="site-footer-two__contact-phone" style={{ color: 'rgba(255, 255, 255, 0.7)', transition: 'color 0.3s ease', direction: 'ltr', display: 'inline-block' }}>
                                                            +971 54 711 1343
                                                        </Link>
                                                    </div>
                                                    <Link href="https://www.agenticaids.ae" target="_blank" rel="noopener noreferrer" className="site-footer-two__contact-web" style={{ color: 'rgba(255, 255, 255, 0.7)', transition: 'color 0.3s ease' }}>
                                                        www.agenticaids.ae
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li style={{ 
                                            textAlign: isRtl ? 'right' : 'left', display: 'flex', gap: '20px', alignItems: 'flex-start',
                                            background: 'rgba(255, 255, 255, 0.02)', padding: '24px', borderRadius: '16px',
                                            border: '1px solid rgba(255, 255, 255, 0.04)',
                                            transition: 'all 0.3s ease'
                                        }}>
                                            <div style={{ 
                                                minWidth: '50px', height: '50px', background: 'rgba(223, 153, 90, 0.1)', 
                                                borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                border: '1px solid rgba(223, 153, 90, 0.15)'
                                            }}>
                                                <MapPin size={22} color="var(--techguru-base)" />
                                            </div>
                                            <div style={{ flex: 1, minWidth: 0 }}>
                                                <h5 className="site-footer-two__contact-title" style={{ marginBottom: '12px', fontSize: '16px', color: '#fff', fontWeight: '600' }}>{t("location")}</h5>
                                                <div className="site-footer-two__contact-info" style={{ lineHeight: '1.6', fontSize: '15px', color: 'rgba(255, 255, 255, 0.7)', wordWrap: 'break-word', overflowWrap: 'break-word', whiteSpace: 'normal', wordBreak: 'break-word', display: 'block' }}>
                                                    {t_root("address")}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget-two__quick-links" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                    <h4 className="footer-widget-two__title">{t("pages")}</h4>
                                    <ul className="footer-widget-two__quick-links-list list-unstyled">
                                        {[
                                            { href: "/", label: t_root("menu.home") },
                                            { href: "/about", label: t_root("menu.about") },
                                            { href: "/services", label: t_root("menu.services") },
                                            { href: "/contact", label: t_root("menu.contact") }
                                        ].map((link, idx) => (
                                            <li key={idx} style={{ marginBottom: '10px' }}>
                                                <Link href={link.href} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                    {isRtl ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget-two__support" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                    <h4 className="footer-widget-two__title">{t("our_services")}</h4>
                                    <ul className="footer-widget-two__quick-links-list list-unstyled">
                                        {[
                                            t("intelligent_agents"),
                                            t("governance"),
                                            t("team_enablement")
                                        ].map((service, idx) => (
                                            <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--techguru-gray)' }}>
                                                {isRtl ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
                                                {service}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="footer-widget-two__services" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                    <h4 className="footer-widget-two__title">{t("follow_us")}</h4>
                                    <ul className="footer-widget-two__quick-links-list list-unstyled">
                                        <li style={{ marginBottom: '10px' }}>
                                            <Link href="https://www.linkedin.com/company/agenticaids/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <Linkedin size={14} /> LinkedIn
                                            </Link>
                                        </li>
                                        <li style={{ marginBottom: '10px' }}>
                                            <Link href="https://x.com/AgenticAI215463" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <XIcon size={14} /> X (Twitter)
                                            </Link>
                                        </li>
                                        <li style={{ marginBottom: '10px' }}>
                                            <Link href="https://www.instagram.com/ag_entic_ai/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <Instagram size={14} /> Instagram
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
                                <div className="site-footer-two__bottom-inner">
                                    <div className="site-footer-two__copyright">
                                        <p className="site-footer-two__copyright-text">
                                            ⓒ {t("copyright")} {new Date().getFullYear()} <Link href="/#">Agentic Ai</Link> {t("rights")}
                                        </p>
                                        <div className="site-footer-two__copyright-links">
                                            <Link href="/privacy-policy" className="site-footer-two__legal-link">{t("privacy_policy")}</Link>
                                            <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>|</span>
                                            <Link href="/terms-of-service" className="site-footer-two__legal-link">{t("terms_of_service")}</Link>
                                        </div>
                                    </div>
                                    <div className="site-footer-two__social-box">
                                        <h4 className="site-footer-two__social-title">{t("follow_us")}:</h4>
                                        <div className="site-footer-two__social-box-inner">
                                            <Link href="https://www.linkedin.com/company/agenticaids/"><Linkedin size={20} color="white" /></Link>
                                            <Link href="https://x.com/AgenticAI215463"><XIcon size={18} color="white" /></Link>
                                            <Link href="https://www.instagram.com/ag_entic_ai/"><Instagram size={20} color="white" /></Link>
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
