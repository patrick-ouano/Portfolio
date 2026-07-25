import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/motion";
import {
  Container,
  Display,
  Eyebrow,
  GithubIcon,
  LinkedInIcon,
  Section,
} from "@/components/ui";
import { buttonClass } from "@/components/ui/button";
import { contact, site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact — Patrick Ouano",
  description:
    "Get in touch with Patrick Ouano about software engineering internships.",
};

const CHANNELS = [
  {
    label: "GitHub",
    value: "github.com/patrick-ouano",
    href: contact.github,
    Icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/patrickouano",
    href: contact.linkedin,
    Icon: LinkedInIcon,
  },
];

export default function ContactPage() {
  return (
    <Section className="pt-16 md:pt-20">
      <Container>
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
        </Reveal>

        <Reveal delay={0.05}>
          <Display size={1} as="h1" className="mt-6">
            Reach out anytime.
          </Display>
        </Reveal>

        <div className="mt-14 grid gap-14 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <p className="max-w-measure text-lead text-ink-muted">
                Open to software and AI engineering internships, and always up
                for talking about a weird idea. Email is the fastest way to
                reach me.
              </p>

              <a
                href={`mailto:${contact.email}`}
                className="mt-10 block text-display-3 text-ink transition-colors hover:text-accent"
              >
                {contact.email}
              </a>

              <dl className="mt-10 flex flex-col gap-5 border-t border-rule pt-8">
                {CHANNELS.map((channel) => (
                  <div
                    key={channel.label}
                    className="flex flex-wrap items-center gap-x-6 gap-y-1"
                  >
                    <dt className="flex w-28 items-center gap-2.5 font-mono text-label uppercase text-ink-muted">
                      <channel.Icon className="size-4 shrink-0 text-accent" />
                      {channel.label}
                    </dt>
                    <dd>
                      <a
                        href={channel.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-body text-ink underline decoration-rule decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                      >
                        {channel.value}
                      </a>
                    </dd>
                  </div>
                ))}

                <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
                  <dt className="w-28 font-mono text-label uppercase text-ink-muted">
                    Based in
                  </dt>
                  <dd className="text-body text-ink">{site.location}</dd>
                </div>
              </dl>

              <Link href="/resume" className={buttonClass("outline", "mt-10")}>
                R&eacute;sum&eacute;
              </Link>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={0.15}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
