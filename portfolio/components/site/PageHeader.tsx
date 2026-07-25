import { Container, Display, Eyebrow, Prose, Section } from "@/components/ui";
import { Reveal } from "@/components/motion";

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: React.ReactNode;
}) {
  return (
    <Section className="pb-12 md:pb-16">
      <Container>
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <Display size={1} as="h1" className="mt-6">
            {title}
          </Display>
        </Reveal>
        {lead ? (
          <Reveal delay={0.1}>
            <Prose className="mt-8">{lead}</Prose>
          </Reveal>
        ) : null}
      </Container>
    </Section>
  );
}
