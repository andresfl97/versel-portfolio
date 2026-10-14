import { FOOTER_LINKS, MAILTO, SITE } from "@/lib/site";
import { Container } from "@/components/ui";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="py-10 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="t-h4">{SITE.name}</p>
            <p className="t-body-sm text-ink-muted mt-2 max-w-[36ch]">
              {SITE.title}
            </p>
          </div>

          <nav aria-label="Navegación del pie" className="md:col-span-3">
            <p className="t-label text-ink-muted">Secciones</p>
            <ul className="mt-3 space-y-2">
              {FOOTER_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="t-body-sm text-ink-muted transition-colors duration-150 hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="t-label text-ink-muted">Contacto</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={MAILTO}
                  className="t-body-sm text-ink-muted transition-colors duration-150 hover:text-ink"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-body-sm text-ink-muted transition-colors duration-150 hover:text-ink"
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

        <hr className="mt-10 border-0 border-t border-border" />
        <p className="t-caption text-ink-muted mt-5">
          © 2026 Stalyn Flores Lalvay
        </p>
      </Container>
    </footer>
  );
}
