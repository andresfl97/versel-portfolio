import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
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

/** Etiqueta eyebrow (label, mono). Uso racionado segun spec 004. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="t-label text-ink-muted mb-5">{children}</p>;
}

/** Tag de estado del caso. Pill, unico uso permitido de radius-pill. */
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

/** Boton primario (unico CTA de contacto: Escríbeme). */
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

/** Enlace de texto con acento. */
export function TextLink({
  href,
  children,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  const classes = `t-body-sm inline-flex items-center gap-1.5 font-medium text-accent underline decoration-accent/30 decoration-1 underline-offset-4 transition-colors duration-150 hover:text-accent-hover hover:decoration-accent ${className}`;
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
        <ArrowRight size={14} weight="bold" aria-hidden="true" />
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
      <ArrowRight size={14} weight="bold" aria-hidden="true" />
    </Link>
  );
}

/** Banda de cierre: una sola intencion de contacto. */
export function CtaBand({
  children,
  heading = "Escríbeme.",
}: {
  children?: ReactNode;
  heading?: string;
}) {
  return (
    <Section bordered>
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-[40ch]">
          <h2 className="t-h2">{heading}</h2>
          {children ? (
            <div className="t-body-sm text-ink-muted mt-4">{children}</div>
          ) : null}
        </div>
        <Button href={MAILTO}>Escríbeme</Button>
      </div>
    </Section>
  );
}
