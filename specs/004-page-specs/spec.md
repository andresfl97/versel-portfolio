# 004 - Page Specs

## Estado

**OPEN** — en curso (Human Gate 004 pendiente).

## Propósito

Especificar cada página del sitio para que `frontend-builder` implemente sin improvisar:
secciones, familia de layout de cada bloque, artefacto de dato o imagen, y el copy exacto.

## Alcance

Páginas confirmadas:

1. **Home** (`/`) — hero, índice de casos, automatizaciones, fundamentos SQL, CTA.
2. **Caso ISP/SONET** (`/casos/isp`).
3. **Caso GNSS RTK** (`/casos/gnss-rtk`).
4. **Caso Retail Cuenca** (`/casos/retail-cuenca`).
5. **Automatizaciones: KIRA AI** (`/automatizaciones/kira`).
6. **Sobre mí y contacto** (`/sobre-mi`).

## Fuera de alcance

- Implementación (005).
- QA (006) y deploy (007).

## Entradas

- `specs/002-content/content.md` (v3) — copy y métricas.
- `specs/003-design-system/tokens.md` — sistema de diseño.
- `docs/ASSETS.md` — imágenes disponibles.
- Skills `design-taste-frontend` y `portfolio-case-study`.

## Reglas por página

- Familia de layout distinta entre secciones: no repetir la misma dos veces seguidas.
- Máximo 1 eyebrow por cada 3 secciones (el hero cuenta como 1).
- Hero que cabe en el viewport: headline <= 2 líneas, subtexto <= 20 palabras, CTA visible.
- Un solo CTA de contacto por página.
- Cifras en `tabular-nums`; artefactos de dato con color de acento, sin pistas rellenas.
- Imágenes reales (`next/image`); sin capturas falsas ni `<div>` que finjan UI.
- Un solo tema por página (claro/oscuro, sin invertir a mitad).
- Mobile: colapso explícito a una columna por sección.

## Criterios de aceptación

- [ ] Spec por cada una de las 6 páginas.
- [ ] Cada sección con su familia de layout y su artefacto definido.
- [ ] Copy mapeado desde `content.md` sin inventar.
- [ ] Estados (loading/empty/error) donde apliquen.
- [ ] Cumple el Pre-Flight de `design-taste-frontend`.
- [ ] Aprobación humana (HG 004).

## Riesgos

| Riesgo | Mitigación |
|---|---|
| Secciones repetitivas | Familia de layout distinta por sección |
| Exceso de eyebrows | Límite 1 por cada 3 secciones |
| Hero que desborda | Headline <= 2 líneas, tamaño planificado |
| Cifras sin respaldo | Solo cifras de `content.md` |
