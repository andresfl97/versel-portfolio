# MEMORY.md

Estado operativo compacto del proyecto VerselPortfolio. No es un log de actividad.

## Estado actual

- **Fase:** 007-deploy (QA corregido y verificado; esperando OK para publicar).
- **Método:** Spec-Driven Development con Human Gates.
- **App construida:** Next.js 16.4 (Turbopack), 7 rutas + 404, `build` y `lint` en verde.

## Gates humanos

```text
HG 001 - Foundation (agentes + SDD):        APPROVED
HG 002 - Contenido:                         APPROVED (v3, GNSS RTK incluido)
HG 003 - Sistema de diseño:                 APPROVED (tokens.md)
HG 004 - Specs de página:                   APPROVED (tema: todo claro)
HG 005 - Implementación:                    DONE (build + lint verde)
HG 006 - QA:                                CORREGIDO (1 crítico + 9 avisos cerrados)
HG 007 - Deploy en Vercel:                  PENDING (esperando OK)
```

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
| 7 | **Tema: todo claro** en todas las páginas (modo oscuro disponible, sin usar por página). |
| 8 | Contenido: 3 casos (ISP/SONET, GNSS RTK, Retail Cuenca en desarrollo), Fundamentos SQL, Automatizaciones (KIRA AI), Sobre mí. |

## Piezas y rutas

- `/` Home (índice curado) · `/casos/isp` · `/casos/gnss-rtk` · `/casos/retail-cuenca`
- `/automatizaciones/kira` · `/sobre-mi`

## Sistema de diseño (003)

- `specs/003-design-system/tokens.md`: design read, dials, tipografía, paleta, espaciado, radios,
  sombras, motion, z-index, mapeo Tailwind v4.
- Contraste verificado: light ink/bg 16.05 AAA, accent/bg 4.69 AA; dark accent/bg 8.27 AAA.
- Papel off-white verde-neutro `#F4F5F2` (evita el family beige/crema de "tell" de IA).

## Contenido (002) — v3

- `specs/002-content/content.md` (v3): Home, caso ISP/SONET, Retail (en desarrollo), Fundamentos
  SQL, KIRA AI, GNSS RTK y Sobre mí/Contacto.
- Sin "sesgo de captura" (solo métricas fuertes del CV); negocio generalizado a "una microempresa";
  sin periodo en el caso ISP.

## Datos personales

- Nombre: **Stalyn Andrés Flores Lalvay**
- Titular: **Analista de Datos Junior · Ingeniero en Telecomunicaciones**
- Email: ing.stalyn.flores@gmail.com · LinkedIn: linkedin.com/in/stalyn-flores97 · Cuenca, Ecuador
- Teléfono y RUC: **NO se publican**.

## Activos (staged en `public/assets/`)

- Home: `home/portrait.jpg` (foto profesional; 413x532).
- ISP/SONET: `isp/pipeline.png`, `isp/informe-general.png`, `isp/encuesta.png`
  (`isp/contratistas.png` opcional).
- KIRA AI: `kira/workflow-n8n.png`, `kira/chatbot-flujo.png`, `kira/kira-ai.png`.
- Retail: `retail/orquestacion-ia.svg`.

## Restricciones

- Sin librerías de pago. Sin credenciales ni tokens en el repo.
- Anti-slop obligatorio: la skill `design-taste-frontend` y su Pre-Flight Check mandan.
- Nunca copiar credenciales, `.pem`/`.ppk` ni códigos de recuperación desde otros proyectos.

## Pendiente de entrada del usuario

- Nada bloqueante. Capturas de Retail Cuenca, si algún día se retoma el caso.
