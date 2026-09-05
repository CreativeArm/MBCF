import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, UserRound } from "lucide-react";
import AboutVolunteerCta from "../components/AboutVolunteerCta";
import { blogPosts } from "../data/blogPosts";
import "../blog.css";

function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find((item) => item.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter((item) => item.id !== post.id)
    .slice(0, 3);

  return (
    <div className="blog-detail-page">
      <article>
        <header className="blog-detail-hero">
          <img src={post.image} alt={post.imageAlt} />
          <span className="blog-detail-shade" aria-hidden="true" />
          <div className="blog-detail-hero-copy">
            <Link className="blog-back-link" to="/blog">
              <ArrowLeft size={17} aria-hidden="true" />
              Back to blog
            </Link>
            <p>{post.category}</p>
            <h1>{post.title}</h1>
            <span>{post.excerpt}</span>
            <div className="blog-detail-meta">
              <span>
                <UserRound size={16} aria-hidden="true" />
                {post.author}
              </span>
              <span>
                <CalendarDays size={16} aria-hidden="true" />
                {post.date}
              </span>
              <span>
                <Clock size={16} aria-hidden="true" />
                {post.readTime}
              </span>
            </div>
          </div>
        </header>

        <section className="blog-detail-content">
          <aside className="blog-detail-aside" aria-label="Article details">
            <p className="blog-kicker">Article</p>
            <h2>{post.highlight}</h2>
            <div className="blog-detail-tags">
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </aside>

          <div className="blog-article-body">
            {post.content.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <blockquote>{post.quote}</blockquote>
          </div>
        </section>
      </article>

      <section className="blog-related" aria-labelledby="related-posts-title">
        <div className="blog-section-header">
          <div>
            <p className="blog-kicker">Keep reading</p>
            <h2 id="related-posts-title">Related stories</h2>
          </div>
          <Link className="blog-read-link" to="/blog">
            View all posts
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="blog-related-grid">
          {relatedPosts.map((item) => (
            <article className="blog-related-card" key={item.id}>
              <Link to={`/blog/${item.id}`} className="blog-related-image">
                <img src={item.image} alt={item.imageAlt} />
              </Link>
              <div>
                <p>{item.category}</p>
                <h3>
                  <Link to={`/blog/${item.id}`}>{item.title}</Link>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <AboutVolunteerCta />
    </div>
  );
}

export default BlogDetail;
