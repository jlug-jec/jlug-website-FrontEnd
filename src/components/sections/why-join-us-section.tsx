'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import CardSwap, { Card } from '../ui/react-bits/cards';
import { contentData } from '@/constants';

const WhyJoin = () => {
  const [activeCard, setActiveCard] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Handle automatic rotation
  useEffect(() => {
    const startAutoRotation = () => {
      intervalRef.current = setInterval(() => {
        setActiveCard(prev => (prev + 1) % 3);
      }, 5000);
    };

    startAutoRotation();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleCardClick = (index: number) => {
    setActiveCard(index);
  };

  return (
    <section
      id="features"
      className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Why Join Us?
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the amazing opportunities and experiences that await you at
            JLUG
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6 text-center lg:text-left lg:pt-8 transition-all duration-500 ease-in-out">
            <div className="space-y-4 transition-all duration-500 ease-in-out">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight transition-all duration-500 ease-in-out">
                {contentData[activeCard].title}
                <br />
                <span className="text-gray-400 transition-all duration-500 ease-in-out">
                  {contentData[activeCard].subtitle}
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed transition-all duration-500 ease-in-out">
                {contentData[activeCard].description}
              </p>
            </div>

            <div className="space-y-4 transition-all duration-500 ease-in-out">
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0 transition-all duration-500 ease-in-out">
                {contentData[activeCard].details}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-4 transition-all duration-500 ease-in-out">
              <Button
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-500 ease-in-out transform hover:scale-105 ${
                  contentData[activeCard].buttonVariant === 'primary'
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'border-2 border-white/30 text-white hover:bg-white/10 bg-transparent'
                }`}
              >
                {contentData[activeCard].buttonText}
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-6 py-2.5 rounded-full font-medium transition-all duration-500 ease-in-out bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end ml-60 pointer-events-none">
            <div style={{ height: '450px', position: 'relative' }}>
              <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={5000}
                pauseOnHover={false}
                onCardClick={handleCardClick}
                easing="elastic"
              >
                <Card heading="Linux Workshop">
                  <div className="text-white">
                    <img
                      src="/assets/previous_events/Linux.jpg"
                      alt="Linux Workshop"
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h3 className="text-xl font-bold mb-2">
                      Linux Fundamentals
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Learn the basics of Linux command line and system
                      administration
                    </p>
                  </div>
                </Card>
                <Card heading="Hackathon">
                  <div className="text-white">
                    <img
                      src="/assets/previous_events/Hackathon.jpg"
                      alt="Hackathon Event"
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h3 className="text-xl font-bold mb-2">
                      24-Hour Challenge
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Participate in exciting hackathons and build amazing
                      projects
                    </p>
                  </div>
                </Card>
                <Card heading="Community Meet">
                  <div className="text-white">
                    <img
                      src="/assets/previous_events/Community.jpg"
                      alt="Community Meet"
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h3 className="text-xl font-bold mb-2">
                      Network & Connect
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Meet fellow tech enthusiasts and industry professionals
                    </p>
                  </div>
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
