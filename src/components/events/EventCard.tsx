"use client";

import type { EventRecord } from "@/data/events";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type EventCardProps = {
  event: EventRecord;
  year?: string;
};

export default function EventCard({ event, year = "2026" }: EventCardProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const galleryPreviewImages = event.images.slice(1, 5);
  const additionalImageCount = Math.max(event.images.length - 5, 0);
  const stats = [
    ["PARTICIPANTS", event.participants],
    ["TEAMS", event.teams],
  ].filter(([, value]) => value);
  const firstImage = event.images[0];

  useEffect(() => {
    if (!galleryOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (keyEvent: KeyboardEvent) => {
      if (keyEvent.key === "Escape") setGalleryOpen(false);
      if (keyEvent.key === "ArrowLeft") {
        setActiveImageIndex((index) =>
          index === 0 ? event.images.length - 1 : index - 1,
        );
      }
      if (keyEvent.key === "ArrowRight") {
        setActiveImageIndex((index) =>
          index === event.images.length - 1 ? 0 : index + 1,
        );
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [event.images.length, galleryOpen]);

  return (
    <>
      <article className="group relative border border-jlug-line bg-jlug-ink transition-colors duration-300 hover:border-jlug-accent focus-within:border-jlug-accent">
        <div className="pointer-events-none absolute -top-12 -right-4 z-0 w-full overflow-hidden truncate text-right text-[15vw] font-bold text-jlug-surface-raised opacity-20">
          {year}
        </div>

        <div className="relative z-10 flex flex-col gap-12 p-6 md:p-12 lg:flex-row">
          <div className="flex-1">
            <div className="mb-8 flex flex-wrap gap-2 font-mono text-xs text-jlug-gray-1">
              <span className="border border-jlug-line px-2 py-1">
                TAG: {event.tag}
              </span>
              {event.date && event.date.toLowerCase() !== "tba" && event.date.toLowerCase() !== "tbd" && (
                <span className="border border-jlug-line px-2 py-1">
                  DATE: {event.date}
                </span>
              )}
            </div>
            <h2 className="mb-6 break-words text-[clamp(2.25rem,12vw,3.384375rem)] font-bold uppercase leading-[0.85] tracking-tighter md:text-7xl lg:text-8xl">
              {event.name.split(" ").map((word, index, words) => (
                <span
                  className="inline md:block"
                  key={`${event.id}-${word}-${index}`}
                >
                  {word}
                  {index < words.length - 1 ? " " : ""}
                </span>
              ))}
            </h2>
            <p className="mb-8 max-w-md text-xl text-jlug-gray-1">
              {event.description}
            </p>
            <table className="w-full max-w-xs font-mono text-sm text-jlug-gray-2">
              <tbody>
                {stats.map(([label, value]) => (
                  <tr className="border-b border-jlug-line/50" key={label}>
                    <td className="py-2">{label}</td>
                    <td className="text-right text-jlug-white">{value}</td>
                  </tr>
                ))}
                <tr>
                  <td className="py-2">STATUS</td>
                  <td className="text-right text-jlug-accent">{event.status}</td>
                </tr>
              </tbody>
            </table>
            {event.siteUrl && (
              <a
                href={event.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block border border-jlug-line px-4 py-2 font-mono text-xs uppercase tracking-widest text-jlug-gray-1 transition-colors hover:bg-jlug-white hover:text-jlug-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jlug-accent"
              >
                VISIT_SITE.SH {"-->"}
              </a>
            )}
          </div>

          <div className="relative w-full lg:w-1/2">
            <button
              type="button"
              onClick={() => {
                if (firstImage) {
                  setActiveImageIndex(0);
                  setGalleryOpen(true);
                }
              }}
              disabled={!firstImage}
              aria-label={
                firstImage
                  ? `Open ${event.name} image gallery`
                  : `${event.name} has no images yet`
              }
              className="relative block aspect-video w-full border border-jlug-line bg-jlug-black p-2 text-left transition-colors hover:border-jlug-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jlug-accent disabled:cursor-default"
            >
              {firstImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={firstImage}
                  alt={`${event.name} event`}
                  className="h-full w-full object-contain"
                />
              ) : (
                <span className="flex h-full w-full items-center justify-center bg-jlug-surface font-mono text-xs text-jlug-gray-2">
                  [ IMAGE_PENDING ]
                </span>
              )}
            </button>
            {galleryPreviewImages.length > 0 && (
              <div className="mt-3 grid grid-cols-4 gap-2">
                {galleryPreviewImages.map((image, index) => {
                  const isOverflowPreview =
                    index === galleryPreviewImages.length - 1 &&
                    additionalImageCount > 0;

                  return (
                    <button
                      type="button"
                      key={`${event.id}-preview-${image}`}
                      onClick={() => {
                        setActiveImageIndex(index + 1);
                        setGalleryOpen(true);
                      }}
                      aria-label={`Open ${event.name} image ${index + 2}`}
                      className="relative aspect-video overflow-hidden border border-jlug-line bg-jlug-black p-1 text-left transition-colors hover:border-jlug-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jlug-accent"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image}
                        alt=""
                        className="h-full w-full object-contain"
                      />
                      {isOverflowPreview && (
                        <span className="absolute inset-0 flex items-center justify-center bg-jlug-black/75 font-mono text-xs font-bold tracking-widest text-jlug-white">
                          +{additionalImageCount}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </article>

      {galleryOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-jlug-black/95 p-4 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={`${event.name} image gallery`}
            onClick={() => setGalleryOpen(false)}
          >
            <div
              className="flex h-[calc(100vh-2rem)] w-full max-w-6xl flex-col overflow-hidden md:h-[calc(100vh-4rem)]"
              onClick={(clickEvent) => clickEvent.stopPropagation()}
            >
              <div className="flex shrink-0 items-center justify-between border-b border-jlug-line bg-jlug-black/80 px-4 py-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-jlug-accent">
                    {event.images.length}{" "}
                    {event.images.length === 1 ? "IMAGE" : "IMAGES"}
                  </p>
                  <h3 className="mt-2 break-words text-2xl font-bold uppercase min-[400px]:text-3xl md:text-5xl">
                    {event.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setGalleryOpen(false)}
                  className="border border-jlug-line px-4 py-2 font-mono text-xs uppercase text-jlug-gray-1 hover:bg-jlug-white hover:text-jlug-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jlug-accent"
                >
                  CLOSE [X]
                </button>
              </div>
              <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden border border-jlug-line bg-jlug-surface p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={event.images[activeImageIndex]}
                  alt={`${event.name} image ${activeImageIndex + 1}`}
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  className="object-contain"
                />
                {event.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImageIndex((index) =>
                          index === 0 ? event.images.length - 1 : index - 1,
                        )
                      }
                      aria-label="Previous image"
                      className="absolute left-3 top-1/2 -translate-y-1/2 border border-jlug-line bg-jlug-black/80 px-4 py-3 font-mono text-xl text-jlug-white transition-colors hover:border-jlug-accent hover:text-jlug-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jlug-accent"
                    >
                      &lt;
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImageIndex((index) =>
                          index === event.images.length - 1 ? 0 : index + 1,
                        )
                      }
                      aria-label="Next image"
                      className="absolute right-3 top-1/2 -translate-y-1/2 border border-jlug-line bg-jlug-black/80 px-4 py-3 font-mono text-xl text-jlug-white transition-colors hover:border-jlug-accent hover:text-jlug-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jlug-accent"
                    >
                      &gt;
                    </button>
                    <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-jlug-black/80 px-3 py-1 font-mono text-xs text-jlug-white">
                      {activeImageIndex + 1} / {event.images.length}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
