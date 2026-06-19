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
import journeyImage from "../assets/images/IMG_1824 (1).jpeg";
import teamImage from "../assets/images/PRIL0258.jpg";

const trustPoints = [
  {
    title: "Dedicated Volunteers & Partners",
    copy: "Our passionate team and strong network of partners make every initiative meaningful.",
  },
  {
    title: "Community-Centered Service",
    copy: "We listen, show up, and respond to real needs with empathy and care.",
  },
  {
    title: "Transparent Outreach",
    copy: "Every gift is handled with accountability, purpose, and respect for the people we serve.",
  },
];

const impactStats = [
  {
    value: "10+",
    label: "Communities Supported",
    image: statCommunitiesImage,
  },
  {
    value: "50,000+",
    label: "Beneficiaries Reached",
    image: statBeneficiariesImage,
  },
  {
    value: "2+",
    label: "States Reached",
    image: statStatesImage,
  },
  {
    value: "100%",
    label: "Transparency in Financials",
    image: statTransparencyImage,
  },
];

const journeyRows = [
  {
    step: "1. The Intent",
    focus: "Making people smile is the goal",
    date: "2022",
  },
  {
    step: "2. First Outreach",
    focus: "Turning birthdays into practical acts of service",
    date: "2022",
  },
  {
    step: "3. Community Growth",
    focus: "Reaching more families through partners and volunteers",
    date: "2023",
  },
  {
    step: "4. Wider Impact",
    focus: "Building a foundation for sustainable giving",
    date: "2024",
  },
];

const values = [
  {
    title: "Commitment",
    copy: "We stay dedicated and devoted to the cause, following through on responsibilities and persevering through challenges.",
    Icon: BadgeCheck,
    color: "#f7c6e8",
  },
  {
    title: "Love & Compassion",
    copy: "We show empathy, care, and kindness towards the less privileged, putting our hearts into every act of service.",
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
    copy: "We communicate and work together to achieve common goals and create stronger impact through unity.",
    Icon: Users,
    color: "#dfc8d8",
  },
  {
    title: "Celebration",
    copy: "We celebrate birthdays, achievements, and every positive impact made by the initiative, turning every moment into a reason to spread joy.",
    Icon: Sparkles,
    color: "#a899f0",
  },
  {
    title: "Selflessness",
    copy: "We prioritize the well-being and empowerment of the less privileged, demonstrating a willingness to serve and make sacrifices for the greater good.",
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
        title={<>One Smile at <span>A time</span></>}
        titleId="about-hero-title"
        description="Every act of birthday kindness helps us bring dignity, care, and joy to children and families."
        image={heroImage}
        imageAlt="Children looking into the camera"
      />

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
            &ldquo;Together, we are making a real difference in the lives of
            countless individuals and communities. Our mission is create lasting
            change, and with your support, we continue to grow and impact more
            lives. I am proud of the work we do, but I know that our greatest
            achievements are still ahead of us. Thank you for being part of this
            journey to serve humanity with purpose and passion.&rdquo;
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

      <section className="about-section about-trust" aria-labelledby="about-trust-title">
        <div className="about-section-heading">
          <p className="about-kicker">Who We Are</p>
          <h2 id="about-trust-title">
            Why Trust My Birthday Charity Foundation?
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
              To inspire individuals to celebrate birthdays by giving back to
              the community, fostering compassion and generosity through
              impactful outreach.
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

      <section className="about-section about-journey" aria-labelledby="about-journey-title">
        <div className="about-section-heading">
          <p className="about-kicker">Our Journey</p>
          <h2 id="about-journey-title">Making a Difference Since 2022</h2>
        </div>

        <div className="about-journey-layout">
          <div className="about-journey-media">
            <img
              src={journeyImage}
              alt="Volunteers and community members during an outreach"
            />
          </div>

          <div className="about-journey-table" role="table" aria-label="Foundation journey timeline">
            <div className="about-journey-row about-journey-head" role="row">
              <span role="columnheader">Step</span>
              <span role="columnheader">Narrative Focus</span>
              <span role="columnheader">Date</span>
            </div>
            {journeyRows.map((row) => (
              <div className="about-journey-row" role="row" key={row.step}>
                <span role="cell">{row.step}</span>
                <span role="cell">{row.focus}</span>
                <span role="cell">{row.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-values" aria-labelledby="about-values-title">
        <div className="about-values-heading">
          <p className="about-values-pill">Our Values</p>
          <h2 id="about-values-title">The beliefs behind our work</h2>
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

      <section className="about-section about-team" aria-labelledby="about-team-title">
        <div className="about-section-heading">
          <p className="about-kicker">Our Team</p>
          <h2 id="about-team-title">
            Meet the People Behind My Birthday Charity Foundation
          </h2>
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
