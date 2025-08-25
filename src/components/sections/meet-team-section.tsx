'use client';

import { Users } from 'lucide-react';
import { TerminalDemo } from '@/components/ui/magicui/terminal';
import Link from 'next/link';
import { buttonData } from '@/constants';
import { ShimmerButton } from '../ui/magicui/shimmer-button';

export default function MeetTeamCTA() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Terminal */}
          <div className="relative group">
            <TerminalDemo />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 text-slate-300 px-6 py-3 rounded-full text-sm font-medium">
              <Users className="w-4 h-4" />
              The People Behind Our Success
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-xl text-slate-300 leading-relaxed">
                Behind every innovation, every breakthrough, and every success
                story, there&apos;s a team of extraordinary individuals who dare
                to dream big and work even bigger.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                Our team isn&apos;t just a collection of talented professionals
                – we&apos;re a family of visionaries, creators, and
                problem-solvers who believe that together, we can change the
                world.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <Link href={buttonData['Meet Our Team']}>
                <ShimmerButton
                  shimmerColor="#ffffff"
                  shimmerSize="0.05em"
                  shimmerDuration="3s"
                  className="text-white font-semibold text-lg px-8 py-4 flex items-center justify-between"
                >
                  <span>Meet Our Team</span>
                </ShimmerButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
