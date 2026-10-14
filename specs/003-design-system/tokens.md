# 003 - Design System (tokens)

Sistema de diseño del portafolio. Fuente única para las specs de página (004) y la
implementación (005). Toda cifra, color, radio, sombra y curva usada en el sitio sale de aquí.
Nada se improvisa fuera de este archivo.

Autoridad anti-slop: skill `design-taste-frontend` (secciones 0.B, 1, 4, 8 y Pre-Flight 14).
Estado: `OPEN`, pendiente de HG 003.

---

## 1. Design read

**Reading this as: an editorial data-analyst portfolio for recruiters and data hiring teams, with a paper-and-ink analytical language, leaning toward Next.js RSC + Tailwind v4 tokens + Geist / Geist Mono and restrained Motion.**

Sistema elegido: **Tailwind v4 utilities + CSS variables** (una sola familia, sin librería de
componentes). No es un brief de sistema oficial (Fluent / Carbon / Material); es una **estética
editorial** con implementación honesta en CSS nativo + Tailwind. Se declara así.

---

## 2. Dials

`DESIGN_VARIANCE 6` · `MOTION_INTENSITY 5` · `VISUAL_DENSITY 5`

Son los dials fijados por el humano. Su efecto concreto en el sistema:

| Dial | Valor | Efecto en el sistema |
|---|---|---|
| **VARIANCE 6** | Offset, no simétrico | Grid editorial de 12 columnas con asimetría moderada (col-span desiguales, blancos laterales, jerarquía izquierda-derecha). Prohibido el hero centrado salvo pieza manifiesto. Toda asimetría colapsa a una columna en `< 768px`. |
| **MOTION 5** | Fluid CSS (banda 4-7) | Transiciones de `transform`/`opacity` de 150-400ms. Reveal por scroll con `whileInView` de Motion (sin GSAP, sin hijacks). Hover físico en CTA. Nada de loops infinitos decorativos. Todo honra `prefers-reduced-motion`. |
| **DENSITY 5** | Ritmo de app diaria | `py` de sección 80px (móvil) a 128px (desktop). Contenedor 1400px. Sin apilamiento tipo cockpit: la cifra respira en layout plano, no en tarjetas apretadas. |

Fuente: secciones 1.A y 7 de la skill ("editorial / blog" y "portfolio developer/editorial" caen
en 5-6 / 4-5 / 2-4; el brief sube densidad y motion a 5 por decisión humana).

---

## 3. Tipografía

### 3.A Familias

- **Display** (titulares): Geist.
- **Cuerpo / UI**: Geist.
- **Cifras / código / labels mono**: Geist Mono.

Decisión de carga: `next/font/google` publica **Geist** (variable) y **Geist Mono** (variable).
No expone una familia separada "Geist Display". El rol *Display* se sirve con Geist a peso y
tracking de display. Si el humano exige el corte Display dedicado, se cambia a
`next/font/local` con el archivo variable de Geist Display (misma API, misma variable CSS). No se
usa Google Fonts por `<link>`, nunca.

```ts
// app/fonts.ts
import { Geist, Geist_Mono } from "next/font/google";

export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});
```

```tsx
// app/layout.tsx  (html recibe las variables; luego @theme las mapea)
<html lang="es" className={`${geist.variable} ${geistMono.variable}`}>
```

### 3.B Escala

Mobile-first. Los display usan `clamp()` para no saltar de tamaño entre breakpoints.
`tracking` en `em`; negativo = display apretado, positivo = labels mono.

| Token | Fuente | Tamaño (desktop) | Peso | Tracking | Line-height | Uso |
|---|---|---|---|---|---|---|
| `display` | Geist | `clamp(2.5rem, 6vw, 4.5rem)` (40-72px) | 600 | `-0.03em` | `1.02` | Hero únicamente |
| `h1` | Geist | `clamp(2rem, 4.5vw, 3.25rem)` (32-52px) | 600 | `-0.02em` | `1.05` | Título de página/caso |
| `h2` | Geist | `clamp(1.5rem, 3vw, 2.25rem)` (24-36px) | 600 | `-0.015em` | `1.12` | Título de sección |
| `h3` | Geist | `1.375rem` (22px) | 600 | `-0.01em` | `1.25` | Subsección / nombre de bloque |
| `h4` | Geist | `1.125rem` (18px) | 600 | `-0.005em` | `1.35` | Encabezado menor |
| `lead` | Geist | `1.125rem` (18px) | 400 | `0` | `1.6` | Bajada, subtexto de hero |
| `body` | Geist | `1rem` (16px) | 400 | `0` | `1.65` | Párrafo (ancho máx. 65ch) |
| `body-sm` | Geist | `0.9375rem` (15px) | 400 | `0` | `1.6` | Notas, texto secundario |
| `caption` | Geist | `0.8125rem` (13px) | 500 | `0.005em` | `1.45` | Pies de imagen, metadatos |
| `label` | Geist Mono | `0.75rem` (12px) | 500 | `0.16em` uppercase | `1.3` | Etiqueta/eyebrow (uso restringido) |
| `figure-lg` | Geist Mono | `clamp(2rem, 4vw, 3rem)` (32-48px) | 450 | `-0.01em` | `1.05` | Cifra protagonista |
| `figure` | Geist Mono | `1.25rem` (20px) | 500 | `-0.005em` | `1.2` | Cifra en tabla/ficha |
| `figure-sm` | Geist Mono | `0.9375rem` (15px) | 500 | `0` | `1.3` | Cifra inline, eje de gráfica |
| `code` | Geist Mono | `0.875rem` (14px) | 450 | `0` | `1.6` | SQL resaltado, stack |

