import { useState } from "react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

type MobileMenuProps = {
  isSidebar: boolean;
  handleMobileMenu: () => void;
};

export default function MobileMenu({ isSidebar, handleMobileMenu }: MobileMenuProps) {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("menu");
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (key: number) => {
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Mobile Menu Wrapper */}
      <div className={`mobile-nav__wrapper ${isSidebar ? "expanded" : ""}`}>
        {/* Overlay */}
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={handleMobileMenu}
        ></div>

        {/* Mobile Menu Content */}
        <div className="mobile-nav__content">
          {/* Close Button */}
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={handleMobileMenu}
          >
            <i className="fa fa-times"></i>
          </span>


          {/* Logo */}
          <div className="logo-box">
            <Link href="/" aria-label="logo image" onClick={handleMobileMenu}>
              <Image
                src="/ag-logo.png"
                alt="AG Logo"
                width={120}
                height={60}
                priority
              />
            </Link>
          </div>

          {/* Navigation */}
          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              <li className={isActive("/") ? "current" : ""}>
                <Link href="/" onClick={handleMobileMenu}>
                  {t("home")}
                </Link>
              </li>
              <li className={isActive("/about") ? "current" : ""}>
                <Link href="/about" onClick={handleMobileMenu}>
                  {t("about")}
                </Link>
              </li>
              <li className={isActive("/services") ? "current" : ""}>
                <Link href="/services" onClick={handleMobileMenu}>
                  {t("services")}
                </Link>
              </li>
              <li className={isActive("/contact") ? "current" : ""}>
                <Link href="/contact" onClick={handleMobileMenu}>
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope" style={{ margin: '0 10px' }}></i>
              <Link href="mailto:info@agenticaids.ae">info@agenticaids.ae</Link>
            </li>
            <li>
              <i className="fas fa-phone" style={{ margin: '0 10px' }}></i>
              <Link href="tel:+971547111343">+971 54 711 1343</Link>
            </li>
          </ul>

          {/* Language Switcher */}
          <div className="mobile-nav__language-switcher" style={{ marginTop: '30px', padding: '0 20px' }}>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const nextLocale = locale === "en" ? "ar" : "en";
                router.push(pathname, { locale: nextLocale });
                handleMobileMenu();
              }}
              style={{
                fontSize: "18px",
                color: "var(--techguru-white)",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 15px",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "8px"
              }}
            >
              <i className="fa fa-globe"></i>
              <span style={{ fontSize: "14px", fontWeight: "600", textTransform: "uppercase" }}>
                {locale === "en" ? "Arabic" : "English"}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
