export type SearchItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  section: string;
  keywords?: string[];
};

export const searchIndex: SearchItem[] = [
  {
    id: "home",
    title: "Home",
    description:
      "Nurturing Tomorrow, Guided by Values. Al Dhiya International Private School in Salalah, Oman.",
    href: "/",
    section: "Pages",
    keywords: ["homepage", "main", "welcome", "values", "knowledge", "excellence"],
  },
  {
    id: "why-aldhiya",
    title: "Why Al Dhiya?",
    description:
      "Learn what makes Al Dhiya different — internationally recognised education, character, and future-ready learning.",
    href: "/why-aldhiya",
    section: "Pages",
    keywords: ["about", "vision", "mission", "difference", "who we are"],
  },
  {
    id: "academics",
    title: "Academics",
    description:
      "Cambridge, Pearson Edexcel, IGCSE and AS Level programmes alongside the Omani National Curriculum.",
    href: "/academics",
    section: "Pages",
    keywords: [
      "curriculum",
      "cambridge",
      "igcse",
      "edexcel",
      "as level",
      "omani curriculum",
      "subjects",
    ],
  },
  {
    id: "admissions",
    title: "Admissions",
    description:
      "A simple, welcoming admissions process. School fees, entry requirements, process steps, and FAQs.",
    href: "/admissions",
    section: "Pages",
    keywords: ["apply", "enrol", "enroll", "join", "application", "fees", "process"],
  },
  {
    id: "student-life",
    title: "Student Life",
    description:
      "Sports, arts, labs, events and activities that shape confident, well-rounded students.",
    href: "/student-life",
    section: "Pages",
    keywords: [
      "activities",
      "sports",
      "football",
      "art",
      "library",
      "labs",
      "events",
      "clubs",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    description:
      "General and admissions inquiry forms. Call +968 9588 2848, email Zainab.aldhiya@gmail.com, or visit us in Salalah.",
    href: "/contact",
    section: "Pages",
    keywords: ["inquiry", "email", "phone", "location", "map", "salalah", "get in touch"],
  },
  {
    id: "admissions-apply",
    title: "Apply for admissions",
    description:
      "Start an admissions inquiry — share your child's age, grade and preferred start date.",
    href: "/contact?type=admissions",
    section: "Admissions",
    keywords: ["apply now", "application", "enrolment", "enrollment", "register"],
  },
  {
    id: "admissions-fees",
    title: "School fees",
    description:
      "Tuition, application fee of OMR 50, books fees, payment options and sibling discount details.",
    href: "/admissions#fees",
    section: "Admissions",
    keywords: ["tuition", "fees", "cost", "omr", "payment", "sibling discount"],
  },
  {
    id: "admissions-process",
    title: "Admissions process",
    description:
      "How to join Al Dhiya — from inquiry and assessment to enrolment confirmation.",
    href: "/admissions#process",
    section: "Admissions",
    keywords: ["steps", "how to apply", "placement test", "assessment"],
  },
  {
    id: "admissions-faq",
    title: "Admissions FAQ",
    description:
      "Answers about school hours, transport, entrance exams, international students and more.",
    href: "/admissions#faq",
    section: "Admissions",
    keywords: ["questions", "help", "faq"],
  },
  {
    id: "faq-hours",
    title: "School hours",
    description:
      "Sunday to Thursday. KG 1 & KG 2: 7:00 a.m. – 1:00 p.m. Grade 1–12: 7:00 a.m. – 1:45 p.m.",
    href: "/admissions#faq",
    section: "FAQ",
    keywords: ["timings", "schedule", "open hours", "kg", "primary", "secondary"],
  },
  {
    id: "faq-transport",
    title: "School transportation",
    description:
      "Transport is available on selected routes. Contact Admissions for pickup locations and fees.",
    href: "/admissions#faq",
    section: "FAQ",
    keywords: ["bus", "pickup", "routes", "transport"],
  },
  {
    id: "faq-uniform",
    title: "School rules and uniform",
    description:
      "Code of conduct covering uniform, behaviour, attendance and respect for school property.",
    href: "/admissions#faq",
    section: "FAQ",
    keywords: ["uniform", "rules", "behaviour", "conduct", "discipline"],
  },
  {
    id: "faq-exams",
    title: "Entrance exams",
    description:
      "Age-appropriate assessment or placement tests may be required before admission.",
    href: "/admissions#faq",
    section: "FAQ",
    keywords: ["entrance", "placement", "test", "assessment"],
  },
  {
    id: "faq-international",
    title: "International students",
    description:
      "Applications are welcome from Omani and international students subject to requirements.",
    href: "/admissions#faq",
    section: "FAQ",
    keywords: ["expat", "overseas", "foreign", "visa"],
  },
  {
    id: "faq-scholarships",
    title: "Scholarships",
    description:
      "Scholarships are not currently offered. Contact Admissions for future opportunities.",
    href: "/admissions#faq",
    section: "FAQ",
    keywords: ["scholarship", "financial aid", "discount"],
  },
  {
    id: "faq-sibling",
    title: "Sibling discount",
    description: "A 10% sibling discount is available for each child. Contact Admissions for details.",
    href: "/admissions#faq",
    section: "FAQ",
    keywords: ["sibling", "discount", "family", "10%"],
  },
  {
    id: "faq-payment",
    title: "How to pay tuition fees",
    description: "Tuition can be paid by cash or bank transfer through the Admissions Office.",
    href: "/admissions#faq",
    section: "FAQ",
    keywords: ["pay", "bank transfer", "cash", "fees"],
  },
  {
    id: "news",
    title: "Latest news",
    description: "Graduation, sports victories, IGCSE results and school announcements.",
    href: "/#news",
    section: "News",
    keywords: ["updates", "announcements", "blog"],
  },
  {
    id: "news-graduation",
    title: "Grade 12 Class of 2026 graduation",
    description:
      "Al-Dhiya celebrated the graduation of its Grade 12 Class of 2026 in a ceremony of joy and achievement.",
    href: "/#news",
    section: "News",
    keywords: ["graduation", "grade 12", "ceremony", "graduates"],
  },
  {
    id: "news-football",
    title: "Inter-school football tournament win",
    description:
      "Al-Dhiya football team emerged champions of the Inter-School Football Tournament.",
    href: "/#news",
    section: "News",
    keywords: ["football", "sports", "tournament", "champions"],
  },
  {
    id: "news-igcse",
    title: "Excellent IGCSE results 2025/2026",
    description:
      "Outstanding IGCSE results achieved by Al-Dhiya students for the 2025/2026 academic year.",
    href: "/#news",
    section: "News",
    keywords: ["igcse", "results", "exams", "academic"],
  },
  {
    id: "curriculum-cambridge",
    title: "Cambridge & IGCSE programmes",
    description:
      "Internationally recognised Cambridge and IGCSE pathways preparing students for university.",
    href: "/academics",
    section: "Academics",
    keywords: ["cambridge", "igcse", "international", "qualifications"],
  },
  {
    id: "kg-grade12",
    title: "KG1 to Grade 12",
    description:
      "Education from early years through Sixth Form — KG1 to Grade 12 in one school community.",
    href: "/",
    section: "School",
    keywords: ["kg", "primary", "secondary", "sixth form", "early years"],
  },
  {
    id: "location",
    title: "School location — Salalah",
    description:
      "P.O.Box 1735, Postal Code 211, Salalah, Sultanate of Oman. Phone +968 9588 2848. Email Zainab.aldhiya@gmail.com.",
    href: "/contact",
    section: "Contact",
    keywords: ["address", "map", "oman", "salalah", "location", "directions"],
  },
];