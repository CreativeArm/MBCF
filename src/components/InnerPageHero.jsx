import Link from "next/link";
import { HeartHandshake } from "lucide-react";

function InnerPageHero({
  eyebrow = "Help make a difference",
  title,
  description,
  image,
  imageAlt = "",
  titleId,
  showActions = true,
  primaryLabel = "Donate Now",
  primaryTo = "/donate",
  secondaryLabel = "Be a Volunteer",
  secondaryTo = "/get-involved/volunteer",
  SecondaryIcon = HeartHandshake,
}) {
  const imgSrc = image?.src || image;

  return (
    <section className="inner-page-hero" aria-labelledby={titleId}>
      <div className="inner-page-hero-copy">
        <p>{eyebrow}</p>
        <h1 id={titleId}>{title}</h1>
        {description ? <p>{description}</p> : null}
        {showActions ? (
          <div className="inner-page-hero-actions">
            {primaryLabel && primaryTo ? (
              <Link className="inner-page-hero-primary" href={primaryTo}>
                {primaryLabel}
              </Link>
            ) : null}
            {secondaryLabel && secondaryTo ? (
              <Link className="inner-page-hero-secondary" href={secondaryTo}>
                {SecondaryIcon ? <SecondaryIcon size={17} aria-hidden="true" /> : null}
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="inner-page-hero-media">
        <img src={imgSrc} alt={imageAlt} />
      </div>
    </section>
  );
}

export default InnerPageHero;
