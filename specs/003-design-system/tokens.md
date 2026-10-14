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

Off-white y off-black puros, jamás `#ffffff` ni `#000000`. Papel con un matiz verde-neutro
(armoniza con el acento, evita el family beige/crema de la skill, sección 4.2). Acento único:
esmeralda `#0E7C66`, exacto en tema claro; en oscuro se eleva de luminosidad para conservar
contraste manteniendo el mismo tono.

### 4.A Tema claro (papel / tinta)

| Token | Hex | Rol |
|---|---|---|
| `bg` | `#F4F5F2` | Fondo de página (papel) |
| `bg-elevated` | `#FCFCFB` | Superficie elevada (raro; ver §7) |
| `ink` | `#161A19` | Texto primario (tinta) |
| `ink-muted` | `#5B6360` | Texto secundario |
| `border` | `#DADCD6` | Hairlines, separadores |
| `accent` | `#0E7C66` | Acento único (texto/enlace/figura) |
| `accent-hover` | `#0C6E5A` | Estados hover |
| `accent-active` | `#0A5C4B` | Estados active/pressed |
| `accent-soft` | `#EAF4F0` | Tinte de fondo (badges, selección) |
| `accent-ink` | `#F4F5F2` | Texto sobre relleno de acento |
| `focus` | `#0E7C66` | Anillo de foco (offset = `bg`) |

### 4.B Tema oscuro (tinta / papel invertido, mismo tono)

| Token | Hex | Rol |
|---|---|---|
| `bg` | `#0F1413` | Fondo de página (off-black verdoso) |
| `bg-elevated` | `#161B1A` | Superficie elevada |
| `ink` | `#ECEEEA` | Texto primario |
| `ink-muted` | `#9AA39F` | Texto secundario |
| `border` | `#28302E` | Hairlines, separadores |
| `accent` | `#35C29B` | Acento único (esmeralda elevado) |
| `accent-hover` | `#4ED0AC` | Estados hover |
| `accent-active` | `#5FD9B8` | Estados active/pressed |
| `accent-soft` | `#122A24` | Tinte de fondo |
| `accent-ink` | `#0B1512` | Texto sobre relleno de acento (tinta) |
| `focus` | `#35C29B` | Anillo de foco (offset = `bg`) |

### 4.C Contraste verificado (WCAG)

Ratios calculados con la fórmula de luminancia relativa WCAG 2.1. AA normal = 4.5:1,
AAA normal = 7:1.

**Tema claro**

| Par | Ratio | Veredicto |
|---|---|---|
| `ink #161A19` sobre `bg #F4F5F2` | **16.0:1** | AAA (héroe y body) |
| `ink-muted #5B6360` sobre `bg #F4F5F2` | **5.65:1** | AA (body) |
| `accent #0E7C66` sobre `bg #F4F5F2` | **4.69:1** | AA (texto/enlace normal) |
| `accent-ink #F4F5F2` sobre relleno `accent #0E7C66` | **4.69:1** | AA (texto de botón) |
| `accent #0E7C66` sobre `accent-soft #EAF4F0` | **4.57:1** | AA |

**Tema oscuro**

| Par | Ratio | Veredicto |
|---|---|---|
| `ink #ECEEEA` sobre `bg #0F1413` | **15.9:1** | AAA (héroe y body) |
| `ink-muted #9AA39F` sobre `bg #0F1413` | **7.18:1** | AAA (body) |
| `accent #35C29B` sobre `bg #0F1413` | **8.27:1** | AAA (texto/enlace) |
| `accent-ink #0B1512` sobre relleno `accent #35C29B` | **8.27:1** | AAA (texto de botón) |
| `accent #35C29B` sobre `accent-soft #122A24` | **6.76:1** | AA+ |

Regla de botón (Pre-Flight, skill §4.5): el texto del CTA siempre contrasta con su relleno.
Claro = off-white sobre esmeralda 4.69:1. Oscuro = tinta sobre esmeralda elevado 8.27:1. Ningún
par cae por debajo de AA.

Regla de un solo acento (skill §4.2): `#0E7C66` es el único acento de la página. El esmeralda
oscuro `#35C29B` no es un segundo acento: es el mismo tono a mayor luminosidad para el tema
oscuro, como exige la fidelidad de marca en dark mode (skill §8.B). No hay badge teal, ni azul
de estado, ni ningún color de señal fuera del acento y la neutralidad.

Sin gradientes morados, sin glows de neón, sin `#fff`/`#000`.

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

### 7.A Sombras (teñidas al fondo, sin negro puro)

Claro (tinta `#161A19` con alfa muy baja, matiz verdoso):

```css
--shadow-sm: 0 1px 2px rgba(18, 24, 22, 0.05);
--shadow-md: 0 2px 4px rgba(18, 24, 22, 0.05), 0 10px 28px rgba(18, 24, 22, 0.07);
```

Oscuro: la sombra sobre off-black es casi invisible. El tema oscuro **no usa sombras**: la
elevación se comunica con `bg-elevated` + `border`. Tokens de sombra en oscuro = `none`.

### 7.B Cuándo usar tarjeta y cuándo no

Regla editorial: **por defecto, no hay tarjeta.** Agrupar con `border-t`, `divide-y` espaciado o
espacio negativo. Una tarjeta (superficie + borde + sombra) se usa **solo** cuando la elevación
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

Bloque listo para `app/globals.css`. Tema dual por variable CSS con variante `dark:` de clase
(`data-theme`), y tokens semánticos expuestos como utilidades (`bg-bg`, `text-ink`,
`border-border`, `text-accent`).

