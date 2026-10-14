# 004 - Page Specs (navegación y estructura)

Especificación de la estructura global del sitio: navegación, rutas y resumen de todas las
páginas. Las specs detalladas viven en los archivos `00-home.md` a `05-sobre-mi.md`.

Autoridad anti-slop: skill `design-taste-frontend` (secciones 0.B, 4.7, 9.G y Pre-Flight 14).
Estado: `OPEN`, pendiente de HG 004.

---

## 1. Design read

**Reading this as: an editorial data-analyst portfolio for recruiters and data hiring teams, with a paper-and-ink analytical language, leaning toward Next.js RSC + Tailwind v4 tokens + Geist / Geist Mono and restrained Motion.**

Dials fijados por el humano (ver `specs/003-design-system/tokens.md`, sección 2):
`DESIGN_VARIANCE 6` · `MOTION_INTENSITY 5` · `VISUAL_DENSITY 5`.

Toda decisión de esta spec sale de esos tokens. Nada se improvisa fuera de `tokens.md`.

---

## 2. Navegación global

### 2.A Barra superior (una línea)

Desktop: una sola línea, altura 64px (`h-16`), `z-nav`, `border-b` con `border-border`, fondo
`bg` con `backdrop` opcional. Máximo 5 elementos contados desde el wordmark, para que quepa
sin envolver en `lg` (1024px).

```text
[ Stalyn Flores ]                          Casos   KIRA   Sobre mí   [ Escríbeme ]
```

| Elemento | Tipo | Destino |
|---|---|---|
| `Stalyn Flores` | wordmark (link a home) | `/` |
| `Casos` | link | `/#casos` (índice curado de Home) |
| `KIRA` | link | `/automatizaciones/kira` |
| `Sobre mí` | link | `/sobre-mi` |
| `Escríbeme` | botón primario (CTA de contacto) | `mailto:ing.stalyn.flores@gmail.com` |

Reglas de la barra:

- **Una línea en desktop** (Pre-Flight: nav en dos líneas = fail). Si a `lg` no cabe, se acorta
  el wordmark a `Stalyn Flores`, nunca se envuelve.
- **Altura máxima 80px**; aquí 64px.
- El botón `Escríbeme` es el **único CTA de contacto** del sitio. Misma etiqueta en nav, hero y
  cierre de cada página. Puede repetirse la MISMA etiqueta en una página (una sola intención,
  una sola etiqueta); lo prohibido es una segunda etiqueta con la misma intención.
- Sin dots decorativos, sin indicadores de versión, sin hora ni clima.

**Mobile (`< 768px`):** wordmark (izquierda) + botón `Escríbeme` (derecha) + botón de menú
(icono `List` de Phosphor). El menú abre un panel a pantalla completa (`z-overlay`) con los
cuatro destinos en columna; cierra con `Escape` y devuelve el foco al botón. El CTA queda
siempre visible sin abrir el menú.

### 2.B Footer

Una sola franja, `border-t`, ritmo `py-12` (móvil) a `py-16`.

| Columna | Contenido |
|---|---|
| Identidad | `Stalyn Andrés Flores Lalvay` + titular en `body-sm` (`Analista de Datos Junior · Ingeniero en Telecomunicaciones`) |
| Navegación | Home, los 3 casos, KIRA, Sobre mí (rutas completas) |
| Contacto | Email, LinkedIn, `Cuenca, Ecuador` |

Línea inferior, hairline, letra `caption`: `© 2026 Stalyn Flores Lalvay`. Sin versión de build,
sin strip de locale/hora, sin créditos de imagen decorativos.

Datos de contacto publicados (de `content.md`): email `ing.stalyn.flores@gmail.com`;
LinkedIn `linkedin.com/in/stalyn-flores97`. **No** se publica teléfono ni RUC.

---

## 3. Estructura de rutas

| Ruta | Página | Archivo spec | Tema | Flujo de entrada |
|---|---|---|---|---|
| `/` | Home (índice curado) | `00-home.md` | claro | directo |
| `/casos/isp` | Caso ISP / SONET | `01-caso-isp.md` | claro | desde Home |
| `/casos/gnss-rtk` | Caso GNSS RTK | `02-caso-gnss-rtk.md` | claro | desde Home |
| `/casos/retail-cuenca` | Retail Cuenca (en desarrollo) | `03-caso-retail.md` | claro | desde Home |
| `/automatizaciones/kira` | Automatizaciones: KIRA AI | `04-kira.md` | **oscuro** | desde Home |
| `/sobre-mi` | Sobre mí y contacto | `05-sobre-mi.md` | claro | nav directo |

**Un solo tema por página** (Page Theme Lock, skill §4.11). El tema se fija con `data-theme` en
`<html>` por página y no se invierte a mitad de scroll. KIRA es la única página oscura
(deliberado: automatización e infraestructura); el resto son claras. La decisión se deja
anotada para HG 004 (ver §9).

Todas las páginas usan RSC por defecto. Solo los bloques con Motion (reveals, hover físico)
son islas `'use client'`.

---

