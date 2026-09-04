import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Award,
  BadgeCheck,
  Building2,
  CalendarCheck,
  CheckCircle2,
  HandHeart,
  HeartHandshake,
  Megaphone,
  Quote,
  Send,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import InnerPageHero from "../components/InnerPageHero";
import "../projects.css";
import "../get-involved.css";
import heroImage from "../assets/images/bacground1.jpg";
import volunteerGroupImage from "../assets/images/IMG_1916 (1).jpeg";
import volunteerMomentImage from "../assets/images/IMG_0853.JPG";
import spotlightMainImage from "../assets/images/PRIL0258.jpg";
import pastSpotlight1 from "../assets/images/IMG_1916 (1).jpeg";
import pastSpotlight2 from "../assets/images/IMG_0853.JPG";
import pastSpotlight3 from "../assets/images/1C519AF3-D4EE-4920-BFD9-1A5CCCA06F23.jpeg";

const volunteerTeams = [
  {
    title: "Communication/Public Relations",
    copy: "This includes members responsible for communicating with volunteers through one-on-one contact, email, and group channels. The team also assists with moderating and hosting initiative programs.",
    Icon: Megaphone,
  },
  {
    title: "Writing Team",
    copy: "The members of this team are responsible for content writing, blog and website copy, grant writing, and social media captions.",
    Icon: BadgeCheck,
  },
  {
    title: "Social Media Team",
    copy: "The team is responsible for content creation and the social media presence of the initiative including Instagram, Facebook, Twitter, and TikTok.",
    Icon: Sparkles,
  },
  {
    title: "Multimedia Team",
    copy: "This team communicates to our audience with visuals. It includes photographers, videographers, graphic designers, motion designers, video editors, product designers, and website developers.",
    Icon: Building2,
  },
  {
    title: "Volunteer Management",
    copy: "They are responsible for recruiting and onboarding volunteers, handling awards and recognitions, conducting interviews, registering volunteers for outreaches, and tracking volunteer engagement.",
    Icon: Users,
  },
  {
    title: "Data Analysis and Research",
    copy: "This team manages the initiative database, conducts research, monitors outreach impact, and generates insights that can influence decision making and market analysis.",
    Icon: ShieldCheck,
  },
  {
    title: "Project Management Team",
    copy: "This team is responsible for overseeing each outreach from start to finish, including community inspection, beneficiary registration, and logistics.",
    Icon: CalendarCheck,
  },
  {
    title: "Celebration Team",
    copy: "This team celebrates volunteers on their special days, works with the writing and media teams on celebration content, and handles virtual birthday celebrations for volunteers.",
    Icon: HeartHandshake,
  },
  {
    title: "Business Development Team",
    copy: "This team is responsible for handling program opportunities and growth activities associated with the initiative.",
    Icon: HandHeart,
  },
];

const pastSpotlights = [
  {
    name: "Chioma Nwosu",
    role: "Writing & Communications",
    period: "Q1 Spotlight",
    highlight: "Authored 15+ outreach impact reports and donor campaign stories.",
    image: pastSpotlight1,
  },
  {
    name: "Ibrahim Sanni",
    role: "Logistics & Community Inspection",
    period: "Q2 Spotlight",
    highlight: "Coordinated volunteer transportation & meal distribution in Ota.",
    image: pastSpotlight2,
  },
  {
    name: "Faith Ogunleye",
    role: "Volunteer Care & Celebration",
    period: "Q3 Spotlight",
    highlight: "Organized recognition milestones for 50+ active foundation volunteers.",
    image: pastSpotlight3,
  },
];

