import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import LetsBuild from "@/components/LetsBuild";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Reveal from "@/components/Reveal";

const TICKER = [
  "Next.js",
  "TypeScript",
  "React Native",
  "Node.js",
  "PostgreSQL",
  "AWS",
  "Docker",
  "CI/CD",
];

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* ---------------------------------------------------------------- HERO */}
      <section className="relative flex min-h-screen flex-col justify-center px-6 pt-24 md:px-10">
        <div className="mx-auto w-full max-w-container">
          <p className="eyebrow mb-8">Software House</p>
          <h1 className="max-w-[15ch] font-display text-[13vw] font-medium leading-[0.9] tracking-tightest text-bone md:text-[8.5vw]">
            We build software that ships.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Project33 designs and engineers web platforms, mobile apps, and the
            backend systems behind them — then keeps them fast, tested, and
            maintainable long after launch.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="rounded-full bg-bone px-7 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-opacity hover:opacity-80"
            >
              Book consultation
            </a>
            <a
              href="#"
              className="rounded-full border border-bone/20 px-7 py-3 font-mono text-xs uppercase tracking-[0.15em] text-bone transition-colors hover:bg-bone hover:text-ink"
            >
              View services
            </a>
          </div>
        </div>

        <span className="absolute bottom-8 left-6 font-mono text-xs uppercase tracking-[0.25em] text-muted md:left-10">
          Scroll to explore
        </span>
      </section>

      {/* --------------------------------------------- "LET'S BUILD" SCROLL MOMENT */}
      <LetsBuild />

      {/* -------------------------------------------------------------- INTRO + STATS */}
      <section className="mx-auto max-w-container px-6 py-28 md:px-10 md:py-40">
        <Reveal className="max-w-4xl">
          <p className="eyebrow mb-6">( Who we are )</p>
          <p className="font-display text-3xl leading-tight tracking-tightest text-bone md:text-5xl">
            We are engineers, not order-takers. Project33 embeds with your team,
            ships production software, and treats every launch as the start, not
            the finish.
          </p>
        </Reveal>

        <div className="mt-24">
          <Stats />
        </div>
      </section>

      <Services />
      <Process />

      {/* --------------------------------------------------------------- CTA */}
      <section className="mx-auto max-w-container px-6 py-32 text-center md:px-10 md:py-48">
        <Reveal>
          <p className="eyebrow mb-8">Start the conversation</p>
          <h2 className="mx-auto max-w-[16ch] font-display text-6xl leading-[0.95] tracking-tightest text-bone md:text-8xl">
            Let&rsquo;s build your next system.
          </h2>
          <a
            href="#"
            className="mt-12 inline-block rounded-full bg-crimson px-8 py-4 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-opacity hover:opacity-80"
          >
            Book consultation
          </a>
        </Reveal>
      </section>

      {/* --------------------------------------------------------- TICKER MARQUEE */}
      <div className="border-t border-faint py-8">
        <Marquee duration={35} reverse>
          {TICKER.map((word) => (
            <span
              key={word}
              className="flex items-center font-mono text-sm uppercase tracking-[0.2em] text-muted"
            >
              {word}
              <span className="tick-star">&#10022;</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* --------------------------------------------------------------- FOOTER */}
      <footer className="border-t border-faint">
        <div className="mx-auto flex max-w-container flex-col gap-10 px-6 py-16 md:flex-row md:items-end md:justify-between md:px-10">
          <div className="max-w-sm">
            <a
              href="#"
              className="font-display text-2xl font-semibold tracking-tightest text-bone"
            >
              Project<span className="text-crimson">33</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              A software house building web platforms, mobile apps, and backend
              systems for teams that need to ship.
            </p>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
            &copy; {new Date().getFullYear()} Project33. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
