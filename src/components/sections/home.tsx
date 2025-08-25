import React from 'react';
import { NavbarComponent } from '@/components/ui/navbar';
import Galaxy from '../ui/react-bits/galaxy';
import Hero from './hero';
import WhyJoinUsSection from './why-join-us-section';
import { PreviousEventCarouselComponent } from './previous-events-section';
import FacultySectionComponent from './faculty-section';
import FounderSectionComponent from './founder-section';
import Testimonials from './testimonials';
import MeetTeamCTA from './meet-team-section';
import GallerySection from './gallery-section';
import Footer from '../layout/Footer';
import JECCASection from './jecca-section';

const Home = () => {
  return (
    <div className="w-full h-full bg-black ">
      <NavbarComponent className="z-50 mt-10" />
      <div
        id="home"
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
      </div>

      {/* Rest of the sections */}
      <div className="relative z-40">
        <WhyJoinUsSection />
        <div id="events">
          <PreviousEventCarouselComponent />
        </div>
        <div id="team">
          <MeetTeamCTA />
          <FacultySectionComponent />
          <FounderSectionComponent />
          <Testimonials />
        </div>
        <GallerySection />
        <JECCASection />
        <div id="contact">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
