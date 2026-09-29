import MascotHeroSection from "@/features/mascot/components/MascotHeroSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/landing/HeroSection";
import ManifestoSection from "@/components/landing/ManifestoSection";
import ClubIntroSection from "@/components/landing/ClubIntroSection";
import SiteIndexSection from "@/components/landing/SiteIndexSection";
import RecruitCTASection from "@/components/landing/RecruitCTASection";
import EventsSection from "@/components/landing/EventsSection";
import CallToActionSection from "@/components/landing/CallToActionSection";

export default function Home() {
  return (
    <div className="relative flex flex-col text-jlug-white selection:bg-jlug-accent selection:text-jlug-black overflow-x-hidden">
      {/* CONTINUOUS ENVIRONMENT WRAPPER */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto border-l border-r border-jlug-line bg-jlug-black/80 backdrop-blur-sm">

        {/* HERO — FALLING BLOCK CONSTRUCTION */}
        <HeroSection />

        {/* INTERACTIVE 3D MASCOT HERO SECTION */}
        <MascotHeroSection />

        {/* ABOUT / MANIFESTO */}
        <ManifestoSection />

        {/* CLUB INTRO VIDEO */}
        <ClubIntroSection />

        {/* SECTIONS / SITE INDEX — entry points to the dedicated pages */}
        <SiteIndexSection />

        {/* NEW RECRUITS TEASER */}
        <RecruitCTASection />

        <EventsSection />

        {/* RECRUITMENT CTA */}
        <CallToActionSection />

        <Footer />

      </div>
    </div>
  );
}
