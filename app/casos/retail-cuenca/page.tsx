import type { Metadata } from "next";
import { Fragment } from "react";
import {
  CtaBand,
  Eyebrow,
  Figure,
  Section,
  TextLink,
} from "@/components/ui";
import { CaseHero } from "@/components/case-hero";
import { MethodRail, type RailNode } from "@/components/method-rail";
import { EvidenceItem } from "@/components/evidence";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Retail Cuenca (en desarrollo)",
  description:
    "Caso en desarrollo: comparación de precios y marcas entre retailers líderes de Cuenca. Su valor hoy es la orquestación del método.",
};

const PIPELINE = [
  "investigación",
  "extracción",
  "RAW",
  "perfilado",
  "homologación",
  "limpieza",
  "validación",
  "SQL",
  "modelo",
  "visualización",
] as const;

const GATES = new Set(["RAW", "limpieza", "modelo"]);

function Pipeline() {
  return (
    <div>
      <ul className="flex snap-x snap-mandatory items-center gap-2 overflow-x-auto pb-3">
        {PIPELINE.map((step, index) => (
          <Fragment key={step}>
            <li className="snap-start">
              <span
                className={`t-figure-sm tnum inline-flex whitespace-nowrap rounded-[var(--radius-sm)] border px-3 py-2 ${
                  GATES.has(step)
                    ? "border-accent/50 bg-accent-soft text-accent"
                    : "border-border text-ink-muted"
                }`}
              >
                {step}
              </span>
            </li>
            {index < PIPELINE.length - 1 ? (
              <li aria-hidden="true" className="t-figure-sm text-ink-muted">
                -&gt;
              </li>
            ) : null}
          </Fragment>
        ))}
      </ul>
      <p className="t-caption text-ink-muted mt-2">
        Los puntos en acento son Human Gates: el humano aprueba antes de
        avanzar.
      </p>
    </div>
  );
}

const RAIL: RailNode[] = [
  {
    label: "Pregunta",
    detail:
      "¿Cómo se comparan precios y marcas entre los retailers líderes de Cuenca?",
  },
  {
    label: "Datos",
    detail:
      "Todavía no hay resultados ni artefactos de dato publicables. El benchmark con el que se empezó es provisional. Lo que existe es la metodología probada, no una conclusión sobre precios.",
  },
  {
    label: "Método",
    detail: <Pipeline />,
  },
  {
    label: "Hallazgo",
    detail:
      "No aplica todavía. Sin datos validados no hay hallazgo que reportar. Cualquier cifra de precios se publicará solo cuando el pipeline esté cerrado y validado.",
  },
  {
    label: "Decisión",
    detail:
      "En curso. El método ya está definido y es reutilizable para otros dominios de comparación de mercado. El impacto se medirá cuando el caso cierre.",
  },
];

export default function RetailPage() {
  return (
    <>
      <CaseHero
        title="Retail Cuenca"
        lead="El proyecto está en pausa y este caso se publica como está: su valor es la orquestación del método."
        meta={["Alimentos y bebidas · comparación de precios y marcas"]}
        statusLabel="En desarrollo"
        statusTone="neutral"
        artifact={
          <div className="border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
            <Figure
              value="43%"
              label="Peso de alimentos y bebidas en la canasta básica de Ecuador."
              source="Enfoque declarado del proyecto"
              size="lg"
              accent
              valueClassName="text-[2.4rem] sm:text-[3rem] lg:text-[clamp(2.5rem,4.5vw,3.5rem)]"
            />
          </div>
        }
      />

      {/* 2. Pregunta y contexto */}
      <Section bordered>
        <Reveal>
          <h2 className="t-h2 max-w-[26ch]">
            ¿Cómo se comparan precios y marcas entre los retailers líderes de
            Cuenca?
          </h2>
          <div className="t-body text-ink-muted mt-8 max-w-[65ch] space-y-5">
            <p>
              El enfoque son alimentos y bebidas, que representan el 43% de la
              canasta básica de Ecuador. Es la porción de mayor peso en el gasto
              de las familias, así que las diferencias de precio y de marca
              entre retailers tienen impacto directo.
            </p>
            <p>
              El proyecto está en pausa y este caso se publica como está: su
              valor hoy es la orquestación del método, no un resultado.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 3. Estado del dato (estado vacio) */}
      <Section bordered>
        <Reveal>
          <div className="max-w-[65ch]">
            <h3 className="t-h3 text-ink">Todavía no hay resultados</h3>
            <p className="t-lead text-ink-muted mt-6">
              Todavía no hay resultados ni artefactos de dato publicables. El
              benchmark con el que se empezó es provisional.
            </p>
            <p className="t-body text-ink-muted mt-5">
              Lo que existe es la metodología probada, no una conclusión sobre
              precios. Sin datos validados no hay hallazgo que reportar.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 4. Metodo (rail) */}
      <Section bordered>
        <Reveal>
          <Eyebrow>Método</Eyebrow>
          <h2 className="t-h2 max-w-[26ch]">
            Desarrollo guiado por especificaciones, con puntos de control
            humanos.
          </h2>
        </Reveal>
        <div className="mt-12">
          <MethodRail nodes={RAIL} />
        </div>
      </Section>

      {/* 5. Orquestacion con IA */}
      <Section bordered>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="t-h2">Cómo se construye</h2>
            <p className="t-body text-ink-muted mt-5 max-w-[52ch]">
              La pieza visual de este caso es la orquestación: cómo agentes y
              persona construyen el caso en conjunto.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <EvidenceItem
              src="/assets/retail/orquestacion-ia.svg"
              width={1600}
              height={900}
              alt="Diagrama de orquestación con agentes de IA y Human Gates"
              fit="contain"
              unoptimized
              sizes="(max-width: 1024px) 100vw, 58vw"
              ratio="16 / 9"
              frameClassName="px-4 py-6"
              caption="Orquestación del método: agentes de IA y puntos de control humanos (Human Gates)."
            />
          </Reveal>
        </div>
      </Section>

      {/* 6. Decision en curso (ficha agrupada) */}
      <Section bordered>
        <Reveal>
          <h3 className="t-h3 text-ink">Decisión</h3>
          <p className="t-body text-ink-muted mt-6 max-w-[65ch]">
            En curso. El método ya está definido y es reutilizable para otros
            dominios de comparación de mercado. El impacto se medirá cuando el
            caso cierre.
          </p>
          <p className="t-caption text-ink-muted mt-6 max-w-[65ch]">
            En desarrollo. Proyecto en pausa, enfoque cambiado a precios y
            marcas de alimentos y bebidas.
          </p>
        </Reveal>
      </Section>

      {/* 7. CTA */}
      <CtaBand>
        <TextLink href="/">Volver al índice de casos</TextLink>
      </CtaBand>
    </>
  );
}
