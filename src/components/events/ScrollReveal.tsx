"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/* ─── Animation configuration ──────────────────────────────────────── */
const ANIMATION_CONFIG = {
  /** How far offscreen the element starts (px) */
  translateDistance: 40,
  /** Base animation duration (ms) */
  duration: 500,
  /** IntersectionObserver rootMargin — triggers slightly before element is visible */
  rootMargin: "0px 0px -40px 0px",
  /** Fraction of element visible before triggering */
  threshold: 0.05,
  /** Custom easing — gentle deceleration, no overshoot */
  easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
} as const;

type RevealDirection = "left" | "right" | "up";

type ScrollRevealProps = {
  children: ReactNode;
  /** Direction the element slides in from */
  direction?: RevealDirection;
  /** Delay in ms before animation starts (for staggering) */
  delay?: number;
  /** Additional CSS class names */
  className?: string;
};

/**
 * Wraps children in a scroll-triggered entrance animation.
 *
 * The element starts invisible and translated offscreen in the given
 * direction, then slides + fades into its natural position once the
 * IntersectionObserver fires.
 */
export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        rootMargin: ANIMATION_CONFIG.rootMargin,
        threshold: ANIMATION_CONFIG.threshold,
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const translateFrom = {
    left: `translateX(-${ANIMATION_CONFIG.translateDistance}px)`,
    right: `translateX(${ANIMATION_CONFIG.translateDistance}px)`,
    up: `translateY(${ANIMATION_CONFIG.translateDistance}px)`,
  }[direction];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : translateFrom,
        filter: isVisible ? "blur(0px)" : "blur(6px)",
        transition: [
          `opacity ${ANIMATION_CONFIG.duration}ms ${ANIMATION_CONFIG.easing} ${delay}ms`,
          `transform ${ANIMATION_CONFIG.duration}ms ${ANIMATION_CONFIG.easing} ${delay}ms`,
          `filter ${ANIMATION_CONFIG.duration}ms ${ANIMATION_CONFIG.easing} ${delay}ms`,
        ].join(", "),
        willChange: isVisible ? "auto" : "opacity, transform, filter",
      }}
    >
      {children}
    </div>
  );
}
