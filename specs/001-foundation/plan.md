# 001 - Project Foundation (plan)

## Objetivo

Dejar el repositorio listo para trabajar spec-driven con agentes, sin implementar la app.

## Pasos

1. **Config base.** Crear `opencode.json` (`default_agent: portfolio-master`, `$schema`),
   `.gitignore`, `README.md`.
2. **Contrato y memoria.** Escribir `AGENTS.md` (contrato operativo) y `MEMORY.md` (estado).
3. **Agentes.** Crear los seis archivos en `.opencode/agent/`:
   - `portfolio-master.md` (`mode: primary`, `permission.task` hacia los subagentes).
   - `content-curator.md`, `design-director.md`, `frontend-builder.md`, `qa-reviewer.md`,
     `deploy-ops.md` (`mode: subagent`, `permission.task: deny`).
4. **Skills.** Crear `.opencode/skill/portfolio-case-study/SKILL.md` y
   `.opencode/skill/vercel-deploy/SKILL.md` con frontmatter válido (`name` = carpeta).
5. **SDD.** Crear `specs/001-foundation/{spec,plan,tasks}.md` y `docs/ASSETS.md`.
6. **Slots de assets.** Crear `public/assets/` con `.gitkeep`.

## Verificación

- [ ] `opencode.json` es JSON válido y respeta el schema.
- [ ] `default_agent` apunta a un agente `primary` no oculto.
- [ ] Cada agente tiene frontmatter válido (`description`, `mode`, `permission`).
- [ ] Cada skill tiene `name` (igual a la carpeta) y `description`.
- [ ] No hay secretos en ningún archivo.
- [ ] `docs/ASSETS.md` existe y está enlazado desde `README.md` y `MEMORY.md`.
- [ ] Reiniciar opencode y comprobar que `portfolio-master` aparece seleccionable con Tab.

## Nota operativa

opencode no recarga la config en caliente: tras crear agentes/skills hay que **reiniciar
opencode** para que se carguen.

## Rollback

Eliminar `.opencode/`, `specs/`, `docs/`, `opencode.json`, `AGENTS.md`, `MEMORY.md`,
`README.md`, `.gitignore`. Nada más se toca en esta etapa.
