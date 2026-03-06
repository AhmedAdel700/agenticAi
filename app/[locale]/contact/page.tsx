import Layout from "@/components/layout/Layout";
import Contact from "@/components/sections/home2/Contact";
import { getTranslations } from "next-intl/server";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "contact_page" });
    
    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t("tagline")}>
            <Contact/>
        </Layout>
    )
}
