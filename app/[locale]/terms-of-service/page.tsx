import Layout from "@/components/layout/Layout";
import { getTranslations } from "next-intl/server";

export default async function TermsOfServicePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "terms_page" });
    const isRtl = locale === 'ar';

    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t("tagline")}>
            <section className="terms-of-service-section" style={{ padding: '120px 0', background: 'var(--techguru-black)', position: 'relative' }} dir={isRtl ? 'rtl' : 'ltr'}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                            <div className="policy-content" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '16px', lineHeight: '1.8' }}>
                                <h2 style={{ color: 'var(--techguru-white)', marginBottom: '30px', fontWeight: '700', fontSize: '36px' }}>{t("title")}</h2>
                                <p style={{ marginBottom: '40px', fontSize: '18px' }}>{t("last_updated")}</p>

                                <h4 style={{ color: 'var(--techguru-white)', marginTop: '40px', marginBottom: '15px', fontWeight: '600', fontSize: '24px' }}>{t("point1_title")}</h4>
                                <p style={{ marginBottom: '30px' }}>{t("point1_text")}</p>

                                <h4 style={{ color: 'var(--techguru-white)', marginTop: '40px', marginBottom: '15px', fontWeight: '600', fontSize: '24px' }}>{t("point2_title")}</h4>
                                <p style={{ marginBottom: '30px' }}>{t("point2_text")}</p>

                                <h4 style={{ color: 'var(--techguru-white)', marginTop: '40px', marginBottom: '15px', fontWeight: '600', fontSize: '24px' }}>{t("point3_title")}</h4>
                                <p style={{ marginBottom: '30px' }}>{t("point3_text")}</p>

                                <h4 style={{ color: 'var(--techguru-white)', marginTop: '40px', marginBottom: '15px', fontWeight: '600', fontSize: '24px' }}>{t("point4_title")}</h4>
                                <p style={{ marginBottom: '30px' }}>{t("point4_text")}</p>

                                <h4 style={{ color: 'var(--techguru-white)', marginTop: '40px', marginBottom: '15px', fontWeight: '600', fontSize: '24px' }}>{t("point5_title")}</h4>
                                <p style={{ marginBottom: '30px' }}>{t("point5_text")}</p>

                                <h4 style={{ color: 'var(--techguru-white)', marginTop: '40px', marginBottom: '15px', fontWeight: '600', fontSize: '24px' }}>{t("point6_title")}</h4>
                                <p style={{ marginBottom: '30px' }}>
                                    {t("point6_text_pre")}<br/>
                                    <strong>{t("email")}:</strong> info@agenticaids.ae<br/>
                                    <strong>{t("location")}:</strong> {t("location_val")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
