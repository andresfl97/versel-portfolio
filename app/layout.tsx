import type { Metadata, Viewport } from "next";
import { geist, geistMono } from "@/app/fonts";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} · Analista de Datos`,
    template: `%s · ${SITE.shortName}`,
  },
  description:
    "Portafolio de análisis de datos: casos de estudio de medición, ETL, KPIs y automatización con agentes de IA.",
  applicationName: "Portafolio de Stalyn Flores",
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "es_EC",
    siteName: `${SITE.name} · Analista de Datos`,
    title: `${SITE.name} · Analista de Datos`,
    description:
      "Portafolio de análisis de datos: casos de estudio de medición, ETL, KPIs y automatización con agentes de IA.",
    // TODO(asset): slot pendiente en public/assets/home/og.jpg (1200x630).
    // Se omite og:image hasta que el archivo real exista; no se usa un placeholder falso.
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

// Tema unico oscuro (tokens.md).
export const viewport: Viewport = {
  themeColor: "#0F1413",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      data-theme="dark"
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <body className="min-h-[100dvh] bg-bg text-ink antialiased">
        <a
          href="#contenido"
          className="t-body-sm sr-only rounded-[var(--radius-sm)] bg-accent px-4 py-2 text-accent-ink focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100]"
        >
          Saltar al contenido
        </a>
        <SiteNav />
        <main id="contenido">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
