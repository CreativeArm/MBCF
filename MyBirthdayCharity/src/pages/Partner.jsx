import { Link } from "react-router-dom";
import { ArrowRight, Building2, HandCoins, Megaphone } from "lucide-react";
import InnerPageHero from "../components/InnerPageHero";
import "../projects.css";
import "../get-involved.css";
import heroImage from "../assets/images/bacground1.jpg";
import partnerImage from "../assets/images/IMG_1916 (1).jpeg";

const partnerFocus = [
  {
    title: "Sponsor outreaches",
    copy: "Support birthday outreaches, food drives, school visits, and care-package distributions.",
    Icon: HandCoins,
  },
  {
    title: "Provide resources",
    copy: "Contribute venues, materials, gifts, meals, media support, logistics, or professional services.",
    Icon: Building2,
  },
  {
    title: "Amplify the mission",
    copy: "Help us reach more donors, volunteers, communities, and organizations that can make a difference.",
    Icon: Megaphone,
  },
];

function Partner() {
  return (
    <div className="involve-page">
      <InnerPageHero
        eyebrow="Be a Partner"
        title={<>Partner with us for <span>greater impact</span></>}
        titleId="partner-title"
        description="Work with us to reach more communities with gifts, meals, school support, and practical birthday kindness."
        image={heroImage}
        imageAlt="Children supported by MyBirthday Charity Foundation"
        primaryLabel="Start Partnership"
        primaryTo="/contact"
      />

      <section className="involve-section involve-detail">
        <div className="involve-detail-copy">
          <p className="home-kicker">Partner with MBCF</p>
          <h2>Build lasting impact with a community-driven foundation.</h2>
          <p>
            Partnership helps us serve better, plan stronger outreaches, and
            reach more communities with dignity. We welcome individuals,
            organizations, brands, schools, and faith communities who want to
            support practical kindness.
          </p>
          <Link className="involve-button" to="/contact">
            Start a partnership <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="involve-detail-media">
          <img src={partnerImage} alt="Foundation team members standing together" />
        </div>
      </section>

      <section className="involve-section involve-focus-grid" aria-label="Partner opportunities">
        {partnerFocus.map(({ title, copy, Icon }) => (
          <article className="involve-focus-card" key={title}>
            <span>
              <Icon size={30} aria-hidden="true" />
            </span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Partner;
