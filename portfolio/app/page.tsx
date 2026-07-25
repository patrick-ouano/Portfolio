import Link from "next/link";
import { MaskLines, Parallax, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ProjectRow } from "@/components/projects/ProjectRow";
import {
  Container,
  Display,
  Eyebrow,
  Figure,
  Prose,
  Rule,
  Section,
} from "@/components/ui";
import { buttonClass } from "@/components/ui/button";
import { featuredProjects } from "@/lib/content/projects";
import { site } from "@/lib/content/site";

const HERO_LINES = [
  "I build software",
  "for the people who",
  { text: "actually use it.", className: "text-accent" },
];

export default function HomePage() {
  return (
    <>
      <Section className="pt-16 pb-16 md:pt-24 md:pb-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-8">
              <Reveal>
                <Eyebrow className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="flex items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className="size-2 shrink-0 rounded-full bg-accent"
                    />
                    <span className="text-ink">{site.role}</span>
                  </span>
                  <span aria-hidden="true" className="text-accent">
                    &#47;
                  </span>
                  <span className="text-ink">{site.secondRole}</span>
                </Eyebrow>
              </Reveal>

              <Display size={1} as="h1" className="mt-8">
                <MaskLines lines={HERO_LINES} delayChildren={0.15} />
              </Display>

              <Reveal delay={0.5}>
                <Prose className="mt-10">
                  {/* Plain span rather than <em>, which Prose restyles to the
                      display serif at a larger size. */}
                  <p>
                    Third-year CS major at UF, open to SWE, AI, and cloud
                    internships. Most recently led the build of an AI chatbot and
                    resource platform for a housing NPO in Cape Town.
                  </p>
                </Prose>
              </Reveal>

              <Reveal delay={0.6}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/projects" className={buttonClass("solid")}>
                    See the work
                  </Link>
                  <Link href="/resume" className={buttonClass("outline")}>
                    R&eacute;sum&eacute;
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-4">
              <Reveal delay={0.35}>
                <Figure
                  src="/portrait.png"
                  alt="Patrick Ouano"
                  aspect="4 / 5"
                  sizes="(min-width: 768px) 30vw, 100vw"
                  priority
                />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Container>
        <Rule />
      </Container>

      <Section id="projects">
        <Container>
          <Reveal className="mb-4">
            <Eyebrow>Selected Projects</Eyebrow>
          </Reveal>

          <Stagger stagger={0.1}>
            {featuredProjects.map((project, index) => (
              <StaggerItem key={project.slug}>
                <ProjectRow project={project} index={index} />
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="flex flex-wrap gap-x-10 gap-y-4 border-t border-rule pt-8">
            {[
              { href: "/projects", label: "All projects" },
              { href: "/work", label: "Where I've worked" },
              { href: "/about", label: "More about me" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group inline-flex items-baseline gap-3 font-mono text-label uppercase text-ink transition-colors hover:text-accent"
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </Link>
            ))}
          </Reveal>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <Reveal>
            <Link
              href="/study-abroad"
              className="group block border border-rule transition-colors hover:border-accent"
            >
              <Parallax distance={24}>
                <Figure
                  src="/photos/lions-head-sunrise-clouds.png"
                  alt="Sunrise above a sea of clouds covering Cape Town"
                  aspect="21 / 9"
                  sizes="100vw"
                />
              </Parallax>

              <div className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-end md:p-12">
                <div>
                  <Eyebrow>Study Abroad &mdash; 33.9249&deg; S, 18.4241&deg; E</Eyebrow>
                  <Display size={2} as="p" className="mt-6 max-w-measure">
                    Six weeks in Cape Town, learning{" "}
                    <span className="text-accent">
                      who the software was really for
                    </span>
                    .
                  </Display>
                  <p className="mt-6 max-w-measure text-body text-ink-muted">
                    May 30 &ndash; July 11, 2026. Scrum Master and technical lead
                    for Housing Assembly, delivering a website refactor, an AI
                    chatbot on web and WhatsApp, and a document library staff can
                    maintain without touching code.
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="display-type text-display-2 text-ink-muted transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent"
                >
                  &rarr;
                </span>
              </div>
            </Link>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
