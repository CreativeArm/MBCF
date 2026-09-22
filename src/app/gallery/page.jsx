"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  X,
} from "lucide-react";
import Coverflow from "../../components/Coverflow.jsx";

// Image Assets
import smileImage from "../../assets/images/medium-shot-happy-kids-posing.webp";
import outreachImage from "../../assets/images/IMG_1824 (1).webp";
import volunteerImage from "../../assets/images/IMG_1916 (1).webp";
import picnicImage from "../../assets/images/IMG_0900.webp";
import careImage from "../../assets/images/IMG_0885.webp";
import schoolImage from "../../assets/images/4963B524-3BEA-44AF-9E5A-BCEB70845E97.webp";
import classroomImage from "../../assets/images/30F2D69C-9FC3-423F-AC31-E86D2D150EBB.webp";
import celebrationImage from "../../assets/images/IMG_7659.webp";
import momentImage from "../../assets/images/IMG_0853.webp";
import kidsJoyImage from "../../assets/images/0C568BDD-C645-480E-9490-C1E363FF935A.webp";
import carePackagesImage from "../../assets/images/1C519AF3-D4EE-4920-BFD9-1A5CCCA06F23.webp";
import communityJoyImage from "../../assets/images/229ABC94-03AD-4A50-BBD8-528735B4C51E.webp";
import birthdayKidsImage from "../../assets/images/5FF21C8D-7237-4D26-A4B8-89003CD9CD81.webp";
import giftShareImage from "../../assets/images/64A84E59-D649-456A-AA0B-E6E15DAADC84.webp";
import warmSmilesImage from "../../assets/images/940D421E-AB02-4E40-92A0-54B815ECE19B.webp";
import supportVisitImage from "../../assets/images/D2F0A5A0-9C5A-4444-BE94-A34872650BDB.webp";
import communityMealImage from "../../assets/images/FE016465-3046-40ED-8342-719894510927.webp";
import celebrationCheerImage from "../../assets/images/PRIL0258.webp";
import learningJoyImage from "../../assets/images/83E38B20-41A3-4697-9164-923BD7EB2C70.webp";
import givingHandsImage from "../../assets/images/97D8668F-8C0A-4B55-927F-F5D9683D3F70.webp";
import smilesUnitedImage from "../../assets/images/985AD297-D7D0-4FCF-8C19-4C2615AC022C.webp";

const galleryFilters = [
  "All",
  "Outreach",
  "Children",
  "Volunteers",
  "Celebration",
  "School Support",
  "Food Care",
];

