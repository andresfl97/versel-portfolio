import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/site";

/**
 * Barra superior de una linea. Solo anclas de la pagina unica.
 * Sin CTA de contacto en el nav (el CTA vive en Perfil y Contacto).
 */
export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg">
      <div className="container-editorial flex h-16 items-center justify-between gap-4">
        <Link
          href="/#perfil"
          className="t-h4 shrink-0 tracking-[-0.01em]"
          aria-label={`${SITE.name}, inicio`}
        >
          {SITE.shortName}
        </Link>
        <nav
          aria-label="Navegación de secciones"
          className="flex items-center gap-3 sm:gap-6"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="t-body-sm text-[13px] text-ink-subtle transition-colors duration-150 hover:text-ink sm:text-[0.9375rem]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
