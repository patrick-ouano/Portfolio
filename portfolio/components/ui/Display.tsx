import { cn } from "@/lib/cn";

const SIZES = {
  1: "text-display-1",
  2: "text-display-2",
  3: "text-display-3",
} as const;

export function Display({
  children,
  size = 2,
  as: Tag = "h2",
  className,
}: {
  children: React.ReactNode;
  size?: keyof typeof SIZES;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
}) {
  return (
    <Tag className={cn("display-type text-balance", SIZES[size], className)}>
      {children}
    </Tag>
  );
}