## 4. Vocabulario de familias de layout

Nombres de familia usados en las specs (traducidos del vocabulario de la skill, sección 10).
Una familia se usa **como máximo una vez por página**, y nunca dos veces seguidas.

| Familia | Origen (skill §10) | Trazo |
|---|---|---|
| **Hero asimétrico** | Asymmetric Split Hero | Texto a un lado, artefacto al otro, asimetría 7/5 en la rejilla de 12. |
| **Manifiesto / pregunta** | Editorial Manifesto Hero | Prosa a ancho de lectura, una sola columna, tipografía grande de entrada. Sin headline separado. |
| **Split texto + artefacto** | Left content / right asset | Texto `col-span-5`, artefacto `col-span-7` (o invertido). Se alterna con cuidado (cap zigzag). |
| **Rail de método** | Sticky-Stack / Sequence | Riel de nodos en mono (Pregunta, Datos, Método, Hallazgo, Decisión); el bloque derecho muestra el detalle. Riel pegajoso en desktop, columna simple en móvil. |
| **Destaque figure-led** | Full-width quote / figure | Una cifra protagonista (`figure-lg` en `text-accent`) con su glosa; el texto se subordina. |
| **Tira de indicadores** | Small multiples | Fila de cifras con glosa y fuente, alineadas por mono. Sin tarjetas. |
| **Bento** | Bento Grid | Celdas asimétricas; recuento exacto de celdas igual al de items. Con variación visual real (icono, micro-gráfica, tinte). |
| **Ficha agrupada** | Grouped chunks | Bloques agrupados por `border-t`/`divide-y` con espacio negativo; sin tarjetas de relleno. |
| **Galería de evidencia** | Asymmetric media grid | Imágenes reales con `next/image`, piezas de distinta relación, pie fuera de la imagen. |
| **Timeline** | Vertical sequence | Línea de trayectoria con hitos fechados en mono. |
| **Grid 2 col** | 2-col card grid | Rejilla de dos columnas para listas cortas agrupadas. |
| **Estado vacío** | Empty state | Composición honesta para "sin resultados"; declara el estado, no lo disfraza. |
| **Banda de cierre (CTA)** | CTA | Franja final con una sola intención de contacto. |

---

## 5. Motivo: el rail de método por caso

Cada caso lleva un **rail de método** con los cinco nodos, etiquetados con la palabra de
contenido (nunca `Paso 1 / Paso 2`, que la skill prohíbe en §9.F):

```text
Pregunta → Datos → Método → Hallazgo → Decisión
```

- Etiquetas de nodo en `label` (mono, `uppercase tracking`), **una sola vez por página**: el
  rail cuenta como el único eyebrow de su sección; no se repite en cada nodo.
- Desktop: riel izquierdo `col-span-4` pegajoso (`sticky top-24`), detalle derecho `col-span-8`.
  El nodo activo se resalta con color de acento (no con relleno).
- Móvil: colapsa a columna; cada nodo es un bloque con su etiqueta arriba, apilado.
- Casos sin resultado (Retail) conservan el rail: el nodo Hallazgo declara el estado honesto.
- KIRA usa el mismo riel con las seis etapas de su roadmap en lugar de los cinco nodos.

---

## 6. Artefactos de dato

Cómo se renderizan las cifras y micro-gráficas (base: `tokens.md` sección 11).

### 6.A Cifras

- Toda cifra en **Geist Mono con `tabular-nums slashed-zero`** (clase `.tnum`).
- Cifra protagonista del bloque: `figure-lg` en `text-accent`. Cifras de apoyo: `figure` en
  `text-ink`. Ejes/etiquetas: `figure-sm`.
- Cada cifra llega como tríada: valor (mono) + glosa (`body-sm`) + fuente (`caption`). Nunca
  se inventa ni se redondea por estética. Solo cifras presentes en `content.md`.
- Una ausencia ("sin resultados", "en desarrollo") se maqueta como **texto**, nunca como cero.

### 6.B Micro-gráficas

- **SVG inline** con cifras reales, sin librería de charting.
- Trazo `stroke="var(--accent)"`, `stroke-width` 1.5 a 2. Sin relleno de área, salvo tinte
  `fill="var(--accent-soft)"` a 40 a 60% de opacidad como máximo.
- **Prohibido** el track de fondo relleno (barra `bg-zinc-200` con relleno encima). Para "X de Y"
  se usa número + micro-barra sin pista, o un stepper de nodos discretos.
- Gridlines solo si organizan dato real.

### 6.C Artefacto por página

