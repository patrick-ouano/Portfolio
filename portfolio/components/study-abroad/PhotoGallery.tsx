"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Photo } from "@/lib/content/studyAbroad";

/**
 * Every tile is the same 4:3 box regardless of the source orientation, so the
 * grid reads evenly. Cropping is the trade-off, so clicking a tile opens the
 * full uncropped frame.
 */
export function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);

  const step = useCallback(
    (delta: number) =>
      setOpenIndex((current) =>
        current === null
          ? null
          : (current + delta + photos.length) % photos.length,
      ),
    [photos.length],
  );

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, step]);

  const active = openIndex === null ? null : photos[openIndex];

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {photos.map((photo, index) => (
          <li key={photo.src}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`View photo: ${photo.alt}`}
              className="group relative block aspect-4/3 w-full cursor-zoom-in overflow-hidden border border-rule bg-surface"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-[100] flex flex-col bg-ink/95 p-4 md:p-8"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-label uppercase text-paper/70">
              {(openIndex ?? 0) + 1} / {photos.length}
            </p>
            <button
              type="button"
              onClick={close}
              className="font-mono text-label uppercase text-paper transition-opacity hover:opacity-70"
            >
              Close &times;
            </button>
          </div>

          <div className="relative min-h-0 flex-1 py-4">
            <Image
              src={active.src}
              alt={active.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <div className="flex items-start justify-between gap-6">
            <p className="max-w-measure text-body text-paper/80">{active.alt}</p>
            <div className="flex shrink-0 gap-4">
              <button
                type="button"
                onClick={() => step(-1)}
                className="font-mono text-label uppercase text-paper transition-opacity hover:opacity-70"
              >
                &larr; Prev
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                className="font-mono text-label uppercase text-paper transition-opacity hover:opacity-70"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