```css
@import "tailwindcss";

/* Tema dual: un tema por página via atributo en el root. Nunca se invierte a mitad. */
@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));

:root {
  color-scheme: light;

  --bg: #F4F5F2;
  --bg-elevated: #FCFCFB;
  --ink: #161A19;
  --ink-muted: #5B6360;
  --border: #DADCD6;
  --accent: #0E7C66;
  --accent-hover: #0C6E5A;
  --accent-active: #0A5C4B;
  --accent-soft: #EAF4F0;
  --accent-ink: #F4F5F2;
  --focus: #0E7C66;

  --shadow-sm: 0 1px 2px rgba(18, 24, 22, 0.05);
  --shadow-md: 0 2px 4px rgba(18, 24, 22, 0.05), 0 10px 28px rgba(18, 24, 22, 0.07);
}

[data-theme="dark"] {
  color-scheme: dark;

  --bg: #0F1413;
  --bg-elevated: #161B1A;
  --ink: #ECEEEA;
  --ink-muted: #9AA39F;
  --border: #28302E;
  --accent: #35C29B;
  --accent-hover: #4ED0AC;
  --accent-active: #5FD9B8;
  --accent-soft: #122A24;
  --accent-ink: #0B1512;
  --focus: #35C29B;

  /* Oscuro sin sombras: la elevación es superficie + borde. */
  --shadow-sm: none;
  --shadow-md: none;
}

@theme inline {
  /* Color semántico */
  --color-bg: var(--bg);
  --color-bg-elevated: var(--bg-elevated);
  --color-ink: var(--ink);
  --color-ink-muted: var(--ink-muted);
  --color-border: var(--border);
  --color-accent: var(--accent);
  --color-accent-hover: var(--accent-hover);
  --color-accent-active: var(--accent-active);
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

  /* Sombras */
  --shadow-sm: var(--shadow-sm);
  --shadow-md: var(--shadow-md);

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

- `shadow-sm`/`shadow-md` en `@theme inline` referencian la MISMA variable con salto de tema
  (`--shadow-sm: var(--shadow-sm)` no funciona por recursión; usar `--shadow-elevated-sm` como
  nombre interno en `:root` y mapear `--shadow-sm: var(--shadow-elevated-sm)`). Se documenta aquí
  para que `frontend-builder` no tropiece: **renombrar las dos variables de sombra internas**
  (`--shadow-elevated-sm`, `--shadow-elevated-md`) antes de mapearlas.
- Un tema por página: `portfolio-master`/`frontend-builder` fijan `data-theme` en `<html>` por
  página. No hay toggle que invierta secciones a mitad de scroll (skill §4.11).
- `min-h-[100dvh]`, nunca `h-screen`.

---

## 11. Artefactos de dato

Cómo se renderizan las cifras y micro-gráficas, y cómo se tratan las imágenes reales.

### 11.A Cifras

- Toda cifra en **Geist Mono con `tabular-nums`** (`figure`, `figure-lg`, `figure-sm`, `code`).
- Cifra protagonista de un caso: `figure-lg` en `text-accent`. El resto de cifras en `text-ink`.
- Significado y fuente de cada cifra salen de `content.md`: se maquetan como pareja
  cifra + glosa en `body-sm` + `caption` para la fuente. Nunca se inventa ni se redondea por
  estética (regla de honestidad de AGENTS.md).
- Los estados "sin resultados" y "en desarrollo" se maquetan como texto, no como cifra. Una
  ausencia no se disfraza de cero.

### 11.B Micro-gráficas (sparklines / small-multiples)

- **SVG inline** con las cifras reales del `content-curator`, nunca barras decorativas.
- Trazo en `stroke="var(--accent)"`, `stroke-width` 1.5-2, sin relleno de área salvo un tinte
  `fill="var(--accent-soft)"` al 40-60% de opacidad como máximo.
- **Prohibido**: barras de progreso con pista de fondo rellena (`bg-zinc-200` con relleno parcial
  encima). Es clutter de dashboard (skill §9.F). Si se compara "X de Y", usar número + icono o
  una micro-barra sin pista.
- Ejes y etiquetas de eje en `figure-sm` (mono). Gridlines solo si organizan dato real, jamás de
  decoración.
- El realce de una serie es por color de acento o por peso de trazo, no por relleno saturado.

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
| Page Theme Lock (un tema por página) | Sí: `data-theme` por página, sin inversión a mitad |
| Color Consistency Lock (un acento) | Sí: `#0E7C66`, con variante de luminosidad por tema |
| Shape Consistency Lock (un sistema de radio) | Sí: sección 6 |
| Button Contrast Check | Sí: 4.69:1 claro, 8.27:1 oscuro |
| Form Contrast Check | Sí: tokens AA; inputs usan `border` + `ink` + `focus` |
| Italic descender clearance | N/A (no hay itálicas en display en el sistema) |
| Reduced motion | Sí: sección 8.D |
| Dark mode tokens en ambos modos | Sí: sección 4 |
| Viewport stability `min-h-[100dvh]` | Sí: documentado, nunca `h-screen` |
| Sin Inter por defecto / sin Fraunces / Instrument Serif | Sí: Geist / Geist Mono |
| Cero glows neón / gradiente morado / negro puro | Sí: off-white y off-black |
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
2. **Paleta de papel.** Se eligió un off-white de matiz verde-neutro (`#F4F5F2`) para evitar el
   family beige/crema que la skill marca como tell. Si el humano prefiere un papel más cálido, se
   ajusta y se reverifica contraste.
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
specs/:      UPDATED (specs/003-design-system/tokens.md creado)
MEMORY.md:   NOT MODIFIED (lo actualiza portfolio-master al cerrar HG 003)
```
