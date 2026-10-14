import Link from "next/link";
import { FOOTER_CASES, MAILTO, SITE } from "@/lib/site";
import { Container } from "@/components/ui";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="t-h4">{SITE.name}</p>
            <p className="t-body-sm text-ink-muted mt-3 max-w-[36ch]">
              {SITE.title}
            </p>
          </div>

          <nav aria-label="Navegación del pie" className="md:col-span-4">
            <p className="t-label text-ink-muted">Navegación</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="t-body-sm text-ink-muted transition-colors duration-150 hover:text-accent"
                >
                  Home
                </Link>
              </li>
              {FOOTER_CASES.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="t-body-sm text-ink-muted transition-colors duration-150 hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="t-label text-ink-muted">Contacto</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={MAILTO}
                  className="t-body-sm text-ink-muted transition-colors duration-150 hover:text-accent"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-body-sm text-ink-muted transition-colors duration-150 hover:text-accent"
                >
                  {SITE.linkedin}
                </a>
              </li>
              <li>
                <span className="t-body-sm text-ink-muted">
                  {SITE.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-12 border-0 border-t border-border md:mt-16" />
        <p className="t-caption text-ink-muted mt-6">
          © 2026 Stalyn Flores Lalvay
        </p>
      </Container>
    </footer>
  );
}
