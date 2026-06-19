import { Link } from "react-router-dom";
import {
  BadgeCheck,
  Building2,
  CalendarCheck,
  HandHeart,
  HeartHandshake,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import InnerPageHero from "../components/InnerPageHero";
import "../projects.css";
import "../get-involved.css";
import heroImage from "../assets/images/bacground1.jpg";
import volunteerGroupImage from "../assets/images/IMG_1916 (1).jpeg";
import volunteerMomentImage from "../assets/images/IMG_0853.JPG";

const volunteerTeams = [
  {
    title: "Communication/Public Relations",
    copy: "This includes members responsible for communicating with volunteers through one-on-one contact, email, and group channels. The team also assists with moderating and hosting initiative programs.",
    Icon: Megaphone,
  },
  {
    title: "Writing Team",
    copy: "The members of this team are responsible for content writing, blog and website copy, grant writing, and social media captions.",
    Icon: BadgeCheck,
  },
  {
    title: "Social Media Team",
    copy: "The team is responsible for content creation and the social media presence of the initiative including Instagram, Facebook, Twitter, and TikTok.",
    Icon: Sparkles,
  },
  {
    title: "Multimedia Team",
    copy: "This team communicates to our audience with visuals. It includes photographers, videographers, graphic designers, motion designers, video editors, product designers, and website developers.",
    Icon: Building2,
  },
  {
    title: "Volunteer Management",
    copy: "They are responsible for recruiting and onboarding volunteers, handling awards and recognitions, conducting interviews, registering volunteers for outreaches, and tracking volunteer engagement.",
    Icon: Users,
  },
  {
    title: "Data Analysis and Research",
    copy: "This team manages the initiative database, conducts research, monitors outreach impact, and generates insights that can influence decision making and market analysis.",
    Icon: ShieldCheck,
  },
  {
    title: "Project Management Team",
    copy: "This team is responsible for overseeing each outreach from start to finish, including community inspection, beneficiary registration, and logistics.",
    Icon: CalendarCheck,
  },
  {
    title: "Celebration Team",
    copy: "This team celebrates volunteers on their special days, works with the writing and media teams on celebration content, and handles virtual birthday celebrations for volunteers.",
    Icon: HeartHandshake,
  },
  {
    title: "Business Development Team",
    copy: "This team is responsible for handling program opportunities and growth activities associated with the initiative.",
    Icon: HandHeart,
  },
];

function Volunteer() {
  return (
    <div className="involve-page volunteer-page">
      <InnerPageHero
        eyebrow="Join MyBirthday Charity Foundation"
        title={<>Make Impact in your <span>community</span></>}
        titleId="volunteer-title"
        description="Give your time, skills, and compassion to help us make birthdays meaningful for children and families."
        image={heroImage}
        imageAlt="Children supported by MyBirthday Charity Foundation"
        primaryLabel="Register Interest"
        primaryTo="/contact"
      />

      <section className="volunteer-content" aria-labelledby="volunteer-overview">
        <p className="volunteer-lead" id="volunteer-overview">
          My Birthday Charity Foundation is inspired by the belief that
          volunteerism is a strong method of engaging people to tackle
          development and financial challenges facing the community.
        </p>

        <div className="volunteer-image-row">
          <img
            src={volunteerGroupImage}
            alt="MyBirthday Charity Foundation volunteers standing together"
          />
          <img
            src={volunteerMomentImage}
            alt="Volunteers spending time with children during an outreach"
          />
        </div>

        <Link className="volunteer-register-btn" to="/contact">
          Register As A Volunteer
        </Link>

        <p className="volunteer-team-intro">
          At My Birthday Charity Foundation, everyone can contribute their time,
          knowledge, skills, and financial support by being a volunteer. You can
          volunteer to be part of the following teams.
        </p>

        <div className="volunteer-team-grid" aria-label="Volunteer teams">
          {volunteerTeams.map(({ title, copy, Icon }) => (
            <article className="volunteer-team-item" key={title}>
              <span className="volunteer-team-icon">
                <Icon size={18} aria-hidden="true" />
              </span>
              <div>
                <h2>{title}</h2>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>

        <Link className="volunteer-register-btn volunteer-register-btn-bottom" to="/contact">
          Register As A Volunteer
        </Link>

        <p className="volunteer-closing">
          Thank you for your desire to join us in our efforts to renew hope for
          humanity. Thank you for your time, energy, passion, and resources.
          Your hard work and dedication are greatly appreciated. YOU help make a
          difference and touch so many lives in your very own community when
          volunteering at My Birthday Present Initiative.
        </p>
      </section>
    </div>
  );
}

export default Volunteer;
