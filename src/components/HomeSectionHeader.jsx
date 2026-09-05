import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function HomeSectionHeader({
  kicker,
  title,
  titleId,
  description,
  actionLabel,
  actionTo,
  className = "",
}) {
  const classes = ["home-section-header", actionLabel ? "with-action" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <div className="home-section-heading-copy">
        {kicker ? <p className="home-kicker">{kicker}</p> : null}
        <h2 className="home-section-title" id={titleId}>
          {title}
        </h2>
        {description ? (
          <p className="home-section-description">{description}</p>
        ) : null}
      </div>

      {actionLabel && actionTo ? (
        <Link className="home-section-action" to={actionTo}>
          {actionLabel}
          <ArrowRight size={24} aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}

export default HomeSectionHeader;
