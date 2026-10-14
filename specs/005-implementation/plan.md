# 005 - Implementation (plan)

## Pasos

1. **Scaffold:** crear `package.json` (next, react, react-dom, tailwindcss, @tailwindcss/postcss,
   motion, @phosphor-icons/react), `tsconfig.json`, `next.config.mjs`, `postcss.config.mjs`,
   `eslint` config. Instalar dependencias.
2. **Tokens:** escribir `app/globals.css` con `@import "tailwindcss"` y el bloque `@theme`
   (colores, tipografía, espaciado, radios) desde `tokens.md`.
3. **Fuentes:** `app/fonts.ts` con `next/font/google` (Geist, Geist Mono) y variables CSS.
4. **Layout global:** `app/layout.tsx` (metadata, fuentes, nav, footer) y componentes de nav/footer.
5. **Artefactos:** componentes reutilizables (cifra, micro-gráfica, rail de método, ficha).
6. **Páginas:** implementar las 6 rutas según `specs/004-page-specs/`.
7. **Imágenes:** usar las reales de `public/assets/` con `next/image` y `sizes`.
8. **Verificar:** `npm run build` y `npm run lint`.

## Verificación

- [ ] Build y lint sin errores.
- [ ] Rutas responden.
- [ ] Sin em-dashes visibles.
- [ ] Sin `h-screen`, sin `<img>` crudas.
- [ ] Nav en una línea a desktop.

## Rollback

Eliminar `app/`, `components/`, `public/assets` (no), y los archivos de config. Nada más se toca.