Reglas de la skill aplicadas:

- Titular de hero: **máximo 2 líneas** en desktop. `display` arranca en 40px, no en 72px si el
  titular pasa de 6 palabras.
- Bajada de hero: **máximo 20 palabras**.
- Cifras siempre con `font-variant-numeric: tabular-nums` (token `mono`, ver 3.C).
- **Eyebrow (`label`) con moderación**: máximo 1 por cada 3 secciones. El hero cuenta como 1.
  Se decide por página en la spec 004, no aquí.
- Cero em-dashes en cualquier string visible. Cero en labels, eyebrows, captions y alt text.

### 3.C Cifras

Toda cifra usa `figure`, `figure-lg`, `figure-sm` o `code`, con:

```css
font-variant-numeric: tabular-nums slashed-zero;
font-feature-settings: "tnum" 1, "zero" 1;
```

Ninguna cifra se compone con Geist (proporcional). El ancho estable del mono es lo que alinea
tablas y ejes.

---

## 4. Paleta (tokens semánticos)

**Escala neutra, monocroma, tema oscuro único.** La paleta son cinco colores en escala de grises,
sin matiz, sin neón. El tema del sitio es **oscuro único**: se retira el par papel/tinta y el
acento esmeralda. El acento perdió el color (ver 4.D).

Desviación documentada (skill `design-taste-frontend` §8.B): la skill desaconseja `#000000` y
`#FFFFFF` puros. Aquí se usan **por decisión humana explícita** y con justificación editorial: la
profundidad no se construye tiñendo, se construye con el escalón de grises (`bg` → `surface` →
`surface-2`), con el hairline `border` y con la jerarquía de peso tipográfico de 4.E. Es una
desviación declarada y consciente, no un descuido.

### 4.A Los cinco colores base (fijos)

Son los únicos cinco valores del sitio. Cualquier otro hex es un fallo (ver 4.F).

| Hex | Nombre | Rol base |
|---|---|---|
| `#000000` | Negro | Fondo, tinta sobre relleno claro |
| `#FFFFFF` | Blanco | Texto primario, acento, realce máximo |
| `#B3B3B3` | Gris claro | Texto secundario |
| `#262626` | Gris carbón | Superficies, realce suave |
| `#737373` | Gris medio | Terciario/meta, UI |

### 4.B Tokens semánticos (dark)

| Token | Hex | Derivación | Rol |
|---|---|---|---|
| `bg` | `#000000` | base | Fondo de página |
| `surface` | `#262626` | base | Tarjetas, paneles |
| `surface-2` | `#333333` | blanco al 20% sobre negro | Superficie elevada: hover, panel anidado, chip activo |
| `ink` | `#FFFFFF` | base | Texto primario |
| `ink-muted` | `#B3B3B3` | base | Texto secundario, cuerpo de párrafo |
| `ink-subtle` | `#737373` | base | Terciario/meta. **Solo texto grande y UI** (ver 4.C) |
| `border` | `#404040` | blanco al 25% sobre negro | Hairline: bordes, divisores, inputs |
| `border-strong` | `#737373` | = `ink-subtle` | Borde interactivo que exige 3:1 (UI) |
| `accent` | `#FFFFFF` | base | **Sin matiz.** Enlaces, foco, cifra protagonista |
| `accent-soft` | `#262626` | = `surface` | Realce neutro: chips, selección, cita |
| `accent-ink` | `#000000` | base | Texto sobre relleno blanco (botón invertido) |
| `focus` | `#FFFFFF` | = `accent` | Anillo de foco (offset = `bg`) |

Justificación de los derivados (todos siguen siendo monocromos: R = G = B):

- `surface-2` sube un escalón **más claro** que `surface` (blanco al 20% sobre negro, `#333333`).
  En tema oscuro la elevación se lee como más luz, así que la superficie activa o anidada es más
  clara que la base. Mezcla de blanco con alfa dentro de la escala.
