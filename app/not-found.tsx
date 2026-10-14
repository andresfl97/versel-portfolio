import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Página no encontrada",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60dvh] items-center">
      <Container className="w-full py-16 md:py-20">
        <p className="t-label text-ink-muted mb-5">Error 404</p>
        <h1 className="t-h1 max-w-[20ch] text-balance text-ink">
          Esta página no existe.
        </h1>
        <p className="t-lead text-ink-muted mt-5 max-w-[46ch] text-pretty">
          La dirección puede haber cambiado o el enlace puede estar mal escrito.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href="/"
            className="t-body-sm inline-flex items-center rounded-[var(--radius-sm)] bg-accent px-5 py-3 font-medium text-accent-ink transition-[transform,background-color] duration-150 hover:bg-accent-hover active:translate-y-px"
          >
            Volver al inicio
          </Link>
          <Link
            href="/#casos"
            className="t-body-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors duration-150 hover:text-accent-hover"
          >
            Ver los casos
          </Link>
        </div>
      </Container>
    </section>
  );
}
