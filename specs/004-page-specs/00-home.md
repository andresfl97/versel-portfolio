# 00 - Home

**Ruta:** `/` · **Tema:** claro (`data-theme="light"`) · **Fuente de copy:** `content.md` §1 y §7.

## Objetivo

Presentar en una sola pantalla el perfil analítico y ofrecer un índice curado hacia los tres
casos, las automatizaciones y los fundamentos, cerrando siempre en el único CTA de contacto.

---

## Secciones

### 1. Hero asimétrico

- **Familia:** hero asimétrico (texto izquierda `col-span-7`, tablero de cifras derecha `col-span-5`).
- **Artefacto:** tablero de tres cifras reales del caso ISP en Geist Mono `tabular-nums`:
  `CSAT 92.2%`, `Espera 1.9 min`, `Valoración 4.6/5`, cada una con glosa `body-sm` y fuente
  `caption` ("Informe de resultados del proyecto SONET"). Cifra protagonista `92.2%` en
  `figure-lg` `text-accent`. Sin sparkline (no hay serie temporal; no se inventa una).
- **Copy:**
  - Eyebrow (`label`): `Analista de Datos Junior · Ingeniero en Telecomunicaciones`
  - Headline (`display`): `Datos auditables antes de cualquier análisis.`
  - Subtexto (`lead`): `Perfilo y limpio datos antes de analizarlos: ETL, KPIs y agentes de IA.`
  - CTA (`Escríbeme`, mailto).
- **Eyebrow:** **sí** (1 de 2).
- **Layout:** `min-h-[100dvh]`, `pt-24` máximo (hero content no flota). Headline 6 palabras,
  `display` arranca en 40px, cabe en 2 líneas. Subtexto 13 palabras (≤ 20). CTA visible sin
  scroll. Máximo 4 elementos de texto (eyebrow, headline, subtexto, CTA): sin tagline extra,
  sin micro-strip de confianza.

### 2. Manifiesto

- **Familia:** manifiesto / pregunta (prosa editorial a una columna, máx. 65ch, sin headline).
- **Artefacto:** ninguno (banda de prosa). Borde superior hairline para separar del hero.
- **Copy:** párrafo de posicionamiento de `content.md` (§1, "Posicionamiento").
- **Eyebrow:** no.

### 3. Índice de casos

- **Familia:** índice editorial (filas asimétricas de ancho completo con hairlines, título grande
  a la izquierda y meta/estado a la derecha, sin tarjetas y sin numeración de orden).
- **Artefacto:** filas con cifra/meta en mono (`tabular-nums`) y etiqueta de estado. El estado
  "En desarrollo" de Retail se maqueta como texto, no como cifra.
- **Copy:**
  - Eyebrow (`label`): `Analítica`
  - Headline (`h2`): `Tres casos de estudio y una pieza de fundamentos.`
  - Fila 1: título `Sistema de medición de experiencia del usuario y soporte técnico`; meta
    `Looker Studio`, `Google Sheets`, `Business Intelligence` (spans por gap); estado `Completo`;
    una línea `ETL y KPIs en Looker Studio.`; enlace a `/casos/isp`.
  - Fila 2: título `Análisis de costos de un sistema GNSS RTK`; meta `Python · Estadística`;
    estado `Completo`; una línea `Análisis de costos en Python y estadística.`; enlace a
    `/casos/gnss-rtk`.
  - Fila 3: título `Retail Cuenca`; meta `Alimentos y bebidas · comparación de precios y marcas`;
    estado `En desarrollo`; una línea `Comparación de precios y marcas entre retailers líderes
    de Cuenca.`; enlace a `/casos/retail-cuenca`.
- **Eyebrow:** **sí** (2 de 2).

### 4. Automatizaciones (KIRA)

- **Familia:** split texto + artefacto (texto izquierda `col-span-5`, imagen derecha `col-span-7`).
- **Artefacto (imagen real):** `public/assets/kira/workflow-n8n.png` (panorámica 8192x1528,
  `object-contain`), alt "Flujo de trabajo del agente KIRA AI en n8n". Pie funcional fuera de
  la imagen en `caption`. Sin pills ni etiquetas sobre la imagen.
- **Copy:** headline (`h2`) `Automatizaciones`; cuerpo con la descripción de KIRA de
  `content.md` §1 ("Automatizaciones" / §5 "Qué es"): `KIRA AI: un agente de WhatsApp que
  convierte las conversaciones y operaciones de una microempresa en datos consultables
  (n8n, PostgreSQL, pgvector/RAG).`; enlace de texto `Ver KIRA AI` a `/automatizaciones/kira`.
- **Eyebrow:** no.

### 5. Fundamentos SQL

- **Familia:** bento (recuento exacto de celdas = 5 técnicas; al menos 2 celdas con variación
  visual real: una con micro-gráfica de conjuntos, una con bloque `code`, una con tinte
  `accent-soft`).
- **Artefacto:** cinco celdas, cada una con un fragmento `code` corto (Geist Mono) que
  representa la técnica. Micro-gráfica solo si organiza dato real (intersección de conjuntos
  con dos círculos de tinte, sin relleno saturado).
- **Copy:** headline (`h2`) `Fundamentos SQL`; cuerpo de `content.md` §4: `Consultar, cruzar y
  resumir datos con criterio, sobre bases sintéticas.` Celdas: `Joins y anti joins` ·
  `Set operators` · `Funciones de cadena, fecha y nulos` · `CASE WHEN` · `Window functions`.
- **Eyebrow:** no.

### 6. Banda de cierre (CTA)

- **Familia:** banda CTA (franja final, alineación izquierda, un solo botón).
- **Artefacto:** ninguno.
- **Copy:** headline (`h2`) `Escríbeme.`; CTA botón `Escríbeme` (mailto); alternativa de texto
  `linkedin.com/in/stalyn-flores97`. Un solo CTA de contacto.
- **Eyebrow:** no.

---

## Mobile (`< 768px`)

- **Hero:** una columna; eyebrow, headline, subtexto y CTA apilados; el tablero de cifras pasa
  debajo del CTA en columna (`grid-cols-1`), cifras a `figure` (no `figure-lg`) para no empujar
  el CTA fuera del viewport. `min-h-[100dvh]` se conserva; `pt-24` se reduce a `pt-16`.
- **Manifiesto:** `w-full`, `px-4`, sin columnas.
- **Índice de casos:** cada fila colapsa a bloque vertical (título, meta, estado, línea) con
  `divide-y`; el número de orden pasa a la izquierda del título en la misma línea.
- **KIRA (split):** `grid-cols-1`; la imagen pasa debajo del texto a ancho completo
  (`aspect-[5.4/1]` recortado a `aspect-video` en móvil, `object-contain`).
- **Bento SQL:** una columna, celdas apiladas con `divide-y`; el `code` con `overflow-x-auto`.
- **CTA:** una columna, botón a ancho natural (no `w-full` forzado).

## Estados

- **Imagen KIRA:** relación reservada (`aspect-video`) para CLS < 0.1; `loading="lazy"`;
  fallback a slot `public/assets/kira/workflow-n8n.png` si falta el asset. Sin spinner.
- **Datos:** estáticos (RSC), sin estado de carga ni error. Sin estados vacíos en Home.
- **404 / rutas de caso:** se resuelven en `not-found.tsx` global (fuera de esta página).
