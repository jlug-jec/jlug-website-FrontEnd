'use client';
import CircularGallery from '../ui/react-bits/circular-gallery';
import { Camera, Sparkles, Heart } from 'lucide-react';

export default function GallerySection() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-gray-800/50 border border-gray-700/50 text-gray-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Camera className="w-4 h-4" />
            <span>Our Memories</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6">
            Capturing
            <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
              {' '}
              Moments
            </span>
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 md:mb-12">
            Every event, every workshop, every moment of learning and growth -
            all captured in our gallery of memories.
          </p>
        </div>

        {/* Gallery Section */}
        {/* <div className="relative flex justify-center items-center min-h-[600px] md:min-h-[700px] lg:min-h-[800px]"> */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none"></div>
        <CircularGallery
          bend={1}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.02}
        />

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16">
          <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
            <div className="text-2xl md:text-3xl font-bold text-gray-300">
              100+
            </div>
            <div className="text-xs md:text-sm text-gray-400">
              Photos Captured
            </div>
          </div>
          <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
            <div className="text-2xl md:text-3xl font-bold text-gray-300">
              50+
            </div>
            <div className="text-xs md:text-sm text-gray-400">
              Events Hosted
            </div>
          </div>
          <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
            <div className="text-2xl md:text-3xl font-bold text-gray-300">
              1000+
            </div>
            <div className="text-xs md:text-sm text-gray-400">Happy Faces</div>
          </div>
          <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
            <div className="text-2xl md:text-3xl font-bold text-gray-300">
              ∞
            </div>
            <div className="text-xs md:text-sm text-gray-400">
              Memories Made
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
