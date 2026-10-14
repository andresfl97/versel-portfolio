import type { ReactNode } from "react";
import {
  Button,
  Container,
  Eyebrow,
  StatusTag,
} from "@/components/ui";
import { Reveal } from "@/components/reveal";

/**
 * Hero de caso (familia hero asimetrico): texto izquierda col-span-7,
 * destaque de artefacto derecha col-span-5. Colapsa a una columna < 768px.
 */
export function CaseHero({
  title,
  lead,
  meta,
  statusLabel,
  statusTone = "neutral",
  artifact,
  eyebrow = "Caso de estudio",
}: {
  title: string;
  lead: string;
  meta: readonly string[];
  statusLabel: string;
  statusTone?: "neutral" | "accent";
  artifact: ReactNode;
  eyebrow?: string;
}) {
  return (
    <section className="flex min-h-[88dvh] items-center">
      <Container className="w-full pt-16 pb-16 md:pt-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="t-h1 max-w-[34ch] text-balance text-ink">{title}</h1>
            <p className="t-lead text-ink-muted mt-5 max-w-[46ch] text-pretty">
              {lead}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3">
              {meta.map((part) => (
                <span
                  key={part}
                  className="t-figure-sm tnum text-ink-muted"
                >
                  {part}
                </span>
              ))}
              <StatusTag tone={statusTone}>{statusLabel}</StatusTag>
            </div>
            <div className="mt-8">
              <Button>Escríbeme</Button>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5">
            {artifact}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
