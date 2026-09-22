"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Handshake,
  Search,
  X,
  MapPin,
  Users,
  Sparkles,
  Heart,
  Gift,
  HeartHandshake,
} from "lucide-react";
import InnerPageHero from "../../components/InnerPageHero";
import { PROJECTS, PROJECT_CATEGORIES } from "../../data/projects";
import heroImg from "../../assets/images/bacground1.webp";

function ProjectCard({
  id,
  title,
  description,
  image,
  category,
  location,
  beneficiariesCount,
}) {
  const imgSrc = image?.src || image || heroImg.src || heroImg;

  return (
    <article className="home-image-card project-card">
      <div className="home-card-image proj-card-media">
        <img src={imgSrc} alt={title} loading="lazy" />
        {category && <span className="proj-card-category">{category}</span>}
      </div>
      <div className="home-card-body proj-card-body">
        <div className="proj-card-meta">
          {location && (
            <span className="proj-meta-item">
              <MapPin size={13} aria-hidden="true" />
              <span>{location.split(",")[0]}</span>
            </span>
          )}
          {beneficiariesCount && (
            <span className="proj-meta-item">
              <Users size={13} aria-hidden="true" />
              <span>{beneficiariesCount}</span>
            </span>
          )}
        </div>
        <h3>{title}</h3>
        <p>
          {description ||
            "Supporting children and families with education, meals, and celebratory care."}
        </p>
        <Link href={`/projects/${id}`} className="home-card-link proj-card-btn">
          <span>View Project</span>
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const pageRef = useRef(null);

  // Filter projects by category and search term
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((proj) => {
      const matchesCategory =
        activeCategory === "All" || proj.category === activeCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        proj.title.toLowerCase().includes(query) ||
        proj.description.toLowerCase().includes(query) ||
        (proj.category && proj.category.toLowerCase().includes(query)) ||
        (proj.location && proj.location.toLowerCase().includes(query)) ||
        (proj.tags && proj.tags.some((t) => t.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredProject = useMemo(() => {
    return PROJECTS.find((p) => p.featured) || PROJECTS[0];
  }, []);

  const showSpotlight =
    activeCategory === "All" && !searchQuery.trim() && featuredProject;

  useEffect(() => {
    const originalScroll = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = originalScroll;
    };
  }, []);

  return (
    <div className="proj-page" ref={pageRef}>
      {/* ── 1. Hero Banner ──────────────────────────────────────────────── */}
      <InnerPageHero
        eyebrow="Birthday Outreach"
        title={<>Making birthdays <span>meaningful</span></>}
        titleId="projects-title"
        description="Explore our community outreach programs that transform birthday celebrations into vital care, nutritious meals, gifts, and lasting smiles."
        image={heroImg}
        imageAlt="Children supported through birthday outreach"
        primaryLabel="Donate to a Project"
        primaryTo="/donate"
        secondaryLabel="Partner with us"
        secondaryTo="/get-involved/partner"
        SecondaryIcon={Handshake}
      />

      {/* ── 2. Unified Overview & Filter Bar ────────────────────────────── */}
      <section className="proj-controls-section" aria-label="Project filter and search">
        <div className="proj-controls-inner">
          <div className="proj-controls-header">
            <div>
              <p className="home-kicker">Our Initiatives</p>
              <h2 className="proj-section-title">Explore Outreach Programs</h2>
            </div>
            <div className="proj-search-wrap">
              <Search size={16} className="proj-search-icon" aria-hidden="true" />
              <input
                type="text"
                className="proj-search-input"
                placeholder="Search projects by keyword, location, or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search outreach projects"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="proj-search-clear"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div
            className="proj-categories"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                className={`proj-category-btn ${
                  activeCategory === cat ? "active" : ""
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Featured Spotlight Project ───────── */}
      {showSpotlight && (
        <section className="proj-spotlight-section" aria-label="Featured project spotlight">
          <div className="proj-spotlight-inner">
            <div className="proj-spotlight-card">
              <div className="proj-spotlight-media">
                <img
                  src={featuredProject.image?.src || featuredProject.image}
                  alt={featuredProject.title}
                  loading="lazy"
                />
                <span className="proj-spotlight-badge">
                  <Sparkles size={14} /> Featured Program
                </span>
              </div>
              <div className="proj-spotlight-content">
                <div className="proj-spotlight-meta">
                  <span className="proj-meta-pill">{featuredProject.category}</span>
                  <span className="proj-meta-pill proj-pill-accent">
                    {featuredProject.status}
                  </span>
                </div>
                <h3 className="proj-spotlight-title">
                  <Link href={`/projects/${featuredProject.id}`}>
                    {featuredProject.title}
                  </Link>
                </h3>
                <p className="proj-spotlight-desc">
                  {featuredProject.overview || featuredProject.description}
                </p>

                {/* Quick Impact Stats */}
                <div className="proj-spotlight-stats">
                  {featuredProject.stats?.slice(0, 3).map((stat) => (
                    <div key={stat.label} className="proj-spotlight-stat-item">
                      <strong>{stat.number}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="proj-spotlight-actions">
                  <Link
                    href={`/projects/${featuredProject.id}`}
                    className="button primary"
                  >
                    <span>View Project Details</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/donate" className="button secondary">
                    <Heart size={16} />
                    <span>Support This Cause</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 4. Unified Projects Grid ───────────────────────────────────── */}
      <section className="proj-grid-section" aria-label="All projects grid">
        <div className="proj-grid-inner">
          <div className="proj-grid-header">
            <div>
              <h2 className="home-section-title">
                {activeCategory === "All" && !searchQuery
                  ? "All Outreach Projects"
                  : `Projects (${filteredProjects.length})`}
              </h2>
              <p className="proj-grid-subtitle">
                {searchQuery
                  ? `Showing results matching "${searchQuery}"`
                  : activeCategory !== "All"
                  ? `Filtered by: ${activeCategory}`
                  : "Browse every program where your donations create heartfelt celebrations."}
              </p>
            </div>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="home-card-grid proj-cards-grid">
              {filteredProjects.map((p) => (
                <ProjectCard key={p.id} {...p} />
              ))}
            </div>
          ) : (
            <div className="proj-empty-state">
              <p>No outreach projects found matching your selection.</p>
              <button
                type="button"
                className="button secondary"
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── 5. Cumulative Impact Band ──────────────────────────────────── */}
      <section className="proj-impact-band" aria-label="Cumulative impact statistics">
        <div className="proj-impact-inner">
          <div className="proj-impact-header">
            <span className="proj-impact-badge">
              <Sparkles size={14} aria-hidden="true" />
              Our Reach & Impact
            </span>
            <h2>Every Birthday Celebrated is a Story of Joy</h2>
          </div>
          <div className="proj-impact-stats-grid">
            <div className="proj-impact-stat-card proj-impact-stat--rose">
              <span className="proj-impact-icon" aria-hidden="true">
                <Users size={22} />
              </span>
              <strong>3,500+</strong>
              <span>Children & Seniors Reached</span>
            </div>
            <div className="proj-impact-stat-card proj-impact-stat--amber">
              <span className="proj-impact-icon" aria-hidden="true">
                <Gift size={22} />
              </span>
              <strong>60+</strong>
              <span>Outreach Events Conducted</span>
            </div>
            <div className="proj-impact-stat-card proj-impact-stat--teal">
              <span className="proj-impact-icon" aria-hidden="true">
                <MapPin size={22} />
              </span>
              <strong>15+</strong>
              <span>Communities & Care Homes</span>
            </div>
            <div className="proj-impact-stat-card proj-impact-stat--purple">
              <span className="proj-impact-icon" aria-hidden="true">
                <HeartHandshake size={22} />
              </span>
              <strong>100%</strong>
              <span>Volunteer Powered</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
