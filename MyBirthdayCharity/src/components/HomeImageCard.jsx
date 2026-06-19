import { Link } from "react-router-dom";
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

  return (
    <article className={classes}>
      <div className="home-card-image">
        <img src={image} alt={imageAlt} />
      </div>

      <div className="home-card-body">
        <h3>{title}</h3>
        <p>{description}</p>

        {linkLabel && to ? (
          <Link className="home-card-link" to={to}>
            {linkLabel}
            {showArrow ? <ArrowRight size={24} aria-hidden="true" /> : null}
          </Link>
        ) : null}
      </div>
    </article>
  );
}

export default HomeImageCard;
