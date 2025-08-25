import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap', // Optimize font loading
});

export const metadata: Metadata = {
  title: 'JLUG - JEC Linux Users Group',
  icons: {
    icon: '/JLUGLogo.svg',
  },
  description: 'Official website of JEC Linux Users Group',
  keywords: 'JLUG, JEC, Linux, Open Source, Technology',
  authors: [{ name: 'JLUG Team' }],
  robots: 'index, follow',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Critical CSS for LCP element */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Critical CSS for immediate text rendering */
            .lcp-text {
              font-size: 0.875rem;
              line-height: 1.5;
              color: #9ca3af;
              max-width: 36rem;
              margin: 0 auto;
              font-family: 'Poppins', sans-serif;
              font-display: swap;
              contain-intrinsic-size: 0 1.5em;
              content-visibility: auto;
            }
            @media (min-width: 1024px) {
              .lcp-text {
                margin: 0;
              }
            }
            /* Ensure text is visible immediately */
            .hero-text {
              opacity: 1 !important;
              visibility: visible !important;
              will-change: auto;
            }
            /* Optimize font loading */
            @font-face {
              font-family: 'Poppins';
              font-display: swap;
              font-weight: 400;
              src: url('/_next/static/media/0484562807a97172-s.p.woff2') format('woff2');
            }
            @font-face {
              font-family: 'Poppins';
              font-display: swap;
              font-weight: 600;
              src: url('/_next/static/media/b957ea75a84b6ea7-s.p.woff2') format('woff2');
            }
          `,
          }}
        />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/video-compressed.mp4"
          as="video"
          type="video/mp4"
        />
        <link
          rel="preload"
          href="/JLUGLogo.svg"
          as="image"
          type="image/svg+xml"
        />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.instagram.com" />
        <link rel="dns-prefetch" href="//www.linkedin.com" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.instagram.com" />
        <link rel="preconnect" href="https://www.linkedin.com" />

        {/* Resource hints for critical content */}
        <link
          rel="preload"
          href="/_next/static/media/0484562807a97172-s.p.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/b957ea75a84b6ea7-s.p.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${poppins.className} bg-gradient-to-b from-black to-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
