import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Search,
  UserRound,
  X,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import AboutVolunteerCta from "../components/AboutVolunteerCta";
import { blogPosts } from "../data/blogPosts";
import "../blog.css";

const categories = [
  "All",
  "Outreach",
  "Volunteers",
  "Education",
  "Giving",
  "Mission",
  "Celebration",
];

function PostMeta({ post, showAuthor = true }) {
  return (
    <div className="blog-meta">
      {showAuthor && post.author && (
        <span className="blog-meta-item">
          <UserRound size={13} aria-hidden="true" />
          {post.author}
        </span>
      )}
      <span className="blog-meta-item">
        <CalendarDays size={13} aria-hidden="true" />
        {post.date}
      </span>
      <span className="blog-meta-item">
        <Clock size={13} aria-hidden="true" />
        {post.readTime}
      </span>
    </div>
  );
}

function BlogPostCard({ post }) {
  return (
    <article className="blog-card">
      <Link
        className="blog-card-media"
        to={`/blog/${post.id}`}
        aria-label={`Read ${post.title}`}
      >
        <img src={post.image} alt={post.imageAlt} loading="lazy" />
        <span className="blog-card-category">{post.category}</span>
      </Link>

      <div className="blog-card-content">
        <PostMeta post={post} showAuthor={false} />
        <h3 className="blog-card-title">
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <div className="blog-card-footer">
          <span className="blog-card-author">{post.author}</span>
          <Link className="blog-card-link" to={`/blog/${post.id}`}>
            Read Story
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function FeaturedPostCard({ post, onPrev, onNext, hasMultiple = true }) {
  return (
    <article className="blog-featured-banner">
      <img
        className="blog-featured-bg"
        src={post.image}
        alt={post.imageAlt}
      />
      <div className="blog-featured-overlay" />

      <div className="blog-featured-inner">
        <div className="blog-featured-top">
          <span className="blog-featured-category">{post.category}</span>
        </div>

        <div className="blog-featured-main">
          <h2 className="blog-featured-heading">
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </h2>
          <p className="blog-featured-desc">{post.excerpt}</p>
        </div>

        <div className="blog-featured-divider" />

        <div className="blog-featured-bottom">
          <div className="blog-featured-author-box">
            <span className="blog-featured-author-name">{post.author}</span>
            <span className="blog-featured-author-date">{post.date}</span>
          </div>

          {hasMultiple && (
            <div className="blog-featured-nav">
              <button
                type="button"
                className="blog-featured-nav-btn"
                onClick={onPrev}
                aria-label="Previous featured story"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="blog-featured-nav-btn"
                onClick={onNext}
                aria-label="Next featured story"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const featuredPostsPool = useMemo(() => {
    return blogPosts.slice(0, 4);
  }, []);

  const handlePrev = () => {
    setFeaturedIndex((prev) =>
      prev === 0 ? featuredPostsPool.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setFeaturedIndex((prev) =>
      prev === featuredPostsPool.length - 1 ? 0 : prev + 1
    );
  };

  const currentFeaturedPost = featuredPostsPool[featuredIndex];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" ||
        post.category.toLowerCase() === activeCategory.toLowerCase();

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        (post.tags && post.tags.some((tag) => tag.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const isDefaultView = activeCategory === "All" && !searchQuery.trim();
  const listPosts = isDefaultView
    ? blogPosts.filter((p) => p.id !== currentFeaturedPost.id)
    : filteredPosts;

  return (
    <div className="blog-page">
      {/* Compact & Clean Hero Section */}
      <section className="blog-hero" aria-labelledby="blog-hero-title">
        <div className="blog-hero-container">
          <div className="blog-hero-badge">
            <BookOpen size={14} aria-hidden="true" />
            <span>MBCF Journal & Stories</span>
          </div>
          <h1 id="blog-hero-title" className="blog-hero-title">
            Stories that Keep the <span>Mission</span> Alive
          </h1>
          <p className="blog-hero-subtitle">
            Read outreach recaps, volunteer reflections, donor updates, and field
            notes from My Birthday Charity Foundation across Nigerian communities.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="blog-main-container">
        {/* Filter and Search Bar */}
        <div className="blog-controls-bar">
          <div className="blog-categories" role="tablist" aria-label="Filter blog categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={
                  activeCategory === category
                    ? "blog-category-btn active"
                    : "blog-category-btn"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="blog-search-box">
            <Search size={15} className="blog-search-icon" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search stories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search stories"
            />
            {searchQuery && (
              <button
                type="button"
                className="blog-search-clear"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                <X size={13} />
              </button>
            )}
          </div>
        </div>

        {/* Featured Story (Shown on Default View) */}
        {isDefaultView && currentFeaturedPost && (
          <section className="blog-featured-section" aria-label="Featured story">
            <FeaturedPostCard
              post={currentFeaturedPost}
              onPrev={handlePrev}
              onNext={handleNext}
              hasMultiple={featuredPostsPool.length > 1}
            />
          </section>
        )}

        {/* All Stories Grid Header */}
        <div className="blog-grid-header">
          <div>
            <h2 className="blog-grid-title">
              {activeCategory === "All" && !searchQuery
                ? "Recent Stories"
                : `Articles (${filteredPosts.length})`}
            </h2>
            <p className="blog-grid-subtitle">
              {searchQuery
                ? `Showing search results for "${searchQuery}"`
                : activeCategory !== "All"
                ? `Filtered by category: ${activeCategory}`
                : "Explore our latest reflections, celebrations, and impact updates."}
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        {listPosts.length > 0 ? (
          <div className="blog-grid">
            {listPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="blog-empty-state">
            <div className="blog-empty-icon">
              <Search size={28} />
            </div>
            <h3>No stories found</h3>
            <p>
              We couldn't find any articles matching your query. Try
              adjusting your search keywords or choosing another category.
            </p>
            <button
              type="button"
              className="blog-btn-primary"
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      <AboutVolunteerCta />
    </div>
  );
}

export default Blog;
