import Link from "next/link";
import { ArrowRight } from "lucide-react";
import heroImage from "../assets/images/bacground1.webp";

function AboutVolunteerCta({
  kicker = "Volunteer",
  title = "Come do this work with us.",
  description = "Some of our most meaningful moments started with one person deciding to show up, whether that's on outreach, behind a laptop, or somewhere in between. If you've got time, energy, or a skill worth sharing, there's a place for you on our team.",
  buttonLabel = "Join As a Volunteer",
  buttonTo = "/get-involved/volunteer",
}) {
  return (
    <section
      className="about-volunteer"
      aria-labelledby="about-volunteer-title"
    >
      <img src={heroImage.src || heroImage} alt="Children smiling in the community outreach" />
      <div className="about-volunteer-overlay" />
      <div className="about-volunteer-card">
        <span className="about-volunteer-pill">{kicker}</span>
        <h2 id="about-volunteer-title">{title}</h2>
        <p>{description}</p>
        <Link href={buttonTo} className="about-volunteer-btn">
          <span>{buttonLabel}</span>
          <span className="about-btn-icon" aria-hidden="true">
            <ArrowRight size={16} />
          </span>
        </Link>
      </div>
    </section>
  );
}

export default AboutVolunteerCta;