- `border` es un escalón intermedio (`#404040`, blanco al 25% sobre negro). Se elige por encima de
  `surface` para que el hairline sea perceptible tanto sobre `bg` como sobre `surface`. Es un
  divisor decorativo, no un límite interactivo (ver 4.C).
- `border-strong` reutiliza el valor de `ink-subtle` (`#737373`) porque es el escalón más bajo que
  supera 3:1 sobre `surface` (3.19:1), que es lo que WCAG 1.4.11 pide a un borde de componente.
- Todos los derivados salen de mezclar blanco con negro en alfa, o de reutilizar un gris ya dado.
  Ninguno introduce canal de color.

### 4.C Contraste verificado (WCAG 2.1)

Ratios con la fórmula de luminancia relativa. AA texto normal = 4.5:1, texto grande = 3:1,
UI/gráficos = 3:1, AAA texto normal = 7:1.

| Par | Ratio | Veredicto |
|---|---|---|
| `ink #FFFFFF` sobre `bg #000000` | **21.0:1** | AAA |
| `ink #FFFFFF` sobre `surface #262626` | **15.13:1** | AAA |
| `ink #FFFFFF` sobre `surface-2 #333333` | **12.63:1** | AAA |
| `ink-muted #B3B3B3` sobre `bg #000000` | **10.02:1** | AAA |
| `ink-muted #B3B3B3` sobre `surface #262626` | **7.22:1** | AAA |
| `ink-muted #B3B3B3` sobre `surface-2 #333333` | **6.03:1** | AA+ |
| `ink-subtle #737373` sobre `bg #000000` | **4.43:1** | AA solo texto grande (>=24px, o >=18.66px bold) |
| `ink-subtle #737373` sobre `surface #262626` | **3.19:1** | UI / texto grande (3:1) |
| `border #404040` sobre `bg #000000` | **2.03:1** | Divisor decorativo (no aplica 1.4.11) |
| `border #404040` sobre `surface #262626` | **1.46:1** | Divisor decorativo |
| `border-strong #737373` sobre `surface #262626` | **3.19:1** | UI (1.4.11, pasa 3:1) |
| `accent #FFFFFF` sobre `bg #000000` | **21.0:1** | AAA (enlace/foco) |
| `accent #FFFFFF` sobre `surface #262626` | **15.13:1** | AAA |
| `accent-ink #000000` sobre relleno `accent #FFFFFF` | **21.0:1** | AAA (botón invertido) |
| `ink #FFFFFF` sobre `accent-soft #262626` | **15.13:1** | AAA (chip/cita) |

No hay ningún par con matiz que reportar: ya no existe color con hue.

Reglas que se derivan:

- **Corrección de `ink-subtle`.** `#737373` sobre `bg` da **4.43:1**, por debajo de AA para texto
  normal (4.5:1). Se corrige **dentro de la escala**, sin meter color: `ink-subtle` queda
  restringido a **texto grande** (>=24px, o >=18.66px bold) y a **UI no textual** (iconos, bordes,
  estados inactivos), donde el umbral es 3:1 y sí pasa (4.43:1 sobre `bg`, 3.19:1 sobre `surface`).
  Ningún texto pequeño (captions de 13px, metadatos) usa `ink-subtle`: esos van en `ink-muted`.
  Si en el futuro se necesita `#737373` para texto pequeño, la alternativa monocroma permitida es
  subir un escalón a `#757575` (4.56:1 sobre `bg`), que sigue siendo un gris neutro; queda a
  criterio del humano porque se sale de los cinco hex fijados.
- **`border` es un hairline decorativo**, no un límite interactivo: no pretende 3:1. Cuando el
  borde separa un componente que el usuario necesita identificar (input, tarjeta interactiva,
  control), se usa `border-strong` (`#737373`, 3.19:1 sobre `surface`) o `accent` (blanco) si el
  límite debe ser fuerte.
- **Botón.** El CTA de relleno invierte: fondo `accent` blanco, texto `accent-ink` negro, 21.0:1
  AAA. El CTA fantasma (outline) usa `accent` blanco con `border-strong`, sobre `bg` o `surface`,
  texto `ink` (>=15:1). Ningún par cae bajo AA.
- **Foco.** Anillo `focus #FFFFFF` de 2px con offset 2px: 21.0:1 sobre `bg`. El foco nunca se marca
  solo con un cambio de color de texto, siempre con el anillo.

### 4.D El acento perdió el matiz (cambio documentado)

