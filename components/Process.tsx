import Reveal from "@/components/Reveal";

// A genuine sequence, so the 01–04 numbering encodes real order.
const STEPS = [
  {
    title: "Strategy first",
    copy: "We start with your business goals, not a template. Every decision traces back to a number that matters.",
  },
  {
    title: "Designed around the flow",
    copy: "Beautiful is table stakes. We design against the paths users actually take, then prototype before we commit code.",
  },
  {
    title: "Built to last",
    copy: "Fast, accessible, maintainable code on modern frameworks, so the work keeps performing.",
  },
  {
    title: "Optimised forever",
    copy: "Launch is the starting line. We test, measure, and refine so results compound.",
  },
];

export default function Process() {
  return (
    <section id="process" className="border-y border-faint bg-surface/40">
      <div className="mx-auto max-w-container px-6 py-28 md:px-10 md:py-40">
        <Reveal className="mb-20 max-w-2xl">
          <p className="eyebrow mb-6">( The approach )</p>
          <h2 className="font-display text-5xl uppercase leading-[0.9] tracking-tightest text-bone md:text-7xl">
            How we ship.
          </h2>
        </Reveal>

        <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.title}
              delay={(i % 2) * 0.1}
              className="flex gap-6 border-t-2 border-faint pt-8"
            >
              <span className="font-display text-5xl leading-none text-crimson">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl tracking-tightest text-bone">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                  {step.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
