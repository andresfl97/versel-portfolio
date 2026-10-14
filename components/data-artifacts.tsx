/**
 * Micro-barra SIN pista de fondo (tokens.md 11.B).
 * Un solo trazo en acento; no hay track gris de fondo.
 */
export function MicroBar({
  fraction,
  className = "",
}: {
  fraction: number;
  className?: string;
}) {
  const width = Math.max(0, Math.min(1, fraction)) * 100;
  return (
    <svg
      viewBox="0 0 100 6"
      preserveAspectRatio="none"
      className={`h-1.5 w-full ${className}`}
      aria-hidden="true"
    >
      <rect x="0" y="0" width={width} height="6" rx="3" fill="var(--accent)" />
    </svg>
  );
}

/**
 * Stepper de nodos discretos, sin pista rellena (KIRA roadmap).
 * El nodo actual se resalta con acento; los demas en ink-muted.
 */
export function Stepper({
  steps,
  current,
}: {
  steps: ReadonlyArray<{ label: string; phase: string }>;
  current: number;
}) {
  return (
    <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, index) => {
        const isCurrent = index === current;
        return (
          <li key={step.label} className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className={`h-2.5 w-2.5 shrink-0 rounded-[var(--radius-pill)] border transition-colors duration-[220ms] ${
                  isCurrent
                    ? "border-accent bg-accent"
                    : "border-border bg-transparent"
                }`}
              />
              <span
                className={`t-figure-sm tnum transition-colors duration-[220ms] ${
                  isCurrent ? "text-accent" : "text-ink-muted"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div>
              <p
                className={`t-h4 ${isCurrent ? "text-accent" : "text-ink"}`}
              >
                {step.label}
              </p>
              <p className="t-caption text-ink-muted mt-1">{step.phase}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
