import React from 'react';
import { NavbarComponent } from '@/components/ui/navbar';
import Galaxy from '../ui/react-bits/galaxy';
import Hero from './hero';
import { JLUGStats } from '../ui/animated-stats';
import WhyJoinUsSection from './why-join-us-section';
import { PreviousEventCarouselComponent } from './previous-events-section';
import FacultySectionComponent from './faculty-section';
import FounderSectionComponent from './founder-section';
import Testimonials from './testimonials';
import MeetTeamCTA from './meet-team-section';
import GallerySection from './gallery-section';
import Footer from '../layout/Footer';

const Home = () => {
  return (
    <div className="w-full h-full bg-black ">
      <NavbarComponent className="z-50 mt-10" />
      <div
        style={{
          width: '100%',
          height: '100vh',
          position: 'relative',
          zIndex: 20,
        }}
      >
        <Galaxy
          saturation={0}
          glowIntensity={0.3}
          density={1}
          mouseRepulsion={true}
          mouseInteraction={true}
          hueShift={140}
          twinkleIntensity={0.3}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          rotationSpeed={0.1}
          disableAnimation={false}
          starSpeed={0.5}
          transparent={false}
        />
        <div className="absolute inset-0 z-50">
          <Hero />
        </div>
        <div className="bg-black backdrop-blur-lg border border-white/10">
          <div className="flex flex-col items-center justify-center mt-10 z-50">
            <h1 className="text-white text-2xl font-bold mb-10">
              Our Number speaks for us
            </h1>
            <JLUGStats />
          </div>
        </div>
        <WhyJoinUsSection />
        <PreviousEventCarouselComponent />
        <FacultySectionComponent />
        <FounderSectionComponent />
        <Testimonials />
        <MeetTeamCTA />
        <GallerySection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