function Volunteer() {
  // Acceptance logic state (switchable)
  const [isAcceptingVolunteers, setIsAcceptingVolunteers] = useState(true);
  const [showClosedModal, setShowClosedModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    team: "Multimedia Team",
    skills: "",
    availability: "Weekends & Outreaches",
    motivation: "",
  });

  const handleApplyClick = () => {
    if (!isAcceptingVolunteers) {
      setShowClosedModal(true);
    } else {
      const formElement = document.getElementById("volunteer-apply-form");
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!isAcceptingVolunteers) {
      setShowClosedModal(true);
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <div className="involve-page volunteer-page">
      <InnerPageHero
        eyebrow="Join My Birthday Charity Foundation"
        title={<>Make Impact in your <span>community</span></>}
        titleId="volunteer-title"
        description="Give your time, skills, and compassion to help us make birthdays meaningful for children and families across Nigeria."
        image={heroImage}
        imageAlt="Children supported by My Birthday Charity Foundation"
        primaryLabel="Apply to Volunteer"
        primaryTo="#volunteer-apply-form"
        secondaryLabel="Donate Now"
        secondaryTo="/donate"
        SecondaryIcon={HandHeart}
      />

      {/* Closed intake popup modal */}
      {showClosedModal && (
        <div className="volunteer-modal-backdrop" role="dialog" aria-modal="true">
          <div className="volunteer-modal-card">
            <button
              className="volunteer-modal-close"
              type="button"
              onClick={() => setShowClosedModal(false)}
              aria-label="Close notification"
            >
              <X size={20} />
            </button>
            <div className="volunteer-modal-icon">
              <ShieldAlert size={36} />
            </div>
            <h2>Volunteer Intake is Currently Closed</h2>
            <p>
              Thank you so much for your passion and desire to serve with My Birthday Charity Foundation!
              We are not currently in need of new volunteers for this intake cycle as our teams are currently full.
            </p>
            <p className="volunteer-modal-sub">
              Please check back soon or connect with us on social media to be the first to know when the next volunteer drive opens.
            </p>
            <button
              className="volunteer-modal-btn"
              type="button"
              onClick={() => setShowClosedModal(false)}
            >
              Understood, Thank You
            </button>
          </div>
        </div>
      )}

      <section className="volunteer-content" aria-labelledby="volunteer-overview">
        <p className="volunteer-lead" id="volunteer-overview">
          My Birthday Charity Foundation is inspired by the belief that
          volunteerism is a strong method of engaging people to tackle
          development and financial challenges facing the community.
        </p>

        <div className="volunteer-image-row">
          <img
            src={volunteerGroupImage}
            alt="My Birthday Charity Foundation volunteers standing together"
          />
          <img
            src={volunteerMomentImage}
            alt="Volunteers spending time with children during an outreach"
          />
        </div>

        {/* CTA Bar */}
        <div className="volunteer-status-strip">
          <div className="volunteer-status-text">
            <strong>Recruitment Status:</strong>
            <span className={`status-pill ${isAcceptingVolunteers ? "open" : "closed"}`}>
              {isAcceptingVolunteers ? "● Accepting Volunteers" : "● Applications Closed"}
            </span>
          </div>
          <button
            className="volunteer-register-btn"
            type="button"
            onClick={handleApplyClick}
          >
            {isAcceptingVolunteers ? "Be a Volunteer" : "Check Volunteer Status"}
          </button>
        </div>

        {/* Volunteer Teams Grid */}
        <p className="volunteer-team-intro">
          At My Birthday Charity Foundation, everyone can contribute their time,
          knowledge, skills, and financial support by being a volunteer. You can
          volunteer to be part of the following teams:
        </p>

        <div className="volunteer-team-grid" aria-label="Volunteer teams">
          {volunteerTeams.map(({ title, copy, Icon }) => (
            <article className="volunteer-team-item" key={title}>
              <span className="volunteer-team-icon">
                <Icon size={18} aria-hidden="true" />
              </span>
              <div>
                <h2>{title}</h2>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>

        {/* ── 1. SPOTLIGHT SECTION ── */}
        <section className="volunteer-spotlight-section" aria-labelledby="volunteer-spotlight-title">
          <div className="spotlight-header">
            <span className="spotlight-badge">
              <Star size={16} fill="currentColor" /> Volunteer Spotlight
            </span>
            <h2 id="volunteer-spotlight-title">Meet Our Volunteer of the Month</h2>
            <p>Celebrating the people whose dedication and selflessness bring joy to every community visit.</p>
          </div>

          <div className="spotlight-hero-card">
            <div className="spotlight-image-wrap">
              <img src={spotlightMainImage} alt="Temitope Adeleke, Volunteer of the Month" />
              <div className="spotlight-tag">
                <Award size={18} /> Featured Volunteer
              </div>
            </div>

            <div className="spotlight-body">
              <div className="spotlight-meta">
                <span className="spotlight-team">Multimedia & Creative Team</span>
                <span className="spotlight-tenure">Volunteer Since 2023</span>
              </div>
              <h3 className="spotlight-name">Temitope Adeleke</h3>
              <p className="spotlight-impact">
                <strong>Outreach Impact:</strong> Led visual storytelling and media documentation across 8 grassroots outreaches, ensuring donor transparency and capturing joyful moments for hundreds of families.
              </p>
              <blockquote className="spotlight-quote">
                <Quote size={24} className="spotlight-quote-icon" aria-hidden="true" />
                <p>
                  &ldquo;Seeing the joy on a child&apos;s face when they receive their very first birthday cake and school backpack reminds me why we show up. Volunteering with My Birthday Charity Foundation has taught me that no act of kindness is ever too small.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── 2. PAST SPOTLIGHT SECTION ── */}
        <section className="volunteer-past-spotlights" aria-labelledby="past-spotlights-title">
          <div className="spotlight-header">
            <span className="spotlight-badge">Hall of Service</span>
            <h2 id="past-spotlights-title">Past Volunteer Spotlights</h2>
            <p>A tribute to previous volunteers who have made an extraordinary impact on our mission.</p>
          </div>

          <div className="past-spotlights-grid">
            {pastSpotlights.map((item) => (
              <article className="past-spotlight-card" key={item.name}>
                <div className="past-spotlight-thumb">
                  <img src={item.image} alt={item.name} />
                  <span className="past-spotlight-period">{item.period}</span>
                </div>
                <div className="past-spotlight-info">
                  <h3>{item.name}</h3>
                  <p className="past-spotlight-role">{item.role}</p>
                  <p className="past-spotlight-highlight">{item.highlight}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── 3. BE A VOLUNTEER FORM SECTION ── */}
        <section
          id="volunteer-apply-form"
          className="volunteer-form-container"
          aria-labelledby="volunteer-form-heading"
        >
          <div className="volunteer-form-header">
            <span className="home-kicker">Join the Movement</span>
            <h2 id="volunteer-form-heading">Be a Volunteer</h2>
            <p>
              Fill out the application below to express your interest in joining our volunteer family.
            </p>
          </div>

          {formSubmitted ? (
            <div className="volunteer-success-banner">
              <CheckCircle2 size={48} className="volunteer-success-icon" />
              <h3>Application Submitted Successfully!</h3>
              <p>
                Thank you, <strong>{formData.fullName || "Volunteer"}</strong>, for applying to join the {formData.team}.
                Our Volunteer Management Team will review your application and contact you via email ({formData.email}) shortly.
              </p>
              <button
                className="volunteer-reset-btn"
                type="button"
                onClick={() => setFormSubmitted(false)}
              >
                Submit Another Application
              </button>
            </div>
          ) : isAcceptingVolunteers ? (
            <form className="volunteer-apply-form" onSubmit={handleSubmitForm}>
              <div className="form-grid-2">
                <label>
                  <span>Full Name *</span>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Damilola Adebayo"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  <span>Email Address *</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. damilola@gmail.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="form-grid-2">
                <label>
                  <span>Phone / WhatsApp Number *</span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. 0814 000 0000"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  <span>Current City / State *</span>
                  <input
                    type="text"
                    name="location"
                    required
                    placeholder="e.g. Lagos / Ogun State"
                    value={formData.location}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="form-grid-2">
                <label>
                  <span>Preferred Volunteer Team *</span>
                  <select
                    name="team"
                    value={formData.team}
                    onChange={handleInputChange}
                  >
                    {volunteerTeams.map((t) => (
                      <option key={t.title} value={t.title}>
                        {t.title}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  <span>Availability *</span>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                  >
                    <option value="Weekends & Outreaches">Weekends & Outreaches</option>
                    <option value="Weekdays (Remote)">Weekdays (Remote)</option>
                    <option value="Flexible / As Needed">Flexible / As Needed</option>
                    <option value="Full-time Outreach Volunteer">Full-time Outreach Volunteer</option>
                  </select>
                </label>
              </div>

              <label>
                <span>Relevant Skills & Experience</span>
                <input
                  type="text"
                  name="skills"
                  placeholder="e.g. Graphic design, photography, logistics, event planning, copywriting"
                  value={formData.skills}
                  onChange={handleInputChange}
                />
              </label>

              <label>
                <span>Why do you want to volunteer with My Birthday Charity Foundation? *</span>
                <textarea
                  name="motivation"
                  required
                  rows={4}
                  placeholder="Tell us a little bit about yourself and what inspires you to serve..."
                  value={formData.motivation}
                  onChange={handleInputChange}
                />
              </label>

              <button className="volunteer-submit-btn" type="submit">
                <Send size={18} /> Submit Volunteer Application
              </button>
            </form>
          ) : (
            <div className="volunteer-closed-box">
              <ShieldAlert size={36} />
              <h3>Volunteer Applications Are Currently Closed</h3>
              <p>
                We are not currently recruiting new volunteers for this period.
                Please check back soon for our next intake announcement.
              </p>
              <button
                className="volunteer-modal-btn"
                type="button"
                onClick={() => setShowClosedModal(true)}
              >
                View Intake Notice
              </button>
            </div>
          )}
        </section>

        <p className="volunteer-closing">
          Thank you for your desire to join us in our efforts to renew hope for
          humanity. Thank you for your time, energy, passion, and resources.
          Your hard work and dedication are greatly appreciated. YOU help make a
          difference and touch so many lives in your very own community when
          volunteering at My Birthday Charity Foundation.
        </p>
      </section>
    </div>
  );
}

export default Volunteer;
