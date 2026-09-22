"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Gift, HandHeart, Handshake, HeartHandshake } from "lucide-react";
import AboutVolunteerCta from "../../components/AboutVolunteerCta";
import InnerPageHero from "../../components/InnerPageHero";
import { involvementOptions, involvementSteps } from "../../data/involvement";
import heroImage from "../../assets/images/bacground1.webp";
import processImage from "../../assets/images/IMG_1916 (1).webp";

const optionIcons = {
  volunteer: HandHeart,
  donate: Gift,
  partner: Handshake,
};

export default function GetInvolvedPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const originalScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.12,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const revealElements = containerRef.current?.querySelectorAll(".involve-reveal") || [];
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      document.documentElement.style.scrollBehavior = originalScrollBehavior;
    };
  }, []);

  return (
    <div className="involve-page" ref={containerRef}>
      <InnerPageHero
        eyebrow="Get Involved"
        title={<>Be Part of the <span>change</span></>}
        titleId="involve-title"
        description="There are many ways to support the mission through giving, volunteering, partnership, and community service."
        image={heroImage}
        imageAlt="Children supported by My Birthday Charity Foundation"
      />

      <section className="involve-section involve-intro" aria-labelledby="involve-intro-title">
        <h2 id="involve-intro-title" className="involve-reveal">
          There are many ways to support our mission. Whether through giving,
          volunteering, or partnering with us, your involvement makes a
          difference
        </h2>

        <div className="involve-option-grid" role="list">
          {involvementOptions.map((option, index) => {
            const Icon = optionIcons[option.id] || HeartHandshake;

            return (
              <article
                className="involve-option-card involve-reveal"
                key={option.id}
                role="listitem"
                style={{ transitionDelay: `${index * 140}ms` }}
              >
                <span className="involve-option-icon">
                  <Icon size={30} aria-hidden="true" />
                </span>
                <h3>{option.title}</h3>
                <p>{option.summary}</p>
                <Link className="involve-button" href={option.to}>
                  {option.buttonLabel}
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="involve-section involve-steps" aria-labelledby="involve-steps-title">
        <div className="involve-section-heading involve-reveal">
          <p className="home-kicker">How it works</p>
          <h2 id="involve-steps-title">
            Getting involved is simple and takes only a few steps.
          </h2>
        </div>

        <div className="involve-steps-layout">
          <div className="involve-process-image involve-reveal">
            <img
              src={processImage.src || processImage}
              alt="Volunteers and community members during an outreach"
              loading="lazy"
            />
          </div>

          <div className="involve-step-list" role="list">
            {involvementSteps.map((step, index) => (
              <article
                className="involve-step-card involve-reveal"
                key={step.title}
                role="listitem"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="involve-reveal">
        <AboutVolunteerCta />
      </div>
    </div>
  );
}
