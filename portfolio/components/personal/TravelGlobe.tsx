"use client";

import createGlobe from "cobe";
import { useReducedMotion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import type { Place } from "@/lib/content/personal";

/** cobe wants RGB as 0–1 triples, so the accent tokens are restated here. */
const ACCENT_LIGHT: [number, number, number] = [0.114, 0.306, 0.537];
const ACCENT_DARK: [number, number, number] = [0.498, 0.663, 0.851];

export function TravelGlobe({ places }: { places: Place[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const [home, ...rest] = places;
    if (!canvas || !home) return;

    const dark = resolvedTheme === "dark";
    const accent = dark ? ACCENT_DARK : ACCENT_LIGHT;
    let width = canvas.offsetWidth;
    let phi = 0;
    let frame = 0;

    const observer = new ResizeObserver(() => {
      width = canvas.offsetWidth;
    });
    observer.observe(canvas);

    // Thin arcs from home to every pin so the map reads as connected travel.
    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.22,
      dark: dark ? 1 : 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: dark ? 5.5 : 2.4,
      baseColor: dark ? [0.28, 0.26, 0.24] : [0.88, 0.86, 0.82],
      markerColor: accent,
      glowColor: dark ? [0.2, 0.18, 0.16] : [0.95, 0.94, 0.91],
      markers: places.map((place) => ({
        location: [place.lat, place.lng],
        size: 0.035,
      })),
      arcs: rest.map((place) => ({
        from: [home.lat, home.lng],
        to: [place.lat, place.lng],
      })),
      arcColor: accent,
      arcWidth: 0.18,
      arcHeight: 0.28,
    });

    const tick = () => {
      if (!reduced) phi += 0.0035;
      globe.update({ phi, width: width * 2, height: width * 2 });
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      globe.destroy();
      observer.disconnect();
    };
  }, [places, resolvedTheme, reduced]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="aspect-square w-full max-w-lg"
    />
  );
}
