# Contenido del portafolio (copy final)

Versión 3. Estado: aprobado por el humano (Human Gate 002), con el caso GNSS RTK incluido
a su pedido. Idioma: español neutro (Ecuador). Piezas: Home, ISP (SONET), Retail (en
desarrollo), Fundamentos SQL, KIRA AI, GNSS RTK, Sobre mí/Contacto.

Reglas aplicadas: cero em-dashes, cero en-dashes como separador, sin clichés de marketing,
sin enlaces a repositorios, toda cifra con su fuente, lo exploratorio declarado como exploratorio.

Trazabilidad: las cifras del caso de experiencia de usuario y soporte provienen del proyecto
SONET y su informe de resultados. Las cifras de Retail Cuenca y de KIRA AI no son resultados
cerrados y se marcan en su estado real. El caso GNSS RTK proviene de la tesis de grado.

---

## 1. Home

**Titular**

Stalyn Andrés Flores Lalvay
Analista de Datos Junior · Ingeniero en Telecomunicaciones

**Hero (headline)**

Datos auditables antes de cualquier análisis.

**Hero (subtexto, 13 palabras)**

Perfilo y limpio datos antes de analizarlos: ETL, KPIs y agentes de IA.

**Posicionamiento**

Ingeniero en Telecomunicaciones con interés en análisis de datos y más de un año y medio de
experiencia operativa y de atención a clientes. Convertí encuestas no estructuradas en KPIs
que la gerencia adoptó. Priorizo la calidad y el perfilado de los datos antes de analizarlos,
y hoy desarrollo agentes de IA a nivel de orquestación para automatizar procesos ETL.

**Secciones**

- **Analítica.** Tres casos de estudio y una pieza de fundamentos. Sistema de medición de
  experiencia del usuario y soporte técnico (ETL, KPIs en Looker Studio), análisis de costos de un
  sistema GNSS RTK (Python y estadística) y Retail Cuenca (en desarrollo: comparación de precios y
  marcas), más fundamentos SQL sobre bases sintéticas.
- **Automatizaciones.** KIRA AI: un agente de WhatsApp que convierte las conversaciones y
  operaciones de una microempresa en datos consultables (n8n, PostgreSQL, pgvector/RAG).
- **Sobre mí y contacto.** Trayectoria, habilidades y certificaciones.

**CTA (único)**

Escríbeme: ing.stalyn.flores@gmail.com

---

## 2. Caso: Sistema de medición de experiencia del usuario y soporte técnico (SONET)

**Stack**

Looker Studio · Google Sheets · Business Intelligence

**Pregunta**

¿Cómo medir la experiencia del usuario y el soporte técnico sin visibilidad operativa?

**Contexto**

La operación de instalación, soporte y atención se evaluaba con criterios dispersos y sin una
vista en tiempo real. La gerencia no tenía un instrumento único para seguir la experiencia del
usuario ni la operación diaria. El objetivo fue construir una medición continua y convertirla
en seguimiento permanente.

**Datos**

- Origen: más de 200 encuestas telefónicas levantadas con Google Forms.
- Forma: respuestas sin normalizar (texto libre, escalas mixtas, categorías inconsistentes).
- Base de referencia: una cartera de más de 2,000 clientes activos.
- Tratamiento: datos de clientes anonimizados según la LOPDP. No se publican datos personales.

**Método**

1. Centralización de más de 200 encuestas telefónicas.
2. Pipeline ETL: `Google Forms -> Google Sheets -> Looker Studio`.
3. Limpieza y normalización en Google Sheets: unificar escalas, categorías y criterios de registro.
4. Dos dashboards interactivos en Looker Studio.
5. Reportes de KPI en tiempo real para la operación y la jefatura de agencia.

**Hallazgo**

La cartera de más de 2,000 clientes activos obtuvo visibilidad operativa por primera vez. Sobre
esa base, un análisis exploratorio de más de 200 registros identificó una brecha de
desinformación del 10%: la diferencia entre lo que el sistema registraba y la realidad
operativa de la base de clientes. Esa brecha apareció como la causa raíz del aumento de quejas
de soporte en horario nocturno.

**Decisión / Impacto**

- La gerencia y la jefatura de agencia adoptaron el monitoreo como herramienta permanente.
- Se automatizó el flujo de reportes de KPI en tiempo real.
- El tablero aceleró decisiones estratégicas de la operación.

