'use client';

import { footerLinks, socialMedia } from '@/constants';
import Link from 'next/link';
import { JLUGLogo } from 'public/assets/logos';
import { ArrowUpRight, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '20px 20px',
          }}
        ></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={JLUGLogo.src}
                  alt="JLUG"
                  className="relative w-16 h-16 rounded-full border-2 border-white/10 shadow-xl"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">JLUG</h3>
                <p className="text-sm text-slate-400">Tech Community</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed max-w-md">
              A Great Society For Fun, Explorations, Interactions, Learning And
              More... Join our vibrant community of developers, designers, and
              tech enthusiasts.
            </p>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-slate-400 font-medium">
                Follow us:
              </span>
              <div className="flex space-x-3">
                {socialMedia.map((social, index) => (
                  <button
                    key={social.id}
                    onClick={() => window.open(social.link)}
                    className="group relative p-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <img
                      src={social.icon || '/placeholder.svg'}
                      alt={social.id}
                      className="w-5 h-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {footerLinks.map(footerlink => (
                <div key={footerlink.title} className="space-y-4">
                  <h4 className="text-lg font-semibold text-white relative">
                    {footerlink.title}
                    <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                  </h4>
                  <ul className="space-y-3">
                    {footerlink.links.map(link => (
                      <li key={link.name}>
                        <Link
                          href={link.link}
                          className="group flex items-center text-slate-400 hover:text-white transition-colors duration-200"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-200">
                            {link.name}
                          </span>
                          <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-slate-400">
              <span>
                Copyright © {new Date().getFullYear()} JLUG. All Rights
                Reserved.
              </span>
            </div>

            <div className="flex items-center space-x-2 text-slate-400">
              <span>Designed and developed with</span>
              <span>by JLUG Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
