export type Week = {
  number: number;
  title: string;
  intro: string;
  lessons: string[];
};

export type Photo = {
  src: string;
  alt: string;
};

export type Feature = {
  name: string;
  description: string;
  stack: string;
  image?: { src: string; alt: string; orientation: "landscape" | "portrait" };
};

export const application = {
  url: "https://www.housingassembly.org.za/",
  label: "housingassembly.org.za",
  screenshot: {
    src: "/projects/housing-assembly-site.png",
    alt: "The Housing Assembly homepage, headlined Decent Housing For All",
  },
  blurb:
    "Everything below is live on Housing Assembly's own domain. The chatbot sits on every page, and the resource library is staff-maintained through a form.",
};

export const overview = {
  program: "EDU Africa",
  dates: "May 30 — July 11, 2026",
  location: "Cape Town, South Africa",
  coordinates: "33.9249\u00b0 S, 18.4241\u00b0 E",
  role: "Scrum Master & Technical Lead",
  body: [
    "A study abroad software engineering internship in Cape Town, South Africa, from May 30 to July 11, 2026, through EDU Africa. Six weeks on-site with Housing Assembly, a grassroots housing rights organization, serving as Scrum Master and technical lead.",
    "We delivered a website refactor, an AI chatbot available on web and WhatsApp, and a searchable document library staff can maintain without touching code. The audience is tenants and residents of poorly built government housing, almost entirely on mobile — which drove nearly every technical decision we made.",
  ],
};

export const acknowledgment =
  "Special thank you to Dr. Sanethia Thomas, Ping Neo, Naomi Harrell, EDU Africa, and Housing Assembly.";

export const reflection = [
  "I came in as Scrum Master expecting to mostly run standups and keep the backlog clean. What it turned into was my first real experience leading a project technically — making the architecture calls, owning how we shipped, and constantly weighing what would be fun to build against what a small organization with no engineers could actually keep running after we left.",
  "WhatsApp was the clearest example. We could have stopped at a chat widget on the website and it would have looked good in a demo. But the people Housing Assembly serves are on their phones, and WhatsApp is what they already open every day, so we spent weeks getting it working properly there instead. That's the lesson I keep coming back to: the best decision usually isn't the most impressive one, it's the one that meets people where they already are. Same reason we built a way for staff to update the document library themselves — anything that needed a developer was going to quietly stop being used the day we flew home. The moment that stuck with me wasn't a deploy going green. It was watching Kenneth and Kashiefa move through the chatbot during testing without needing us to explain a thing.",
  "Then there was Cape Town itself. I'd never been anywhere like it. Standing on top of Table Mountain looking out over the city, or walking through Robben Island and realizing how recent all of it is, gave me a kind of context you can't get from a classroom. Working with people whose day-to-day is shaped by that history, on something meant to actually help their community, changed how I think about what this work is for. I left with more than a project — a better sense of what it means to build something for someone other than yourself.",
];

export const weeks: Week[] = [
  {
    number: 0,
    title: "Client Discovery (Pre-Departure)",
    intro:
      "Before flying out, our team prepared and ran the initial client interview with Housing Assembly over Zoom, built around a structured question set covering project vision, the online library, the chatbot, and their existing tech stack.",
    lessons: [
      "Organized the interview by category so it covered scope, budget, audience, and long-term maintenance",
      "Learned Housing Assembly's core goal: making housing resources accessible and raising awareness of housing policy",
      "Locked in two constraints that shaped everything after: a mobile-first audience, and a hard rule that the chatbot escalates rather than hallucinates",
    ],
  },
  {
    number: 1,
    title: "Arrival & Project Pitch",
    intro:
      "Landed in Cape Town and moved straight into planning. Built personas and user stories with the team, then delivered our project pitch presentation.",
    lessons: [
      "Took the lead on finalizing the product and sprint backlogs",
      "Learned how to break user stories into structured, assignable sprint tasks",
      "Biggest challenge: mapping five user stories to sprint items without overloading Sprint 1",
    ],
  },
  {
    number: 2,
    title: "Refactor & Architecture Planning",
    intro:
      "Split the week between development and planning: refactoring the existing website into a cleaner structure, and planning the n8n workflow with a teammate.",
    lessons: [
      "Restructured the site so the chatbot widget would have somewhere clean to slot into",
      "Set up a CI pipeline to check pull requests and gate merges — first time building one from scratch",
      "Identified the blocker that shaped the next two weeks: n8n needed cloud hosting before two people could work on it together",
    ],
  },
  {
    number: 3,
    title: "Research & Project Update",
    intro:
      "A lighter, research-heavy week. Presented progress to the cohort, then researched hosting and WhatsApp integration.",
    lessons: [
      "Compared hosting options and real costs for moving n8n off local machines",
      "Mapped out what WhatsApp Business integration would require before committing",
      "Learned that some blockers are logistical, not technical — account setup required in-person 2FA with the client",
    ],
  },
  {
    number: 4,
    title: "Building the Workflow & Pipeline",
    intro:
      "Shifted from planning into building. Implemented the n8n workflow, connected it to the chatbot widget, and stood up the deployment pipeline.",
    lessons: [
      "Set up hosting on Vercel with GitHub Actions, automating deploys",
      "Wrote the system prompt defining how the agent behaves and responds",
      "Learned that a lead's job is making the pipeline boring, so teammates can ship without waiting on anyone",
    ],
  },
  {
    number: 5,
    title: "Cloud Migration & First Usability Test",
    intro:
      "The heaviest build week. Migrated n8n to Railway, kicked off the WhatsApp integration, and fixed several user-facing chatbot issues.",
    lessons: [
      "Got n8n stable on Railway after extensive troubleshooting",
      "Fixed conversation memory persisting across refreshes, and markdown rendering",
      "Ran the first usability test with Housing Assembly staff, surfacing problems we'd never have caught ourselves",
    ],
  },
  {
    number: 6,
    title: "Launch, Handoff & Documentation",
    intro:
      "The final push. Completed the WhatsApp integration end to end, delivered the final presentation, and turned to handoff.",
    lessons: [
      "Finished the WhatsApp flow — distinguishing WhatsApp from website traffic, correct formatting through Meta",
      "Traced why documents weren't reaching the vector store and got the library fully loaded",
      "Wrote handoff documentation so staff and future developers could maintain everything after we left",
    ],
  },
];

