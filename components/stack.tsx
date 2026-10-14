import * as simpleIcons from "simple-icons";
import { EXTRA_GLYPHS } from "@/lib/stack-extra";

type BrandGlyph = { title: string; path: string; hex: string };

// Indice dinamico: si un slug no existe en el paquete, cae a chip (nunca rompe el build).
const LIBRARY = simpleIcons as unknown as Record<string, BrandGlyph | undefined>;

const STACK_GROUPS: {
  group: string;
  items: { name: string; slug: string }[];
}[] = [
  {
    group: "Datos y consultas",
    items: [
      { name: "SQL Server", slug: "siMicrosoftsqlserver" },
      { name: "PostgreSQL", slug: "siPostgresql" },
      { name: "MySQL", slug: "siMysql" },
      { name: "Python", slug: "siPython" },
      { name: "pandas", slug: "siPandas" },
    ],
  },
  {
    group: "BI y visualización",
    items: [
      { name: "Power BI", slug: "siPowerbi" },
      { name: "Looker Studio", slug: "siLooker" },
      { name: "Google Sheets", slug: "siGooglesheets" },
      { name: "Excel", slug: "siMicrosoftexcel" },
    ],
  },
  {
    group: "Automatización e IA",
    items: [
      { name: "n8n", slug: "siN8n" },
      { name: "Claude", slug: "siClaude" },
      { name: "DeepSeek", slug: "siDeepseek" },
      { name: "Copilot", slug: "siGithubcopilot" },
      { name: "Gemini", slug: "siGooglegemini" },
    ],
  },
  {
    group: "Desarrollo",
    items: [
      { name: "Git", slug: "siGit" },
      { name: "GitHub", slug: "siGithub" },
      { name: "Jupyter", slug: "siJupyter" },
      { name: "JavaScript", slug: "siJavascript" },
    ],
  },
];

function BrandMark({ name, slug }: { name: string; slug: string }) {
  const glyph = LIBRARY[slug];
  const path =
    glyph && typeof glyph.path === "string" ? glyph.path : EXTRA_GLYPHS[slug];

  if (!path) {
    return (
      <span className="t-body-sm inline-flex items-center rounded-[var(--radius-sm)] border border-border px-2.5 py-1.5 text-ink-muted">
        {name}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2">
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        aria-hidden="true"
        className="shrink-0 text-ink"
      >
        <path d={path} fill="currentColor" />
      </svg>
      <span className="t-body-sm text-ink">{name}</span>
    </span>
  );
}

export function Stack({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 ${className}`}
    >
      {STACK_GROUPS.map((group) => (
        <div key={group.group}>
          <h3 className="t-h4 text-ink">{group.group}</h3>
          <ul className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
            {group.items.map((item) => (
              <li key={item.name}>
                <BrandMark name={item.name} slug={item.slug} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