| Página | Artefacto de dato |
|---|---|
| Home (hero) | Tablero de cifras reales del caso ISP: `CSAT 92.2%`, `Espera 1.9 min`, `Valoración 4.6/5`. Sin sparkline (no existe serie temporal). |
| Home (fundamentos) | Bento de técnicas SQL, cada celda con un fragmento `code` corto real. |
| ISP | Tira de 7 indicadores + destaque de la brecha `10%`. Sin serie temporal: la brecha se cuenta como cifra, no como línea. |
| GNSS | Tres microfichas con micro-barra sin pista: `23 cuadrillas` (contra 1 equipo comercial), `89%` menor TCO, `50%` ahorro por jornada. |
| Retail | Una sola cifra: `43%` (peso de alimentos y bebidas en la canasta básica). El resto del bloque es estado declarado como texto. |
| KIRA | Stepper de 6 nodos discretos con el actual (`4/6`) en acento, sin pista rellena. Bento de 6 capacidades con iconos Phosphor y un micro-funnel. |
| Sobre mí | Cifra `~40 incidencias/mes` y `1.5 años` en la timeline; certificaciones con fecha en mono. |

---

## 7. Reglas de copy y CTA

- **Copy mapeado desde `content.md` (v3).** No se inventa ni se reformula; los encabezados de
  sección usan las palabras del curador.
- **Cero em-dashes** (`—`) y cero en-dashes (`–`) como separador en cualquier string visible:
  headlines, eyebrows, labels, botones, captions y alt. Solo guion `-`.
- Middle-dot `·` racionado: máximo uno por línea. Un stack de más de dos elementos se renderiza
  como spans separados por gap (o hairline), **sin encadenar puntos**; el `·` solo aparece en
  pares de dos elementos y en el titular.
- Un solo CTA de contacto por página, etiqueta única del sitio: **`Escríbeme`** (`mailto`).
  El nav lo repite (misma etiqueta, misma intención); ninguna página introduce otra etiqueta
  de contacto.
- Sub-párrafos de sección: 25 palabras o menos por defecto; cuerpo máx. 65ch.

---

## 8. Tabla resumen de todas las páginas

| Página | Ruta | Secciones | Familias (en orden) | Eyebrows (máx.) |
|---|---|---|---|---|
| **Home** | `/` | 6 | hero asimétrico · manifiesto · índice editorial · split texto+artefacto · bento · banda CTA | 2 de 2 |
| **ISP/SONET** | `/casos/isp` | 8 | hero asimétrico · manifiesto · split texto+artefacto · rail de método · destaque figure-led · tira de indicadores · galería de evidencia · banda CTA | 2 de 3 |
| **GNSS RTK** | `/casos/gnss-rtk` | 7 | hero asimétrico · manifiesto · split texto+artefacto · rail de método · bento · ficha agrupada · banda CTA | 1 de 3 |
| **Retail Cuenca** | `/casos/retail-cuenca` | 7 | hero asimétrico · manifiesto · estado vacío · rail de método · split texto+artefacto · ficha agrupada · banda CTA | 2 de 3 |
| **KIRA AI** | `/automatizaciones/kira` | 7 | hero asimétrico · manifiesto · bento · split texto+artefacto · rail de método · galería de evidencia · banda CTA | 2 de 3 |
| **Sobre mí** | `/sobre-mi` | 6 | hero asimétrico · manifiesto · timeline · ficha agrupada · grid 2 col · banda CTA | 1 de 2 |

Verificación rápida:

- Eyebrows: 2 ≤ ceil(6/3)=2 · 2 ≤ 3 · 1 ≤ 3 · 2 ≤ 3 · 2 ≤ 3 · 1 ≤ 2. **Pasa.**
- Familias distintas por página: Home 6/6 · ISP 8/8 · GNSS 7/7 · Retail 7/7 · KIRA 7/7 ·
  Sobre mí 6/6. Sin repetición consecutiva. Home supera el mínimo de 4. **Pasa.**
- Un solo CTA de contacto por página (`Escríbeme`). **Pasa.**
- Un solo tema por página declarado en §3. **Pasa.**

---

## 9. Decisiones abiertas para HG 004

1. **Tema oscuro solo en KIRA.** Se propone KIRA en `data-theme="dark"` (automatización e
   infraestructura) y el resto en claro. Si el humano prefiere un sitio monocromo, se pasa KIRA
   a claro con un solo cambio de atributo (los tokens ya existen en ambos modos).
2. **Artefacto del hero de Home.** Por defecto: tablero de cifras reales (ISP). Alternativa:
   foto de perfil `public/assets/home/portrait.jpg` (pendiente del usuario) como artefacto
   derecho. Si se entrega la foto, se puede sustituir o sumar sin tocar el layout.
3. **Nav mínima.** `Casos` apunta al índice de Home (`/#casos`). Si el humano quiere los tres
   casos como destinos de primer nivel, la nav crecería a dos líneas y rompería el Pre-Flight;
   se descarta salvo indicación contraria.
4. **`docs/ASSETS.md`.** Ya está sincronizado con `content.md` (lista `retail/orquestacion-ia.svg`
   y declara el caso Retail sin capturas). La nota de sincronización vieja de `content.md` §3 no
   requiere acción.

---

## Documentación

```text
AGENTS.md:   NOT MODIFIED
docs/:       NOT NEEDED (ASSETS.md ya sincronizado)
specs/:      UPDATED (specs/004-page-specs/pages.md creado)
MEMORY.md:   NOT MODIFIED (lo actualiza portfolio-master al cerrar HG 004)
```
