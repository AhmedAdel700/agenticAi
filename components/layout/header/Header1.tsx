"use client";
import Image from "next/image";
import MobileMenu from "../MobileMenu";
import Menu from "../Menu";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";

// ✅ Define props type
type Header1Props = {
  scroll: boolean;
  handleMobileMenu: () => void;
  handlePopup: () => void;
  handleSidebar: () => void;
};

export default function Header1({ scroll, handleMobileMenu }: Header1Props) {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations();

  const toggleLanguage = (e: React.MouseEvent) => {
    e.preventDefault();
    const nextLocale = locale === "en" ? "ar" : "en";
    router.push(pathname, { locale: nextLocale });
  };

  return (
    <>
      {/* main header */}
      <header className={`main-header-two ${scroll ? "fixed-header" : ""}`}>
        <div className="main-menu-two__top">
          <div className="main-menu-two__top-inner">
            <p className="main-menu-two__top-text">
              {t("tagline")}
            </p>
            <ul className="list-unstyled main-menu-two__contact-list">
              <li>
                <div className="icon">
                  <i className="icon-pin"></i>
                </div>
                <div className="text">
                  <p>{t("address")}</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="icon-search-mail"></i>
                </div>
                <div className="text">
                  <p>
                    <Link href="mailto:info@agenticaids.ae">
                      info@agenticaids.ae
                    </Link>
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="icon-phone-call"></i>
                </div>
                <div className="text">
                  <p>
                    <Link href="tel:+971547111343">+971 54 711 1343</Link>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <nav className="main-menu main-menu-two">
          <div className="main-menu-two__wrapper">
            <div className="main-menu-two__wrapper-inner">
              <div className="main-menu-two__left">
                <div className="main-menu-two__logo">
                  <Link href="/">
                    <Image
                      src="/ag-logo.png"
                      alt="AG Logo"
                      width={120}
                      height={60}
                      priority
                    />
                  </Link>
                </div>
              </div>
              <div className="main-menu-two__main-menu-box">
                <Link
                  href="#"
                  className="mobile-nav__toggler"
                  onClick={handleMobileMenu}
                >
                  <i className="fa fa-bars"></i>
                </Link>
                <Menu />
              </div>
              <div className="main-menu-two__right">
                <div className="main-menu-two__language-switcher">
                  <Link
                    href="#"
                    onClick={toggleLanguage}
                    style={{
                      fontSize: "24px",
                      color: "var(--techguru-white)",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <i className="fa fa-globe"></i>
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                      }}
                    >
                      {locale === "en" ? "AR" : "EN"}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* sticky header */}
        <div
          className={`sticky-header main-menu main-menu-two ${scroll ? "animated slideInDown" : ""}`}
        >
          <div className="sticky-header__content">
            <div className="main-menu-two__wrapper">
              <div className="main-menu-two__wrapper-inner">
                <div className="main-menu-two__left">
                  <div className="main-menu-two__logo">
                    <Link href="/">
                      <Image
                        src="/ag-logo.png"
                        alt="AG Logo"
                        width={120}
                        height={60}
                        priority
                      />
                    </Link>
                  </div>
                </div>
                <div className="main-menu-two__main-menu-box">
                  <Link
                    href="#"
                    className="mobile-nav__toggler"
                    onClick={handleMobileMenu}
                  >
                    <i className="fa fa-bars"></i>
                  </Link>
                  <Menu />
                </div>
                <div className="main-menu-two__right">
                  <div className="main-menu-two__language-switcher">
                    <Link
                      href="#"
                      onClick={toggleLanguage}
                      style={{
                        fontSize: "24px",
                        color: "var(--techguru-white)",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <i className="fa fa-globe"></i>
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "bold",
                          textTransform: "uppercase",
                        }}
                      >
                        {locale === "en" ? "AR" : "EN"}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Fixed MobileMenu props */}
        <MobileMenu isSidebar={true} handleMobileMenu={handleMobileMenu} />
      </header>
    </>
  );
}
