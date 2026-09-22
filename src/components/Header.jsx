"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import logoImg from "../assets/images/Logo.webp";

const navItems = [
  { label: "Home", href: "/", end: true },
  { label: "About", href: "/about" },
  { label: "Our Projects", href: "/projects" },
  {
    label: "Get Involved",
    href: "/get-involved",
    hasDropdown: true,
    children: [
      { label: "Be a Partner", href: "/get-involved/partner" },
      { label: "Volunteer with Us", href: "/get-involved/volunteer" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Donate", href: "/donate", variant: "donate" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const scrollTimeoutRef = useRef(null);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);

    // Blur active element to remove persistent :focus
    if (document.activeElement && document.activeElement.blur) {
      document.activeElement.blur();
    }

    // Temporarily add header-menu-closed class to prevent hover dropdown from persisting immediately on click
    const headerEl = document.querySelector(".site-header");
    if (headerEl) {
      headerEl.classList.add("header-menu-closed");
      setTimeout(() => {
        headerEl.classList.remove("header-menu-closed");
      }, 350);
    }
  };

  // Close menu & dropdown on route change
  useEffect(() => {
    closeAllMenus();
  }, [pathname]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".nav-item.has-dropdown")) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Handle scroll detection and close all dropdowns and mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 48);
      closeAllMenus();

      const headerEl = document.querySelector(".site-header");
      if (headerEl) {
        headerEl.classList.add("header-scrolling");
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
          headerEl.classList.remove("header-scrolling");
        }, 220);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <header className={isScrolled ? "site-header scrolled" : "site-header"}>
        <Link
          className="brand"
          href="/"
          aria-label="My Birthday Charity Foundation home"
          onClick={closeAllMenus}
        >
          <img
            className="brand-logo"
            src={logoImg.src || logoImg}
            alt="My Birthday Charity Foundation"
          />
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav
          className={isMenuOpen ? "nav-links open" : "nav-links"}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => {
            const hasChildren = Boolean(item.children?.length);
            const isDropdownActive = openDropdown === item.label;
            const isActive = item.end
              ? pathname === item.href
              : pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

            const navLink = (
              <Link
                className={[
                  "nav-link",
                  isActive ? "active" : "",
                  item.variant === "donate" ? "donate-link" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                href={item.href}
                onClick={closeAllMenus}
              >
                {item.label}
                {hasChildren ? (
                  <ChevronDown
                    className="nav-chevron"
                    size={13}
                    strokeWidth={2.6}
                    aria-hidden="true"
                  />
                ) : null}
              </Link>
            );

            if (!hasChildren) {
              return <span key={item.label}>{navLink}</span>;
            }

            return (
              <div
                className={`nav-item has-dropdown ${isDropdownActive ? "dropdown-open" : ""}`}
                key={item.label}
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() =>
                  setOpenDropdown((current) =>
                    current === item.label ? null : current,
                  )
                }
              >
                {navLink}
                <div
                  className="nav-submenu"
                  aria-label={`${item.label} submenu`}
                >
                  {item.children.map((child) => {
                    const isChildActive = pathname === child.href;
                    return (
                      <Link
                        className={`nav-submenu-link ${isChildActive ? "active" : ""}`}
                        key={child.label}
                        href={child.href}
                        onClick={closeAllMenus}
                      >
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </nav>
      </header>

      {isMenuOpen ? (
        <div
          className="nav-backdrop"
          aria-hidden="true"
          onClick={closeAllMenus}
        />
      ) : null}
    </>
  );
}
