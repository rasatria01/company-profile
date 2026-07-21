# Project33 — Software House

A dark, motion-forward company profile for a software house, built with
**Next.js (App Router) + TypeScript + Tailwind CSS**. Black-and-red theme,
oversized display type, and a scroll-driven signature moment:

- **"LET'S / BUILD" collision** — the centrepiece: two words crash together,
  grind under pressure, then detonate (`components/LetsBuild.tsx`)
- **Count-up preloader** that wipes away on load (`components/Preloader.tsx`)
- **Lenis smooth scrolling** synced to GSAP's ticker (`components/SmoothScroll.tsx`)
- **Seamless infinite marquees**, pure CSS, reusable (`components/Marquee.tsx`)
- **Scroll-triggered count-up stats** (`components/Stats.tsx`)
- **Reusable scroll-reveal wrapper** (`components/Reveal.tsx`)
- A fixed navbar, hero, services grid, numbered process section, CTA, and footer

Reduced-motion is respected throughout, and the layout is responsive down to mobile.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

> The first `npm run dev` / `npm run build` downloads the Google Fonts used by
> `next/font`, so you'll need internet access on first run.

## Stack

| Purpose        | Library                       |
| -------------- | ----------------------------- |
| Framework      | Next.js 14 (App Router)       |
| Language       | TypeScript                    |
| Styling        | Tailwind CSS                  |
| Scroll anims   | GSAP + ScrollTrigger          |
| Smooth scroll  | Lenis                         |
| Fonts          | Bricolage Grotesque / Inter / JetBrains Mono |

## Theme

Six semantic tokens in `tailwind.config.ts` drive the entire site — change them
and everything follows. Contrast ratios are against `ink` and all meet WCAG AA.

| Token     | Hex       | Role                          | Contrast |
| --------- | --------- | ----------------------------- | -------- |
| `ink`     | `#000000` | page background               | —        |
| `surface` | `#0d0d0d` | raised surfaces / cards       | —        |
| `bone`    | `#f5f5f5` | primary text                  | 19.3:1   |
| `muted`   | `#8a8a8a` | secondary text                | 6.1:1    |
| `faint`   | `#242424` | hairline borders              | —        |
| `crimson` | `#ef4444` | the single accent, used sparingly | 5.6:1 |

Red fills pair with `text-ink` — black on `crimson` is 5.6:1, white on `crimson`
is only 3.8:1 and fails AA. The token is named `crimson` rather than `red` so it
doesn't shadow Tailwind's built-in `red-*` scale.

## The "LET'S / BUILD" moment

`components/LetsBuild.tsx` pins for `+=420%` of scroll and runs one scrubbed
GSAP timeline in four acts:

| Scroll   | Act          | What happens                                                      |
| -------- | ------------ | ----------------------------------------------------------------- |
| 0 → .30  | **Approach** | the two words fall in from above and below                        |
| .30 → .34| **Contact**  | they meet, squash on impact, the seam ignites                     |
| .34 → .68| **Pressure** | they grind together, red glow swells, tremble bursts of rising amplitude |
| .68 → 1  | **Boom**     | shockwave ring, spark burst, camera knock + tilt, letters blow apart |

Letter blast vectors are measured from each letter's real position at impact, so
debris radiates outward from the seam rather than in fixed directions. The
tremble uses odd `repeat` counts with `yoyo`, giving an even play count so the
stage always lands back at exactly `0` and can't drift into the boom's tilt.

Tuning knobs: `end: "+=420%"` (overall pace), the `tremble(...)` amplitudes (how
violent the buildup), `SPARKS` (debris density), and the rotation values in the
camera-knock block (tilt severity).

Under `prefers-reduced-motion` the timeline never builds and the two words
simply sit stacked and static — every decorative layer ships `opacity-0` in its
base class, so nothing strays into that path.

## Make it yours

Everything marked with a `TODO:` comment is placeholder content. Start here:

- **Brand name** — search the project for `Project33` and replace it.
- **Palette** — edit the `colors` in `tailwind.config.ts` (see [Theme](#theme)).
- **Fonts** — swap the three `next/font/google` imports in `app/layout.tsx`.
- **Copy & sections** — the arrays at the top of `Stats.tsx`, `Services.tsx`, `Process.tsx`, and `app/page.tsx`.
- **Metadata / SEO** — `metadata` in `app/layout.tsx`.

> Editing `tailwind.config.ts` while the dev server is running can leave a stale
> resolved config in `.next`, which surfaces as `The <class> class does not
> exist`. Restart `npm run dev` after config changes.

## How the animation pieces fit together

`app/layout.tsx` wraps the whole app in `<Preloader />` and `<SmoothScroll>`.
`SmoothScroll` starts Lenis and drives it from `gsap.ticker`, calling
`ScrollTrigger.update()` on every scroll so triggers stay in sync with the eased
scroll position. Individual sections then use `<Reveal>`, `<Stats>`, and
`<LetsBuild>`, which register their own ScrollTriggers. Marquees are CSS-only
and need no JS.
