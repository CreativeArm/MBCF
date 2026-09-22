"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function useScrollAnimation() {
  const pathname = usePathname();

  useEffect(() => {
    // Select elements to reveal on scroll
    const selectors = [
      "main > section",
      "main > div > section",
      ".home-section",
      ".home-about-band",
      ".home-involved",
      ".home-involved-story",
      ".home-gallery-section",
      ".hero-support",
      ".hero-support-card",
      ".about-story-card-section",
      ".about-mission",
      ".about-values",
      ".about-team",
      ".about-value-card",
      ".about-mission-card",
      ".about-team-group",
      ".about-gallery-wrapper",
      ".about-volunteer",
      ".project-card",
      ".proj-card-grid > *",
      ".proj-impact-stat",
      ".proj-about-layout",
      ".proj-detail-grid",
      ".proj-detail-sidebar",
      ".donate-card-section",
      ".donate-bank-section",
      ".donate-tiers-section",
      ".donate-stats-band",
      ".donate-faq-section",
      ".blog-grid > *",
      ".blog-hero",
      ".blog-newsletter",
      ".blog-featured",
      ".blog-article-card",
      ".gallery-hero",
      ".gallery-section",
      ".gallery-wall",
      ".diary-showcase-section",
      ".contact-card",
      ".contact-form-wrap",
      ".contact-info-wrap",
      ".volunteer-why-card",
      ".volunteer-role-card",
      ".partner-form-card",
      ".partner-benefit-card",
      ".partner-step-card",
      ".get-involved-card",
      ".scroll-reveal",
      "[data-reveal]",
    ];

    const elements = document.querySelectorAll(selectors.join(", "));

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.08,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const timeoutId = setTimeout(() => {
      elements.forEach((el) => {
        if (!el.classList.contains("scroll-reveal")) {
          el.classList.add("scroll-reveal");
        }

        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
          el.classList.add("is-revealed");
        } else {
          observer.observe(el);
        }
      });
    }, 40);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [pathname]);
}
