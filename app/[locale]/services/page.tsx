import Image from "next/image";
import Layout from "@/components/layout/Layout";
import Services from "@/components/sections/home1/Services";

export default function ServicePage() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Services">
      {/* High-level capabilities (already mapped to AG data) */}
      <Services />

      {/* Detailed services page content based on AG services page data */}
      <section className="services-four">
        <div
          className="services-four__bg-shape float-bob-y"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop)",
          }}
        ></div>
        <div className="container">
          <div className="row">
            {/* Left: illustrative images */}
            <div className="col-xl-6">
              <div
                className="services-four__left wow slideInLeft"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="services-four__img-box">
                  <div className="services-four__img">
                    <Image
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
                      alt="Advanced technology infrastructure"
                      width={360}
                      height={440}
                      priority
                      style={{ objectFit: 'cover', borderRadius: '24px' }}
                    />
                  </div>
                  <div className="services-four__img-2">
                    <Image
                      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
                      alt="Data-driven autonomous execution"
                      width={360}
                      height={440}
                      priority
                      style={{ objectFit: 'cover', borderRadius: '24px' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: copy and features from AG services page */}
            <div className="col-xl-6">
              <div className="services-four__right">
                <div className="section-title text-left sec-title-animation animation-style2">
                  <div className="section-title__tagline-box">
                    <div className="section-title__tagline-shape-1"></div>
                    <span className="section-title__tagline">Execution Steps</span>
                    <div className="section-title__tagline-shape-2"></div>
                  </div>
                  <h2 className="section-title__title title-animation">
                    Execution Steps<br />
                    <span>Engineering the Enterprise Ecosystem</span>
                  </h2>
                </div>
                <p className="services-four__text">
                  Leveraging distributed machine intelligence and resilient architecture to drive
                  non-linear growth and operational supremacy.
                </p>
                {/* Process – Our Execution Logic (1–4) brought into Capabilities section */}
                <ul className="services-four__points-box list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-technical-support"></span>
                    </div>
                    <div className="content">
                      <h4>01. Understand Environment</h4>
                      <p>Map existing systems, data flows, regulatory constraints, and operational context specific to your organization</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-technical-support"></span>
                    </div>
                    <div className="content">
                      <h4>02. Analyze & Decide</h4>
                      <p>Agents assess context, apply business rules, and determine the appropriate action — not just pattern-matching, but reasoning</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-technical-support"></span>
                    </div>
                    <div className="content">
                      <h4>03. Execute Autonomously</h4>
                      <p>Real actions across enterprise platforms — processing, approving, routing, and completing work with full governance</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-technical-support"></span>
                    </div>
                    <div className="content">
                      <h4>04. Learn & Refine</h4>
                      <p>Continuous improvement through performance feedback, exception handling, and iterative optimization cycles</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process steps now integrated into the Capabilities section above */}
    </Layout>
  );
}
