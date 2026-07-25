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
import { contact, site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact — Patrick Ouano",
  description:
    "Get in touch with Patrick Ouano about software and AI engineering internships.",
};

const CHANNELS = [
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    note: "Best way to reach me",
    Icon: MailIcon,
  },
  {
    label: "GitHub",
    value: "patrick-ouano",
    href: contact.github,
    note: "Source for most of the work",
    Icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "patrickouano",
    href: contact.linkedin,
    note: "Full history and updates",
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
          <Display size={1} as="h1" className="mt-6 max-w-3xl">
            Reach out anytime.
          </Display>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-measure text-lead text-ink-muted">
            Open to software and AI engineering internships, and always up for
            talking about a weird idea. Pick whichever of these is easiest.
          </p>
        </Reveal>

        {/* Channels run across the page as cards rather than sitting in a
            sidebar list, so the page doesn't read as one tall column. */}
        <Reveal delay={0.15}>
          <ul className="mt-14 grid gap-4 border-t border-rule pt-10 md:grid-cols-3">
            {CHANNELS.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col gap-5 border border-rule bg-surface p-6 transition-colors hover:border-accent"
                >
                  <span className="flex items-center justify-between gap-4">
                    <channel.Icon className="size-5 text-accent" />
                    <span
                      aria-hidden="true"
                      className="font-mono text-label text-ink-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent"
                    >
                      &#8599;
                    </span>
                  </span>

                  <span className="flex flex-col gap-2">
                    <span className="font-mono text-label uppercase text-ink-muted">
                      {channel.label}
                    </span>
                    <span className="break-all text-body text-ink transition-colors group-hover:text-accent">
                      {channel.value}
                    </span>
                    <span className="font-mono text-label text-ink-muted">
                      {channel.note}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-20 grid gap-10 border-t border-rule pt-14 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <Reveal>
              <Eyebrow>Send a message</Eyebrow>
              <p className="mt-5 max-w-measure text-body text-ink-muted">
                Fill this in and it opens your mail app with everything already
                written, so you can check it before it sends.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <Reveal delay={0.05}>
              <ContactForm />
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-20 flex flex-wrap items-center justify-between gap-x-12 gap-y-6 border-t border-rule pt-10">
          <p className="font-mono text-label uppercase text-ink-muted">
            Based in {site.location}
          </p>

          <Link
            href="/resume"
            className="group inline-flex items-baseline gap-3 font-mono text-label uppercase text-ink transition-colors hover:text-accent"
          >
            Read the r&eacute;sum&eacute;
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden="true"
      className={className}
    >
      <rect x="2" y="4.5" width="20" height="15" rx="1.5" />
      <path d="m2.75 6 9.25 7 9.25-7" />
    </svg>
  );
}