export const features: Feature[] = [
  {
    name: "Website Refactor",
    description:
      "Rebuilt key pages for a cleaner, faster, mobile-first experience.",
    stack: "HTML5/CSS/JS, Vercel, GitHub Actions CI/CD",
    image: {
      src: "/projects/housing-assembly-site.png",
      alt: "The refactored Housing Assembly homepage",
      orientation: "landscape",
    },
  },
  {
    name: "AI Chatbot",
    description:
      "Answers housing questions from Housing Assembly's own documents, cites sources, and escalates to staff instead of guessing. Available on web and WhatsApp.",
    stack: "n8n orchestration, RAG over a vector store, Meta Cloud API",
    image: {
      src: "/projects/housing-assembly-chatbot.png",
      alt: "The Michael Blake chatbot answering a question about eviction rights, with a link to continue on WhatsApp",
      orientation: "portrait",
    },
  },
  {
    name: "Online Resource Library",
    description:
      "A searchable document library staff update themselves through a simple form, no code required.",
    stack: "Google Forms/Sheets pipeline feeding the site and chatbot",
    image: {
      src: "/projects/housing-assembly-library.png",
      alt: "The Document Library page showing 215 searchable resources filtered by category",
      orientation: "landscape",
    },
  },
];

/**
 * Deliberately interleaved landscape, solo, and group shots so the grid never
 * runs three of the same kind together.
 */
export const gallery: Photo[] = [
  {
    src: "/photos/lions-head-dusk-city.png",
    alt: "Cape Town and Devil's Peak at dusk, seen from the Lion's Head trail",
  },
  {
    src: "/photos/lions-head-sunrise-clouds.png",
    alt: "On top of Lion's Head at sunrise, above a sea of clouds covering Cape Town",
  },
  {
    src: "/photos/cohort-zip-lining.png",
    alt: "The cohort in helmets and harnesses before zip-lining through the mountains",
  },
  {
    src: "/photos/camps-bay-dusk.png",
    alt: "Maiden's Cove at night, looking across Camps Bay to the Twelve Apostles",
  },
  {
    src: "/photos/table-mountain-summit.png",
    alt: "Sitting on the summit of Table Mountain overlooking the bay",
  },
  {
    src: "/photos/boulders-penguin.png",
    alt: "An African penguin on the sand at Boulders Beach",
  },
  {
    src: "/photos/paragliding-cape-town.png",
    alt: "Paragliding off Signal Hill with views over Cape Town",
  },
  {
    src: "/photos/team-handoff-presentation.png",
    alt: "The team with Housing Assembly staff after the final handoff presentation",
  },
  {
    src: "/photos/robben-island-view.png",
    alt: "Pointing across the water toward Table Mountain from Robben Island",
  },
  {
    src: "/photos/cohort-cultural-night.png",
    alt: "The cohort out together on a cultural night",
  },
  {
    src: "/photos/beach-sunset.png",
    alt: "The sun setting into the Atlantic over an empty beach",
  },
  {
    src: "/photos/world-cup-flag.png",
    alt: "Holding up a South African flag while watching a match",
  },
  {
    src: "/photos/aws-skills-centre.png",
    alt: "Visiting the AWS Skills Centre in Cape Town",
  },
  {
    src: "/photos/cape-town-at-night.png",
    alt: "Three views of Cape Town lit up at night from the mountainside",
  },
  {
    src: "/photos/garden-canopy-walk.png",
    alt: "Walking the canopy boardwalk through the botanical gardens",
  },
  {
    src: "/photos/taiwan-festival-cohort.png",
    alt: "The cohort at the Taiwan Festival in Cape Town",
  },
];
