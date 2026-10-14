import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import {
  Button,
  Figure,
  Section,
  StatusTag,
} from "@/components/ui";
import { EvidenceGallery } from "@/components/evidence";
import { Stack } from "@/components/stack";
import { Reveal } from "@/components/reveal";
import { MAILTO, REPO_URL, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.name} · Analista de Datos`,
  description:
    "Portafolio de Stalyn Flores: perfil, experiencia, stack, casos de análisis de datos y contacto.",
};

const PROFILE_METRICS = [
  { value: "CSAT 92.2%", label: "Satisfacción del usuario", accent: true },
  { value: "+2,000", label: "Clientes activos", accent: false },
  { value: "+200", label: "Encuestas centralizadas", accent: false },
] as const;

const CERTS = [
  { name: "SQL Bootcamp: Zero to Hero", meta: "Udemy · Sep 2026" },
  { name: "Meta Data Analyst Professional Certificate", meta: "Coursera · May 2026" },
  {
    name: "Power BI Intermedio y Excel Avanzado",
    meta: "Soluciones Integrales Expertos · May 2026",
  },
  {
    name: "Build Intelligent Agents Using DeepSeek & N8N",
    meta: "Coursera · Mar 2026",
  },
  { name: "Claude Code in Action", meta: "Anthropic" },
  { name: "Iniciación al Desarrollo con IA", meta: "BIG school" },
] as const;

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="t-figure-sm tnum inline-flex items-center rounded-[var(--radius-sm)] border border-border px-2.5 py-1 text-ink">
      {children}
    </span>
  );
}

function MetricLine({ values }: { values: readonly string[] }) {
  return (
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {values.map((value) => (
        <li key={value} className="t-figure-sm tnum text-ink-muted">
          {value}
        </li>
      ))}
    </ul>
  );
}

function CaseMethod({
  items,
}: {
  items: readonly { label: string; text: string }[];
}) {
  return (
    <dl className="mt-5 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="t-label text-ink-muted">{item.label}</dt>
          <dd className="t-body-sm text-ink-muted mt-1">{item.text}</dd>
        </div>
      ))}
    </dl>
  );
}

function CaseBlock({
  title,
  status,
  chips,
  line,
  metrics,
  method,
  image,
}: {
  title: string;
  status?: string;
  chips: readonly string[];
  line: string;
  metrics: readonly string[];
  method: readonly { label: string; text: string }[];
  image?: ReactNode;
}) {
  return (
    <article className="py-8">
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="t-h3 text-ink">{title}</h3>
        {status ? <StatusTag tone="neutral">{status}</StatusTag> : null}
      </div>
      <ul className="mt-3 flex flex-wrap gap-2">
        {chips.map((chip) => (
          <li key={chip}>
            <Chip>{chip}</Chip>
          </li>
        ))}
      </ul>
      <p className="t-body-sm text-ink-muted mt-3 max-w-[70ch]">{line}</p>
      <div className="mt-4">
        <MetricLine values={metrics} />
      </div>
      <CaseMethod items={method} />
      {image}
    </article>
  );
}

function StepDots({ current, total }: { current: number; total: number }) {
  return (
    <span className="inline-flex items-center gap-1.5" aria-hidden="true">
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          className={`h-2 w-2 rounded-[var(--radius-pill)] border ${
            index < current
              ? "border-accent bg-accent"
              : "border-ink-subtle bg-transparent"
          }`}
        />
      ))}
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      {/* 1. Perfil */}
      <Section id="perfil" className="scroll-mt-20 pt-12 md:pt-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
          <Image
            src="/assets/home/portrait.jpg"
            alt="Retrato de Stalyn Andrés Flores Lalvay"
            width={800}
            height={1000}
            priority
            className="h-40 w-40 shrink-0 rounded-full border border-border object-cover sm:h-44 sm:w-44"
          />
          <div>
            <h1 className="t-h1 text-balance text-ink">{SITE.name}</h1>
            <p className="t-lead text-ink-muted mt-2">{SITE.title}</p>
            <p className="t-body text-ink-muted mt-3 max-w-[54ch] text-pretty">
              Perfilo y limpio datos antes de analizarlos: ETL, KPIs y agentes
              de IA.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
              <a
                href={MAILTO}
                className="t-body-sm t-link"
              >
                {SITE.email}
              </a>
              <a
                href={SITE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="t-body-sm t-link"
              >
                {SITE.linkedin}
              </a>
              <span className="t-body-sm text-ink-muted">{SITE.location}</span>
            </div>
            <div className="mt-6">
              <Button>Escríbeme</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 border-t border-border pt-6 sm:grid-cols-3">
          {PROFILE_METRICS.map((metric) => (
            <Figure
              key={metric.value}
              value={metric.value}
              label={metric.label}
              size="md"
              accent={metric.accent}
            />
          ))}
        </div>
      </Section>

      {/* 2. Experiencia */}
      <Section id="experiencia" bordered className="scroll-mt-20">
        <Reveal>
          <h2 className="t-h2">Experiencia</h2>
          <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="t-h3 text-ink">SONET C.L., Cuenca</h3>
            <span className="t-figure-sm tnum text-ink-muted">
              Agosto 2024 - Marzo 2026
            </span>
          </div>
          <ul className="mt-4 max-w-[70ch] list-disc space-y-2 pl-5">
            <li className="t-body-sm text-ink-muted">
              Alrededor de 40 incidencias mensuales atendidas, traduciendo
              conceptos complejos a distintos departamentos.
            </li>
            <li className="t-body-sm text-ink-muted">
              Reportes de incidencias y casos críticos con hallazgos clave.
            </li>
            <li className="t-body-sm text-ink-muted">
              Gestión de inventario de insumos y equipos con registro de consumo
              mensual para anticipar desabastecimiento.
            </li>
          </ul>
        </Reveal>
      </Section>

      {/* 3. Stack tecnologico */}
      <Section id="stack" bordered className="scroll-mt-20">
        <Reveal>
          <h2 className="t-h2">Stack tecnológico</h2>
          <p className="t-body-sm text-ink-muted mt-3 max-w-[60ch]">
            Herramientas que uso, agrupadas por área.
          </p>
          <div className="mt-8">
            <Stack />
          </div>
          <p className="mt-6">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="t-body-sm t-link group font-medium"
            >
              Ver el código en GitHub{" "}
              <ArrowUpRight
                size={15}
                weight="bold"
                aria-hidden="true"
                className="inline-block align-[-0.125em] transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </p>
        </Reveal>
      </Section>

      {/* 4. Casos */}
      <Section id="casos" bordered className="scroll-mt-20">
        <Reveal>
          <h2 className="t-h2">Casos</h2>
        </Reveal>
        <div className="mt-6 divide-y divide-border border-t border-border">
          <Reveal>
            <CaseBlock
              title="Sistema de medición de experiencia del usuario y soporte técnico"
              chips={["Looker Studio", "Google Sheets", "Business Intelligence"]}
              line="ETL y KPIs en Looker Studio."
              metrics={["CSAT 92.2%", "Espera 1.9 min", "Valoración 4.6/5"]}
              method={[
                {
                  label: "Pregunta",
                  text: "¿Cómo medir la experiencia del usuario y el soporte sin visibilidad operativa?",
                },
                {
                  label: "Datos",
                  text: "+200 encuestas sin normalizar y una cartera de +2,000 clientes activos.",
                },
                {
                  label: "Método",
                  text: "ETL de Google Forms a Google Sheets y a Looker Studio; dos dashboards de KPI.",
                },
                {
                  label: "Hallazgo",
                  text: "Brecha de desinformación del 10%, causa raíz de las quejas nocturnas.",
                },
              ]}
              image={
                <EvidenceGallery
                  className="mt-5"
                  items={[
                    {
                      src: "/assets/isp/informe-rendimiento.png",
                      width: 1800,
                      height: 1351,
                      alt: "Dashboard del Informe de Rendimiento SONET con CSAT, tiempo de espera y valoración del trato",
                      caption: "Informe de Rendimiento SONET.",
                      sizes: "220px",
                    },
                    {
                      src: "/assets/isp/desempeno-cuadrillas.png",
                      width: 1800,
                      height: 1351,
                      alt: "Dashboard del Análisis de desempeño de cuadrillas",
                      caption: "Análisis de desempeño de cuadrillas.",
                      sizes: "220px",
                    },
                  ]}
                />
              }
            />
          </Reveal>

          <Reveal>
            <CaseBlock
              title="Análisis de costos de un sistema GNSS RTK"
              chips={["Python", "Estadística"]}
              line="Análisis de costos en Python y estadística."
              metrics={["Hasta 23 cuadrillas", "89% menor en TCO", "50% de ahorro por jornada"]}
              method={[
                {
                  label: "Pregunta",
                  text: "¿Conviene un equipo comercial único o equipar varias cuadrillas de laboratorio?",
                },
                {
                  label: "Datos",
                  text: "Documentación técnica del Municipio de Cuenca e investigación de mercado.",
                },
                {
                  label: "Método",
                  text: "ETL en Python, estimaciones de costo-beneficio y de costo total de propiedad.",
                },
                {
                  label: "Hallazgo",
                  text: "Hasta 23 cuadrillas equipables, 89% menos en costo total de propiedad.",
                },
              ]}
            />
          </Reveal>

          <Reveal>
            <CaseBlock
              title="Retail Cuenca, asistido por orquestación de agentes de IA y auditoría humana"
              status="En desarrollo"
              chips={["Alimentos y bebidas", "comparación de precios y marcas"]}
              line="El proyecto está en pausa: su valor hoy es la orquestación del método."
              metrics={["43% peso en la canasta básica"]}
              method={[
                {
                  label: "Pregunta",
                  text: "¿Cómo se comparan precios y marcas entre los retailers líderes de Cuenca?",
                },
                {
                  label: "Datos",
                  text: "Sin resultados publicables todavía; el benchmark con el que se empezó es provisional.",
                },
                {
                  label: "Método",
                  text: "Desarrollo guiado por especificaciones con agentes de IA y Human Gates.",
                },
                {
                  label: "Hallazgo",
                  text: "No aplica todavía: sin datos validados no hay hallazgo que reportar.",
                },
              ]}
              image={
                <EvidenceGallery
                  className="mt-5"
                  items={[
                    {
                      src: "/assets/retail/flujo-etl.svg",
                      width: 1600,
                      height: 900,
                      alt: "Diagrama del flujo ETL asistido por orquestación de agentes de IA con auditoría humana",
                      caption:
                        "Flujo de trabajo: ETL asistido por IA con auditoría humana.",
                      sizes: "340px",
                      thumbClassName: "w-[280px] sm:w-[340px]",
                      unoptimized: true,
                    },
                  ]}
                />
              }
            />
          </Reveal>
        </div>
      </Section>

      {/* 5. Automatizaciones */}
      <Section id="automatizaciones" bordered className="scroll-mt-20">
        <Reveal>
          <h2 className="t-h2">Automatizaciones</h2>
        </Reveal>

        <Reveal>
          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
            <Image
              src="/assets/kira/emblem.png"
              alt="Emblema de KIRA AI, agente de WhatsApp con IA"
              width={420}
              height={455}
              sizes="(max-width: 640px) 150px, 176px"
              className="h-auto w-[150px] shrink-0 sm:w-[176px]"
            />
            <div className="max-w-[70ch]">
              <h3 className="t-h3 text-ink">KIRA AI</h3>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <StatusTag tone="neutral">Etapa 4 de 6</StatusTag>
                <StepDots current={4} total={6} />
              </div>
              <p className="t-body text-ink-muted mt-3 text-pretty">
                Un agente de WhatsApp que convierte las conversaciones y
                operaciones de una microempresa en datos consultables.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {["n8n", "PostgreSQL", "JavaScript", "pgvector"].map((item) => (
                  <li key={item}>
                    <Chip>{item}</Chip>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <EvidenceGallery
            className="mt-6"
            items={[
              {
                src: "/assets/kira/workflow-n8n.png",
                width: 2400,
                height: 448,
                alt: "Flujo de trabajo del agente KIRA AI en n8n",
                caption: "Flujo de trabajo del agente KIRA AI en n8n.",
                sizes: "300px",
                thumbClassName: "w-[240px] sm:w-[300px]",
              },
            ]}
          />
        </Reveal>
      </Section>

      {/* 6. Certificaciones */}
      <Section id="certificaciones" bordered className="scroll-mt-20">
        <Reveal>
          <h2 className="t-h2">Certificaciones</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-10 md:grid-cols-2">
            {CERTS.map((cert) => (
              <div
                key={cert.name}
                className="flex items-baseline justify-between gap-4 border-b border-border py-3"
              >
                <span className="t-body-sm text-ink">{cert.name}</span>
                <span className="t-figure-sm tnum whitespace-nowrap text-ink-muted">
                  {cert.meta}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* 7. Contacto */}
      <Section id="contacto" bordered className="scroll-mt-20">
        <Reveal>
          <h2 className="t-h2">Contacto</h2>
          <p className="t-body text-ink-muted mt-3 max-w-[60ch]">
            Presencial o remota, con posibilidad de cambio de residencia.
          </p>
          <div className="mt-5 grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-3">
            <a
              href={MAILTO}
              className="t-body-sm t-link"
            >
              {SITE.email}
            </a>
            <a
              href={SITE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="t-body-sm t-link"
            >
              {SITE.linkedin}
            </a>
            <span className="t-body-sm text-ink-muted">{SITE.location}</span>
          </div>
          <div className="mt-6">
            <Button>Escríbeme</Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
