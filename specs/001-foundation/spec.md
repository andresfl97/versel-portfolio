# 001 - Project Foundation

## Estado

**OPEN** — bootstrap en revisión (Human Gate 001 pendiente de aprobación).

## Propósito

Establecer la base arquitectónica, de gobernanza y de proceso para el portafolio de analista
de datos: agentes, skills, SDD, stack y reglas de diseño y contenido.

## Alcance

- Estructura del proyecto.
- `opencode.json`, `AGENTS.md`, `MEMORY.md`, `README.md`.
- Agentes: `portfolio-master` (primary) y cinco subagentes.
- Skills de proyecto: `portfolio-case-study`, `vercel-deploy`.
- SDD: carpetas `specs/` y `docs/`.
- Reglas de diseño (anti-slop) y de contenido (datos reales, sin enlaces a repos).

## Fuera de alcance

- Redacción de casos (002).
- Sistema de diseño y tokens (003).
- Especificación de páginas (004).
- Implementación de la app Next.js (005).
- QA (006) y deploy (007).

## Decisiones establecidas

| # | Decisión | Justificación |
|---|---|---|
| 1 | Next.js (App Router, RSC) + Tailwind v4 + Motion | Estándar, óptimo para Vercel, alineado con la skill de diseño |
| 2 | Español neutro (Ecuador) | Mercado objetivo |
| 3 | Sin enlaces a repositorios | Cada pieza autosuficiente |
| 4 | Dirección editorial analítico; dials 6/5/5 | Legibilidad y credibilidad para hiring managers |
| 5 | Acento único esmeralda `#0E7C66` | Sobriedad "de dato"; evita el morado IA |
| 6 | Geist Display + Geist + Geist Mono | Familiaridad técnica sin caer en Inter |
| 7 | Anti-slop obligatorio vía `design-taste-frontend` | Requisito explícito del usuario |
| 8 | Contenido: 2 casos analíticos + SQL breve + KIRA AI | Decisión del usuario |
| 9 | Skills de diseño globales (no se recrean) | Ya existen en `~/.agents/skills/` |

## Estructura creada

```text
VerselPortfolio/
├─ AGENTS.md          MEMORY.md          README.md
├─ opencode.json      .gitignore
├─ .opencode/
│  ├─ agent/          portfolio-master · content-curator · design-director
│  │                  · frontend-builder · qa-reviewer · deploy-ops
│  └─ skill/          portfolio-case-study/ · vercel-deploy/
├─ specs/001-foundation/{spec,plan,tasks}.md
├─ docs/ASSETS.md
└─ public/assets/     (slots de imagen)
```

## Human Gates

```
HG 001 - Foundation        (este spec)
HG 002 - Selección de contenido
HG 003 - Sistema de diseño
HG 004 - Specs de página
HG 005 - Implementación
HG 006 - QA
HG 007 - Deploy
```

## Criterios de aceptación

- [x] `opencode.json` válido y `default_agent = portfolio-master`.
- [x] `AGENTS.md` establece reglas de agentes, SDD, diseño, contenido y seguridad.
- [x] `MEMORY.md` registra el estado inicial.
- [x] Los seis agentes existen con `mode` y `permission` correctos.
- [x] Las dos skills de proyecto existen con frontmatter válido.
- [x] Specs 001 creado (`spec.md`, `plan.md`, `tasks.md`).
- [x] `docs/ASSETS.md` lista las imágenes requeridas.
- [ ] Aprobación humana del bootstrap (HG 001).

## Riesgos

| Riesgo | Mitigación |
|---|---|
| Implementación prematura | SDD + Human Gates por etapa |
| Contenido inventado | `content-curator` atado a datos reales verificables |
| Deriva de diseño ("slop") | Pre-Flight Check obligatorio de `design-taste-frontend` |
| Fuga de secretos | `.gitignore` + no revertir el token en claro de otro proyecto |
| Imágenes ausentes | slots explícitos + `docs/ASSETS.md` |

## Próximos pasos

1. Aprobación humana del bootstrap (HG 001).
2. Iniciar `002-content` (selección y redacción con `content-curator`).
