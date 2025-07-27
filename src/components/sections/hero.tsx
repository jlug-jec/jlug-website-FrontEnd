import { Button } from '@/components/ui/button';
import Android from '../ui/magicui/android';

const Hero = () => {
  return (
    <div className="relative overflow-hidden xl:mt-0 mt-20">
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-12">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Hero Text */}
            <div className="space-y-6 text-center lg:text-left">
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

                <div className="space-y-4">
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Founded on 7th September 2019, JLUG is the official
                    techno-cultural club of Jabalpur Engineering College.
                    Originally rooted in Linux and FOSS, we&apos;ve evolved into
                    a vibrant community where technology, creativity, and
                    culture intersect. From hands-on tech workshops to cultural
                    fests, we empower students to explore, build, and express.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-4">
                <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                  Join JLUG
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-6 py-2.5 rounded-full font-medium transition-all duration-300 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Side - Video */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative items-center justify-center flex xl:ml-0 ml-20">
                <Android
                  width={400}
                  height={800}
                  className="drop-shadow-2xl"
                  videoSrc="/video.mp4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
