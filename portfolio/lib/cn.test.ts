import { describe, expect, it } from "vitest";
import { cn } from "@/lib/cn";

describe("cn", () => {
  it("joins truthy class names", () => {
    expect(cn("a", "b", "c")).toBe("a b c");
  });

  it("drops false, null, and undefined", () => {
    expect(cn("base", false && "hidden", null, undefined, "ok")).toBe(
      "base ok",
    );
  });
});
