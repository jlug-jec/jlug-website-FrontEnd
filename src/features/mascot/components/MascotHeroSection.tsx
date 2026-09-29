"use client";

import Link from "next/link";
import MascotCanvas from "./MascotCanvas";

export default function MascotHeroSection() {
  return (
    <section className="relative border-b border-jlug-line bg-jlug-ink/60 backdrop-blur-sm overflow-hidden">
      {/* Top Section Header Bar */}
      <div className="sticky top-14 bg-jlug-black border-b border-jlug-line z-20 px-6 md:px-12 py-3 flex justify-between items-center font-mono text-xs text-jlug-gray-1 uppercase tracking-widest">
        <div className="flex items-center gap-3">
          <span className="text-jlug-accent">01.5 // MASCOT</span>
          <span className="hidden sm:inline text-jlug-gray-2">|</span>
          <span className="hidden sm:inline">PINGU TIWARI // REAL-TIME 3D</span>
        </div>
        <div className="flex items-center gap-2 text-[0.65rem]">
          <span className="w-2 h-2 rounded-full bg-jlug-accent animate-ping" />
          <span className="text-jlug-white">LIVE_STAGE</span>
        </div>
      </div>

      {/* Main Split Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px] lg:min-h-[540px] items-stretch">
        
        {/* Left Side: Typography, Manifesto Snippet & Actions (5 cols on lg) */}
        <div className="lg:col-span-5 p-8 md:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-jlug-line relative z-10">
          <div>
            <div className="font-mono text-xs text-jlug-accent mb-6 uppercase tracking-widest inline-flex items-center gap-2 border border-jlug-line px-2.5 py-1 bg-jlug-surface">
              <span>✦</span>
              <span>DIGITAL COMPANION</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight uppercase leading-[0.95] text-jlug-white mb-6">
              WHERE<br />
              <span className="text-jlug-gray-1">CULTURE</span><br />
              MEETS CODE.
            </h2>

            <p className="text-base sm:text-lg text-jlug-gray-1 leading-relaxed max-w-lg mb-8">
              A creative community for engineering, open-source development, systems, and design.
              Interact with our mascot <strong className="text-jlug-white font-semibold">Pingu Tiwari</strong>,
              who keeps watch over our codebase.
            </p>

            {/* Quick Mascot Tech Specs Table */}
            <div className="border border-jlug-line bg-jlug-black/70 p-4 font-mono text-xs text-jlug-gray-2 space-y-2 mb-8">
              <div className="flex justify-between border-b border-jlug-line/50 pb-1.5">
                <span>IDENTITY</span>
                <span className="text-jlug-white">PINGU TIWARI</span>
              </div>
              <div className="flex justify-between border-b border-jlug-line/50 pb-1.5">
                <span>ROLE</span>
                <span className="text-jlug-accent">CHIEF MORALE OFFICER</span>
              </div>
              <div className="flex justify-between border-b border-jlug-line/50 pb-1.5">
                <span>INTERACTION</span>
                <span className="text-jlug-white">MOUSE TRACKING / PET</span>
              </div>
              <div className="flex justify-between">
                <span>ORIGIN</span>
                <span className="text-jlug-gray-1">JABALPUR / EST. 2019</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/join"
              className="inline-flex items-center gap-2 bg-jlug-accent text-jlug-black font-mono font-bold text-sm px-6 py-3.5 hover:bg-jlug-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jlug-accent"
            >
              <span>JOIN THE CLUB</span>
              <span>→</span>
            </Link>

            <Link
              href="/members"
              className="inline-flex items-center gap-2 border border-jlug-line bg-jlug-surface hover:bg-jlug-white hover:text-jlug-black text-jlug-white font-mono text-sm px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jlug-accent"
            >
              <span>VIEW MEMBERS</span>
            </Link>
          </div>
        </div>

        {/* Right Side: 3D Interactive Mascot Viewport (7 cols on lg) */}
        <div className="lg:col-span-7 relative flex items-center justify-center bg-radial-gradient from-jlug-surface-raised/40 to-jlug-black">
          {/* Subtle Background Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(183,243,74,0.04)_0%,transparent_70%)] pointer-events-none" />

          {/* 3D Canvas Element */}
          <div className="w-full h-full relative">
            <MascotCanvas />
          </div>
        </div>

      </div>

      {/* Bottom Sub-strip */}
      <div className="flex justify-between items-center px-6 md:px-12 py-3 border-t border-jlug-line/50 font-mono text-[0.65rem] text-jlug-gray-2 uppercase tracking-widest">
        <span>INTERACTION: MOVE CURSOR TO LOOK / CLICK TO PET</span>
        <span className="hidden sm:inline text-jlug-gray-1">RENDERING: THREE.JS 3D ENGINE</span>
      </div>
    </section>
  );
}
