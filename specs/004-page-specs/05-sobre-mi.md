# 05 - Sobre mí y contacto

**Ruta:** `/sobre-mi` · **Tema:** claro (`data-theme="light"`) · **Fuente de copy:** `content.md` §7.
**Estado:** página completa.

## Objetivo

Cerrar el recorrido del reclutador con la trayectoria, las habilidades y las certificaciones, y
dejar un único camino de contacto.

---

## Secciones

### 1. Hero de perfil

- **Familia:** hero asimétrico (texto izquierda `col-span-7`, retrato derecha `col-span-5`).
- **Artefacto (imagen real):** retrato en `public/assets/home/portrait.jpg` (800x1000, 4:5,
  `object-cover`), `priority` (LCP), alt "Retrato de Stalyn Andrés Flores Lalvay". Si el asset
  aún no existe, se deja el slot explícito (`public/assets/home/portrait.jpg`), nunca un `<div>`
  que finja una foto.
- **Copy:**
  - Eyebrow (`label`): `Analista de Datos Junior · Ingeniero en Telecomunicaciones`
  - H1 (`h1`): `Stalyn Andrés Flores Lalvay`
  - Subtexto (`lead`): `Presencial o remota, con posibilidad de cambio de residencia.` (9 palabras)
  - Meta mono (`figure-sm`): `Cuenca, Ecuador · ing.stalyn.flores@gmail.com`
  - CTA: `Escríbeme`
- **Eyebrow:** **sí** (1 de 2).
- **Layout:** `min-h-[88dvh]`, `pt-24` máximo. Sin teléfono ni RUC (decisión de `content.md`).

### 2. Perfil

- **Familia:** manifiesto / pregunta (una columna, 65ch, sin headline separado).
- **Artefacto:** ninguno.
- **Copy:** párrafo de "Perfil" de `content.md` §7 (Telecomunicaciones, más de un año y medio de
  experiencia operativa y de atención a clientes, encuestas convertidas en KPIs, foco en calidad
  y perfilado, agentes de IA a nivel de orquestación).
- **Eyebrow:** no.

### 3. Trayectoria

- **Familia:** timeline (secuencia vertical con hitos fechados; fechas en mono `tabular-nums`).
- **Artefacto:** la cifra `~40 incidencias mensuales` en `figure` `text-accent`; rango
  `Agosto 2024 - Marzo 2026` en `figure-sm`.
- **Copy:** headline (`h2`) `Experiencia`; entrada: `SONET C.L., Cuenca (Agosto 2024 - Marzo 2026)`;
  cuerpo de `content.md` §7: alrededor de 40 incidencias mensuales atendidas, traducción de
  conceptos complejos entre departamentos, reportes de incidencias y casos críticos, y gestión de
  inventario de insumos y equipos con registro de consumo mensual.
- **Eyebrow:** no.

### 4. Habilidades

- **Familia:** ficha agrupada (grupos con hairline y espacio negativo, sin tarjetas).
- **Artefacto:** nombres técnicos en mono cuando son tecnologías; sin barras ni porcentajes (no
  hay nivel cuantificado). Nada de track relleno.
- **Copy:** headline (`h2`) `Habilidades`; grupos de `content.md` §7: `SQL` (SQL Server,
  PostgreSQL, views, procedimientos almacenados, modelado relacional y ERD) · `Excel` (tablas
  dinámicas, Power Query) · `Python` (pandas, POO) · `Power BI` (DAX, KPIs) · `Automatización y
  BI` (n8n, Looker Studio, Google Sheets) · `Agentes de IA` (Claude, DeepSeek, Copilot, Gemini;
  orquestación de sub-agentes en procesos ETL) · `Idiomas` (español nativo, inglés B1 de lectura
  técnica) · `Personales` (pensamiento analítico, comunicación técnica y no técnica, trabajo
  colaborativo, storytelling).
- **Eyebrow:** no.

### 5. Certificaciones

- **Familia:** grid 2 col (rejilla de dos columnas; en móvil una).
- **Artefacto:** cada certificación con su fecha en `figure-sm` (mono `tabular-nums`).
- **Copy:** headline (`h2`) `Certificaciones`; cuatro entradas de `content.md` §7: `SQL Bootcamp:
  Zero to Hero (Udemy, Sep 2026)`; `Meta Data Analyst Professional Certificate (Coursera, May
  2026)`; `Power BI Intermedio y Excel Avanzado (Soluciones Integrales Expertos, May 2026)`;
  `Build Intelligent Agents Using DeepSeek & N8N (Coursera, Mar 2026)`.
- **Eyebrow:** no.

### 6. Banda de cierre (Disponibilidad y contacto)

- **Familia:** banda CTA (franja final, alineación izquierda).
- **Artefacto:** ninguno.
- **Copy:** headline (`h2`) `Escríbeme.`; botón `Escríbeme` (mailto); alternativa de texto:
  `ing.stalyn.flores@gmail.com`; `linkedin.com/in/stalyn-flores97`; `Cuenca, Ecuador`. Un solo CTA
  de contacto.
- **Eyebrow:** no.

---

## Mobile (`< 768px`)

- **Hero:** una columna; el retrato pasa bajo el CTA a `aspect-4/5` acotado, o se omite si el asset
  no existe (sin dejar hueco vacío). `pt-24` a `pt-16`.
- **Perfil:** `w-full`, `px-4`.
- **Timeline:** una columna; la línea vertical pasa al borde izquierdo, hitos apilados.
- **Habilidades:** una columna; cada grupo con su etiqueta y su lista.
- **Certificaciones:** una columna (`grid-cols-1`).
- **CTA:** una columna.

## Estados

- **Retrato:** `priority` (LCP) con relación 4:5 reservada para CLS < 0.1; si falta
  `public/assets/home/portrait.jpg`, se deja el slot explícito (no una imagen falsa).
- **Datos:** estáticos (RSC); sin carga ni error.
- **Sin formulario:** el contacto es `mailto` y enlaces directos, así que no aplican estados de
  formulario (loading/error de envío).
