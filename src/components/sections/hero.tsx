'use client';
import { Suspense, lazy, useState, useEffect } from 'react';
import { AnimatedNumber } from '../ui/animated-number';
import { ShimmerButton } from '../ui/magicui/shimmer-button';
import { buttonData } from '../../constants';

// Lazy load the Android component to defer its loading
const Android = lazy(() => import('../ui/magicui/android'));

const stats = [
  { name: 250, description: 'Active Members' },
  { name: 25, description: 'Seminars This Year' },
  { name: 10, description: 'Workshops This Year' },
  { name: 100, description: 'Learners' },
];

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  // Only load video when user scrolls to it or after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntersecting(true);
    }, 2000); // 2 second delay to prioritize text

    return () => clearTimeout(timer);
  }, []);

  // Load video component only when needed
  useEffect(() => {
    if (isIntersecting) {
      const videoTimer = setTimeout(() => {
        setShowVideo(true);
      }, 100);

      return () => clearTimeout(videoTimer);
    }
  }, [isIntersecting]);

  return (
    <div className="relative overflow-hidden xl:mt-0 mt-20">
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-12 pb-20">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Hero Text - PRIORITY CONTENT */}
            <div className="space-y-6 text-center lg:text-left hero-text">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Welcome to <span className="text-gray-400">JLUG</span>
                  <br />
                  Where Culture Meets Code
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  The Techno-Cultural Society of JEC — Blending Creativity,
                  Collaboration, and Code since 2019
                </p>

                {/* CRITICAL LCP ELEMENT - Optimized for immediate rendering */}
                <div className="space-y-4">
                  <p className="lcp-text hero-text text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Founded on 7th September 2019, JLUG is the official
                    techno-cultural club of Jabalpur Engineering College.
                    Originally rooted in Linux and FOSS, we&apos;ve evolved into
                    a vibrant community where technology, creativity, and
                    culture intersect. From hands-on tech workshops to cultural
                    fests, we empower students to explore, build, and express.
                  </p>
                </div>
              </div>

              <div className="mt-8 opacity-80">
                <h2 className="text-lg font-medium text-gray-400 leading-tight mb-3">
                  Our Stats
                </h2>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-3">
                  <div className="flex flex-col gap-y-1">
                    <dt className="text-xs text-gray-500">
                      {stats[0].description}
                    </dt>
                    <dd className="order-first text-2xl font-medium tracking-tight text-gray-300">
                      <AnimatedNumber start={0} end={250} />
                    </dd>
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <dt className="text-xs text-gray-500">
                      {stats[1].description}
                    </dt>
                    <dd className="order-first text-2xl font-medium tracking-tight text-gray-300">
                      <AnimatedNumber start={0} end={25} />
                    </dd>
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <dt className="text-xs text-gray-500">
                      {stats[2].description}
                    </dt>
                    <dd className="order-first text-2xl font-medium tracking-tight text-gray-300">
                      <AnimatedNumber start={0} end={10} />
                    </dd>
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <dt className="text-xs text-gray-500">
                      {stats[3].description}
                    </dt>
                    <dd className="order-first text-2xl font-medium tracking-tight text-gray-300">
                      <AnimatedNumber start={0} end={100} /> +
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-4">
                <a href={buttonData['Join Us']} className="inline-block">
                  <ShimmerButton
                    shimmerColor="#ffffff"
                    shimmerDuration="3s"
                    className="text-white font-semibold"
                  >
                    Join us
                  </ShimmerButton>
                </a>
              </div>
            </div>

            {/* Right Side - Video - COMPLETELY DEFERRED */}
            <div className="flex justify-center lg:justify-end">
              {showVideo ? (
                <div className="relative items-center justify-center flex xl:ml-0 ml-20">
                  <Suspense
                    fallback={
                      <div className="w-[400px] h-[800px] bg-gray-800 rounded-[33px] animate-pulse flex items-center justify-center">
                        <div className="text-gray-400">Loading...</div>
                      </div>
                    }
                  >
                    <Android
                      width={400}
                      height={800}
                      className="drop-shadow-2xl"
                      videoSrc="/video-compressed.mp4"
                    />
                  </Suspense>
                </div>
              ) : (
                // Simple placeholder that doesn't block anything
                <div className="w-[400px] h-[800px] bg-gray-800 rounded-[33px] flex items-center justify-center">
                  <div className="text-gray-400 text-center">
                    <div className="text-2xl mb-2">📱</div>
                    <div className="text-sm">Interactive Experience</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
