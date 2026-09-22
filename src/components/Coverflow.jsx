import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Coverflow.css";

// Foundation images
import smileImage from "../assets/images/medium-shot-happy-kids-posing.webp";
import outreachImage from "../assets/images/IMG_1824 (1).webp";
import volunteerImage from "../assets/images/IMG_1916 (1).webp";
import picnicImage from "../assets/images/IMG_0900.webp";
import careImage from "../assets/images/IMG_0885.webp";
import schoolImage from "../assets/images/4963B524-3BEA-44AF-9E5A-BCEB70845E97.webp";
import classroomImage from "../assets/images/30F2D69C-9FC3-423F-AC31-E86D2D150EBB.webp";
import kidsJoyImage from "../assets/images/0C568BDD-C645-480E-9490-C1E363FF935A.webp";
import carePackagesImage from "../assets/images/1C519AF3-D4EE-4920-BFD9-1A5CCCA06F23.webp";
import communityJoyImage from "../assets/images/229ABC94-03AD-4A50-BBD8-528735B4C51E.webp";
import birthdayKidsImage from "../assets/images/5FF21C8D-7237-4D26-A4B8-89003CD9CD81.webp";

const DEFAULT_SLIDES = [
  { src: kidsJoyImage, alt: "Children celebrating and smiling" },
  { src: classroomImage, alt: "Classroom outreach and learning" },
  { src: schoolImage, alt: "School support and bright futures" },
  { src: communityJoyImage, alt: "Community joy and togetherness" },
  { src: outreachImage, alt: "Giving back and food distribution" },
  { src: birthdayKidsImage, alt: "Birthday celebrations with children" },
  { src: volunteerImage, alt: "Volunteers and community team" },
  { src: carePackagesImage, alt: "Care packages and relief essentials" },
  { src: smileImage, alt: "Happy smiling children" },
  { src: picnicImage, alt: "Community picnic outreach" },
];

// Offset from the center card → position (as a multiple of card width) and scale
const POS = [0, 0.87, 1.55, 2.0];
const SCALE = [1, 0.8, 0.62, 0.5];
const VISIBLE = 2; // how many cards show on each side

export default function Coverflow({ slides = DEFAULT_SLIDES, startIndex = 2, onChange }) {
  const [active, setActive] = useState(startIndex);
  const [cardWidth, setCardWidth] = useState(300);
  const cardRef = useRef(null);
  const dragStart = useRef(null);
  const dragged = useRef(false);
  const n = slides.length;

  const go = useCallback(
    (i) => {
      const next = (i + n) % n;
      setActive(next);
      onChange?.(next);
    },
    [n, onChange]
  );
  const next = () => go(active + 1);
  const prev = () => go(active - 1);

  // Measure card width so spacing scales with the responsive card size
  useLayoutEffect(() => {
    const measure = () => cardRef.current && setCardWidth(cardRef.current.offsetWidth);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Arrow-key navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") go(active + 1);
      if (e.key === "ArrowLeft") go(active - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, go]);

  // Swipe / drag
  const onPointerDown = (e) => {
    dragStart.current = e.clientX;
    dragged.current = false;
  };
  const onPointerUp = (e) => {
    if (dragStart.current === null) return;
    const dx = e.clientX - dragStart.current;
    if (Math.abs(dx) > 40) {
      dragged.current = true;
      dx < 0 ? next() : prev();
    }
    dragStart.current = null;
  };

  const styleFor = (i) => {
    let off = i - active;
    if (off > n / 2) off -= n; // wrap for infinite loop
    if (off < -n / 2) off += n;
    const d = Math.min(Math.abs(off), VISIBLE + 1);
    const hidden = d > VISIBLE;
    return {
      d,
      style: {
        transform: `translateX(${Math.sign(off) * POS[d] * cardWidth}px) scale(${SCALE[d]})`,
        zIndex: 10 - d,
        opacity: hidden ? 0 : 1,
        pointerEvents: hidden ? "none" : "auto",
      },
    };
  };

  return (
    <div className="coverflow" aria-roledescription="carousel" aria-label="Photo gallery">
      <div
        className="coverflow__stage"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerLeave={() => (dragStart.current = null)}
      >
        {slides.map((slide, i) => {
          const { d, style } = styleFor(i);
          return (
            <div
              key={(slide.src || slide.image) + i}
              ref={i === 0 ? cardRef : null}
              className={`coverflow__card${d === 0 ? " is-active" : ""}`}
              style={style}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${n}: ${slide.alt || slide.title || ""}`}
              aria-hidden={d !== 0}
              tabIndex={d === 0 ? 0 : -1}
              onClick={() => !dragged.current && go(i)}
            >
              <img src={slide.src || slide.image} alt={slide.alt || slide.title || "Gallery photo"} draggable="false" />
              {slide.video && <span className="coverflow__play" aria-hidden="true" />}
            </div>
          );
        })}
      </div>

      <div className="coverflow__controls">
        <button type="button" onClick={prev} aria-label="Previous slide">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button type="button" onClick={next} aria-label="Next slide">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
