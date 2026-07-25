import Image from "next/image";
import { cn } from "@/lib/cn";

type SiteEmbedProps = {
  url: string;
  label: string;
  screenshot: { src: string; alt: string };
  /** Overlay wording, e.g. "View source" for a repo instead of a live site. */
  action?: string;
  fit?: "cover" | "contain";
  aspect?: string;
  /** Set on the first embed of a page so its image isn't lazy-loaded. */
  priority?: boolean;
  className?: string;
};

/**
 * A screenshot in browser chrome that opens the real site in a new tab.
 * Live iframes were the original approach, but sites like housingassembly.org.za
 * and GitHub send X-Frame-Options: DENY, so half of them rendered blank. One
 * consistent hover-to-visit treatment beats a mix that works only sometimes.
 */
export function SiteEmbed({
  url,
  label,
  screenshot,
  action = "Visit site",
  fit = "cover",
  aspect = "16 / 10",
  priority = false,
  className,
}: SiteEmbedProps) {
  return (
    <div className={cn("border border-rule bg-surface", className)}>
      <div className="flex items-center gap-3 border-b border-rule px-4 py-3">
        <span aria-hidden="true" className="flex shrink-0 gap-1.5">
          <span className="size-2.5 rounded-full bg-rule" />
          <span className="size-2.5 rounded-full bg-rule" />
          <span className="size-2.5 rounded-full bg-rule" />
        </span>

        <p className="min-w-0 flex-1 truncate font-mono text-label text-ink-muted">
          {label}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 font-mono text-label uppercase text-accent transition-opacity hover:opacity-70"
        >
          Open &#8599;
        </a>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ aspectRatio: aspect }}
        className="group relative block w-full bg-paper"
      >
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          fill
          sizes="(min-width: 768px) 60vw, 100vw"
          priority={priority}
          className={cn(
            "dark:opacity-90",
            fit === "cover" ? "object-cover object-top" : "object-contain p-8",
          )}
        />

        <span className="absolute inset-0 grid place-items-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/55">
          <span className="border border-paper/0 px-5 py-2.5 font-mono text-label uppercase text-paper opacity-0 transition-opacity duration-300 group-hover:border-paper group-hover:opacity-100">
            {action} &#8599;
          </span>
        </span>
      </a>
    </div>
  );
}
