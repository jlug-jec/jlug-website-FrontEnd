import InteractiveWordmark from "@/components/InteractiveWordmark";

export default function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-3.5rem)] min-h-[calc(100vh-3.5rem)] flex flex-col border-b border-jlug-line overflow-hidden">
      {/* Top metadata strip */}
      <div className="flex justify-between items-center gap-3 px-4 sm:px-6 md:px-12 py-4 border-b border-jlug-line/50 font-mono text-[0.55rem] sm:text-[0.6rem] md:text-[0.7rem] text-jlug-gray-2 uppercase tracking-wider sm:tracking-widest z-20">
        <span>JLUG / 001</span>
        <span className="hidden md:inline">JEC / JABALPUR / INDIA</span>
        <span>EST. 2019</span>
      </div>

      {/* Canvas — the artwork IS the hero */}
      <div className="relative flex-1 min-h-0">
        <InteractiveWordmark />
      </div>

      {/* Bottom metadata strip */}
      <div className="flex justify-between items-center gap-3 px-4 sm:px-6 md:px-12 py-4 border-t border-jlug-line/50 font-mono text-[0.55rem] sm:text-[0.6rem] md:text-[0.7rem] text-jlug-gray-2 uppercase tracking-wider sm:tracking-widest z-20">
        <span>JEC LINUX USERS GROUP</span>
        <span className="text-jlug-gray-1 text-right">WHERE CULTURE MEETS CODE</span>
      </div>
    </section>
  );
}