**Estado**

Completo.

**Métricas del caso**

| Valor | Significado | Fuente |
|---|---|---|
| CSAT 92.2% | Satisfacción del usuario | Informe de resultados del proyecto (SONET) |
| Tiempo de espera 1.9 min | Tiempo medio de espera en soporte | Informe de resultados del proyecto (SONET) |
| Valoración 4.6/5 | Valoración de la atención | Informe de resultados del proyecto (SONET) |
| +2,000 clientes activos | Cartera con visibilidad operativa por primera vez | Proyecto SONET |
| +200 encuestas centralizadas | Volumen bruto procesado en el ETL | Proyecto SONET (Google Forms -> Sheets) |
| 2 dashboards interactivos | Tableros de KPI en Looker Studio | Proyecto SONET |
| Brecha de desinformación 10% | Diferencia entre registro y realidad operativa; causa raíz de las quejas nocturnas | Análisis exploratorio de +200 registros (SONET) |

**Imágenes requeridas**

| Archivo | Uso | Dimensiones |
|---|---|---|
| `public/assets/isp/pipeline.png` | Diagrama del flujo Forms -> Sheets -> Looker | 2670x5065 |
| `public/assets/isp/encuesta.png` | Encuesta de origen | 1800x1351 |
| `public/assets/isp/informe-general.png` | Vista general del informe de KPIs | 1411x1071 |
| `public/assets/isp/contratistas.png` | (Opcional, se puede omitir) Desglose por contratistas | 1103x868 |

---

## 3. Caso en desarrollo: Retail Cuenca

**Pregunta**

¿Cómo se comparan precios y marcas entre los retailers líderes de Cuenca?

**Contexto**

El enfoque son alimentos y bebidas, que representan el 43% de la canasta básica de Ecuador.
Es la porción de mayor peso en el gasto de las familias, así que las diferencias de precio y
de marca entre retailers tienen impacto directo. El proyecto está en pausa y este caso se
publica como está: su valor hoy es la orquestación del método, no un resultado.

**Datos**

Todavía no hay resultados ni artefactos de dato publicables. El benchmark con el que se
empezó es provisional. Lo que existe es la metodología probada, no una conclusión sobre precios.

**Método (propuesto y en construcción)**

Desarrollo guiado por especificaciones (SDD) con agentes de IA y puntos de control humanos
(Human Gates). El pipeline previsto:

`investigación -> extracción -> RAW -> perfilado -> homologación -> limpieza -> validación -> SQL -> modelo -> visualización`

Los agentes de IA hacen el trabajo de extracción, perfilado y homologación; el humano aprueba
en cada gate antes de avanzar. La pieza visual de este caso es la orquestación: cómo agentes y
persona construyen el caso en conjunto.

**Hallazgo**

No aplica todavía. Sin datos validados no hay hallazgo que reportar. Cualquier cifra de precios
se publicará solo cuando el pipeline esté cerrado y validado.

**Decisión / Impacto**

En curso. El método ya está definido y es reutilizable para otros dominios de comparación de
mercado. El impacto se medirá cuando el caso cierre.

**Estado**

En desarrollo. Proyecto en pausa, enfoque cambiado a precios y marcas de alimentos y bebidas.
Se presenta así de forma honesta: sin resultados, sin capturas de tablero.

**Métricas del caso**

| Valor | Significado | Fuente |
|---|---|---|
| 43% | Peso de alimentos y bebidas en la canasta básica de Ecuador | Enfoque declarado del proyecto |
| Sin resultados | No hay cifras validadas; el benchmark es provisional | Estado del proyecto (en pausa) |

**Imágenes requeridas**

| Archivo | Uso | Dimensiones |
|---|---|---|
| `public/assets/retail/orquestacion-ia.svg` | Diagrama de orquestación: agentes de IA + Human Gates | vectorial (escala libre, contenedor 1600x900) |

Nota de sincronización: `docs/ASSETS.md` todavía lista `public/assets/retail/pipeline.png` y
`public/assets/retail/powerbi.png`. El archivo real disponible es
`public/assets/retail/orquestacion-ia.svg`. `design-director` debe actualizar el manifest.

---

## 4. Stack tecnológico

Herramientas que uso, con su icono de marca real (nombre como respaldo):

