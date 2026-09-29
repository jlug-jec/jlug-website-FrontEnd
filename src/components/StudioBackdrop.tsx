/**
 * Fixed grid + corner crosshairs that sit behind every page.
 *
 * Lives in the root layout so the landing page and the section pages share
 * the same environment. Purely decorative, hence aria-hidden.
 */
export default function StudioBackdrop() {
  return (
    <div aria-hidden="true" className="fixed inset-0 z-[-1] overflow-hidden bg-[#05050A]">
      {/* Aurora / Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/30 blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-600/20 blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-fuchsia-600/20 blur-[120px] mix-blend-screen pointer-events-none" />

      {/* Dot Grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.2]"
        style={{
          backgroundImage: `radial-gradient(circle at center, #ffffff 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      
      {/* Existing corner crosshairs */}
      <div className="pointer-events-none absolute inset-0 z-50 hidden md:block opacity-40">
        <div className="absolute top-8 left-8 h-4 w-4 border-t border-l border-jlug-gray-2" />
        <div className="absolute top-8 right-8 h-4 w-4 border-t border-r border-jlug-gray-2" />
        <div className="absolute bottom-8 left-8 h-4 w-4 border-b border-l border-jlug-gray-2" />
        <div className="absolute bottom-8 right-8 h-4 w-4 border-b border-r border-jlug-gray-2" />
        <div className="absolute top-0 bottom-0 left-12 w-px bg-jlug-line" />
        <div className="absolute top-0 bottom-0 right-12 w-px bg-jlug-line" />
      </div>
    </div>
  );
}
