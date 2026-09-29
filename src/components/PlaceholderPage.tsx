import Link from "next/link";

import type { NavItem } from "@/lib/navigation";

/**
 * Shared shell for routes that are scaffolded but not built yet.
 *
 * Renders the section header plus the hand-off notes from NAV_ITEMS, so the
 * next developer can see what the page is meant to contain and delete this
 * component when they start filling it in.
 */
export default function PlaceholderPage({ item }: { item: NavItem }) {
  return (
    <div className="relative z-10 mx-auto flex min-h-[calc(100vh-3.5rem)] w-full max-w-[1440px] flex-col border-jlug-line bg-jlug-black/80 backdrop-blur-sm md:border-l md:border-r">
      {/* Breadcrumb strip */}
      <div className="flex items-center justify-between border-b border-jlug-line px-6 py-4 font-mono text-[0.65rem] uppercase tracking-widest text-jlug-gray-2 md:px-12">
        <span>
          <Link
            href="/"
            className="transition-colors hover:text-jlug-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jlug-accent"
          >
            /ROOT
          </Link>
          <span aria-hidden="true"> {item.href.toUpperCase()}</span>
        </span>
        <span className="text-jlug-gray-3">{item.meta}</span>
      </div>

      {/* Header */}
      <header className="border-b border-jlug-line px-6 py-20 md:px-24 md:py-32">
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-jlug-accent">
          {item.index} {"//"} {item.label}
        </p>
        <h1 className="break-words text-4xl font-semibold uppercase tracking-tight min-[400px]:text-5xl md:text-7xl lg:text-8xl">
          {item.title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-jlug-gray-1 md:text-xl">
          {item.blurb}
        </p>
      </header>

      {/* Hand-off notes */}
      <section className="flex-1 px-6 py-20 md:px-24">
        <div className="max-w-2xl border border-jlug-line bg-jlug-ink p-8 md:p-12">
          <div className="mb-8 flex items-baseline justify-between border-b border-jlug-line pb-4 font-mono text-xs uppercase tracking-widest">
            <span className="text-jlug-white">STATUS</span>
            <span className="text-jlug-accent">AWAITING BUILD</span>
          </div>

          <p className="font-mono text-sm leading-relaxed text-jlug-gray-1">
            This route is scaffolded and wired into the navbar. The content is
            intentionally empty — it is somebody else&apos;s ticket.
          </p>

          <p className="mt-10 mb-4 font-mono text-[0.65rem] uppercase tracking-widest text-jlug-gray-2">
            TODO
          </p>
          <ul className="flex flex-col gap-3">
            {item.todo.map((task) => (
              <li
                key={task}
                className="flex gap-3 font-mono text-sm text-jlug-white-soft"
              >
                <span aria-hidden="true" className="text-jlug-gray-3">
                  [ ]
                </span>
                <span>{task}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 border-t border-jlug-line pt-6 font-mono text-[0.65rem] uppercase tracking-widest text-jlug-gray-2">
            FILE: SRC/APP{item.href.toUpperCase()}/PAGE.TSX
          </div>
        </div>
      </section>
    </div>
  );
}
