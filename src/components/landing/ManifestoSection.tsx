const STAT_LINES = [
  { label: "FOUNDED", value: "2019-09-07" },
  { label: "ROOTS", value: "LINUX / FOSS" },
  { label: "STATUS", value: "ACTIVE" },
  { label: "MEMBERS", value: "GROWING" },
  { label: "UPTIME", value: "7 YRS / COUNTING" },
];

export default function ManifestoSection() {
  return (
    <section className="relative py-32 border-b border-jlug-line overflow-hidden">
      {/* Large structural typography overlapping the grid */}
      <div className="absolute -left-10 top-20 text-[20vw] font-bold text-jlug-surface-raised leading-none select-none pointer-events-none opacity-50 z-0">
        LEARN.
      </div>
      <div className="absolute -right-10 top-60 text-[20vw] font-bold text-jlug-surface-raised leading-none select-none pointer-events-none opacity-50 z-0 text-right">
        BUILD.
      </div>

      <div className="relative z-10 px-6 md:px-24">
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-12">
          {/* ── LEFT: Manifesto text card ── */}
          <div className="max-w-2xl bg-jlug-ink/90 border border-jlug-line p-8 md:p-12 backdrop-blur-md flex flex-col">
            <div className="font-mono text-xs text-jlug-accent mb-8 uppercase tracking-widest border-b border-jlug-line pb-4 inline-block">
              01 // THE MANIFESTO
            </div>
            <p className="text-2xl md:text-4xl font-medium leading-[1.4] tracking-[-0.02em] mb-6">
              We learn things, build things, break things, and teach each other what we figured out.
            </p>
            <p className="text-lg md:text-xl text-jlug-gray-1 leading-[1.6] flex-1">
              Founded on 7th September 2019, JLUG is the official techno-cultural club of Jabalpur Engineering College. Originally rooted in Linux and FOSS, we&apos;ve evolved into a vibrant community where technology, creativity, and culture intersect. From hands-on tech workshops to cultural fests, we empower students to explore, build, and express.
            </p>
            <div className="mt-12 pt-6 border-t border-jlug-line flex justify-between font-mono text-xs text-jlug-gray-1">
              <span>FILE: MANIFESTO.TXT</span>
              <span>CHMOD 777</span>
            </div>
          </div>

          {/* ── RIGHT: Terminal / stats panel ── */}
          <div className="hidden lg:flex flex-1 min-h-64 border border-jlug-line bg-jlug-black/80 backdrop-blur-md flex-col">
            {/* Window chrome */}
            <div className="flex items-center justify-between border-b border-jlug-line px-5 py-3 font-mono text-[0.65rem] uppercase tracking-widest text-jlug-gray-2 shrink-0">
              <span>~/jlug/about.sh</span>
              <span className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-jlug-line" />
                <span className="h-2 w-2 rounded-full bg-jlug-line" />
                <span className="h-2 w-2 rounded-full bg-jlug-accent" />
              </span>
            </div>

            {/* Body */}
            <div className="flex-1 p-6 font-mono text-xs text-jlug-gray-1 leading-relaxed flex flex-col justify-between overflow-hidden">
              {/* ASCII glyph — original JLUG wordmark */}
              <div>
                <pre className="whitespace-pre text-jlug-gray-2 select-none mb-8 leading-snug">
{String.raw`      _    _       _   _    ____ 
     | |  | |     | | | |  / ___|
  _  | |  | |     | | | | | |  _ 
 | |_| |  | |___  | |_| | | |_| |
  \___/   |_____|  \___/   \____|`}
                </pre>

                {/* Stat rows */}
                <div className="flex flex-col gap-2.5">
                  {STAT_LINES.map((line) => (
                    <div
                      key={line.label}
                      className="grid grid-cols-[1fr_auto] items-center border-b border-jlug-line/40 pb-2 gap-4"
                    >
                      <span className="text-jlug-gray-2 uppercase tracking-widest text-[0.6rem]">
                        {line.label}
                      </span>
                      <span className="text-jlug-white font-medium tabular-nums">
                        {line.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Blinking cursor prompt */}
              <div className="mt-8 flex items-center gap-2 text-jlug-accent">
                <span className="text-jlug-gray-2">$</span>
                <span>awaiting_next_build</span>
                <span className="animate-pulse leading-none">▮</span>
              </div>
            </div>

            {/* Footer */}
            <div className="shrink-0 border-t border-jlug-line px-5 py-2 font-mono text-[0.6rem] text-jlug-gray-2 flex justify-between">
              <span>jlug@jec:~#</span>
              <span className="text-jlug-accent/60">FOSS · LINUX · COMMUNITY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
