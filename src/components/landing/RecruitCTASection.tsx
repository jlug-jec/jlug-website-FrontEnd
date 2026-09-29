import Link from "next/link";

const OPEN_ROLES = [
  "DEVELOPERS",
  "DESIGNERS",
  "WRITERS",
  "ORGANIZERS",
];

export default function RecruitCTASection() {
  return (
    <section className="relative border-b border-jlug-line bg-jlug-ink">
      <div className="px-6 md:px-24 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
            <div className="flex flex-col justify-center">
              <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-jlug-accent">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-jlug-accent" />
                NEXT SLOT: ID_026_04 // OPEN
              </div>
              <h2 className="break-words text-3xl font-bold uppercase leading-[0.95] tracking-tight min-[400px]:text-4xl md:text-6xl">
                You could be
                <br />
                here next.
              </h2>
              <p className="mt-6 max-w-md text-base text-jlug-gray-1">
                Every builder above started the same way: an empty slot and a
                good reason to fill it. Recruitment opens every year for
                anyone curious enough to learn in public.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {OPEN_ROLES.map((role) => (
                  <span
                    key={role}
                    className="border border-jlug-line px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-widest text-jlug-gray-1"
                  >
                    {role}
                  </span>
                ))}
              </div>

              <Link
                href="/join"
                className="mt-10 inline-flex w-fit items-center gap-3 border border-jlug-accent bg-jlug-accent px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-jlug-black transition-colors hover:bg-jlug-white hover:border-jlug-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jlug-white"
              >
                CLAIM_YOUR_SLOT.SH {"-->"}
              </Link>
            </div>

            {/* Empty ID card slot — visual echo of the roster above */}
            <div className="flex items-center justify-center">
              <div className="group relative w-full max-w-[240px] border border-dashed border-jlug-line bg-jlug-black p-1 transition-colors hover:border-jlug-accent">
                <div className="flex h-full flex-col justify-between border border-dashed border-jlug-line p-4">
                  <div className="mb-4 flex justify-between border-b border-dashed border-jlug-line pb-2 font-mono text-[0.65rem] text-jlug-gray-2">
                    <span>ID: 026_??</span>
                    <span className="text-jlug-accent">OPEN</span>
                  </div>
                  <div className="relative mb-4 flex aspect-[3/4] w-full items-center justify-center overflow-hidden bg-jlug-surface font-mono text-xs text-jlug-gray-2">
                    <span className="text-3xl opacity-40">?</span>
                    <span className="absolute bottom-2 font-mono text-[0.6rem] uppercase tracking-widest opacity-60">
                      YOUR_PHOTO.RAW
                    </span>
                  </div>
                  <h3 className="mb-1 text-lg font-bold uppercase text-jlug-gray-2">
                    YOUR NAME
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-wide text-jlug-gray-2">
                    ROLE / YEAR TBD
                  </p>
                </div>
                {/* Corner accent, matches the hover-reveal language used elsewhere */}
                <div className="pointer-events-none absolute -right-2 -top-2 border border-jlug-line bg-jlug-ink px-2 py-1 font-mono text-[0.6rem] uppercase tracking-widest text-jlug-gray-2 opacity-0 transition-opacity group-hover:opacity-100">
                  AWAITING_UPLOAD
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
