"use client";

import type { EventRecord } from "@/data/events";
import EventCard from "./EventCard";
import ScrollReveal from "./ScrollReveal";

/* ─── Stagger configuration ────────────────────────────────────────── */
const STAGGER_CONFIG = {
  /** Base delay for the first card (ms) */
  initialDelay: 80,
  /** Incremental delay between consecutive cards (ms) */
  staggerStep: 80,
} as const;

type AnimatedEventListProps = {
  events: EventRecord[];
};

/**
 * Renders the event list with scroll-triggered entrance animations.
 *
 * Odd-indexed cards slide in from the left, even-indexed cards from
 * the right, creating an alternating cascade effect as the user
 * scrolls down the page.
 */
export default function AnimatedEventList({ events }: AnimatedEventListProps) {
  return (
    <>
      {events.map((event, index) => {
        const direction = index % 2 === 0 ? "left" : "right";
        const delay =
          STAGGER_CONFIG.initialDelay + index * STAGGER_CONFIG.staggerStep;

        return (
          <ScrollReveal
            key={event.id}
            direction={direction}
            delay={delay}
          >
            <EventCard event={event} />
          </ScrollReveal>
        );
      })}
    </>
  );
}
