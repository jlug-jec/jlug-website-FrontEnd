export default function ClubIntroSection() {
  return (
    <section className="relative border-b border-jlug-line bg-jlug-ink py-32">
      <div className="px-6 md:px-24">
        <div className="mb-12 max-w-2xl">
          <div className="mb-4 font-mono text-xs uppercase tracking-widest text-jlug-accent">
            01B // THE INTRO
          </div>
          <h2 className="break-words text-3xl font-semibold uppercase tracking-tight min-[400px]:text-4xl md:text-6xl">
            Watch us in motion
          </h2>
          <p className="mt-4 text-lg text-jlug-gray-1">
            A quick look at who we are, what we build, and why JLUG feels
            less like a club and more like a workshop full of friends.
          </p>
        </div>

        <div className="mx-auto max-w-4xl border border-jlug-line bg-jlug-black p-2">
          <video
            className="aspect-video w-full"
            src="/assets/after-movie/ClubIntro.mp4"
            poster="/assets/mascot/pingu-tiwari.png"
            controls
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            Your browser does not support embedded video playback.
          </video>
        </div>
      </div>
    </section>
  );
}
