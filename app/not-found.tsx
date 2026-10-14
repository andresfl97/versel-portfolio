import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, TextLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Página no encontrada",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[88dvh] items-center">
      <Container className="w-full pt-16 pb-16 md:pt-24">
        <Eyebrow>Error 404</Eyebrow>
        <h1 className="t-h1 max-w-[20ch] text-ink">
          Esta página no existe.
        </h1>
        <p className="t-lead text-ink-muted mt-5 max-w-[46ch]">
          La dirección puede haber cambiado o el enlace puede estar mal escrito.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href="/"
            className="t-body-sm inline-flex items-center rounded-[var(--radius-sm)] bg-accent px-5 py-3 font-medium text-accent-ink transition-[transform,background-color] duration-150 hover:bg-accent-hover active:translate-y-px"
          >
            Volver al inicio
          </Link>
          <TextLink href="/#casos">Ver los casos</TextLink>
        </div>
      </Container>
    </section>
  );
}
