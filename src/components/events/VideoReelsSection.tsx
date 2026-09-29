import { AFTER_MOVIES } from "@/data/afterMovies";

/**
 * Gallery of after-movies and reels from past JLUG events, laid out
 * on a dense grid. Portrait reels take a single narrow column; the
 * landscape after-movie spans two columns so it reads at its native
 * aspect ratio instead of being cropped or shrunk to match its
 * portrait neighbours. Curated order (see afterMovies.ts) is
 * preserved left-to-right, top-to-bottom.
 */
export default function VideoReelsSection() {
  return (
    <section className="border-b border-jlug-line px-6 py-20 md:px-24">
      <div className="mb-12 max-w-2xl">
        <div className="mb-4 font-mono text-xs uppercase tracking-widest text-jlug-accent">
          AFTER_MOVIES // REELS
        </div>
        <h2 className="break-words text-3xl font-semibold uppercase tracking-tight min-[400px]:text-4xl md:text-6xl">
          Relive the highlights
        </h2>
        <p className="mt-4 text-lg text-jlug-gray-1">
          After-movies and reels from JLUG&apos;s past events, hackathons, and
          induction drives.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {AFTER_MOVIES.map((movie) => (
          <div
            key={movie.id}
            className={`flex flex-col border border-jlug-line bg-jlug-ink p-2 ${
              movie.orientation === "landscape"
                ? "w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(50%-0.75rem)]"
                : "w-[calc(50%-0.5rem)] sm:w-[calc(25%-0.75rem)] md:w-[calc(25%-1.125rem)]"
            }`}
          >
            <video
              className={
                movie.orientation === "portrait"
                  ? "aspect-[9/16] w-full bg-jlug-black object-contain"
                  : "aspect-video w-full bg-jlug-black object-contain"
              }
              src={movie.src}
              controls
              playsInline
              preload="metadata"
            >
              Your browser does not support embedded video playback.
            </video>
            <div className="px-2 py-4">
              <h3 className="text-sm font-bold uppercase tracking-tight md:text-lg">
                {movie.title}
              </h3>
              <p className="mt-1 font-mono text-[0.65rem] text-jlug-gray-1 md:text-xs">
                {movie.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
