"use client";

import { useEffect, useRef, useCallback } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Config — all marquee tuning lives here
// ─────────────────────────────────────────────────────────────────────────────
const MARQUEE_CONFIG = {
  /** Base speed in px/frame at 60 fps (positive = moves left) */
  baseSpeed: 0.8,
  /** How much scroll velocity amplifies the base speed (multiplier) */
  scrollMultiplier: 3.5,
  /** Lerp factor for smoothing scroll velocity (0–1, lower = smoother) */
  velocityLerp: 0.04,
  /** How fast the velocity decays back to base when not scrolling */
  decayLerp: 0.03,
  /** Maximum speed multiplier cap to prevent extreme speeds */
  maxSpeedMultiplier: 8,
  /** Number of times to duplicate the content strip for seamless wrap */
  duplicates: 4,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// useScrollVelocity — tracks scroll speed & direction, decoupled from render
// ─────────────────────────────────────────────────────────────────────────────
function useScrollVelocity() {
  const velocityRef = useRef(0);
  const smoothVelocityRef = useRef(0);
  const lastScrollY = useRef(0);
  const lastTime = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    lastTime.current = performance.now();

    const onScroll = () => {
      const now = performance.now();
      const dt = now - lastTime.current;
      if (dt > 0) {
        const dy = window.scrollY - lastScrollY.current;
        // Normalize to px/ms, then scale to a usable range
        velocityRef.current = dy / Math.max(dt, 1);
      }
      lastScrollY.current = window.scrollY;
      lastTime.current = now;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { velocityRef, smoothVelocityRef };
}

// ─────────────────────────────────────────────────────────────────────────────
// MarqueeStrip — one horizontal row of repeating content
// ─────────────────────────────────────────────────────────────────────────────
interface MarqueeStripProps {
  /** Direction: 1 = left, -1 = right (for alternating rows) */
  direction: 1 | -1;
  children: React.ReactNode;
  velocityRef: React.RefObject<number>;
  smoothVelocityRef: React.RefObject<number>;
}

function MarqueeStrip({
  direction,
  children,
  velocityRef,
  smoothVelocityRef,
}: MarqueeStripProps) {
  const stripRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef(0);
  const singleWidthRef = useRef(0);

  // Measure a single copy's width so we know when to wrap
  const measureWidth = useCallback(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const firstChild = strip.children[0] as HTMLElement | undefined;
    if (firstChild) {
      singleWidthRef.current = firstChild.offsetWidth;
    }
  }, []);

  useEffect(() => {
    measureWidth();
    window.addEventListener("resize", measureWidth);
    return () => window.removeEventListener("resize", measureWidth);
  }, [measureWidth]);

  useEffect(() => {
    const reduceMotion = matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const animate = () => {
      const vel = velocityRef.current ?? 0;
      // Lerp smooth velocity toward raw velocity
      const target = vel * MARQUEE_CONFIG.scrollMultiplier * 60; // scale up
      const current = smoothVelocityRef.current ?? 0;

      // Use faster lerp when actively scrolling, slower decay otherwise
      const lerp =
        Math.abs(vel) > 0.01
          ? MARQUEE_CONFIG.velocityLerp
          : MARQUEE_CONFIG.decayLerp;
      smoothVelocityRef.current = current + (target - current) * lerp;

      // Speed = base + scroll contribution (direction flips for alternating rows)
      const scrollContribution = smoothVelocityRef.current ?? 0;
      const speed =
        (MARQUEE_CONFIG.baseSpeed + Math.abs(scrollContribution) * 0.15) *
        direction;

      // Clamp to max speed
      const clampedSpeed = Math.max(
        -MARQUEE_CONFIG.baseSpeed * MARQUEE_CONFIG.maxSpeedMultiplier,
        Math.min(
          MARQUEE_CONFIG.baseSpeed * MARQUEE_CONFIG.maxSpeedMultiplier,
          speed
        )
      );

      // When scrolling down → both rows speed up in their natural direction
      // When scrolling up → both rows reverse briefly
      const scrollDirection = scrollContribution > 0 ? 1 : -1;
      const scrollBoost =
        Math.abs(scrollContribution) * 0.08 * scrollDirection * direction;

      offsetRef.current -= clampedSpeed + scrollBoost;

      // Seamless wrap: when we've moved a full copy width, reset
      const w = singleWidthRef.current;
      if (w > 0) {
        if (offsetRef.current <= -w) offsetRef.current += w;
        if (offsetRef.current >= 0) offsetRef.current -= w;
      }

      if (stripRef.current) {
        stripRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [direction, velocityRef, smoothVelocityRef]);

  // Render multiple copies for seamless loop
  const copies = Array.from({ length: MARQUEE_CONFIG.duplicates }, (_, i) => (
    <div key={i} className="marquee-copy shrink-0 flex items-center">
      {children}
    </div>
  ));

  return (
    <div className="overflow-hidden">
      <div
        ref={stripRef}
        className="flex will-change-transform"
        style={{ transform: "translate3d(0, 0, 0)" }}
      >
        {copies}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ScrollMarquee — the full marquee section with multiple rows
// ─────────────────────────────────────────────────────────────────────────────
interface MarqueeItem {
  name: string;
  year: string;
}

interface ScrollMarqueeProps {
  items: MarqueeItem[];
}

export default function ScrollMarquee({ items }: ScrollMarqueeProps) {
  const { velocityRef, smoothVelocityRef } = useScrollVelocity();

  // Build the content strips — names row and years row
  const nameContent = (
    <div className="flex items-center gap-[3vw] px-[1.5vw] whitespace-nowrap">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-[3vw]">
          <span className="marquee-name font-bold uppercase tracking-tight select-none">
            {item.name}
          </span>
          <span className="marquee-dot" aria-hidden="true" />
        </span>
      ))}
    </div>
  );

  const yearContent = (
    <div className="flex items-center gap-[4vw] px-[2vw] whitespace-nowrap">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-[4vw]">
          <span className="marquee-year font-mono font-bold uppercase tracking-widest select-none">
            {item.year}
          </span>
          <span className="marquee-slash select-none" aria-hidden="true">
            //
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <section className="hof-marquee-section relative overflow-hidden border-t border-b border-jlug-line">
      {/* Subtle gradient overlays for edge fade */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10"
        style={{
          width: "8vw",
          background:
            "linear-gradient(to right, #070707 0%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10"
        style={{
          width: "8vw",
          background:
            "linear-gradient(to left, #070707 0%, transparent 100%)",
        }}
      />

      {/* Eyebrow */}
      <div className="px-5 sm:px-8 md:px-16 pt-10 sm:pt-16 pb-4 sm:pb-6">
        <span className="font-mono text-[0.7rem] sm:text-xs text-jlug-gray-3 uppercase tracking-widest">
          INDUCTEES // CONTINUOUS ROLL
        </span>
      </div>

      {/* Row 1 — names, moves left */}
      <div className="marquee-row marquee-row-names py-2">
        <MarqueeStrip
          direction={1}
          velocityRef={velocityRef}
          smoothVelocityRef={smoothVelocityRef}
        >
          {nameContent}
        </MarqueeStrip>
      </div>

      {/* Row 2 — years, moves right (opposite direction) */}
      <div className="marquee-row marquee-row-years py-2">
        <MarqueeStrip
          direction={-1}
          velocityRef={velocityRef}
          smoothVelocityRef={smoothVelocityRef}
        >
          {yearContent}
        </MarqueeStrip>
      </div>

      {/* Row 3 — names again, slightly different size, moves left */}
      <div className="marquee-row marquee-row-names-sm py-2 pb-16">
        <MarqueeStrip
          direction={1}
          velocityRef={velocityRef}
          smoothVelocityRef={smoothVelocityRef}
        >
          {nameContent}
        </MarqueeStrip>
      </div>

      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[5] opacity-[0.02] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />
    </section>
  );
}
