import {
  BadgeCheck,
  HandHeart,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import AboutVolunteerCta from "../components/AboutVolunteerCta";
import InnerPageHero from "../components/InnerPageHero";
import heroImage from "../assets/images/bacground1.jpg";
import storyImage from "../assets/images/medium-shot-happy-kids-posing.jpg";
import trustImage from "../assets/images/IMG_1916 (1).jpeg";
import statCommunitiesImage from "../assets/images/IMG_1824 (1).jpeg";
import statBeneficiariesImage from "../assets/images/30F2D69C-9FC3-423F-AC31-E86D2D150EBB.jpeg";
import statStatesImage from "../assets/images/IMG_7659.JPG";
import statTransparencyImage from "../assets/images/IMG_0900.JPG";
import missionImage from "../assets/images/4963B524-3BEA-44AF-9E5A-BCEB70845E97.jpeg";
import teamImage from "../assets/images/PRIL0258.jpg";

const trustPoints = [
  {
    title: "Dedicated Volunteers & Partners",
    copy: "Our passionate team and the partners who stand with us are what make every initiative meaningful.",
  },
  {
    title: "Community-Centered Service",
    copy: "We listen first, then we respond. Every visit starts with understanding what a family actually needs.",
  },
  {
    title: "Transparent Outreach",
    copy: "Every gift given to us is handled with care and accountability, because trust is something we protect and respect.",
  },
];

const impactStats = [
  {
    value: "800+",
    label: "Students Supported",
    image: statBeneficiariesImage,
  },
  {
    value: "10+",
    label: "Schools Reached",
    image: statTransparencyImage,
  },
  {
    value: "15+",
    label: "Communities Supported",
    image: statCommunitiesImage,
  },
  {
    value: "3+",
    label: "States Reached",
    image: statStatesImage,
  },
];

const values = [
  {
    title: "Commitment",
    copy: "We don't quit when things get hard. We stay dedicated and devoted to the cause, following through on responsibilities and persevering through challenges.",
    Icon: BadgeCheck,
    color: "#f7c6e8",
  },
  {
    title: "Love & Compassion",
    copy: "Every visit, every gift, every conversation comes from genuine empathy, care, and kindness towards the less privileged, putting our hearts into every act of service.",
    Icon: HeartHandshake,
    color: "#56a684",
  },
  {
    title: "Integrity",
    copy: "We remain accountable, keep our promises, and make decisions guided by what is right and just.",
    Icon: ShieldCheck,
    color: "#f4fb75",
  },
  {
    title: "Teamwork",
    copy: "Nothing we've built came from one person. We move together, and we're stronger for it.",
    Icon: Users,
    color: "#dfc8d8",
  },
  {
    title: "Celebration",
    copy: "Birthdays, milestones, positive impacts, we believe every good thing deserves to be celebrated, together.",
    Icon: Sparkles,
    color: "#a899f0",
  },
  {
    title: "Selflessness",
    copy: "We prioritize the well-being and empowerment of the less privileged, and we're willing to give of ourselves to make that happen.",
    Icon: HandHeart,
    color: "#66e0bf",
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
    <>
      <InnerPageHero
        eyebrow="About Us"
        title={<>One Smile at <span>A Time</span></>}
        titleId="about-hero-title"
        description="Every act of kindness, big or small, helps us bring dignity, care, and joy to children and families across Nigeria."
        image={heroImage}
        imageAlt="Children looking into the camera"
        primaryLabel="Donate Now"
        primaryTo="/donate"
        secondaryLabel="Be a Volunteer"
        secondaryTo="/get-involved/volunteer"
      />

      {/* 1. Our Story */}
      <section className="about-section about-story" aria-labelledby="about-story-title">
        <div className="about-story-media">
          <img
            src={storyImage}
            alt="Children smiling from a wooden window"
          />
        </div>

        <div className="about-story-copy">
          <p className="about-kicker">Our Story</p>
          <h2 id="about-story-title">Serving Humanity with Passion & Purpose</h2>
          <p>
            &ldquo;What started as one birthday, one decision to give back, has
            grown into something bigger than I imagined. We&apos;ve walked into
            communities, sat with families, and watched small acts turn into
            real change. There&apos;s still so much more we want to do, and
            I&apos;m grateful for everyone who has chosen to walk this journey
            with us.&rdquo;
          </p>

          <div className="about-founder">
            <img src={teamImage} alt="Anifowose Temitayo, CEO and Founder" />
            <div>
              <strong>Anifowose Temitayo</strong>
              <span>CEO & Founder</span>
            </div>
            <em>Signature</em>
          </div>
        </div>
      </section>

      {/* 2. Who We Are (About & Stats) */}
      <section className="about-section about-trust" aria-labelledby="about-trust-title">
        <div className="about-section-heading">
          <p className="about-kicker">Who We Are</p>
          <h2 id="about-trust-title">
            Why People Trust My Birthday Charity Foundation
          </h2>
        </div>

        <div className="about-trust-layout">
          <div className="about-trust-media">
            <img
              src={trustImage}
              alt="My Birthday Charity Foundation volunteers standing together"
            />
            <div className="about-experience-badge">
              <strong>2+</strong>
              <span>Years Of Experience</span>
            </div>
          </div>

          <div className="about-trust-list">
            {trustPoints.map((point) => (
              <article className="about-trust-item" key={point.title}>
                <span aria-hidden="true" />
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-stats" aria-label="Foundation impact numbers">
        <div className="about-stats-inner">
          {impactStats.map((stat) => (
            <article className="about-stat" key={stat.label}>
              <span className="about-stat-orb">
                {stat.image ? <img src={stat.image} alt="" /> : null}
              </span>
              <div>
                <strong>{stat.value}</strong>
                <p>{stat.label}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Mission & Vision Statement */}
      <section
        className="about-section about-mission"
        aria-labelledby="about-mission-title"
      >
        <div className="about-section-heading">
          <p className="about-kicker">Mission & Vision</p>
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

      {/* 4. Our Core Values */}
      <section className="about-section about-values" aria-labelledby="about-values-title">
        <div className="about-values-heading">
          <p className="about-values-pill">Our Core Values</p>
          <h2 id="about-values-title">The Beliefs Behind Our Work</h2>
        </div>

        <div className="about-values-grid">
          {values.map(({ title, copy, Icon, color }) => (
            <article className="about-value-card" key={title}>
              <span style={{ backgroundColor: color }}>
                <Icon size={30} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 5. Meet the Team */}
      <section className="about-section about-team" aria-labelledby="about-team-title">
        <div className="about-section-heading">
          <p className="about-kicker">Our Team</p>
          <h2 id="about-team-title">
            Meet the People Behind My Birthday Charity Foundation
          </h2>
          <p className="about-team-intro">
            A team of writers, designers, researchers, and organizers, working on
            the ground and behind the scenes to keep this mission moving.
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
    </>
  );
}

export default About;
