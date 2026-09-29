"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { NAV_ITEMS, isActivePath } from "@/lib/navigation";

const JOIN_HREF = "/join";
const SECTION_LINKS = NAV_ITEMS.filter((item) => item.href !== JOIN_HREF);
const JOIN_ITEM = NAV_ITEMS.find((item) => item.href === JOIN_HREF);

export default function SiteNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Escape closes the mobile panel.
  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-jlug-line bg-jlug-black/90 backdrop-blur-md">
      <div className="mx-auto w-full max-w-[1440px] border-jlug-line md:border-l md:border-r">
        <nav
          aria-label="Main"
          className="flex items-stretch justify-between font-mono text-[0.7rem] uppercase tracking-widest"
        >
          {/* Wordmark */}
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className="flex items-center gap-3 border-jlug-line px-6 py-4 text-jlug-white transition-colors hover:bg-jlug-white hover:text-jlug-black focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-jlug-accent md:border-r md:px-8"
          >
            <span className="text-base font-bold tracking-tight">JLUG</span>
            <span className="hidden text-jlug-gray-2 lg:inline">/ROOT</span>
          </Link>

          {/* Desktop section links */}
          <ul className="hidden flex-1 items-stretch md:flex">
            {SECTION_LINKS.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href} className="flex">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-2 border-r border-jlug-line px-5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-jlug-accent lg:px-7 ${
                      active
                        ? "bg-jlug-surface-raised text-jlug-white"
                        : "text-jlug-gray-1 hover:bg-jlug-white hover:text-jlug-black"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={active ? "text-jlug-accent" : "text-jlug-gray-3"}
                    >
                      {item.index}
                    </span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}

            {/* Join CTA sits directly after MEMBERS rather than being pushed
                out to the far right edge */}
            {JOIN_ITEM ? (
              <li className="flex">
                <Link
                  href={JOIN_ITEM.href}
                  aria-current={
                    isActivePath(pathname, JOIN_ITEM.href) ? "page" : undefined
                  }
                  className={`flex items-center border-r border-jlug-line px-6 font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-jlug-black lg:px-8 ${
                    isActivePath(pathname, JOIN_ITEM.href)
                      ? "bg-jlug-white text-jlug-black"
                      : "bg-jlug-accent text-jlug-black hover:bg-jlug-white"
                  }`}
                >
                  EXEC /JOIN
                </Link>
              </li>
            ) : null}
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="site-nav-mobile"
            className="flex items-center gap-3 px-6 py-4 text-jlug-white transition-colors hover:bg-jlug-white hover:text-jlug-black focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-jlug-accent md:hidden"
          >
            <span>{menuOpen ? "CLOSE" : "MENU"}</span>
            <span aria-hidden="true" className="flex w-4 flex-col gap-1">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
            </span>
          </button>
        </nav>

        {/* Mobile panel */}
        <div
          id="site-nav-mobile"
          hidden={!menuOpen}
          className="border-t border-jlug-line md:hidden"
        >
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-baseline justify-between border-b border-jlug-line px-6 py-5 font-mono text-xs uppercase tracking-widest transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-jlug-accent ${
                      active
                        ? "bg-jlug-surface-raised text-jlug-white"
                        : "text-jlug-gray-1"
                    }`}
                  >
                    <span className="flex items-baseline gap-3">
                      <span
                        aria-hidden="true"
                        className={
                          active ? "text-jlug-accent" : "text-jlug-gray-3"
                        }
                      >
                        {item.index}
                      </span>
                      <span>{item.label}</span>
                    </span>
                    <span className="text-jlug-gray-3">{item.meta}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
