"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X } from "@phosphor-icons/react";

export type EvidenceItem = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  sizes?: string;
  thumbClassName?: string;
};

/**
 * Isla cliente: miniaturas de evidencia que abren un flotante (lightbox).
 * Cierra con Escape, clic en el scrim y boton; atrapa el foco y lo devuelve
 * al disparador; bloquea el scroll del fondo. Respeta prefers-reduced-motion.
 */
export function EvidenceGallery({
  items,
  className = "",
}: {
  items: EvidenceItem[];
  className?: string;
}) {
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const lastIndexRef = useRef<number | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  const open = (index: number) => {
    lastIndexRef.current = index;
    setActive(index);
  };

  const close = useCallback(() => {
    setActive(null);
    const last = lastIndexRef.current;
    if (last !== null) triggerRefs.current[last]?.focus();
  }, []);

  useEffect(() => {
    if (active === null) return;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const current = document.activeElement;
      if (event.shiftKey) {
        if (current === first || !panel.contains(current)) {
          event.preventDefault();
          last.focus();
        }
      } else if (current === last || !panel.contains(current)) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close]);

  const item = active !== null ? items[active] : null;

  return (
    <div className={className}>
      <ul className="flex flex-wrap gap-4">
        {items.map((entry, index) => (
          <li
            key={entry.src}
            className={entry.thumbClassName ?? "w-[180px] sm:w-[220px]"}
          >
            <figure>
              <button
                type="button"
                ref={(element) => {
                  triggerRefs.current[index] = element;
                }}
                onClick={() => open(index)}
                className="group block w-full overflow-hidden rounded-[var(--radius-md)] border border-border bg-bg-elevated shadow-md transition-transform duration-150 active:scale-[0.99]"
              >
                <Image
                  src={entry.src}
                  alt={entry.alt}
                  width={entry.width}
                  height={entry.height}
                  sizes={entry.sizes ?? "220px"}
                  loading="lazy"
                  className="h-auto w-full object-cover transition-transform duration-220 group-hover:scale-[1.02]"
                />
              </button>
              <figcaption className="t-caption text-ink-muted mt-2">
                {entry.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {item ? (
          <motion.div
            key="evidence-lightbox"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Vista ampliada: ${item.alt}`}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={reduce ? { duration: 0 } : { duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="absolute inset-0 bg-ink/75 backdrop-blur-sm"
              onClick={close}
              aria-hidden="true"
            />

            <button
              type="button"
              ref={closeRef}
              onClick={close}
              aria-label="Cerrar vista ampliada"
              className="absolute right-4 top-4 z-[2] inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-border bg-bg text-ink shadow-md transition-colors duration-150 hover:bg-accent-soft"
            >
              <X size={20} weight="regular" aria-hidden="true" />
            </button>

            <motion.div
              className="relative z-[1] flex max-h-full w-full max-w-[1100px] flex-col items-center"
              initial={reduce ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
              transition={
                reduce ? { duration: 0 } : { duration: 0.22, ease: [0.22, 1, 0.36, 1] }
              }
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="90vw"
                className="mx-auto block h-auto max-h-[80dvh] w-auto max-w-full rounded-[var(--radius-md)] object-contain shadow-md"
              />
              <p className="t-caption mt-3 max-w-[70ch] text-center text-bg">
                {item.caption}
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
