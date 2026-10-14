# ASSETS.md — Imágenes

Manifest de imágenes del sitio. Fuente de cada asset y estado. Mientras un asset falte,
`frontend-builder` deja un **slot explícito** en `public/assets/...` (nunca un `<div>` que
finja una captura).

Convención: `public/assets/<caso>/<nombre>.<ext>`. Todas pasan por `next/image`; el
optimizado lo hace Vercel en runtime (no hace falta recomprimir a mano).

## Home

| Archivo | Uso | Dimensiones | Estado |
|---|---|---|---|
| `public/assets/home/og.jpg` | Open Graph | 1200x630 | generable por el agente |
| `public/assets/home/portrait.jpg` | Foto de perfil | 413x532 | **staged** (FotoProfesional.jpg) |

## Caso: Monitoreo ISP (SONET)

Fuente: `Documents/1_Proyectos/SONET PROYECTO/` (anonimizado según LOPDP).

| Archivo | Origen | Origen (dim) | Estado |
|---|---|---|---|
| `public/assets/isp/pipeline.png` | `DiagramadeFlujo.png` | 2670x5065 | **staged** |
| `public/assets/isp/contratistas.png` | `contratistas_anonimizado.png` | 1103x868 | opcional (se puede omitir) |
| `public/assets/isp/informe-general.png` | `informe_general.png` | 1411x1071 | **staged** |
| `public/assets/isp/encuesta.png` | `page_001_new.png` | 1800x1351 | **staged** |

## Caso: Retail Cuenca (en desarrollo)

Sin capturas disponibles (proyecto en pausa; Power BI no cerrado). Opciones:
generar diagrama del pipeline (agente) y, si se autoriza, artefactos de dato reales
desde el dataset, siempre con las salvedades del estado.

El caso se ilustra con la **orquestación con IA**, no con resultados (no hay artefactos de dato autorizados).

| Archivo | Uso | Dimensiones | Estado |
|---|---|---|---|
| `public/assets/retail/orquestacion-ia.svg` | Diagrama de orquestación: agentes de IA + Human Gates | vectorial (contenedor 1600x900) | **staged** |

## Automatizaciones: KIRA AI

Fuente: `Documents/1_Proyectos/AnexosKIRPROJECT/` (solo imágenes; las credenciales de esa
carpeta NO se copian ni se referencian).

| Archivo | Origen | Origen (dim) | Estado |
|---|---|---|---|
| `public/assets/kira/workflow-n8n.png` | `chatbot_asistente_n8n_workflow-*.png` | 8192x1528 | **staged** |
| `public/assets/kira/chatbot-flujo.png` | `ChatBot_escalable_DIAGRAMA DE FLUJO TEST1.png` | 4414x8150 | **staged** |
| `public/assets/kira/kira-ai.png` | `kira ai.png` | 1024x1536 | **staged** |

## Fundamentos SQL

Sin imágenes requeridas. Se resuelve con artefactos de dato (SQL resaltado y micro-gráficas).

## Notas

- **Optimizadas (A9):** `isp/pipeline.png`, `kira/chatbot-flujo.png` y `kira/workflow-n8n.png`
  re-escaladas a lado largo ≤ 2400 px (de 634/1403/945 KB a 322/378/224 KB). `kira/kira-ai.png`
  conserva su PNG con transparencia (2.1 MB, 1024x1536).
- Cero credenciales, tokens, `.pem`/`.ppk` ni códigos de recuperación en `public/`.
- Formato: PNG para UI/diagramas, JPG para fotografía. Alt text obligatorio y descriptivo.
