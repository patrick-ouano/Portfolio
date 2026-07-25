import { cn } from "@/lib/cn";
import { Display } from "./Display";
import { Eyebrow } from "./Eyebrow";

/**
 * Full-width section header. Sections used to put the eyebrow in a narrow
 * sidebar column, which left large empty gaps on wide screens.
 */
export function SectionHead({
  eyebrow,
  title,
  lead,
  className,
}: {
  eyebrow: string;
  title?: string;
  lead?: string;
  className?: string;
}) {
  return (
    <header className={cn("border-t border-rule pt-8", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>

      {title ? (
        <Display size={2} as="h2" className="mt-5 max-w-3xl">
          {title}
        </Display>
      ) : null}

      {lead ? (
        <p className="mt-5 max-w-measure text-lead text-ink-muted">{lead}</p>
      ) : null}
    </header>
  );
}
