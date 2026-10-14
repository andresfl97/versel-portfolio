# 003 - Design System

## Estado

**OPEN** — en curso (Human Gate 003 pendiente).

## Propósito

Definir el sistema de diseño del portafolio (design read, dials y tokens) para que las specs de
página (004) y la implementación (005) no improvisen nada.

## Alcance

- **Design read** (una línea, formato de `design-taste-frontend` sección 0.B).
- **Dials** confirmados: `DESIGN_VARIANCE 6`, `MOTION_INTENSITY 5`, `VISUAL_DENSITY 5`.
- **Tokens:** escala tipográfica, paleta (claro/oscuro), espaciado, radios, sombras, escala de
  z-index, curvas de motion.
- **Mapeo a Tailwind v4** (`@theme` / variables CSS).
- **Reglas visuales de marca:** acento esmeralda `#0E7C66`, Geist Display/Geist/Geist Mono,
  un solo sistema de radio, un solo tema por página.

## Fuera de alcance

- Specs por página (004).
- Implementación de componentes (005).
- QA (006).

## Entradas

- `specs/002-content/content.md` (contenido y tipos de artefacto por pieza).
- `docs/ASSETS.md` (imágenes disponibles y su formato).
- Skill `design-taste-frontend` (autoridad anti-slop).

## Decisiones fijadas por el humano

| # | Decisión |
|---|---|
| 1 | Dirección: editorial analítico. |
| 2 | Dials 6 / 5 / 5. |
| 3 | Acento único esmeralda `#0E7C66`. |
| 4 | Tipografía Geist Display + Geist + Geist Mono. |
| 5 | Tema dual claro/oscuro (un solo tema por página). |
| 6 | Stack: Next.js RSC + Tailwind v4 + Motion. |

## Criterios de aceptación

- [ ] Design read declarado.
- [ ] Tokens completos en `specs/003-design-system/tokens.md`.
- [ ] Paleta claro/oscuro con contraste WCAG AA verificado (héroe AAA).
- [ ] Mapeo a Tailwind v4 listo para implementar.
- [ ] Cumple el Pre-Flight de `design-taste-frontend` en lo que aplica al sistema.
- [ ] Aprobación humana (HG 003).

## Riesgos

| Riesgo | Mitigación |
|---|---|
| Deriva hacia "slop" | Pre-Flight Check obligatorio |
| Más de un acento | Acento único bloqueado |
| Contraste insuficiente | Verificación WCAG AA en ambos temas |
| Serif por defecto | Sans (Geist) obligatorio |
