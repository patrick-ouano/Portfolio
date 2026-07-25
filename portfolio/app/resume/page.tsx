import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import { PageHeader } from "@/components/site/PageHeader";
import { Container, Section } from "@/components/ui";
import { buttonClass } from "@/components/ui/button";
import { education } from "@/lib/content/about";
import { site } from "@/lib/content/site";
import { roles } from "@/lib/content/work";

export const metadata: Metadata = {
  title: "Résumé — Patrick Ouano",
  description: "Résumé for Patrick Ouano, software and AI engineer.",
};

const FACTS = [
  { label: "Studying", value: education.degree },
  { label: "At", value: education.school },
  { label: "Graduating", value: education.graduation },
  { label: "Currently", value: `${roles[0].title}, ${roles[0].company}` },
];

export default function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Résumé"
        title="One page, kept current."
        lead={
          <p>
            The short version is below and the full PDF is one click away. For the
            longer version with context, the work and projects pages go deeper
            than a résumé ever can.
          </p>
        }
      />

      <Section className="pt-0">
        <Container>
          <Reveal>
            <dl className="grid gap-8 border-t border-rule pt-10 sm:grid-cols-2 lg:grid-cols-4">
              {FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-mono text-label uppercase text-accent">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 text-body text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Same chrome frame the project embeds use, so the document reads as
              part of the site rather than a PDF dropped onto the page. */}
          <Reveal delay={0.1} className="mt-14">
            <div className="border border-rule bg-surface">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-3 border-b border-rule px-4 py-3">
                <span aria-hidden="true" className="flex shrink-0 gap-1.5">
                  <span className="size-2.5 rounded-full bg-rule" />
                  <span className="size-2.5 rounded-full bg-rule" />
                  <span className="size-2.5 rounded-full bg-rule" />
                </span>

                <p className="min-w-0 flex-1 truncate font-mono text-label text-ink-muted">
                  patrick-ouano-resume.pdf
                </p>

                <a
                  href={site.resumePath}
                  download
                  className="shrink-0 font-mono text-label uppercase text-accent transition-opacity hover:opacity-70"
                >
                  Download
                </a>
                <a
                  href={site.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 font-mono text-label uppercase text-ink-muted transition-colors hover:text-accent"
                >
                  New tab &#8599;
                </a>
              </div>

              {/* Mobile browsers largely refuse to render embedded PDFs, so the
                  fallback below carries the actions on small screens. */}
              <object
                data={site.resumePath}
                type="application/pdf"
                className="hidden aspect-[8.5/11] w-full bg-white md:block"
              >
                <p className="p-8 text-body text-ink-muted">
                  Your browser can&apos;t display embedded PDFs. Use the download
                  link above instead.
                </p>
              </object>

              <div className="flex flex-col gap-5 p-6 md:hidden">
                <p className="text-body text-ink">
                  Embedded PDFs don&apos;t render reliably on mobile, so open the
                  file directly instead.
                </p>
                <a
                  href={site.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass("solid", "self-start")}
                >
                  Open the PDF &#8599;
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {[
              { href: "/work", label: "Work in detail" },
              { href: "/projects", label: "Projects" },
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
