"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { MAILTO, NAV_LINKS, SITE } from "@/lib/site";

const PANEL_LINKS = [
  { label: "Home", href: "/" },
  ...NAV_LINKS,
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const background: (Element | null)[] = [
      document.getElementById("contenido"),
      document.querySelector("footer"),
    ];
    background.forEach((el) => el?.setAttribute("inert", ""));
    document.body.style.overflow = "hidden";

    const getFocusable = () =>
      panelRef.current
        ? Array.from(
            panelRef.current.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
            ),
          )
        : [];

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = getFocusable();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (event.shiftKey) {
        if (active === first || !panelRef.current?.contains(active)) {
          event.preventDefault();
          last.focus();
        }
      } else if (active === last || !panelRef.current?.contains(active)) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    firstLinkRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      background.forEach((el) => el?.removeAttribute("inert"));
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur">
      <div
        inert={open}
        className="container-editorial flex h-16 items-center justify-between gap-4"
      >
        <Link
          href="/"
          className="t-h4 shrink-0 tracking-[-0.01em]"
          aria-label={`${SITE.name}, inicio`}
        >
          {SITE.shortName}
        </Link>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="t-body-sm text-ink-muted transition-colors duration-150 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={MAILTO}
            className="t-body-sm inline-flex items-center rounded-[var(--radius-sm)] bg-accent px-4 py-2 font-medium text-accent-ink transition-[transform,background-color] duration-150 hover:bg-accent-hover active:translate-y-px"
          >
            Escríbeme
          </a>
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="site-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-border text-ink transition-colors duration-150 hover:bg-accent-soft md:hidden"
          >
            <List size={20} weight="regular" aria-hidden="true" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="site-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menú"
            className="fixed inset-0 z-[70] flex min-h-[100dvh] flex-col bg-bg md:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container-editorial flex h-16 items-center justify-between">
              <span className="t-h4">{SITE.shortName}</span>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  triggerRef.current?.focus();
                }}
                aria-label="Cerrar menú"
                className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-border text-ink"
              >
                <X size={20} weight="regular" aria-hidden="true" />
              </button>
            </div>
            <nav
              aria-label="Navegación móvil"
              className="container-editorial flex flex-1 flex-col justify-center gap-2"
            >
              {PANEL_LINKS.map((link, index) => (
                <Link
                  key={link.href}
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="t-h2 border-t border-border py-5 text-ink transition-colors duration-150 hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
