import { Link } from "react-router-dom";
import { HeartHandshake } from "lucide-react";

function InnerPageHero({
  eyebrow = "Help make a difference",
  title,
  description,
  image,
  imageAlt = "",
  titleId,
  primaryLabel = "Donate Now",
  primaryTo = "/donate",
  secondaryLabel = "Be a Volunteer",
  secondaryTo = "/get-involved/volunteer",
}) {
  return (
    <section className="inner-page-hero" aria-labelledby={titleId}>
      <div className="inner-page-hero-copy">
        <p>{eyebrow}</p>
        <h1 id={titleId}>{title}</h1>
        {description ? <p>{description}</p> : null}
        <div className="inner-page-hero-actions">
          <Link className="inner-page-hero-primary" to={primaryTo}>
            {primaryLabel}
          </Link>
          <Link className="inner-page-hero-secondary" to={secondaryTo}>
            <HeartHandshake size={17} aria-hidden="true" />
            {secondaryLabel}
          </Link>
        </div>
      </div>

      <div className="inner-page-hero-media">
        <img src={image} alt={imageAlt} />
      </div>
    </section>
  );
}

export default InnerPageHero;