const galleryItems = [
  {
    id: 1,
    title: "One Smile at a Time",
    category: "Children",
    location: "Community Birthday Joy",
    image: smileImage,
    alt: "Children smiling through a wooden window",
    bentoSlot: 0,
  },
  {
    id: 2,
    title: "Gifts in Good Hands",
    category: "Outreach",
    location: "Field Outreach Visit",
    image: outreachImage,
    alt: "Foundation team members and beneficiaries with gift bags",
    bentoSlot: 1,
  },
  {
    id: 3,
    title: "The People Who Show Up",
    category: "Volunteers",
    location: "Volunteer Squad",
    image: volunteerImage,
    alt: "My Birthday Charity Foundation volunteers standing together",
    bentoSlot: 2,
  },
  {
    id: 4,
    title: "A Table of Shared Care",
    category: "Celebration",
    location: "Community Gathering",
    image: picnicImage,
    alt: "Volunteers and community members gathered around refreshments",
    bentoSlot: 3,
  },
  {
    id: 5,
    title: "Wrapped With Kindness",
    category: "Food Care",
    location: "Food & Care Drive",
    image: careImage,
    alt: "Volunteers seated with community members during outreach",
    bentoSlot: 4,
  },
  {
    id: 6,
    title: "Little Hands, Big Hope",
    category: "School Support",
    location: "School Outreach",
    image: schoolImage,
    alt: "A volunteer greeting young school children",
    bentoSlot: 5,
  },
  {
    id: 7,
    title: "Learning Days Together",
    category: "School Support",
    location: "Classroom Visit",
    image: classroomImage,
    alt: "Children and volunteers gathered inside a classroom",
    bentoSlot: 6,
  },
  {
    id: 8,
    title: "Birthday Family Moment",
    category: "Celebration",
    location: "Birthday Outreach",
    image: celebrationImage,
    alt: "A group gathered around celebration moments",
    bentoSlot: 0,
  },
  {
    id: 9,
    title: "Smiles That Light the World",
    category: "Children",
    location: "Youth Center",
    image: kidsJoyImage,
    alt: "Children smiling and celebrating together",
    bentoSlot: 1,
  },
  {
    id: 10,
    title: "Essential Care Packages",
    category: "Outreach",
    location: "Relief Distribution",
    image: carePackagesImage,
    alt: "Volunteers preparing care packs",
    bentoSlot: 2,
  },
  {
    id: 11,
    title: "Joy in Every Corner",
    category: "Celebration",
    location: "Celebration Visit",
    image: communityJoyImage,
    alt: "Smiling faces during community joy event",
    bentoSlot: 3,
  },
  {
    id: 12,
    title: "Smiles of Tomorrow",
    category: "Children",
    location: "Community Center",
    image: birthdayKidsImage,
    alt: "Youth celebrating together",
    bentoSlot: 4,
  },
  {
    id: 13,
    title: "Sharing the Gift of Care",
    category: "Outreach",
    location: "Outreach Drive",
    image: giftShareImage,
    alt: "Volunteers distributing packages",
    bentoSlot: 5,
  },
  {
    id: 14,
    title: "Warm Welcomes & Bright Days",
    category: "Children",
    location: "Child Welfare Outreach",
    image: warmSmilesImage,
    alt: "Children in bright yellow attire smiling",
    bentoSlot: 6,
  },
  {
    id: 15,
    title: "Standing With Every Child",
    category: "Volunteers",
    location: "Community Support",
    image: supportVisitImage,
    alt: "Volunteers posing with families outdoors",
    bentoSlot: 0,
  },
  {
    id: 16,
    title: "Nourishing Communities",
    category: "Food Care",
    location: "Community Meal Drive",
    image: communityMealImage,
    alt: "Community meal outreach with families gathered outdoors",
    bentoSlot: 1,
  },
  {
    id: 17,
    title: "Celebration of Humanity",
    category: "Celebration",
    location: "Special Birthday Mission",
    image: celebrationCheerImage,
    alt: "Happy celebration moments",
    bentoSlot: 2,
  },
  {
    id: 18,
    title: "Dedicated to the Mission",
    category: "Volunteers",
    location: "Team Coordination",
    image: momentImage,
    alt: "Volunteers seated together during a foundation activity",
    bentoSlot: 3,
  },
  {
    id: 19,
    title: "Bright Minds, Bright Futures",
    category: "School Support",
    location: "Educational Aid",
    image: learningJoyImage,
    alt: "Students receiving learning supplies with big smiles",
    bentoSlot: 4,
  },
  {
    id: 20,
    title: "Hands of Compassion",
    category: "Outreach",
    location: "Community Outreach",
    image: givingHandsImage,
    alt: "Volunteers reaching out with love and food packages",
    bentoSlot: 5,
  },
  {
    id: 21,
    title: "Strength in Unity",
    category: "Volunteers",
    location: "Outreach Squad",
    image: smilesUnitedImage,
    alt: "Group of volunteers sharing an uplifting smile",
    bentoSlot: 6,
  },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const visibleItems = useMemo(() => {
    if (activeFilter === "All") {
      return galleryItems;
    }
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (lightboxIndex !== null) {
        if (event.key === "Escape") {
          setLightboxIndex(null);
        } else if (event.key === "ArrowRight") {
          setLightboxIndex((prev) => (prev + 1) % visibleItems.length);
        } else if (event.key === "ArrowLeft") {
          setLightboxIndex(
            (prev) => (prev - 1 + visibleItems.length) % visibleItems.length,
          );
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, visibleItems.length]);

  // Lock body scroll when modal lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [lightboxIndex]);

  // Chunk visible items into 7-item bento collage clusters
  const bentoClusters = useMemo(() => {
    const clusters = [];
    for (let i = 0; i < visibleItems.length; i += 7) {
      clusters.push(visibleItems.slice(i, i + 7));
    }
    return clusters;
  }, [visibleItems]);

  const scrollToMosaic = () => {
    const section = document.getElementById("photo-stories");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeLightboxItem =
    lightboxIndex !== null ? visibleItems[lightboxIndex] : null;

  const coverflowSlides = useMemo(() => {
    return visibleItems.map((item) => ({
      src: item.image?.src || item.image,
      alt: item.alt || item.title,
    }));
  }, [visibleItems]);

  return (
    <div className="gallery-page">
      {/* Visual Diary 3D Hero Showcase */}
      <section className="diary-showcase-section" aria-labelledby="diary-title">
        <div className="diary-showcase-header">
          <span className="diary-kicker">GALLERY</span>
          <h1 id="diary-title">Our Visual Diary</h1>
          <p>
            See our journey through the lens: community moments, outreach
            memories, and heartfelt smiles.
          </p>

          {/* Filter Pills */}
          <div
            className="diary-pill-group"
            aria-label="Visual diary categories"
          >
            {galleryFilters.map((filter) => (
              <button
                type="button"
                className={`diary-pill ${filter === activeFilter ? "active" : ""}`}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={filter === activeFilter}
              >
                {filter}
              </button>
            ))}
            <button
              type="button"
              className="diary-pill diary-pill-more"
              onClick={scrollToMosaic}
            >
              View More <ChevronRight size={15} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* 3D Coverflow Component */}
        <Coverflow
          slides={coverflowSlides}
          startIndex={Math.min(2, Math.floor(coverflowSlides.length / 2))}
        />
      </section>

      {/* Complete Bento Collage Photo Stories Section */}
      <section
        id="photo-stories"
        className="gallery-wall"
        aria-labelledby="gallery-wall-title"
      >
        <div className="gallery-wall-inner">
          <div className="gallery-wall-header">
            <div>
              <p className="gallery-wall-kicker">Visual Archive</p>
              <h2 id="gallery-wall-title">Explore All Photo Stories</h2>
              <p className="gallery-wall-subtitle">
                A visual tapestry of every milestone, mission, and smiling soul.
              </p>
            </div>
          </div>

          <div className="gallery-bento-container">
            {bentoClusters.map((cluster, clusterIndex) => {
              const isPartial = cluster.length < 7;
              return (
                <div
                  key={`bento-cluster-${clusterIndex}`}
                  className={`gallery-bento-cluster ${isPartial ? "gallery-bento-cluster--partial" : ""}`}
                >
                  {cluster.map((item, itemIndexInCluster) => {
                    const globalIndex = clusterIndex * 7 + itemIndexInCluster;
                    const slotIndex = itemIndexInCluster % 7;
                    const imgSrc = item.image?.src || item.image;
                    return (
                      <button
                        type="button"
                        className={`gallery-bento-card bento-slot-${slotIndex}`}
                        key={`bento-${item.id}`}
                        onClick={() => setLightboxIndex(globalIndex)}
                        aria-label={`Open photo: ${item.title}`}
                      >
                        <img src={imgSrc} alt={item.alt} loading="lazy" />
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal Lightbox Pop-up */}
      {activeLightboxItem && mounted && typeof document !== "undefined"
        ? createPortal(
            <div
              className="gallery-lightbox-overlay"
              role="dialog"
              aria-modal="true"
              aria-label="Image preview modal"
              onClick={(e) => {
                if (e.target === e.currentTarget) setLightboxIndex(null);
              }}
            >
              <button
                type="button"
                className="gallery-lightbox-close"
                aria-label="Close image preview"
                onClick={() => setLightboxIndex(null)}
              >
                <X size={24} aria-hidden="true" />
              </button>

              <button
                type="button"
                className="gallery-lightbox-nav gallery-lightbox-nav--prev"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(
                    (prev) =>
                      (prev - 1 + visibleItems.length) % visibleItems.length,
                  );
                }}
              >
                <ArrowLeft size={24} aria-hidden="true" />
              </button>

              <div
                className="gallery-lightbox-modal"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={activeLightboxItem.image?.src || activeLightboxItem.image}
                  alt={activeLightboxItem.alt || "Gallery preview"}
                  className="gallery-lightbox-img"
                  draggable="false"
                />
              </div>

              <button
                type="button"
                className="gallery-lightbox-nav gallery-lightbox-nav--next"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev + 1) % visibleItems.length);
                }}
              >
                <ArrowRight size={24} aria-hidden="true" />
              </button>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
