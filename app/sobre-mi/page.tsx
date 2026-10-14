import type { Metadata } from "next";
import {
  Button,
  CtaBand,
  Eyebrow,
  Figure,
  Section,
} from "@/components/ui";
import { EvidenceItem } from "@/components/evidence";
import { Reveal } from "@/components/reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Stalyn Andrés Flores Lalvay: trayectoria, habilidades y certificaciones. Cuenca, Ecuador.",
};

const SKILLS = [
  {
    group: "SQL",
    mono: true,
    items:
      "SQL Server, PostgreSQL, views, procedimientos almacenados, modelado relacional y ERD.",
  },
  { group: "Excel", mono: true, items: "tablas dinámicas, Power Query." },
  { group: "Python", mono: true, items: "pandas, POO." },
  { group: "Power BI", mono: true, items: "DAX, KPIs." },
  {
    group: "Automatización y BI",
    mono: true,
    items: "n8n, Looker Studio, Google Sheets.",
  },
  {
    group: "Agentes de IA",
    mono: true,
    items:
      "Claude, DeepSeek, Copilot, Gemini; orquestación de sub-agentes en procesos ETL.",
  },
  {
    group: "Idiomas",
    mono: false,
    items: "español nativo, inglés B1 (lectura técnica).",
  },
  {
    group: "Personales",
    mono: false,
    items:
      "pensamiento analítico, comunicación técnica y no técnica, trabajo colaborativo, storytelling.",
  },
] as const;

const CERTS = [
  {
    name: "SQL Bootcamp: Zero to Hero",
    meta: "Udemy · Sep 2026",
  },
  {
    name: "Meta Data Analyst Professional Certificate",
    meta: "Coursera · May 2026",
  },
  {
    name: "Power BI Intermedio y Excel Avanzado",
    meta: "Soluciones Integrales Expertos · May 2026",
  },
  {
    name: "Build Intelligent Agents Using DeepSeek & N8N",
    meta: "Coursera · Mar 2026",
  },
] as const;

export default function SobreMiPage() {
  return (
    <>
      {/* 1. Hero de perfil */}
      <section className="flex min-h-[88dvh] items-center">
        <div className="container-editorial w-full pt-16 pb-16 md:pt-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-7">
              <Eyebrow>{SITE.title}</Eyebrow>
              <h1 className="t-h1 max-w-[18ch] text-balance text-ink">
                {SITE.name}
              </h1>
              <p className="t-lead text-ink-muted mt-5 max-w-[42ch] text-pretty">
                Presencial o remota, con posibilidad de cambio de residencia.
              </p>
              <div className="mt-8">
                <Button>Escríbeme</Button>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-5">
              <EvidenceItem
                src="/assets/home/portrait.jpg"
                width={800}
                height={1000}
                alt="Retrato de Stalyn Andrés Flores Lalvay"
                fit="cover"
                priority
                ratio="4 / 5"
                sizes="(max-width: 1024px) 90vw, 38vw"
                frameClassName="mx-auto max-w-[420px]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Perfil */}
      <Section bordered>
        <Reveal>
          <p className="t-lead max-w-[65ch] text-ink">
            Ingeniero en Telecomunicaciones con interés en análisis de datos,
            con más de un año y medio de experiencia operativa y de atención a
            clientes. Convertí encuestas no estructuradas en KPIs que la
            gerencia adoptó, priorizo la calidad y el perfilado de los datos
            antes de analizarlos, y hoy desarrollo agentes de IA a nivel de
            orquestación para automatizar procesos ETL.
          </p>
        </Reveal>
      </Section>

      {/* 3. Trayectoria (timeline) */}
      <Section bordered>
        <Reveal>
          <h2 className="t-h2">Experiencia</h2>
        </Reveal>
        <div className="mt-12 border-l border-border pl-6 md:pl-8">
          <Reveal>
            <p className="t-figure-sm tnum text-ink-muted">
              Agosto 2024 - Marzo 2026
            </p>
            <h3 className="t-h3 text-ink mt-3">SONET C.L., Cuenca</h3>
            <div className="mt-5">
              <Figure
                value="~40 incidencias mensuales"
                label="Atención mensual, traduciendo conceptos complejos a distintos departamentos."
                source="Experiencia en SONET C.L."
                accent
              />
            </div>
            <p className="t-body text-ink-muted mt-6 max-w-[65ch]">
              Alrededor de 40 incidencias mensuales atendidas, traduciendo
              conceptos complejos a distintos departamentos. Reportes de
              incidencias y casos críticos con hallazgos clave. Gestión de
              inventario de insumos y equipos con registro de consumo mensual
              para anticipar desabastecimiento.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* 4. Habilidades (ficha agrupada) */}
      <Section bordered>
        <Reveal>
          <h2 className="t-h2">Habilidades</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-0 md:grid-cols-2">
          {SKILLS.map((skill) => (
            <div
              key={skill.group}
              className="border-t border-border py-5"
            >
              <h3 className="t-h4 text-ink">{skill.group}</h3>
              <p
                className={`text-ink-muted mt-2 ${
                  skill.mono ? "t-code" : "t-body-sm"
                }`}
              >
                {skill.items}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. Certificaciones (grid 2 col) */}
      <Section bordered>
        <Reveal>
          <h2 className="t-h2">Certificaciones</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-0 border-t border-border md:grid-cols-2 md:gap-x-12">
          {CERTS.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col gap-2 border-b border-border py-6"
            >
              <h3 className="t-h4 text-ink">{cert.name}</h3>
              <p className="t-figure-sm tnum text-ink-muted">{cert.meta}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 6. Disponibilidad y contacto */}
      <CtaBand>
        <ul className="space-y-1.5">
          <li>
            <a
              href={`mailto:${SITE.email}`}
              className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors duration-150 hover:text-accent-hover"
            >
              {SITE.email}
            </a>
          </li>
          <li>
            <a
              href={SITE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors duration-150 hover:text-accent-hover"
            >
              {SITE.linkedin}
            </a>
          </li>
          <li>{SITE.location}</li>
        </ul>
      </CtaBand>
    </>
  );
}
