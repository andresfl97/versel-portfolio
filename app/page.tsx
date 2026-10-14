import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import {
  Button,
  Container,
  CtaBand,
  Eyebrow,
  Figure,
  Section,
  StatusTag,
  TextLink,
} from "@/components/ui";
import { EvidenceItem } from "@/components/evidence";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Stalyn Andrés Flores Lalvay · Analista de Datos",
};

const CASES = [
  {
    title: "Sistema de medición de experiencia del usuario y soporte técnico",
    meta: ["Looker Studio", "Google Sheets", "Business Intelligence"],
    status: "Completo",
    line: "ETL y KPIs en Looker Studio.",
    href: "/casos/isp",
  },
  {
    title: "Análisis de costos de un sistema GNSS RTK",
    meta: ["Python", "Estadística"],
    status: "Completo",
    line: "Análisis de costos en Python y estadística.",
    href: "/casos/gnss-rtk",
  },
  {
    title: "Retail Cuenca",
    meta: ["Alimentos y bebidas", "comparación de precios y marcas"],
    status: "En desarrollo",
    line: "Comparación de precios y marcas entre retailers líderes de Cuenca.",
    href: "/casos/retail-cuenca",
  },
] as const;

const SQL_CELLS = [
  {
    title: "Joins y anti joins",
    code: "LEFT JOIN b ON a.id = b.id\nWHERE b.id IS NULL",
    span: "lg:col-span-5",
    tone: "plain",
  },
  {
    title: "Set operators",
    code: "UNION ALL · INTERSECT · EXCEPT",
    span: "lg:col-span-4",
    tone: "sets",
  },
  {
    title: "Funciones de cadena, fecha y nulos",
    code: "COALESCE(TRIM(name), '')",
    span: "lg:col-span-3",
    tone: "tint",
  },
  {
    title: "CASE WHEN",
    code: "CASE WHEN total > 0 THEN 'activo'\n     ELSE 'inactivo' END",
    span: "lg:col-span-6",
    tone: "plain",
  },
  {
    title: "Window functions",
    code: "ROW_NUMBER() OVER (\n  PARTITION BY cliente ORDER BY fecha DESC)",
    span: "lg:col-span-6",
    tone: "plain",
  },
] as const;

