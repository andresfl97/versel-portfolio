# 02 - Caso: GNSS RTK

**Ruta:** `/casos/gnss-rtk` · **Tema:** claro (`data-theme="light"`) · **Fuente de copy:** `content.md` §6.
**Estado del caso:** Completo (tesis de grado). Sin imágenes: solo artefactos de dato.

## Objetivo

Mostrar cómo un análisis de costos en Python y estadística convirtió una disyuntiva de compra en
una recomendación cuantificada (una alternativa hasta 89% más barata en costo total de propiedad).

---

## Secciones

### 1. Hero de caso

- **Familia:** hero asimétrico (texto izquierda `col-span-7`, destaque de cifra derecha `col-span-5`).
- **Artefacto:** cifra protagonista `Hasta 23 cuadrillas` en `figure-lg` `text-accent`, glosa
  `equipables con el presupuesto de un solo equipo comercial`, fuente `caption` ("Tesis de grado,
  GNSS RTK"). Debajo, `89%` y `50%` como apoyo en `figure`.
- **Copy:**
  - Eyebrow (`label`): `Caso de estudio`
  - H1 (`h1`): `Análisis de costos de un sistema GNSS RTK`
  - Subtexto (`lead`): `Un solo equipo comercial de alta gama frente a equipar varias cuadrillas de laboratorio.` (14 palabras)
  - Meta mono (`figure-sm`): `Python · Estadística`
  - Tag de estado (`pill`): `Completo`
  - CTA: `Escríbeme`
- **Eyebrow:** **sí** (1 de 3).
- **Layout:** `min-h-[88dvh]`, `pt-24` máximo; H1 a `h1`.

### 2. Pregunta y contexto

- **Familia:** manifiesto / pregunta.
- **Artefacto:** ninguno.
- **Copy:** pregunta (`h2`) `¿Conviene un sistema comercial de un solo equipo o equipar varias
  cuadrillas de laboratorio?`; cuerpo: el párrafo de "Contexto" (documentación técnica oficial
  del Municipio de Cuenca e investigación de mercado de equipos GNSS RTK).
- **Eyebrow:** no.

### 3. Datos

- **Familia:** split texto + artefacto (texto izquierda `col-span-5`, artefacto derecha `col-span-7`).
- **Artefacto:** dos bloques de procedencia en mono (`figure-sm`) con su fuente: `documentación
  técnica oficial del Municipio de Cuenca` y `investigación de mercado de equipos comerciales`.
  Sin gráfica: se declara el origen, no una tendencia.
- **Copy:** headline (`h3`) `Datos`; líneas de `content.md`: origen, complemento y uso
  ("estimaciones de costo y costo total de propiedad (equipo más mantenimiento)").
- **Eyebrow:** no.

### 4. Método (rail)

- **Familia:** rail de método (riel pegajoso izquierda `col-span-4`, detalle derecha `col-span-8`).
- **Artefacto:** los cinco nodos del rail; el nodo "Método" contiene los cuatro pasos de
  `content.md` §6: `ETL en Python a partir de la documentación técnica`; `Investigación de mercado
  de las alternativas comerciales`; `Estimaciones de costo-beneficio y de costo total de
  propiedad`; `Comparación entre un solo equipo comercial y el equipamiento de varias cuadrillas`.
- **Copy:** nodos del rail (`Pregunta`, `Datos`, `Método`, `Hallazgo`, `Decisión`).
- **Eyebrow:** no (esta página usa un solo eyebrow, en el hero).

### 5. Hallazgo

- **Familia:** bento (tres celdas asimétricas, recuento exacto 3 items = 3 celdas; escala 7/5/... 
  en desktop, sin celdas vacías).
- **Artefacto:** cada celda lleva una cifra `figure-lg`/`figure` y una **micro-barra sin pista**
  (strokes en `var(--accent)`, sin track de fondo):
  - `Hasta 23 cuadrillas` (contra `1` equipo comercial) con micro-barra de proporción 23:1
    acotada a la celda.
  - `Hasta 89% menor` en costo total de propiedad, micro-barra de proporción 89.
  - `50%` de ahorro en costo operativo por jornada de levantamiento, micro-barra de proporción 50.
  Cada celda con glosa `body-sm` y fuente `caption` ("Tesis de grado, GNSS RTK").
- **Copy:** headline (`h2`) `Hallazgo`; glosas textuales de `content.md` (una por cifra).
- **Eyebrow:** no.

### 6. Decisión e impacto

- **Familia:** ficha agrupada (bloques separados por hairlines y espacio negativo, sin tarjetas).
- **Artefacto:** ninguno nuevo; repite la cifra principal en `figure-sm` para anclar la lectura.
- **Copy:** headline (`h3`) `Decisión`; cuerpo: el párrafo de "Decisión / Impacto" (la comparación
  como base cuantitativa, con el costo total de propiedad como criterio principal).
- **Eyebrow:** no.

### 7. Banda de cierre (CTA)

- **Familia:** banda CTA.
- **Artefacto:** ninguno.
- **Copy:** headline (`h2`) `Escríbeme.`; botón `Escríbeme` (mailto); enlace de texto a `/`.
- **Eyebrow:** no.

---

## Mobile (`< 768px`)

- **Hero:** una columna; el destaque de cifra pasa bajo el CTA; cifras a `figure`.
- **Pregunta y contexto:** `w-full`, `px-4`.
- **Datos:** `grid-cols-1`.
- **Rail:** colapsa a columna, nodos apilados con su etiqueta arriba.
- **Hallazgo (bento):** una columna, tres celdas apiladas con `divide-y`; las micro-barras se
  mantienen a ancho de celda, sin `overflow`.
- **Decisión:** una columna.
- **CTA:** una columna.

## Estados

- **Datos:** estáticos (RSC); sin carga ni error. No hay imágenes, así que no hay estado de imagen.
- **Micro-barras:** renderizadas en SVG inline con los valores reales; si un valor faltara, la
  celda se omite en vez de dibujar una barra vacía.
