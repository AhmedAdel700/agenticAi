"use client";
import CountUp from "react-countup";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "@/components/elements/AnimatedTitle";

export default function About() {
  return (
    <>
        <section className="about-two" id="about">
            <div className="about-two__shape-2"></div>
            <div className="about-two__shape-3">
                <Image src="/assets/images/shapes/about-two-shape-3.png" alt="Shape" width={560} height={583} priority />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-two__left">
                            <div className="about-two__img-box">
                            <div className="about-two__img">
                                <Image
                                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
                                  alt="Enterprise control room with data visualizations"
                                  width={495}
                                  height={474}
                                  priority
                                />
                            </div>
                            <div className="about-two__img-2">
                                <Image
                                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
                                  alt="Leadership team discussing AI strategy"
                                  width={336}
                                  height={344}
                                  priority
                                />
                            </div>
                            <div className="about-two__shape-1"></div>
                            </div>
                            <div className="about-two__client-box">
                                <ul className="about-two__client-img-list list-unstyled">
                                    <li>
                                    <div className="about-two__client-img">
                                        <Image
                                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
                                          alt="Enterprise client portrait"
                                          width={36}
                                          height={35}
                                          priority
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div className="about-two__client-img">
                                        <Image
                                          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
                                          alt="Enterprise client portrait"
                                          width={36}
                                          height={35}
                                          priority
                                        />
                                    </div>
                                    </li>
                                </ul>
                            <p className="about-two__client-text">
                                <span className="odometer">
                                    <CountUp end={500} duration={2} />
                                </span>
                                <span>+</span> Global Implementations
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-two__right">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline">Executive Summary</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                <h2 className="section-title__title title-animation">
                                    Agentic AI is not a<br />
                                    <span>traditional AI company</span>
                                </h2>
                                </AnimatedTitle>
                            </div>
                            <p className="about-two__text">
                                We transform enterprise operations by engineering autonomous systems that execute real work — not just provide recommendations. Our agents handle accounting, stakeholder management, compliance, and operational workflows independently, so your teams can focus on strategy
                            </p>
                            <div className="about-two__points-box">
                                <ul className="about-two__points-list list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <p>Manages complex workflows<br />autonomously</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <p>Enforces governance without<br />manual oversight</p>
                                    </li>
                                </ul>
                                <ul className="about-two__points-list list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <p>Scales operations without<br />proportional headcount</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <p>Operates continuously with<br />full audit compliance</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="about-two__experience-contact-and-btn">
                                <div className="about-two__experience-box">
                                    <div className="about-two__experience-count-box">
                                        <h3 className="odometer">
                                            <CountUp end={15} duration={2} />
                                        </h3>
                                        <span></span>
                                    </div>
                                    <p className="about-two__experience-text">
                                        Years of<br />Expertise
                                    </p>
                                </div>
                                <div className="about-two__call-box">
                                    <div className="about-two__call-icon">
                                        <span className="icon-customer-service-headset"></span>
                                    </div>
                                    <div className="about-two__call-content">
                                        <span>Call us for enquiry</span>
                                        <p><Link href="tel:+971547111343">+971 54 711 1343</Link></p>
                                    </div>
                                </div>
                                <div className="about-two__btn-box">
                                    <Link href="/about" className="thm-btn">Learn More<span
                                            className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
