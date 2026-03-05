
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type MobileMenuProps = {
  isSidebar: boolean;
  handleMobileMenu: () => void;
};

export default function MobileMenu({ isSidebar, handleMobileMenu }: MobileMenuProps) {
  const pathname = usePathname();
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
                  Home
                </Link>
              </li>
              <li className={isActive("/about") ? "current" : ""}>
                <Link href="/about" onClick={handleMobileMenu}>
                  About
                </Link>
              </li>
              <li className={isActive("/services") ? "current" : ""}>
                <Link href="/services" onClick={handleMobileMenu}>
                  Services
                </Link>
              </li>
              <li className={isActive("/contact") ? "current" : ""}>
                <Link href="/contact" onClick={handleMobileMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <Link href="mailto:info@agenticaids.ae">info@agenticaids.ae</Link>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <Link href="tel:+971547111343">+971 54 711 1343</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
