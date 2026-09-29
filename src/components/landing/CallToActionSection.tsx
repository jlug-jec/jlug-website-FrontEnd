import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section className="relative">
      <div className="px-6 md:px-24 py-40 flex flex-col items-center justify-center text-center border-b border-jlug-line">
        <h2 className="text-[clamp(2.75rem,12vw,14rem)] break-words font-bold leading-[0.8] tracking-[-0.05em] mb-16 uppercase">
          YOU COULD<br/>BE HERE.
        </h2>
        <div className="relative">
          <Link
            href="/join"
            className="inline-block bg-jlug-accent text-jlug-black font-mono font-bold text-lg md:text-xl px-12 py-6 hover:bg-jlug-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jlug-white"
          >
            EXECUTE /JOIN
          </Link>
          {/* ASCII decorative brackets */}
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-jlug-gray-2 hidden md:block">
            {`>[`}
          </div>
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-jlug-gray-2 hidden md:block">
            {`]<`}
          </div>
        </div>
        <div className="font-mono text-xs mt-8 text-jlug-gray-1 uppercase tracking-widest">
          PORT 8080 IS OPEN
        </div>
      </div>
    </section>
  );
}
