import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import StudioBackdrop from "@/components/StudioBackdrop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "JLUG | Where Culture Meets Code",
  description: "JEC Linux Users Group. A digital clubhouse for students who build things.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased bg-jlug-black text-jlug-white selection:bg-jlug-accent selection:text-jlug-black`}
    >
      <body className="min-h-full flex flex-col font-sans bg-jlug-black text-jlug-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-jlug-accent focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-jlug-black"
        >
          Skip to content
        </a>
        <StudioBackdrop />
        <SiteNav />
        <main id="main" className="relative flex flex-1 flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
