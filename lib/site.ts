export const SITE = {
  name: "Stalyn Andrés Flores Lalvay",
  shortName: "Stalyn Flores",
  title: "Analista de Datos Junior · Ingeniero en Telecomunicaciones",
  email: "ing.stalyn.flores@gmail.com",
  linkedin: "linkedin.com/in/stalyn-flores97",
  linkedinUrl: "https://www.linkedin.com/in/stalyn-flores97",
  location: "Cuenca, Ecuador",
} as const;

export const MAILTO = `mailto:${SITE.email}`;

/** Repositorio del portafolio (detalles tecnicos). */
export const REPO_URL = "https://github.com/andresfl97/versel-portfolio";

/** Anclas de la pagina unica. Sin CTA en la barra. */
export const NAV_LINKS = [
  { label: "Perfil", href: "/#perfil" },
  { label: "Stack", href: "/#stack" },
  { label: "Casos", href: "/#casos" },
  { label: "Contacto", href: "/#contacto" },
] as const;

export const FOOTER_LINKS = NAV_LINKS;