Antes: acento único esmeralda (con matiz verde), hoy retirado. **Ese acento se retira por
completo.** El color de acento ahora es **blanco puro `#FFFFFF`**, el extremo de máxima luz de la
escala neutra y de máximo contraste (21:1 sobre `bg`, 15.13:1 sobre `surface`). El `accent-soft`
pasa de tinte verde a **carbón `#262626`**: un realce neutro que se lee como superficie, no como
color.

Consecuencia: ya no hay un tono que "diferencie" por sí mismo. La jerarquía se resuelve por forma
y por intensidad de blanco, no por hue (ver 4.E).

### 4.E Jerarquía y realce sin color

Como no hay matiz que distinga, todo se separa por tamaño, peso, tracking, caja y valor de blanco.
Regla base: **cuanto más importante, más blanco y más grande; cuanto menos, más gris y más
pequeño.** Nunca dos recursos de énfasis a la vez sobre el mismo elemento.

| Elemento | Cómo se distingue |
|---|---|
| **Eyebrow / `label`** | Geist Mono 12px, `ink-muted #B3B3B3` (10:1), uppercase, `tracking 0.16em`. Se distingue por **forma** (mono + mayúsculas + tracking ancho), no por color. Máx. 1 por cada 3 secciones. Nunca en `ink-subtle` (12px no pasa AA). |
| **Título de sección (`h2`-`h3`)** | `ink #FFFFFF`, peso 600, `tracking` negativo, tamaño grande. La jerarquía es **tamaño + peso**. |
| **Cuerpo (`body`, `lead`)** | `ink-muted #B3B3B3` (10:1 sobre `bg`, 7.22:1 sobre `surface`). El cuerpo es gris; el blanco puro se reserva a lo que manda. |
| **Meta / caption (13px)** | `ink-muted #B3B3B3`. **No** `ink-subtle` (13px es texto normal y `#737373` da 4.43:1, bajo AA). |
| **Cifra protagonista** | `figure-lg` en `ink #FFFFFF` (ya no en un color de acento). Se distingue por **tamaño (32-48px) + mono**, no por tono. |
| **Cifra de apoyo / eje** | Geist Mono `figure`/`figure-sm` en `ink-muted`. Menos blanca y más pequeña que la protagonista. |
| **Enlace (`accent`)** | Texto `accent` blanco + **subrayado persistente** (`text-decoration: underline`, `text-underline-offset: 3px`, `text-decoration-thickness: 1px`, `text-decoration-color: #737373`). La affordance es el subrayado, no el color. |
| **Hover de enlace** | El texto sigue blanco; el subrayado pasa a `#FFFFFF` y a 2px. Feedback = refuerzo del trazo, `150ms`. |
| **Focus visible** | Anillo `focus #FFFFFF` 2px, `outline-offset: 2px`, `border-radius: var(--radius-sm)`. Nunca solo un cambio de color de texto. |
| **Active / seleccionado** | **Inversión**: relleno `accent #FFFFFF`, texto `accent-ink #000000` (21:1). Es la señal más fuerte disponible sin hue. Alternativa de bajo peso: fondo `accent-soft #262626` + `border-strong`. |
| **Nav / tab activo** | Texto `ink #FFFFFF` + `border-bottom: 1px` en `accent #FFFFFF`. Inactivo: `ink-subtle #737373` + borde transparente (el item inactivo es solo UI, cumple 3:1). |
| **Chip / tag** | Fondo `accent-soft`, texto `ink`, `border` hairline; `radius-pill` solo si es etiqueta de estado. |
| **Deshabilitado** | `ink-subtle #737373` (el estado inactivo está exento de contraste WCAG) y `cursor: not-allowed`, sin opacidad adicional. |
| **Separador / divisoria** | `border` hairline (`#404040` de 1px) o `divide-y`. |

Reglas duras de jerarquía:

- El **blanco puro se gasta**: no se usa `#FFFFFF` en el cuerpo ni en metadatos. Si todo es blanco,
  nada destaca. Cuerpo y meta en `ink-muted`; blanco para títulos, enlaces y cifra protagonista.
- **Un solo recurso de énfasis por elemento** (tamaño, o peso, o inversión). No se acumulan.
- **Cero énfasis por color.** Ningún realce teal, azul, rojo de error, etc. El estado de error vive
  en el texto explícito más un icono o `border-strong`, nunca en un rojo fuera de la escala.

### 4.F Reglas cero-IA (prohibiciones)

- **Prohibido glow / box-shadow de color.** Ningún `box-shadow` con alfa de color, ningún
  `text-shadow`, ningún resplandor detrás de botones o cifras. En oscuro la elevación se comunica
  con `surface-2` + `border`, nunca con luz.
- **Prohibido gradiente con matiz.** Ningún `linear-gradient`/`radial-gradient` entre dos tonos de
  color. Si se necesita un degradado, es entre dos pasos de la escala neutra y solo como máscara
  de imagen, jamás de fondo decorativo.
