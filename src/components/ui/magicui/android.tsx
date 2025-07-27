import { SVGProps } from 'react';

export interface AndroidProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  src?: string;
  videoSrc?: string;
}

export default function Android({
  width = 433,
  height = 882,
  src,
  videoSrc,
  ...props
}: AndroidProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 500 882"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Phone Shadow */}
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="12"
            floodColor="#000000"
            floodOpacity="0.3"
          />
        </filter>
        <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="50%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
      </defs>

      {/* Phone Body with Shadow */}
      <path
        d="M0 42C0 18.8041 18.804 0 42 0H336C359.196 0 378 18.804 378 42V788C378 811.196 359.196 830 336 830H42C18.804 830 0 811.196 0 788V42Z"
        fill="url(#phoneGradient)"
        filter="url(#shadow)"
      />

      {/* Phone Frame */}
      <path
        d="M2 43C2 22.0132 19.0132 5 40 5H338C358.987 5 376 22.0132 376 43V787C376 807.987 358.987 825 338 825H40C19.0132 825 2 807.987 2 787V43Z"
        fill="url(#screenGradient)"
        stroke="#333333"
        strokeWidth="1"
      />

      {/* Screen Area with Glow */}
      <g clipPath="url(#clip0_514_20855)">
        <defs>
          <filter id="screenGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M9.25 48C9.25 29.3604 24.3604 14.25 43 14.25H335C353.64 14.25 368.75 29.3604 368.75 48V780C368.75 798.64 353.64 813.75 335 813.75H43C24.3604 813.75 9.25 798.64 9.25 780V48Z"
          fill="#000000"
          stroke="#444444"
          strokeWidth="0.5"
          filter="url(#screenGlow)"
        />
      </g>

      {/* Camera with Gradient */}
      <defs>
        <radialGradient id="cameraGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#666666" />
          <stop offset="70%" stopColor="#333333" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
      </defs>
      <circle
        cx="189"
        cy="28"
        r="9"
        fill="url(#cameraGradient)"
        stroke="#555555"
        strokeWidth="0.5"
      />
      <circle cx="189" cy="28" r="4" fill="#222222" />
      {src && (
        <image
          href={src}
          width="360"
          height="800"
          className="size-full object-cover"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#clip0_514_20855)"
        />
      )}
      {videoSrc && (
        <foreignObject
          x="9"
          y="14"
          width="360"
          height="800"
          clipPath="url(#clip0_514_20855)"
        >
          <video
            className="w-full h-full object-cover"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
          />
        </foreignObject>
      )}
      <defs>
        <clipPath id="clip0_514_20855">
          <rect
            width="360"
            height="800"
            rx="33"
            ry="25"
            className="fill-white dark:fill-[#262626]"
            transform="translate(9 14)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
