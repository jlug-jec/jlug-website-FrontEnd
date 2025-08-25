'use client';

import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'motion/react';

import { useEffect, useState } from 'react';

type EventData = {
  image: string;
  title: string;
  description: string;
};
export const PreviousEventCarousel = ({
  events,
  autoplay = false,
}: {
  events: EventData[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive(prev => (prev + 1) % events.length);
  };

  const handlePrev = () => {
    setActive(prev => (prev - 1 + events.length) % events.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="w-full px-4 py-20 font-sans antialiased md:px-8 lg:px-12 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      <div className="relative z-10 text-center mb-8 md:mb-12 lg:mb-16 px-4 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative inline-block"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-pulse">
              Our Previous
            </span>
            <br />
            <span className="relative">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Extraordinary
              </span>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 blur-xl"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                }}
              />
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Events
            </span>
          </h2>

          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 w-8 h-8 md:w-16 md:h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-10 h-10 md:w-20 md:h-20 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-slate-300 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Discover the magic moments we&apos;ve created together
        </motion.p>
      </div>
      <div className="relative grid grid-cols-1 gap-8 md:gap-12 lg:gap-16 md:grid-cols-2">
        <div>
          <div className="relative h-96 w-96">
            <AnimatePresence>
              {events.map((event, index) => (
                <motion.div
                  key={event.image}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 40 : events.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    // width={500}
                    // height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
            }}
          >
            <h3 className="text-2xl font-bold text-white">
              {events[active].title}
            </h3>

            <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
              {events[active].description.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: 'blur(10px)',
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: 'blur(0px)',
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: 'easeInOut',
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
