import type { Metadata } from "next";
import {
  CtaBand,
  Figure,
  Section,
  TextLink,
} from "@/components/ui";
import { CaseHero } from "@/components/case-hero";
import { MethodRail, type RailNode } from "@/components/method-rail";
import { MicroBar } from "@/components/data-artifacts";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Caso GNSS RTK",
  description:
    "Análisis de costos de un sistema GNSS RTK en Python y estadística: hasta 23 cuadrillas y 89% menos en costo total de propiedad.",
};

const RAIL: RailNode[] = [
  {
    label: "Pregunta",
    detail:
      "¿Conviene un sistema comercial de un solo equipo o equipar varias cuadrillas de laboratorio?",
  },
  {
    label: "Datos",
    detail:
      "Documentación técnica oficial del Municipio de Cuenca e investigación de mercado de equipos comerciales. Estimaciones de costo y costo total de propiedad (equipo más mantenimiento).",
  },
  {
    label: "Método",
    detail: (
      <ol className="t-body-sm space-y-2">
        <li>
          Extracción, transformación y carga (ETL) en Python a partir de la
          documentación técnica.
        </li>
        <li>Investigación de mercado de las alternativas comerciales.</li>
        <li>Estimaciones de costo-beneficio y de costo total de propiedad.</li>
        <li>
          Comparación entre un solo equipo comercial y el equipamiento de varias
          cuadrillas.
        </li>
      </ol>
    ),
  },
  {
    label: "Hallazgo",
    detail:
      "El presupuesto de un solo equipo comercial permite equipar hasta 23 cuadrillas de laboratorio. El costo total de propiedad resulta hasta 89% menor y el ahorro por jornada de levantamiento topográfico alcanza el 50%.",
  },
  {
    label: "Decisión",
    detail:
      "La comparación entregó la base cuantitativa para decidir entre comprar un equipo comercial único o equipar varias cuadrillas, con el costo total de propiedad como criterio principal.",
  },
];

const FINDINGS = [
  {
    value: "Hasta 23 cuadrillas",
    fraction: 1,
    gloss:
      "Equipables con el presupuesto de un solo equipo comercial (contra 1 equipo).",
    span: "lg:col-span-5",
  },
  {
    value: "Hasta 89% menor",
    fraction: 0.89,
    gloss: "Costo total de propiedad (equipo más mantenimiento).",
    span: "lg:col-span-4",
  },
  {
    value: "50%",
    fraction: 0.5,
    gloss: "Ahorro en costo operativo por jornada de levantamiento topográfico.",
    span: "lg:col-span-3",
  },
] as const;

export default function GnssPage() {
  return (
    <>
      <CaseHero
        title="Análisis de costos de un sistema GNSS RTK"
        lead="Un solo equipo comercial de alta gama frente a equipar varias cuadrillas de laboratorio."
        meta={["Python · Estadística"]}
        statusLabel="Completo"
        statusTone="accent"
        artifact={
          <div className="border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
            <Figure
              value="Hasta 23 cuadrillas"
              label="Equipables con el presupuesto de un solo equipo comercial."
              source="Tesis de grado, GNSS RTK"
              size="lg"
              accent
              valueClassName="text-[1.75rem] sm:text-[2.2rem] lg:text-[clamp(2rem,4vw,3rem)]"
            />
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6">
              <Figure
                value="89%"
                label="Menor costo total de propiedad"
                source="Tesis de grado (GNSS RTK)"
              />
              <Figure
                value="50%"
                label="Ahorro por jornada de levantamiento"
                source="Tesis de grado (GNSS RTK)"
              />
            </div>
          </div>
        }
      />

      {/* 2. Pregunta y contexto */}
      <Section bordered>
        <Reveal>
          <h2 className="t-h2 max-w-[26ch]">
            ¿Conviene un sistema comercial de un solo equipo o equipar varias
            cuadrillas de laboratorio?
          </h2>
          <div className="t-body text-ink-muted mt-8 max-w-[65ch] space-y-5">
            <p>
              La comparación partió de documentación técnica oficial del
              Municipio de Cuenca y de una investigación de mercado sobre
              equipos GNSS RTK.
            </p>
            <p>
              La decisión de compra enfrentaba una disyuntiva práctica: un solo
              equipo comercial de alta gama frente a equipar varias cuadrillas
              de laboratorio con una alternativa de menor costo por unidad.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 3. Datos */}
      <Section bordered>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h3 className="t-h3 text-ink">Datos</h3>
            <ul className="mt-6 space-y-4">
              <li className="t-body-sm text-ink-muted">
                Origen: documentación técnica oficial del Municipio de Cuenca.
              </li>
              <li className="t-body-sm text-ink-muted">
                Complemento: investigación de mercado de equipos comerciales.
              </li>
              <li className="t-body-sm text-ink-muted">
                Uso: estimaciones de costo y costo total de propiedad (equipo
                más mantenimiento).
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="divide-y divide-border border-t border-border">
              <div className="flex flex-col gap-2 py-5">
                <span className="t-figure-sm tnum text-ink">
                  documentación técnica oficial del Municipio de Cuenca
                </span>
                <span className="t-caption text-ink-muted">
                  Fuente primaria del análisis.
                </span>
              </div>
              <div className="flex flex-col gap-2 py-5">
                <span className="t-figure-sm tnum text-ink">
                  investigación de mercado de equipos comerciales
                </span>
                <span className="t-caption text-ink-muted">
                  Complemento para las alternativas comerciales.
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 4. Metodo (rail) */}
      <Section bordered>
        <Reveal>
          <h2 className="t-h2 max-w-[24ch]">
            Del dato técnico a una recomendación cuantificada.
          </h2>
        </Reveal>
        <div className="mt-12">
          <MethodRail nodes={RAIL} />
        </div>
      </Section>

      {/* 5. Hallazgo (bento) */}
      <Section bordered>
        <Reveal>
          <h2 className="t-h2">Hallazgo</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-0 divide-y divide-border border-t border-border lg:grid-cols-12 lg:gap-6 lg:divide-y-0">
          {FINDINGS.map((item, index) => (
            <Reveal
              key={item.value}
              delay={index * 0.06}
              className={`${item.span} border-border lg:border-t lg:pt-6`}
            >
              <div className="py-6 lg:py-0">
                <Figure
                  value={item.value}
                  size="lg"
                  accent
                  valueClassName="text-[1.75rem] sm:text-[2.2rem] lg:text-[clamp(1.75rem,3.5vw,2.6rem)]"
                />
                <div className="mt-5">
                  <MicroBar fraction={item.fraction} />
                </div>
                <p className="t-body-sm text-ink-muted mt-4 max-w-[42ch]">
                  {item.gloss}
                </p>
                <p className="t-caption text-ink-muted mt-2">
                  Tesis de grado (GNSS RTK)
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 6. Decision (ficha agrupada) */}
      <Section bordered>
        <Reveal>
          <h3 className="t-h3 text-ink">Decisión</h3>
          <p className="t-figure-sm tnum text-ink mt-4">
            Hasta 23 cuadrillas · hasta 89% menor en costo total de propiedad
          </p>
          <p className="t-body text-ink-muted mt-6 max-w-[65ch]">
            La comparación entregó la base cuantitativa para decidir entre
            comprar un equipo comercial único o equipar varias cuadrillas, con
            el costo total de propiedad como criterio principal.
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
