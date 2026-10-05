"use client";

import * as React from "react";

/**
 * Dhivith Brand Tear Reveal:
 * A premium poster that rips in two as you scroll down.
 * The page starts with the bold brand slogan "DHIVITH".
 * As you scroll, a crack runs through the word, the paper halves tear and pull apart,
 * and the official DHIVITH EDU CARE logo rises gracefully from behind into the gap with an ambient glow.
 */

export interface TigerTearRevealProps {
  /** The big word that gets torn. */
  word?: string;
  /** Small line above the word. Empty hides it. */
  tagline?: string;
  /** Sub-tagline below the revealed logo. */
  subTagline?: string;
  /** Path to the logo image. */
  logoSrc?: string;
  /** Word colour. */
  ink?: string;
  /** Paper colour, the sheet that tears. */
  paper?: string;
  /** Tagline colour. */
  taglineColor?: string;
  /** Font stack for the word. */
  fontFamily?: string;
  /** Height of the pinned stage. */
  height?: string;
  /** Extra scroll distance the tear plays over. */
  scrollDistance?: string;
  /** 0..1. Drive the tear yourself instead of from scroll. */
  progress?: number;
  /** Show the "scroll" hint before the tear starts. */
  hint?: boolean;
  /** Extra root class names. */
  className?: string;
}

export type Pt = [number, number];

/** Seeded PRNG (mulberry32) */
export function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const clamp01 = (x: number) => (x <= 0 ? 0 : x > 1 ? 1 : x);

export function smooth(a: number, b: number, x: number) {
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
}

export function easeOutBack(t: number) {
  const c = 1.70158;
  const u = clamp01(t) - 1;
  return 1 + (c + 1) * u * u * u + c * u * u;
}

export function scrollProgress(top: number, height: number, viewport: number) {
  const range = height - viewport;
  if (range <= 0) return top <= 0 ? 1 : 0;
  return clamp01(-top / range);
}

export function stages(p: number) {
  return {
    crack: smooth(0.03, 0.2, p),
    open: smooth(0.18, 0.62, p),
    rise: smooth(0.26, 0.74, p),
    pop: smooth(0.58, 0.88, p),
    shake: smooth(0.16, 0.22, p) * (1 - smooth(0.26, 0.36, p)),
  };
}

export function tearLine(
  seed = 11,
  from = -800,
  to = 1800,
  step = 9,
  cx = 500,
  cy = 318,
  angle = -7
): Pt[] {
  const r = rng(seed);
  const slope = Math.tan((angle * Math.PI) / 180);
  const out: Pt[] = [];
  for (let x = from; x <= to; x += step) {
    const fibre = (r() - 0.5) * 5;
    const tooth = r() < 0.09 ? (r() - 0.5) * 26 : 0;
    const wander =
      Math.sin(x * 0.019 + seed) * 10 + Math.sin(x * 0.053 + seed * 2) * 4;
    out.push([x, cy + (x - cx) * slope + wander + fibre + tooth]);
  }
  return out;
}

export function pieceMotion(open: number) {
  return {
    top: { dx: -12 * open, dy: -155 * open, rot: -2.8 * open },
    bottom: { dx: 14 * open, dy: 150 * open, rot: 2.3 * open },
  };
}

export function fibreWidths(n: number, open: number, seed = 5) {
  const r = rng(seed);
  const k = Math.min(1, open * 4);
  return Array.from(
    { length: n },
    (_, i) =>
      k *
      (2.5 +
        6 *
          (0.5 + 0.5 * Math.sin(i * 0.37 + seed)) *
          (0.6 + r() * 0.8))
  );
}

const VIEW_W = 1000;
const CX = 500;
const CY = 318;
const FAR = 4000;
const FRAME = "20 10 960 616";

const d = (pts: Pt[], close = true) =>
  "M" +
  pts.map(([x, y]) => x.toFixed(1) + " " + y.toFixed(1)).join("L") +
  (close ? "Z" : "");

const CURLS: Record<"top" | "bottom", [number, number, number][]> = {
  top: [
    [300, 44, 30],
    [575, 30, 20],
    [790, 52, 34],
  ],
  bottom: [
    [205, 50, 32],
    [470, 34, 22],
    [690, 40, 28],
  ],
};

