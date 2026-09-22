import { useEffect, useRef, useState } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logoImg from "./assets/images/Logo.webp";
import whiteLogoImg from "./assets/images/Logo - white.webp";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx"; // Imported your details page
import GetInvolved from "./pages/GetInvolved.jsx";
import Partner from "./pages/Partner.jsx";
import Volunteer from "./pages/Volunteer.jsx";
import Blog from "./pages/Blog.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import Donate from "./pages/Donate.jsx";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

const navItems = [
  { label: "Home", to: "/", end: true },
  { label: "About", to: "/about" },
  { label: "Our Projects", to: "/projects" },
  {
    label: "Get Involved",
    to: "/get-involved",
    hasDropdown: true,
    children: [
      { label: "Be a Partner", to: "/get-involved/partner" },
      { label: "Volunteer with Us", to: "/get-involved/volunteer" },
    ],
  },
  { label: "Blog", to: "/blog" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
  { label: "Donate", to: "/donate", variant: "donate" },
];

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);

  return null;
}

function Header() {
  const location = useLocation();
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
  }, [location.pathname]);

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

      // Add temporary class to header to prevent hover dropdown while scrolling
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
          to="/"
          aria-label="My Birthday Charity Foundation home"
          onClick={closeAllMenus}
        >
          <img
            className="brand-logo"
            src={logoImg}
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

            const navLink = (
              <NavLink
                className={({ isActive }) =>
                  [
                    "nav-link",
                    isActive ? "active" : "",
                    item.variant === "donate" ? "donate-link" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")
                }
                end={item.end}
                to={item.to}
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
              </NavLink>
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
                  {item.children.map((child) => (
                    <NavLink
                      className="nav-submenu-link"
                      key={child.label}
                      to={child.to}
                      onClick={closeAllMenus}
                    >
                      {child.label}
                    </NavLink>
                  ))}
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

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="site-footer-brand">
          <Link className="brand footer-brand" to="/" aria-label="My Birthday Charity Foundation home">
            <img
              className="brand-logo footer-logo"
              src={whiteLogoImg}
              alt="My Birthday Charity Foundation"
            />
          </Link>
          <p>
            My Birthday Charity Foundation is a Nigerian nonprofit supporting
            vulnerable children and communities through food, education,
            healthcare, and outreach, powered by everyday people who choose to
            give.
          </p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/gallery">Gallery</Link>
        </nav>
        <div className="footer-contact">
          <a href="mailto:mybirthdaypresent@gmail.com">
            mybirthdaypresent@gmail.com
          </a>
          <a href="tel:+2348142839405">08142839405, 0814839405</a>
        </div>
      </div>
      <div className="site-footer-bottom">
        <span aria-hidden="true">&copy;</span>
        <p>2025 My Birthday Charity Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
}

function AppRoutes() {
  const location = useLocation();
  useScrollAnimation();

  return (
    <div className="site-shell">
      <ScrollToTop />
      <Header />

      <main className="main-content-area" key={location.pathname}>
        <div className="page-transition-wrapper">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* Projects routes */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />

            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/get-involved/partner" element={<Partner />} />
            <Route path="/get-involved/volunteer" element={<Volunteer />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