- **Prohibido neón.** Ningún hex saturado. Cualquier valor fuera de los cinco base (o de sus
  mezclas blanco/negro en alfa) es un fallo.
- **Prohibido glassmorphism.** Nada de `backdrop-filter: blur` como lenguaje, ni paneles
  translúcidos. Las superficies son opacas: `bg`, `surface`, `surface-2`.
- **Prohibido tinte de color en sombras y bordes.** En oscuro no hay sombras y ningún borde lleva
  matiz.
- **Un solo acento, que ahora es blanco.** No reaparece ningún color de señal. El único extra es la
  inversión blanco/negro.

---

## 5. Espaciado y grid

### 5.A Escala

Unidad base 4px. Tokens de espacio (espaciado Tailwind v4 los genera igual; se documenta para
las excepciones):

`space-1 4 · space-2 8 · space-3 12 · space-4 16 · space-5 20 · space-6 24 · space-8 32 ·
space-10 40 · space-12 48 · space-16 64 · space-20 80 · space-24 96 · space-32 128 · space-40 160`

Ritmo vertical:

- Sección: `--space-section: clamp(5rem, 10vw, 8rem)` (80px a 128px).
- Bloque interno: `space-8` (32px) entre bloques, `space-6` (24px) dentro de bloques.
- Escala de encabezado a cuerpo: `space-4` (16px).

### 5.B Contenedor

```
mx-auto w-full max-w-[1400px] px-5 md:px-8 lg:px-12
```

Gutter: 20px (móvil), 32px (md), 48px (lg+).

### 5.C Grid

Editorial de 12 columnas con asimetría de VARIANCE 6:

```
grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6 lg:gap-8
```

- Móvil (`< 768px`): todo colapsa a una columna (`w-full`).
- `md`: 8 columnas.
- `lg+`: 12 columnas con spans desiguales (ej. 7/5, 5/4/3).

### 5.D Breakpoints

Estándar Tailwind, documentados:

`sm 640 · md 768 · lg 1024 · xl 1280 · 2xl 1536`

---

## 6. Radios

Un solo sistema, conservador y de tinte editorial (nada de pills sobre todo, nada de tarjetas
hiper-redondeadas). Toda esquina del sitio sale de esta escala:

| Token | Valor | Uso |
|---|---|---|
| `radius-xs` | `4px` | Chips pequeños, barras de dato |
| `radius-sm` | `6px` | Inputs, botones |
| `radius-md` | `8px` | Superficies medianas |
| `radius-lg` | `12px` | Paneles grandes (uso raro) |
| `radius-pill` | `999px` | Solo etiquetas/tags, y nada más |

Regla documentada (skill §4.4, Shape Consistency Lock): el valor por defecto es `radius-md`
(8px). Botones e inputs suben a `radius-sm` (6px), nunca a pill, salvo una etiqueta de estado.
No se introducen valores fuera de la lista. Un botón pill en un layout cuadrado, o una tarjeta
redondeada en una página de botones pill, es un Pre-Flight Fail.

---

## 7. Sombras y superficies

### 7.A Sombras: ninguna

El tema es **oscuro único** y **no usa sombras**. Una sombra de color está prohibida (regla
cero-IA, 4.F) y una sombra neutra sobre `#000000` es invisible de todos modos. La elevación se
comunica **solo** con el escalón de superficie (`bg` → `surface` → `surface-2`) y con el hairline
`border`. Tokens de sombra: `--shadow-sm: none; --shadow-md: none;` (declarados para que el código
no rompa, con valor `none`).

### 7.B Cuándo usar tarjeta y cuándo no

Regla editorial: **por defecto, no hay tarjeta.** Agrupar con `border-t`, `divide-y` espaciado o
espacio negativo. Una tarjeta (superficie + borde) se usa **solo** cuando la elevación
comunica jerarquía real: reutilización de un artefacto, un dato destacado que debe aislarse, una
pieza interactiva con hover. Máximo una familia de tarjeta en todo el sitio.

Prohibido: filas de tres tarjetas iguales (skill §9.C) y tarjetas de relleno en fila. DENSITY 5
permite tarjetas, pero el layout preferido es plano con hairlines y aire.

---

## 8. Motion

Banda del dial 5 = **Fluid CSS** (skill §7). Se anima lo que comunica: jerarquía, secuencia,
feedback o transición de estado. Nada decorativo.

### 8.A Curvas

```css
--ease-standard: cubic-bezier(0.22, 1, 0.36, 1);   /* transiciones de UI */
--ease-entrance: cubic-bezier(0.16, 1, 0.3, 1);    /* reveals (ver skill §5.C) */
--ease-exit:     cubic-bezier(0.4, 0, 1, 1);       /* salidas */
```

