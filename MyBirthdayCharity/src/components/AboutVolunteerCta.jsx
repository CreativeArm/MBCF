import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "../assets/images/bacground1.jpg";

function AboutVolunteerCta({
  kicker = "Volunteer",
  title = "Come do this work with us.",
  description = "Some of our most meaningful moments started with one person deciding to show up, whether that's on outreach, behind a laptop, or somewhere in between. If you've got time, energy, or a skill worth sharing, writing, there's a place for you on our team.",
  buttonLabel = "Join As a Volunteer",
  buttonTo = "/get-involved/volunteer",
}) {
  return (
    <section
      className="about-volunteer"
      aria-labelledby="about-volunteer-title"
    >
      <img src={heroImage} alt="Children smiling in the background" />
      <div className="about-volunteer-overlay" />
      <div className="about-volunteer-card">
        <p>{kicker}</p>
        <h2 id="about-volunteer-title">{title}</h2>
        <span>{description}</span>
        <Link to={buttonTo}>
          {buttonLabel}
          <span aria-hidden="true">
            <ArrowRight size={22} />
          </span>
        </Link>
      </div>
    </section>
  );
}

export default AboutVolunteerCta;
