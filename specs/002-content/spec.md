# 002 - Content

## Estado

**OPEN** — redacción en curso (Human Gate 002 pendiente).

## Propósito

Producir el contenido definitivo del portafolio a partir del material real del autor:
los dos casos analíticos, la pieza de fundamentos SQL, el bloque de automatizaciones (KIRA AI),
y el copy de Home/Contacto. Toda cifra debe rastrearse a su fuente.

## Alcance

- Copy de Home (posicionamiento, secciones, CTA).
- Caso: **Monitoreo operativo y CX en un ISP (SONET)**.
- Caso en desarrollo: **Retail Cuenca** (precios y marcas; alimentos y bebidas = 43% de la
  canasta básica). Sin artefactos de dato reales; se ilustra con la **orquestación con IA**.
- **Fundamentos SQL** (pieza breve).
- **Automatizaciones: KIRA AI**.
- About / Contacto (solo email + LinkedIn; sin teléfono ni RUC).

## Fuera de alcance

- Sistema de diseño y tokens (003).
- Specs de página (004) e implementación (005).
- QA (006) y deploy (007).
- Cualquier artefacto derivado del dataset de Retail (no autorizado).

## Datos de origen

- **CV junior (más reciente):** Stalyn Andrés Flores Lalvay, Analista de Datos Junior,
  Ingeniero en Telecomunicaciones. `ing.stalyn.flores@gmail.com`,
  `linkedin.com/in/stalyn-flores97`, Cuenca, Ecuador.
- **ISP/SONET:** +200 encuestas telefónicas crudas; KPIs en Looker Studio adoptados por
  gerencia; brecha entre operatividad reportada y uso real del servicio; ~40 incidencias/mes;
  estandarización de criterios de registro; seguimiento personalizado en casos críticos.
  Cifras del informe: CSAT 92.2%, TME 1.9 min, atención 4.6/5, percepción 4.1/5,
  recomendación 8/10, contratistas 55.9%/44.1%, eficiencia 92.38%, puntualidad 93.33%,
  inactividad aparente noche 90.74% y fin de semana 87.04%. Muestra: 45-52 encuestas.
- **KIRA AI:** agente de WhatsApp con IA (n8n + PostgreSQL + JavaScript + OpenCode); modelo
  ERD completo; negocio Delicias Doña Mary; roadmap en etapa 4/6 (registro -> CRM -> analítica).
- **SQL:** prácticas sobre bases sintéticas (SQL Server): joins, set operators, string/date/null
  functions, `CASE WHEN`, window functions.
- **Retail Cuenca:** proyecto en desarrollo; SDD con agentes y Human Gates (metodología).

## Decisiones

| # | Decisión |
|---|---|
| 1 | Sin teléfono ni RUC en el sitio. |
| 2 | Retail Cuenca: solo estado "en desarrollo" + diagrama de orquestación con IA. |
| 3 | Sin enlaces a repositorios. |
| 4 | Español neutro (Ecuador). |
| 5 | Métricas siempre con su fuente; lo exploratorio se declara exploratorio. |

## Criterios de aceptación

- [ ] Copy de Home redactado.
- [ ] Los dos casos redactados con la estructura de `portfolio-case-study`.
- [ ] Pieza de fundamentos SQL redactada.
- [ ] Bloque de KIRA AI redactado.
- [ ] About/Contacto redactado (email + LinkedIn).
- [ ] Tabla de métricas (valor, significado, fuente) por caso.
- [ ] Diagrama de orquestación con IA para Retail, referenciado en el contenido.
- [ ] Aprobación humana (HG 002).

## Riesgos

| Riesgo | Mitigación |
|---|---|
| Inventar cifras | Solo datos del CV/informes; cada cifra con fuente |
| Sobre-vender el Retail pausado | Estado honesto "en desarrollo" |
| Exponer datos personales/laborales | Sin teléfono, sin RUC, sin nombres reales de terceros |
