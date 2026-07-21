import type { ReactNode, CSSProperties } from "react";

/**
 * Seamless infinite marquee. Renders the same content in two groups so the
 * CSS animation can translate the track by -50% and loop with no visible seam.
 * Pauses on hover. Pure CSS — no JS, no layout thrash.
 */
export default function Marquee({
  children,
  reverse = false,
  duration = 40,
  className = "",
}: {
  children: ReactNode;
  reverse?: boolean;
  /** seconds for one full loop — larger = slower */
  duration?: number;
  className?: string;
}) {
  return (
    <div className={`marquee ${className}`}>
      <div
        className={`marquee__track${reverse ? " marquee__track--reverse" : ""}`}
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        <div className="marquee__group">{children}</div>
        <div className="marquee__group" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
