# 005 - Implementation

## Estado

**OPEN** — en curso (Human Gate 005 pendiente).

## Propósito

Construir la aplicación Next.js del portafolio, fiel a los tokens (003) y a las specs de página (004).

## Alcance

- Scaffold del proyecto: `package.json`, `next.config`, `tsconfig`, `postcss.config` (Tailwind v4).
- Tokens en Tailwind v4 (`@theme`) desde `specs/003-design-system/tokens.md`.
- Layout global: `app/layout.tsx`, `app/globals.css`, `next/font` (Geist + Geist Mono),
  navegación de una línea y footer.
- Componentes de artefacto de dato (cifra mono `tabular-nums`, micro-gráficas, rail de método).
- Las 6 páginas de `specs/004-page-specs/`:
  `/`, `/casos/isp`, `/casos/gnss-rtk`, `/casos/retail-cuenca`, `/automatizaciones/kira`, `/sobre-mi`.
- Uso de las imágenes reales de `public/assets/` con `next/image`.

## Fuera de alcance

- QA (006) y deploy (007).

## Reglas

- Server Components por defecto; `'use client'` solo en hojas con Motion.
- `min-h-[100dvh]`, nunca `h-screen`. `tabular-nums` en toda cifra.
- Un solo tema (claro) por página. Un solo acento. Un solo sistema de radio.
- Cero em-dashes visibles. Sin capturas falsas con `<div>`.
- Verificar `package.json` antes de importar cualquier librería.

## Criterios de aceptación

- [ ] `npm run build` pasa.
- [ ] `npm run lint` limpio.
- [ ] Las 6 rutas renderizan.
- [ ] Fiel a tokens y a las specs de página.
- [ ] Responsive (colapso a una columna < 768px).
- [ ] Imágenes reales cargando con alt.
- [ ] Aprobación humana (HG 005).

## Riesgos

| Riesgo | Mitigación |
|---|---|
| Build roto | Correr build y lint antes de reportar |
| Deriva de diseño | Solo tokens de 003 |
| Contenido inventado | Solo copy de `content.md` |
| Slots de imagen sin resolver | Fallback a un placeholder marcado, sin fake UI |