### 8.B Duraciones

| Token | Valor | Uso |
|---|---|---|
| `duration-fast` | `150ms` | Hover, focus, color |
| `duration-base` | `220ms` | Transición de UI por defecto |
| `duration-slow` | `400ms` | Movimientos mayores (paneles, acordeones) |
| `duration-reveal` | `600ms` | Entrada de bloque en viewport |

Por defecto del tema: `--default-transition-duration: 220ms` y
`--default-transition-timing-function: var(--ease-standard)`.

### 8.C Qué se anima

- **Entradas**: hero (opacidad + `translateY(16px)`) al montar; secciones con `whileInView`
  (skill §5.C), `once: true`, `amount: 0.3`, stagger `i * 0.06`.
- **Hover**: enlaces con color + subrayado; CTA con `translateY(-1px)`; tarjetas interactivas
  con elevación sutil.
- **Reveal por scroll**: solo `opacity` y `transform`. Nunca `top/left/width/height`.
- **Active/tactile**: `scale(0.98)` o `translateY(1px)` (skill §4.5).
- **Estado**: Motion `layout`/`layoutId` solo para cambios visibles reales (reordenar, expandir).

Solo `transform` y `opacity` se animan (skill §6.A). `will-change` puntual y removido.

### 8.D Reduced motion (obligatorio, dial > 3)

- En componentes: `useReducedMotion()` de `motion/react`; si es `true`, `initial={false}` y sin
  transición.
- En CSS: todo movimiento envuelto en `@media (prefers-reduced-motion: reduce)` que lo colapsa a
  estado estático (opacidad instantánea). Parallax, scroll-hijack y física: **prohibidos** en este
  sistema de todos modos (no hay GSAP).
- `scroll-behavior: smooth` se desactiva bajo reduced-motion.

### 8.E Prohibiciones de motion

- Nada de `window.addEventListener("scroll")` (skill §5.D, ban duro). Solo Motion
  `useScroll`/`whileInView`, IntersectionObserver o CSS scroll-driven.
- Nada de loops infinitos por defecto (skill §5).
- Nada de GSAP salvo scroll-telling real y justificado. Este sistema no lo necesita.
- Nunca mezclar Motion y GSAP en el mismo árbol.

---

## 9. Z-index

Escala única y documentada (skill §6.F). Nada de `z-50` arbitrario; usar estos nombres.

| Token | Valor | Capa |
|---|---|---|
| `z-base` | `0` | Contenido normal |
| `z-raised` | `10` | Elementos elevados dentro de una sección |
| `z-sticky` | `20` | Cabeceras de sección pegajosas |
| `z-nav` | `40` | Barra de navegación |
| `z-overlay` | `60` | Scrim / fondo de modal |
| `z-modal` | `70` | Diálogo |
| `z-toast` | `80` | Avisos transitorios |
| `z-grain` | `90` | Textura fija (si se usa; `pointer-events-none`) |
| `z-skip` | `100` | Enlace "saltar al contenido" |

---

## 10. Mapeo a Tailwind v4

Bloque listo para `app/globals.css`. Tema **oscuro único**: se fija en `:root`, sin variante
`dark:` y sin `data-theme` (no existe un segundo tema). Tokens semánticos expuestos como
utilidades (`bg-bg`, `text-ink`, `border-border`, `text-accent`, ...).

```css
@import "tailwindcss";

/* Tema oscuro único. Sin variante dark: y sin inversión por sección. */
:root {
  color-scheme: dark;

  /* Escala neutra (monocroma: R = G = B en todos los valores) */
  --bg: #000000;            /* negro */
  --surface: #262626;       /* gris carbón (tarjetas/paneles) */
  --surface-2: #333333;     /* blanco 20% sobre negro (elevada/hover) */
  --ink: #FFFFFF;           /* blanco (texto primario, acento) */
  --ink-muted: #B3B3B3;     /* gris claro (texto secundario) */
  --ink-subtle: #737373;    /* gris medio (terciario/UI, solo texto grande) */
  --border: #404040;        /* blanco 25% sobre negro (hairline) */
  --border-strong: #737373; /* = ink-subtle (borde interactivo, 3:1) */

  /* Acento sin matiz */
  --accent: #FFFFFF;
  --accent-soft: #262626;   /* realce neutro (chip/selección), = surface */
  --accent-ink: #000000;    /* texto sobre relleno blanco */
  --focus: #FFFFFF;

  /* Sin sombras: la elevación es superficie + borde. */
  --shadow-sm: none;
  --shadow-md: none;
}

@theme inline {
  /* Color semántico */
  --color-bg: var(--bg);
  --color-surface: var(--surface);
  --color-surface-2: var(--surface-2);
  --color-ink: var(--ink);
  --color-ink-muted: var(--ink-muted);
  --color-ink-subtle: var(--ink-subtle);
  --color-border: var(--border);
  --color-border-strong: var(--border-strong);
  --color-accent: var(--accent);
  --color-accent-soft: var(--accent-soft);
  --color-accent-ink: var(--accent-ink);
  --color-focus: var(--focus);

  /* Tipografía */
  --font-display: var(--font-geist);
  --font-sans: var(--font-geist);
  --font-mono: var(--font-geist-mono);

  /* Radios */
  --radius-xs: 4px;
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-pill: 999px;

  /* Motion */
  --ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-entrance: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-exit: cubic-bezier(0.4, 0, 1, 1);
  --default-transition-duration: 220ms;
  --default-transition-timing-function: var(--ease-standard);
}

@layer base {
  html {
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
  }
  body {
    background-color: var(--bg);
    color: var(--ink);
    font-family: var(--font-sans);
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  .tnum {
    font-variant-numeric: tabular-nums slashed-zero;
    font-feature-settings: "tnum" 1, "zero" 1;
  }
  :focus-visible {
    outline: 2px solid var(--focus);
    outline-offset: 2px;
    border-radius: var(--radius-sm);
  }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
```

