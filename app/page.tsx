import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import LetsBuild from "@/components/LetsBuild";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Work from "@/components/Work";
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

const FOOTER_PAGES = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// TODO: point these at real service pages once they exist.
const FOOTER_SERVICES = [
  "Web Platforms",
  "Mobile Apps",
  "Backend & APIs",
  "Cloud & DevOps",
  "UI/UX Design",
  "Team Augmentation",
];

function Ticker() {
  return (
    <div className="border-y border-faint py-8">
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
  );
}

export default function Home() {
  return (
    <main id="top">
      <Navbar />

      {/* ---------------------------------------------------------------- HERO */}
      <section className="relative flex min-h-screen flex-col justify-center px-6 pt-24 md:px-10">
        <div className="mx-auto w-full max-w-container">
          <p className="eyebrow mb-8">( Software House )</p>
          <h1 className="max-w-[14ch] font-display text-[13vw] font-medium uppercase leading-[0.85] tracking-tightest text-bone md:text-[8.5vw]">
            We build software that{" "}
            <span className="text-crimson">ships.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Project33 designs and engineers web platforms, mobile apps, and the
            backend systems behind them — then keeps them fast, tested, and
            maintainable long after launch.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn">
              Book consultation
            </a>
            <a href="#services" className="btn-ghost">
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

      {/* Stack ticker lands right out of the blast — the calm after the boom */}
      <Ticker />

      {/* -------------------------------------------------------------- INTRO + STATS */}
      <section
        id="about"
        className="mx-auto max-w-container px-6 py-28 md:px-10 md:py-40"
      >
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
      <Work />

      {/* -------------------------------------------------------- TESTIMONIAL */}
      <section className="border-y border-faint bg-surface/40">
        <div className="mx-auto max-w-container px-6 py-28 md:px-10 md:py-40">
          <Reveal className="max-w-5xl">
            <figure>
              <span
                aria-hidden="true"
                className="block font-display text-8xl leading-[0.5] text-crimson"
              >
                &ldquo;
              </span>
              {/* TODO: replace with a real, attributable client quote. */}
              <blockquote className="mt-6 font-display text-3xl leading-tight tracking-tightest text-bone md:text-5xl">
                They didn&rsquo;t just hand us a repo — they built the system our
                business actually runs on.
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                <span className="h-px w-12 bg-crimson" />
                Client Name, Role &mdash; Company
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------------------------------- CTA */}
      <section
        id="contact"
        className="mx-auto max-w-container px-6 py-32 text-center md:px-10 md:py-48"
      >
        <Reveal>
          <p className="eyebrow mb-8">( Start the conversation )</p>
          <h2 className="mx-auto max-w-[16ch] font-display text-6xl uppercase leading-[0.9] tracking-tightest text-bone md:text-8xl">
            Let&rsquo;s build your next system.
          </h2>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a href="mailto:hello@project33.dev" className="btn">
              Book consultation
            </a>
            <a href="#services" className="btn-ghost">
              View services
            </a>
          </div>
        </Reveal>
      </section>

      <Ticker />

      {/* --------------------------------------------------------------- FOOTER */}
      <footer>
        <div className="mx-auto grid max-w-container gap-12 px-6 py-20 md:grid-cols-4 md:px-10">
          <div className="md:col-span-1">
            <a
              href="#top"
              className="font-display text-2xl font-semibold uppercase tracking-tightest text-bone"
            >
              Project<span className="text-crimson">33</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              A software house building web platforms, mobile apps, and backend
              systems for teams that need to ship.
            </p>
          </div>

          <nav aria-label="Pages">
            <h2 className="eyebrow mb-6">Pages</h2>
            <ul className="space-y-3">
              {FOOTER_PAGES.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-crimson"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className="eyebrow mb-6">Services</h2>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-sm text-muted transition-colors hover:text-crimson"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow mb-6">Contact</h2>
            {/* TODO: replace with your real contact details. */}
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <a
                  href="mailto:hello@project33.dev"
                  className="transition-colors hover:text-crimson"
                >
                  hello@project33.dev
                </a>
              </li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-faint">
          <div className="mx-auto flex max-w-container flex-col gap-3 px-6 py-8 font-mono text-xs uppercase tracking-[0.15em] text-muted md:flex-row md:items-center md:justify-between md:px-10">
            <p>&copy; {new Date().getFullYear()} Project33. All rights reserved.</p>
            <p>Built to ship &mdash; not to sit in a deck.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
