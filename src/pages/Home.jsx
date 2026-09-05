import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AboutVolunteerCta from "../components/AboutVolunteerCta";
import HomeImageCard from "../components/HomeImageCard";
import HomeSectionHeader from "../components/HomeSectionHeader";
import heroSlide1 from "../assets/images/medium-shot-happy-kids-posing.jpg";
import heroSlide2 from "../assets/images/bacground1.jpg";
import heroSlide3 from "../assets/images/4963B524-3BEA-44AF-9E5A-BCEB70845E97.jpeg";
import heroSlide4 from "../assets/images/IMG_1824 (1).jpeg";
import heroSlide5 from "../assets/images/IMG_0885.JPG";
import aboutPhotoPrimary from "../assets/images/229ABC94-03AD-4A50-BBD8-528735B4C51E.jpeg";
import aboutPhotoSecondary from "../assets/images/0C568BDD-C645-480E-9490-C1E363FF935A.jpeg";
import projectOneImage from "../assets/images/IMG_0885.JPG";
import projectTwoImage from "../assets/images/30F2D69C-9FC3-423F-AC31-E86D2D150EBB.jpeg";
import projectThreeImage from "../assets/images/IMG_0900.JPG";
import getInvolvedImage from "../assets/images/64A84E59-D649-456A-AA0B-E6E15DAADC84.jpeg";
import blogOneImage from "../assets/images/5FF21C8D-7237-4D26-A4B8-89003CD9CD81.jpeg";
import blogTwoImage from "../assets/images/IMG_0853.JPG";
import blogThreeImage from "../assets/images/940D421E-AB02-4E40-92A0-54B815ECE19B.jpeg";
import galleryOneImage from "../assets/images/medium-shot-happy-kids-posing.jpg";
import galleryTwoImage from "../assets/images/D2F0A5A0-9C5A-4444-BE94-A34872650BDB.jpeg";
import galleryThreeImage from "../assets/images/FE016465-3046-40ED-8342-719894510927.jpeg";
import galleryFourImage from "../assets/images/IMG_1916 (1).jpeg";
import { ArrowRight, Gift, HandHeart, Handshake, Play } from "lucide-react";

const heroSlides = [
  {
    image: heroSlide1,
    alt: "Smiling children posing during a My Birthday Charity Foundation outreach",
  },
  {
    image: heroSlide2,
    alt: "Community members and children celebrating together",
  },
  {
    image: heroSlide3,
    alt: "Children in school uniforms supported with education materials",
  },
  {
    image: heroSlide4,
    alt: "Volunteers and community members gathered during outreach",
  },
  {
    image: heroSlide5,
    alt: "Outreach event providing care packages to families",
  },
];

const heroSupportCards = [
  {
    title: "Give",
    description:
      "Whether it's your birthday or just a Tuesday, a gift from you means food on a table, a child back in school, or medicine someone couldn't afford on their own.",
    to: "/donate",
    Icon: Gift,
  },
  {
    title: "Volunteer With Us",
    description:
      "Join us on outreach or lend your skills from wherever you are, there's a team for you.",
    to: "/get-involved/volunteer",
    Icon: HandHeart,
  },
  {
    title: "Partner With Us",
    description:
      "Bring your organization alongside ours. Together, we can reach more families through shared resources and steady support.",
    to: "/get-involved/partner",
    Icon: Handshake,
  },
];

const aboutSupportAreas = [
  "Birthday outreach",
  "Food and gift support",
  "School encouragement",
  "Community visits",
  "Volunteer service",
  "Partner-led impact",
];

const featuredProjects = [
  {
    title: "Feed a Fasting Soul 2",
    description:
      "Providing nourishing meals and care packages for families during the Ramadan season.",
    image: projectOneImage,
    imageAlt: "Community members gathered outdoors during a food outreach",
  },
  {
    title: "Feed a Fasting Soul 1",
    description:
      "A volunteer-led outreach supporting households with food, gifts, and practical care.",
    image: projectTwoImage,
    imageAlt: "Volunteers sharing refreshments at an outdoor community event",
  },
  {
    title: "One Gift Many Smiles",
    description:
      "Turning simple birthday gifts into memorable moments for children and families.",
    image: projectThreeImage,
    imageAlt: "Children and volunteers sitting together during an outreach",
  },
];

const blogPosts = [
  {
    title: "Birthday Outreach in Ota",
    description:
      "We reached families with food, gifts, and care during our birthday outreach.",
    image: blogOneImage,
    imageAlt: "Families receiving support at a birthday outreach",
  },
  {
    title: "How Volunteers Make Giving Personal",
    description:
      "A look at the people who help transform every outreach into a warm community moment.",
    image: blogTwoImage,
    imageAlt: "Volunteer smiling during a community service event",
  },
  {
    title: "Small Gifts, Real Community Joy",
    description:
      "Stories from recent visits where practical support brought encouragement and smiles.",
    image: blogThreeImage,
    imageAlt: "Group seated together at a community outreach programme",
  },
];

