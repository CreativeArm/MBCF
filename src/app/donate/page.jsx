"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Check,
  Copy,
  Gift,
  HandHeart,
  HeartHandshake,
  Landmark,
  ShieldCheck,
  Smartphone,
  Soup,
  Sparkles,
  WalletCards,
} from "lucide-react";
import heroImage from "../../assets/images/medium-shot-happy-kids-posing.webp";
import treatmentImage from "../../assets/images/4963B524-3BEA-44AF-9E5A-BCEB70845E97.webp";
import foodImage from "../../assets/images/IMG_0885.webp";
import trustedImage from "../../assets/images/IMG_1824 (1).webp";
import serviceImage from "../../assets/images/30F2D69C-9FC3-423F-AC31-E86D2D150EBB.webp";

function WhatsAppIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const supportHighlights = [
  {
    title: "Gift Support",
    copy: "Birthday gifts, school items, and essentials.",
    Icon: Gift,
  },
  {
    title: "Trust Funds",
    copy: "Support children and families in need.",
    Icon: ShieldCheck,
  },
  {
    title: "Funds Raised",
    copy: "Collect funds for meaningful outreach.",
    Icon: WalletCards,
  },
];

const givingCards = [
  {
    title: "Treatment Support",
    copy: "Providing essential care and relief to children and families with compassion and support.",
    image: treatmentImage,
    Icon: HeartHandshake,
  },
  {
    title: "Food Support",
    copy: "Offering nutritious food to families and individuals, ensuring no one goes hungry.",
    image: foodImage,
    Icon: Soup,
  },
];

const BANK_INFO = {
  bankName: "PalmPay",
  accountNumber: "8142839405",
  accountName: "My birthday present",
  supportPhone: "08142839405",
  whatsappUrl:
    "https://wa.me/2348142839405?text=Hello%20My%20Birthday%20Charity%20Foundation,%20I%20have%20made%20a%20support%20donation!",
};

