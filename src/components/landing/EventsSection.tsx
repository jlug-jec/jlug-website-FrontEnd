import Link from "next/link";

import EventCard from "@/components/events/EventCard";
import { EVENTS } from "@/data/events";

export default function EventsSection() {
  return (
    <section className="relative overflow-hidden border-b border-jlug-line py-32">
      <div className="mb-16 flex flex-col justify-between px-6 md:flex-row md:items-end md:px-24">
        <div>
          <div className="mb-4 font-mono text-xs uppercase tracking-widest text-jlug-accent">
            04 // ARCHIVE
          </div>
          <h2 className="break-words text-4xl font-semibold tracking-tight min-[400px]:text-5xl md:text-7xl lg:text-8xl">
            EVENT LOG
          </h2>
        </div>
        <Link
          href="/events"
          className="mt-8 border border-jlug-line px-4 py-2 font-mono text-xs uppercase text-jlug-gray-1 transition-colors hover:bg-jlug-white hover:text-jlug-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jlug-accent md:mt-0"
        >
          VIEW ALL EVENTS {"-->"}
        </Link>
      </div>

      <div className="px-6 md:px-24">
        <EventCard event={EVENTS[0]} />
      </div>
    </section>
  );
}
