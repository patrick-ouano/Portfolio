export type Role = {
  slug: string;
  company: string;
  title: string;
  period: string;
  location: string;
  logo: string;
  highlights: string[];
  stack: string[];
  href?: string;
};

export const roles: Role[] = [
  {
    slug: "housing-assembly",
    company: "Housing Assembly",
    title: "Software Engineer Intern",
    period: "May 2026 — Present",
    location: "Cape Town, South Africa — via EDU Africa",
    logo: "/work/housing-assembly.png",
    href: "/study-abroad",
    highlights: [
      "Orchestrate n8n-based RAG workflows integrating GPT-4o-mini, text-embedding-3-small, and Pinecone vector search to power an AI chatbot resolving housing-rights queries for 2,000+ community members.",
      "Lead a 4-person team as Scrum Master and core engineer while refactoring a legacy site builder into an HTML/CSS/JS site on Vercel with GitHub Actions CI, designing all systems for a non-technical handoff.",
    ],
    stack: ["n8n", "Pinecone", "GPT-4o-mini", "Vercel", "GitHub Actions", "Meta Cloud API"],
  },
  {
    slug: "raia-ai",
    company: "Raia AI",
    title: "Student Associate, AI Lab",
    period: "January 2026 — May 2026",
    location: "Gainesville, Florida",
    logo: "/work/raia.png",
    highlights: [
      "Architected autonomous AI agents across 5+ client engagements using n8n workflows and custom RESTful API integrations with Jira, automating complex business workflows to reduce operational overhead.",
      "Engineered ETL pipelines processing 1,000+ unstructured client documents into Markdown, building optimized knowledge bases for retrieval-augmented generation and model fine-tuning.",
      "Led iterative prompt engineering and internal QA testing across 100+ simulated scenarios to validate agent reasoning, minimize hallucinations, and ensure high-fidelity performance.",
    ],
    stack: ["n8n", "REST APIs", "Jira", "RAG", "ETL"],
  },
];

export type LeadershipOrg = {
  organization: string;
  location: string;
  positions: {
    title: string;
    period: string;
    highlights: string[];
  }[];
};

export const leadership: LeadershipOrg[] = [
  {
    organization: "Japanese Student Association",
    location: "University of Florida",
    positions: [
      {
        title: "Treasurer",
        period: "May 2026 — Present",
        highlights: [
          "Managing the budget for a 200+ member organization, covering event funding, dues, and reimbursements.",
        ],
      },
      {
        title: "Membership Outreach Chair",
        period: "September 2025 — May 2026",
        highlights: [
          "Drove member retention and growth through targeted outreach strategies and regular community-building socials, then built Gamify JSA to sustain engagement across 200+ members.",
          "Directed the Kyoudai mentorship program, managing the mentor-mentee pairing process and organizing activities that connected new and returning members.",
        ],
      },
    ],
  },
  {
    organization: "Filipino Student Association at UF",
    location: "Gainesville, Florida",
    positions: [
      {
        title: "Web Development Intern",
        period: "January 2025 — May 2026",
        highlights: [
          "Developed the open-source website for a 200+ member organization using React, JavaScript, HTML, and CSS, engineering the authentication UI and a responsive Web Interns page.",
          "Applied UI/UX principles with Figma prototypes and managed version control via Git, working in an Agile team.",
        ],
      },
      {
        title: "Def Talent Jam XXXIII Committee Member",
        period: "July 2025 — October 2025",
        highlights: [
          "Served on the 34-person committee for Def Talent Jam, a weekend-long showcase of culture and dance featuring Filipino student organizations from across the Southeast.",
          "Acted as primary liaison between participating teams and the committee, running day-of competition logistics and leading venue decoration.",
        ],
      },
    ],
  },
];

/** Pre-engineering work, kept short since it's context rather than a selling point. */
export const earlier = [
  {
    title: "Music Director",
    organization: "Saint Rose of Lima Catholic Church",
    period: "June 2024 — December 2024",
    note: "Directed a 15-member choir and played piano and organ for weekly services.",
  },
  {
    title: "Real Estate Photographer",
    organization: "eXp Realty",
    period: "October 2021 — July 2023",
    note: "Certified drone operator shooting aerial and interior listing photography for agents.",
  },
];
