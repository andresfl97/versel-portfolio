# 008 - Redesign (plan)

## Pasos

1. Reemplazar `app/page.tsx` por la página única con las 7 secciones.
2. Borrar las rutas `app/casos/**`, `app/automatizaciones/**`, `app/sobre-mi/**`.
3. Crear el componente `Stack` con iconos de marca (simple-icons) y fallback a chip de texto.
4. Ajustar spacing a compacto (reducir `py-*` de sección; hero sin 100dvh).
5. Reducir el CTA: quitar `CtaBand` repetidos; dejar CTA en perfil y en contacto.
6. Quitar el componente de galería de evidencia del flujo (conservarlo solo si aporta).
7. Actualizar navegación y footer (una línea, anclas).
8. `npm run build` + `npm run lint`.

## Verificación

- [ ] build + lint verdes.
- [ ] Una sola ruta de contenido (`/`) + 404.
- [ ] Anclas del nav funcionan (con `scroll-mt`).
- [ ] `grep "Escríbeme"` aparece <= 2 veces.
- [ ] Sin `src` de imágenes feas/repetidas.
