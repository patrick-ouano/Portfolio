import Link from "next/link";
import { Container } from "@/components/ui";
import { buttonClass } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { navLinks, site } from "@/lib/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="font-mono text-label uppercase text-ink transition-colors hover:text-accent"
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <NavItems />
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/resume"
            className="hidden font-mono text-label uppercase text-ink-muted transition-colors hover:text-accent sm:inline"
          >
            R&eacute;sum&eacute;
          </Link>
          <Link href="/contact" className={buttonClass("solid", "hidden sm:inline-flex")}>
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </Container>

      {/* Mobile keeps the same links in a scrollable strip rather than a drawer. */}
      <nav className="flex gap-6 overflow-x-auto border-t border-rule px-6 py-3 md:hidden">
        <NavItems />
        <Link
          href="/resume"
          className="whitespace-nowrap font-mono text-label uppercase text-ink-muted"
        >
          R&eacute;sum&eacute;
        </Link>
        <Link
          href="/contact"
          className="whitespace-nowrap font-mono text-label uppercase text-accent"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

function NavItems() {
  return (
    <>
      {navLinks.map((link, index) => (
        <Link
          key={link.href}
          href={link.href}
          className="group flex items-baseline gap-2 whitespace-nowrap font-mono text-label uppercase text-ink transition-colors hover:text-accent"
        >
          <span className="text-accent/50 transition-colors group-hover:text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          {link.label}
        </Link>
      ))}
    </>
  );
}
