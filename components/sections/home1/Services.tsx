"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "@/components/elements/AnimatedTitle";

export default function Services() {
  const circleText = "&nbsp;Our Services • Core Focus •";

  // Create React-friendly rotated letters
  const rotatedChars = useMemo(() => {
    const cleanText = circleText.replace(/&nbsp;/g, " ");
    const chars = cleanText.split("");
    const radius = 73.6;
    const total = chars.length;
    const deg = 360 / total;

    return chars.map((char, i) => (
      <span
        key={i}
        style={{
          position: "absolute",
          left: "0%",
          top: "0%",
          transformOrigin: `0 ${radius}px`,
          transform: `rotate(${i * deg}deg)`,
        }}
      >
        {char}
      </span>
    ));
  }, [circleText]);

  return (
    <>
        <section className="services-two" id="services">
            <div className="services-two__shape-1"></div>
            <div className="container">
                <div className="services-two__top">
                    <div className="section-title text-left sec-title-animation animation-style2">
                        <div className="section-title__tagline-box">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline">Our Services</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                        <h2 className="section-title__title title-animation">
                            Services for Institutional-Grade<br />
                            Autonomous Systems<br />
                            <span>Core Focus Areas</span><br />
                            <span>Engineered for Institutional Scale</span>
                        </h2>
                        </AnimatedTitle>
                    </div>
                    <Link href="/services" className="services-two__round-text-box">
                    <div className="services-two__round-text-box-outer">
                        <div className="services-two__round-text-box-inner">
                        <div className="services-two__curved-circle">
                            {rotatedChars}
                        </div>
                        <div className="services-two__round-icon">
                            <Image
                            src="/assets/images/icon/services-two-round-icon.png"
                            alt="icon"
                            width={42}
                            height={42}
                            priority
                            />
                        </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="services-two__bottom">
                    <div className="services-two__services-list">
                        <div className="services-two__services-list-single services-two__services-list-single-1">
                            <div className="services-two__count-and-title">
                                <div className="services-two__count">01</div>
                                <h3 className="services-two__title">
                                    <Link href="/intelligent-agents">
                                        Intelligent<br />Agents
                                    </Link>
                                </h3>
                            </div>
                            <div className="services-two__service-list-box">
                                <ul className="services-two__services-list-inner list-unstyled">
                                    <li>
                                        <p><span className="icon-plus"></span>Multi-modal agentic AI systems</p>
                                        <p><span className="icon-plus"></span>Deep integration with existing platforms</p>
                                    </li>
                                    <li>
                                        <p><span className="icon-plus"></span>Autonomous document processing</p>
                                        <p><span className="icon-plus"></span>Intelligent communications handling</p>
                                    </li>
                                    <li>
                                        <p><span className="icon-plus"></span>24/7 execution across workflows</p>
                                        <p><span className="icon-plus"></span>Multi-agent orchestration</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="services-two__hover-img">
                                <Image
                                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
                                  alt="AI systems orchestrating agentic workflows"
                                  width={250}
                                  height={320}
                                  priority
                                  style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                        <div className="services-two__services-list-single">
                            <div className="services-two__count-and-title">
                                <div className="services-two__count">02</div>
                                <h3 className="services-two__title">
                                    <Link href="/governance-compliance">
                                        Governance &amp;<br />Compliance
                                    </Link>
                                </h3>
                            </div>
                            <div className="services-two__service-list-box">
                                <ul className="services-two__services-list-inner list-unstyled">
                                    <li>
                                        <p><span className="icon-plus"></span>Built-in UAE regulatory alignment</p>
                                        <p><span className="icon-plus"></span>Institutional governance by design</p>
                                    </li>
                                    <li>
                                        <p><span className="icon-plus"></span>Comprehensive audit trails</p>
                                        <p><span className="icon-plus"></span>Risk-aware decision frameworks</p>
                                    </li>
                                    <li>
                                        <p><span className="icon-plus"></span>Institutional-grade security posture</p>
                                        <p><span className="icon-plus"></span>Policy-driven automation</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="services-two__hover-img">
                                <Image
                                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop"
                                  alt="Governance dashboard with compliance metrics"
                                  width={250}
                                  height={320}
                                  priority
                                  style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                        <div className="services-two__services-list-single">
                            <div className="services-two__count-and-title">
                                <div className="services-two__count">03</div>
                                <h3 className="services-two__title">
                                    <Link href="/team-enablement">
                                        Team<br />Enablement
                                    </Link>
                                </h3>
                            </div>
                            <div className="services-two__service-list-box">
                                <ul className="services-two__services-list-inner list-unstyled">
                                    <li>
                                        <p><span className="icon-plus"></span>Comprehensive operational training</p>
                                        <p><span className="icon-plus"></span>Capability transfer to internal teams</p>
                                    </li>
                                    <li>
                                        <p><span className="icon-plus"></span>Deep system documentation</p>
                                        <p><span className="icon-plus"></span>Clear ownership models</p>
                                    </li>
                                    <li>
                                        <p><span className="icon-plus"></span>Post-deployment support options</p>
                                        <p><span className="icon-plus"></span>Change management guidance</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="services-two__hover-img">
                                <Image
                                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                                  alt="Leaders reviewing AI strategy together"
                                  width={250}
                                  height={320}
                                  priority
                                  style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                        {/* Extra UI removed to match available AG services data */}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
