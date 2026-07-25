export function HobbyPlaceholder({ label }: { label: string }) {
  return (
    <div
      aria-hidden="true"
      className="relative flex aspect-[3/2] w-full items-center justify-center overflow-hidden border border-dashed border-rule bg-surface"
    >
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-rule) 1px, transparent 1px), linear-gradient(to bottom, var(--color-rule) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <p className="relative font-mono text-label uppercase tracking-wider text-ink-muted">
        {label}
      </p>
    </div>
  );
}
