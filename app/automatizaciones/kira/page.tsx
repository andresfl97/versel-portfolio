import type { Metadata, Viewport } from "next";
import {
  ArrowsClockwise,
  Clock,
  FunnelSimple,
  SealCheck,
  Smiley,
  Trophy,
} from "@phosphor-icons/react/dist/ssr";
import {
  CtaBand,
  Eyebrow,
  Figure,
  Section,
  TextLink,
} from "@/components/ui";
import { CaseHero } from "@/components/case-hero";
import { Stepper } from "@/components/data-artifacts";
import { EvidenceItem } from "@/components/evidence";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "KIRA AI",
  description:
    "KIRA AI: un agente de WhatsApp que convierte las conversaciones y operaciones de una microempresa en datos consultables. Etapa 4 de 6.",
};

export const viewport: Viewport = {
  themeColor: "#0F1413",
  colorScheme: "dark",
};

const CAPABILITIES = [
  {
    icon: ArrowsClockwise,
    title: "Recurrencia de clientes",
    line: "Quiénes vuelven y con qué frecuencia.",
    span: "lg:col-span-4",
    tint: true,
  },
  {
    icon: Trophy,
    title: "Productos líderes",
    line: "Qué se pide más y qué se mueve menos.",
    span: "lg:col-span-4",
    tint: false,
  },
  {
    icon: Clock,
    title: "Temporalidad",
    line: "Patrones por día y hora.",
    span: "lg:col-span-4",
    tint: true,
  },
  {
    icon: FunnelSimple,
    title: "Embudo conversacional",
    line: "En qué punto se cae una conversación.",
    span: "lg:col-span-5",
    tint: false,
  },
  {
    icon: Smiley,
    title: "Sentimiento",
    line: "Cómo se sienten las conversaciones.",
    span: "lg:col-span-4",
    tint: true,
  },
  {
    icon: SealCheck,
    title: "Calidad de datos registrados",
    line: "Qué tan completo queda cada registro.",
    span: "lg:col-span-3",
    tint: false,
  },
] as const;

const STACK = [
  "Automatización: n8n",
  "Base de datos: PostgreSQL, con un modelo entidad-relación (ERD) completo",
  "Lógica: JavaScript",
  "Desarrollo asistido: OpenCode",
  "Recuperación de contexto: pgvector para RAG",
] as const;

const ROADMAP = [
  { label: "Etapa 1", phase: "Registro" },
  { label: "Etapa 2", phase: "Registro" },
  { label: "Etapa 3", phase: "CRM" },
  { label: "Etapa 4", phase: "CRM" },
  { label: "Etapa 5", phase: "Analítica de datos" },
  { label: "Etapa 6", phase: "Analítica de datos" },
] as const;

export default function KiraPage() {
  return (
    <>
      <CaseHero
        title="KIRA AI"
        lead="Un agente de WhatsApp con IA que convierte las conversaciones de una microempresa en datos consultables."
        meta={["n8n", "PostgreSQL", "JavaScript", "pgvector"]}
        statusLabel="Etapa 4 de 6"
        statusTone="neutral"
        artifact={
          <div className="rounded-[var(--radius-md)] border border-border bg-bg-elevated p-8">
            <Figure
              value="4/6"
              label="Avance en el roadmap propio (registro -> CRM -> analítica)."
              source="Documentación del proyecto KIRA AI"
              size="lg"
              accent
              valueClassName="text-[2.4rem] sm:text-[3rem] lg:text-[clamp(2.5rem,4.5vw,3.5rem)]"
            />
          </div>
        }
      />

      {/* 2. Pregunta y que es */}
      <Section bordered>
        <Reveal>
          <h2 className="t-h2 max-w-[28ch]">
            ¿Se puede convertir la conversación diaria de una microempresa en
            datos útiles sin cambiarle la forma de trabajar?
          </h2>
          <div className="t-body text-ink-muted mt-8 max-w-[65ch] space-y-5">
            <p>
              Un agente de WhatsApp con IA que convierte las conversaciones y
              operaciones de una microempresa en datos consultables.
            </p>
            <p>
              Lo que antes quedaba en chats sueltos pasa a ser información que
              se puede consultar y medir.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 3. Capacidades analiticas (bento) */}
      <Section bordered>
        <Reveal>
          <h2 className="t-h2">Capacidades analíticas</h2>
          <p className="t-body text-ink-muted mt-5 max-w-[60ch]">
            Estas capacidades están diseñadas en el modelo, no todas en
            producción.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-0 divide-y divide-border border-t border-border lg:grid-cols-12 lg:gap-6 lg:divide-y-0">
          {CAPABILITIES.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <Reveal
                key={cap.title}
                delay={index * 0.06}
                className={`${cap.span} border-border lg:border-t lg:pt-6`}
              >
                <div
                  className={`py-6 lg:py-6 ${
                    cap.tint
                      ? "lg:rounded-[var(--radius-md)] lg:bg-accent-soft lg:px-5"
                      : ""
                  }`}
                >
                  <Icon
                    size={24}
                    weight="regular"
                    aria-hidden="true"
                    className="text-accent"
                  />
                  <h3 className="t-h4 text-ink mt-4">{cap.title}</h3>
                  <p className="t-body-sm text-ink-muted mt-2 max-w-[40ch]">
                    {cap.line}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* 4. Arquitectura */}
      <Section bordered>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h3 className="t-h3 text-ink">Arquitectura</h3>
            <ul className="mt-6 divide-y divide-border border-t border-border">
              {STACK.map((item) => (
                <li key={item} className="t-body-sm text-ink-muted py-3">
                  {item}
                </li>
              ))}
            </ul>
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
              caption="Flujo de trabajo del agente KIRA AI en n8n."
            />
          </Reveal>
        </div>
      </Section>

      {/* 5. Roadmap (rail / stepper) */}
      <Section bordered>
        <Reveal>
          <Eyebrow>Roadmap</Eyebrow>
          <p className="t-body text-ink-muted max-w-[65ch]">
            El sistema avanza en un roadmap propio de seis etapas rumbo a
            registro, CRM y analítica de datos. Está en la etapa 4 de 6. Aún no
            hay resultados analíticos cerrados que reportar; el avance es de
            arquitectura y operación.
          </p>
        </Reveal>
        <div className="mt-12">
          <Stepper steps={ROADMAP} current={3} />
        </div>
      </Section>

      {/* 6. Evidencia */}
      <Section bordered>
        <Reveal>
          <h3 className="t-h3 text-ink">Evidencia</h3>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <EvidenceItem
              src="/assets/kira/kira-ai.png"
              width={1024}
              height={1536}
              alt="Identidad y concepto del agente KIRA AI"
              fit="cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              caption="Identidad y concepto del agente KIRA AI."
            />
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <EvidenceItem
              src="/assets/kira/chatbot-flujo.png"
              width={4414}
              height={8150}
              alt="Diagrama de flujo del chatbot de KIRA AI"
              fit="contain"
              sizes="(max-width: 1024px) 100vw, 58vw"
              frameClassName="max-h-[70vh] px-4 py-6"
              caption="Diagrama de flujo del chatbot de KIRA AI."
            />
          </Reveal>
        </div>
      </Section>

      {/* 7. CTA */}
      <CtaBand>
        <TextLink href="/">Volver al índice de casos</TextLink>
      </CtaBand>
    </>
  );
}
