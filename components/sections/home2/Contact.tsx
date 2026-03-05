"use client";

import Link from "next/link";
import AnimatedTitle from "@/components/elements/AnimatedTitle";
import ContactForm from "@/components/elements/ContactForm";

export default function Contact() {

  return (
    <>
        <section className="contact-one" id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Effects */}
            <div className="about-four__bg-shape"
                style={{ backgroundImage: "url(/assets/images/shapes/about-four-bg-shape.png)", position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.4, pointerEvents: 'none' }}></div>
            <div className="about-four__bg-shape-2"
                style={{ backgroundImage: "url(/assets/images/shapes/about-four-bg-shape-2.png)", position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', opacity: 0.4, pointerEvents: 'none' }}></div>
            
            {/* Custom Glow Effects */}
            <div style={{ 
                position: 'absolute', 
                top: '20%', 
                left: '10%', 
                width: '400px', 
                height: '400px', 
                background: 'radial-gradient(circle, rgba(0, 163, 255, 0.15) 0%, rgba(0, 163, 255, 0) 70%)', 
                filter: 'blur(60px)', 
                zIndex: 0,
                pointerEvents: 'none'
            }}></div>
            <div style={{ 
                position: 'absolute', 
                bottom: '10%', 
                right: '5%', 
                width: '500px', 
                height: '500px', 
                background: 'radial-gradient(circle, rgba(0, 163, 255, 0.1) 0%, rgba(0, 163, 255, 0) 70%)', 
                filter: 'blur(80px)', 
                zIndex: 0,
                pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row">
                    <div className="col-xl-6 col-lg-6" style={{ display: 'flex' }}>
                        <div className="contact-one__left wow slideInLeft" data-wow-delay="100ms"
                            data-wow-duration="2500ms" style={{ 
                                padding: '40px', 
                                background: 'rgba(255, 255, 255, 0.03)', 
                                backdropFilter: 'blur(15px)', 
                                borderRadius: '30px', 
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                                height: '100%',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                            <div className="contact-one__left-shape-1"></div>
                            <div className="contact-one__left-shape-2"></div>
                            <h3 className="contact-one__from-title">How Can We Help You?</h3>
                            <ContactForm/>
                            <div className="result"></div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6" style={{ display: 'flex' }}>
                        <div className="contact-one__right" style={{ 
                                padding: '40px', 
                                background: 'rgba(255, 255, 255, 0.03)', 
                                backdropFilter: 'blur(15px)', 
                                borderRadius: '30px', 
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                                height: '100%',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                            <div className="section-title text-left sec-title-animation animation-style2">
                            <div className="section-title__tagline-box">
                                <div className="section-title__tagline-shape-1"></div>
                                <span className="section-title__tagline">Contact Us</span>
                                <div className="section-title__tagline-shape-2"></div>
                            </div>
                            <AnimatedTitle>
                            <h2 className="section-title__title title-animation">
                                Get In Touch<br />
                                <span>Start your autonomous journey</span>
                            </h2>
                            </AnimatedTitle>
                            </div>
                            <p className="contact-one__text">
                                Initiate your transition to an autonomous digital architecture. Our advisors are ready to
                                evaluate your institutional requirements.
                            </p>
                            <ul className="contact-one__list list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-pin"></span>
                                    </div>
                                    <div className="content">
                                        <h4>Headquarters</h4>
                                        <p>Bin Butti Building, Al Khalidiya,<br />Abu Dhabi</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-mail"></span>
                                    </div>
                                    <div className="content">
                                        <h4>Email Us</h4>
                                        <p><Link href="mailto:info@agenticaids.ae">info@agenticaids.ae</Link></p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-phone-call"></span>
                                    </div>
                                    <div className="content">
                                        <h4>Contact</h4>
                                        <p>Mob: <Link href="tel:+971547111343">+971 54 711 1343</Link></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
