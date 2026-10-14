---
name: portfolio-case-study
description: Define el formato y las reglas para redactar los casos de estudio del portafolio de analista de datos (pregunta, datos, método, hallazgo, decisión). Úsalo cuando el content-curator escriba o revise una pieza del portafolio.
---

# Casos de estudio del portafolio

Formato canónico para convertir un proyecto real en un caso de estudio autosuficiente y
honesto. Un caso no es una galería: es un razonamiento.

## Estructura obligatoria

```
Pregunta -> Contexto -> Datos -> Método -> Hallazgo -> Decisión / Impacto -> Estado
```

1. **Pregunta de negocio.** Una sola pregunta, concreta, en la voz del negocio. Si hay una
   secundaria, va debajo.
2. **Contexto.** Qué operación/problema y por qué importaba. Dos o tres frases.
3. **Datos.** De dónde salen, en qué forma, con qué límites (muestra, periodo, anonimización).
4. **Método.** El pipeline o proceso, en pasos. Diagrama si aporta.
5. **Hallazgo.** Lo que revelaron los datos. Cifras con su significado y su fuente.
6. **Decisión / Impacto.** Qué cambió o qué se recomienda, y con qué evidencia.
7. **Estado.** `completo` o `en desarrollo`, dicho sin maquillaje.

## Reglas

- **Datos reales únicamente.** Cada cifra debe rastrearse a su fuente. Si es ilustrativa,
  márcala como ejemplo.
- **Sin precisión inventada.** Nada de `99.9%` o `10x` sin respaldo.
- **Sin enlaces a repositorios.** La pieza se sostiene sola.
- **Sin clichés de marketing.** Prohibidas: "elevar", "seamless", "revolucionar", "next-gen".
- **Sin em-dashes visibles.** Usa punto, coma, dos puntos o paréntesis.
- **Estado honesto.** Lo exploratorio se declara exploratorio.
- **Cifras en mono.** La parte visual usa `tabular-nums`.

## Piezas y datos disponibles

- **Monitoreo ISP:** CSAT 92.2%, TME 1.9 min, valoración de atención 4.6/5, percepción 4.1/5,
  recomendación 8/10, participación de contratistas 55.9% / 44.1%, eficiencia 92.38%,
  puntualidad 93.33%, inactividad aparente noche 90.74% y fin de semana 87.04%. Hallazgo:
  sesgo de captura ("No sabe / No usa" junto a "excelente"). Muestra piloto: 45-52 encuestas.
- **Retail Cuenca (en desarrollo):** comparación de precios y marcas entre retailers líderes de
  Cuenca; alimentos y bebidas = 43% de la canasta básica de Ecuador. Pipeline propuesto:
  investigación -> extracción -> RAW -> perfilado -> homologación -> limpieza -> validación ->
  SQL -> modelo -> Power BI.
- **Fundamentos SQL:** `RetailPractice` y `SaaSPractice`; joins, set operators, string/date/null
  functions, `CASE WHEN`, window functions.
- **KIRA AI:** agente conversacional + analítica para PYMEs; PostgreSQL, pgvector, RAG, n8n;
  KPIs de recurrencia, productos líderes, temporalidad, embudo conversacional, sentimiento.

## Salida

Por cada caso: borrador en markdown, tabla de métricas (valor, significado, fuente) y lista de
imágenes requeridas con dimensiones. No cierres gates ni edites `AGENTS.md`.
