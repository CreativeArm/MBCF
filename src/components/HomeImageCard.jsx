import Link from "next/link";
import { ArrowRight } from "lucide-react";

function HomeImageCard({
  image,
  imageAlt,
  title,
  description,
  linkLabel,
  to,
  showArrow = false,
  className = "",
}) {
  const classes = ["home-image-card", className].filter(Boolean).join(" ");
  const imgSrc = image?.src || image;

  return (
    <article className={classes}>
      <div className="home-card-image">
        <img src={imgSrc} alt={imageAlt} />
      </div>

      <div className="home-card-body">
        <h3>{title}</h3>
        <p>{description}</p>

        {linkLabel && to ? (
          <Link className="home-card-link" href={to}>
            <span>{linkLabel}</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        ) : null}
      </div>
    </article>
  );
}

export default HomeImageCard;
