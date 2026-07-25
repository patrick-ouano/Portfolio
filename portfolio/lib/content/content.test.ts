import { describe, expect, it } from "vitest";
import { countryCount, places } from "@/lib/content/personal";
import { navLinks } from "@/lib/content/site";

describe("places / countryCount", () => {
  it("lists unique city-country pairs", () => {
    const keys = places.map((place) => `${place.city}|${place.country}`);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it("derives countryCount from unique countries", () => {
    const unique = new Set(places.map((place) => place.country));
    expect(countryCount).toBe(unique.size);
    expect(countryCount).toBeGreaterThan(0);
  });

  it("requires lat/lng for every pin", () => {
    for (const place of places) {
      expect(Number.isFinite(place.lat)).toBe(true);
      expect(Number.isFinite(place.lng)).toBe(true);
    }
  });
});

describe("navLinks", () => {
  it("has the expected routes and unique hrefs", () => {
    expect(navLinks.map((link) => link.href)).toEqual([
      "/projects",
      "/work",
      "/about",
      "/study-abroad",
      "/personal",
    ]);
    expect(new Set(navLinks.map((link) => link.href)).size).toBe(
      navLinks.length,
    );
  });

  it("labels every link", () => {
    for (const link of navLinks) {
      expect(link.label.length).toBeGreaterThan(0);
    }
  });
});
