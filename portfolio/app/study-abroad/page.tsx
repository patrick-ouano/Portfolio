import type { Metadata } from "next";
import { cn } from "@/lib/cn";
import { Parallax, Reveal } from "@/components/motion";
import { PhotoGallery } from "@/components/study-abroad/PhotoGallery";
import { WeekEntry } from "@/components/study-abroad/WeekEntry";
import {
  Container,
  Display,
  Eyebrow,
  Figure,
  Prose,
  Section,
  SectionHead,
  SiteEmbed,
} from "@/components/ui";
import {
  acknowledgment,
  application,
  features,
  gallery,
  overview,
  reflection,
  weeks,
} from "@/lib/content/studyAbroad";

export const metadata: Metadata = {
  title: "Study Abroad: Cape Town — Patrick Ouano",
  description:
    "Six weeks in Cape Town, South Africa as Scrum Master and technical lead for Housing Assembly, through EDU Africa.",
};

const FACTS = [
  { label: "Program", value: overview.program },
  { label: "Dates", value: overview.dates },
  { label: "Location", value: overview.location },
  { label: "Role", value: overview.role },
];

const JUMP_LINKS = [
  { href: "#overview", label: "Overview" },
  { href: "#application", label: "Application" },
  { href: "#lessons", label: "Lessons" },
  { href: "#reflection", label: "Reflection" },
  { href: "#gallery", label: "Gallery" },
];

export default function StudyAbroadPage() {
  return (
    <>
      <Section className="pb-10 md:pb-12">
        <Container>
          <Reveal>
            <Eyebrow>Study Abroad &mdash; {overview.coordinates}</Eyebrow>
          </Reveal>

          <Reveal delay={0.05}>
            <Display size={1} as="h1" className="mt-6">
              Cape Town, South Africa
            </Display>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 max-w-measure text-lead text-ink-muted">
              Six weeks as Scrum Master and technical lead for a grassroots
              housing-rights organization, building for tenants who live on
              WhatsApp.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <nav
              aria-label="Sections on this page"
              className="mt-10 flex flex-wrap gap-x-8 gap-y-3"
            >
              {JUMP_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono text-label uppercase text-ink-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </Reveal>
        </Container>
      </Section>

      <Container>
        <Reveal>
          <Parallax distance={32}>
            <Figure
              src="/photos/table-mountain-summit.png"
              alt="Sitting on the summit of Table Mountain overlooking the bay"
              aspect="21 / 9"
              sizes="100vw"
              priority
            />
          </Parallax>
        </Reveal>
      </Container>

      <Section id="overview">
        <Container>
          <Reveal>
            <SectionHead eyebrow="Overview" />
          </Reveal>

          <Reveal delay={0.05}>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-b border-rule pb-10 md:grid-cols-4">
              {FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-mono text-label uppercase text-ink-muted">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 text-body text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="mt-12 grid gap-12 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <Reveal delay={0.1}>
                <Prose>
                  {overview.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </Prose>
              </Reveal>
            </div>

            <div className="md:col-span-5">
              <Reveal delay={0.15}>
                <blockquote className="border border-rule bg-surface p-8">
                  <p className="font-mono text-label uppercase text-accent">
                    Acknowledgment
                  </p>
                  <p className="display-type mt-5 text-display-3 text-ink">
                    {acknowledgment}
                  </p>
                </blockquote>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="application" className="pt-0">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="Application"
              title="What we shipped, live on their domain."
              lead={application.blurb}
            />
          </Reveal>

          <Reveal delay={0.05} className="mt-10">
            <SiteEmbed
              url={application.url}
              label={application.label}
              screenshot={application.screenshot}
              aspect="16 / 9"
              priority
            />
          </Reveal>

          <div className="mt-16 flex flex-col gap-16">
            {features.map((feature, index) => {
              // Portrait shots are phone screenshots. Given the same column
              // width as a landscape one they tower over their own copy, so
              // they get a narrower column and a hard width cap.
              const portrait = feature.image?.orientation === "portrait";

              return (
                <Reveal key={feature.name}>
                  <div className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
                    <div
                      className={cn(
                        portrait ? "md:col-span-7" : "md:col-span-5",
                        index % 2 === 1 && "md:order-last",
                      )}
                    >
                      <Display size={3} as="h3">
                        {feature.name}
                      </Display>
                      <p className="mt-5 max-w-measure text-body text-ink">
                        {feature.description}
                      </p>
                      <p className="mt-6 font-mono text-label uppercase text-ink-muted">
                        {feature.stack}
                      </p>
                    </div>

                    {feature.image ? (
                      <figure
                        className={cn(
                          portrait
                            ? "mx-auto w-full max-w-xs md:col-span-5"
                            : "md:col-span-7",
                        )}
                      >
                        <Figure
                          src={feature.image.src}
                          alt={feature.image.alt}
                          variant="screenshot"
                          aspect={portrait ? "3 / 4" : "16 / 10"}
                          sizes={
                            portrait
                              ? "(min-width: 768px) 20rem, 100vw"
                              : "(min-width: 768px) 55vw, 100vw"
                          }
                        />
                      </figure>
                    ) : null}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section id="lessons" className="pt-0">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="Lessons"
              title="Seven weeks, week by week."
              lead="Week 0 was pre-departure client discovery. Weeks 1 through 6 were on the ground in Cape Town."
            />
          </Reveal>

          <div className="mt-10">
            {weeks.map((week) => (
              <Reveal key={week.number}>
                <WeekEntry week={week} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="reflection" className="pt-0">
        <Container>
          <Reveal>
            <SectionHead eyebrow="Reflection" />
          </Reveal>

          <div className="mt-10 grid gap-12 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <Reveal delay={0.05}>
                <Prose>
                  {reflection.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </Prose>
              </Reveal>
            </div>

            <div className="md:col-span-5">
              <Reveal delay={0.1}>
                {/* Source is roughly 2:3, so the frame matches it and nobody
                    gets cropped out of the group. */}
                <Figure
                  src="/photos/team-activist-cafe-staff.png"
                  alt="The team with Housing Assembly staff at the Activist Cafe"
                  aspect="2 / 3"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
                <p className="mt-4 font-mono text-label uppercase text-ink-muted">
                  With Housing Assembly staff at the Activist Caf&eacute;
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="gallery" className="pt-0">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="Photo Gallery"
              lead="Tap any photo to see the full, uncropped frame."
            />
          </Reveal>

          <Reveal className="mt-10">
            <PhotoGallery photos={gallery} />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
