export type Embed = {
  url: string;
  label: string;
  screenshot: { src: string; alt: string };
  action?: string;
  fit?: "cover" | "contain";
};

export type Project = {
  slug: string;
  name: string;
  year: string;
  role: string;
  summary: string;
  stack: string[];
  link?: { href: string; label: string };
  readMore?: { href: string; label: string };
  embed?: Embed;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "housing-assembly",
    name: "Housing Assembly",
    year: "2026",
    role: "Scrum Master / Technical Lead",
    summary:
      "A refactored site, an AI chatbot on web and WhatsApp, and a searchable document library that non-technical staff maintain themselves.",
    stack: ["n8n", "Railway", "Vercel", "GitHub Actions", "Meta Cloud API", "RAG"],
    link: {
      href: "https://www.housingassembly.org.za/",
      label: "housingassembly.org.za",
    },
    readMore: { href: "/study-abroad", label: "Read the case study" },
    embed: {
      url: "https://www.housingassembly.org.za/",
      label: "housingassembly.org.za",
      screenshot: {
        src: "/projects/housing-assembly-site.png",
        alt: "The Housing Assembly homepage, headlined Decent Housing For All",
      },
    },
    featured: true,
  },
  {
    slug: "openworld",
    name: "OpenWorld",
    year: "2026",
    role: "Scrum Master / Full-Stack Developer",
    summary:
      "A gamified campus exploration app with a fog-of-war map that reveals itself as you physically explore. Explore the Swamp, crack the trivia, collect the badges.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    link: {
      href: "https://open-world-app.vercel.app/",
      label: "open-world-app.vercel.app",
    },
    embed: {
      url: "https://open-world-app.vercel.app/",
      label: "open-world-app.vercel.app",
      screenshot: {
        src: "/projects/openworld.png",
        alt: "The OpenWorld landing map of the UF campus dotted with location pins",
      },
    },
  },
  {
    slug: "mealcraft",
    name: "MealCraft",
    year: "2026",
    role: "Full-Stack Developer",
    summary:
      "A Minecraft-themed recipe generator that turns a photo of your fridge into five recipes with nutrition macros. Built at SwampHacks XI, where it won Best Everyday Life & Wellbeing.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini", "Vercel"],
    link: {
      href: "https://mealcraftai.vercel.app/",
      label: "mealcraftai.vercel.app",
    },
    embed: {
      url: "https://mealcraftai.vercel.app/",
      label: "mealcraftai.vercel.app",
      screenshot: {
        src: "/projects/mealcraft.png",
        alt: "The MealCraft landing page, styled as a pixel-art Minecraft interface",
      },
    },
    featured: true,
  },
  {
    slug: "gamify-jsa",
    name: "Gamify JSA",
    year: "2025",
    role: "Lead Developer / Scrum Master",
    summary:
      "A Discord bot that gamifies club participation for 200+ members with XP, ranks, quests, and leaderboards, backed by Google Sheets and deployed on a DigitalOcean droplet. There's no web page to visit — it lives entirely inside the club's Discord server, so the source is the way in.",
    stack: ["Python", "discord.py", "Google Sheets API", "gspread", "DigitalOcean"],
    link: {
      href: "https://github.com/patrick-ouano/Gamify_JSA",
      label: "github.com/patrick-ouano/Gamify_JSA",
    },
    embed: {
      url: "https://github.com/patrick-ouano/Gamify_JSA",
      label: "github.com/patrick-ouano/Gamify_JSA",
      action: "View source",
      fit: "contain",
      screenshot: {
        src: "/projects/gamify-jsa.png",
        alt: "The Japanese Student Association logo",
      },
    },
    featured: true,
  },
  {
    slug: "latserof-technologies",
    name: "Latserof Technologies",
    year: "2026",
    role: "Freelance Web Developer",
    summary:
      "Lead-gen marketing site for a licensed AV / automation integrator. Custom design system, survey request form, and production deploy on Vercel.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Resend",
      "Vitest",
      "Playwright",
      "GitHub Actions",
      "Vercel",
    ],
    link: {
      href: "https://www.ltgtechnology.com/",
      label: "ltgtechnology.com",
    },
    embed: {
      url: "https://www.ltgtechnology.com/",
      label: "ltgtechnology.com",
      screenshot: {
        src: "/projects/latserof.png",
        alt: "The Latserof Technologies homepage hero in a dark ink and gold gallery look",
      },
    },
    featured: true,
  },
  {
    slug: "uffsa-website",
    name: "UFFSA Website",
    year: "2026",
    role: "Contributor / Frontend Engineer",
    summary:
      "Built the entire authentication frontend for the UF Filipino Student Association's website.",
    stack: ["JavaScript", "HTML", "CSS"],
    link: { href: "https://www.uffsa.net/", label: "uffsa.net" },
    embed: {
      url: "https://www.uffsa.net/",
      label: "uffsa.net",
      screenshot: {
        src: "/projects/uffsa.png",
        alt: "The UF Filipino Student Association homepage",
      },
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
