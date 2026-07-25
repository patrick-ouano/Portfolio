import { describe, expect, it } from "vitest";
import { buildMailtoHref } from "@/components/contact/ContactForm";

describe("buildMailtoHref", () => {
  it("encodes subject and body for a named enquiry", () => {
    const href = buildMailtoHref({
      name: "Jane Doe",
      email: "jane@company.com",
      message: "Hello & welcome",
      to: "patrick@example.com",
    });

    expect(href.startsWith("mailto:patrick@example.com?")).toBe(true);
    expect(href).toContain(encodeURIComponent("Portfolio enquiry from Jane Doe"));
    expect(href).toContain(encodeURIComponent("Hello & welcome"));
    expect(href).toContain(encodeURIComponent("jane@company.com"));
  });

  it("falls back to a generic subject without a name", () => {
    const href = buildMailtoHref({
      name: "",
      email: "jane@company.com",
      message: "Hi",
      to: "patrick@example.com",
    });

    expect(href).toContain(encodeURIComponent("Portfolio enquiry"));
    expect(href).not.toContain(encodeURIComponent("from "));
  });
});
