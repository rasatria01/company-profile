"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

/**
 * Page-load moment: a counter races 0 → 100, then the whole panel wipes
 * upward to reveal the site. This is the orchestrated intro that sets the
 * tone before the hero.
 */
export default function Preloader() {
  const [count, setCount] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Lock scroll while the preloader is up.
    document.body.style.overflow = "hidden";

    let current = 0;
    const target = 100;
    const step = reduce ? 25 : 1;
    const tick = reduce ? 20 : 26;

    const counter = setInterval(() => {
      // ease-out: bigger jumps early, smaller near the end
      current += Math.max(1, Math.round((target - current) / 12)) * step;
      if (current >= target) {
        current = target;
        clearInterval(counter);
        finish();
      }
      setCount(current);
      if (barRef.current) barRef.current.style.width = `${current}%`;
    }, tick);

    const finish = () => {
      gsap.to(panelRef.current, {
        yPercent: -100,
        duration: reduce ? 0.2 : 1,
        ease: "power4.inOut",
        delay: reduce ? 0 : 0.35,
        onComplete: () => {
          document.body.style.overflow = "";
          if (panelRef.current) panelRef.current.style.display = "none";
        },
      });
    };

    return () => {
      clearInterval(counter);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={panelRef}
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-ink px-6 py-8 md:px-10 md:py-10"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
          Project33
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
          Loading
        </span>
      </div>

      <div className="flex items-end justify-between">
        <div className="h-px w-1/2 max-w-xs bg-faint">
          <span ref={barRef} className="block h-px w-0 bg-crimson" />
        </div>
        <span className="font-display text-[18vw] leading-none tracking-tightest text-bone md:text-[12vw]">
          {count}
        </span>
      </div>
    </div>
  );
}
