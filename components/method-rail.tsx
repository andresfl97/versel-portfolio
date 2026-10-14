"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

export type RailNode = {
  label: string;
  detail: ReactNode;
};

/**
 * Rail de metodo (familia sticky-stack/sequence).
 * Desktop: riel pegajoso izquierda + detalle derecha; el nodo en vista se resalta
 * con color de acento. Movil: colapsa a columna, etiqueta arriba del bloque.
 * Usa IntersectionObserver (nunca window scroll listener).
 */
export function MethodRail({
  nodes,
  railLabel,
}: {
  nodes: RailNode[];
  railLabel?: string;
}) {
  const [active, setActive] = useState(0);
  const detailRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(
              (entry.target as HTMLElement).dataset.nodeIndex ?? 0,
            );
            setActive(index);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    detailRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, [nodes.length]);

  return (
    <>
      {/* Escritorio: riel + detalle */}
      <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <div className="sticky top-24">
            {railLabel ? (
              <p className="t-label text-ink-muted mb-6">{railLabel}</p>
            ) : null}
            <ol className="space-y-4">
              {nodes.map((node, index) => {
                const isActive = index === active;
                return (
                  <li
                    key={node.label}
                    aria-current={isActive ? "step" : undefined}
                    className="flex items-center gap-3"
                  >
                    <span
                      aria-hidden="true"
                      className={`h-px transition-[width,background-color] duration-[220ms] ${
                        isActive ? "w-10 bg-accent" : "w-6 bg-border"
                      }`}
                    />
                    <span
                      className={`t-figure-sm tnum transition-colors duration-[220ms] ${
                        isActive ? "text-accent" : "text-ink-muted"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`t-label transition-colors duration-[220ms] ${
                        isActive
                          ? "font-semibold text-accent"
                          : "text-ink-muted"
                      }`}
                    >
                      {node.label}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
        <div className="lg:col-span-8">
          {nodes.map((node, index) => (
            <div
              key={node.label}
              data-node-index={index}
              ref={(element) => {
                detailRefs.current[index] = element;
              }}
              className="min-h-[42vh] border-t border-border py-10 first:pt-0 first:border-t-0"
            >
              <p className="t-label text-accent mb-3">{node.label}</p>
              <div className="max-w-[62ch] t-body text-ink">{node.detail}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Movil: columna, etiqueta arriba del bloque */}
      <div className="lg:hidden">
        <ol className="divide-y divide-border">
          {nodes.map((node, index) => (
            <li key={node.label} className="py-6 first:pt-0">
              <p className="t-label text-accent mb-3">
                <span className="tnum">{String(index + 1).padStart(2, "0")}</span>{" "}
                {node.label}
              </p>
              <div className="t-body text-ink">{node.detail}</div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
