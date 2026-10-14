"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Page Theme Lock (tokens.md 10): un tema por pagina fijado en <html>.
 * KIRA es la unica ruta oscura. Sin toggle, sin inversion a mitad de scroll.
 */
export function ThemeSetter() {
  const pathname = usePathname();

  useEffect(() => {
    const isDark = pathname?.startsWith("/automatizaciones/kira") ?? false;
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
  }, [pathname]);

  return null;
}
