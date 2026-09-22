import img1 from "../assets/images/bacground1.webp";
import img2 from "../assets/images/IMG_0900.webp";
import img3 from "../assets/images/IMG_1916 (1).webp";
import img4 from "../assets/images/IMG_0853.webp";
import img5 from "../assets/images/IMG_0885.webp";
import img6 from "../assets/images/IMG_7659.webp";
import img7 from "../assets/images/medium-shot-happy-kids-posing.webp";
import img8 from "../assets/images/1C519AF3-D4EE-4920-BFD9-1A5CCCA06F23.webp";
import img9 from "../assets/images/229ABC94-03AD-4A50-BBD8-528735B4C51E.webp";
import img10 from "../assets/images/30F2D69C-9FC3-423F-AC31-E86D2D150EBB.webp";

export const PROJECT_CATEGORIES = [
  "All",
  "Orphanage Care",
  "Community Outreach",
  "Hospital Care",
  "Elderly Care",
  "Education Support",
  "Volunteer Drives",
  "Gift Drives",
];

export const PROJECTS = [
  {
    id: "birthday-outreach-orphanage",
    title: "Birthday Outreach at the Orphanage",
    category: "Orphanage Care",
    status: "Active Program",
    featured: true,
    location: "Lagos & Ogun State, Nigeria",
    targetGroup: "Orphaned & Vulnerable Children (Ages 2–17)",
    beneficiariesCount: "350+ Children",
    image: img2,
    description:
      "Bringing cake, personalized gifts, and lasting dignity to children who have never had the chance to celebrate their special day.",
    overview:
      "Many children in orphanages grow up without ever experiencing a birthday celebration of their own. Our Orphanage Birthday Outreach turns this around by organizing dedicated birthday celebrations filled with custom cakes, personalized gift bags, joyful group games, and hearty nutritious meals.",
    mission:
      "To ensure that every orphaned child feels uniquely cherished, seen, and celebrated, restoring dignity and happiness on their birthday.",
    highlights: [
      "Personalized birthday cakes and gift packs tailored to each child's age and interests.",
      "Nutritious warm meals and refreshment packs for the entire orphanage home.",
      "Interactive games, musical performances, and storytelling sessions.",
      "Provision of essential toiletries, bedding, and school supplies for the homes.",
    ],
    stats: [
      { number: "350+", label: "Children Celebrated" },
      { number: "24", label: "Orphanages Visited" },
      { number: "100%", label: "Volunteer-Powered" },
      { number: "3+ Yrs", label: "Ongoing Impact" },
    ],
    tags: ["Orphanages", "Child Welfare", "Lagos", "Special Celebrations", "Nutrition"],
    gallery: [
      { src: img2, alt: "Kids cutting cake", caption: "Joyful Moments", variant: "tall" },
      { src: img1, alt: "Orphanage visit group photo", caption: "Community Smiles", variant: "wide" },
      { src: img3, alt: "Volunteers sharing gifts", caption: "Handing Out Presents" },
      { src: img4, alt: "Children playing games", caption: "Games & Laughter" },
      { src: img5, alt: "Celebration meals", caption: "Birthday Feast" },
      { src: img6, alt: "Group celebration", caption: "Unforgettable Memories", variant: "wide" },
    ],
    testimonials: [
      {
        initial: "A",
        name: "Sister Mary",
        role: "Home Administrator, St. Monica's Orphanage",
        quote:
          "Watching our children blow out birthday candles for the first time in their lives brought tears to our eyes. My Birthday Charity Foundation brings real heaven to our home.",
      },
      {
        initial: "K",
        name: "Kelechi Nnamdi",
        role: "Lead Outreach Volunteer",
        quote:
          "Seeing a child hold a wrapped gift with their name written on it and realize it's truly theirs — that is why we do this every month.",
      },
    ],
  },
  {
    id: "slum-celebrations",
    title: "Community Slum Celebrations",
    category: "Community Outreach",
    status: "Active Program",
    featured: false,
    location: "Makoko & Ajegunle, Lagos",
    targetGroup: "Underprivileged Children & Families",
    beneficiariesCount: "500+ Children",
    image: img1,
    description:
      "Spreading joy, warm food packs, and educational care packages to children living in underserved waterfront and slum communities.",
    overview:
      "Children living in marginalized urban slums face harsh economic daily realities. Our Community Slum Celebrations bring full-scale birthday carnivals right to community centers, open fields, and street squares with music, hot meals, gifts, and health hygiene kits.",
    mission:
      "To break the cycle of despair in informal settlements through community-wide birthday celebrations that distribute life-enhancing aid.",
    highlights: [
      "Large-scale food drives providing warm meals to over 500 children per outreach.",
      "Distribution of back-to-school kits containing notebooks, bags, and writing materials.",
      "Basic health checks and provision of essential hygiene supplies.",
      "Inspirational mentorship circles led by experienced community leaders.",
    ],
    stats: [
      { number: "500+", label: "Meals Distributed" },
      { number: "12", label: "Communities Reached" },
      { number: "80+", label: "Active Volunteers" },
      { number: "1,200+", label: "Care Bags Given" },
    ],
    tags: ["Slum Outreach", "Food Security", "Education", "Makoko", "Ajegunle"],
    gallery: [
      { src: img1, alt: "Community outreach crowd", caption: "Community Gathering", variant: "wide" },
      { src: img7, alt: "Smiling children in neighborhood", caption: "Pure Happiness", variant: "tall" },
      { src: img8, alt: "Meal sharing session", caption: "Warm Meals for All" },
      { src: img9, alt: "Volunteers at waterfront", caption: "Reaching Every Corner" },
      { src: img3, alt: "Gifts distribution", caption: "Care Packages" },
    ],
    testimonials: [
      {
        initial: "E",
        name: "Emmanuel Tunde",
        role: "Community Elder, Ajegunle",
        quote:
          "They didn't just bring cake. They brought dignity and practical relief. Every family on this street felt the blessing.",
      },
    ],
  },
  {
    id: "hospital-birthday-parties",
    title: "Hospital Birthday Parties",
    category: "Hospital Care",
    status: "Active Program",
    featured: false,
    location: "Pediatric Wards, General Hospitals",
    targetGroup: "Hospitalized Children & Caregivers",
    beneficiariesCount: "180+ Children",
    image: img4,
    description:
      "Organizing uplifting birthday celebrations for children in pediatric wards, delivering comfort, toys, and care during challenging times.",
    overview:
      "Spending a birthday in a hospital bed can be emotionally tough for young children and their parents. We partner with pediatric hospital wards to organize quiet, sanitary, uplifting birthday bedside visits with comforting gifts, soft toys, and supportive care for parents.",
    mission:
      "To bring healing, smiles, and emotional relief to hospitalized children and their families on their special days.",
    highlights: [
      "Hospital-approved sterile gift packages and soft plush toys.",
      "Care packages for staying mothers and guardians.",
      "Emergency medical bill assistance subsidies where possible.",
      "Art and coloring books designed for bedside creative play.",
    ],
    stats: [
      { number: "180+", label: "Patients Cheered" },
      { number: "8", label: "Hospitals Partnered" },
      { number: "100%", label: "Hospital Compliant" },
      { number: "50+", label: "Families Relieved" },
    ],
    tags: ["Pediatric Care", "Hospital Joy", "Health Relief", "Bedside Smiles"],
    gallery: [
      { src: img4, alt: "Pediatric ward smiles", caption: "Healing Smiles", variant: "tall" },
      { src: img5, alt: "Delivering gift boxes", caption: "Bedside Gifts", variant: "wide" },
      { src: img10, alt: "Parent and child moment", caption: "Strength & Love" },
    ],
    testimonials: [
      {
        initial: "D",
        name: "Dr. Funmi Adeyemi",
        role: "Pediatric Consultant, Lagos",
        quote:
          "The emotional boost these visits give our young patients is remarkable. A child who smiles has stronger morale to heal.",
      },
    ],
  },
  {
    id: "elderly-home-celebrations",
    title: "Elderly Home Celebrations",
    category: "Elderly Care",
    status: "Active Program",
    featured: false,
    location: "Care Homes in Lagos & Ibadan",
    targetGroup: "Senior Citizens & Elderly Care Residents",
    beneficiariesCount: "120+ Seniors",
    image: img6,
    description:
      "Celebrating the milestones of elderly residents in care facilities, bringing companionship, warmth, and nostalgic joy.",
    overview:
      "Many seniors in elder care facilities experience profound loneliness. Our Elderly Home Celebrations bring multigenerational volunteers to listen to stories, sing classic nostalgic songs, share wholesome diabetic-friendly treats, and honor our elders with love.",
    mission:
      "To honor, respect, and shower affection on elderly members of society, making every senior feel valued and remembered.",
    highlights: [
      "Customized dietary-safe birthday treats and warm healthy fruit baskets.",
      "Interactive musical sessions, storytelling, and companionship hours.",
      "Comfort packages including cozy shawls, socks, and personal care essentials.",
      "Photo keepsakes and handwritten birthday cards from younger youth volunteers.",
    ],
    stats: [
      { number: "120+", label: "Seniors Honored" },
      { number: "6", label: "Care Homes Visited" },
      { number: "250+", label: "Hours of Companionship" },
      { number: "100%", label: "Warm Smiles" },
    ],
    tags: ["Elderly Care", "Seniors", "Companionship", "Respect", "Ibadan"],
    gallery: [
      { src: img6, alt: "Celebrating with senior citizen", caption: "Golden Memories", variant: "wide" },
      { src: img3, alt: "Sharing laughs with elders", caption: "Generations Together" },
      { src: img2, alt: "Delivering care supplies", caption: "Comfort & Care" },
    ],
    testimonials: [
      {
        initial: "P",
        name: "Pa Joseph (Age 84)",
        role: "Resident, Golden Years Home",
        quote:
          "I felt like a young man again when the team sang for my birthday. May God bless every young person who remembered us.",
      },
    ],
  },
  {
    id: "school-outreach-programs",
    title: "School Outreach Programs",
    category: "Education Support",
    status: "Active Program",
    featured: false,
    location: "Public Primary Schools in Rural Communities",
    targetGroup: "Pupils & Students in Rural Areas",
    beneficiariesCount: "800+ Students",
    image: img7,
    description:
      "Visiting public and rural schools to celebrate academic terms and collective student birthdays with stationery and learning aids.",
    overview:
      "In underserved rural schools, many students lack basic notebooks, pencils, and school sandals. Our School Outreach Program bundles collective birthday celebrations with mass educational kit distributions, fostering academic motivation and peer joy.",
    mission:
      "To empower young minds by combining the festive spirit of birthday celebrations with essential academic tools for bright futures.",
    highlights: [
      "Stationery bundles containing exercise books, mathematical sets, and pens.",
      "Renovation of reading corners and donation of children's library books.",
      "Career mentorship and motivational sessions from young professionals.",
      "Celebration cakes and sweet treat packages for all classroom pupils.",
    ],
    stats: [
      { number: "800+", label: "Students Equipped" },
      { number: "15", label: "Schools Visited" },
      { number: "3,000+", label: "Books Donated" },
      { number: "100%", label: "Education Focus" },
    ],
    tags: ["Education", "Rural Schools", "Literacy", "Stationery", "Mentorship"],
    gallery: [
      { src: img7, alt: "Students with new books", caption: "Equipped for Learning", variant: "tall" },
      { src: img1, alt: "School assembly celebration", caption: "Assembly Cheers", variant: "wide" },
      { src: img8, alt: "Mentorship in classroom", caption: "Inspiring Dreams" },
    ],
    testimonials: [
      {
        initial: "M",
        name: "Mrs. Oladipo",
        role: "Headmistress, Community Primary School",
        quote:
          "The excitement in our classrooms was unimaginable. Children who didn't have exercise books now attend class with pride.",
      },
    ],
  },
  {
    id: "volunteer-led-events",
    title: "Volunteer-Led Community Drives",
    category: "Volunteer Drives",
    status: "Active Program",
    featured: false,
    location: "Nationwide Chapters across Nigeria",
    targetGroup: "Youth, Volunteers & Local Communities",
    beneficiariesCount: "1,000+ Reached",
    image: img3,
    description:
      "Empowering passionate volunteers and birthday celebrants to sponsor and lead their own impact outreach events.",
    overview:
      "Anyone celebrating a birthday can choose to sponsor an outreach or mobilize their friends and colleagues. We provide full logistical support, safety guidelines, and event coordination so celebrants can turn their birthday into a philanthropic milestone.",
    mission:
      "To ignite a nationwide movement of selfless birthday giving where celebrants share their blessings with those in need.",
    highlights: [
      "Step-by-step toolkit for celebrants wanting to give back on their birthdays.",
      "On-ground logistics, photography, and verification support by MBCF staff.",
      "Direct pairing with vetted orphanages, care homes, and community centers.",
      "Transparent financial reporting showing the direct impact of every donation.",
    ],
    stats: [
      { number: "40+", label: "Celebrant Drives" },
      { number: "120+", label: "Active Volunteers" },
      { number: "5+", label: "States Covered" },
      { number: "100%", label: "Community Driven" },
    ],
    tags: ["Volunteerism", "Celebrant Drives", "CSR", "Youth Leadership"],
    gallery: [
      { src: img3, alt: "Volunteers group photo", caption: "Our Passionate Team", variant: "wide" },
      { src: img9, alt: "Outreach in action", caption: "Hands On The Ground" },
      { src: img4, alt: "Celebrant with kids", caption: "Giving Back" },
    ],
    testimonials: [
      {
        initial: "T",
        name: "Tolulope Balogun",
        role: "Birthday Celebrant & Donor",
        quote:
          "For my 30th birthday, instead of throwing an expensive party, I funded an outreach through MBCF. It was the most fulfilling birthday of my life.",
      },
    ],
  },
  {
    id: "gift-donation-drives",
    title: "Annual Gift Donation Drives",
    category: "Gift Drives",
    status: "Active Program",
    featured: false,
    location: "Drop-off Centers & Online Giving",
    targetGroup: "Underprivileged Children & Youths",
    beneficiariesCount: "1,500+ Gifts Distributed",
    image: img5,
    description:
      "Collecting, packaging, and distributing high-quality toys, clothes, and school items to ensure no child goes without a gift.",
    overview:
      "Throughout the year, our gift collection drives receive brand-new and gently loved toys, shoes, clothes, games, and educational materials from generous donors. These items are carefully inspected, beautifully wrapped, and gifted on outreach days.",
    mission:
      "To bridge resource gaps by turning unused and donated goods into treasured gifts that bring radiant joy to children in need.",
    highlights: [
      "Dedicated collection hubs and convenient pickup coordination for donors.",
      "Quality-assurance and hygienic packaging of all donated items.",
      "Thematic holiday and birthday distribution festivals.",
      "Careful categorization ensuring age-appropriate gifts for every recipient.",
    ],
    stats: [
      { number: "1,500+", label: "Gifts Distributed" },
      { number: "350+", label: "Donors Engaged" },
      { number: "10+", label: "Collection Centers" },
      { number: "100%", label: "Joy Guaranteed" },
    ],
    tags: ["Gift Drives", "Donations", "Toys", "Clothing", "Festivals"],
    gallery: [
      { src: img5, alt: "Gift sorting and wrapping", caption: "Wrapping With Love", variant: "wide" },
      { src: img2, alt: "Children holding gift boxes", caption: "Unwrapping Joy" },
      { src: img10, alt: "Presents stacked", caption: "Ready For Delivery" },
    ],
    testimonials: [
      {
        initial: "B",
        name: "Blessing Okonkwo",
        role: "Donor & Supporter",
        quote:
          "Knowing that my donated gifts reached real children in orphanages with photographic proof gave me immense joy and trust in MBCF.",
      },
    ],
  },
];

