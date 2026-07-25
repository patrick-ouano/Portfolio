import Image from "next/image";
import Link from "next/link";
import type { Role } from "@/lib/content/work";

export function WorkRow({ role }: { role: Role }) {
  return (
    <article className="grid gap-8 border-t border-rule py-14 md:grid-cols-12 md:gap-12 md:py-20">
      <div className="md:col-span-4">
        {/* The supplied logos sit on black, so the tile matches rather than
            boxing them in a bright frame. */}
        <div className="relative aspect-square w-full max-w-64 overflow-hidden border border-rule bg-[#0b0b0b]">
          <Image
            src={role.logo}
            alt={`${role.company} logo`}
            fill
            sizes="(min-width: 768px) 16rem, 60vw"
            className="object-contain p-6"
          />
        </div>

        <p className="mt-5 font-mono text-label uppercase text-ink-muted">
          {role.period}
        </p>
        <p className="mt-2 font-mono text-label uppercase text-ink-muted">
          {role.location}
        </p>
      </div>

      <div className="md:col-span-8">
        <p className="font-mono text-label uppercase text-accent">
          {role.company}
        </p>

        <h3 className="display-type mt-3 text-display-2">{role.title}</h3>

        <ul className="mt-7 flex max-w-measure flex-col gap-5">
          {role.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-4 text-body text-ink">
              <span aria-hidden="true" className="shrink-0 text-accent">
                &mdash;
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-8 flex flex-wrap gap-x-2 gap-y-2">
          {role.stack.map((tech) => (
            <li
              key={tech}
              className="border border-rule px-2.5 py-1 font-mono text-label uppercase text-ink-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        {role.href ? (
          <Link
            href={role.href}
            className="mt-8 inline-flex items-baseline gap-2 border-b border-accent pb-1 font-mono text-label uppercase text-accent"
          >
            Read the case study
            <span aria-hidden="true">&rarr;</span>
          </Link>
        ) : null}
      </div>
    </article>
  );
}
