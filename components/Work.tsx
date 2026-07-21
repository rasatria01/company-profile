import Reveal from "@/components/Reveal";

// TODO: replace with your real case studies.
const WORK = [
  { name: "Ledger", industry: "Fintech", year: "2026", tags: ["Next.js", "Postgres", "Stripe"] },
  { name: "Cartograph", industry: "Logistics", year: "2025", tags: ["React Native", "Realtime", "Maps"] },
  { name: "Northwind", industry: "Healthcare", year: "2025", tags: ["Platform", "Design", "Audit"] },
  { name: "Studio Ember", industry: "Creative", year: "2025", tags: ["Web", "CMS", "Motion"] },
  { name: "Relay", industry: "SaaS", year: "2024", tags: ["Dashboard", "API", "DevOps"] },
];

/**
 * Case studies as full-bleed rows, not cards. Each row inverts to solid crimson
 * on hover — the loudest gesture on the page, and the reason there are no
 * thumbnails here: the type carries it.
 */
export default function Work() {
  return (
    <section id="work" className="border-t border-faint">
      <div className="mx-auto max-w-container px-6 py-28 md:px-10 md:py-40">
        <Reveal className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-6">( Selected work )</p>
            <h2 className="font-display text-5xl uppercase leading-[0.9] tracking-tightest text-bone md:text-7xl">
              Proof,
              <br />
              not promises.
            </h2>
          </div>
          <a
            href="#"
            className="font-mono text-xs uppercase tracking-[0.15em] text-muted underline-offset-8 transition-colors hover:text-crimson hover:underline"
          >
            View all work &rarr;
          </a>
        </Reveal>

        <div className="border-b border-faint">
          {WORK.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <a
                href="#"
                className="group flex flex-col gap-5 border-t border-faint px-2 py-8 transition-colors duration-200 hover:bg-crimson md:flex-row md:items-center md:gap-8 md:px-6"
              >
                <span className="font-mono text-xs text-muted transition-colors group-hover:text-ink md:w-12">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex-1">
                  <h3 className="font-display text-4xl uppercase leading-none tracking-tightest text-bone transition-colors group-hover:text-ink md:text-6xl">
                    {p.name}
                  </h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors group-hover:text-ink">
                    {p.industry}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-faint px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted transition-colors group-hover:border-ink/40 group-hover:text-ink"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors group-hover:text-ink md:w-16 md:text-right">
                  {p.year}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
