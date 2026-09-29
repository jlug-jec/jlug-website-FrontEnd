"use client";

// ─────────────────────────────────────────────────────────────────────────────
// CircleWipeReveal — Animated green circle that sweeps from the photo (right)
// to the text side (left), revealing content as it passes.
//
// Physics:  position, scale, opacity are all pure functions of `progress`,
//           so the animation is fully reversible when scrolling back up.
// Rendering:  SVG rings for crisp segmented arcs at any scale.
// ─────────────────────────────────────────────────────────────────────────────

const CONFIG = {
  /** Outer ring diameter in px */
  diameter: 280,
  /** Starting horizontal position (% of slide width) — over the photo */
  startX: 78,
  /** Ending horizontal position (% of slide width) — over the text */
  endX: 18,
  /** Vertical center (% of slide height) */
  centerY: 48,
} as const;

// ── Easing helpers ──────────────────────────────────────────────────────────
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function bellCurve(t: number): number {
  return Math.sin(t * Math.PI);
}

function clamp01(v: number): number {
  return Math.max(0, Math.min(1, v));
}

// (Content clip is now computed by the parent — see HallOfFameClient.tsx)

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
interface Props {
  /** 0 → 1 entrance progress (maps to the existing `visibility` value) */
  progress: number;
}

export default function CircleWipeReveal({ progress }: Props) {
  if (progress < 0.01 || progress > 0.97) return null;

  const eased = easeInOutCubic(progress);

  // ── Position ────────────────────────────────────────────────────────────
  const x = CONFIG.startX - eased * (CONFIG.startX - CONFIG.endX);

  // ── Scale: bell curve, peaks at ~50% progress ──────────────────────────
  const scale = 0.25 + bellCurve(progress) * 0.95;

  // ── Opacity: quick fade-in, hold, quick fade-out ───────────────────────
  const opacity =
    progress < 0.06
      ? progress / 0.06
      : progress > 0.88
        ? (1 - progress) / 0.12
        : 0.95;

  // ── Trail: horizontal line trailing behind the circle ──────────────────
  const trailW = bellCurve(eased) * 280; // px, grows then shrinks

  return (
    <div
      className="cwipe"
      aria-hidden="true"
      style={{
        left: `${x}%`,
        top: `${CONFIG.centerY}%`,
        opacity,
        transform: `translate(-50%, -50%) scale(${scale})`,
        width: CONFIG.diameter,
        height: CONFIG.diameter,
      }}
    >
      {/* ── Outer segmented ring ── */}
      <svg
        className="cwipe-ring cwipe-spin"
        viewBox="0 0 100 100"
        fill="none"
      >
        {/* Three arc segments with rounded caps */}
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="#B7F34A"
          strokeWidth="2.5"
          strokeDasharray="24 14"
          strokeLinecap="round"
          opacity="0.85"
        />
        {/* Thinner outer halo */}
        <circle
          cx="50"
          cy="50"
          r="49"
          stroke="#B7F34A"
          strokeWidth="0.6"
          strokeDasharray="8 20"
          opacity="0.3"
        />
      </svg>

      {/* ── Inner counter-rotating ring ── */}
      <svg
        className="cwipe-ring-inner cwipe-spin-reverse"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle
          cx="50"
          cy="50"
          r="34"
          stroke="#B7F34A"
          strokeWidth="1"
          strokeDasharray="5 10"
          strokeLinecap="round"
          opacity="0.35"
        />
      </svg>

      {/* ── Small targeting reticle at center ── */}
      <svg
        className="cwipe-reticle"
        viewBox="0 0 100 100"
        fill="none"
      >
        {/* Horizontal tick */}
        <line x1="42" y1="50" x2="46" y2="50" stroke="#B7F34A" strokeWidth="1" opacity="0.5" />
        <line x1="54" y1="50" x2="58" y2="50" stroke="#B7F34A" strokeWidth="1" opacity="0.5" />
        {/* Vertical tick */}
        <line x1="50" y1="42" x2="50" y2="46" stroke="#B7F34A" strokeWidth="1" opacity="0.5" />
        <line x1="50" y1="54" x2="50" y2="58" stroke="#B7F34A" strokeWidth="1" opacity="0.5" />
        {/* Center dot */}
        <circle cx="50" cy="50" r="1.5" fill="#B7F34A" opacity="0.6" />
      </svg>

      {/* ── Radial glow behind rings ── */}
      <div className="cwipe-glow" />

      {/* ── Horizontal trail line — extends behind the circle ── */}
      <div
        className="cwipe-trail"
        style={{ width: `${trailW}px` }}
      />

      {/* ── Small orbiting dot ── */}
      <div className="cwipe-orbit cwipe-spin-fast">
        <div className="cwipe-orbit-dot" />
      </div>
    </div>
  );
}
