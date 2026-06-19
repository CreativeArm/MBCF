import "../projects.css";
import bgImg from "../assets/images/bacground1.jpg";
import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import InnerPageHero from "../components/InnerPageHero";

// ── Individual project card ───────────────────────────────────────────────────
function ProjectCard({ id, title, description }) {
  return (
    <article className="home-image-card project-card">
      <div className="home-card-image">
        <img src={bgImg} alt={title} />
      </div>
      <div className="home-card-body">
        <h3>{title}</h3>
        <p>
          {description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        </p>
        {/* Dynamic link using the project id */}
        <Link to={`/projects/${id}`} className="proj-card-btn">
          View Project
        </Link>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <div className="proj-page">
      {/* ── Hero — full bleed background image ─────────────────────────── */}
      <InnerPageHero
        eyebrow="Birthday Outreach"
        title={<>Making birthdays <span>meaningful</span></>}
        titleId="projects-title"
        description="Explore outreach projects that turn birthday celebrations into practical care, gifts, meals, and lasting community joy."
        image={bgImg}
        imageAlt="Children supported through birthday outreach"
      />

      {/* ── About This Project ─────────────────────────────────────────── */}
      <div className="home-about-band">
        <div className="home-about-layout home-section proj-about-layout">
          <div className="home-about-media">
            <img src={bgImg} alt="About our birthday outreach" />
          </div>
          <div className="proj-about-copy">
            <p className="about-kicker">About This Project</p>
            <h2 className="proj-about-heading">
              We create meaningful birthday experiences for children in need.
            </h2>
            <p className="proj-about-body">
              At My Birthday Charity Foundation, we believe every birthday
              should be celebrated with love and dignity. Through our Birthday
              Outreach program, we reach children and individuals who may never
              have had the chance to celebrate their special day.
            </p>
            <p className="proj-about-body">
              We provide birthday gifts, cakes, food packs, and moments of joy
              to remind them that they are seen, valued, and loved.
            </p>
          </div>
        </div>
      </div>

      {/* ── Projects Grid ──────────────────────────────────────────────── */}
      <div className="home-section proj-grid-section">
        <div className="proj-grid-inner">
          <div className="home-section-header with-action">
            <div className="home-section-heading-copy">
              <p className="home-kicker">Projects Grid</p>
              <h2 className="home-section-title">
                Our Birthday Outreach Projects
              </h2>
            </div>
          </div>
          <div className="home-card-grid">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
