import Layout from "@/components/layout/Layout";
import About from "@/components/sections/InnerSection/About";
import Team from "@/components/sections/InnerSection/Team";
export default function About_Page() {

    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
            <About/>
            <Team/>
        </Layout>
    )
}
