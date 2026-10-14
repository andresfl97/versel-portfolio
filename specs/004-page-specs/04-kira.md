# 04 - Automatizaciones: KIRA AI

**Ruta:** `/automatizaciones/kira` · **Tema:** oscuro (`data-theme="dark"`) · **Fuente de copy:** `content.md` §5.
**Estado del caso:** En desarrollo (etapa 4 de 6). Analítica diseñada; sin cifras de negocio.

## Objetivo

Mostrar cómo un agente convierte la conversación diaria de una microempresa en datos consultables,
declarando con honestidad qué está diseñado y qué está en producción.

---

## Secciones

### 1. Hero de caso

- **Familia:** hero asimétrico (texto izquierda `col-span-7`, destaque de indicador derecha `col-span-5`).
- **Artefacto:** indicador `4/6` en `figure-lg` `text-accent`, glosa `avance en el roadmap propio`
  y fuente `caption` ("Documentación del proyecto KIRA AI"). Es la etapa, no una cifra de negocio.
- **Copy:**
  - Eyebrow (`label`): `Caso de estudio`
  - H1 (`h1`): `KIRA AI`
  - Subtexto (`lead`): `Un agente de WhatsApp con IA que convierte las conversaciones de una microempresa en datos consultables.` (16 palabras)
  - Meta mono (`figure-sm`): `n8n`, `PostgreSQL`, `JavaScript`, `pgvector` (spans separados por gap, sin encadenar `·`)
  - Tag de estado (`pill`): `Etapa 4 de 6`
  - CTA: `Escríbeme`
- **Eyebrow:** **sí** (1 de 3).
- **Layout:** `min-h-[88dvh]`, `pt-24` máximo; H1 a `h1`. En tema oscuro la elevación es
  `bg-elevated` + `border` (sin sombras).

### 2. Pregunta y qué es

- **Familia:** manifiesto / pregunta.
- **Artefacto:** ninguno.
- **Copy:** pregunta (`h2`) `¿Se puede convertir la conversación diaria de una microempresa en
  datos útiles sin cambiarle la forma de trabajar?`; cuerpo de "Qué es": lo que antes quedaba en
  chats sueltos pasa a ser información consultable y medible.
- **Eyebrow:** no.

### 3. Capacidades analíticas

- **Familia:** bento (recuento exacto, 6 items = 6 celdas; escala asimétrica, sin celdas vacías;
  al menos 2 a 3 celdas con variación visual real: tinte `accent-soft` e icono, no todas fondo
  plano con solo texto).
- **Artefacto:** cada celda = icono Phosphor en `text-accent` + nombre de la capacidad +
  una línea. Iconos: `ArrowsClockwise` (recurrencia de clientes), `Trophy` (productos líderes),
  `Clock` (temporalidad), `FunnelSimple` (embudo conversacional), `Smiley` (sentimiento),
  `SealCheck` (calidad de datos registrados). Sin gráficas inventadas: las capacidades están
  diseñadas, no en producción.
- **Copy:** headline (`h2`) `Capacidades analíticas`; lista de `content.md`: `Recurrencia de
  clientes`, `Productos líderes`, `Temporalidad (patrones por día y hora)`, `Embudo conversacional
  (en qué punto se cae una conversación)`, `Sentimiento de las conversaciones`, `Calidad de datos
  registrados`. Cuerpo: "Estas capacidades están diseñadas en el modelo, no todas en producción."
- **Eyebrow:** no.

### 4. Arquitectura

- **Familia:** split texto + artefacto (texto izquierda `col-span-5`, imagen derecha `col-span-7`).
- **Artefacto (imagen real):** `public/assets/kira/workflow-n8n.png` (8192x1528, panorámica,
  `object-contain`), alt "Flujo de trabajo del agente KIRA AI en n8n". Pie funcional en `caption`.
- **Copy:** headline (`h3`) `Arquitectura`; lista de stack de `content.md` §5: `Automatización:
  n8n`; `Base de datos: PostgreSQL, con un modelo entidad-relación (ERD) completo`; `Lógica:
  JavaScript`; `Desarrollo asistido: OpenCode`; `Recuperación de contexto: pgvector para RAG`.
- **Eyebrow:** no.

### 5. Roadmap (rail)

- **Familia:** rail de método (riel pegajoso izquierda `col-span-4`, detalle derecha `col-span-8`),
  adaptado a las seis etapas del roadmap.
- **Artefacto:** stepper de **seis nodos discretos** (sin pista de fondo rellena). El nodo actual
  (4) se resalta con `text-accent` y borde de acento; los demás en `ink-muted`. Etapas agrupadas en
  las tres fases declaradas (`registro`, `CRM`, `analítica de datos`). No se dibuja progreso relleno.
- **Copy:** eyebrow (`label`) `Roadmap`; cuerpo de "Decisión / Impacto": seis etapas rumbo a
  registro, CRM y analítica; etapa 4 de 6; sin resultados analíticos cerrados que reportar. Estado
  honesto: la analítica está diseñada y la orquestación funciona, pero no se presentan cifras de
  negocio.
- **Eyebrow:** **sí** (2 de 3).

### 6. Evidencia

- **Familia:** galería de evidencia (rejilla asimétrica de dos piezas reales).
- **Artefacto (imágenes reales):**
  - `public/assets/kira/kira-ai.png` (1024x1536, 2:3 vertical, `object-cover`), alt "Identidad y
    concepto del agente KIRA AI".
  - `public/assets/kira/chatbot-flujo.png` (4414x8150, `object-contain`, diagrama vertical sin
    recortar), alt "Diagrama de flujo del chatbot de KIRA AI".
  Pie fuera de la imagen en `caption`.
- **Copy:** headline (`h3`) `Evidencia`.
- **Eyebrow:** no.

### 7. Banda de cierre (CTA)

- **Familia:** banda CTA.
- **Artefacto:** ninguno.
- **Copy:** headline (`h2`) `Escríbeme.`; botón `Escríbeme` (mailto); enlace de texto a `/`.
- **Eyebrow:** no.

---

## Mobile (`< 768px`)

- **Hero:** una columna; `4/6` a `figure`; `min-h-[88dvh]`, `pt-24` a `pt-16`.
- **Pregunta y qué es:** `w-full`, `px-4`.
- **Bento capacidades:** una columna, celdas apiladas con `divide-y`.
- **Arquitectura (split):** `grid-cols-1`; la panorámica se recorta a `aspect-video` con
  `object-contain` y `overflow-x-auto` opcional para el detalle.
- **Rail roadmap:** colapsa a columna; los seis nodos apilados con el actual en acento.
- **Galería:** una columna; el diagrama vertical con alto acotado y `object-contain`.
- **CTA:** una columna.

## Estados

- **Tema oscuro:** todos los tokens de `data-theme="dark"` (`bg #0F1413`, `accent #35C29B`); sin
  sombras. Se verifica en ambos modos antes de cerrar (skill §8.D).
- **Imágenes:** relación reservada para CLS < 0.1; `loading="lazy"`; fallback a slot si falta el
  asset. Sin spinner.
- **Datos:** estáticos (RSC); sin carga ni error. La etapa del roadmap es contenido, no dato vivo.
