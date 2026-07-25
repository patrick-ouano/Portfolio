import type { Metadata } from "next";
import { MaskLines, Parallax, Reveal, Stagger, StaggerItem } from "@/components/motion";
import {
  Container,
  Display,
  Eyebrow,
  Prose,
  Rule,
  Section,
  SectionNumber,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Styleguide",
  robots: { index: false, follow: false },
};

const SWATCHES = [
  { token: "paper", className: "bg-paper" },
  { token: "surface", className: "bg-surface" },
  { token: "ink", className: "bg-ink" },
  { token: "ink-muted", className: "bg-ink-muted" },
  { token: "rule", className: "bg-rule" },
  { token: "accent", className: "bg-accent" },
];

const TYPE_SCALE = [
  { token: "display-1", className: "display-type text-display-1" },
  { token: "display-2", className: "display-type text-display-2" },
  { token: "display-3", className: "display-type text-display-3" },
  { token: "lead", className: "text-lead" },
  { token: "body", className: "text-body" },
  { token: "label", className: "font-mono text-label uppercase" },
];

export default function StyleguidePage() {
  return (
    <>
      <Section className="pb-12">
        <Container>
          <Eyebrow>Styleguide</Eyebrow>
          <Display size={1} as="h1" className="mt-6">
            Editorial theme
          </Display>
          <Prose className="mt-8">
            <p>
              Every token, primitive, and motion behaviour in one place. Use the
              theme toggle in the header to check both modes.
            </p>
          </Prose>
        </Container>
      </Section>

      <Guide title="Color" number={1}>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {SWATCHES.map((swatch) => (
            <div key={swatch.token}>
              <div
                className={`aspect-square w-full border border-rule ${swatch.className}`}
              />
              <p className="mt-3 font-mono text-label uppercase text-ink-muted">
                {swatch.token}
              </p>
            </div>
          ))}
        </div>
      </Guide>

      <Guide title="Type scale" number={2}>
        <div className="flex flex-col gap-10">
          {TYPE_SCALE.map((entry) => (
            <div key={entry.token}>
              <p className="font-mono text-label uppercase text-ink-muted">
                {entry.token}
              </p>
              <p className={`mt-3 ${entry.className}`}>
                Meeting people where they already are
              </p>
            </div>
          ))}
        </div>
      </Guide>

      <Guide title="Primitives" number={3}>
        <div className="flex flex-col gap-12">
          <PrimitiveDemo label="Eyebrow">
            <Eyebrow>Selected Work</Eyebrow>
          </PrimitiveDemo>

          <PrimitiveDemo label="Rule">
            <Rule />
          </PrimitiveDemo>

          <PrimitiveDemo label="SectionNumber">
            <SectionNumber value={4} />
          </PrimitiveDemo>

          <PrimitiveDemo label="Prose (66ch measure)">
            <Prose>
              <p>
                The people Housing Assembly serves are on their phones, and
                WhatsApp is what they already open every day, so we spent weeks
                getting it working properly there instead.
              </p>
              <p>
                <strong>Strong text uses full ink.</strong> Body copy sits at the
                muted ink value so emphasis still registers.
              </p>
            </Prose>
          </PrimitiveDemo>
        </div>
      </Guide>

      <Guide title="Motion" number={4}>
        <div className="flex flex-col gap-16">
          <PrimitiveDemo label="MaskLines (runs on mount)">
            <Display size={3} as="p">
              <MaskLines lines={["Lines reveal", "from behind a mask."]} />
            </Display>
          </PrimitiveDemo>

          <PrimitiveDemo label="Reveal (on scroll into view)">
            <Reveal>
              <div className="border border-rule bg-surface p-8">
                <p className="text-body text-ink-muted">Fades and rises once.</p>
              </div>
            </Reveal>
          </PrimitiveDemo>

          <PrimitiveDemo label="Stagger (children in sequence)">
            <Stagger className="grid gap-4 md:grid-cols-3">
              {["One", "Two", "Three"].map((item) => (
                <StaggerItem key={item}>
                  <div className="border border-rule bg-surface p-8">
                    <p className="text-body text-ink-muted">{item}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </PrimitiveDemo>

          <PrimitiveDemo label="Parallax (scroll-linked)">
            <Parallax className="border border-rule bg-surface p-8">
              <p className="text-body text-ink-muted">
                Drifts against the scroll direction.
              </p>
            </Parallax>
          </PrimitiveDemo>
        </div>
      </Guide>
    </>
  );
}

function Guide({
  title,
  number,
  children,
}: {
  title: string;
  number: number;
  children: React.ReactNode;
}) {
  return (
    <Section className="py-16">
      <Container>
        <div className="mb-10 flex items-baseline gap-6 border-t border-rule pt-8">
          <SectionNumber value={number} className="text-display-3" />
          <Display size={3}>{title}</Display>
        </div>
        {children}
      </Container>
    </Section>
  );
}

function PrimitiveDemo({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-4 font-mono text-label uppercase text-ink-muted">
        {label}
      </p>
      {children}
    </div>
  );
}
