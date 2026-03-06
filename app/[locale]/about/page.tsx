import Layout from "@/components/layout/Layout";
import About from "@/components/sections/InnerSection/About";
import Team from "@/components/sections/InnerSection/Team";
import { getTranslations } from "next-intl/server";

export default async function About_Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "about_page" });

    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t("tagline")}>
            <About/>
            <Team/>
        </Layout>
    )
}
