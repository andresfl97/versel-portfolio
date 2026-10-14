import type { Metadata } from "next";
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
  title: "Caso ISP / SONET",
  description:
    "Sistema de medición de experiencia del usuario y soporte técnico: ETL, KPIs y dashboards en Looker Studio.",
};

const METRICS = [
  {
    value: "CSAT 92.2%",
    meaning: "Satisfacción del usuario",
    source: "Informe de resultados del proyecto (SONET)",
  },
  {
    value: "Tiempo de espera 1.9 min",
    meaning: "Tiempo medio de espera en soporte",
    source: "Informe de resultados del proyecto (SONET)",
  },
  {
    value: "Valoración 4.6/5",
    meaning: "Valoración de la atención",
    source: "Informe de resultados del proyecto (SONET)",
  },
  {
    value: "+2,000 clientes activos",
    meaning: "Cartera con visibilidad operativa por primera vez",
    source: "Proyecto SONET",
  },
  {
    value: "+200 encuestas centralizadas",
    meaning: "Volumen bruto procesado en el ETL",
    source: "Proyecto SONET (Google Forms -> Sheets)",
  },
  {
    value: "2 dashboards interactivos",
    meaning: "Tableros de KPI en Looker Studio",
    source: "Proyecto SONET",
  },
  {
    value: "Brecha de desinformación 10%",
    meaning:
      "Diferencia entre registro y realidad operativa; causa raíz de las quejas nocturnas",
    source: "Análisis exploratorio de +200 registros (SONET)",
  },
] as const;

const RAIL: RailNode[] = [
  {
    label: "Pregunta",
    detail:
      "¿Cómo medir la experiencia del usuario y el soporte técnico sin visibilidad operativa?",
  },
  {
    label: "Datos",
    detail:
      "Más de 200 encuestas telefónicas levantadas con Google Forms, sin normalizar: texto libre, escalas mixtas y categorías inconsistentes. Una cartera de más de 2,000 clientes activos como base de referencia. Datos de clientes anonimizados según la LOPDP.",
  },
  {
    label: "Método",
    detail: (
      <ol className="t-body-sm space-y-2">
        <li>Centralización de más de 200 encuestas telefónicas.</li>
        <li>
          Pipeline ETL: <span className="t-code tnum">Google Forms -&gt; Google Sheets -&gt; Looker Studio</span>.
        </li>
        <li>
          Limpieza y normalización en Google Sheets: unificar escalas,
          categorías y criterios de registro.
        </li>
        <li>Dos dashboards interactivos en Looker Studio.</li>
        <li>
          Reportes de KPI en tiempo real para la operación y la jefatura de
          agencia.
        </li>
      </ol>
    ),
  },
  {
    label: "Hallazgo",
    detail:
      "La cartera de más de 2,000 clientes activos obtuvo visibilidad operativa por primera vez. Sobre esa base, un análisis exploratorio de más de 200 registros identificó una brecha de desinformación del 10%.",
  },
  {
    label: "Decisión",
    detail:
      "La gerencia y la jefatura de agencia adoptaron el monitoreo como herramienta permanente. Se automatizó el flujo de reportes de KPI en tiempo real. El tablero aceleró decisiones estratégicas de la operación.",
  },
];

