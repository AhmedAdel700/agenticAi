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
                style={{ backgroundImage: "url(/assets/images/shapes/about-four-bg-shape.png)" }}></div>
            <div className="about-four__bg-shape-2"
                style={{ backgroundImage: "url(/assets/images/shapes/about-four-bg-shape-2.png)" }}></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-four__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                            <div className="about-four__img-box">
                            <div className="about-four__img">
                                <Image
                                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
                                  alt="Enterprise control room with data visualizations"
                                  width={480}
                                  height={550}
                                  priority
                                  style={{ objectFit: 'cover', borderRadius: '40px' }}
                                />
                            </div>

                                <div className="about-four__experience">
                                    <div className="about-four__experience-inner">
                                        <div className="about-four__experience-count-box">
                                            <h3 className="odometer">10x</h3>
                                        </div>
                                        <p className="about-four__experience-count-text">Operational
                                            <br /> Efficiency</p>
                                    </div>
                                </div>
                            </div>
                            <ul className="about-four__points-2 list-unstyled" style={{ marginTop: '40px' }}>
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
                                    Engineering Autonomous Systems<br />
                                    <span>That Execute Real Work</span>
                                </h2>
                                </AnimatedTitle>
                            </div>
                            <p className="about-four__text" style={{ 
                                padding: '30px', 
                                background: 'rgba(255, 255, 255, 0.03)', 
                                backdropFilter: 'blur(15px)', 
                                borderRadius: '30px', 
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                                marginBottom: '30px'
                            }}>
                                We transform enterprise operations by engineering autonomous systems that execute real work — not just provide recommendations. Our agents handle accounting, stakeholder management, compliance, and operational workflows independently, so your teams can focus on strategy.
                            </p>
                            <div className="about-four__points-box">
                                <ul className="about-four__points-list list-unstyled" style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: 0, padding: 0 }}>
                                    <li style={{ 
                                        padding: '12px 25px', 
                                        background: 'rgba(255, 255, 255, 0.03)', 
                                        backdropFilter: 'blur(12px)', 
                                        borderRadius: '20px', 
                                        border: '1px solid rgba(255, 255, 255, 0.06)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '100%',
                                        margin: 0
                                    }}>
                                        <div className="icon" style={{ marginBottom: 0 }}>
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <p style={{ margin: 0 }}>Manages complex workflows<br />autonomously</p>
                                    </li>
                                    <li style={{ 
                                        padding: '12px 25px', 
                                        background: 'rgba(255, 255, 255, 0.03)', 
                                        backdropFilter: 'blur(12px)', 
                                        borderRadius: '20px', 
                                        border: '1px solid rgba(255, 255, 255, 0.06)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '100%',
                                        margin: 0
                                    }}>
                                        <div className="icon" style={{ marginBottom: 0 }}>
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <p style={{ margin: 0 }}>Enforces governance without<br />manual oversight</p>
                                    </li>
                                    <li style={{ 
                                        padding: '12px 25px', 
                                        background: 'rgba(255, 255, 255, 0.03)', 
                                        backdropFilter: 'blur(12px)', 
                                        borderRadius: '20px', 
                                        border: '1px solid rgba(255, 255, 255, 0.06)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '100%',
                                        margin: 0
                                    }}>
                                        <div className="icon" style={{ marginBottom: 0 }}>
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <p style={{ margin: 0 }}>Operates continuously with<br />full audit compliance</p>
                                    </li>
                                    <li style={{ 
                                        marginTop: '4px',
                                        padding: '20px 25px', 
                                        background: 'rgba(0, 163, 255, 0.05)', 
                                        backdropFilter: 'blur(10px)', 
                                        borderRadius: '24px', 
                                        border: '1px solid rgba(0, 163, 255, 0.2)',
                                        width: '100%',
                                        marginLeft: 0,
                                        marginRight: 0,
                                        marginBottom: 0
                                    }}>
                                        <div className="about-four__points-list-content">
                                            <p style={{ margin: 0, color: '#fff', fontSize: '16px', fontWeight: '500', lineHeight: '1.6' }}>
                                                Founded in 2025 in Abu Dhabi, <span style={{ color: 'var(--thm-primary)' }}>Agentic AI</span> is an AG Group company building production-grade AI operating layers.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
