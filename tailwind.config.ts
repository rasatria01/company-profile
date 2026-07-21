import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#000000",       // page background — pure black
        surface: "#0d0d0d",   // raised surfaces / cards
        bone: "#f5f5f5",      // primary text        (19.3:1 on ink)
        muted: "#8a8a8a",     // secondary text      (6.1:1 on ink)
        faint: "#242424",     // hairline borders
        crimson: "#ef4444",   // the single accent — use sparingly (5.6:1 on ink)
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      maxWidth: {
        container: "1400px",
      },
    },
  },
  plugins: [],
};

export default config;