function Half({
  id,
  side,
  line,
  open,
  children,
}: {
  id: string;
  side: "top" | "bottom";
  line: Pt[];
  open: number;
  children: React.ReactNode;
}) {
  const up = side === "top";
  const m = pieceMotion(open)[side];
  const shape = up
    ? [
        [line[0][0], -FAR] as Pt,
        [line[line.length - 1][0], -FAR] as Pt,
        ...[...line].reverse(),
      ]
    : [...line, [line[line.length - 1][0], FAR] as Pt, [line[0][0], FAR] as Pt];
  const widths = fibreWidths(line.length, open, up ? 5 : 8);
  const core = line.concat(
    line.map(([x, y], i) => [x, y + (up ? -widths[i] : widths[i])] as Pt).reverse()
  );
  const curls = CURLS[side].map(([cx, hw, depth]) => {
    const pts = line.filter(([x]) => Math.abs(x - cx) <= hw);
    const back = pts.map(([x, y]) => {
      const s = Math.cos(((x - cx) / hw) * (Math.PI / 2));
      return [
        x + (up ? 6 : -6) * s * open,
        y + (up ? 1 : -1) * depth * s * s * Math.min(1, open * 2.5),
      ] as Pt;
    });
    return d(pts.concat(back.reverse()));
  });
  const transform =
    "translate(" +
    m.dx.toFixed(2) +
    " " +
    m.dy.toFixed(2) +
    ") rotate(" +
    m.rot.toFixed(3) +
    " " +
    CX +
    " " +
    CY +
    ")";
  const clip = id + "-" + side;
  return (
    <g transform={transform}>
      {open > 0 ? (
        <path
          d={d(line, false)}
          fill="none"
          stroke="#000"
          strokeOpacity={0.45 * Math.min(1, open * 3)}
          strokeWidth={20}
          transform={"translate(0 " + (up ? 10 : -10) + ")"}
          filter={"url(#" + id + "-soft)"}
        />
      ) : null}
      <clipPath id={clip}>
        <path d={d(shape)} />
      </clipPath>
      <g clipPath={"url(#" + clip + ")"}>{children}</g>
      {open > 0 ? (
        <>
          <path d={d(core)} fill="#ffffff" />
          {curls.map((c, i) => (
            <path
              key={i}
              d={c}
              fill={"url(#" + id + "-curl-" + side + ")"}
              stroke="#fff"
              strokeWidth={1}
            />
          ))}
        </>
      ) : null}
    </g>
  );
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const h = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);
  return reduced;
}

type Frame = { p: number; look: Pt };

