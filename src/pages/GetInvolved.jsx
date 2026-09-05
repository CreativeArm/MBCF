import { Link } from "react-router-dom";
import { Gift, HandHeart, Handshake, HeartHandshake } from "lucide-react";
import AboutVolunteerCta from "../components/AboutVolunteerCta";
import InnerPageHero from "../components/InnerPageHero";
import "../projects.css";
import "../get-involved.css";
import { involvementOptions, involvementSteps } from "../data/involvement";
import heroImage from "../assets/images/bacground1.jpg";
import processImage from "../assets/images/IMG_1916 (1).jpeg";

const optionIcons = {
  volunteer: HandHeart,
  donate: Gift,
  partner: Handshake,
};

function GetInvolved() {
  return (
    <div className="involve-page">
      <InnerPageHero
        eyebrow="Get Involved"
        title={<>Be Part of the <span>change</span></>}
        titleId="involve-title"
        description="There are many ways to support the mission through giving, volunteering, partnership, and community service."
        image={heroImage}
        imageAlt="Children supported by My Birthday Charity Foundation"
      />

      <section className="involve-section involve-intro" aria-labelledby="involve-intro-title">
        <h2 id="involve-intro-title">
          There are many ways to support our mission. Whether through giving,
          volunteering, or partnering with us, your involvement makes a
          difference
        </h2>

        <div className="involve-option-grid">
          {involvementOptions.map((option) => {
            const Icon = optionIcons[option.id] || HeartHandshake;

            return (
              <article className="involve-option-card" key={option.id}>
                <span className="involve-option-icon">
                  <Icon size={30} aria-hidden="true" />
                </span>
                <h3>{option.title}</h3>
                <p>{option.summary}</p>
                <Link className="involve-button" to={option.to}>
                  {option.buttonLabel}
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="involve-section involve-steps" aria-labelledby="involve-steps-title">
        <div className="involve-section-heading">
          <p className="home-kicker">How it works</p>
          <h2 id="involve-steps-title">
            Getting involved is simple and takes only a few steps.
          </h2>
        </div>

        <div className="involve-steps-layout">
          <div className="involve-process-image">
            <img
              src={processImage}
              alt="Volunteers and community members during an outreach"
            />
          </div>

          <div className="involve-step-list">
            {involvementSteps.map((step, index) => (
              <article className="involve-step-card" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AboutVolunteerCta />
    </div>
  );
}

export default GetInvolved;
