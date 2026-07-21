"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// TODO: swap for your real numbers.
const STATS = [
  { value: 40, suffix: "+", label: "Projects delivered" },
  { value: 98, suffix: "", label: "Avg. Lighthouse score" },
  { value: 5, suffix: "/5", label: "Client satisfaction" },
  { value: 6, suffix: "yrs", label: "Building for the web" },
];

export default function Stats() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const numbers =
        gsap.utils.toArray<HTMLElement>(".stat-number");

      numbers.forEach((el) => {
        const target = Number(el.dataset.value);

        if (reduce) {
          el.textContent = String(target);
          return;
        }

        const proxy = { v: 0 };
        gsap.to(proxy, {
          v: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.textContent = String(Math.floor(proxy.v));
          },
        });
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="grid grid-cols-2 gap-x-6 gap-y-12 border-y border-faint py-16 md:grid-cols-4"
    >
      {STATS.map((s) => (
        <div key={s.label}>
          <div className="flex items-baseline font-display text-6xl tracking-tightest text-bone md:text-7xl">
            <span className="stat-number" data-value={s.value}>
              0
            </span>
            <span className="text-crimson">{s.suffix}</span>
          </div>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}
