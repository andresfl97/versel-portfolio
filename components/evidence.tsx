import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";
import type { CSSProperties } from "react";

/**
 * Pieza de evidencia real. Reserva la relacion de aspecto para CLS < 0.1.
 * Nunca se simula una captura con <div>.
 * A8: si el asset no existe en disco se renderiza un slot explicito marcado
 * (nunca una imagen rota); la comprobacion corre en build (RSC estatico).
 * videoOnMobile: en < 768px la pieza panoramica se recorta a 16:9.
 */
export function EvidenceItem({
  src,
  width,
  height,
  alt,
  caption,
  ratio,
  fit = "cover",
  priority = false,
  sizes = "100vw",
  unoptimized = false,
  videoOnMobile = false,
  className = "",
  frameClassName = "",
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  ratio?: string;
  fit?: "cover" | "contain";
  priority?: boolean;
  sizes?: string;
  unoptimized?: boolean;
  videoOnMobile?: boolean;
  className?: string;
  frameClassName?: string;
}) {
  const aspect = ratio ?? `${width} / ${height}`;
  const ratioVar = { "--ratio": aspect } as CSSProperties;
  const exists = existsSync(path.join(process.cwd(), "public", src));

  if (!exists) {
    return (
      <figure className={className}>
        <div
          className={`relative flex w-full aspect-[var(--ratio)] items-center justify-center rounded-[var(--radius-md)] border border-dashed border-border bg-bg-elevated ${
            videoOnMobile ? "max-md:aspect-video" : ""
          } ${frameClassName}`}
          style={ratioVar}
        >
          <span className="t-caption text-ink-muted max-w-[42ch] px-4 text-center">
            Slot de imagen pendiente: <span className="t-code">{src}</span>
          </span>
        </div>
        {caption ? (
          <figcaption className="t-caption text-ink-muted mt-3 max-w-[52ch]">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure className={className}>
      <div
        className={`relative w-full aspect-[var(--ratio)] overflow-hidden rounded-[var(--radius-md)] border border-border bg-bg-elevated ${
          videoOnMobile ? "max-md:aspect-video" : ""
        } ${frameClassName}`}
        style={ratioVar}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          unoptimized={unoptimized}
          loading={priority ? "eager" : "lazy"}
          className={`h-full w-full ${
            fit === "contain" ? "object-contain" : "object-cover"
          }`}
        />
      </div>
      {caption ? (
        <figcaption className="t-caption text-ink-muted mt-3 max-w-[52ch]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
