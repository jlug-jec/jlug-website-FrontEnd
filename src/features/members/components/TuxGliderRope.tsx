"use client";

import { useEffect, useRef, useState } from "react";

interface TuxGliderRopeProps {
  isDucked?: boolean;
}

export default function TuxGliderRope({ isDucked = false }: TuxGliderRopeProps) {
  const gliderRef = useRef<HTMLDivElement>(null);
  const penguinRef = useRef<HTMLDivElement>(null);
  const ropePathRef = useRef<SVGPathElement>(null);
  const anchorTopRef = useRef<SVGCircleElement>(null);
  const anchorBottomRef = useRef<SVGCircleElement>(null);
  const ropeSparkRef = useRef<SVGCircleElement>(null);
  const pupilLeftRef = useRef<SVGCircleElement>(null);
  const pupilRightRef = useRef<SVGCircleElement>(null);

  const [isWaddling, setIsWaddling] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let currentTilt = 0;
    let pullBounceY = 0;
    let pullVelocity = 0;
    let animFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      document.documentElement.style.setProperty("--bg-mouse-x", `${mouseX}px`);
      document.documentElement.style.setProperty("--bg-mouse-y", `${mouseY}px`);

      if (!penguinRef.current || !pupilLeftRef.current || !pupilRightRef.current) return;

      const rect = penguinRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = mouseX - centerX;
      const dy = mouseY - centerY;
      const dist = Math.hypot(dx, dy);

      if (dist < 1) return;

      const maxOffset = 2.2;
      const offsetX = (dx / dist) * Math.min(maxOffset, dist * 0.05);
      const offsetY = (dy / dist) * Math.min(maxOffset, dist * 0.05);

      pupilLeftRef.current.setAttribute("cx", (43.5 + offsetX).toFixed(2));
      pupilLeftRef.current.setAttribute("cy", (35 + offsetY).toFixed(2));
      pupilRightRef.current.setAttribute("cx", (56.5 + offsetX).toFixed(2));
      pupilRightRef.current.setAttribute("cy", (35 + offsetY).toFixed(2));
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const updateGliderAndRope = () => {
      const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const rightOffset = vw < 600 ? 28 : 72;
      const anchorX = vw - rightOffset;
      const topY = 20;
      const bottomY = vh - 20;

      if (anchorTopRef.current) {
        anchorTopRef.current.setAttribute("cx", String(anchorX));
        anchorTopRef.current.setAttribute("cy", String(topY));
      }
      if (anchorBottomRef.current) {
        anchorBottomRef.current.setAttribute("cx", String(anchorX));
        anchorBottomRef.current.setAttribute("cy", String(bottomY));
      }

      const scrollY = window.scrollY;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - vh);
      const scrollPercent = Math.min(1, Math.max(0, scrollY / maxScroll));

      const minY = 60;
      const maxY = vh - 150;

      if (Math.abs(pullVelocity) > 0.1 || Math.abs(pullBounceY) > 0.1) {
        const k = 0.18;
        const damping = 0.82;
        const force = -k * pullBounceY;
        pullVelocity = (pullVelocity + force) * damping;
        pullBounceY += pullVelocity;
      } else {
        pullBounceY = 0;
        pullVelocity = 0;
      }

      const baseTargetY = minY + scrollPercent * (maxY - minY);
      const targetY = baseTargetY + pullBounceY;

      const deltaY = scrollY - lastScrollY;
      lastScrollY = scrollY;

      const targetTilt = Math.max(-18, Math.min(18, deltaY * 1.1));
      currentTilt += (targetTilt - currentTilt) * 0.22;

      if (gliderRef.current) {
        gliderRef.current.style.left = `${(anchorX - 48).toFixed(1)}px`;
        if (!isReduced) {
          gliderRef.current.style.transform = `translate3d(0, ${targetY.toFixed(1)}px, 0) rotate(${currentTilt.toFixed(1)}deg)`;
        } else {
          gliderRef.current.style.transform = `translate3d(0, ${targetY.toFixed(1)}px, 0)`;
        }
      }

      const tuxPulleyY = targetY + 9.6;
      const swayX = anchorX + currentTilt * 1.5;

      if (ropePathRef.current) {
        const pathD = `M ${anchorX} ${topY} Q ${swayX.toFixed(1)} ${tuxPulleyY.toFixed(1)} ${anchorX} ${bottomY}`;
        ropePathRef.current.setAttribute("d", pathD);
      }

      if (ropeSparkRef.current) {
        ropeSparkRef.current.setAttribute("cx", anchorX.toFixed(1));
        ropeSparkRef.current.setAttribute("cy", tuxPulleyY.toFixed(1));
        const speed = Math.abs(deltaY);
        ropeSparkRef.current.style.opacity = speed > 2 ? Math.min(1, speed * 0.18).toFixed(2) : "0";
      }

      animFrameId = requestAnimationFrame(updateGliderAndRope);
    };

    animFrameId = requestAnimationFrame(updateGliderAndRope);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  const handlePenguinClick = () => {
    setIsWaddling(true);
    setTimeout(() => setIsWaddling(false), 650);
  };

  return (
    <>
      {/* Dynamic Rope Canvas */}
      <svg
        id="rope-canvas"
        className={`rope-canvas ${isDucked ? "is-ducked" : ""}`}
        aria-hidden="true"
      >
        <path ref={ropePathRef} className="rope-path" d="" />
        <circle ref={anchorTopRef} className="rope-anchor-node" r="7" />
        <circle ref={anchorBottomRef} className="rope-anchor-node" r="7" />
        <circle ref={ropeSparkRef} className="rope-spark" r="5" />
      </svg>

      {/* Floating Tux Zip-Liner Mascot */}
      <div
        ref={gliderRef}
        className={`penguin-glider ${isDucked ? "is-ducked" : ""}`}
        aria-hidden="true"
        role="presentation"
        title="Click Tux to waddle!"
      >
        <div
          ref={penguinRef}
          onClick={handlePenguinClick}
          className={`penguin-wrapper ${isWaddling ? "is-waddling" : ""} ${
            isDucked ? "is-ducked" : ""
          }`}
        >
          <svg
            className="penguin-svg"
            viewBox="0 0 100 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Pulley Wheel */}
            <circle cx="50" cy="10" r="8" fill="var(--navy)" stroke="var(--frost)" strokeWidth="2.5" />
            <circle cx="50" cy="10" r="3" fill="var(--mist)" />
            <path
              d="M 45 10 L 45 20 L 55 20 L 55 10"
              stroke="var(--slate)"
              strokeWidth="2.5"
              fill="none"
              strokeLinejoin="round"
            />
            <rect x="38" y="19" width="20" height="5" rx="2.5" fill="var(--steel)" stroke="var(--frost)" strokeWidth="1.5" />

            {/* Left Flipper holding handle */}
            <path
              className="flipper-left"
              d="M 28 52 C 22 38, 34 20, 46 20 C 50 22, 38 38, 32 56 Z"
              fill="var(--navy)"
              stroke="var(--slate)"
              strokeWidth="2.5"
            />
            <ellipse cx="46" cy="21.5" rx="4.5" ry="3.5" fill="var(--mist)" stroke="var(--slate)" strokeWidth="1.5" />

            {/* Right Flipper */}
            <path
              className="flipper-right"
              d="M 76 54 C 88 52, 96 64, 89 74 C 83 78, 78 68, 74 60 Z"
              fill="var(--navy)"
              stroke="var(--slate)"
              strokeWidth="2.5"
            />

            {/* Feet */}
            <ellipse cx="36" cy="98" rx="14" ry="6" fill="var(--mist)" stroke="var(--slate)" strokeWidth="1.5" />
            <ellipse cx="64" cy="98" rx="14" ry="6" fill="var(--mist)" stroke="var(--slate)" strokeWidth="1.5" />

            {/* Body */}
            <path
              d="M 50 24 C 28 24, 20 40, 20 70 C 20 90, 30 98, 50 98 C 70 98, 80 90, 80 70 C 80 40, 72 24, 50 24 Z"
              fill="var(--navy)"
              stroke="var(--frost)"
              strokeWidth="3"
            />
            {/* Belly */}
            <path
              d="M 50 42 C 36 42, 30 56, 30 76 C 30 92, 38 96, 50 96 C 62 96, 70 92, 70 76 C 70 56, 64 42, 50 42 Z"
              fill="var(--frost)"
            />
            {/* Scarf */}
            <path d="M 32 48 Q 50 54 68 48 L 66 55 Q 50 60 34 55 Z" fill="var(--steel)" stroke="var(--slate)" strokeWidth="1.5" />
            <path d="M 56 53 L 64 68 L 56 68 L 50 53 Z" fill="var(--steel)" stroke="var(--slate)" strokeWidth="1.5" />

            {/* Eyes & Pupils */}
            <circle cx="42" cy="35" r="5.5" fill="var(--frost)" />
            <circle ref={pupilLeftRef} cx="43.5" cy="35" r="2.5" fill="var(--void)" />
            <circle cx="58" cy="35" r="5.5" fill="var(--frost)" />
            <circle ref={pupilRightRef} cx="56.5" cy="35" r="2.5" fill="var(--void)" />

            {/* Beak */}
            <path d="M 43 41 Q 50 50 57 41 Q 50 43 43 41 Z" fill="var(--mist)" stroke="var(--slate)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </>
  );
}
