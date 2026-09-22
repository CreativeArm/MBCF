import Link from "next/link";
import whiteLogoImg from "../assets/images/Logo - white.webp";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="site-footer-brand">
          <Link
            className="brand footer-brand"
            href="/"
            aria-label="My Birthday Charity Foundation home"
          >
            <img
              className="brand-logo footer-logo"
              src={whiteLogoImg.src || whiteLogoImg}
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
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/gallery">Gallery</Link>
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