export default function IspPage() {
  return (
    <>
      <CaseHero
        title="Sistema de medición de experiencia del usuario y soporte técnico"
        lead="La operación se evaluaba con criterios dispersos y sin una vista en tiempo real."
        meta={["Looker Studio", "Google Sheets", "Business Intelligence"]}
        statusLabel="Completo"
        statusTone="accent"
        artifact={
          <div className="border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
            <Figure
              value="CSAT 92.2%"
              label="Satisfacción del usuario"
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
        }
      />

      {/* 2. Pregunta y contexto */}
      <Section bordered>
        <Reveal>
          <h2 className="t-h2 max-w-[26ch]">
            ¿Cómo medir la experiencia del usuario y el soporte técnico sin
            visibilidad operativa?
          </h2>
          <div className="t-body text-ink-muted mt-8 max-w-[65ch] space-y-5">
            <p>
              La operación de instalación, soporte y atención se evaluaba con
              criterios dispersos y sin una vista en tiempo real. La gerencia no
              tenía un instrumento único para seguir la experiencia del usuario
              ni la operación diaria.
            </p>
            <p>
              El objetivo fue construir una medición continua y convertirla en
              seguimiento permanente.
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
                Origen: más de 200 encuestas telefónicas levantadas con Google
                Forms.
              </li>
              <li className="t-body-sm text-ink-muted">
                Forma: respuestas sin normalizar (texto libre, escalas mixtas,
                categorías inconsistentes).
              </li>
              <li className="t-body-sm text-ink-muted">
                Base de referencia: una cartera de más de 2,000 clientes
                activos.
              </li>
              <li className="t-body-sm text-ink-muted">
                Tratamiento: datos de clientes anonimizados según la LOPDP. No
                se publican datos personales.
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="border-t border-border pt-8">
              <Figure
                value="+200"
                label="Encuestas telefónicas centralizadas. Volumen bruto procesado en el ETL."
                source="Proyecto SONET (Google Forms -> Sheets)"
                size="lg"
                accent
                valueClassName="text-[1.9rem] sm:text-[2.4rem] lg:text-[clamp(2rem,4vw,3rem)]"
              />
              <div className="mt-8 border-t border-border pt-6">
                <Figure
                  value="+2,000"
                  label="Clientes activos en la cartera de referencia."
                  source="Proyecto SONET"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 4. Metodo (rail) */}
      <Section bordered>
        <Reveal>
          <Eyebrow>Método</Eyebrow>
          <h2 className="t-h2 max-w-[24ch]">
            De encuestas dispersas a un sistema de medición continua.
          </h2>
        </Reveal>
        <div className="mt-12">
          <MethodRail nodes={RAIL} />
        </div>
      </Section>

      {/* 5. Hallazgo e impacto */}
      <Section bordered>
        <Reveal>
          <h3 className="t-h3 text-ink">Hallazgo</h3>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="mt-8 max-w-[65ch]">
            <Figure
              value="Brecha de desinformación 10%"
              label="Diferencia entre lo que el sistema registraba y la realidad operativa de la base de clientes."
              source="Análisis exploratorio de +200 registros (SONET)"
              size="lg"
              accent
              valueClassName="text-[1.75rem] sm:text-[2.2rem] lg:text-[clamp(2rem,4vw,3rem)]"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="t-body text-ink-muted mt-8 max-w-[65ch] space-y-5">
            <p>
              La cartera de más de 2,000 clientes activos obtuvo visibilidad
              operativa por primera vez. Sobre esa base, un análisis
              exploratorio de más de 200 registros identificó una brecha de
              desinformación del 10%: la diferencia entre lo que el sistema
              registraba y la realidad operativa de la base de clientes.
            </p>
            <p>
              Esa brecha apareció como la causa raíz del aumento de quejas de
              soporte en horario nocturno.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.14}>
          <ul className="mt-8 divide-y divide-border border-t border-border max-w-[65ch]">
            <li className="t-body-sm text-ink-muted py-4">
              La gerencia y la jefatura de agencia adoptaron el monitoreo como
              herramienta permanente.
            </li>
            <li className="t-body-sm text-ink-muted py-4">
              Se automatizó el flujo de reportes de KPI en tiempo real.
            </li>
            <li className="t-body-sm text-ink-muted py-4">
              El tablero aceleró decisiones estratégicas de la operación.
            </li>
          </ul>
        </Reveal>
      </Section>

      {/* 6. Cifras del caso */}
      <Section bordered>
        <Reveal>
          <h3 className="t-h3 text-ink">Cifras del caso</h3>
        </Reveal>
        <div className="mt-8 divide-y divide-border border-t border-border">
          {METRICS.map((metric) => (
            <Reveal key={metric.value}>
              <div className="grid grid-cols-1 gap-2 py-5 md:grid-cols-12 md:items-baseline md:gap-8">
                <div className="t-figure-sm tnum text-ink md:col-span-4">
                  {metric.value}
                </div>
                <div className="t-body-sm text-ink-muted md:col-span-5">
                  {metric.meaning}
                </div>
                <div className="t-caption text-ink-muted md:col-span-3">
                  {metric.source}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 7. Evidencia */}
      <Section bordered>
        <Reveal>
          <h3 className="t-h3 text-ink">Evidencia</h3>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <EvidenceItem
              src="/assets/isp/pipeline.png"
              width={2670}
              height={5065}
              alt="Diagrama del flujo Google Forms a Google Sheets a Looker Studio"
              fit="contain"
              sizes="(max-width: 1024px) 100vw, 40vw"
              frameClassName="max-h-[70vh] px-4 py-6"
              caption="Pipeline ETL: de Google Forms a Google Sheets y a Looker Studio."
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-8 lg:col-span-7">
            <Reveal>
              <EvidenceItem
                src="/assets/isp/informe-general.png"
                width={1411}
                height={1071}
                alt="Vista general del informe de KPIs del caso SONET"
                fit="cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
                caption="Vista general del informe de KPIs, Looker Studio."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <EvidenceItem
                src="/assets/isp/encuesta.png"
                width={1800}
                height={1351}
                alt="Encuesta de origen levantada con Google Forms"
                fit="cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
                caption="Encuesta de origen, levantada con Google Forms."
              />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 8. CTA */}
      <CtaBand>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href="mailto:ing.stalyn.flores@gmail.com"
            className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors duration-150 hover:text-accent-hover"
          >
            ing.stalyn.flores@gmail.com
          </a>
          <TextLink href="/">Volver al índice de casos</TextLink>
        </div>
      </CtaBand>
    </>
  );
}
