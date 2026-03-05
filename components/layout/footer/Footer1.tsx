import Link from "next/link"
import Image from "next/image";
export default function Footer1() {
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
                                    <div className="site-footer-two__logo">
                                        <Link href="/"><Image src="/ag-logo.png" alt="AG Logo" width={120} height={60} priority /></Link>
                                    </div>
                                    <ul className="list-unstyled site-footer-two__contact-list">
                                        <li>
                                            <div className="site-footer-two__contact-icon">
                                                <span className="icon-contact"></span>
                                            </div>
                                            <div className="site-footer-two__contact-content">
                                                <h5 className="site-footer-two__contact-title">Contact Info</h5>
                                                <p className="site-footer-two__contact-info">
                                                    <Link href="mailto:info@agenticaids.ae"
                                                        className="site-footer-two__contact-mail">info@agenticaids.ae</Link>
                                                    <Link href="tel:+971547111343" className="site-footer-two__contact-phone">
                                                        +971 54 711 1343
                                                    </Link>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="site-footer-two__contact-icon">
                                                <span className="icon-pin"></span>
                                            </div>
                                            <div className="site-footer-two__contact-content">
                                                <h5 className="site-footer-two__contact-title">Location</h5>
                                                <p className="site-footer-two__contact-info">
                                                    Bin Butti Building, Al Khalidiya, Abu Dhabi
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget-two__quick-links">
                                    <h4 className="footer-widget-two__title">Pages</h4>
                                    <ul className="footer-widget-two__quick-links-list list-unstyled">
                                        <li><Link href="/"><span className="icon-right-arrow-2"></span>Home</Link></li>
                                        <li><Link href="/about"><span className="icon-right-arrow-2"></span>About</Link></li>
                                        <li><Link href="/services"><span className="icon-right-arrow-2"></span>Services</Link></li>
                                        <li><Link href="/contact"><span className="icon-right-arrow-2"></span>Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget-two__support">
                                    <h4 className="footer-widget-two__title">Our Services</h4>
                                    <ul className="footer-widget-two__quick-links-list list-unstyled">
                                        <li style={{ color: 'var(--techguru-gray)', marginBottom: '10px' }}><span className="icon-right-arrow-2"></span>Intelligent Agents</li>
                                        <li style={{ color: 'var(--techguru-gray)', marginBottom: '10px' }}><span className="icon-right-arrow-2"></span>Governance & Compliance</li>
                                        <li style={{ color: 'var(--techguru-gray)', marginBottom: '10px' }}><span className="icon-right-arrow-2"></span>Team Enablement</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="footer-widget-two__services">
                                    <h4 className="footer-widget-two__title">Follow Us</h4>
                                    <ul className="footer-widget-two__quick-links-list list-unstyled">
                                        <li>
                                            <Link href="https://www.linkedin.com/company/agenticaids/">
                                                <span className="icon-right-arrow-2"></span>LinkedIn
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://x.com/AgenticAI215463">
                                                <span className="icon-right-arrow-2"></span>X (Twitter)
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.instagram.com/ag_entic_ai/">
                                                <span className="icon-right-arrow-2"></span>Instagram
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
                                            ⓒ Copyright {new Date().getFullYear()} <Link href="/#">techguru</Link> All rights reserved
                                        </p>
                                    </div>
                                    <div className="site-footer-two__social-box">
                                        <h4 className="site-footer-two__social-title">Follow Us:</h4>
                                        <div className="site-footer-two__social-box-inner">
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
