import { useMemo } from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import AnimatedTitle from "@/components/elements/AnimatedTitle";
import { useTranslations, useLocale } from "next-intl";

import service1 from "@/public/service1.png";
import service2 from "@/public/service2.png";
import service3 from "@/public/service3.png";

export default function Services() {
  const t = useTranslations("services");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const circleText = t("circleText");

  // Create React-friendly rotated letters
  const rotatedChars = useMemo(() => {
    const chars = circleText.split("");
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
      <section className="services-two" id="services" dir={isRtl ? 'rtl' : 'ltr'}>
          <div className="services-two__shape-1"></div>
          <div className="container">
              <div className="services-two__top" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '30px' }}>
                  <div className={`section-title ${isRtl ? 'text-right' : 'text-left'} sec-title-animation animation-style2`} style={{ textAlign: isRtl ? 'right' : 'left', flex: 1 }}>
                      <div className="section-title__tagline-box">
                          <div className="section-title__tagline-shape-1"></div>
                          <span className="section-title__tagline">{t("tagline")}</span>
                          <div className="section-title__tagline-shape-2"></div>
                      </div>
                      <AnimatedTitle>
                          <h2 className="section-title__title title-animation" style={{ width: '100%', maxWidth: 'none' }}>
                              {t("title")}<br />
                              <span>{t("focus")}</span><br />
                              <span>{t("scale")}</span>
                          </h2>
                      </AnimatedTitle>
                  </div>
                  <Link href="/services" className="services-two__round-text-box" style={{ flexShrink: 0, marginTop: '20px' }}>
                  <div className="services-two__round-text-box-outer">
                      <div className="services-two__round-text-box-inner">
                      <div className="services-two__curved-circle">
                          {isRtl ? (
                              <svg viewBox="0 0 150 150" style={{ width: '150px', height: '150px' }}>
                                  <path id="circlePath" fill="none" d="M 75, 75 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" />
                                  <text fill="var(--techguru-base)" style={{ fontSize: '14px', fontWeight: '500', fontFamily: 'var(--techguru-font)' }}>
                                      <textPath href="#circlePath" startOffset="0%">
                                          {circleText} {circleText}
                                      </textPath>
                                  </text>
                                  <style>{`
                                      svg {
                                          animation: rotateCircle 10s linear infinite;
                                      }
                                      @keyframes rotateCircle {
                                          from { transform: rotate(0deg); }
                                          to { transform: rotate(360deg); }
                                      }
                                  `}</style>
                              </svg>
                          ) : (
                              rotatedChars
                          )}
                      </div>
                      </div>
                  </div>
                  </Link>
              </div>
              <div className="services-two__bottom">
                  <div className="services-two__services-list">
                      <div className={"services-two__services-list-single services-two__services-list-single-1 " + (isRtl ? "text-right" : "")}>
                          <div className="services-two__count-and-title">
                              <div className="services-two__count">01</div>
                              <h3 className="services-two__title">
                                  <Link href="/intelligent-agents">
                                      {t("service1.title").split('\n').map((line, i) => (
                                          <span key={i}>{line}<br /></span>
                                      ))}
                                  </Link>
                              </h3>
                          </div>
                          <div className="services-two__service-list-box">
                              <ul className="services-two__services-list-inner list-unstyled">
                                  <li style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                      <p><span className={`icon-plus ${isRtl ? 'ms-2' : 'me-2'}`}></span>{t("service1.point1")}</p>
                                      <p><span className={`icon-plus ${isRtl ? 'ms-2' : 'me-2'}`}></span>{t("service1.point2")}</p>
                                  </li>
                                  <li style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                      <p><span className={`icon-plus ${isRtl ? 'ms-2' : 'me-2'}`}></span>{t("service1.point3")}</p>
                                      <p><span className={`icon-plus ${isRtl ? 'ms-2' : 'me-2'}`}></span>{t("service1.point4")}</p>
                                  </li>
                                  <li style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                      <p><span className={`icon-plus ${isRtl ? 'ms-2' : 'me-2'}`}></span>{t("service1.point5")}</p>
                                      <p><span className={`icon-plus ${isRtl ? 'ms-2' : 'me-2'}`}></span>{t("service1.point6")}</p>
                                  </li>
                              </ul>
                          </div>
                          <div className="services-two__hover-img">
                              <Image
                                src={service1}
                                alt="AI systems orchestrating agentic workflows"
                                width={250}
                                height={320}
                                priority
                                style={{ objectFit: 'cover' }}
                              />
                          </div>
                      </div>
                      <div className={"services-two__services-list-single " + (isRtl ? "text-right" : "")}>
                          <div className="services-two__count-and-title">
                              <div className="services-two__count">02</div>
                              <h3 className="services-two__title">
                                  <Link href="/governance-compliance">
                                      {t("service2.title").split('\n').map((line, i) => (
                                          <span key={i}>{line}<br /></span>
                                      ))}
                                  </Link>
                              </h3>
                          </div>
                          <div className="services-two__service-list-box">
                              <ul className="services-two__services-list-inner list-unstyled">
                                  <li style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                      <p><span className={`icon-plus ${isRtl ? 'ms-2' : 'me-2'}`}></span>{t("service2.point1")}</p>
                                      <p><span className={`icon-plus ${isRtl ? 'ms-2' : 'me-2'}`}></span>{t("service2.point2")}</p>
                                  </li>
                                  <li style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                      <p><span className={`icon-plus ${isRtl ? 'ms-2' : 'me-2'}`}></span>{t("service2.point3")}</p>
                                      <p><span className={`icon-plus ${isRtl ? 'ms-2' : 'me-2'}`}></span>{t("service2.point4")}</p>
                                  </li>
                                  <li style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                      <p><span className={`icon-plus ${isRtl ? 'ms-2' : 'me-2'}`}></span>{t("service2.point5")}</p>
                                      <p><span className={`icon-plus ${isRtl ? 'ms-2' : 'me-2'}`}></span>{t("service2.point6")}</p>
                                  </li>
                              </ul>
                          </div>
                          <div className="services-two__hover-img">
                              <Image
                                src={service2}
                                alt="Governance dashboard with compliance metrics"
                                width={250}
                                height={320}
                                priority
                                style={{ objectFit: 'cover' }}
                              />
                          </div>
                      </div>
                      <div className={"services-two__services-list-single " + (isRtl ? "text-right" : "")}>
                          <div className="services-two__count-and-title">
                              <div className="services-two__count">03</div>
                              <h3 className="services-two__title">
                                  <Link href="/team-enablement">
                                      {t("service3.title").split('\n').map((line, i) => (
                                          <span key={i}>{line}<br /></span>
                                      ))}
                                  </Link>
                              </h3>
                          </div>
                          <div className="services-two__service-list-box">
                              <ul className="services-two__services-list-inner list-unstyled">
                                  <li style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                      <p><span className={`icon-plus ${isRtl ? 'ms-2' : 'me-2'}`}></span>{t("service3.point1")}</p>
                                      <p><span className={`icon-plus ${isRtl ? 'ms-2' : 'me-2'}`}></span>{t("service3.point2")}</p>
                                  </li>
                                  <li style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                      <p><span className={`icon-plus ${isRtl ? 'ms-2' : 'me-2'}`}></span>{t("service3.point3")}</p>
                                      <p><span className={`icon-plus ${isRtl ? 'ms-2' : 'me-2'}`}></span>{t("service3.point4")}</p>
                                  </li>
                                  <li style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                      <p><span className={`icon-plus ${isRtl ? 'ms-2' : 'me-2'}`}></span>{t("service3.point5")}</p>
                                      <p><span className={`icon-plus ${isRtl ? 'ms-2' : 'me-2'}`}></span>{t("service3.point6")}</p>
                                  </li>
                              </ul>
                          </div>
                          <div className="services-two__hover-img">
                              <Image
                                src={service3}
                                alt="Leaders reviewing AI strategy together"
                                width={250}
                                height={320}
                                priority
                                style={{ objectFit: 'cover' }}
                              />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}