Notas de implementación:

- **Un solo tema.** `color-scheme: dark` en `:root`. No hay `data-theme`, no hay `dark:`, no hay
  toggle. Ninguna sección invierte a claro (skill §4.11, Page Theme Lock).
- Las variables de sombra se mantienen declaradas con `none` para no romper utilidades que las
  referencien; no se usa ninguna sombra real.
- `min-h-[100dvh]`, nunca `h-screen`.

---

## 11. Artefactos de dato

Cómo se renderizan las cifras y micro-gráficas, y cómo se tratan las imágenes reales.

### 11.A Cifras

- Toda cifra en **Geist Mono con `tabular-nums`** (`figure`, `figure-lg`, `figure-sm`, `code`).
- Cifra protagonista de un caso: `figure-lg` en `text-ink` (blanco, ya no en un color de acento).
  El resto de cifras en `text-ink-muted`. La jerarquía es tamaño + mono, no tono (4.E).
- Significado y fuente de cada cifra salen de `content.md`: se maquetan como pareja
  cifra + glosa en `body-sm` + `caption` para la fuente. Nunca se inventa ni se redondea por
  estética (regla de honestidad de AGENTS.md).
- Los estados "sin resultados" y "en desarrollo" se maquetan como texto, no como cifra. Una
  ausencia no se disfraza de cero.

### 11.B Micro-gráficas (sparklines / small-multiples)

- **SVG inline** con las cifras reales del `content-curator`, nunca barras decorativas.
- Trazo en `stroke="var(--ink)"` (serie enfatizada) o `stroke="var(--ink-muted)"` (series
  secundarias), `stroke-width` 1.5-2. Sin relleno de área con matiz: como máximo un velo neutro
  `fill="rgba(255,255,255,0.06)"`. Nunca `accent-soft` como relleno de gráfica (es superficie, no
  color).
- **Prohibido**: barras de progreso con pista de fondo rellena (`bg-zinc-200` con relleno parcial
  encima). Es clutter de dashboard (skill §9.F). Si se compara "X de Y", usar número + icono o
  una micro-barra sin pista.
- Ejes y etiquetas de eje en `figure-sm` (mono). Gridlines solo si organizan dato real, jamás de
  decoración.
- El realce de una serie es por **peso de trazo y valor de gris** (blanco frente a gris claro), no
  por color ni por relleno saturado.

### 11.C Imágenes reales (`next/image`)

Todas pasan por `next/image`. Relación de aspecto según `docs/ASSETS.md`; se reserva el espacio
con `width`/`height` o `aspect-ratio` para CLS < 0.1.

| Archivo | Dimensiones | Relación | `object-fit` |
|---|---|---|---|
| `public/assets/isp/pipeline.png` | 2670x5065 | ~1:1.9 vertical | `object-contain` (diagrama largo) |
| `public/assets/isp/encuesta.png` | 1800x1351 | 4:3 | `object-cover` |
| `public/assets/isp/informe-general.png` | 1411x1071 | ~4:3 | `object-cover` |
| `public/assets/isp/contratistas.png` | 1103x868 | ~5:4 | `object-cover` (opcional) |
| `public/assets/kira/kira-ai.png` | 1024x1536 | 2:3 vertical | `object-cover` |
| `public/assets/kira/workflow-n8n.png` | 8192x1528 | ~5.4:1 panorámica | `object-contain` (recorte/zoom en móvil) |
| `public/assets/kira/chatbot-flujo.png` | 4414x8150 | ~1:1.85 vertical | `object-contain` |
| `public/assets/retail/orquestacion-ia.svg` | vectorial (contenedor 1600x900) | 16:9 | `object-contain` |
| `public/assets/home/portrait.jpg` | 800x1000 | 4:5 | `object-cover` (pendiente del usuario) |
| `public/assets/home/og.jpg` | 1200x630 | ~1.9:1 | Open Graph |

