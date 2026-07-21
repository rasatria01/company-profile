"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

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
          href="#top"
          className="font-display text-lg font-semibold uppercase tracking-tightest text-bone"
        >
          Project<span className="text-crimson">33</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-crimson"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-ghost hidden md:inline-block">
          Book a call
        </a>

        {/* ponytail: native <details> instead of a JS menu — open/close, Esc,
            and keyboard focus all come free from the platform */}
        <details className="nav-toggle md:hidden">
          <summary className="border-2 border-bone px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-bone">
            Menu
          </summary>
          <ul className="absolute inset-x-0 top-full border-y-2 border-bone bg-ink">
            {[...LINKS, { label: "Book a call", href: "#contact" }].map(
              (link) => (
                <li
                  key={link.label}
                  className="border-t border-faint first:border-t-0"
                >
                  <a
                    href={link.href}
                    className="block px-6 py-5 font-mono text-sm uppercase tracking-[0.15em] text-bone transition-colors hover:bg-crimson hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              )
            )}
          </ul>
        </details>
      </nav>
    </header>
  );
}
