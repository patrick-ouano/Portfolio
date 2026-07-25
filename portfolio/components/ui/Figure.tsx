import Image from "next/image";
import { cn } from "@/lib/cn";

type FigureProps = {
  src: string;
  alt: string;
  /** CSS aspect-ratio value, e.g. "3 / 2". */
  aspect?: string;
  /**
   * Photos are cropped to fill; screenshots are contained on a panel so nothing
   * important gets cut off, and dimmed slightly so bright UI doesn't glare in
   * dark mode.
   */
  variant?: "photo" | "screenshot";
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export function Figure({
  src,
  alt,
  aspect = "3 / 2",
  variant = "photo",
  sizes = "(min-width: 768px) 50vw, 100vw",
  priority = false,
  className,
}: FigureProps) {
  const isScreenshot = variant === "screenshot";

  return (
    <div
      style={{ aspectRatio: aspect }}
      className={cn(
        "relative w-full overflow-hidden",
        isScreenshot ? "border border-rule bg-surface" : "bg-surface",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn(
          isScreenshot
            ? "object-contain dark:opacity-90"
            : "object-cover transition-transform duration-700 ease-out",
        )}
      />
    </div>
  );
}
