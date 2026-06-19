import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Camera, Heart, Sparkles, X } from "lucide-react";
import InnerPageHero from "../components/InnerPageHero";
import "../projects.css";
import "../gallery.css";
import heroImage from "../assets/images/bacground1.jpg";
import smileImage from "../assets/images/medium-shot-happy-kids-posing.jpg";
import outreachImage from "../assets/images/IMG_1824 (1).jpeg";
import volunteerImage from "../assets/images/IMG_1916 (1).jpeg";
import picnicImage from "../assets/images/IMG_0900.JPG";
import careImage from "../assets/images/IMG_0885.JPG";
import schoolImage from "../assets/images/4963B524-3BEA-44AF-9E5A-BCEB70845E97.jpeg";
import classroomImage from "../assets/images/30F2D69C-9FC3-423F-AC31-E86D2D150EBB.jpeg";
import celebrationImage from "../assets/images/IMG_7659.JPG";
import momentImage from "../assets/images/IMG_0853.JPG";

const galleryFilters = ["All", "Outreach", "Children", "Volunteers", "Celebration"];

const galleryItems = [
  {
    title: "One Smile at a Time",
    category: "Children",
    location: "Birthday joy",
    image: smileImage,
    alt: "Children smiling through a wooden window",
    variant: "large",
  },
  {
    title: "Gifts in Good Hands",
    category: "Outreach",
    location: "Community visit",
    image: outreachImage,
    alt: "Foundation team members and beneficiaries with gift bags",
    variant: "tall",
  },
  {
    title: "The People Who Show Up",
    category: "Volunteers",
    location: "Volunteer team",
    image: volunteerImage,
    alt: "MyBirthday Charity Foundation volunteers standing together",
    variant: "wide",
  },
  {
    title: "A Table of Care",
    category: "Celebration",
    location: "Shared birthday moment",
    image: picnicImage,
    alt: "Volunteers and community members gathered around refreshments",
  },
  {
    title: "Wrapped With Kindness",
    category: "Outreach",
    location: "Field outreach",
    image: careImage,
    alt: "Volunteers seated with community members during outreach",
    variant: "wide",
  },
  {
    title: "Little Hands, Big Hope",
    category: "Children",
    location: "School support",
    image: schoolImage,
    alt: "A volunteer greeting young school children",
    variant: "tall",
  },
  {
    title: "Learning Days",
    category: "Children",
    location: "Classroom visit",
    image: classroomImage,
    alt: "Children and volunteers gathered inside a classroom",
  },
  {
    title: "Birthday Family",
    category: "Celebration",
    location: "Community celebration",
    image: celebrationImage,
    alt: "A group gathered around a birthday cake",
    variant: "wide",
  },
  {
    title: "Close to the Mission",
    category: "Volunteers",
    location: "Planning day",
    image: momentImage,
    alt: "Volunteers seated together during a foundation activity",
  },
];

const storyStats = [
  { value: "9", label: "Captured stories" },
  { value: "4", label: "Moments of impact" },
  { value: "100%", label: "Human warmth" },
];

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const visibleItems = useMemo(() => {
    if (activeFilter === "All") {
      return galleryItems;
    }

    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const activeItem = activeIndex === null ? null : visibleItems[activeIndex];

  useEffect(() => {
    if (!activeItem) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) => ((current ?? 0) + 1) % visibleItems.length);
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          ((current ?? 0) - 1 + visibleItems.length) % visibleItems.length,
        );
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeItem, visibleItems.length]);

  const showPrevious = () => {
    setActiveIndex((current) =>
      ((current ?? 0) - 1 + visibleItems.length) % visibleItems.length,
    );
  };

  const showNext = () => {
    setActiveIndex((current) => ((current ?? 0) + 1) % visibleItems.length);
  };

  return (
    <div className="gallery-page">
      <InnerPageHero
        eyebrow="Gallery"
        title={<>Every smile has a <span>story</span> behind it.</>}
        titleId="gallery-title"
        description="Browse moments of birthday joy, outreach care, volunteer service, and community celebration."
        image={heroImage}
        imageAlt="Children supported by MyBirthday Charity Foundation"
      />

      <section className="gallery-intro" aria-labelledby="gallery-intro-title">
        <div>
          <p className="home-kicker">Captured with care</p>
          <h2 id="gallery-intro-title">
            A living archive of birthdays, outreach, and the people who make joy
            practical.
          </h2>
        </div>

        <div className="gallery-story-card">
          <Camera size={24} aria-hidden="true" />
          <p>
            From school visits to community celebrations, these are the moments
            that remind us why every gift, visit, and volunteer hour matters.
          </p>
        </div>
      </section>

      <section className="gallery-feature" aria-label="Featured gallery moments">
        <article className="gallery-feature-main">
          <img src={smileImage} alt="Children smiling through a wooden window" />
          <div>
            <p>Featured Moment</p>
            <h2>Joy looks different when someone shows up with love.</h2>
          </div>
        </article>

        <div className="gallery-feature-side">
          {storyStats.map((stat) => (
            <article key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-wall" aria-labelledby="gallery-wall-title">
        <div className="gallery-wall-header">
          <div>
            <p className="home-kicker">Photo stories</p>
            <h2 id="gallery-wall-title">Browse the moments</h2>
          </div>

          <div className="gallery-filter-group" aria-label="Gallery filters">
            {galleryFilters.map((filter) => (
              <button
                type="button"
                className={filter === activeFilter ? "active" : ""}
                aria-pressed={filter === activeFilter}
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setActiveIndex(null);
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="gallery-mosaic">
          {visibleItems.map((item, index) => (
            <button
              type="button"
              className={`gallery-tile gallery-tile--${item.variant ?? "default"}`}
              key={item.title}
              onClick={() => setActiveIndex(index)}
            >
              <img src={item.image} alt={item.alt} />
              <span className="gallery-tile-shade" aria-hidden="true" />
              <span className="gallery-tile-copy">
                <span>{item.category}</span>
                <strong>{item.title}</strong>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="gallery-closing" aria-labelledby="gallery-closing-title">
        <Sparkles size={24} aria-hidden="true" />
        <h2 id="gallery-closing-title">More beautiful moments are coming.</h2>
        <p>
          Each outreach adds another chapter to the story. The next smile could
          begin with your support.
        </p>
      </section>

      {activeItem ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-lightbox-title"
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            aria-label="Close image preview"
            onClick={() => setActiveIndex(null)}
          >
            <X size={22} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="gallery-lightbox-nav gallery-lightbox-nav--prev"
            aria-label="Previous image"
            onClick={showPrevious}
          >
            <ArrowLeft size={24} aria-hidden="true" />
          </button>

          <figure>
            <img src={activeItem.image} alt={activeItem.alt} />
            <figcaption>
              <span>{activeItem.category}</span>
              <h2 id="gallery-lightbox-title">{activeItem.title}</h2>
              <p>
                <Heart size={16} aria-hidden="true" />
                {activeItem.location}
              </p>
            </figcaption>
          </figure>

          <button
            type="button"
            className="gallery-lightbox-nav gallery-lightbox-nav--next"
            aria-label="Next image"
            onClick={showNext}
          >
            <ArrowRight size={24} aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Gallery;
