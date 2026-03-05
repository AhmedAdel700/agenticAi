
import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/home1/Banner";
import Services from "@/components/sections/home1/Services";
import About from "@/components/sections/home1/About";
import Portfolio from "@/components/sections/home1/Portfolio";
import Testimonial from "@/components/sections/home1/Testimonial";
export default function Home_One() {

    return (
        <Layout headerStyle={1} footerStyle={1}>
            <Banner/>
            <Services/>
            <About/>
            <Portfolio/>
            <Testimonial/>
        </Layout>
    )
}
