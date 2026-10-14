import type { ComponentProps, ReactNode } from "react";
import { MAILTO } from "@/lib/site";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container-editorial ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  id,
  bordered = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={`section-y ${bordered ? "border-t border-border" : ""} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

/** Tag de estado de un caso. Pill, unico uso permitido de radius-pill. */
export function StatusTag({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "accent";
}) {
  return (
    <span
      className={`t-label inline-flex items-center rounded-[var(--radius-pill)] border px-3 py-1 ${
        tone === "accent"
          ? "border-accent/40 bg-accent-soft text-accent"
          : "border-border bg-bg-elevated text-ink-muted"
      }`}
    >
      {children}
    </span>
  );
}

/** Cifra: valor mono tabular + glosa + fuente. Nunca una cifra sin contexto. */
export function Figure({
  value,
  label,
  source,
  size = "md",
  accent = false,
  className = "",
  valueClassName = "",
}: {
  value: ReactNode;
  label?: ReactNode;
  source?: ReactNode;
  size?: "lg" | "md" | "sm";
  accent?: boolean;
  className?: string;
  valueClassName?: string;
}) {
  const sizeClass =
    size === "lg" ? "t-figure-lg" : size === "sm" ? "t-figure-sm" : "t-figure";
  return (
    <div className={className}>
      <div
        className={`${sizeClass} tnum ${valueClassName} ${
          accent ? "text-accent" : "text-ink"
        }`}
      >
        {value}
      </div>
      {label ? (
        <div className="t-body-sm text-ink-muted mt-2 max-w-[48ch]">{label}</div>
      ) : null}
      {source ? (
        <div className="t-caption text-ink-muted mt-2">{source}</div>
      ) : null}
    </div>
  );
}

/** Boton primario para el CTA de contacto. */
export function Button({
  children,
  href = MAILTO,
  className = "",
  ...rest
}: {
  children: ReactNode;
  href?: string;
  className?: string;
} & Omit<ComponentProps<"a">, "href">) {
  const classes = `t-body-sm inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-accent px-5 py-3 font-medium text-accent-ink transition-[transform,background-color] duration-150 hover:bg-accent-hover active:translate-y-px ${className}`;
  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}
