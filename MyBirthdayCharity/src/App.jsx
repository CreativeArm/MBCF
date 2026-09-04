import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logoImg from "./assets/images/Logo.png";
import whiteLogoImg from "./assets/images/Logo - white.png";
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

const navItems = [
  { label: "Home", to: "/", end: true },
  { label: "About", to: "/about" },
  { label: "Our Projects", to: "/projects", hasDropdown: true },
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

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 48);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? "site-header scrolled" : "site-header"}>
      <Link className="brand" to="/" aria-label="My Birthday Charity Foundation home">
        <img
          className="brand-logo"
          src={isScrolled ? logoImg : whiteLogoImg}
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
            >
              {item.label}
              {item.hasDropdown ? (
                <ChevronDown
                  className="nav-chevron"
                  size={13}
                  strokeWidth={2.6}
                  aria-hidden="true"
                />
              ) : null}
            </NavLink>
          );

          if (!item.children?.length) {
            return <span key={item.label}>{navLink}</span>;
          }

          return (
            <div className="nav-item has-dropdown" key={item.label}>
              {navLink}
              <div className="nav-submenu" aria-label={`${item.label} submenu`}>
                {item.children.map((child) => (
                  <NavLink
                    className="nav-submenu-link"
                    key={child.label}
                    to={child.to}
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
  return (
    <div className="site-shell">
      <ScrollToTop />
      <Header />

      <main>
        <Routes>
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
