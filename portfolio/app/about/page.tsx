import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import {
  Container,
  Display,
  Eyebrow,
  Figure,
  Prose,
  Section,
} from "@/components/ui";
import { buttonClass } from "@/components/ui/button";
import { bio, education, skills } from "@/lib/content/about";
import { site } from "@/lib/content/site";
import { leadership } from "@/lib/content/work";

export const metadata: Metadata = {
  title: "About — Patrick Ouano",
  description:
    "Computer Science student at the University of Florida, focused on software that keeps running after the team moves on.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-16 pb-12 md:pt-20 md:pb-16">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <Reveal>
                <Eyebrow>About</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <Display size={1} as="h1" className="mt-6">
                  {site.name}
                </Display>
              </Reveal>
              <Reveal delay={0.1}>
                <Prose className="mt-8">
                  {bio.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </Prose>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/work" className={buttonClass("solid")}>
                    See where I&apos;ve worked
                  </Link>
                  <Link href="/contact" className={buttonClass("outline")}>
                    Contact
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-5">
              <Reveal delay={0.2}>
                <Figure
                  src="/portrait.png"
                  alt="Patrick Ouano"
                  aspect="4 / 5"
                  sizes="(min-width: 768px) 40vw, 100vw"
                  priority
                />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <Block eyebrow="Education">
            <Reveal delay={0.05}>
                {/* Logo is blue on black, so it sits on a dark tile to match the
                    company logos on the work page. */}
                <div className="relative aspect-[8/5] w-full max-w-[10rem]">
                  <Image
                    src="/logos/uf-gator.png"
                    alt="University of Florida"
                    fill
                    sizes="10rem"
                    className="object-contain"
                    priority
                  />
                </div>

                <Display size={3} as="h2" className="mt-6">
                  {education.school}
                </Display>
                <p className="mt-3 text-body text-ink">{education.degree}</p>

                <dl className="mt-6">
                  <dt className="font-mono text-label uppercase text-ink-muted">
                    Graduating
                  </dt>
                  <dd className="mt-1 font-mono text-label uppercase text-ink">
                    {education.graduation}
                  </dd>
                </dl>

                <p className="mt-8 font-mono text-label uppercase text-ink-muted">
                  Relevant coursework
                </p>
                <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-2">
                  {education.coursework.map((course) => (
                    <li
                      key={course}
                      className="border border-rule px-2.5 py-1 font-mono text-label uppercase text-ink-muted"
                    >
                      {course}
                    </li>
                  ))}
                </ul>
              </Reveal>
          </Block>

          <Block eyebrow="Skills">
            <div className="flex flex-col gap-8">
              {skills.map((group) => (
                <Reveal key={group.label}>
                  <p className="font-mono text-label uppercase text-accent">
                    {group.label}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border border-rule px-2.5 py-1 font-mono text-label uppercase text-ink-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </Block>

          <Block eyebrow="Clubs & Leadership">
            <div className="flex flex-col gap-12">
              {leadership.map((org) => (
                <Reveal key={org.organization} delay={0.05}>
                  <p className="font-mono text-label uppercase text-accent">
                    {org.organization}
                  </p>

                  <div className="mt-6 flex flex-col gap-8">
                    {org.positions.map((position) => (
                      <div key={position.title}>
                        <Display size={3} as="h2">
                          {position.title}
                        </Display>
                        <p className="mt-2 font-mono text-label uppercase text-ink-muted">
                          {position.period}
                        </p>

                        <ul className="mt-5 flex max-w-measure flex-col gap-4">
                          {position.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex gap-4 text-body text-ink"
                            >
                              <span
                                aria-hidden="true"
                                className="shrink-0 text-accent"
                              >
                                &mdash;
                              </span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </Block>
        </Container>
      </Section>
    </>
  );
}

/**
 * Shared row for the lower sections. These were separate <Section> elements,
 * which stacked their vertical padding on top of each block's own top padding
 * and left large dead gaps between them.
 */
function Block({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-8 border-t border-rule py-14 md:grid-cols-12 md:gap-12 md:py-20">
      <div className="md:col-span-4">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      </div>
      <div className="md:col-span-8">{children}</div>
    </div>
  );
}
