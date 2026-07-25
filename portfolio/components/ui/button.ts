import { cn } from "@/lib/cn";

type Variant = "solid" | "outline";

const BASE =
  "inline-flex items-center justify-center gap-2 border px-5 py-2.5 font-mono text-label uppercase transition-colors";

const VARIANTS: Record<Variant, string> = {
  solid:
    "border-accent bg-accent text-accent-contrast hover:border-ink hover:bg-ink hover:text-paper",
  outline: "border-rule text-ink hover:border-accent hover:text-accent",
};

export function buttonClass(variant: Variant = "solid", className?: string) {
  return cn(BASE, VARIANTS[variant], className);
}
