import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  HandCoins,
  Handshake,
  HeartHandshake,
  Megaphone,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import InnerPageHero from "../components/InnerPageHero";
import "../projects.css";
import "../get-involved.css";
import heroImage from "../assets/images/bacground1.jpg";
import partnerImage from "../assets/images/IMG_1916 (1).jpeg";

const partnerFocus = [
  {
    title: "Sponsor outreaches",
    copy: "Fund birthday gift packs, food baskets, educational scholarships, and health check packages directly for children in need.",
    Icon: HandCoins,
  },
  {
    title: "Provide resources",
    copy: "Contribute cakes, venue spaces, learning materials, clothing, media coverage, logistics vehicles, or professional healthcare services.",
    Icon: Building2,
  },
  {
    title: "Amplify the mission",
    copy: "Co-host corporate social responsibility (CSR) initiatives, employee volunteering drives, and joint fundraising events.",
    Icon: Megaphone,
  },
];

const partnersList = [
  { name: "CareFirst Health Initiative", type: "Healthcare Partner", icon: HeartHandshake },
  { name: "BrightFuture EduTrust", type: "Education Supporter", icon: Sparkles },
  { name: "Royal Heritage Confectioneries", type: "Birthday Joy Partner", icon: Building2 },
  { name: "Apex Logistics Nigeria", type: "Logistics Partner", icon: ShieldCheck },
  { name: "GraceLife Community Church", type: "Faith & Outreach Partner", icon: Users },
  { name: "Vanguard Creative Labs", type: "Media & PR Partner", icon: Megaphone },
  { name: "Prime Foods & Agro", type: "Nutrition Supporter", icon: HandCoins },
];

