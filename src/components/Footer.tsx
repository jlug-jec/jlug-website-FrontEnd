import Link from "next/link";
import { NAV_ITEMS } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-12 flex flex-col lg:flex-row justify-between items-start gap-16 font-mono text-xs text-jlug-gray-1 tracking-widest uppercase">
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-bold text-jlug-white mb-2">JLUG</div>
        <p>JEC LINUX USERS GROUP</p>
        <p>JABALPUR ENGINEERING COLLEGE</p>
        <p className="mt-8">EOF // 2026</p>

        <div className="group relative mt-4 inline-flex w-fit items-center gap-2">
          <span>MADE WITH</span>
          <span
            aria-hidden="true"
            className="text-jlug-accent transition-transform group-hover:scale-125"
          >
            ♥
          </span>
          <span>BY JLUG</span>

          <div
            role="tooltip"
            className="pointer-events-none absolute bottom-full left-0 mb-3 w-max min-w-[180px] border border-jlug-line bg-jlug-black p-3 opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
          >
            <div className="mb-2 border-b border-jlug-line pb-1.5 text-jlug-accent">
              BUILT_BY.LOG
            </div>
            <ul className="flex flex-col gap-1 normal-case tracking-normal text-jlug-white">
              <li>Garvit</li>
              <li>Harshita</li>
              <li>Ashwika</li>
              <li>Tanishka</li>
              <li>Deepak</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-16 lg:gap-32">
        <div className="flex flex-col gap-4">
          <div className="text-jlug-white border-b border-jlug-line pb-2 mb-2">PAGES</div>
          <Link href="/" className="hover:text-jlug-white transition-colors">/HOME</Link>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-jlug-white transition-colors"
            >
              {item.href.toUpperCase().replace("-", "_")}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-jlug-white border-b border-jlug-line pb-2 mb-2">NETWORK</div>
          <a href="https://github.com/jlug-jec" target="_blank" rel="noopener noreferrer" className="hover:text-jlug-white transition-colors">GITHUB</a>
          <a href="https://www.linkedin.com/company/jlug-jec" target="_blank" rel="noopener noreferrer" className="hover:text-jlug-white transition-colors">LINKEDIN</a>
          <a href="https://www.instagram.com/jlug_jec" target="_blank" rel="noopener noreferrer" className="hover:text-jlug-white transition-colors">INSTAGRAM</a>
        </div>
      </div>
    </footer>
  );
}
