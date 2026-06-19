import { Link } from "react-router-dom";
import AboutVolunteerCta from "../components/AboutVolunteerCta";
import HomeImageCard from "../components/HomeImageCard";
import HomeSectionHeader from "../components/HomeSectionHeader";
import bg1 from "../assets/images/bacground1.jpg";
import aboutImage from "../assets/images/medium-shot-happy-kids-posing.jpg";
import projectOneImage from "../assets/images/IMG_0885.JPG";
import projectTwoImage from "../assets/images/IMG_0853.JPG";
import projectThreeImage from "../assets/images/IMG_0900.JPG";
import galleryOneImage from "../assets/images/medium-shot-happy-kids-posing.jpg";
import galleryTwoImage from "../assets/images/IMG_0853.JPG";
import galleryThreeImage from "../assets/images/IMG_0885.JPG";
import galleryFourImage from "../assets/images/IMG_0900.JPG";
import { ArrowRight, Gift, HandHeart, Handshake, Play } from "lucide-react";

const heroSupportCards = [
  {
    title: "Sponsor a Birthday",
    description:
      "Help provide gifts, food, and birthday moments for children who deserve to feel celebrated.",
    to: "/donate",
    Icon: Gift,
  },
  {
    title: "Volunteer With Us",
    description:
      "Give your time and skills to outreach programs that bring joy into underserved communities.",
    to: "/get-involved/volunteer",
    Icon: HandHeart,
  },
  {
    title: "Partner for Impact",
    description:
      "Work with us to reach more families through shared resources, sponsorships, and support.",
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
    image: projectOneImage,
    imageAlt: "Families receiving support at a birthday outreach",
  },
  {
    title: "How Volunteers Make Giving Personal",
    description:
      "A look at the people who help transform every outreach into a warm community moment.",
    image: galleryTwoImage,
    imageAlt: "Volunteer smiling during a community service event",
  },
  {
    title: "Small Gifts, Real Community Joy",
    description:
      "Stories from recent visits where practical support brought encouragement and smiles.",
    image: galleryFourImage,
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
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image-wrap">
          <img
            src={aboutImage}
            alt="Children smiling during a My Birthday Charity Foundation outreach"
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Make every birthday count</p>
          <h1 id="hero-title">Celebrate your birthday by changing a child&apos;s story.</h1>
          <p className="hero-copy">
            My Birthday Charity Foundation turns personal celebrations into
            gifts, meals, care, and joyful moments for children and families who
            need to feel seen.
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
      </section>

      <section className="hero-support" aria-labelledby="hero-support-title">
        <div className="hero-support-band">
          <p className="hero-support-kicker">How you can help</p>
          <h2 id="hero-support-title">
            Lend a helping hand to make more birthdays meaningful.
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

      <section className="home-about-band home-animate" aria-labelledby="home-about-title">
        <div className="home-about-layout">
          <div className="home-about-media" aria-label="Foundation outreach moments">
            <div className="home-about-photo home-about-photo--primary">
              <img
                src={projectThreeImage}
                alt="Children and volunteers sitting together during an outreach"
              />
            </div>
            <div className="home-about-photo home-about-photo--secondary">
              <img
                src={aboutImage}
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
              Helping children feel remembered on their special day.
            </h2>
            <p className="home-about-lead">
              My Birthday Charity Foundation began with one simple question:
              what if every birthday could change a life? Today, we turn
              celebrations into acts of kindness through gifts, meals, school
              support, and community outreach.
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

      <section className="home-section home-animate" aria-labelledby="featured-projects-title">
        <HomeSectionHeader
          kicker="Featured Projects"
          titleId="featured-projects-title"
          title="Our projects are where your gifts and efforts meet real lives."
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

      <section className="home-involved home-involved-story home-animate" aria-labelledby="home-involved-title">
        <img
          className="home-involved-story-image"
          src={bg1}
          alt="Children waiting to be supported through birthday outreach"
        />
        <div className="home-involved-story-overlay" />
        <div className="home-involved-story-inner">
          <div className="home-involved-copy">
            <p className="home-kicker">Get Involved</p>
            <span className="home-involved-subtitle">A birthday can become a blessing</span>
            <h2 id="home-involved-title">
              Turn your celebration into someone else&apos;s smile.
            </h2>
            <div className="home-involved-action-row">
              <Link className="home-story-play" to="/get-involved" aria-label="Get involved with My Birthday Charity Foundation">
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

      <section className="home-section home-animate" aria-labelledby="home-blog-title">
        <HomeSectionHeader
          kicker="From The Blog"
          titleId="home-blog-title"
          title="Our Latest News And Articles"
          description="Browse snapshots of volunteers in action, recipients smiling, and communities uplifted through our programmes."
          actionLabel="VIEW ALL BLOGS"
          actionTo="/blog"
        />

        <div className="home-card-grid home-blog-grid" aria-label="Latest blog posts">
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

      <section className="home-section home-animate" aria-labelledby="home-gallery-title">
        <HomeSectionHeader
          kicker="Gallery Preview"
          titleId="home-gallery-title"
          title={
            <>
              A glimpse into our joyful moments
              <br />
              of service and celebration.
            </>
          }
          description="Browse snapshots of volunteers in action, recipients smiling, and communities uplifted through our programmes."
          actionLabel="VIEW FULL GALLERY"
          actionTo="/gallery"
        />

        <div className="home-gallery-grid" aria-label="Gallery preview">
          {galleryPreview.map((item) => (
            <Link className="home-gallery-tile" to="/gallery" key={item.imageAlt}>
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
