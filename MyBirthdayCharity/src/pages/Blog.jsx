import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock, HeartHandshake, Sparkles } from "lucide-react";
import AboutVolunteerCta from "../components/AboutVolunteerCta";
import InnerPageHero from "../components/InnerPageHero";
import { blogPosts } from "../data/blogPosts";
import "../blog.css";

const featuredPost = blogPosts[0];
const storyPosts = blogPosts.slice(1, 5);
const latestPosts = blogPosts.slice(1);

function PostMeta({ post }) {
  return (
    <div className="blog-meta">
      <span>
        <CalendarDays size={15} aria-hidden="true" />
        {post.date}
      </span>
      <span>
        <Clock size={15} aria-hidden="true" />
        {post.readTime}
      </span>
    </div>
  );
}

function BlogPostCard({ post, featured = false }) {
  return (
    <article className={featured ? "blog-post-card blog-post-card--featured" : "blog-post-card"}>
      <Link className="blog-post-image" to={`/blog/${post.id}`} aria-label={`Read ${post.title}`}>
        <img src={post.image} alt={post.imageAlt} />
        <span>{post.category}</span>
      </Link>
      <div className="blog-post-card-copy">
        <PostMeta post={post} />
        <h3>
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <Link className="blog-read-link" to={`/blog/${post.id}`}>
          Read story
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

function Blog() {
  return (
    <div className="blog-page">
      <InnerPageHero
        eyebrow="Blog"
        title={<>Stories that keep the <span>mission</span> alive.</>}
        titleId="blog-title"
        description="Read outreach recaps, volunteer notes, donor updates, and field stories from My Birthday Charity Foundation."
        image={featuredPost.image}
        imageAlt={featuredPost.imageAlt}
      />

      <section className="blog-editorial" aria-labelledby="blog-featured-title">
        <Link className="blog-lead-story" to={`/blog/${featuredPost.id}`}>
          <img src={featuredPost.image} alt={featuredPost.imageAlt} />
          <span className="blog-lead-shade" aria-hidden="true" />
          <div>
            <p>{featuredPost.category}</p>
            <h2 id="blog-featured-title">{featuredPost.title}</h2>
            <span>{featuredPost.excerpt}</span>
          </div>
        </Link>

        <div className="blog-editorial-copy">
          <p className="blog-kicker">Featured story</p>
          <h2>Field notes, real smiles, and the work behind every celebration.</h2>
          <p>
            Our blog is a living record of the communities we serve and the
            people who make the mission possible. Start with the latest field
            story, then browse more reflections below.
          </p>
          <Link className="blog-button" to={`/blog/${featuredPost.id}`}>
            Read featured post
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="blog-storyboard" aria-label="Blog story highlights">
        <div className="blog-mini-grid">
          {storyPosts.map((post) => (
            <Link className="blog-mini-card" to={`/blog/${post.id}`} key={post.id}>
              <img src={post.image} alt={post.imageAlt} />
              <span>{post.category}</span>
            </Link>
          ))}
        </div>

        <article className="blog-dark-feature">
          <Sparkles size={24} aria-hidden="true" />
          <p>Impact journal</p>
          <h2>Every post preserves a moment of kindness before it becomes a memory.</h2>
          <Link to="/gallery">
            View gallery
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </article>

        <div className="blog-impact-grid">
          <article>
            <strong>6</strong>
            <span>Fresh stories</span>
          </article>
          <article>
            <strong>4</strong>
            <span>Impact themes</span>
          </article>
          <article>
            <strong>100%</strong>
            <span>Human centered</span>
          </article>
          <article>
            <HeartHandshake size={28} aria-hidden="true" />
            <span>Volunteer powered</span>
          </article>
        </div>
      </section>

      <section className="blog-latest" aria-labelledby="blog-latest-title">
        <div className="blog-section-header">
          <div>
            <p className="blog-kicker">Latest articles</p>
            <h2 id="blog-latest-title">Read more from the foundation</h2>
          </div>
          <p>
            Browse updates from outreach days, volunteer teams, giving drives,
            and birthday celebrations across our community.
          </p>
        </div>

        <div className="blog-post-grid">
          <BlogPostCard post={featuredPost} featured />
          {latestPosts.map((post) => (
            <BlogPostCard post={post} key={post.id} />
          ))}
        </div>
      </section>

      <AboutVolunteerCta />
    </div>
  );
}

export default Blog;
