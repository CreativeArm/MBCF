"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, UserRound } from "lucide-react";
import AboutVolunteerCta from "../../../components/AboutVolunteerCta";
import { blogPosts } from "../../../data/blogPosts";

export default function BlogDetailClient({ id }) {
  const post = blogPosts.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!post) {
    return (
      <div className="blog-detail-page" style={{ padding: "120px 20px", textAlign: "center" }}>
        <h2>Story not found</h2>
        <p style={{ marginTop: "12px", marginBottom: "24px" }}>The requested blog post could not be found.</p>
        <Link href="/blog" className="button primary">
          Back to Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((item) => item.id !== post.id)
    .slice(0, 3);

  const postImg = post.image?.src || post.image;

  return (
    <div className="blog-detail-page">
      <article>
        <header className="blog-detail-hero">
          <img src={postImg} alt={post.imageAlt} />
          <span className="blog-detail-shade" aria-hidden="true" />
          <div className="blog-detail-hero-copy">
            <Link className="blog-back-link" href="/blog">
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
          <Link className="blog-read-link" href="/blog">
            View all posts
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="blog-related-grid">
          {relatedPosts.map((item) => {
            const relImg = item.image?.src || item.image;
            return (
              <article className="blog-related-card" key={item.id}>
                <Link href={`/blog/${item.id}`} className="blog-related-image">
                  <img src={relImg} alt={item.imageAlt} />
                </Link>
                <div>
                  <p>{item.category}</p>
                  <h3>
                    <Link href={`/blog/${item.id}`}>{item.title}</Link>
                  </h3>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <AboutVolunteerCta />
    </div>
  );
}
