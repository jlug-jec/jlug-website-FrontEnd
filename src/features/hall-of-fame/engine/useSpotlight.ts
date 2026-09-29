"use client";

import { useState, useCallback, useEffect, useRef } from "react";

export interface SpotlightState {
  x: number;
  y: number;
  isHovered: boolean;
  prefersReducedMotion: boolean;
}

export function useSpotlight() {
  const [state, setState] = useState<SpotlightState>({
    x: 0,
    y: 0,
    isHovered: false,
    prefersReducedMotion: false,
  });

  const elementRef = useRef<HTMLDivElement | null>(null);

  // Check prefers-reduced-motion accessibility preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setState((prev) => ({ ...prev, prefersReducedMotion: mediaQuery.matches }));

    const handler = (event: MediaQueryListEvent) => {
      setState((prev) => ({ ...prev, prefersReducedMotion: event.matches }));
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!elementRef.current) return;
    const rect = elementRef.current.getBoundingClientRect();
    setState((prev) => ({
      ...prev,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovered: true,
    }));
  }, []);

  const handleMouseEnter = useCallback(() => {
    setState((prev) => ({ ...prev, isHovered: true }));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setState((prev) => ({ ...prev, isHovered: false }));
  }, []);

  return {
    ref: elementRef,
    ...state,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  };
}
