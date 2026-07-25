import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import { HobbyPlaceholder } from "@/components/personal/HobbyPlaceholder";
import { PlacesChips } from "@/components/personal/PlacesChips";
import { TravelGlobe } from "@/components/personal/TravelGlobe";
import { PageHeader } from "@/components/site/PageHeader";
import {
  Container,
  Display,
  Eyebrow,
  Figure,
  Section,
} from "@/components/ui";
import { hobbies, places, snapshots } from "@/lib/content/personal";

export const metadata: Metadata = {
  title: "Personal — Patrick Ouano",
  description:
    "Travel, piano, sports, anime, photography, and the places I've been.",
};

export default function PersonalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Personal"
        title="The rest of it."
        lead={
          <p>
            Travelling, piano, courts, anime, and cameras — plus a globe of
            everywhere I&apos;ve been. None of this is on my r&eacute;sum&eacute;,
            which is sort of the point.
          </p>
        }
      />

      <Section className="pt-0">
        <Container>
          <div className="grid gap-12 border-t border-rule py-14 md:grid-cols-12 md:gap-12 md:py-20">
            <div className="md:col-span-5">
              <Reveal>
                <Eyebrow>Places</Eyebrow>
                <Display size={2} as="h2" className="mt-5">
                  {places.length} pins and counting.
                </Display>
                <p className="mt-5 max-w-measure text-body text-ink-muted">
                  Tap a city for details. Lines on the globe run from home to
                  each pin.
                </p>
                <PlacesChips places={places} />
              </Reveal>
            </div>

            <div className="flex justify-center md:col-span-7 md:justify-end">
              <Reveal delay={0.1} className="w-full max-w-lg">
                <TravelGlobe places={places} />
              </Reveal>
            </div>
          </div>

          {hobbies.map((hobby, index) => {
            const media = hobby.image || hobby.placeholder;

            return (
              <Reveal key={hobby.title}>
                <div className="grid items-center gap-8 border-t border-rule py-14 md:grid-cols-12 md:gap-12 md:py-20">
                  <div
                    className={
                      index % 2 === 1
                        ? "md:col-span-5 md:order-last"
                        : "md:col-span-5"
                    }
                  >
                    <Display size={2} as="h2">
                      {hobby.title}
                    </Display>
                    {hobby.body ? (
                      <p className="mt-4 max-w-measure text-body text-ink-muted">
                        {hobby.body}
                      </p>
                    ) : null}
                  </div>

                  {media ? (
                    <figure className="md:col-span-7">
                      {hobby.image ? (
                        <Figure
                          src={hobby.image.src}
                          alt={hobby.image.alt}
                          variant={hobby.image.variant}
                          aspect="3 / 2"
                          sizes="(min-width: 768px) 55vw, 100vw"
                        />
                      ) : (
                        <HobbyPlaceholder label={hobby.placeholder!} />
                      )}
                    </figure>
                  ) : null}
                </div>
              </Reveal>
            );
          })}

          <div className="border-t border-rule py-14 md:py-20">
            <Reveal>
              <Eyebrow>Snapshots</Eyebrow>
            </Reveal>

            <Reveal delay={0.05}>
              <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
                {snapshots.map((photo) => (
                  <li key={photo.src}>
                    <Figure
                      src={photo.src}
                      alt={photo.alt}
                      aspect="4 / 3"
                      sizes="(min-width: 640px) 33vw, 50vw"
                      className="border border-rule"
                    />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="flex flex-wrap gap-x-10 gap-y-4 border-t border-rule pt-10">
            {[
              { href: "/study-abroad", label: "Cape Town in full" },
              { href: "/about", label: "About me" },
              { href: "/contact", label: "Contact" },
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
    </>
  );
}
