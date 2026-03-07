// components/layout/Layout.tsx
// ✅ SERVER COMPONENT (no "use client")

import Header from "./Header"; // Client component
import Footer from "./Footer"; // Server component
import Breadcrumb from "./Breadcrumb";
import FloatingContact from "../elements/FloatingContact";

interface LayoutProps {
  children: React.ReactNode;
  headerStyle?: 1 | 2 | 3 | 4 | 5; // choose header variant
  footerStyle?: 1 | 2;    // choose footer variant
  breadcrumbTitle?: string;
}

export default function Layout({
  children,
  headerStyle = 1,
  footerStyle = 1,
  breadcrumbTitle,
}: LayoutProps) {
  return (
    <div className="page-wrapper" id="top">
      {/* Header (client component) */}
      <Header style={headerStyle} />

      {/* Breadcrumbs (server components) */}
      {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

      {/* Main page content */}
      <main>{children}</main>

      {/* Quick Contact FAB */}
      <FloatingContact />

      {/* Footer (server component) */}
      <Footer style={footerStyle} />
    </div>
  );
}
