import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "../assets/images/bacground1.jpg";

function AboutVolunteerCta() {
  return (
    <section className="about-volunteer" aria-labelledby="about-volunteer-title">
      <img src={heroImage} alt="Children smiling in the background" />
      <div className="about-volunteer-overlay" />
      <div className="about-volunteer-card">
        <p>Volunteer</p>
        <h2 id="about-volunteer-title">Be a Volunteer for Brighter Futures</h2>
        <span>
          To inspire individuals to celebrate birthdays by giving back to the
          community, fostering compassion and generosity through impactful
          outreach.
        </span>
        <Link to="/get-involved">
          Join As a Volunteers
          <span aria-hidden="true">
            <ArrowRight size={22} />
          </span>
        </Link>
      </div>
    </section>
  );
}

export default AboutVolunteerCta;
