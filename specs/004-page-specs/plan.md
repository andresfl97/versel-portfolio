# 004 - Page Specs (plan)

## Pasos

1. Leer `content.md` (v3), `tokens.md` y `ASSETS.md`.
2. Definir la navegación global (nav de una línea, footer) y la estructura de rutas.
3. Por cada página, escribir una spec con: objetivo, secciones en orden, familia de layout de
   cada sección, artefacto (dato o imagen), copy de encabezados, y fallback móvil.
4. Definir los artefactos de dato: cómo se renderizan las cifras y micro-gráficas de cada caso.
5. Verificar el conteo de eyebrows y la variedad de familias de layout.
6. Correr el Pre-Flight sobre las specs (antes de implementar).

## Salida

`specs/004-page-specs/`:
- `pages.md` — navegación global, rutas y resumen de todas las páginas.
- `00-home.md`, `01-caso-isp.md`, `02-caso-gnss-rtk.md`, `03-caso-retail.md`,
  `04-kira.md`, `05-sobre-mi.md` — una spec detallada por página.

## Verificación

- [ ] Cada página tiene su archivo.
- [ ] Familias de layout variadas (>= 4 distintas en Home).
- [ ] Eyebrows <= ceil(secciones / 3).
- [ ] Un solo CTA por página.
- [ ] Mobile definido por sección.
