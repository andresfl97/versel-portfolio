# 03 - Caso: Retail Cuenca (en desarrollo)

**Ruta:** `/casos/retail-cuenca` · **Tema:** claro (`data-theme="light"`) · **Fuente de copy:** `content.md` §3.
**Estado del caso:** En desarrollo (proyecto en pausa). Sin resultados, sin capturas de tablero.

## Objetivo

Presentar con honestidad un caso sin resultado: su valor actual es el método (orquestación con
agentes de IA y Human Gates), no una conclusión sobre precios.

---

## Secciones

### 1. Hero de caso

- **Familia:** hero asimétrico (texto izquierda `col-span-7`, destaque de cifra derecha `col-span-5`).
- **Artefacto:** cifra `43%` en `figure-lg` `text-accent`, glosa `peso de alimentos y bebidas en
  la canasta básica de Ecuador`, fuente `caption` ("Enfoque declarado del proyecto"). Es la única
  cifra del caso.
- **Copy:**
  - Eyebrow (`label`): `Caso de estudio`
  - H1 (`h1`): `Retail Cuenca`
  - Subtexto (`lead`): `El proyecto está en pausa y este caso se publica como está: su valor es la orquestación del método.` (18 palabras)
  - Meta mono (`figure-sm`): `Alimentos y bebidas · comparación de precios y marcas`
  - Tag de estado (`pill`): `En desarrollo`
  - CTA: `Escríbeme`
- **Eyebrow:** **sí** (1 de 3).
- **Layout:** `min-h-[88dvh]`, `pt-24` máximo; H1 a `h1`. El tag `En desarrollo` es la señal de
  estado honesta del hero, no texto pequeño decorativo.

### 2. Pregunta y contexto

- **Familia:** manifiesto / pregunta.
- **Artefacto:** ninguno; el `43%` del hero se referencia en el texto, no se repite como gráfica.
- **Copy:** pregunta (`h2`) `¿Cómo se comparan precios y marcas entre los retailers líderes de
  Cuenca?`; cuerpo: el párrafo de "Contexto" (alimentos y bebidas, 43% de la canasta básica; el
  proyecto en pausa; su valor hoy es la orquestación del método).
- **Eyebrow:** no.

### 3. Estado del dato

- **Familia:** estado vacío (composición honesta de "sin resultados": texto en primer plano, sin
  hueco de gráfica ni placeholder que finja un dato).
- **Artefacto:** ninguno. La ausencia se escribe, no se dibuja. Se declara el benchmark provisional
  como texto; no se dibuja un tablero vacío ni una barra en cero.
- **Copy:** headline (`h3`) `Todavía no hay resultados`; cuerpo: `Todavía no hay resultados ni
  artefactos de dato publicables. El benchmark con el que se empezó es provisional.` (de
  `content.md`, "Datos"). Nota de estado: "sin datos validados no hay hallazgo que reportar".
- **Eyebrow:** no.

### 4. Método (rail)

- **Familia:** rail de método (riel pegajoso izquierda `col-span-4`, detalle derecha `col-span-8`).
- **Artefacto:** el nodo "Método" contiene el pipeline completo en mono, como secuencia horizontal
  (scroll-snap en móvil), sin numeración genérica: `investigación -> extracción -> RAW -> perfilado
  -> homologación -> limpieza -> validación -> SQL -> modelo -> visualización`. Los puntos de
  control humanos (Human Gates) se marcan como nodos de acento dentro de la secuencia, no con
  relleno. El nodo "Hallazgo" declara el estado honesto.
- **Copy:** eyebrow (`label`) `Método`; nodos (`Pregunta`, `Datos`, `Método`, `Hallazgo`,
  `Decisión`); cuerpo del "Método (propuesto y en construcción)": desarrollo guiado por
  especificaciones (SDD) con agentes de IA y puntos de control humanos. Los agentes hacen
  extracción, perfilado y homologación; el humano aprueba en cada gate.
- **Eyebrow:** **sí** (2 de 3).

### 5. Orquestación con IA

- **Familia:** split texto + artefacto (texto izquierda `col-span-5`, artefacto derecha `col-span-7`).
- **Artefacto (imagen real):** `public/assets/retail/orquestacion-ia.svg`, relación 16:9,
  `object-contain`, alt "Diagrama de orquestación con agentes de IA y Human Gates". Pie funcional
  en `caption` fuera de la imagen. Sin pills sobre la imagen. Esta pieza ilustra la orquestación,
  no un resultado.
- **Copy:** headline (`h2`) `Cómo se construye`; cuerpo: "La pieza visual de este caso es la
  orquestación: cómo agentes y persona construyen el caso en conjunto."
- **Eyebrow:** no.

### 6. Decisión en curso

- **Familia:** ficha agrupada (bloques con hairline y espacio negativo).
- **Artefacto:** ninguno.
- **Copy:** headline (`h3`) `Decisión`; cuerpo de "Decisión / Impacto": `En curso. El método ya
  está definido y es reutilizable para otros dominios de comparación de mercado. El impacto se
  medirá cuando el caso cierre.` Nota de estado de `content.md`: `En desarrollo. Proyecto en
  pausa, enfoque cambiado a precios y marcas de alimentos y bebidas.`
- **Eyebrow:** no.

### 7. Banda de cierre (CTA)

- **Familia:** banda CTA.
- **Artefacto:** ninguno.
- **Copy:** headline (`h2`) `Escríbeme.`; botón `Escríbeme` (mailto); enlace de texto a `/`.
- **Eyebrow:** no.

---

## Mobile (`< 768px`)

- **Hero:** una columna; `43%` a `figure`; tag de estado bajo el meta.
- **Pregunta y contexto:** `w-full`, `px-4`.
- **Estado del dato:** una columna; el bloque de texto no se centra ni se decora con caja.
- **Rail:** colapsa a columna; el pipeline se presenta como scroll-snap horizontal acotado
  (`overflow-x-auto`, `snap-x`), con los Human Gates marcados.
- **Orquestación:** `grid-cols-1`; el SVG pasa a ancho completo con `aspect-video`.
- **Ficha:** una columna.
- **CTA:** una columna.

## Estados

- **Estado vacío (sección 3):** es el estado "empty" explícito de todo el sitio (caso sin datos).
  Se compone como declaración honesta, nunca como cero ni como tablero vacío.
- **Imagen orquestación:** `aspect-video` reservado para CLS < 0.1; `loading="lazy"`; si falta el
  SVG, se deja el slot explícito y se anota.
- **Datos:** estáticos (RSC); sin carga ni error.
