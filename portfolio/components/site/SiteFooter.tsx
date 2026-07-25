import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui";
import { contactLinks, site } from "@/lib/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule">
      <Container className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <Eyebrow>
          {site.name} — {site.location}
        </Eyebrow>
        <nav className="flex flex-wrap gap-6">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="font-mono text-label uppercase text-ink-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/resume"
            className="font-mono text-label uppercase text-ink-muted transition-colors hover:text-accent"
          >
            R&eacute;sum&eacute;
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