export default function DonatePage() {
  const [copiedNumber, setCopiedNumber] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);

  const handleCopyNumber = async () => {
    try {
      await navigator.clipboard.writeText(BANK_INFO.accountNumber);
      setCopiedNumber(true);
      setTimeout(() => setCopiedNumber(false), 2500);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = BANK_INFO.accountNumber;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedNumber(true);
      setTimeout(() => setCopiedNumber(false), 2500);
    }
  };

  const handleCopyAll = async () => {
    const fullDetails = `Account Name: ${BANK_INFO.accountName}\nAccount Number: ${BANK_INFO.accountNumber}\nBank: ${BANK_INFO.bankName}`;
    try {
      await navigator.clipboard.writeText(fullDetails);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2500);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = fullDetails;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2500);
    }
  };

  const scrollToBankDetails = () => {
    const section = document.getElementById("bank-details");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="donate-page donate-template-page">
      <section className="donate-template-hero" aria-labelledby="donate-title">
        <div className="donate-template-hero-copy">
          <p>Help make a difference</p>
          <h1 id="donate-title">
            Lend Your <span>Heart</span> To Change A <span>Child&apos;s</span>{" "}
            Story
          </h1>
          <p>
            Join our mission to support and uplift helpless children. Your
            donation helps provide essential care, birthday joy, and hope.
          </p>
          <div className="donate-template-actions">
            <button
              type="button"
              className="donate-template-primary"
              onClick={scrollToBankDetails}
            >
              Donate Now
              <ArrowDown size={17} aria-hidden="true" />
            </button>
            <Link
              className="donate-template-secondary"
              href="/get-involved/volunteer"
            >
              <HeartHandshake size={17} aria-hidden="true" />
              Be a Volunteer
            </Link>
          </div>
        </div>

        <div className="donate-template-hero-media">
          <img
            src={heroImage.src || heroImage}
            alt="Smiling children supported by the foundation"
          />
        </div>
      </section>

      <section
        className="donate-template-strip"
        aria-label="Donation highlights"
      >
        {supportHighlights.map(({ title, copy, Icon }) => (
          <article key={title}>
            <span>
              <Icon size={28} aria-hidden="true" />
            </span>
            <div>
              <h2>{title}</h2>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </section>

      {/* Primary Bank Donation Section */}
      <section
        id="bank-details"
        className="donate-bank-section"
        aria-labelledby="bank-details-title"
      >
        <div className="donate-bank-container">
          <div className="donate-bank-header">
            <span className="donate-template-kicker">Direct Support</span>
            <h2 id="bank-details-title">Bank Transfer Donation</h2>
            <p>
              We are currently accepting direct bank transfers. Use the official
              account details below to send your support quickly and securely.
            </p>
          </div>

          <div className="donate-bank-grid">
            {/* Bank Details Card */}
            <div className="donate-card-wrapper">
              <div className="donate-bank-card">
                <div className="donate-card-top">
                  <div className="donate-card-badge">
                    <ShieldCheck size={18} aria-hidden="true" />
                    <span>Official Verified Account</span>
                  </div>
                  <div className="donate-card-institution">
                    <Landmark size={17} aria-hidden="true" />
                    <span>{BANK_INFO.bankName}</span>
                  </div>
                </div>

                <div className="donate-card-number-block">
                  <span className="donate-card-label">Account Number</span>
                  <div className="donate-card-number-row">
                    <span className="donate-card-number">
                      {BANK_INFO.accountNumber}
                    </span>
                    <button
                      type="button"
                      className={`donate-copy-btn ${copiedNumber ? "copied" : ""}`}
                      onClick={handleCopyNumber}
                      aria-label="Copy account number"
                    >
                      {copiedNumber ? (
                        <>
                          <Check size={16} aria-hidden="true" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={16} aria-hidden="true" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="donate-card-details-grid">
                  <div className="donate-card-meta">
                    <span className="donate-card-label">Account Name</span>
                    <strong className="donate-card-val">
                      {BANK_INFO.accountName}
                    </strong>
                  </div>
                  <div className="donate-card-meta">
                    <span className="donate-card-label">Bank</span>
                    <div className="donate-card-bank-val">
                      <Landmark size={16} aria-hidden="true" />
                      <strong className="donate-card-val">
                        {BANK_INFO.bankName}
                      </strong>
                    </div>
                  </div>
                </div>

                <div className="donate-card-actions">
                  <button
                    type="button"
                    className="donate-card-copy-all"
                    onClick={handleCopyAll}
                  >
                    {copiedAll ? (
                      <>
                        <Check size={16} aria-hidden="true" />
                        <span>All Details Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} aria-hidden="true" />
                        <span>Copy All Bank Details</span>
                      </>
                    )}
                  </button>

                  <a
                    href={BANK_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="donate-card-whatsapp"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Notify Us on WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="donate-gateway-notice">
                <Sparkles size={16} aria-hidden="true" />
                <p>
                  <strong>Payment Gateway Coming Soon:</strong> Card payments &
                  online gateways are currently in integration. For now, direct
                  bank transfer is 100% active and verified.
                </p>
              </div>
            </div>

            {/* How It Works / Steps */}
            <div className="donate-steps-container">
              <h3 className="donate-steps-heading">
                How to make your donation
              </h3>

              <div className="donate-steps-list">
                <div className="donate-step-item">
                  <div className="donate-step-num">1</div>
                  <div className="donate-step-body">
                    <h4>Copy the Account Details</h4>
                    <p>
                      Click the copy button above to easily copy the account
                      number <strong>{BANK_INFO.accountNumber}</strong> or full
                      details.
                    </p>
                  </div>
                </div>

                <div className="donate-step-item">
                  <div className="donate-step-num">2</div>
                  <div className="donate-step-body">
                    <h4>Transfer from Your Bank App / USSD</h4>
                    <p>
                      Open your bank or mobile app, choose{" "}
                      <strong>{BANK_INFO.bankName}</strong>, and confirm the
                      beneficiary name is{" "}
                      <strong>{BANK_INFO.accountName}</strong>.
                    </p>
                  </div>
                </div>

                <div className="donate-step-item">
                  <div className="donate-step-num">3</div>
                  <div className="donate-step-body">
                    <h4>Send Confirmation (Optional)</h4>
                    <p>
                      Let us know so we can acknowledge and say thank you! Send
                      a receipt or message on WhatsApp with one click.
                    </p>
                  </div>
                </div>
              </div>

              <div className="donate-quick-contact">
                <Smartphone size={20} aria-hidden="true" />
                <div>
                  <p className="donate-quick-label">
                    Need assistance or have questions?
                  </p>
                  <a
                    href={`tel:+234${BANK_INFO.supportPhone.slice(1)}`}
                    className="donate-quick-phone"
                  >
                    Call: {BANK_INFO.supportPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="donate-giving-options" aria-labelledby="giving-title">
        <div className="donate-giving-grid">
          {givingCards.map(({ title, copy, image, Icon }) => {
            const cardImg = image?.src || image;
            return (
              <article className="donate-giving-card" key={title}>
                <div className="donate-giving-image">
                  <img src={cardImg} alt={`${title} outreach`} />
                </div>
                <span className="donate-giving-icon">
                  <Icon size={26} aria-hidden="true" />
                </span>
                <div>
                  <h2>{title}</h2>
                  <p>{copy}</p>
                </div>
              </article>
            );
          })}

          <article className="donate-contribute-card">
            <img src={serviceImage.src || serviceImage} alt="" aria-hidden="true" />
            <div>
              <h2 id="giving-title">Contribute Today To Make A Difference</h2>
              <p>Your contribution makes change possible today.</p>
              <button
                type="button"
                className="donate-template-primary"
                onClick={scrollToBankDetails}
              >
                Join Us Now
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          </article>
        </div>
      </section>

      <section className="donate-trusted" aria-labelledby="trusted-title">
        <div className="donate-trusted-media">
          <img
            src={trustedImage.src || trustedImage}
            alt="Foundation outreach team with community members"
          />
        </div>

        <div className="donate-trusted-copy">
          <p className="donate-template-kicker">
            Welcome. Let&apos;s make a difference!
          </p>
          <h2 id="trusted-title">A Trusted Non-Profit Charity Organization</h2>
          <p>
            Our non-profit charity center is trustworthy as well as changing the
            world. Our goal is to create good change in our community by
            providing assistance to those in need and offering funding.
          </p>

          <div className="donate-trusted-pills">
            <article>
              <HandHeart size={22} aria-hidden="true" />
              <span>Be a Hero, Contribute Now</span>
            </article>
            <article>
              <Gift size={22} aria-hidden="true" />
              <span>Help Children with Donations</span>
            </article>
          </div>

          <ul>
            <li>Providing essential resources to underserved communities.</li>
            <li>Offering support through educational and health programs.</li>
            <li>
              Facilitating volunteer opportunities for community involvement.
            </li>
          </ul>

          <button
            type="button"
            className="donate-template-primary"
            onClick={scrollToBankDetails}
          >
            Support Now
          </button>
        </div>
      </section>
    </div>
  );
}
