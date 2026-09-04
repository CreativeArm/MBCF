import "../project-detail.css";
import bgImg from "../assets/images/bacground1.jpg";
import projectHeroImg from "../assets/images/IMG_0900.JPG";
import InnerPageHero from "../components/InnerPageHero";
import { Navigate, useParams } from "react-router-dom";
import { PROJECTS } from "../data/projects";

// â”€â”€ Impact stat pill â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function StatPill({ number, label }) {
  return (
    <div className="pd-stat">
      <strong>{number}</strong>
      <span>{label}</span>
    </div>
  );
}

// â”€â”€ Gallery image tile with Caption Support â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function GalleryTile({ src, alt, caption, variant }) {
  const variantClass = variant ? `pd-gallery-tile--${variant}` : "";
  return (
    <div className={`pd-gallery-tile ${variantClass}`}>
      <img src={src} alt={alt} />
      {caption && (
        <div className="pd-gallery-caption">
          <span>{caption}</span>
        </div>
      )}
    </div>
  );
}

// â”€â”€ Review card â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function ReviewCard({ name, role, quote, initial }) {
  return (
    <blockquote className="pd-review-card">
      <div className="pd-review-avatar">{initial}</div>
      <p className="pd-review-quote">"{quote}"</p>
      <footer className="pd-review-footer">
        <strong>{name}</strong>
        <span>{role}</span>
      </footer>
    </blockquote>
  );
}

const STATS = [
  { number: "240+", label: "Children reached" },
  { number: "18", label: "Communities visited" },
  { number: "3yrs", label: "Running strong" },
  { number: "100%", label: "Volunteer-powered" },
];

const REVIEWS = [
  {
    initial: "A",
    name: "Adaeze Okafor",
    role: "Parent, Lagos",
    quote:
      "My daughter had never had a birthday party. Watching her face light up that day â€” I will never forget it. These people truly care.",
  },
  {
    initial: "E",
    name: "Emmanuel Tunde",
    role: "Community leader, Ibadan",
    quote:
      "They didn't just bring cake. They brought dignity. Every child deserves to feel seen, and this programme makes that happen.",
  },
  {
    initial: "F",
    name: "Fatima Aliyu",
    role: "Volunteer coordinator",
    quote:
      "I've volunteered for many organisations. None have the heart this team has. The joy in those classrooms stays with you for life.",
  },
];

// â”€â”€ Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((item) => item.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const projectTitle = project.title;
  const projectKicker = "Birthday Outreach";

  return (
    <div className="pd-page">
      {/* â”€â”€ 1. Full-bleed hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div className="pd-hero pd-hero--inner-format">
        <InnerPageHero
          eyebrow={projectKicker}
          title={projectTitle}
          titleId="project-detail-title"
          description={project.description}
          image={projectHeroImg}
          imageAlt={`${projectTitle} outreach`}
          primaryLabel="Donate Now"
          primaryTo="/donate"
          secondaryLabel="Partner with us"
          secondaryTo="/get-involved/partner"
        />

        {/* Floating stat bar sitting at the section seam */}
        <div className="pd-stat-bar">
          {STATS.map((s) => (
            <StatPill key={s.label} {...s} />
          ))}
        </div>
      </div>

      {/* â”€â”€ 2. Project write-up â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="pd-writeup home-section">
        <div className="pd-writeup-inner">
          <div className="pd-writeup-lead">
            <p className="about-kicker">About this project</p>
            <h2 className="pd-writeup-heading">{project.title}</h2>
          </div>
          <div className="pd-writeup-body">
            <p>{project.description}</p>
            <p>
              This project began with a simple
              belief: no one should feel forgotten on a day meant for joy. Our
              volunteers work with local communities and partners to create
              thoughtful celebrations that respond to real needs with care,
              dignity, and consistency.
            </p>
            <p>
              Each outreach is planned around the people we are serving. We
              provide practical support, shared moments of celebration, and a
              reminder that every person deserves to be seen, valued, and loved.
            </p>
            <p>
              As the programme grows, we continue to keep the work
              community-driven, volunteer-powered, and transparent so every gift
              can be traced back to meaningful impact.
            </p>
            <div className="pd-writeup-tags">
              <span>Lagos</span>
              <span>Ogun State</span>
              <span>Oyo State</span>
              <span>Children 0 â€“ 17</span>
              <span>Monthly visits</span>
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ 3. Image gallery â€” Perfect 3-Column Screenshot Grid â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="pd-gallery-section">
        <div className="pd-gallery-header">
          <p className="about-kicker">Photo journal</p>
          <h2 className="home-section-title">Moments that matter</h2>
        </div>
        <div className="pd-gallery-mosaic">
          {/* Row 1 & Row 2 elements */}
          <GalleryTile
            src={bgImg}
            alt="Kids' Joy"
            caption="Kids' Joy"
            variant="tall"
          />
          <GalleryTile
            src={bgImg}
            alt="Lagos Outreach"
            caption="Lagos Outreach"
            variant="wide"
          />
          <GalleryTile
            src={bgImg}
            alt="Kids playing group games"
            caption="Kids playing group games"
          />

          {/* Remaining staggered spaces in Row 2 */}
          <GalleryTile
            src={bgImg}
            alt="Happy fac celebration"
            caption="Happy fac celebration"
          />
          <GalleryTile
            src={bgImg}
            alt="Personalized birthday gifts"
            caption="Personalized birthday gifts"
          />

          {/* Row 3 & Row 4 elements */}
          <GalleryTile src={bgImg} alt="Kids' Joy 2" caption="Kids' Joy" />
          <GalleryTile src={bgImg} alt="Kids looking" caption="Kids looking" />
          <GalleryTile
            src={bgImg}
            alt="Lagos Outreach 2"
            caption="Lagos Outreach"
            variant="tall"
          />
          <GalleryTile src={bgImg} alt="Kids jumping" caption="Kids jumping" />

          {/* Row 4 termination and wrapping alignment */}
          <GalleryTile src={bgImg} alt="Birthday Cake Close-up" />
          <GalleryTile
            src={bgImg}
            alt="Orphanage Visit Group Photo"
            caption="Orphanage Visit"
            variant="wide"
          />
        </div>
      </section>

      {/* â”€â”€ 4. Reviews â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="pd-reviews-section home-section">
        <div className="pd-reviews-inner">
          <div className="pd-reviews-header">
            <p className="about-kicker">What people say</p>
            <h2 className="home-section-title">Words from the community</h2>
          </div>
          <div className="pd-reviews-grid">
            {REVIEWS.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ 5. CTA â€” volunteer panel â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="pd-cta">
        <div className="pd-cta-image-wrap">
          <img src={bgImg} alt="" aria-hidden="true" />
        </div>
        <div className="pd-cta-card">
          <span className="pd-cta-tag">Volunteer</span>
          <h2>
            Be a Volunteer for
            <br />
            Brighter Futures
          </h2>
          <p>
            To inspire individuals to celebrate birthdays by giving back to the
            community, fostering compassion and generosity through impactful
            outreach.
          </p>
          <a href="/get-involved" className="pd-cta-btn">
            Join as a Volunteer
            <span className="pd-cta-arrow" aria-hidden="true">
              â†’
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;
