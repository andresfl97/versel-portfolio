---
name: vercel-deploy
description: Convenciones para construir y desplegar el portafolio Next.js en Vercel. Úsalo para preparar el build, configurar el proyecto, variables de entorno, previews y dominio, y verificar el deploy de producción.
---

# Deploy en Vercel

Convenciones y pasos para llevar el portafolio a producción.

## Stack

Next.js (App Router). Se despliega en Vercel con detección automática; no hace falta
`vercel.json` salvo que se añadan reglas de redirección o headers.

## Antes de desplegar (checklist)

```
- [ ] npm run build pasa sin errores
- [ ] npm run lint limpio
- [ ] QA cerrado (anti-slop + a11y + performance)
- [ ] Sin secretos en el repo ni en el bundle (.env* ignorados)
- [ ] next/image en todas las imágenes; sin <img> crudas
- [ ] metadata: title, description, og:image, favicon
```

## Flujo

1. **Preview** para cada cambio (Vercel lo genera por rama/PR).
2. **Producción** sólo tras aprobación humana del preview.
3. Variables de entorno en el panel de Vercel, nunca en el repo.
4. Dominio: por defecto `*.vercel.app`; dominio propio sólo si el usuario lo indica.

## Verificación post-deploy

```
- [ ] La URL de producción responde 200
- [ ] / renderiza sin errores de consola
- [ ] Assets e imágenes cargan (no 404)
- [ ] Meta tags y og:image correctos
- [ ] Lighthouse básico >= objetivo (LCP < 2.5s, CLS < 0.1)
```

## Reglas

- No commitear ni pushear sin pedido explícito del usuario.
- No subir credenciales, tokens ni llaves.
- Si el build falla, devolver a `frontend-builder`; no parchear código desde deploy.
- No cerrar el gate de deploy sin aprobación humana de la URL de producción.
