"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Drop-in wrapper that fades + lifts its children into view on scroll.
 * Starts hidden (opacity-0 class) to avoid a flash, then animates in.
 * If reduced-motion is on, it just appears.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 40,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduce) {
        gsap.set(el, { opacity: 1, y: 0 });
        return;
      }

      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      className={`opacity-0 will-change-transform ${className}`}
      style={{ transform: `translateY(${y}px)` }}
    >
      {children}
    </div>
  );
}
