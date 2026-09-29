"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRESIDENTS, President } from "@/data/presidentsData";
import ScrollMarquee from "./ScrollMarquee";
import "./scrollMarquee.css";
import CircleWipeReveal from "./CircleWipeReveal";
import "./circleWipeReveal.css";

// ─────────────────────────────────────────────────────────────────────────────
// Config — change these to tune the feel
// ─────────────────────────────────────────────────────────────────────────────
const SCROLL_PER_PRESIDENT = 1.4; // viewport-heights each president "owns"
const LERP_FACTOR = 0.09;          // smoothing (lower = more buttery, higher = snappier)

function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v));
}

// ─────────────────────────────────────────────────────────────────────────────
// Icons
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// Photo panel — isolated so it can cross-fade cleanly between presidents
// ─────────────────────────────────────────────────────────────────────────────
interface PhotoPanelProps {
  president: President;
  /** 0 = about to enter, 1 = fully active, 0 = just exited */
  visibility: number;
  entering: boolean;
}

function PhotoPanel({ president, visibility, entering }: PhotoPanelProps) {
  // On enter: clip-path on the parent handles the reveal on desktop,
  // on mobile, smooth opacity fade.
  const photoOpacity = entering ? clamp(visibility * 4, 0, 1) : visibility;
  // Subtle slide
  const translateX = entering
    ? (1 - visibility) * 20     // gentle slide
    : (1 - visibility) * -30;   // 0 → -30px left on exit

  return (
    <div
      className="w-full h-[36vh] sm:h-[40vh] lg:h-full lg:w-[48%] relative overflow-hidden shrink-0"
      style={{
        background: "#000000",
        opacity: photoOpacity,
        transform: `translateX(${translateX}px)`,
        willChange: "transform, opacity",
      }}
    >
      {president.photo ? (() => {
        // Local uploads (cutout on black bg) use object-contain so they aren't cropped.
        // Remote placeholder avatars use object-cover to fill the frame.
        const isLocalFile = president.photo.startsWith("/");
        return (
          <div className="absolute inset-0 bg-black">
            <Image
              src={president.photo}
              alt={`${president.name}, JLUG President ${president.year}`}
              fill
              unoptimized
              className={isLocalFile ? "object-contain object-top" : "object-cover object-center"}
              style={isLocalFile ? { padding: "1rem 1rem 0" } : {}}
              priority={true}
            />
            {/* Left vignette (desktop) — seamlessly dissolves text panel into the image */}
            <div
              className="hidden lg:block absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, #000000 0%, rgba(0,0,0,0.85) 12%, transparent 35%)",
              }}
            />
            {/* Top, bottom, and right edge blend — ensures all outer image borders melt into the page */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, #000000 0%, transparent 10%, transparent 72%, #000000 100%), linear-gradient(to left, #000000 0%, transparent 15%)",
              }}
            />
          </div>
        );
      })() : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-jlug-surface font-mono text-jlug-gray-3">
          <div className="text-[4rem] sm:text-[6rem] leading-none mb-3 sm:mb-4 opacity-30">▣</div>
          <p className="text-[0.65rem] sm:text-xs uppercase tracking-widest">[ PHOTO PENDING ]</p>
        </div>
      )}

      {/* Year watermark — very faint, lives on the photo */}
      <div
        className="absolute bottom-3 right-4 lg:bottom-6 lg:right-6 font-mono font-bold leading-none select-none pointer-events-none z-10"
        style={{
          fontSize: "clamp(3.5rem, 8vw, 9rem)",
          color: "rgba(255,255,255,0.06)",
        }}
      >
        {president.year.split("–")[0]}
      </div>

      {/* "PRESIDENT" vertical type */}
      <div
        className="hidden sm:block absolute top-1/2 right-5 font-mono text-[0.58rem] text-white/20 uppercase tracking-[0.45em] z-10 pointer-events-none select-none"
        style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
      >
        PRESIDENT
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Text content panel — slides up/fades in separately from the photo
// ─────────────────────────────────────────────────────────────────────────────
interface TextPanelProps {
  president: President;
  index: number;
  total: number;
  visibility: number; // 0 → 1
  entering: boolean;
}

