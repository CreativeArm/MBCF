"use client";

import { useMemo, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Heart,
  MapPin,
  Users,
  Calendar,
} from "lucide-react";
import InnerPageHero from "../../../components/InnerPageHero";
import { PROJECTS } from "../../../data/projects";
import fallbackHero from "../../../assets/images/bacground1.webp";

function StatPill({ number, label }) {
  return (
    <div className="pd-stat">
      <strong>{number}</strong>
      <span>{label}</span>
    </div>
  );
}

function GalleryTile({ src, alt, variant }) {
  const variantClass = variant ? `pd-gallery-tile--${variant}` : "";
  const imgSrc = src?.src || src;
  return (
    <div className={`pd-gallery-tile ${variantClass}`}>
      <img src={imgSrc} alt={alt || "Project moment"} loading="lazy" />
    </div>
  );
}

function ReviewCard({ name, role, quote, initial }) {
  return (
    <blockquote className="pd-review-card">
      <div className="pd-review-avatar">{initial}</div>
      <p className="pd-review-quote">&ldquo;{quote}&rdquo;</p>
      <footer className="pd-review-footer">
        <strong>{name}</strong>
        <span>{role}</span>
      </footer>
    </blockquote>
  );
}

export default function ProjectDetailClient({ id }) {
  const project = PROJECTS.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const relatedProjects = useMemo(() => {
    return PROJECTS.filter((item) => item.id !== id).slice(0, 3);
  }, [id]);

  if (!project) {
    return (
      <div className="pd-page" style={{ padding: "120px 20px", textAlign: "center" }}>
        <h2>Project not found</h2>
        <p style={{ marginTop: "12px", marginBottom: "24px" }}>The requested project could not be found.</p>
        <Link href="/projects" className="button primary">
          Back to Projects
        </Link>
      </div>
    );
  }

  const defaultStats = [
    { number: "250+", label: "People Reached" },
    { number: "10+", label: "Outreaches" },
    { number: "100%", label: "Volunteer-Led" },
    { number: "Ongoing", label: "Program Status" },
  ];

  const stats = project.stats && project.stats.length > 0 ? project.stats : defaultStats;

  return (
    <div className="pd-page">
      {/* ── 1. Hero Banner ──────────────────────────────────────────────── */}
      <div className="pd-hero pd-hero--inner-format">
        <InnerPageHero
          eyebrow={project.category || "Birthday Outreach"}
          title={project.title}
          titleId="project-detail-title"
          description={project.description}
          image={project.image || fallbackHero}
          imageAlt={`${project.title} outreach`}
          primaryLabel="Support This Project"
          primaryTo="/donate"
          secondaryLabel="Partner With Us"
          secondaryTo="/get-involved/partner"
        />

        {/* Floating stat bar */}
        <div className="pd-stat-bar" role="region" aria-label="Project key metrics">
          {stats.map((s) => (
            <StatPill key={s.label} {...s} />
          ))}
        </div>
      </div>

      {/* ── Back to Projects Navigation Link ────────────────────────────── */}
      <div className="pd-nav-bar">
        <div className="pd-nav-inner">
          <Link href="/projects" className="pd-back-link">
            <ArrowLeft size={16} />
            <span>Back to All Projects</span>
          </Link>
          <div className="pd-nav-tags">
            {project.tags?.map((tag) => (
              <span key={tag} className="pd-tag-pill">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── 2. Project Narrative & Sidebar Overview ─────────────────────── */}
      <section className="pd-writeup home-section" aria-labelledby="about-proj-heading">
        <div className="pd-writeup-inner pd-layout-2col">
          {/* Main narrative column */}
          <div className="pd-main-content">
            <div className="pd-writeup-lead">
              <p className="about-kicker">Program Overview</p>
              <h2 id="about-proj-heading" className="pd-writeup-heading">
                {project.title}
              </h2>
            </div>

            <div className="pd-writeup-body">
              <p className="pd-lead-para">{project.overview || project.description}</p>

              {project.mission && (
                <div className="pd-mission-callout">
                  <strong>Our Mission in This Initiative:</strong>
                  <p>{project.mission}</p>
                </div>
              )}

              {project.highlights && project.highlights.length > 0 && (
                <div className="pd-highlights-block">
                  <h3 className="pd-subheading">Key Program Activities & Impact</h3>
                  <ul className="pd-highlights-list">
                    {project.highlights.map((item, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={18} className="pd-check-icon" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Quick info sidebar card */}
          <aside className="pd-sidebar" aria-label="Project summary details">
            <div className="pd-sidebar-card">
              <h3 className="pd-sidebar-title">Project Details</h3>
              <div className="pd-sidebar-details">
                {project.location && (
                  <div className="pd-sidebar-item">
                    <MapPin size={18} className="pd-sidebar-icon" />
                    <div>
                      <strong>Location</strong>
                      <span>{project.location}</span>
                    </div>
                  </div>
                )}
                {project.targetGroup && (
                  <div className="pd-sidebar-item">
                    <Users size={18} className="pd-sidebar-icon" />
                    <div>
                      <strong>Beneficiaries</strong>
                      <span>{project.targetGroup}</span>
                    </div>
                  </div>
                )}
                {project.status && (
                  <div className="pd-sidebar-item">
                    <Calendar size={18} className="pd-sidebar-icon" />
                    <div>
                      <strong>Program Status</strong>
                      <span>{project.status}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="pd-sidebar-cta">
                <Link href="/donate" className="button primary pd-btn-full">
                  <Heart size={16} />
                  <span>Donate to This Cause</span>
                </Link>
                <Link href="/get-involved/volunteer" className="button secondary pd-btn-full">
                  <span>Volunteer With Us</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── 3. Photo Journal / Gallery Mosaic ──────────────────────────── */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="pd-gallery-section" aria-labelledby="pd-gallery-heading">
          <div className="pd-gallery-header">
            <p className="about-kicker">Photo Journal</p>
            <h2 id="pd-gallery-heading" className="home-section-title">
              Moments That Matter
            </h2>
            <p className="pd-gallery-subtitle">
              Glimpses of heartfelt smiles, shared meals, and joyful birthday moments.
            </p>
          </div>
          <div className="pd-gallery-mosaic">
            {project.gallery.map((tile, idx) => (
              <GalleryTile
                key={idx}
                src={tile.src}
                alt={tile.alt}
                caption={tile.caption}
                variant={tile.variant}
              />
            ))}
          </div>
        </section>
      )}

      {/* ── 4. Reviews & Community Voices ──────────────────────────────── */}
      {project.testimonials && project.testimonials.length > 0 && (
        <section className="pd-reviews-section home-section" aria-labelledby="pd-reviews-heading">
          <div className="pd-reviews-inner">
            <div className="pd-reviews-header">
              <p className="about-kicker">Community Voices</p>
              <h2 id="pd-reviews-heading" className="home-section-title">
                Words from Beneficiaries & Volunteers
              </h2>
            </div>
            <div className="pd-reviews-grid">
              {project.testimonials.map((r, idx) => (
                <ReviewCard key={idx} {...r} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 5. Explore Other Projects ─────────────────────────────────── */}
      <section className="pd-related-section home-section" aria-labelledby="pd-related-heading">
        <div className="pd-related-inner">
          <div className="pd-related-header">
            <div>
              <p className="about-kicker">Explore More</p>
              <h2 id="pd-related-heading" className="home-section-title">
                Other Birthday Outreach Projects
              </h2>
            </div>
            <Link href="/projects" className="button secondary">
              <span>View All Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="home-card-grid">
            {relatedProjects.map((rel) => {
              const relImg = rel.image?.src || rel.image || fallbackHero.src || fallbackHero;
              return (
                <article className="home-image-card project-card" key={rel.id}>
                  <div className="home-card-image">
                    <img src={relImg} alt={rel.title} loading="lazy" />
                    {rel.category && <span className="proj-card-category">{rel.category}</span>}
                  </div>
                  <div className="home-card-body">
                    <h3>{rel.title}</h3>
                    <p>{rel.description}</p>
                    <Link href={`/projects/${rel.id}`} className="home-card-link proj-card-btn">
                      <span>View Project</span>
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. Unified CTA Banner ──────────────────────────────────────── */}
      <section className="pd-cta">
        <div className="pd-cta-image-wrap">
          <img src={fallbackHero.src || fallbackHero} alt="" aria-hidden="true" />
        </div>
        <div className="pd-cta-card">
          <span className="pd-cta-tag">Get Involved</span>
          <h2>Make Your Next Birthday Count</h2>
          <p>
            Whether you want to sponsor an outreach, volunteer your time, or partner with us, your celebration can light up lives in our community.
          </p>
          <Link href="/get-involved" className="pd-cta-btn">
            <span>Get Involved Today</span>
            <span className="pd-cta-arrow" aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
