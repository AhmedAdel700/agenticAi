"use client";

import Link from "next/link";
import AnimatedTitle from "@/components/elements/AnimatedTitle";
import ContactForm from "@/components/elements/ContactForm";

export default function Contact() {

  return (
    <>
        <section className="contact-one" id="contact">
            <div className="contact-one__bg-shape"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop)" }}></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-one__left wow slideInLeft" data-wow-delay="100ms"
                            data-wow-duration="2500ms">
                            <div className="contact-one__left-shape-1"></div>
                            <div className="contact-one__left-shape-2"></div>
                            <h3 className="contact-one__from-title">How Can We Help You?</h3>
                            <ContactForm/>
                            <div className="result"></div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-one__right">
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