function SetsGlyph() {
  return (
    <svg
      viewBox="0 0 96 56"
      className="h-14 w-24"
      role="img"
      aria-label="Intersección de dos conjuntos"
    >
      <circle
        cx="36"
        cy="28"
        r="22"
        fill="var(--accent-soft)"
        fillOpacity="0.5"
        stroke="var(--accent)"
        strokeWidth="1.5"
      />
      <circle
        cx="60"
        cy="28"
        r="22"
        fill="var(--accent-soft)"
        fillOpacity="0.5"
        stroke="var(--accent)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero asimetrico */}
      <section className="flex min-h-[100dvh] items-center">
        <Container className="w-full pt-16 pb-16 md:pt-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-7">
              <Eyebrow>
                Analista de Datos Junior · Ingeniero en Telecomunicaciones
              </Eyebrow>
              <h1 className="t-display max-w-[26ch] text-balance text-ink">
                Datos auditables antes de cualquier análisis.
              </h1>
              <p className="t-lead text-ink-muted mt-6 max-w-[42ch] text-pretty">
                Perfilo y limpio datos antes de analizarlos: ETL, KPIs y agentes
                de IA.
              </p>
              <div className="mt-8">
                <Button>Escríbeme</Button>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-5">
              <div className="border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
                <Figure
                  value="92.2%"
                  label="CSAT, satisfacción del usuario"
                  source="Informe de resultados del proyecto SONET"
                  size="lg"
                  accent
                  valueClassName="text-[1.9rem] sm:text-[2.4rem] lg:text-[clamp(2rem,4vw,3rem)]"
                />
                <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6">
                  <Figure
                    value="1.9 min"
                    label="Tiempo medio de espera en soporte"
                    source="Informe de resultados (SONET)"
                  />
                  <Figure
                    value="4.6/5"
                    label="Valoración de la atención"
                    source="Informe de resultados (SONET)"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2. Manifiesto */}
      <Section bordered>
        <Reveal>
          <p className="t-lead max-w-[65ch] text-ink">
            Ingeniero en Telecomunicaciones con interés en análisis de datos y
            más de un año y medio de experiencia operativa y de atención a
            clientes. Convertí encuestas no estructuradas en KPIs que la
            gerencia adoptó. Priorizo la calidad y el perfilado de los datos
            antes de analizarlos, y hoy desarrollo agentes de IA a nivel de
            orquestación para automatizar procesos ETL.
          </p>
        </Reveal>
      </Section>

      {/* 3. Indice de casos */}
      <Section id="casos" bordered className="scroll-mt-20">
        <Reveal>
          <Eyebrow>Analítica</Eyebrow>
          <h2 className="t-h2 max-w-[24ch] text-balance">
            Tres casos de estudio y una pieza de fundamentos.
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-border border-t border-border">
          {CASES.map((item, index) => (
            <Reveal key={item.href} delay={index * 0.06}>
              <Link
                href={item.href}
                className="group grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:items-baseline md:gap-8"
              >
                <div className="md:col-span-7">
                  <h3 className="t-h3 text-ink transition-colors duration-150 group-hover:text-accent">
                    {item.title}
                  </h3>
                  <p className="t-body-sm text-ink-muted mt-2">{item.line}</p>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 md:col-span-3">
                  {item.meta.map((part) => (
                    <span key={part} className="t-figure-sm tnum text-ink-muted">
                      {part}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-4 md:col-span-2 md:justify-end">
                  <StatusTag tone={item.status === "Completo" ? "accent" : "neutral"}>
                    {item.status}
                  </StatusTag>
                  <ArrowRight
                    size={18}
                    weight="bold"
                    aria-hidden="true"
                    className="text-accent transition-transform duration-150 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4. Automatizaciones (KIRA) */}
      <Section bordered>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="t-h2">Automatizaciones</h2>
            <p className="t-body text-ink-muted mt-5 max-w-[52ch]">
              KIRA AI: un agente de WhatsApp que convierte las conversaciones y
              operaciones de una microempresa en datos consultables (n8n,
              PostgreSQL, pgvector/RAG).
            </p>
            <div className="mt-6">
              <TextLink href="/automatizaciones/kira">Ver KIRA AI</TextLink>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <EvidenceItem
              src="/assets/kira/workflow-n8n.png"
              width={8192}
              height={1528}
              alt="Flujo de trabajo del agente KIRA AI en n8n"
              fit="contain"
              sizes="(max-width: 1024px) 100vw, 58vw"
              ratio="5.4 / 1"
              frameClassName="px-4 py-6"
              videoOnMobile
              caption="Orquestación del flujo de trabajo de KIRA AI en n8n."
            />
          </Reveal>
        </div>
      </Section>

      {/* 5. Fundamentos SQL (bento) */}
      <Section bordered>
        <Reveal>
          <h2 className="t-h2">Fundamentos SQL</h2>
          <p className="t-body text-ink-muted mt-5 max-w-[60ch]">
            Consultar, cruzar y resumir datos con criterio, sobre bases
            sintéticas.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-0 divide-y divide-border border-t border-border md:grid-cols-2 md:divide-y-0 lg:grid-cols-12 lg:gap-6 lg:divide-x-0 lg:divide-y-0">
          {SQL_CELLS.map((cell, index) => (
            <Reveal
              key={cell.title}
              delay={index * 0.06}
              className={`${cell.span} border-border lg:border-t lg:pt-6 ${
                cell.tone === "tint" ? "lg:bg-accent-soft lg:px-5 lg:pb-6 lg:rounded-[var(--radius-md)]" : ""
              }`}
            >
              <div className="py-6 lg:py-0">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="t-h4 text-ink">{cell.title}</h3>
                  {cell.tone === "sets" ? <SetsGlyph /> : null}
                </div>
                <pre className="t-code tnum mt-4 overflow-x-auto rounded-[var(--radius-sm)] border border-border bg-bg-elevated px-4 py-3 text-ink-muted">
                  {cell.code}
                </pre>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 6. CTA */}
      <CtaBand>
        <a
          href="mailto:ing.stalyn.flores@gmail.com"
          className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors duration-150 hover:text-accent-hover"
        >
          ing.stalyn.flores@gmail.com
        </a>
      </CtaBand>
    </>
  );
}
