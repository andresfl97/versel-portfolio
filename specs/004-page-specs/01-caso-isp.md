# 01 - Caso: ISP / SONET

**Ruta:** `/casos/isp` · **Tema:** claro (`data-theme="light"`) · **Fuente de copy:** `content.md` §2.
**Estado del caso:** Completo.

## Objetivo

Demostrar, con evidencia real y cifras trazables, cómo se convirtió una operación sin visibilidad
en un sistema de medición continua de la experiencia del usuario y del soporte técnico.

---

## Secciones

### 1. Hero de caso

- **Familia:** hero asimétrico (texto izquierda `col-span-7`, destaque de cifra derecha `col-span-5`).
- **Artefacto:** cifra protagonista de la tira de indicadores: `CSAT 92.2%` en `figure-lg`
  `text-accent`, con glosa `Satisfacción del usuario` y fuente `caption` ("Informe de resultados
  del proyecto SONET"). Al lado, `Espera 1.9 min` y `Valoración 4.6/5` en `figure`.
- **Copy:**
  - Eyebrow (`label`): `Caso de estudio`
  - H1 (`h1`): `Sistema de medición de experiencia del usuario y soporte técnico`
  - Subtexto (`lead`): `La operación se evaluaba con criterios dispersos y sin una vista en tiempo real.` (12 palabras)
  - Meta mono (`figure-sm`): `Looker Studio`, `Google Sheets`, `Business Intelligence` (spans separados por gap, sin encadenar `·`)
  - Tag de estado (`pill`): `Completo`
  - CTA: `Escríbeme`
- **Eyebrow:** **sí** (1 de 3).
- **Layout:** `min-h-[88dvh]`, `pt-24` máximo; H1 a `h1` (no `display`) para no desbordar el
  viewport. Máximo 4 elementos de texto más el tag de estado.

### 2. Pregunta y contexto

- **Familia:** manifiesto / pregunta (la pregunta domina como titular editorial; el contexto va
  debajo a 65ch, una sola columna).
- **Artefacto:** ninguno.
- **Copy:** pregunta (`h2`, tamaño grande) de `content.md`: `¿Cómo medir la experiencia del
  usuario y el soporte técnico sin visibilidad operativa?`; cuerpo: el párrafo de "Contexto"
  completo.
- **Eyebrow:** no.

### 3. Datos

- **Familia:** split texto + artefacto (texto izquierda `col-span-5`, artefacto derecha `col-span-7`).
- **Artefacto:** dos cifras a escala en mono `tabular-nums`: `+200 encuestas centralizadas`
  (`figure-lg` en `text-accent`) y `+2,000 clientes activos` (`figure`), con glosa y fuente. Sin
  gráfica de área (no hay serie); se presentan como volumen real.
- **Copy:** headline (`h3`) `Datos`; lista de procedencia del material: `más de 200 encuestas
  telefónicas levantadas con Google Forms`; `respuestas sin normalizar (texto libre, escalas
  mixtas, categorías inconsistentes)`; `una cartera de más de 2,000 clientes activos`; `datos de
  clientes anonimizados según la LOPDP, no se publican datos personales`.
- **Eyebrow:** no.

### 4. Método (rail)

- **Familia:** rail de método (riel pegajoso izquierda `col-span-4`, detalle derecha `col-span-8`).
- **Artefacto:** los cinco nodos del rail, `Pregunta → Datos → Método → Hallazgo → Decisión`,
  cada uno con el paso de `content.md` §2 ("Método"): `Centralización de más de 200 encuestas
  telefónicas`; `Pipeline ETL: Google Forms -> Google Sheets -> Looker Studio`; `Limpieza y
  normalización en Google Sheets: unificar escalas, categorías y criterios de registro`; `Dos
  dashboards interactivos en Looker Studio`; `Reportes de KPI en tiempo real para la operación y
  la jefatura de agencia`. El nodo activo se resalta con `text-accent`, sin relleno.
- **Copy:** eyebrow (`label`) `Método`; cada nodo lleva su etiqueta en Graph Mono.
- **Eyebrow:** **sí** (2 de 3).

### 5. Hallazgo e impacto

- **Familia:** destaque figure-led (cifra protagonista centrada en la columna de lectura, texto
  subordinado debajo).
- **Artefacto:** `Brecha de desinformación 10%` en `figure-lg` `text-accent`, con glosa:
  `diferencia entre lo que el sistema registraba y la realidad operativa de la base de clientes`.
  Sin línea ni barra: es una cifra, no una serie.
- **Copy:** headline (`h3`) `Hallazgo`; cuerpo: el párrafo de "Hallazgo" de `content.md`
  (la brecha como causa raíz del aumento de quejas de soporte en horario nocturno). Sub-lista de
  impacto de "Decisión / Impacto": `La gerencia y la jefatura de agencia adoptaron el monitoreo
  como herramienta permanente`; `Se automatizó el flujo de reportes de KPI en tiempo real`; `El
  tablero aceleró decisiones estratégicas de la operación`.
- **Eyebrow:** no.

### 6. Cifras del caso

- **Familia:** tira de indicadores (small multiples alineados por mono, sin tarjetas).
- **Artefacto:** las siete filas de la tabla de "Métricas del caso" de `content.md`, cada una
  como pareja cifra (`figure`/`figure-sm`) + significado (`body-sm`) + fuente (`caption`):
  `CSAT 92.2%`, `Tiempo de espera 1.9 min`, `Valoración 4.6/5`, `+2,000 clientes activos`,
  `+200 encuestas`, `2 dashboards interactivos`, `Brecha de desinformación 10%`.
- **Copy:** headline (`h3`) `Cifras del caso`. Sin reformulación: valor y significado textuales.
- **Eyebrow:** no.

### 7. Evidencia

- **Familia:** galería de evidencia (rejilla asimétrica de imágenes reales, distinta relación
  por pieza).
- **Artefacto (imágenes reales, `next/image`):**
  - `public/assets/isp/pipeline.png` (2670x5065, `object-contain`, diagrama largo sin recortar),
    alt "Diagrama del flujo Google Forms a Google Sheets a Looker Studio".
  - `public/assets/isp/informe-general.png` (1411x1071, `object-cover`), alt "Vista general del
    informe de KPIs del caso SONET".
  - `public/assets/isp/encuesta.png` (1800x1351, `object-cover`), alt "Encuesta de origen
    levantada con Google Forms".
  - `public/assets/isp/contratistas.png` (1103x868, opcional): se omite si no hay asset; nunca se
    simula con `<div>`.
  Pie fuera de la imagen en `caption`. Sin pills sobre las imágenes.
- **Copy:** headline (`h3`) `Evidencia`; pies funcionales por imagen.
- **Eyebrow:** no.

### 8. Banda de cierre (CTA)

- **Familia:** banda CTA.
- **Artefacto:** ninguno.
- **Copy:** headline (`h2`) `Escríbeme.`; botón `Escríbeme` (mailto); enlace de texto a
  `linkedin.com/in/stalyn-flores97` y a `/` (volver al índice de casos). Un solo CTA de contacto.
- **Eyebrow:** no.

---

## Mobile (`< 768px`)

- **Hero:** una columna; el destaque de cifra pasa bajo el CTA; `h1` baja a tamaño `h1` móvil;
  `min-h-[88dvh]` se mantiene, `pt-24` a `pt-16`.
- **Pregunta y contexto:** `w-full`, `px-4`; la pregunta no baja de `h2`.
- **Datos:** `grid-cols-1`; cifras a `figure` (no `figure-lg`).
- **Rail:** colapsa a columna. La etiqueta de cada nodo (`Pregunta`, `Datos`, ...) va arriba del
  bloque; el riel izquierdo pegajoso desaparece; se apila en orden.
- **Hallazgo:** cifra a `figure-lg` pero con `max-w-full`; texto debajo.
- **Cifras del caso:** una columna con `divide-y`; cada fila `valor` + `significado` + `fuente`.
- **Evidencia:** una columna; `pipeline.png` con `object-contain` y alto acotado; las otras dos a
  `aspect-4/3`.
- **CTA:** una columna.

## Estados

- **Imágenes:** relación reservada (`width`/`height` o `aspect-ratio`) para CLS < 0.1; la primera
  pieza de la galería `loading="lazy"`; fallback a slot si falta el asset. Sin spinner.
- **Datos:** estáticos (RSC). Sin estado de carga ni error.
- **Contratistas opcional:** si el asset no existe, la celda no se renderiza (no queda un hueco);
  la rejilla se recompone a dos piezas.
