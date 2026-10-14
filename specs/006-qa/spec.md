# 006 - QA

## Estado

**OPEN** — en curso (Human Gate 006 pendiente).

## Propósito

Auditar la implementación (005) contra el sistema de diseño (003), las specs de página (004) y
las guías de interfaz, más accesibilidad, responsive y performance. Es el control previo al deploy.

## Alcance

- **Pre-Flight Check** de `design-taste-frontend` (sección 14), casilla por casilla.
- **`web-design-guidelines`** (Vercel): guías frescas desde su URL fuente, salida `archivo:línea`.
- **Accesibilidad:** semántica, alt, foco, skip-link, teclado, contraste WCAG AA.
- **Responsive:** colapso a una columna por sección; sin overflow horizontal.
- **Performance:** Core Web Vitals (LCP < 2.5s, INP < 200ms, CLS < 0.1) si hay herramienta.
- **Estados:** loading / empty / error donde aplique.
- **Metadatos:** title, description. (`og:image` diferido por decisión del humano.)

## Fuera de alcance

- Deploy (007).
- Cambios de diseño o copy (los propone, no los ejecuta).

## Entradas

- `AGENTS.md`, `MEMORY.md`.
- `specs/003-design-system/tokens.md`, `specs/004-page-specs/`, `specs/002-content/content.md`.
- El código en `app/`, `components/`, `lib/`.

## Criterios de aceptación

- [ ] Informe con cada hallazgo: ubicación (`archivo:línea`), severidad y arreglo.
- [ ] Pre-Flight completo (casilla por casilla).
- [ ] Auditoría `web-design-guidelines`.
- [ ] Contrastes AA verificados en el código real.
- [ ] Cero em-dashes visibles confirmado.
- [ ] Performance medida o declarada como no medible con motivo.
- [ ] Aprobación humana (HG 006).

## Riesgos

| Riesgo | Mitigación |
|---|---|
| Deriva anti-slop no detectada | Pre-Flight mecánico |
| Falsa sensación de "todo bien" | Cada hallazgo con evidencia |
| Lighthouse no disponible | Declararlo; no inventar métricas |