const galleryPreview = [
  {
    image: galleryOneImage,
    imageAlt: "Children smiling through a wooden window",
  },
  {
    image: galleryTwoImage,
    imageAlt: "Volunteer sharing refreshments with children",
  },
  {
    image: galleryThreeImage,
    imageAlt: "Community meal outreach with families gathered outdoors",
  },
  {
    image: galleryFourImage,
    imageAlt: "Volunteers and children seated together during an event",
  },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-slider" aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            >
              <img src={slide.image} alt={slide.alt} />
            </div>
          ))}
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">TURNING CELEBRATIONS INTO CARE</p>
          <h1 id="hero-title">
            A birthday, a gift, a moment of kindness. It all counts.
          </h1>
          <p className="hero-copy">
            My Birthday Charity Foundation started with a simple idea: your
            celebration can become someone else's turning point. We support
            children and families across Nigeria with food, education,
            healthcare, and the kind of care that reminds people they matter.
            You don't need a birthday to be part of this. You just need to want
            to give.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/donate">
              Donate Now <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="button secondary" to="/get-involved">
              Get Involved
            </Link>
          </div>
        </div>

        <div
          className="hero-slider-dots"
          role="tablist"
          aria-label="Hero slider pagination"
        >
          {heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`hero-slider-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === currentSlide}
              role="tab"
            />
          ))}
        </div>
      </section>

      <section className="hero-support" aria-labelledby="hero-support-title">
        <div className="hero-support-band">
          <p className="hero-support-kicker">How you can help</p>
          <h2 id="hero-support-title">
            Your birthday is more powerful than you think.
          </h2>
        </div>

        <div className="hero-support-cards">
          {heroSupportCards.map(({ title, description, to, Icon }) => (
            <Link className="hero-support-card" to={to} key={title}>
              <span className="hero-support-icon">
                <Icon size={28} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="home-about-band home-animate"
        aria-labelledby="home-about-title"
      >
        <div className="home-about-layout">
          <div
            className="home-about-media"
            aria-label="Foundation outreach moments"
          >
            <div className="home-about-photo home-about-photo--primary">
              <img
                src={aboutPhotoPrimary}
                alt="Children and volunteers sitting together during an outreach"
              />
            </div>
            <div className="home-about-photo home-about-photo--secondary">
              <img
                src={aboutPhotoSecondary}
                alt="Children smiling during a My Birthday Charity Foundation outreach"
              />
            </div>
            <div className="home-about-badge">
              <span>Since</span>
              <strong>2022</strong>
            </div>
          </div>

          <div className="home-about-copy">
            <p className="home-kicker">About Us</p>
            <h2 id="home-about-title">
              We started with birthdays. We stayed for the people.
            </h2>
            <p className="home-about-lead">
              My Birthday Charity Foundation grew out of a simple habit:
              choosing to give something back on the day meant to celebrate us.
              That habit turned into outreach visits, then school support, then
              food drives, then real relationships with families across our
              communities in Nigeria. We're still growing, and every new person
              who joins us, whether they give, volunteer, or just tell someone
              about us, becomes part of that story
            </p>

            <ul className="home-about-checklist">
              {aboutSupportAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <Link className="home-text-link" to="/about">
              LEARN MORE
              <ArrowRight size={22} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section
        className="home-section home-animate"
        aria-labelledby="featured-projects-title"
      >
        <HomeSectionHeader
          kicker="This is what your support actually looks like."
          titleId="featured-projects-title"
          title="Every project below started with someone deciding to give."
        />

        <div className="home-card-grid" aria-label="Featured projects">
          {featuredProjects.map((project) => (
            <HomeImageCard
              key={project.title}
              image={project.image}
              imageAlt={project.imageAlt}
              title={project.title}
              description={project.description}
              linkLabel="VIEW PROJECT"
              to="/projects"
              className="project-card"
            />
          ))}
        </div>
      </section>

      <section
        className="home-involved home-involved-story home-animate"
        aria-labelledby="home-involved-title"
      >
        <img
          className="home-involved-story-image"
          src={getInvolvedImage}
          alt="Children waiting to be supported through birthday outreach"
        />
        <div className="home-involved-story-overlay" />
        <div className="home-involved-story-inner">
          <div className="home-involved-copy">
            <p className="home-kicker">Get Involved</p>
            <span className="home-involved-subtitle">
              You don't need a special day to do something special.
            </span>
            <h2 id="home-involved-title">
              Turn your celebration into someone else&apos;s smile.
            </h2>
            <div className="home-involved-action-row">
              <Link
                className="home-story-play"
                to="/get-involved"
                aria-label="Get involved with My Birthday Charity Foundation"
              >
                <Play size={20} fill="currentColor" aria-hidden="true" />
              </Link>
              <div>
                <strong>Start helping</strong>
                <span>Donate, volunteer, or partner with us.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="home-section home-animate"
        aria-labelledby="home-blog-title"
      >
        <HomeSectionHeader
          kicker=" "
          titleId="home-blog-title"
          title="Stories from the field."
          description="Real visits, real families, real moments. A closer look at what happens when a birthday becomes an act of love."
          actionLabel="VIEW ALL BLOGS"
          actionTo="/blog"
        />

        <div
          className="home-card-grid home-blog-grid"
          aria-label="Latest blog posts"
        >
          {blogPosts.map((post) => (
            <HomeImageCard
              key={post.title}
              image={post.image}
              imageAlt={post.imageAlt}
              title={post.title}
              description={post.description}
              linkLabel="READ MORE"
              to="/blog"
              showArrow
              className="blog-card"
            />
          ))}
        </div>
      </section>

      <section
        className="home-section home-animate"
        aria-labelledby="home-gallery-title"
      >
        <HomeSectionHeader
          kicker="Gallery Preview"
          titleId="home-gallery-title"
          title={<>A few moments from our time in the community.</>}
          description="Smiles from our outreach visits, hands reaching out to help, and communities coming together. A small window into the joy your support creates."
          actionLabel="VIEW FULL GALLERY"
          actionTo="/gallery"
        />

        <div className="home-gallery-grid" aria-label="Gallery preview">
          {galleryPreview.map((item) => (
            <Link
              className="home-gallery-tile"
              to="/gallery"
              key={item.imageAlt}
            >
              <img src={item.image} alt={item.imageAlt} />
            </Link>
          ))}
        </div>
      </section>

      <AboutVolunteerCta />
    </>
  );
}

export default Home;
