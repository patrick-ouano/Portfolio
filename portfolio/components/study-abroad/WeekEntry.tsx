import { SectionNumber } from "@/components/ui";
import type { Week } from "@/lib/content/studyAbroad";

export function WeekEntry({ week }: { week: Week }) {
  return (
    <article className="grid gap-6 border-t border-rule py-12 md:grid-cols-12 md:gap-10 md:py-16">
      <div className="md:col-span-3">
        <SectionNumber value={week.number} />
        <p className="mt-3 font-mono text-label uppercase text-ink-muted">
          Week {week.number}
        </p>
      </div>

      <div className="md:col-span-9">
        <h3 className="display-type text-display-3">{week.title}</h3>

        <p className="mt-5 max-w-measure text-body text-ink-muted">
          {week.intro}
        </p>

        <ul className="mt-7 flex max-w-measure flex-col gap-5">
          {week.lessons.map((lesson) => (
            <li key={lesson} className="flex gap-4 text-body text-ink">
              <span aria-hidden="true" className="text-accent">
                &mdash;
              </span>
              <span>{lesson}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
