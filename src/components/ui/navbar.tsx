'use client';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/ui/accertinity/navbar';
import { JLUGLogo } from 'public/assets/logos';
import { useState } from 'react';
import { navItems } from '@/constants';

export function NavbarComponent({ className }: { className?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full z-[9999]">
      <Navbar className={className}>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo title="JLUG" logo={JLUGLogo.src} />
          <NavItems items={navItems} />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo title="JLUG" logo={JLUGLogo.src} />
            <div className="relative z-50">
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="z-50 backdrop-blur-2xl bg-white/10"
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={e => {
                  // Special handling for Events when on team page
                  if (
                    item.name === 'Events' &&
                    window.location.pathname === '/team'
                  ) {
                    e.preventDefault();
                    // Navigate to home page first
                    window.location.href = '/';
                    // After navigation, scroll to events section
                    setTimeout(() => {
                      const element = document.querySelector('#events');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  } else if (item.link.startsWith('#')) {
                    e.preventDefault();
                    const element = document.querySelector(item.link);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                  setIsMobileMenuOpen(false);
                }}
                className="relative text-white w-full text-lg font-semibold z-50 px-4 py-3 rounded-md transition-all duration-200 hover:bg-zinc-600/80"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