Reglas:

- **Hero image** con `priority` (LCP). El resto `loading="lazy"`.
- `alt` descriptivo obligatorio; decorativas `alt=""`.
- Diagramas largos/verticales (pipeline, chatbot) se contienen, no se recortan.
- **Nunca** se simula una captura con `<div>` (skill §4.8). Si falta el asset, se deja slot
  explícito y se anota (ya resuelto en `docs/ASSETS.md`; el caso Retail se ilustra con la
  orquestación IA, no con tableros).
- Sin pills ni etiquetas sobre las imágenes; el pie va fuera, en `caption` (skill §9.F).

---

## 12. Chequeo contra el Pre-Flight (skill §14), en lo que aplica al sistema

| Ítem del Pre-Flight | Estado en el sistema |
|---|---|
| Design read declarado (§0.B) | Sí, sección 1 |
| Dials explícitos y razonados | Sí, sección 2 |
| Sistema elegido o estética etiquetada con honestidad | Sí: Tailwind v4 + CSS vars, estética editorial declarada |
| Cero em-dashes | Sí: regla dura aplicada a todo token/string |
| Page Theme Lock (un tema por página) | Sí: tema **oscuro único** en `:root`; ninguna sección invierte |
| Color Consistency Lock (un acento) | Sí: acento **sin matiz** (`#FFFFFF`) sobre escala neutra. Ya no hay color de acento con hue. |
| Shape Consistency Lock (un sistema de radio) | Sí: sección 6 |
| Button Contrast Check | Sí: 21.0:1 (texto negro `accent-ink` sobre relleno blanco `accent`) |
| Form Contrast Check | Sí: tokens AA; inputs usan `border`/`border-strong` + `ink` + `focus` |
| Italic descender clearance | N/A (no hay itálicas en display en el sistema) |
| Reduced motion | Sí: sección 8.D |
| Dark mode tokens (tema oscuro único) | Sí: sección 4 |
| Viewport stability `min-h-[100dvh]` | Sí: documentado, nunca `h-screen` |
| Sin Inter por defecto / sin Fraunces / Instrument Serif | Sí: Geist / Geist Mono |
| Cero glows neón / gradiente morado / color con matiz | Sí: escala neutra; `#000000`/`#FFFFFF` puros por decisión humana documentada (4, intro) |
| Long lists / barras con pista rellena | Sí: prohibido en artefactos de dato (§11.B) |
| `tabular-nums` en cifras | Sí: sección 3.C |

Los ítems de Pre-Flight que dependen del layout por página (eyebrow count, hero fits viewport,
zigzag cap, layout-repetition, CTA intent) **no** se cierran aquí: son criterios de la spec 004 y
del QA 006. Este archivo entrega el sistema que los hace cumplibles.

---

## 13. Decisiones abiertas para HG 003

1. **Geist Display como corte dedicado.** Hoy el rol Display usa Geist (una familia variable de
   `next/font/google`). Si el humano quiere el corte Display real, se cambia a `next/font/local`.
   Requiere aprobación.
2. **Paleta monocroma (cerrada por decisión humana).** Se retiró el papel off-white y el acento
   esmeralda. El sitio es **oscuro único** con cinco colores neutros (`#000000`, `#FFFFFF`,
   `#B3B3B3`, `#262626`, `#737373`); ver sección 4. Ya no queda la decisión de "papel más cálido"
   ni de matiz de acento. Único punto abierto: si `ink-subtle` debe cubrir texto pequeño, subir a
   `#757575` (ver 4.C).
3. **`docs/ASSETS.md`.** Ya está sincronizado con `content.md` (lista `orquestacion-ia.svg`,
   declara el caso Retail sin capturas). No requiere acción; se deja constancia porque
   `content.md` traía una nota de sincronización desactualizada.
4. **Casos de `content.md` aún no decididos** que afectan densidad visual: GNSS RTK es OPCIONAL,
   y Retail y KIRA declaran estados honestos. La spec 004 decide su presencia. No cambia tokens.

---

## Documentación

Estado de sincronización al cerrar esta tarea:

```text
AGENTS.md:   NOT MODIFIED
docs/:       NOT NEEDED
specs/:      UPDATED (specs/003-design-system/tokens.md: paleta redefinida a escala neutra, tema oscuro único)
MEMORY.md:   NOT MODIFIED (lo actualiza portfolio-master)
```
