import Link from "next/link";
import { NAV_ITEMS } from "@/lib/navigation";

export default function SiteIndexSection() {
  return (
    <section className="relative border-b border-jlug-line">
      <div className="sticky top-14 bg-jlug-black border-b border-jlug-line z-20 px-6 py-3 flex justify-between font-mono text-xs text-jlug-gray-1 uppercase tracking-widest">
        <span>02 // SECTIONS</span>
        <span>CD /</span>
      </div>

      <div className="px-6 md:px-24 pt-20 pb-8">
        <h2 className="break-words text-4xl min-[400px]:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight uppercase">
          GO DEEPER
        </h2>
        <p className="mt-6 max-w-xl text-lg text-jlug-gray-1">
          Four rooms off the main hall. Each one has its own page.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-jlug-line">
        {NAV_ITEMS.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            className={`group relative flex flex-col justify-between gap-12 border-b border-jlug-line p-8 md:p-12 transition-colors hover:bg-jlug-white hover:text-jlug-black focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-jlug-accent ${
              i % 2 === 0 ? "md:border-r md:border-jlug-line" : ""
            }`}
          >
            <div className="flex items-baseline justify-between font-mono text-[0.7rem] uppercase tracking-widest text-jlug-gray-2 group-hover:text-jlug-black">
              <span>SEC_{item.index}</span>
              <span>{item.meta}</span>
            </div>

            <div>
              <h3 className="break-words text-2xl min-[400px]:text-3xl md:text-5xl font-bold uppercase tracking-tight leading-[0.95]">
                {item.title}
              </h3>
              <p className="mt-5 max-w-md text-base text-jlug-gray-1 group-hover:text-jlug-black/70">
                {item.blurb}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-jlug-line group-hover:border-jlug-black/20 pt-5 font-mono text-xs uppercase tracking-widest">
              <span className="text-jlug-gray-1 group-hover:text-jlug-black">
                {item.href}
              </span>
              <span
                aria-hidden="true"
                className="text-jlug-accent group-hover:text-jlug-black group-hover:translate-x-1 transition-transform"
              >
                {"-->"}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
