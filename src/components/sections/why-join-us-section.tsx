'use client';

import { useState, useEffect } from 'react';
import { contentData } from '@/constants';

const WhyJoin = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Ensure component is mounted before starting auto-rotation
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Defer visibility to prevent blocking LCP
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // 3 second delay to prioritize hero text

    return () => clearTimeout(timer);
  }, []);

  // Handle automatic rotation only after initial render and visibility
  useEffect(() => {
    if (!isClient || !isVisible) return;

    const interval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, [isClient, isVisible]);

  return (
    <section
      id="features"
      className="sm:mt-90 mt-[42rem] md:mt-10 py-20 px-6 bg-gradient-to-b from-black to-gray-900 overflow-hidden relative"
      style={{
        opacity: isVisible ? 1 : 0.3,
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="w-full max-w-6xl mx-auto mb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Why Join Us?
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the amazing opportunities and experiences that await you at
            JLUG
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {contentData[activeCard].title}
                <br />
                <span className="text-gray-400">
                  {contentData[activeCard].subtitle}
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                {contentData[activeCard].description}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {contentData[activeCard].details}
              </p>
            </div>
          </div>

          {/* Visual Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              {/* Progress Indicators */}
              <div className="flex justify-center lg:justify-end gap-2 mb-6">
                {[0, 1, 2].map(index => (
                  <button
                    key={index}
                    onClick={() => setActiveCard(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-pressed={activeCard === index}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      activeCard === index
                        ? 'bg-white scale-110'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {[
                  {
                    title: 'Linux Workshop',
                    description:
                      'Learn the basics of Linux command line and system administration',
                    icon: '🐧',
                  },
                  {
                    title: 'Hackathon',
                    description:
                      'Participate in exciting hackathons and build amazing projects',
                    icon: '💻',
                  },
                  {
                    title: 'Community Meet',
                    description:
                      'Meet fellow tech enthusiasts and industry professionals',
                    icon: '🤝',
                  },
                ].map((feature, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCard(index)}
                    aria-label={`Select ${feature.title} - ${feature.description}`}
                    aria-pressed={activeCard === index}
                    className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer text-left w-full ${
                      activeCard === index
                        ? 'border-white/50 bg-white/5'
                        : 'border-white/20 bg-transparent hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl" aria-hidden="true">
                        {feature.icon}
                      </span>
                      <div className="text-left">
                        <h3 className="text-white font-semibold text-sm sm:text-base">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 text-xs sm:text-sm mt-1">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
