
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainMenu() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <ul className="main-menu__list">
      <li className={isActive("/") ? "current" : ""}>
        <Link href="/">Home</Link>
      </li>
      <li className={isActive("/about") ? "current" : ""}>
        <Link href="/about">About</Link>
      </li>
      <li className={isActive("/services") ? "current" : ""}>
        <Link href="/services">Services</Link>
      </li>
      <li className={isActive("/contact") ? "current" : ""}>
        <Link href="/contact">Contact Us</Link>
      </li>
    </ul>
  );
}