- **Datos y consultas:** SQL Server, PostgreSQL, MySQL, Python, pandas.
- **BI y visualización:** Power BI (DAX), Looker Studio, Google Sheets, Excel (tablas dinámicas,
  Power Query).
- **Automatización e IA:** n8n, agentes de IA (Claude/Anthropic, DeepSeek, Copilot, Gemini),
  orquestación de sub-agentes en procesos ETL.
- **Desarrollo:** Git, GitHub, Jupyter, JavaScript.

**Estado**

Vigente. Reemplaza a la antigua pieza de Fundamentos SQL (retirada por decisión del humano).

---

## 5. Automatizaciones: KIRA AI

**Qué es**

Un agente de WhatsApp con IA que convierte las conversaciones y operaciones de una
microempresa en datos consultables. Lo que antes quedaba en chats sueltos pasa a ser
información que se puede consultar y medir.

**Pregunta**

¿Se puede convertir la conversación diaria de una microempresa en datos útiles sin cambiarle
la forma de trabajar?

**Método (stack y arquitectura)**

- **Automatización:** n8n.
- **Base de datos:** PostgreSQL, con un modelo entidad-relación (ERD) completo.
- **Lógica:** JavaScript.
- **Desarrollo asistido:** OpenCode.
- **Recuperación de contexto:** pgvector para RAG, de modo que el agente responda con
  información de la propia operación.

**Capacidades analíticas diseñadas**

Estas capacidades están diseñadas en el modelo, no todas en producción. Se listan como
objetivos de la arquitectura:

- Recurrencia de clientes.
- Productos líderes.
- Temporalidad (patrones por día y hora).
- Embudo conversacional (en qué punto se cae una conversación).
- Sentimiento de las conversaciones.
- Calidad de datos registrados.

**Decisión / Impacto**

El sistema avanza en un roadmap propio de seis etapas: registro, CRM y analítica de datos. Está
en la etapa 4 de 6. Aún no hay resultados analíticos cerrados que reportar; el avance es de
arquitectura y operación.

**Estado**

En desarrollo (etapa 4/6). Se declara así: la analítica está diseñada y la orquestación
funciona, pero no se presentan cifras de negocio.

**Métricas del caso**

| Valor | Significado | Fuente |
|---|---|---|
| Etapa 4/6 | Avance en el roadmap propio (registro -> CRM -> analítica) | Documentación del proyecto KIRA AI |
| 6 capacidades analíticas | Diseñadas en el modelo (recurrencia, productos, temporalidad, embudo, sentimiento, calidad) | Diseño del modelo (KIRA AI) |

**Imágenes requeridas**

| Archivo | Uso | Dimensiones |
|---|---|---|
| `public/assets/kira/kira-ai.png` | Identidad / concepto del agente | 1024x1536 |
| `public/assets/kira/workflow-n8n.png` | Flujo de trabajo en n8n | 8192x1528 |
| `public/assets/kira/chatbot-flujo.png` | Diagrama de flujo del chatbot | 4414x8150 |

---

## 6. Caso: Análisis de costos de un sistema GNSS RTK

Origen: tesis de grado.

**Stack**

Python · Estadística

**Pregunta**

¿Conviene un sistema comercial de un solo equipo o equipar varias cuadrillas de laboratorio?

**Contexto**

La comparación partió de documentación técnica oficial del Municipio de Cuenca y de una
investigación de mercado sobre equipos GNSS RTK. La decisión de compra enfrentaba una disyuntiva
práctica: un solo equipo comercial de alta gama frente a equipar varias cuadrillas de laboratorio
con una alternativa de menor costo por unidad.

**Datos**

- Origen: documentación técnica oficial del Municipio de Cuenca.
- Complemento: investigación de mercado de equipos comerciales.
- Uso: estimaciones de costo y costo total de propiedad (equipo más mantenimiento).

**Método**

1. Extracción, transformación y carga (ETL) en Python a partir de la documentación técnica.
2. Investigación de mercado de las alternativas comerciales.
3. Estimaciones de costo-beneficio y de costo total de propiedad.
4. Comparación entre un solo equipo comercial y el equipamiento de varias cuadrillas.

**Hallazgo**

- El presupuesto de un solo equipo comercial permite equipar hasta 23 cuadrillas de
  laboratorio, como alternativa para la Universidad de Cuenca.
