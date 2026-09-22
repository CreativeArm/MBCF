"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Header from "./Header";
import Footer from "./Footer";

export default function ClientShell({ children }) {
  const pathname = usePathname();
  useScrollAnimation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  return (
    <div className="site-shell">
      <Header />
      <main className="main-content-area" key={pathname}>
        <div className="page-transition-wrapper">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
