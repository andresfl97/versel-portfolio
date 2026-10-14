# 006 - QA (plan)

## Pasos

1. Correr `npm run build` y `npm run lint` y registrar el resultado.
2. Pre-Flight Check de `design-taste-frontend` (sección 14), casilla por casilla, sobre el código.
3. Obtener las guías frescas de `web-design-guidelines` y auditar `app/`, `components/`.
4. Verificar contrastes AA de los pares reales usados en el código.
5. Revisar responsive y overflow en cada página.
6. Revisar accesibilidad (semántica, alt, foco, skip-link, teclado).
7. Medir performance si hay herramienta; si no, declararlo.
8. Consolidar el informe por severidad.

## Salida

`specs/006-qa/report.md` con el Pre-Flight, la auditoría de guías, a11y, responsive, performance y
la lista de correcciones priorizadas.

## Verificación

- [ ] Cada hallazgo con evidencia y arreglo.
- [ ] Nada reportado como "ok" sin comprobación.
- [ ] Sin métricas inventadas.
