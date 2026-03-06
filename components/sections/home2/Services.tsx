
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "@/components/elements/AnimatedTitle";
import service1 from "@/public/assets/images/services/service1.png";
import service2 from "@/public/assets/images/services/service2.png";
import service3 from "@/public/assets/images/services/service3.png";
import service4 from "@/public/assets/images/services/services-2-1.jpg";
import service5 from "@/public/assets/images/services/services-2-2.jpg";
import service6 from "@/public/assets/images/services/services-2-3.jpg";
import service7 from "@/public/assets/images/services/services-2-4.jpg";
import shape3 from "@/public/assets/images/shapes/services-one-shape-3.png";
import execution1 from "@/public/assets/images/services/execution1.png";
import execution2 from "@/public/assets/images/services/execution2.png";

export default function Services() {
  return (
    <>
        <section className="servces-one" id="services">
            <div className="servces-one__shape-2"></div>
            <div className="servces-one__shape-3 float-bob-y">
                <Image src={shape3} alt="Image" width={693} height={1328} priority />
            </div>
            <div className="container">
                <div className="servces-one__top">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="servces-one__top-left">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <div className="section-title__tagline-shape-1"></div>
                                        <span className="section-title__tagline">Our Services</span>
                                        <div className="section-title__tagline-shape-2"></div>
                                    </div>
                                    <AnimatedTitle>
                                    <h2 className="section-title__title title-animation">Comprehensive, Reliable
                                        <br />Services
                                        <span>Crafted to Exceed</span> Your Expectations</h2>
                                    </AnimatedTitle>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="servces-one__top-right">
                                <p className="servces-one__top-text">From personalized solutions to expert execution, we
                                    prioritize quality, reliability, and customer satisfaction in everything we do. Let
                                    us be your trusted partner in achieving success.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="servces-one__bottom">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="servces-one__img-box wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <div className="servces-one__img">
                                    <Image src={service1} alt="Image" width={520} height={550} priority />
                                </div>
                                <div className="servces-one__img-2">
                                    <Image src={service2} alt="Image" width={190} height={190} priority />
                                </div>
                                <div className="servces-one__shape-1">
                                    <Image src={service3} alt="Image" width={54} height={54} priority />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="servces-one__bottom-right">
                                <ul className="services-one__services-list list-unstyled">
                                    <li>
                                        <div className="services-one__services-single">
                                            <div className="services-one__count-and-content">
                                                <div className="services-one__count"></div>
                                                <div className="services-one__content">
                                                    <h3 className="services-one__title"><Link
                                                            href="/threat-detection-prevention">Provide All Kind Of
                                                            IT
                                                            Services</Link></h3>
                                                    <p className="services-one__text">Comprehensive IT management, including
                                                        network<br /> monitoring, data backup, </p>
                                                </div>
                                            </div>
                                            <div className="services-one__arrow">
                                                <Link href="/threat-detection-prevention"><span
                                                        className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                        <div className="services-one__hover-img">
                                            <Image src={execution1} alt="Image" width={150} height={150} priority />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="services-one__services-single">
                                            <div className="services-one__count-and-content">
                                                <div className="services-one__count"></div>
                                                <div className="services-one__content">
                                                    <h3 className="services-one__title"><Link
                                                            href="/advanced-technology">Cybersecurity Solutions</Link>
                                                    </h3>
                                                    <p className="services-one__text">Scalable cloud solutions, including
                                                        migration,<br /> storage, and management, enabling secure data<br />
                                                        access </p>
                                                </div>
                                            </div>
                                            <div className="services-one__arrow">
                                                <Link href="/advanced-technology"><span
                                                        className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                        <div className="services-one__hover-img">
                                            <Image src={execution2} alt="Image" width={150} height={150} priority />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="services-one__services-single">
                                            <div className="services-one__count-and-content">
                                                <div className="services-one__count"></div>
                                                <div className="services-one__content">
                                                    <h3 className="services-one__title"><Link
                                                            href="/data-protection-privacy">Data Protection &
                                                            Privacy</Link></h3>
                                                    <p className="services-one__text">Comprehensive IT management, including
                                                        network<br /> monitoring, data backup, </p>
                                                </div>
                                            </div>
                                            <div className="services-one__arrow">
                                                <Link href="/data-protection-privacy"><span
                                                        className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                        <div className="services-one__hover-img">
                                            <Image src={service4} alt="Image" width={150} height={150} priority />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="services-one__services-single">
                                            <div className="services-one__count-and-content">
                                                <div className="services-one__count"></div>
                                                <div className="services-one__content">
                                                    <h3 className="services-one__title"><Link
                                                            href="/backup-recovery">Software Development &
                                                            Integration</Link></h3>
                                                    <p className="services-one__text">Custom software development tailored
                                                        to your<br /> business needs, along with seamless integration </p>
                                                </div>
                                            </div>
                                            <div className="services-one__arrow">
                                                <Link href="/backup-recovery"><span
                                                        className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                        <div className="services-one__hover-img">
                                            <Image src={service5} alt="Image" width={150} height={150} priority />
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
