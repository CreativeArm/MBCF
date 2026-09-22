import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AboutVolunteerCta from "../components/AboutVolunteerCta";
import heroPhoto1 from "../assets/images/medium-shot-happy-kids-posing.webp";
import heroPhoto2 from "../assets/images/30F2D69C-9FC3-423F-AC31-E86D2D150EBB.webp";
import heroPhoto3 from "../assets/images/IMG_1824 (1).webp";
import storyTeamImage from "../assets/images/IMG_1916 (1).webp";
import missionImage from "../assets/images/4963B524-3BEA-44AF-9E5A-BCEB70845E97.webp";
import teamImage from "../assets/images/PRIL0258.webp";
import ceoImage from "../assets/images/CEO.webp";

function AnimatedCounter({ end, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          let startTime = null;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Smooth easeOutExpo curve
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = Math.round(end * ease);
            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}

const values = [
  {
    title: "Commitment",
    copy: "We don't quit when things get hard. We stay dedicated and devoted to the cause, following through on responsibilities and persevering through challenges.",
    iconClass: "lni lni-certificate-badge-1",
  },
  {
    title: "Love & Compassion",
    copy: "Every visit, every gift, every conversation comes from genuine empathy, care, and kindness towards the less privileged, putting our hearts into every act of service.",
    iconClass: "lni lni-heart",
  },
  {
    title: "Integrity",
    copy: "We remain accountable, keep our promises, and make decisions guided by what is right and just.",
    iconClass: "lni lni-shield-2-check",
  },
  {
    title: "Teamwork",
    copy: "Nothing we've built came from one person. We move together, and we're stronger for it.",
    iconClass: "lni lni-user-multiple-4",
  },
  {
    title: "Celebration",
    copy: "Birthdays, milestones, positive impacts, we believe every good thing deserves to be celebrated, together.",
    iconClass: "lni lni-star-fat",
  },
  {
    title: "Selflessness",
    copy: "We prioritize the well-being and empowerment of the less privileged, and we're willing to give of ourselves to make that happen.",
    iconClass: "lni lni-hand-shake",
  },
];

const executiveTeam = Array.from({ length: 5 }, (_, index) => ({
  name: "Samuel Popoola",
  role: "HEAD - Writing Team",
  id: `executive-${index}`,
}));

const leadershipTeam = Array.from({ length: 10 }, (_, index) => ({
  name: "Samuel Popoola",
  role: "HEAD - Writing Team",
  id: `leadership-${index}`,
}));

function TeamCard({ member }) {
  return (
    <article className="about-team-card">
      <img src={teamImage} alt={`${member.name}, ${member.role}`} />
      <div className="about-team-card-copy">
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </div>
    </article>
  );
}

function About() {
  return (
    <div className="about-page-wrapper">
      {/* 1. Modern Hero Section */}
      <section
        className="about-modern-hero"
        aria-labelledby="about-hero-heading"
      >
        <span className="about-hero-pill">Building Brighter Paths</span>
        <h1 id="about-hero-heading" className="about-modern-title">
          One Smile at A <span className="about-title-framed">Time</span>
        </h1>
        <p className="about-modern-desc">
          At My Birthday Charity Foundation, we connect people with communities
          in need, turning everyday generosity and celebration into tangible
          change.
        </p>

        <div className="about-hero-actions">
          <Link to="/donate" className="about-btn-primary">
            <span>Donate Now</span>
            <span className="about-btn-icon">
              <ArrowRight size={16} />
            </span>
          </Link>
          <Link to="/get-involved/volunteer" className="about-btn-secondary">
            <span>Be a Volunteer</span>
            <span className="about-btn-icon">
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>

        {/* 3-Photo Showcase Container */}
        <div className="about-gallery-wrapper">
          <div className="about-gallery-card">
            <div className="about-gallery-photo">
              <img
                src={heroPhoto1}
                alt="Happy smiling students supported by MBCF"
              />
            </div>
            <div className="about-gallery-photo">
              <img
                src={heroPhoto2}
                alt="Children in classroom during an educational outreach"
              />
            </div>
            <div className="about-gallery-photo">
              <img
                src={heroPhoto3}
                alt="Community volunteers distributing school essentials"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Supported by Changemakers Strip */}

      {/* 3. Our Story Section (Large Brand Card) */}
      <section
        className="about-story-card-section"
        aria-labelledby="about-story-heading"
      >
        <div className="about-story-top">
          <div className="about-story-left">
            <span className="about-story-pill">Our Story</span>
            <h2 id="about-story-heading" className="about-story-title">
              It Started With a Visit and a Promise.
            </h2>
          </div>
          <div className="about-story-right">
            <p>
              &ldquo;What started as one birthday, one decision to give back,
              has grown into something bigger than I imagined. We&apos;ve walked
              into communities, sat with families, and watched small acts turn
              into real change. There&apos;s still so much more we want to do,
              and we&apos;re grateful for everyone who has chosen to walk this
              journey with us.&rdquo;
            </p>
            <div className="about-story-cta-row">
              <Link to="/get-involved" className="about-story-btn">
                <span>Read The Full Story</span>
                <span className="about-btn-icon">
                  <ArrowRight size={15} />
                </span>
              </Link>
              <div className="about-founder-snippet">
                <img src={ceoImage} alt="Anifowose Temitayo, Founder & CEO" />
                <div>
                  <strong>Anifowose Temitayo</strong>
                  <span>Founder &amp; CEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-story-bottom">
          <div className="about-story-photo">
            <img
              src={storyTeamImage}
              alt="MBCF volunteers and community members working together"
            />
          </div>
          <div className="about-story-stats-frame">
            <div className="about-stat-box">
              <h3>
                <AnimatedCounter end={800} suffix="+" />
              </h3>
              <p>Students Supported</p>
            </div>
            <div className="about-stat-box">
              <h3>
                <AnimatedCounter end={15} suffix="+" />
              </h3>
              <p>Communities Reached</p>
            </div>
            <div className="about-stat-box">
              <h3>
                <AnimatedCounter end={10} suffix="+" />
              </h3>
              <p>Schools Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision Statement */}
      <section
        className="about-section about-mission"
        aria-labelledby="about-mission-title"
      >
        <div className="about-section-heading">
          <p className="about-kicker">Mission &amp; Vision</p>
          <h2 id="about-mission-title">
            Strong Mission Today, Brighter Vision Tomorrow
          </h2>
        </div>

        <div className="about-mission-grid">
          <article className="about-mission-card">
            <h3>Our Mission</h3>
            <p>
              To turn everyday generosity, birthdays and beyond, into real
              support for children and communities, through acts of kindness
              anyone can be part of, no matter what they have to give.
            </p>
          </article>

          <div className="about-mission-media">
            <img
              src={missionImage}
              alt="Children and a volunteer during a school outreach"
            />
          </div>

          <article className="about-mission-card">
            <h3>Our Vision</h3>
            <p>
              A world where every birthday celebration is an opportunity for
              positive change, uniting individuals and communities in acts of
              kindness that uplift and empower those around us.
            </p>
          </article>
        </div>
      </section>

      {/* 5. Our Core Values */}
      <section
        className="about-section about-values"
        aria-labelledby="about-values-title"
      >
        <div className="about-values-heading">
          <p className="about-values-pill">Our Core Values</p>
          <h2 id="about-values-title">The Beliefs Behind Our Work</h2>
        </div>

        <div className="about-values-grid">
          {values.map(({ title, copy, iconClass }) => (
            <article className="about-value-card" key={title}>
              <span className="about-value-icon">
                <i className={iconClass} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 6. Meet the Team (Intact) */}
      <section
        className="about-section about-team"
        aria-labelledby="about-team-title"
      >
        <div className="about-section-heading">
          <p className="about-kicker">Our Team</p>
          <h2 id="about-team-title">
            Meet the People Behind My Birthday Charity Foundation
          </h2>
          <p className="about-team-intro">
            A team of writers, designers, researchers, and organizers, working
            on the ground and behind the scenes to keep this mission moving.
          </p>
        </div>

        <div className="about-team-group">
          <div className="about-team-label">
            <span>Executive Leadership Team</span>
          </div>
          <div className="about-team-grid">
            {executiveTeam.map((member) => (
              <TeamCard member={member} key={member.id} />
            ))}
          </div>
        </div>

        <div className="about-team-group">
          <div className="about-team-label">
            <span>Team Leadership</span>
          </div>
          <div className="about-team-grid">
            {leadershipTeam.map((member) => (
              <TeamCard member={member} key={member.id} />
            ))}
          </div>
        </div>
      </section>

      <AboutVolunteerCta />
    </div>
  );
}

export default About;