- El costo total de propiedad (equipo más mantenimiento) resulta hasta 89% menor.
- El ahorro en costo operativo por jornada de levantamiento topográfico alcanza el 50% frente
  a los equipos comerciales.

**Decisión / Impacto**

La comparación entregó la base cuantitativa para decidir entre comprar un equipo comercial
único o equipar varias cuadrillas, con el costo total de propiedad como criterio principal.

**Estado**

Completo (tesis de grado).

**Métricas del caso**

| Valor | Significado | Fuente |
|---|---|---|
| Hasta 23 cuadrillas | Equipables con el presupuesto de un solo equipo comercial | Tesis de grado (GNSS RTK) |
| Hasta 89% menor | Costo total de propiedad (equipo más mantenimiento) | Tesis de grado (GNSS RTK) |
| 50% | Ahorro en costo operativo por jornada de levantamiento topográfico | Tesis de grado (GNSS RTK) |

**Imágenes requeridas**

Ninguna. Se resuelve con artefactos de dato.

---

## 7. Sobre mí y contacto

**Perfil**

Ingeniero en Telecomunicaciones con interés en análisis de datos, con más de un año y medio de
experiencia operativa y de atención a clientes. Convertí encuestas no estructuradas en KPIs que
la gerencia adoptó, priorizo la calidad y el perfilado de los datos antes de analizarlos, y hoy
desarrollo agentes de IA a nivel de orquestación para automatizar procesos ETL.

**Experiencia**

- **SONET C.L., Cuenca (Agosto 2024 - Marzo 2026).** Alrededor de 40 incidencias mensuales
  atendidas, traduciendo conceptos complejos a distintos departamentos. Reportes de incidencias
  y casos críticos con hallazgos clave. Gestión de inventario de insumos y equipos con registro
  de consumo mensual para anticipar desabastecimiento.

**Habilidades**

- **SQL:** SQL Server, PostgreSQL, views, procedimientos almacenados, modelado relacional y ERD.
- **Excel:** tablas dinámicas, Power Query.
- **Python:** pandas, POO.
- **Power BI:** DAX, KPIs.
- **Automatización y BI:** n8n, Looker Studio, Google Sheets.
- **Agentes de IA:** Claude, DeepSeek, Copilot, Gemini; orquestación de sub-agentes en procesos ETL.
- **Idiomas:** español nativo, inglés B1 (lectura técnica).
- **Personales:** pensamiento analítico, comunicación técnica y no técnica, trabajo colaborativo,
  storytelling.

**Certificaciones**

- SQL Bootcamp: Zero to Hero (Udemy, Sep 2026).
- Meta Data Analyst Professional Certificate (Coursera, May 2026).
- Power BI Intermedio y Excel Avanzado (Soluciones Integrales Expertos, May 2026).
- Build Intelligent Agents Using DeepSeek & N8N (Coursera, Mar 2026).
- Claude Code in Action (Anthropic).
- Iniciación al Desarrollo con IA (BIG school).

**Disponibilidad**

Presencial o remota, con posibilidad de cambio de residencia.

**Contacto**

- Email: ing.stalyn.flores@gmail.com
- LinkedIn: linkedin.com/in/stalyn-flores97
- Ubicación: Cuenca, Ecuador

Sin teléfono ni RUC: no se publican en el sitio.

---

## Notas de trazabilidad y datos faltantes

- **Caso de experiencia y soporte (SONET):** las métricas se limitan a las fuertes: CSAT 92.2%,
  tiempo de espera 1.9 min, valoración 4.6/5, cartera de +2,000 clientes activos, +200 encuestas
  centralizadas, 2 dashboards interactivos y la brecha de desinformación del 10%. No hay periodo
  de proyecto en el copy.
- **No se mencionan** cifras de contratistas, eficiencia de resolución, puntualidad ni
  inactividad. Fueron retiradas por decisión del humano.
- **Caso GNSS RTK:** incluido a pedido del humano. Las cifras provienen de la tesis de grado.
- **Retail Cuenca:** sin resultados; el 43% y el pipeline son enfoque y método, no hallazgos.
- **KIRA AI:** las capacidades analíticas son diseño, no salida en producción. El negocio se
  nombra de forma genérica ("una microempresa").
- **Datos personales:** no se incluyó teléfono ni RUC. Ninguna cifra es ilustrativa: todas
  provienen del material entregado o se declaran ausentes.
