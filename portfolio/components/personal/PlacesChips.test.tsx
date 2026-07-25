import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { PlacesChips } from "@/components/personal/PlacesChips";
import type { Place } from "@/lib/content/personal";

const sample: Place[] = [
  {
    city: "Kissimmee",
    country: "United States",
    lat: 28.292,
    lng: -81.4076,
    note: "Home — greater Orlando",
  },
  {
    city: "Cape Town",
    country: "South Africa",
    lat: -33.9249,
    lng: 18.4241,
  },
];

describe("PlacesChips", () => {
  it("opens a detail popover when a city is clicked", async () => {
    const user = userEvent.setup();
    render(<PlacesChips places={sample} />);

    const capeTown = screen.getByRole("button", { name: "Cape Town" });
    expect(capeTown).toHaveAttribute("aria-expanded", "false");

    await user.click(capeTown);

    expect(capeTown).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("dialog", { name: "Cape Town" })).toBeInTheDocument();
    expect(screen.getByText("South Africa")).toBeInTheDocument();
  });

  it("closes the popover when the same city is clicked again", async () => {
    const user = userEvent.setup();
    render(<PlacesChips places={sample} />);

    const kissimmee = screen.getByRole("button", { name: "Kissimmee" });
    await user.click(kissimmee);
    expect(screen.getByRole("dialog", { name: "Kissimmee" })).toBeInTheDocument();

    await user.click(kissimmee);
    expect(kissimmee).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
