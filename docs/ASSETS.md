# ASSETS.md — Imágenes

Manifest del portafolio (una sola página). Todas pasan por `next/image`. Los originales viven en
los proyectos del autor (`Documents/1_Proyectos/...`); aquí se copia solo lo que se usa.

## En uso

| Archivo | Sección | Contenido | Dimensiones |
|---|---|---|---|
| `home/portrait.jpg` | Perfil | Foto de perfil profesional | 413x532 |
| `isp/informe-rendimiento.png` | Caso SONET | Dashboard "Informe de Rendimiento SONET" (CSAT 92.2%, TME 1.9, trato 4.6) | 1800x1351 |
| `isp/desempeno-cuadrillas.png` | Caso SONET | Dashboard "Análisis de desempeño de cuadrillas" | 1800x1351 |
| `kira/logo.jpg` | Automatizaciones (KIRA) | Logo KIRA AI (recortado, elemento central) | 593x763 |
| `kira/workflow-n8n.png` | Automatizaciones (KIRA) | Flujo de trabajo en n8n (el usuario enviará una captura nueva) | 2400x448 |

## Reglas de uso

- Caption funcional debajo de la imagen (nunca pills/etiquetas encima).
- Marco consistente: un solo radio, hairline, sombra teñida; sin rellenos saturados.
- `alt` descriptivo y `sizes` acorde al ancho de render.
- Sin capturas falsas con `<div>`; solo estas imágenes reales.

## Notas

- **`og:image`:** omitido por decisión del humano.
- Cero credenciales, tokens, `.pem`/`.ppk` ni códigos de recuperación en `public/`.
- Si el usuario aporta imágenes nuevas (SONET/KIRA), se reemplazan los archivos y se actualiza este manifest.
