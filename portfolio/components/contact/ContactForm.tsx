"use client";

import { useState } from "react";
import { buttonClass } from "@/components/ui/button";
import { contact } from "@/lib/content/site";

const FIELD =
  "mt-2 w-full border border-rule bg-surface px-4 py-3 text-body text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none";

/**
 * There's no mail service wired up, so rather than a form that silently drops
 * messages this hands off to the visitor's own mail client with everything
 * prefilled.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = name ? `Portfolio enquiry from ${name}` : "Portfolio enquiry";
    const body = [message, "", "—", name, email].filter(Boolean).join("\n");

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="font-mono text-label uppercase text-ink-muted"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Doe"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={FIELD}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="font-mono text-label uppercase text-ink-muted"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={FIELD}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-mono text-label uppercase text-ink-muted"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Hey Patrick, we're hiring and your Cape Town work stood out."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={FIELD}
        />
      </div>

      <div>
        <button type="submit" className={buttonClass("solid")}>
          Send message
          <span aria-hidden="true">&rarr;</span>
        </button>
        <p className="mt-3 font-mono text-label text-ink-muted">
          Opens in your mail app, addressed and prefilled.
        </p>
      </div>
    </form>
  );
}
