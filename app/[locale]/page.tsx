
import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/home1/Banner";
import PartnerSlider from "@/components/sections/home1/PartnerSlider";
import Services from "@/components/sections/home1/Services";
import About from "@/components/sections/home1/About";
import Solutions from "@/components/sections/home1/Solutions";
import Portfolio from "@/components/sections/home1/Portfolio";
import Methodology from "@/components/sections/home1/Methodology";
import Testimonial from "@/components/sections/home1/Testimonial";
import WhyUs from "@/components/sections/home1/WhyUs";
export default function Home_One() {

    return (
        <Layout headerStyle={1} footerStyle={1}>
            <Banner/>
            <PartnerSlider/>
            <Services/>
            <Solutions/>
            <About/>
            <Portfolio/>
            <Methodology/>
            <Testimonial/>
            <WhyUs/>
        </Layout>
    )
}
