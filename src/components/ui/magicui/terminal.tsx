'use client';
import { cn } from '@/lib/utils';
import type React from 'react';

import { motion, type MotionProps } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface AnimatedSpanProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedSpan = ({
  children,
  delay = 0,
  className,
  ...props
}: AnimatedSpanProps) => (
  <motion.div
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: delay / 1000 }}
    className={cn('grid text-sm font-normal tracking-tight', className)}
    {...props}
  >
    {children}
  </motion.div>
);

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
}

export const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = 'span',
  ...props
}: TypingAnimationProps) => {
  if (typeof children !== 'string') {
    throw new Error('TypingAnimation: children must be a string. Received:');
  }

  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>('');
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, started]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn('text-sm font-normal tracking-tight', className)}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
};

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

export const Terminal = ({ children, className }: TerminalProps) => {
  return (
    <div
      className={cn(
        'z-0 h-full max-h-[300px] sm:max-h-[350px] md:max-h-[400px] w-full max-w-sm sm:max-w-md md:max-w-lg rounded-xl border border-gray-700 bg-gray-900 overflow-hidden',
        className
      )}
    >
      <div className="flex flex-col gap-y-2 border-b border-gray-700 p-3 sm:p-4">
        <div className="flex flex-row gap-x-2">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
        </div>
      </div>
      <pre className="p-3 sm:p-4">
        <code className="grid gap-y-1 overflow-auto text-sm sm:text-base">
          {children}
        </code>
      </pre>
    </div>
  );
};

export function TerminalDemo() {
  return (
    <Terminal>
      <TypingAnimation className="text-white">
        &gt; sudo join jlug --now
      </TypingAnimation>
      <AnimatedSpan delay={1500} className="text-green-400">
        <span>✔ Found the most legendary folks on campus.</span>
      </AnimatedSpan>
      <AnimatedSpan delay={2000} className="text-green-400">
        <span>✔ Not just coders — designers,</span>
        <span> photographers, writers, dreamers</span>
      </AnimatedSpan>
      <AnimatedSpan delay={2500} className="text-green-400">
        <span>✔ Big things happening at college? </span>
        <span>Yeah, we&apos;re probably behind it.</span>
      </AnimatedSpan>
      <AnimatedSpan delay={3000} className="text-green-400">
        <span>✔ We don’t follow trends — we set them.</span>
      </AnimatedSpan>
      <AnimatedSpan delay={3500} className="text-green-400">
        <span>✔ Learned from the best. Now *we* are the best.</span>
      </AnimatedSpan>
      <TypingAnimation delay={6000} className="text-purple-400">
        JLUG initialized. Terminal access granted.
      </TypingAnimation>
    </Terminal>
  );
}
