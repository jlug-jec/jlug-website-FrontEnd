import React from 'react';
import { ShimmerButton } from '../ui/magicui/shimmer-button';
import { buttonData } from '@/constants';

export default function JECCASection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Section */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src="/assets/logos/JECCA.png"
              alt="JECAA - JEC Alumni Association"
              className="w-64 h-64 lg:w-80 lg:h-80 object-contain"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              JECAA - JEC Alumni Association
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Welcome to JEC Alumni Association. Wherever you are and whatever
              commitments you have made in life, we hope that you will ensure
              and facilitate continual bonding of your Alumni and your Alma
              mater.
              <br />
              <br />
              The efforts and aim of JECAA is to encourage fellow graduates to
              connect with the Alma mater and with one another to network,
              inspire, mentor and assist in professional development
              opportunities for young graduates.
            </p>

            <div>
              <a
                href={buttonData['JECAA Portal']}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <ShimmerButton
                  shimmerColor="#ffffff"
                  shimmerSize="0.05em"
                  shimmerDuration="3s"
                  className=" text-white font-semibold text-lg px-8 py-4"
                >
                  JECAA Portal
                </ShimmerButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
