# VerselPortfolio

Portafolio profesional de **analista de datos**, construido con Next.js (App Router,
Server Components) + Tailwind v4 y desplegado en **Vercel**.

Es un producto editorial: cada proyecto se presenta como un caso de estudio
autosuficiente (pregunta, datos, método, hallazgo, decisión), no como una galería de
capturas. El criterio de diseño y el anti-slop viven en la skill `design-taste-frontend`.

## Contenido

- **Analítica**
  - Caso: Monitoreo operativo y CX en un ISP (ETL + Looker, hallazgo de sesgo de captura).
  - Caso en desarrollo: Retail Cuenca, comparación de precios y marcas (alimentos y bebidas).
  - Fundamentos SQL (pieza breve de competencias).
- **Automatizaciones**: KIRA AI (agente conversacional + analítica).
- Home curada y página de contacto.

Idioma: español neutro (Ecuador). Sin enlaces a repositorios.

## Cómo trabajar en este repo

Este proyecto es **spec-driven** y se orquesta con agentes de opencode:

- El agente principal es **`portfolio-master`** (Tab para seleccionarlo).
- Los subagentes (`content-curator`, `design-director`, `frontend-builder`,
  `qa-reviewer`, `deploy-ops`) se invocan desde el principal.
- El contrato operativo está en [AGENTS.md](./AGENTS.md); el estado en
  [MEMORY.md](./MEMORY.md); el plan en [specs/](./specs).

```bash
npm install
npm run dev      # desarrollo
npm run build    # build de producción
npm run lint     # lint
```

## Documentación

- `AGENTS.md` — contrato operativo (agentes, SDD, gates, stack).
- `MEMORY.md` — estado operativo actual.
- `docs/ASSETS.md` — manifest de imágenes requeridas.
- `specs/` — especificaciones SDD (`spec.md`, `plan.md`, `tasks.md`).
