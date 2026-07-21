"use client";

import { useEffect, useState } from "react";

const LINKS = ["Services", "Work", "About", "Pricing", "Insights"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-faint bg-ink/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-container items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#"
          className="font-display text-lg font-semibold tracking-tightest text-bone"
        >
          Project<span className="text-crimson">33</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-bone"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="rounded-full border border-bone/20 px-5 py-2 font-mono text-xs uppercase tracking-[0.15em] text-bone transition-colors hover:bg-bone hover:text-ink"
        >
          Book a call
        </a>
      </nav>
    </header>
  );
}
