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

export const NAV_LINKS = [
  { label: "Casos", href: "/#casos" },
  { label: "KIRA", href: "/automatizaciones/kira" },
  { label: "Sobre mí", href: "/sobre-mi" },
] as const;

export const FOOTER_CASES = [
  { label: "Caso ISP / SONET", href: "/casos/isp" },
  { label: "Caso GNSS RTK", href: "/casos/gnss-rtk" },
  { label: "Retail Cuenca", href: "/casos/retail-cuenca" },
  { label: "KIRA AI", href: "/automatizaciones/kira" },
  { label: "Sobre mí", href: "/sobre-mi" },
] as const;
