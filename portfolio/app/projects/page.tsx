import type { Metadata } from "next";
import { Reveal } from "@/components/motion";
import { PageHeader } from "@/components/site/PageHeader";
import { ProjectRow } from "@/components/projects/ProjectRow";
import { Container, Section } from "@/components/ui";
import { projects } from "@/lib/content/projects";

export const metadata: Metadata = {
  title: "Projects — Patrick Ouano",
  description:
    "Housing Assembly, OpenWorld, MealCraft, Gamify JSA, and the UFFSA website.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Things I've shipped."
        lead={
          <p>
            Five projects, most built with a team and most still running. Three
            are embedded live below &mdash; scroll and click around inside them.
            The rest link out.
          </p>
        }
      />

      <Section className="pt-0">
        <Container>
          {projects.map((project, index) => (
            <Reveal key={project.slug}>
              <ProjectRow project={project} index={index} />
            </Reveal>
          ))}
        </Container>
      </Section>
    </>
  );
}