export default function TigerTearReveal({
  word = "MONTESSORI",
  tagline = "NURTURING CURIOSITY & INDEPENDENCE",
  subTagline = "DHIVITH EDU CARE • KINATHUKADAVU, COIMBATORE",
  logoSrc = "/logo.png",
  ink = "#0750B8",
  paper = "#ffffff",
  taglineColor = "#121D28",
  fontFamily = '"Anton", Impact, "Bebas Neue", "Oswald", "Arial Black", sans-serif',
  height = "90svh",
  scrollDistance = "140svh",
  progress,
  hint = true,
  className = "",
}: TigerTearRevealProps) {
  const rootRef = React.useRef<HTMLElement | null>(null);
  const stageRef = React.useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const id = "dtr" + React.useId().replace(/[^a-zA-Z0-9]/g, "");
  const line = React.useMemo(() => tearLine(), []);
  const [f, setF] = React.useState<Frame>({ p: progress ?? 0, look: [0, 0] });

  const controlled = progress !== undefined;
  const cfg = React.useRef({ progress, controlled, reduced });
  cfg.current = { progress, controlled, reduced };
  const pointer = React.useRef<{ x: number; y: number } | null>(null);

  React.useEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    if (!root || !stage) return;
    let raf = 0;
    let visible = true;
    let p = cfg.current.progress ?? 0;
    let look: Pt = [0, 0];
    let last: Frame | null = null;

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !raf) raf = requestAnimationFrame(tick);
    });
    io.observe(root);

    function tick() {
      raf = 0;
      if (!visible) return;
      const c = cfg.current;
      const target = c.controlled
        ? clamp01(c.progress ?? 0)
        : scrollProgress(
            root!.getBoundingClientRect().top,
            root!.offsetHeight,
            stage!.offsetHeight
          );
      p = c.reduced ? (target > 0.3 ? 1 : 0) : p + (target - p) * 0.14;
      if (Math.abs(target - p) < 0.0005) p = target;

      let want: Pt = [0, 0];
      if (pointer.current) {
        const r = stage!.getBoundingClientRect();
        want = [
          Math.max(
            -1,
            Math.min(1, (pointer.current.x - r.left - r.width / 2) / (r.width * 0.4))
          ),
          Math.max(
            -1,
            Math.min(
              1,
              (pointer.current.y - r.top - r.height * 0.5) / (r.height * 0.4)
            )
          ),
        ];
      }
      look = [
        look[0] + (want[0] - look[0]) * 0.12,
        look[1] + (want[1] - look[1]) * 0.12,
      ];

      const next: Frame = { p, look };
      if (
        !last ||
        Math.abs(next.p - last.p) > 1e-4 ||
        Math.abs(next.look[0] - last.look[0]) > 1e-3 ||
        Math.abs(next.look[1] - last.look[1]) > 1e-3
      ) {
        last = next;
        setF(next);
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  const s = stages(f.p);
  const pop = reduced ? s.pop : easeOutBack(s.pop);
  const rise = (1 - s.rise) * 110;
  const shake = reduced ? 0 : Math.sin(f.p * 900) * 5 * s.shake;
  const crackReach = s.crack * 620;
  const crack = line.filter(([x]) => Math.abs(x - CX) <= crackReach);

  // Logo transform with smooth pointer parallax tilt & scale
  const logoScale = 0.85 + 0.3 * pop;
  const logoX = CX + f.look[0] * 18;
  const logoY = CY + rise + f.look[1] * 12;

  const sheet = (
    <>
      <rect
        x={-FAR}
        y={-FAR}
        width={FAR * 2 + VIEW_W}
        height={FAR * 2}
        fill={paper}
      />
      {tagline ? (
        <text
          x={CX}
          y={150}
          textAnchor="middle"
          fill={taglineColor}
          style={{
            font: '700 24px "Outfit", "Helvetica Neue", Arial, sans-serif',
            letterSpacing: "0.3em",
          }}
        >
          {tagline}
        </text>
      ) : null}
      <text
        x={CX}
        y={404}
        textAnchor="middle"
        textLength={880}
        lengthAdjust="spacingAndGlyphs"
        fill={ink}
        style={{
          fontFamily,
          fontSize: 250,
          fontWeight: 900,
          letterSpacing: 0,
        }}
      >
        {word}
      </text>
    </>
  );

  return (
    <section
      ref={rootRef}
      className={"relative w-full " + className}
      style={{
        height: controlled
          ? height
          : "calc(" + height + " + " + scrollDistance + ")",
        background: paper,
        overflow: "clip",
      }}
    >
      <div
        ref={stageRef}
        className="sticky top-0 w-full overflow-hidden flex items-center justify-center"
        style={{ height }}
        onPointerMove={(e) =>
          (pointer.current = { x: e.clientX, y: e.clientY })
        }
        onPointerLeave={() => (pointer.current = null)}
      >
        <svg
          viewBox={FRAME}
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label={
            (tagline ? tagline + ". " : "") +
            word +
            ", torn in two revealing Dhivith Edu Care logo."
          }
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            maxWidth: "none",
            display: "block",
          }}
        >
          <defs>
            {/* Ambient Brand Glowing Gradients */}
            <radialGradient id={id + "-brand-glow"} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0750B8" stopOpacity="0.22" />
              <stop offset="50%" stopColor="#159447" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>

            <linearGradient id={id + "-curl-top"} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffffff" />
              <stop offset="1" stopColor="#d9d4cb" />
            </linearGradient>
            <linearGradient
              id={id + "-curl-bottom"}
              x1="0"
              y1="1"
              x2="0"
              y2="0"
            >
              <stop offset="0" stopColor="#ffffff" />
              <stop offset="1" stopColor="#d9d4cb" />
            </linearGradient>

            <filter id={id + "-soft"} x="-20%" y="-50%" width="140%" height="200%">
              <feGaussianBlur stdDeviation="8" />
            </filter>
            <filter id={id + "-logo-shadow"} x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#0750B8" floodOpacity="0.25" />
            </filter>
          </defs>

          <g
            transform={
              "translate(" + shake.toFixed(2) + " " + (shake * 0.4).toFixed(2) + ")"
            }
          >
            {/* BEHIND THE PAPER: DHIVITH LOGO REVEAL */}
            {s.open > 0 ? (
              <g>
                {/* Brand Background Aura */}
                <rect
                  x={-FAR}
                  y={-FAR}
                  width={FAR * 2 + VIEW_W}
                  height={FAR * 2}
                  fill="#fafcff"
                />
                <circle
                  cx={CX}
                  cy={CY}
                  r={320}
                  fill={"url(#" + id + "-brand-glow)"}
                />

                {/* Pure Typography Branding Group */}
                <g
                  transform={`translate(${logoX.toFixed(2)} ${logoY.toFixed(
                    2
                  )}) scale(${logoScale.toFixed(3)})`}
                  filter={"url(#" + id + "-logo-shadow)"}
                >
                  {/* Top Kicker / Location Badge */}
                  <text
                    x="0"
                    y="-38"
                    textAnchor="middle"
                    fill="#159447"
                    style={{
                      font: '800 15px "Outfit", -apple-system, sans-serif',
                      letterSpacing: "0.32em",
                    }}
                  >
                    EST. 2024 • KINATHUKADAVU, COIMBATORE
                  </text>

                  {/* Main Huge Brand Title */}
                  <text
                    x="0"
                    y="22"
                    textAnchor="middle"
                    fill="#0750B8"
                    style={{
                      font: '900 56px "Outfit", -apple-system, sans-serif',
                      letterSpacing: "0.06em",
                    }}
                  >
                    DHIVITH EDU CARE
                  </text>

                  {/* Program Subtitle */}
                  <text
                    x="0"
                    y="62"
                    textAnchor="middle"
                    fill="#F36B12"
                    style={{
                      font: '800 18px "Outfit", -apple-system, sans-serif',
                      letterSpacing: "0.22em",
                    }}
                  >
                    A MONTESSORI PRE-SCHOOL & TUITION HUB
                  </text>

                  {/* Motto Line */}
                  <text
                    x="0"
                    y="92"
                    textAnchor="middle"
                    fill="#5E6D7A"
                    style={{
                      font: '600 14px "Outfit", -apple-system, sans-serif',
                      letterSpacing: "0.16em",
                    }}
                  >
                    WHERE JOYFUL LEARNING MEETS LIMITLESS POTENTIAL
                  </text>
                </g>
              </g>
            ) : null}

            {/* THE SHEET: whole until it tears, then pulls apart in two halves */}
            {s.open > 0 ? (
              <>
                <Half id={id} side="top" line={line} open={s.open}>
                  {sheet}
                </Half>
                <Half id={id} side="bottom" line={line} open={s.open}>
                  {sheet}
                </Half>
              </>
            ) : (
              sheet
            )}

            {/* Crack running out before tear opens */}
            {s.crack > 0 && s.open < 0.15 && crack.length > 1 ? (
              <path
                d={d(crack, false)}
                fill="none"
                stroke="#0750B8"
                strokeWidth={2.4}
                strokeLinejoin="bevel"
                opacity={1 - s.open / 0.15}
              />
            ) : null}
          </g>
        </svg>

        {hint && !controlled ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-6 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.35em]"
            style={{
              color: taglineColor,
              opacity: Math.max(0, 0.7 - s.crack * 3),
            }}
          >
            scroll
            <span
              className="block h-6 w-px animate-pulse motion-reduce:animate-none"
              style={{ background: taglineColor }}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
