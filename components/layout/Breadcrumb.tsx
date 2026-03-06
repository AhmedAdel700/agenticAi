"use client";
import React from "react";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

interface BreadcrumbProps {
  breadcrumbTitle: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbTitle })  => {
  const locale = useLocale();
  const isRtl = locale === 'ar';
  const t = useTranslations("menu");

  return (

    <section className="page-header" style={{ textAlign: isRtl ? 'right' : 'left' }}>
            <div className="page-header__bg" style={{ backgroundImage: "url(/breadcramb.jpg)" }}>
            </div>
            <div className="container">
                <div className="page-header__inner">
                    <h2 style={{ textAlign: isRtl ? 'right' : 'left' }}>{ breadcrumbTitle }</h2>
                    <div className="thm-breadcrumb__box" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
                        <ul className="thm-breadcrumb list-unstyled" style={{ display: 'flex', justifyContent: isRtl ? 'flex-start' : 'flex-start', alignItems: 'center' }}>
                            <li><Link href="/"><i className="fas fa-home" style={{ marginLeft: isRtl ? '10px' : '0', marginRight: isRtl ? '0' : '10px' }}></i>{t("home")}</Link></li>
                            <li><span className="icon-right-arrow-1" style={{ transform: isRtl ? 'rotate(180deg)' : 'none', display: 'inline-block', margin: '0 10px' }}></span></li>
                            <li>{ breadcrumbTitle }</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default Breadcrumb;