function Partner() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [partnerData, setPartnerData] = useState({
    orgName: "",
    contactPerson: "",
    email: "",
    phone: "",
    partnerType: "Corporate CSR / Sponsorship",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPartnerData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleScrollToForm = () => {
    const el = document.getElementById("be-a-partner-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="involve-page partner-page">
      {/* ── HERO ── */}
      <InnerPageHero
        eyebrow="Become a Partner"
        title={<>Partner with us for <span>greater impact</span></>}
        titleId="partner-title"
        description="Collaborate with My Birthday Charity Foundation to reach vulnerable children and families with food, education, healthcare, and birthday kindness."
        image={heroImage}
        imageAlt="Children supported by My Birthday Charity Foundation"
        primaryLabel="Be a Partner"
        primaryTo="#be-a-partner-form"
        secondaryLabel="Donate Now"
        secondaryTo="/donate"
        SecondaryIcon={HandCoins}
      />

      {/* ── 1. WHAT PARTNERSHIP IS ABOUT (A BRIEF) ── */}
      <section className="involve-section involve-detail" aria-labelledby="partner-brief-title">
        <div className="involve-detail-copy">
          <p className="home-kicker">What Partnership Is About</p>
          <h2 id="partner-brief-title">Building Sustainable Change, Together.</h2>
          <p>
            At My Birthday Charity Foundation, partnerships are the cornerstone of scalable and dignified community development.
            When organizations, corporate bodies, faith institutions, and creative brands stand alongside us, we multiply our capacity
            to reach underprivileged children who have never celebrated a birthday or lacked basic educational tools.
          </p>
          <p>
            We offer 100% transparent reporting, verified grassroots community access, and co-branded storytelling so your organization
            can see and share the tangible human impact of every naira and resource contributed.
          </p>
          <button
            className="involve-button"
            type="button"
            onClick={handleScrollToForm}
          >
            Become a Partner <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="involve-detail-media">
          <img src={partnerImage} alt="Foundation team and partners during community outreach" />
        </div>
      </section>

      {/* ── PARTNERSHIP PILLARS ── */}
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

      {/* ── 2. MEET OUR PARTNERS (MARQUEE FORM) ── */}
      <section className="partner-marquee-section" aria-labelledby="marquee-title">
        <div className="involve-section-heading text-center">
          <p className="home-kicker">Our Ecosystem</p>
          <h2 id="marquee-title">Meet Our Partners</h2>
          <p className="partner-marquee-subtitle">
            Proudly working with purpose-driven brands, institutions, and community advocates.
          </p>
        </div>

        <div className="partner-marquee-container" aria-label="Scrolling list of partners">
          <div className="partner-marquee-track">
            {/* Repeated twice for seamless infinite marquee loop */}
            {[...partnersList, ...partnersList].map((p, index) => {
              const IconComponent = p.icon;
              return (
                <div className="partner-marquee-card" key={index}>
                  <div className="partner-card-icon">
                    <IconComponent size={24} />
                  </div>
                  <div className="partner-card-text">
                    <strong>{p.name}</strong>
                    <span>{p.type}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. BE A PARTNER (FORM) ── */}
      <section id="be-a-partner-form" className="involve-section partner-form-section" aria-labelledby="form-title">
        <div className="partner-form-wrapper">
          <div className="involve-section-heading">
            <p className="home-kicker">Let&apos;s Collaborate</p>
            <h2 id="form-title">Be a Partner</h2>
            <p>
              Fill out the form below to propose a partnership, CSR sponsorship, or resource collaboration. Our team will reach out within 48 hours.
            </p>
          </div>

          {formSubmitted ? (
            <div className="volunteer-success-banner">
              <CheckCircle2 size={48} className="volunteer-success-icon" />
              <h3>Partnership Proposal Received!</h3>
              <p>
                Thank you, <strong>{partnerData.contactPerson || "Partner"}</strong> from <strong>{partnerData.orgName || "your organization"}</strong>.
                Our Business Development and Partnership Team will review your proposal and contact you via {partnerData.email} shortly.
              </p>
              <button
                className="volunteer-reset-btn"
                type="button"
                onClick={() => setFormSubmitted(false)}
              >
                Submit Another Proposal
              </button>
            </div>
          ) : (
            <form className="volunteer-apply-form" onSubmit={handleSubmit}>
              <div className="form-grid-2">
                <label>
                  <span>Organization / Brand / Individual Name *</span>
                  <input
                    type="text"
                    name="orgName"
                    required
                    placeholder="e.g. Acme Corporation or Dr. Johnson"
                    value={partnerData.orgName}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  <span>Contact Person Full Name *</span>
                  <input
                    type="text"
                    name="contactPerson"
                    required
                    placeholder="e.g. Bolanle Alabi"
                    value={partnerData.contactPerson}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="form-grid-2">
                <label>
                  <span>Official Email Address *</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. partnerships@acme.com"
                    value={partnerData.email}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  <span>Phone / WhatsApp Number *</span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. +234 814 000 0000"
                    value={partnerData.phone}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <label>
                <span>Partnership Category *</span>
                <select
                  name="partnerType"
                  value={partnerData.partnerType}
                  onChange={handleInputChange}
                >
                  <option value="Corporate CSR / Sponsorship">Corporate CSR / Sponsorship</option>
                  <option value="Resource & In-Kind Donation (Gifts, Food, Packs)">Resource & In-Kind Donation (Gifts, Food, Packs)</option>
                  <option value="Educational Supplies & Scholarships">Educational Supplies & Scholarships</option>
                  <option value="Healthcare & Medical Outreach">Healthcare & Medical Outreach</option>
                  <option value="Media, Creative & PR Collaboration">Media, Creative & PR Collaboration</option>
                  <option value="Venue & Logistics Hosting">Venue & Logistics Hosting</option>
                </select>
              </label>

              <label>
                <span>How would you like to partner with us? *</span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe your proposed collaboration, target timeline, or resources you wish to provide..."
                  value={partnerData.message}
                  onChange={handleInputChange}
                />
              </label>

              <button className="volunteer-submit-btn" type="submit">
                <Send size={18} /> Submit Partnership Request
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

export default Partner;
