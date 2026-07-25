import { cn } from "@/lib/cn";

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-measure text-body text-ink",
        "[&_p+p]:mt-6",
        "[&_strong]:font-medium [&_strong]:text-ink",
        "[&_em]:font-display [&_em]:text-lead [&_em]:not-italic [&_em]:text-ink",
        className,
      )}
    >
      {children}
    </div>
  );
}
