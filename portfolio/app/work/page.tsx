import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import { PageHeader } from "@/components/site/PageHeader";
import { WorkRow } from "@/components/work/WorkRow";
import { Container, Eyebrow, Section } from "@/components/ui";
import { earlier, roles } from "@/lib/content/work";

export const metadata: Metadata = {
  title: "Work — Patrick Ouano",
  description:
    "Software Engineering Intern at Housing Assembly in Cape Town, and Student Associate in the AI Lab at Raia AI.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Where I've done the work."
        lead={
          <p>
            Two engineering roles, building AI and software 
            people actually use: agents and pipelines at Raia, 
            then a chatbot and resource platform for Housing Assembly.
          </p>
        }
      />

      <Section className="pt-0">
        <Container>
          {roles.map((role) => (
            <Reveal key={role.slug}>
              <WorkRow role={role} />
            </Reveal>
          ))}

          <Reveal>
            <div className="border-t border-rule py-14 md:py-20">
              <Eyebrow>Before engineering</Eyebrow>

              <dl className="mt-8 flex flex-col gap-8">
                {earlier.map((item) => (
                  <div
                    key={item.title}
                    className="grid gap-2 md:grid-cols-12 md:gap-12"
                  >
                    <dt className="md:col-span-4">
                      <span className="block text-body text-ink">
                        {item.title}
                      </span>
                      <span className="mt-1 block font-mono text-label uppercase text-ink-muted">
                        {item.period}
                      </span>
                    </dt>
                    <dd className="md:col-span-8">
                      <span className="block font-mono text-label uppercase text-accent">
                        {item.organization}
                      </span>
                      <span className="mt-2 block max-w-measure text-body text-ink-muted">
                        {item.note}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal className="flex flex-wrap gap-x-10 gap-y-4 border-t border-rule pt-8">
            {[
              { href: "/about", label: "Leadership & skills" },
              { href: "/projects", label: "Projects" },
              { href: "/resume", label: "Résumé" },
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
