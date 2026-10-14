# 008 - Redesign: portafolio de una página

## Estado

**OPEN** — en curso.

## Propósito

Convertir el sitio (multi-página con mucho aire) en un **portafolio de una sola página**,
compacto y fácil de recorrer para recursos humanos: quien entra ve el perfil, el stack, los
casos y el contacto sin fricción.

## Cambios solicitados por el humano

| # | Cambio |
|---|---|
| 1 | Una sola página `/` con secciones ancladas (quitar las rutas `/casos/*`, `/automatizaciones/kira`, `/sobre-mi`). |
| 2 | Quitar la sección **Fundamentos SQL**. |
| 3 | Agregar **Stack tecnológico** con iconos reales de las herramientas. |
| 4 | Reducir el CTA: "Escríbeme" solo 2 veces (perfil + contacto). El nav usa "Contacto" como ancla. |
| 5 | **Compactar**: menos padding vertical, secciones más densas. |
| 6 | Quitar las galerías de "Evidencia" (imágenes feas y una repetida). Dejar lugar para imágenes nuevas del usuario. |
| 7 | Agregar certificaciones: **Claude Code in Action** (Anthropic) e **Iniciación al Desarrollo con IA** (BIG school). |
| 8 | Bajar el tono "comercial": estructura sobria de portafolio, no de landing. |

## Alcance

- Reescritura de `app/page.tsx` como página única.
- Eliminar `app/casos/**`, `app/automatizaciones/**`, `app/sobre-mi/**`.
- Nueva sección Stack (iconos de marca reales; sin imágenes rotas: fallback a nombre).
- Ajuste de spacing (tokens compactos) y de la política de CTA.
- Certificaciones completas (6).

## Fuera de alcance

- Imágenes nuevas (el usuario las traerá). Se dejan slot(s) marcados.
- Dominio propio, `og:image`.

## Datos

- CV del autor (experiencia, habilidades, certificaciones).
- `specs/002-content/content.md` (copy base; se actualiza: Stack reemplaza SQL; certs nuevas).

## Criterios de aceptación

- [ ] Una sola página, con secciones claras y anclas.
- [ ] Stack con iconos reales (ninguna imagen rota).
- [ ] "Escríbeme" aparece máximo 2 veces; nav con "Contacto".
- [ ] Sin sección de Fundamentos SQL.
- [ ] Sin galerías de evidencia con imágenes feas/repetidas.
- [ ] 6 certificaciones.
- [ ] `build` y `lint` en verde.
- [ ] Aprobación humana.

## Riesgos

| Riesgo | Mitigación |
|---|---|
| Demasiado largo en una página | Secciones compactas + anclas |
| Iconos de marca inexistentes | Fallback a nombre de la herramienta |
| Perder contenido de los casos | Casos compactos con métricas clave |
