"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TOP = "LET'S";
const BOTTOM = "BUILD";
const SPARKS = 30;

// Split a word into letter spans so each fragment can fly off on its own.
function Letters({ word, className }: { word: string; className?: string }) {
  return (
    <span className={`lb-word inline-flex ${className ?? ""}`}>
      {word.split("").map((ch, i) => (
        <span key={i} className="lb-letter inline-block will-change-transform">
          {ch === " " ? " " : ch}
        </span>
      ))}
    </span>
  );
}

/**
 * The signature moment, in four acts driven entirely by scroll position:
 *
 *   1. APPROACH  two words fall in from above and below
 *   2. CONTACT   they meet at the centre line and squash
 *   3. PRESSURE  the long hold — they grind together, trembling harder as a
 *                red glow swells behind the seam. This is the tension beat;
 *                it owns ~a third of the scroll so the boom has to be earned.
 *   4. BOOM      shockwave ring, spark burst, camera knock + tilt, and every
 *                letter blows outward on a radial vector and fades to nothing.
 */
export default function LetsBuild() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = container.current!;
      const q = gsap.utils.selector(root);
      const stage = q(".lb-stage")[0];
      const topWord = q(".lb-top")[0];
      const bottomWord = q(".lb-bottom")[0];
      const letters = gsap.utils.toArray<HTMLElement>(".lb-letter", root);
      const sparks = gsap.utils.toArray<HTMLElement>(".lb-spark", root);

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduce) return; // words stay stacked & static — clean fallback

      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const cx = vw / 2;
      const cy = vh / 2;

      // Radial blast vector per letter, measured off the natural (untransformed)
      // layout — i.e. where each letter sits at the moment of impact.
      const blast = letters.map((el) => {
        const r = el.getBoundingClientRect();
        const dx = r.left + r.width / 2 - cx;
        const dy = r.top + r.height / 2 - cy;
        const len = Math.hypot(dx, dy) || 1;
        const dist = gsap.utils.random(700, 1300);
        return {
          x: (dx / len) * dist + gsap.utils.random(-120, 120),
          y: (dy / len) * dist + gsap.utils.random(-120, 120),
          rot: gsap.utils.random(-620, 620),
        };
      });

      gsap.set(topWord, { y: -vh * 0.65 });
      gsap.set(bottomWord, { y: vh * 0.65 });
      gsap.set(letters, { transformOrigin: "50% 50%" });
      gsap.set([topWord, bottomWord], { transformOrigin: "50% 50%" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=420%", // long enough that the hold reads as a real beat
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      // ---- 1. APPROACH ------------------------------------------------ 0 → .30
      tl.to(topWord, { y: 0, duration: 0.3, ease: "power3.in" }, 0)
        .to(bottomWord, { y: 0, duration: 0.3, ease: "power3.in" }, 0)
        .to(".lb-hint", { opacity: 0, duration: 0.1 }, 0.2);

      // ---- 2. CONTACT ------------------------------------------------ .30 → .34
      tl.to(stage, { scale: 1.03, duration: 0.04, ease: "power2.out" }, 0.3)
        .to(
          [topWord, bottomWord],
          { scaleY: 0.94, scaleX: 1.02, duration: 0.04, ease: "power2.out" },
          0.3
        )
        .fromTo(
          ".lb-seam",
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.06, ease: "power2.out" },
          0.3
        );

      // ---- 3. PRESSURE ----------------------------------------------- .34 → .68
      // Glow swells, words grind into each other, seam burns brighter.
      tl.fromTo(
        ".lb-glow",
        { opacity: 0, scale: 0.25 },
        { opacity: 0.9, scale: 1.2, duration: 0.34, ease: "power2.in" },
        0.34
      )
        .to(
          [topWord, bottomWord],
          { scaleY: 0.87, scaleX: 1.05, duration: 0.34, ease: "power2.in" },
          0.34
        )
        .to(
          ".lb-seam",
          { scaleY: 4, opacity: 1, duration: 0.34, ease: "power2.in" },
          0.34
        );

      // Tremble in three bursts of rising amplitude — the thing about to give.
      // Odd `repeat` + yoyo = even play count, so it always lands back at 0.
      const tremble = (at: number, amp: number, repeat: number) =>
        tl.to(
          stage,
          {
            x: amp,
            y: -amp * 0.6,
            rotation: amp * 0.09,
            duration: 0.01,
            repeat,
            yoyo: true,
            ease: "none",
          },
          at
        );
      tremble(0.4, 1.5, 7);
      tremble(0.5, 3, 9);
      tremble(0.6, 5.5, 7);

      // ---- 4. BOOM ---------------------------------------------------- .68 → 1
      // Burst: white core punching out through red, then blown wide open.
      tl.fromTo(
        ".lb-flash",
        { opacity: 0, scale: 0.15 },
        { opacity: 1, scale: 1, duration: 0.03, ease: "power2.out" },
        0.68
      ).to(
        ".lb-flash",
        { opacity: 0, scale: 1.8, duration: 0.24, ease: "power2.in" },
        0.71
      );

      // Shockwave ring
      tl.fromTo(
        ".lb-shock",
        { scale: 0, opacity: 0.95 },
        { scale: 10, opacity: 0, duration: 0.32, ease: "power2.out" },
        0.68
      );

      tl.to(
        ".lb-glow",
        { opacity: 0, scale: 2.6, duration: 0.26, ease: "power2.out" },
        0.68
      ).to(".lb-seam", { opacity: 0, scaleX: 1.5, duration: 0.1 }, 0.68);

      // Camera: hard knock, then a decaying wobble that settles back to level.
      tl.to(
        stage,
        {
          rotation: -3.4,
          x: -16,
          y: 9,
          scale: 1.09,
          duration: 0.04,
          ease: "power3.out",
        },
        0.68
      )
        .to(
          stage,
          { rotation: 2.2, x: 11, y: -6, duration: 0.05, ease: "power2.inOut" },
          0.72
        )
        .to(
          stage,
          { rotation: -1.2, x: -6, y: 3, duration: 0.06, ease: "power2.inOut" },
          0.77
        )
        .to(
          stage,
          { rotation: 0.5, x: 2, y: -1, duration: 0.08, ease: "power2.inOut" },
          0.83
        )
        .to(
          stage,
          { rotation: 0, x: 0, y: 0, scale: 1, duration: 0.09, ease: "power2.out" },
          0.91
        );

      // Every letter blows outward, spins, and vanishes.
      letters.forEach((el, i) => {
        tl.to(
          el,
          {
            x: blast[i].x,
            y: blast[i].y,
            rotation: blast[i].rot,
            scale: 0.25,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          0.68
        );
      });

      // Debris: a ring of sparks thrown from the seam.
      const reach = Math.max(vw, vh) * 0.75;
      sparks.forEach((el, i) => {
        const angle =
          (i / SPARKS) * Math.PI * 2 + gsap.utils.random(-0.18, 0.18);
        const dist = gsap.utils.random(260, reach);
        tl.fromTo(
          el,
          { x: 0, y: 0, scale: 0, opacity: 1 },
          {
            x: Math.cos(angle) * dist,
            y: Math.sin(angle) * dist,
            scale: gsap.utils.random(0.4, 1.5),
            opacity: 0,
            duration: gsap.utils.random(0.24, 0.38),
            ease: "power3.out",
          },
          0.68
        );
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative h-screen overflow-hidden bg-ink"
    >
      <div className="lb-stage absolute inset-0 will-change-transform">
        {/* Pressure glow behind the seam */}
        <div className="lb-glow pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[110vmin] -translate-x-1/2 -translate-y-1/2 opacity-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.6)_0%,rgba(239,68,68,0)_70%)]" />

        {/* The seam where the two words grind together */}
        <div className="lb-seam pointer-events-none absolute left-1/2 top-1/2 h-[3px] w-[70vw] -translate-x-1/2 -translate-y-1/2 opacity-0 bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />

        <div className="absolute inset-0 flex flex-col items-center justify-center font-display text-[18vw] font-medium leading-[0.82] tracking-tightest md:text-[15vw]">
          <Letters word={TOP} className="lb-top text-bone" />
          <Letters word={BOTTOM} className="lb-bottom text-crimson" />
        </div>

        {/* Shockwave ring */}
        <div className="lb-shock pointer-events-none absolute left-1/2 top-1/2 h-[26vmin] w-[26vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-crimson opacity-0" />

        {/* Debris */}
        {Array.from({ length: SPARKS }).map((_, i) => (
          <span
            key={i}
            className={`lb-spark pointer-events-none absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full opacity-0 will-change-transform ${
              i % 4 === 0 ? "bg-bone" : "bg-crimson"
            }`}
          />
        ))}
      </div>

      {/* Detonation burst — white core through red, not a flat wash */}
      <div className="lb-flash pointer-events-none absolute inset-0 opacity-0 bg-[radial-gradient(circle_at_center,#ffffff_0%,#ef4444_28%,rgba(239,68,68,0)_62%)]" />

      <span className="lb-hint absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs uppercase tracking-[0.25em] text-muted">
        ( Keep scrolling )
      </span>
    </section>
  );
}
