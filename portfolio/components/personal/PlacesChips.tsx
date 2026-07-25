"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { Place } from "@/lib/content/personal";

export function PlacesChips({ places }: { places: Place[] }) {
  const [active, setActive] = useState<string | null>(null);
  const rootRef = useRef<HTMLUListElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!active) return;

    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setActive(null);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };

    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <ul
      ref={rootRef}
      className="mt-10 flex flex-wrap gap-2"
      aria-label="Places I've been"
    >
      {places.map((place) => {
        const key = `${place.city}-${place.country}`;
        const open = active === key;

        return (
          <li key={key} className="relative">
            <button
              type="button"
              aria-expanded={open}
              aria-controls={open ? panelId : undefined}
              onClick={() => setActive(open ? null : key)}
              className={
                open
                  ? "border border-accent bg-accent/10 px-2.5 py-1 font-mono text-label uppercase text-accent"
                  : "border border-rule px-2.5 py-1 font-mono text-label uppercase text-ink-muted transition-colors hover:border-accent hover:text-accent"
              }
            >
              {place.city}
            </button>

            {open ? (
              <div
                id={panelId}
                role="dialog"
                aria-label={place.city}
                className="absolute left-0 top-full z-20 mt-2 w-56 border border-rule bg-paper p-4 shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
              >
                <p className="text-body text-ink">{place.city}</p>
                <p className="mt-1 font-mono text-label uppercase text-ink-muted">
                  {place.country}
                </p>
                {place.note ? (
                  <p className="mt-3 font-mono text-label text-ink-muted">
                    {place.note}
                  </p>
                ) : null}
                <p className="mt-3 font-mono text-label text-ink-muted">
                  {place.lat.toFixed(2)}&deg;, {place.lng.toFixed(2)}&deg;
                </p>
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