function TextPanel({ president, index, total, visibility, entering }: TextPanelProps) {
  const num = String(index + 1).padStart(2, "0");

  // Text rises from below while entering; drifts up while exiting
  const textY = entering
    ? (1 - visibility) * 30
    : -(1 - visibility) * 20;

  // Stagger entrance based on progress
  const textVis = entering
    ? clamp((visibility - 0.15) / 0.75, 0, 1)
    : visibility;

  const sub1 = clamp(textVis * 1.8 - 0, 0, 1);   // branch + divider
  const sub2 = clamp(textVis * 1.8 - 0.25, 0, 1); // note
  const sub3 = clamp(textVis * 1.8 - 0.5, 0, 1); // socials

  const textOpacity = entering ? clamp(textVis * 2.5, 0, 1) : visibility;

  return (
    <div
      className="flex-1 min-h-0 flex flex-col justify-center px-5 sm:px-10 lg:px-20 py-4 sm:py-8 lg:py-0 relative z-10 overflow-y-auto"
      style={{
        opacity: textOpacity,
        transform: `translateY(${textY}px)`,
        willChange: "transform, opacity",
      }}
    >
      {/* Counter + year */}
      <div className="flex items-center gap-2 sm:gap-3 font-mono text-[0.7rem] sm:text-xs text-jlug-gray-2 uppercase tracking-widest mb-3 sm:mb-6 lg:mb-8">
        <span className="text-jlug-accent font-bold">{num}</span>
        <span className="text-jlug-gray-3">/</span>
        <span>{String(total).padStart(2, "0")}</span>
        <span className="flex-1 h-px bg-jlug-line" />
        <span className="text-jlug-accent">{president.year}</span>
      </div>

      {/* Name — scaled responsibly for small mobile screens */}
      <h2
        className="text-[clamp(1.85rem,5.5vw,7.5rem)] font-bold uppercase tracking-tight leading-[0.92] mb-2 sm:mb-4 lg:mb-5 break-words"
        style={{ color: "var(--color-jlug-white)" }}
      >
        {president.name.split(" ").map((word, i) => (
          <span key={i} className="block">{word}</span>
        ))}
      </h2>

      {/* Founder / Co-founder tag */}
      {president.tag && (
        <span
          className="inline-block w-fit mb-2 sm:mb-4 border border-jlug-accent px-2.5 py-1 font-mono text-[0.65rem] sm:text-xs uppercase tracking-widest text-jlug-accent"
          style={{ opacity: sub1 }}
        >
          {president.tag}
        </span>
      )}

      {/* Branch */}
      <p
        className="font-mono text-[0.68rem] sm:text-xs text-jlug-gray-1 uppercase tracking-widest mb-2 sm:mb-4 lg:mb-5"
        style={{ opacity: sub1 }}
      >
        {president.branch}
      </p>
      {/* Accent divider */}
      <div
        className="mb-3 sm:mb-5 bg-jlug-accent"
        style={{
          height: "2px",
          width: `${sub1 * 48}px`,
          maxWidth: "48px",
        }}
      />

      {/* Note */}
      {president.note && (
        <p
          className="text-jlug-gray-1 max-w-md leading-relaxed text-xs sm:text-sm lg:text-[clamp(0.95rem,1.2vw,1.1rem)]"
          style={{ opacity: sub2 }}
        >
          {president.note}
        </p>
      )}


      {/* Footer stamp */}
      <div className="hidden sm:block mt-6 lg:mt-10 font-mono text-[0.6rem] text-jlug-gray-3 uppercase tracking-widest">
        JLUG // PRESIDENT // {president.year}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────────
export default function HallOfFameClient() {
  const total = PRESIDENTS.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const rawRef = useRef(0);
  const animRef = useRef(0);

  // Smooth animated index (float, 0 … total-1)
  const [smoothIndex, setSmoothIndex] = useState(0);

  const tick = useCallback(() => {
    const diff = rawRef.current - animRef.current;
    if (Math.abs(diff) > 0.0005) {
      animRef.current += diff * LERP_FACTOR;
      setSmoothIndex(animRef.current);
      rafRef.current = requestAnimationFrame(tick);
    } else {
      animRef.current = rawRef.current;
      setSmoothIndex(rawRef.current);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const scrolled = -el.getBoundingClientRect().top;
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      rawRef.current = clamp((scrolled / scrollable) * (total - 1), 0, total - 1);
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [total, tick]);

  const activeIndex = Math.round(clamp(smoothIndex, 0, total - 1));
  const progressPct = clamp((smoothIndex / (total - 1)) * 100, 0, 100);

  const scrollToIndex = (i: number) => {
    const el = containerRef.current;
    if (!el) return;
    const scrollable = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: el.offsetTop + (i / (total - 1)) * scrollable, behavior: "smooth" });
  };

  return (
    <div className="bg-jlug-black text-jlug-white">

      {/* ── Sticky breadcrumb ─────────────────────────────────────────────── */}
      <div className="sticky top-14 z-40 border-b border-jlug-line bg-jlug-black/95 backdrop-blur-sm px-5 sm:px-8 md:px-12 py-2.5 sm:py-3 flex items-center justify-between font-mono text-[0.7rem] sm:text-xs text-jlug-gray-2 uppercase tracking-widest">
        <span>02 // HALL OF FAME</span>
        <span className="text-jlug-accent transition-all duration-300 font-bold">
          {PRESIDENTS[activeIndex].year}
        </span>
      </div>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="px-5 sm:px-8 md:px-16 lg:px-24 pt-12 sm:pt-20 pb-10 sm:pb-16 border-b border-jlug-line">
        <h1 className="text-[clamp(3rem,11vw,11rem)] font-bold uppercase tracking-tight leading-[0.88] animate-float-in-1">
          HALL<br />
          <span className="text-jlug-accent">OF FAME</span>
        </h1>
        <p className="mt-5 sm:mt-8 max-w-lg text-jlug-gray-1 text-base sm:text-lg leading-relaxed animate-float-in-2">
          Every president who has carried JLUG forward — from the first install-fest in 2019 to today.
        </p>
        <p className="mt-3 font-mono text-[0.7rem] sm:text-xs text-jlug-gray-3 uppercase tracking-widest animate-float-in-3">
          {total} TERMS · SCROLL TO NAVIGATE
        </p>
      </div>

      {/* ── Sticky scroll zone ────────────────────────────────────────────── */}
      <div
        ref={containerRef}
        style={{ height: `${total * SCROLL_PER_PRESIDENT * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-[calc(3.5rem+2.5rem)] h-[calc(100vh-6rem)] sm:h-[calc(100dvh-6rem)] overflow-hidden border-b border-jlug-line bg-black">

          {/* Accent progress bar */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-jlug-line z-30">
            <div
              className="h-full bg-jlug-accent"
              style={{ width: `${progressPct}%`, transition: "width 0.06s linear" }}
            />
          </div>

          {/* Right-edge dot nav */}
          <div className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 sm:gap-3 z-30">
            {PRESIDENTS.map((p, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Jump to ${p.name} (${p.year})`}
                onClick={() => scrollToIndex(i)}
                className="group relative flex items-center p-1"
              >
                {/* Tooltip */}
                <span className="hidden group-hover:flex absolute right-full mr-3 items-center gap-2 font-mono text-[0.6rem] whitespace-nowrap text-jlug-gray-1 uppercase tracking-widest bg-jlug-surface border border-jlug-line px-2 py-1">
                  <span className="text-jlug-accent">{String(i + 1).padStart(2, "0")}</span>
                  {p.year}
                </span>
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-2.5 h-2.5 sm:w-3 sm:h-3 bg-jlug-accent shadow-[0_0_8px_2px_rgba(183,243,74,0.5)]"
                      : i < activeIndex
                      ? "w-1.5 h-1.5 bg-jlug-gray-2"
                      : "w-1.5 h-1.5 bg-jlug-gray-3 group-hover:bg-jlug-gray-1"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Bottom status bar */}
          <div className="absolute bottom-3 sm:bottom-4 inset-x-0 px-4 sm:px-8 flex items-center justify-between z-30 pointer-events-none">
            <span className="font-mono text-[0.65rem] sm:text-xs text-jlug-gray-3 uppercase tracking-widest">
              {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            {/* Scroll cue fades out after first slide */}
            <span
              className="hidden sm:inline font-mono text-xs text-jlug-gray-3 uppercase tracking-widest transition-opacity duration-500"
              style={{ opacity: smoothIndex < 0.2 ? 1 : 0 }}
            >
              ↓ SCROLL
            </span>
            <span className="font-mono text-[0.65rem] sm:text-xs text-jlug-gray-3 uppercase tracking-widest truncate max-w-[140px] sm:max-w-none text-right">
              {PRESIDENTS[activeIndex].name}
            </span>
          </div>

          {/* ── Slide stack ── */}
          {PRESIDENTS.map((president, i) => {
            /*
             * We map the global smoothIndex to a per-slide "visibility" value.
             *
             * When smoothIndex === i, visibility = 1  (fully active, photo clear)
             * When smoothIndex === i±1, visibility = 0 (hidden)
             *
             * The transition window is ±0.45 around each integer index —
             * meaning only the outgoing + incoming slide are ever partially visible,
             * and the overlap band is narrow so they never both look "half there".
             *
             * We use a smooth easeInOut curve (smoothstep) on the 0→1 range
             * so the cross-fade is silky rather than linear.
             */
            const dist = smoothIndex - i;           // negative = upcoming, positive = past
            const absD = Math.abs(dist);
            const WINDOW = 0.45;

            // Raw linear 0…1 within window
            const rawV = clamp(1 - absD / WINDOW, 0, 1);

            // Smoothstep: 3t² - 2t³  (ease-in-out)
            const visibility = rawV * rawV * (3 - 2 * rawV);

            const isEntering = dist < 0; // smoothIndex < i means this slide is coming up

            if (visibility < 0.005) return null;

            // ── Content reveal clip: sweeps right → left behind the sphere ──
            // The sphere travels from x≈78% to x≈18%. The clip reveals
            // everything the sphere has already passed over.
            const revealEased = visibility < 0.5
              ? 2 * visibility * visibility
              : 1 - Math.pow(-2 * visibility + 2, 2) / 2;
            // On enter: clip hides content from the left edge inward.
            //           As the sphere moves left, clipLeft shrinks → content appears.
            // On exit:  clipLeft = 0 (fully visible), opacity handles fade-out.
            const contentClipLeft = isEntering
              ? Math.max(0, (1 - revealEased) * 108)
              : 0;

            return (
              <div
                key={i}
                className="absolute inset-0"
                aria-hidden={i !== activeIndex}
                style={{ pointerEvents: i === activeIndex ? "auto" : "none" }}
              >
                {/* Content wrapper — clipped by the sphere's sweep on desktop */}
                <div
                  className="absolute inset-0 flex flex-col-reverse lg:flex-row cwipe-content-mask"
                  style={{
                    clipPath: isEntering
                      ? `inset(-2% 0% -2% ${contentClipLeft}%)`
                      : undefined,
                  }}
                >
                  <TextPanel
                    president={president}
                    index={i}
                    total={total}
                    visibility={visibility}
                    entering={isEntering}
                  />
                  <PhotoPanel
                    president={president}
                    visibility={visibility}
                    entering={isEntering}
                  />
                </div>
                {/* Green sphere — always visible, sweeps right→left to reveal content */}
                {isEntering && (
                  <CircleWipeReveal progress={visibility} />
                )}
              </div>
            );
          })}

          {/* Noise grain — very light, only adds texture on the overall container */}
          <div
            className="absolute inset-0 pointer-events-none z-20 opacity-[0.025] mix-blend-screen"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "256px 256px",
            }}
          />
        </div>
      </div>

      {/* ── Infinite scroll marquee ────────────────────────────────────────── */}
      <ScrollMarquee
        items={PRESIDENTS.map((p) => ({ name: p.name, year: p.year }))}
      />

      {/* ── Full timeline list ────────────────────────────────────────────── */}
      <section className="border-t border-jlug-line px-5 sm:px-8 md:px-16 lg:px-24 py-14 sm:py-24">
        <div className="font-mono text-[0.7rem] sm:text-xs text-jlug-accent uppercase tracking-widest mb-8 sm:mb-12">
          FULL RECORD // ALL PRESIDENTS
        </div>
        <div className="relative pl-px border-l border-jlug-line">
          {PRESIDENTS.map((p, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                containerRef.current?.scrollIntoView({ behavior: "smooth" });
                setTimeout(() => scrollToIndex(i), 350);
              }}
              className="w-full text-left relative pl-5 sm:pl-8 py-5 sm:py-7 border-b border-jlug-line group hover:bg-jlug-surface-raised transition-colors"
            >
              <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-jlug-line bg-jlug-black group-hover:bg-jlug-accent group-hover:border-jlug-accent transition-colors" />
              <div className="flex flex-col md:flex-row md:items-center gap-1.5 md:gap-8">
                <span className="font-mono text-xs text-jlug-accent uppercase tracking-widest min-w-[5.5rem]">
                  {p.year}
                </span>
                <span className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:text-jlug-accent transition-colors">
                    {p.name}
                  </span>
                  {p.tag && (
                    <span className="border border-jlug-accent px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-widest text-jlug-accent">
                      {p.tag}
                    </span>
                  )}
                </span>
              </div>
              {p.note && (
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-jlug-gray-1 max-w-2xl leading-relaxed">
                  {p.note}
                </p>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ── Join CTA ──────────────────────────────────────────────────────── */}
      <section className="border-t border-jlug-line px-5 sm:px-8 md:px-24 py-12 sm:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
        <div>
          <p className="font-mono text-[0.7rem] sm:text-xs text-jlug-gray-2 uppercase tracking-widest mb-2">
            YOUR NAME COULD BE NEXT
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-tight leading-none">
            JOIN JLUG
          </h2>
        </div>
        <Link
          href="/join"
          className="w-full sm:w-auto text-center font-mono text-xs sm:text-sm bg-jlug-accent text-jlug-black font-bold px-8 py-3.5 sm:py-4 hover:bg-jlug-white transition-colors"
        >
          EXECUTE /JOIN →
        </Link>
      </section>
    </div>
  );
}
