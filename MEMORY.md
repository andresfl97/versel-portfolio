# MEMORY.md

Estado operativo compacto del proyecto VerselPortfolio. No es un log de actividad.

## Estado actual

- **Fase:** COMPLETO. Sitio en producción (rediseño de una página).
- **Método:** Spec-Driven Development con Human Gates.
- **En vivo:** https://versel-portfolio-sigma.vercel.app
- **Repositorio:** https://github.com/andresfl97/versel-portfolio (público, rama `main`).
  Vercel lo auto-despliega al hacer push. Autor de commits: noreply de GitHub (su email real
  está privado en su cuenta).

## Gates humanos

```text
HG 001 - Foundation (agentes + SDD):        APPROVED
HG 002 - Contenido:                         APPROVED (v3, GNSS RTK incluido)
HG 003 - Sistema de diseño:                 APPROVED (tokens.md)
HG 004 - Specs de página:                   APPROVED (tema: todo claro)
HG 005 - Implementación:                    DONE (build + lint verde)
HG 006 - QA:                                CORREGIDO (1 crítico + 9 avisos cerrados)
HG 007 - Deploy en Vercel:                  LIVE (versel-portfolio-sigma.vercel.app)
HG 008 - Rediseño una página:               LIVE (compacto, stack con iconos, CTA x2)
```

## Estructura del sitio (rediseño 008)

- **Una sola página** `/` con secciones ancladas: `#perfil`, `#experiencia`, `#stack`,
  `#casos` (ISP/SONET, GNSS RTK, Retail Cuenca), `#automatizaciones` (KIRA), `#certificaciones`,
  `#contacto`. Se quitaron las rutas separadas (ahora 404).
- **Stack tecnológico** con 18 iconos de marca (simple-icons + 3 trazos locales para SQL Server,
  Power BI y Excel, retirados de v16). Reemplaza a Fundamentos SQL.
- CTA "Escríbeme" solo 2 veces (perfil + contacto). Certificaciones: 6 (incluye Anthropic y
  BIG school). Evidencia real en SONET (2 dashboards) y KIRA (logo central + flujo n8n).

## Verificación en vivo (rediseño 008)

- `/` = `200`; rutas antiguas (`/casos/*`, `/sobre-mi`) = `404`; favicon `200`.
- 7/7 secciones ancladas; 18 iconos de stack; 2 imágenes; 2 CTA "Escríbeme"; 0 em-dashes.
- Ambas certificaciones nuevas presentes; título y `theme-color` correctos.

## Pendiente / opcional (no bloquea)

- `og:image` (imagen al compartir el link): decidido omitir por el humano.
- Dominio propio (ej. `stalynflores.com`): disponible en 2 clics cuando quiera.

## QA (006) — resultado

- Informe: `specs/006-qa/report.md`. Pre-Flight 59/62; hallazgos 1 crítico + 9 avisos + 11 sugerencias.
- Corregido: contraste AA (quitada toda opacidad en texto), hero de Sobre mí a 4 elementos,
  `scroll-mt` del ancla, focus trap del menú móvil, `theme-color`, fallback de imágenes,
  z-index del diálogo, y sugerencias de bajo riesgo.
- Imágenes optimizadas (lado largo ≤ 2400). Pendiente humano: `og:image` (decidido omitir).

## Decisiones vigentes

| # | Decisión |
|---|---|
| 1 | Stack: Next.js (App Router, RSC) + Tailwind v4 + Motion + `next/font`. Deploy en Vercel. |
| 2 | Idioma: español neutro (Ecuador). |
| 3 | Sin enlaces a repositorios; cada pieza es autosuficiente. |
| 4 | Dirección de diseño: editorial analítico. Dials VARIANCE 6 / MOTION 5 / DENSITY 5. |
| 5 | Acento único: esmeralda `#0E7C66` (claro) / `#35C29B` (oscuro). |
| 6 | Tipografía: Geist + Geist Mono (`tabular-nums`). |
| 7 | **Tema: oscuro único** (dark) en todo el sitio. **Paleta neutra monocroma**, sin acento con matiz: negro `#000000`, blanco `#FFFFFF`, grises `#B3B3B3`/`#737373`/`#262626`. Sin neón, glow ni gradientes de color. Tipografía de contenido un paso arriba (body 17px). |
| 8 | Portafolio de una sola página: perfil, experiencia, stack, casos (ISP, GNSS, Retail), automatizaciones (KIRA), certificaciones y contacto. |

## Sistema de diseño (003)

- `specs/003-design-system/tokens.md`: design read, dials, tipografía, paleta, espaciado, radios,
  sombras, motion, z-index, mapeo Tailwind v4.
- Contraste verificado: light ink/bg 16.05 AAA, accent/bg 4.69 AA; dark accent/bg 8.27 AAA.
- Papel off-white verde-neutro `#F4F5F2` (evita el family beige/crema de "tell" de IA).

## Contenido (002)

- `specs/002-content/content.md`: perfil, caso ISP/SONET, Retail (en desarrollo), Stack
  tecnológico, KIRA AI, GNSS RTK y contacto.
- Sin "sesgo de captura" (solo métricas fuertes del CV); negocio generalizado a "una microempresa";
  sin periodo en el caso ISP.

## Datos personales

- Nombre: **Stalyn Andrés Flores Lalvay**
- Titular: **Analista de Datos Junior · Ingeniero en Telecomunicaciones**
- Email: ing.stalyn.flores@gmail.com · LinkedIn: linkedin.com/in/stalyn-flores97 · Cuenca, Ecuador
- Teléfono y RUC: **NO se publican**.

## Activos (staged en `public/assets/`)

- **En uso:** `home/portrait.jpg`, `retail/flujo-etl.svg` (diagrama del flujo ETL, humano + IA),
  `kira/emblem.png` (emblema transparente; "KIRA AI" es texto HTML),
  `kira/workflow-n8n.png` (flujo n8n, captura 2026-05-31), `isp/informe-rendimiento.png`,
  `isp/desempeno-cuadrillas.png`.
- **Difuminado aplicado (a pedido del humano):** en los dashboards de SONET se tapó la marca
  "LIVING net" y los nombres de contratistas (SONET, FINETIC, Hermano Miguel, Ricaurte,
  Totoracocha). Las métricas quedan visibles en la foto (no se mencionan en el texto).
- **Presentación:** la evidencia se muestra como miniaturas que abren un lightbox. La sección
  de KIRA usa el mismo formato y alineación que el resto del sitio.

## Restricciones

- Sin librerías de pago. Sin credenciales ni tokens en el repo.
- Anti-slop obligatorio: la skill `design-taste-frontend` y su Pre-Flight Check mandan.
- Nunca copiar credenciales, `.pem`/`.ppk` ni códigos de recuperación desde otros proyectos.

## Pendiente de entrada del usuario

- **Imágenes de SONET**: contienen datos sin anonimizar (marca del ISP y nombres reales) y las
  métricas retiradas. Opciones: sanear (recorte/blur, usar solo métricas fuertes), usar tal cual,
  o no usarlas. **No publicadas todavía.**
- **Nombre del negocio en KIRA**: el logo (ya publicado) muestra "Delicias Doña Mary", mientras el
  copy dice "una microempresa". Confirmar si se nombra o se mantiene genérico.

## Enlaces en el sitio

- Sección Stack: enlace "Ver el código en GitHub" → https://github.com/andresfl97/versel-portfolio.
