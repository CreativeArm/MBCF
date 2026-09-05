import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Gift,
  HandHeart,
  HeartHandshake,
  ShieldCheck,
  Soup,
  WalletCards,
} from "lucide-react";
import "../donate.css";
import heroImage from "../assets/images/medium-shot-happy-kids-posing.jpg";
import treatmentImage from "../assets/images/4963B524-3BEA-44AF-9E5A-BCEB70845E97.jpeg";
import foodImage from "../assets/images/IMG_0885.JPG";
import trustedImage from "../assets/images/IMG_1824 (1).jpeg";
import serviceImage from "../assets/images/30F2D69C-9FC3-423F-AC31-E86D2D150EBB.jpeg";

const supportHighlights = [
  {
    title: "Gift Support",
    copy: "Birthday gifts, school items, and essentials.",
    Icon: Gift,
  },
  {
    title: "Trust Funds",
    copy: "Support children and families in need.",
    Icon: ShieldCheck,
  },
  {
    title: "Funds Raised",
    copy: "Collect funds for meaningful outreach.",
    Icon: WalletCards,
  },
];

const givingCards = [
  {
    title: "Treatment Support",
    copy: "Providing essential care and relief to children and families with compassion and support.",
    image: treatmentImage,
    Icon: HeartHandshake,
  },
  {
    title: "Food Support",
    copy: "Offering nutritious food to families and individuals, ensuring no one goes hungry.",
    image: foodImage,
    Icon: Soup,
  },
];

const serviceCards = [
  {
    title: "Birthday Gifts",
    copy: "Help us create joyful birthday moments for children who deserve to feel seen.",
    Icon: Gift,
  },
  {
    title: "Community Meals",
    copy: "Sponsor food packs and refreshments during outreach visits.",
    Icon: Soup,
  },
  {
    title: "School Support",
    copy: "Provide materials and encouragement for children in underserved communities.",
    Icon: BadgeCheck,
  },
];

function Donate() {
  return (
    <div className="donate-page donate-template-page">
      <section className="donate-template-hero" aria-labelledby="donate-title">
        <div className="donate-template-hero-copy">
          <p>Help make a difference</p>
          <h1 id="donate-title">
            Lend Your <span>Heart</span> To Change A <span>Child&apos;s</span>{" "}
            Story
          </h1>
          <p>
            Join our mission to support and uplift helpless children. Your
            donation helps provide essential care, birthday joy, and hope.
          </p>
          <div className="donate-template-actions">
            <Link className="donate-template-primary" to="/contact">
              Donate Now
            </Link>
            <Link className="donate-template-secondary" to="/get-involved/volunteer">
              <HeartHandshake size={17} aria-hidden="true" />
              Be a Volunteer
            </Link>
          </div>
        </div>

        <div className="donate-template-hero-media">
          <img src={heroImage} alt="Smiling children supported by the foundation" />
        </div>
      </section>

      <section className="donate-template-strip" aria-label="Donation highlights">
        {supportHighlights.map(({ title, copy, Icon }) => (
          <article key={title}>
            <span>
              <Icon size={28} aria-hidden="true" />
            </span>
            <div>
              <h2>{title}</h2>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="donate-giving-options" aria-labelledby="giving-title">
        <div className="donate-giving-grid">
          {givingCards.map(({ title, copy, image, Icon }) => (
            <article className="donate-giving-card" key={title}>
              <div className="donate-giving-image">
                <img src={image} alt={`${title} outreach`} />
              </div>
              <span className="donate-giving-icon">
                <Icon size={26} aria-hidden="true" />
              </span>
              <div>
                <h2>{title}</h2>
                <p>{copy}</p>
              </div>
            </article>
          ))}

          <article className="donate-contribute-card">
            <img src={serviceImage} alt="" aria-hidden="true" />
            <div>
              <h2 id="giving-title">Contribute Today To Make A Difference</h2>
              <p>Your contribution makes change possible today.</p>
              <Link to="/contact">
                Join Us Now
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="donate-trusted" aria-labelledby="trusted-title">
        <div className="donate-trusted-media">
          <img src={trustedImage} alt="Foundation outreach team with community members" />
        </div>

        <div className="donate-trusted-copy">
          <p className="donate-template-kicker">Welcome. Let&apos;s make a difference!</p>
          <h2 id="trusted-title">A Trusted Non-Profit Charity Organization</h2>
          <p>
            Our non-profit charity center is trustworthy as well as changing the
            world. Our goal is to create good change in our community by
            providing assistance to those in need and offering funding.
          </p>

          <div className="donate-trusted-pills">
            <article>
              <HandHeart size={22} aria-hidden="true" />
              <span>Be a Hero, Contribute Now</span>
            </article>
            <article>
              <Gift size={22} aria-hidden="true" />
              <span>Help Children with Donations</span>
            </article>
          </div>

          <ul>
            <li>Providing essential resources to underserved communities.</li>
            <li>Offering support through educational and health programs.</li>
            <li>Facilitating volunteer opportunities for community involvement.</li>
          </ul>

          <Link className="donate-template-primary" to="/contact">
            Support Now
          </Link>
        </div>
      </section>

      <section className="donate-services" aria-labelledby="services-title">
        <p className="donate-template-kicker">Our best services</p>
        <h2 id="services-title">Helping The Poor, Your Support Matters</h2>

        <div className="donate-services-grid">
          {serviceCards.map(({ title, copy, Icon }) => (
            <article key={title}>
              <span>
                <Icon size={28} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Donate;
