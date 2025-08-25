'use client';
import CircularGallery from '../ui/react-bits/circular-gallery';
import { Camera, Sparkles, Heart } from 'lucide-react';

export default function GallerySection() {
  return (
    <div className="w-full bg-gradient-to-b from-black to-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Capturing
            <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
              {' '}
              Moments
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Every event, every workshop, every moment of learning and growth -
            all captured in our gallery of memories.
          </p>
        </div>

        {/* Gallery Section */}
        <div className="relative flex justify-center items-center min-h-[400px] mb-8">
          <CircularGallery
            bend={1}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollSpeed={2}
            scrollEase={0.02}
          />
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
