import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-label uppercase text-ink-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}
