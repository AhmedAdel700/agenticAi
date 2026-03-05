import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function MainMenu() {
  const pathname = usePathname();
  const t = useTranslations("menu");

  const isActive = (path: string) => pathname === path;

  return (
    <ul className="main-menu__list">
      <li className={isActive("/") ? "current" : ""}>
        <Link href="/">{t("home")}</Link>
      </li>
      <li className={isActive("/about") ? "current" : ""}>
        <Link href="/about">{t("about")}</Link>
      </li>
      <li className={isActive("/services") ? "current" : ""}>
        <Link href="/services">{t("services")}</Link>
      </li>
      <li className={isActive("/contact") ? "current" : ""}>
        <Link href="/contact">{t("contact")}</Link>
      </li>
    </ul>
  );
}
