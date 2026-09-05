import InnerPageHero from "./InnerPageHero";
import heroImage from "../assets/images/bacground1.jpg";

function PageShell({ kicker, title, intro, highlights = [], children }) {
  return (
    <>
      <InnerPageHero
        eyebrow={kicker}
        title={title}
        titleId="page-title"
        description={intro}
        image={heroImage}
        imageAlt="Children supported by My Birthday Charity Foundation"
      />

      <section className="section page-body">
        <div className="page-body-copy">{children}</div>
        <aside className="page-design-note" aria-label="Page sections">
          <p className="section-kicker">Page structure</p>
          <h2>Ready for your design.</h2>
          <div className="placeholder-list">
            {highlights.map((highlight) => (
              <span key={highlight}>{highlight}</span>
            ))}
          </div>
        </aside>
      </section>
    </>
  );
}

export default PageShell;
