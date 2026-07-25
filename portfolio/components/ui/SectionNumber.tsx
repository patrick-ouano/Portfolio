import { cn } from "@/lib/cn";

export function SectionNumber({
  value,
  className,
}: {
  value: number | string;
  className?: string;
}) {
  const label = typeof value === "number" ? String(value).padStart(2, "0") : value;

  return (
    <span
      aria-hidden="true"
      className={cn(
        "display-type block select-none text-numeral text-accent/40",
        className,
      )}
    >
      {label}
    </span>
  );
}
