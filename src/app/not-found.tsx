import FaultyTerminal from '@/components/ui/react-bits/faulty-terminal';
import { NavbarComponent } from '@/components/ui/navbar';
import Link from 'next/link';

const PageNotFound = () => {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <NavbarComponent className="mt-10 text-white" />
      <FaultyTerminal
        scale={1.5}
        gridMul={[2, 1]}
        digitSize={1.2}
        timeScale={1}
        pause={false}
        scanlineIntensity={1}
        glitchAmount={0.1}
        flickerAmount={0.5}
        noiseAmp={1}
        chromaticAberration={0}
        dither={0}
        curvature={0}
        tint="#a7ef8e"
        mouseReact={true}
        mouseStrength={0.5}
        pageLoadAnimation={true}
        brightness={0.2}
      />

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center space-y-8 p-8">
          {/* Main text */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Are you lost?
              <br />
              We can help you find your way.
            </h1>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="px-8 py-3 bg-white text-black font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-gray-300"
            >
              Go Home
            </Link>

            <Link
              href="/contact"
              className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-gray-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
