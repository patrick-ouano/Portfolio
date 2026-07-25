import Link from "next/link";
import { SectionNumber, SiteEmbed } from "@/components/ui";
import type { Project } from "@/lib/content/projects";

export function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="group border-t border-rule py-14 md:py-20">
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <div className="flex items-baseline gap-5">
            <SectionNumber value={index + 1} className="text-display-3" />
            <p className="font-mono text-label uppercase text-ink-muted">
              {project.year}
            </p>
          </div>

          <h3 className="display-type mt-5 text-display-2">{project.name}</h3>

          <p className="mt-3 font-mono text-label uppercase text-accent">
            {project.role}
          </p>

          <p className="mt-6 max-w-measure text-body text-ink">
            {project.summary}
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-2 gap-y-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="border border-rule px-2.5 py-1 font-mono text-label uppercase text-ink-muted"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {project.link ? (
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-baseline gap-2 border-b border-ink pb-1 font-mono text-label uppercase text-ink transition-colors hover:border-accent hover:text-accent"
              >
                {project.embed?.action ?? "Visit live site"}
                <span aria-hidden="true">&#8599;</span>
              </a>
            ) : null}

            {project.readMore ? (
              <Link
                href={project.readMore.href}
                className="inline-flex items-baseline gap-2 border-b border-accent pb-1 font-mono text-label uppercase text-accent"
              >
                {project.readMore.label}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            ) : null}
          </div>
        </div>

        {project.embed ? (
          <div className="md:col-span-7">
            <SiteEmbed {...project.embed} priority={index === 0} />
          </div>
        ) : null}
      </div>
    </article>
  );
}
