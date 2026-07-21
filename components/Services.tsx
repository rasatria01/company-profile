import Reveal from "@/components/Reveal";

// TODO: replace with your real services.
const SERVICES = [
  { title: "Web Platforms", copy: "Fast, accessible, production-grade apps on Next.js and TypeScript." },
  { title: "Mobile Apps", copy: "Cross-platform iOS and Android builds from one codebase." },
  { title: "Backend & APIs", copy: "Services, data models, and integrations built to hold under load." },
  { title: "Cloud & DevOps", copy: "Containers, pipelines, and infrastructure that deploys itself." },
  { title: "UI/UX Design", copy: "Interfaces designed against real flows, not dribbble shots." },
  { title: "Team Augmentation", copy: "Senior engineers embedded directly in your sprint." },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-container px-6 py-28 md:px-10 md:py-40">
      <Reveal className="max-w-3xl">
        <p className="eyebrow mb-6">( What we do )</p>
        <h2 className="font-display text-5xl leading-[0.95] tracking-tightest text-bone md:text-7xl">
          Full-stack engineering.
        </h2>
      </Reveal>

      <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-faint bg-faint sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <Reveal
            key={service.title}
            delay={(i % 3) * 0.08}
            className="group bg-ink p-8 transition-colors duration-300 hover:bg-surface md:p-10"
          >
            <span className="font-mono text-xs text-muted">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-8 font-display text-2xl tracking-tightest text-bone transition-colors group-hover:text-crimson">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {service.copy}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
