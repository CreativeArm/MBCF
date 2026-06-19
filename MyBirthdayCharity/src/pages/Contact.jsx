import { Mail, MessageCircle, Phone } from "lucide-react";
import InnerPageHero from "../components/InnerPageHero";
import "../projects.css";
import "../contact.css";
import heroImage from "../assets/images/bacground1.jpg";
import contactImage from "../assets/images/IMG_1916 (1).jpeg";

const directContacts = [
  {
    label: "Phone",
    value: "08142839405",
    href: "tel:+2348142839405",
    Icon: Phone,
  },
  {
    label: "Whatsapp",
    value: "08142839405",
    href: "https://wa.me/2348142839405",
    Icon: MessageCircle,
  },
  {
    label: "Email",
    value: "mybirthdaypresent@gmail.com",
    href: "mailto:mybirthdaypresent@gmail.com",
    Icon: Mail,
  },
];

function Contact() {
  return (
    <div className="contact-page">
      <InnerPageHero
        eyebrow="Contact Us"
        title={<>We&apos;d love to <span>hear</span> from you.</>}
        titleId="contact-title"
        description="Send us a message about volunteering, partnership, donations, media, or community outreach."
        image={heroImage}
        imageAlt="Children supported by MyBirthday Charity Foundation"
        primaryLabel="Send Message"
        primaryTo="/contact"
      />

      <section className="contact-form-section" aria-labelledby="contact-form-title">
        <div className="contact-image">
          <img src={contactImage} alt="MyBirthday Charity Foundation team members" />
        </div>

        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <h2 id="contact-form-title">Send us a message</h2>
          <p>Fill the form below and we'll get back to you shortly.</p>

          <label>
            <span>Name</span>
            <input type="text" name="name" placeholder="Name" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" placeholder="Email" />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" placeholder="Message" rows="7" />
          </label>

          <button type="submit">Send Now</button>
        </form>
      </section>

      <section className="contact-direct" aria-labelledby="contact-direct-title">
        <h2 id="contact-direct-title">You can also reach us directly</h2>

        <div className="contact-direct-grid">
          {directContacts.map(({ label, value, href, Icon }) => (
            <a className="contact-direct-card" href={href} key={label}>
              <span>
                <Icon size={24} aria-hidden="true" />
              </span>
              <p>{label}</p>
              <strong>{value}</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="contact-newsletter" aria-labelledby="newsletter-title">
        <div>
          <h2 id="newsletter-title">Stay Updated</h2>
          <p>Get stories, updates, and impact reports delivered to your inbox</p>
          <form onSubmit={(event) => event.preventDefault()}>
            <label>
              <span>Email address</span>
              <input type="email" name="newsletterEmail" placeholder="Your email address" />
            </label>
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
