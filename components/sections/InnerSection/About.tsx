"use client";
import CountUp from "react-countup";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "@/components/elements/AnimatedTitle";

export default function About() {
  return (
    <>
        <section className="about-four">
            <div className="about-four__bg-shape"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=1600&auto=format&fit=crop)" }}></div>
            <div className="about-four__bg-shape-2"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop)" }}></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-four__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                            <div className="about-four__img-box">
                            <div className="about-four__img">
                                <Image
                                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
                                  alt="Strategic operations team in a modern office"
                                  width={480}
                                  height={550}
                                  priority
                                />
                            </div>
                            <div className="about-four__img-2">
                                <Image
                                  src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop"
                                  alt="Autonomous systems dashboard with analytics"
                                  width={308}
                                  height={335}
                                  priority
                                />
                            </div>
                                <div className="about-four__experience">
                                    <div className="about-four__experience-inner">
                                        <div className="about-four__experience-count-box">
                                            <h3 className="odometer"><CountUp end={25} duration={2} /></h3>
                                        </div>
                                        <p className="about-four__experience-count-text">Years of
                                            <br /> Experience</p>
                                    </div>
                                </div>
                            </div>
                            <div className="about-four__client-box">
                                <ul className="about-four__client-img-list list-unstyled">
                                    <li>
                                        <div className="about-four__client-img">
                                            <Image
                                              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
                                              alt="Enterprise leader portrait"
                                              width={41}
                                              height={40}
                                              priority
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="about-four__client-img">
                                            <Image
                                              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?q=80&w=200&auto=format&fit=crop"
                                              alt="Enterprise leader portrait"
                                              width={41}
                                              height={40}
                                              priority
                                            />
                                        </div>
                                    </li>
                                </ul>
                                <p className="about-four__client-text"><span className="odometer"><CountUp end={120} duration={3} /></span><span>K</span> Satisfied Client</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-four__right">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline">Our Mission</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                <h2 className="section-title__title title-animation">
                                    Our Mission<br />
                                    <span>Engineering autonomous operating systems</span>
                                </h2>
                                </AnimatedTitle>
                            </div>
                            <p className="about-four__text">
                                Leveraging distributed machine intelligence and resilient architecture to drive non-linear
                                growth and operational supremacy.
                            </p>
                            <div className="about-four__points-box">
                                <ul className="about-four__points-list list-unstyled">
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
                                <ul className="about-four__points-list about-four__points-list-2 list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <p>Operates continuously with<br />full audit compliance</p>
                                    </li>
                                    <li>
                                        <div className="about-four__points-list-img">
                                            <Image src="/assets/images/resources/about-four-points-list-img.jpg" alt="Image" width={60} height={60} priority />
                                        </div>
                                        <div className="about-four__points-list-content">
                                            <h5>Executive Leadership</h5>
                                            <p>Agentic AI</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <ul className="about-four__points-2 list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-technical-support"></span>
                                    </div>
                                    <div className="content">
                                        <h5>Innovative IT Solutions</h5>
                                        <p>Stay ahead with cutting-edge technology tailored to <br />your business needs.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-real-estate-agency"></span>
                                    </div>
                                    <div className="content">
                                        <h5>Cloud Solutions </h5>
                                        <p>Secure, scalable, and efficient cloud services to power<br /> your growth.
                                            Cloud Solutions for Modern Enterprises</p>
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
