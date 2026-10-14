# 003 - Design System (plan)

## Pasos

1. **Design read:** declarar en una línea el tipo, audiencia, lenguaje y sistema.
2. **Dials:** fijar 6 / 5 / 5 y describir cómo afectan layout, motion y densidad.
3. **Tipografía:** escala (display, headings, body, caption, mono) con tamaños, tracking y
   line-height; pareja Geist Display/Geist/Geist Mono; `tabular-nums` para cifras.
4. **Color:** tokens semánticos (surface, surface-elevated, ink, ink-muted, border, accion,
   accent) para claro y oscuro; acento `#0E7C66`; verificar contraste.
5. **Espaciado y grid:** escala de espaciado, contenedor `max-w-[1400px]`, breakpoints.
6. **Radios:** un solo sistema (documentar la regla si hay más de un valor).
7. **Sombras y superficies:** sombras teñidas; un solo tratamiento de tarjeta o su ausencia.
8. **Motion:** curvas, duraciones, bandas por dial; reglas de `prefers-reduced-motion`.
9. **Z-index:** escala documentada.
10. **Mapeo Tailwind v4:** `@theme` con las variables.

## Verificación

- [ ] Contraste AA en body / AAA en héroe, en claro y oscuro.
- [ ] Un solo acento en todo el sistema.
- [ ] Sin fuentes prohibidas (Inter por defecto, Fraunces, Instrument Serif).
- [ ] `tabular-nums` definido para cifras.
- [ ] Motion con fallback de reducción.

## Salida

`specs/003-design-system/tokens.md` (sistema completo) y el design read al inicio.
