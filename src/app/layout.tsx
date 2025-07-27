import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
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
      <body
        className={`${poppins.className} bg-gradient-to-b from-black to-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
