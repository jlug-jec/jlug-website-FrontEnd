"use client";

import { useEffect, useState } from "react";
import { PointerTarget } from "../engine/types";

interface MascotHUDOverlayProps {
  pointer: PointerTarget;
  isInteracting: boolean;
  onPetClick: () => void;
}

export default function MascotHUDOverlay({
  pointer,
  isInteracting,
  onPetClick,
}: MascotHUDOverlayProps) {
  const [fps, setFps] = useState(60);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const calcFps = (now: number) => {
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(calcFps);
    };

    animId = requestAnimationFrame(calcFps);
    return () => cancelAnimationFrame(animId);
  }, []);

  const normX = pointer.active ? pointer.normalizedX.toFixed(3) : "0.000";
  const normY = pointer.active ? pointer.normalizedY.toFixed(3) : "0.000";
  const tiltDeg = pointer.active ? (pointer.normalizedX * 18).toFixed(1) : "0.0";

  return (
    <div className="absolute inset-0 pointer-events-none select-none p-3 sm:p-4 md:p-6 flex flex-col justify-between z-10 font-mono text-[0.6rem] sm:text-[0.65rem] md:text-[0.7rem] text-jlug-gray-2 uppercase tracking-wider sm:tracking-widest">
      {/* Top Bar HUD */}
      <div className="flex justify-between items-start gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-jlug-accent animate-pulse" />
            <span className="text-jlug-white font-medium">MASCOT // PINGU_TIWARI</span>
          </div>
          <span className="text-[0.6rem] text-jlug-gray-1">VER 2.6 // PBR SHADER ENGINE</span>
        </div>

        <div className="hidden text-right shrink-0 whitespace-nowrap sm:flex flex-col gap-0.5">
          <div className="text-jlug-gray-1">
            PTR: [ <span className="text-jlug-accent">{normX}</span> ,{" "}
            <span className="text-jlug-accent">{normY}</span> ]
          </div>
          <div className="text-[0.6rem]">
            TILT: {tiltDeg}° | FPS: {fps}
          </div>
        </div>
      </div>

      {/* Decorative Grid Corner Accents */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-jlug-line/80" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-jlug-line/80" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-jlug-line/80" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-jlug-line/80" />

      {/* Bottom Control Strip */}
      <div className="flex justify-between items-end">
        <button
          onClick={onPetClick}
          className="pointer-events-auto group px-3 py-1.5 bg-jlug-surface/80 border border-jlug-line hover:border-jlug-accent hover:text-jlug-white transition-all backdrop-blur-sm cursor-pointer flex items-center gap-2"
          aria-label="Interact with Pingu Tiwari"
        >
          <span className="text-jlug-accent group-hover:scale-125 transition-transform">▸</span>
          <span>{isInteracting ? "BOUNCING..." : "PET PINGU"}</span>
        </button>

        <div className="text-[0.6rem] text-jlug-gray-1 hidden sm:block">
          [ REAL-TIME PERSPECTIVE ]
        </div>
      </div>
    </div>
  );
}
