'use client';

import React, { useState, useEffect, useCallback } from 'react';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Why Us', id: 'why' },
  { label: 'Reviews', id: 'reviews' },
  { label: 'Contact', id: 'contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerEl = document.getElementById('site-header');
    const headerH = headerEl ? headerEl.offsetHeight : 72;
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerH;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  const updateActiveSection = useCallback(() => {
    const headerEl = document.getElementById('site-header');
    const headerH = (headerEl ? headerEl.offsetHeight : 72) + 20;
    let current = 'home';
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= headerH) {
        current = id;
      }
    });
    setActiveSection(current);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      updateActiveSection();
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [updateActiveSection]);

  // Close mobile nav on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (mobileOpen) setMobileOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileOpen]);

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'shadow-[0_4px_30px_rgba(0,0,0,0.35)]'
          : ''
      }`}
      style={{ background: 'rgba(13,31,53,0.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-[72px] gap-6">

          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 flex-shrink-0 group"
            aria-label="RoofDoneRestore - scroll to top"
          >
            <div className="w-11 h-11 bg-accent rounded-[10px] flex items-center justify-center flex-shrink-0 group-hover:bg-accent-dark transition-colors duration-300">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
                <path d="M3 12L12 3l9 9v9H3V12zm2 1v7h14v-7l-7-7-7 7z"/>
              </svg>
            </div>
            <div className="leading-tight">
              <strong className="block font-display text-[1.05rem] font-bold text-white tracking-tight">
                RoofDoneRestore
              </strong>
              <span className="text-[0.68rem] text-accent font-semibold tracking-[0.08em] uppercase">
                Roofing &amp; Restoration
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_ITEMS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`nav-link px-[14px] py-2 text-[0.87rem] font-medium rounded-md transition-all duration-300 ${
                  activeSection === id
                    ? 'text-white bg-white/10' :'text-white/75 hover:text-white hover:bg-white/8'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:+14087710169"
              className="flex items-center gap-2 text-white font-semibold text-[0.88rem] hover:text-accent transition-colors duration-300"
              aria-label="Call +1 408 771 0169"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-accent flex-shrink-0" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              +1 (408) 771-0169
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-accent hover:bg-accent-dark text-white font-bold text-[0.88rem] px-5 py-[10px] rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(244,124,32,0.45)]"
            >
              Free Estimate
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 rounded-md hover:bg-white/8 transition-colors duration-300 min-w-[44px] min-h-[44px] items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span
              className="block w-6 h-[2px] bg-white rounded-sm transition-all duration-300"
              style={{ transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block w-6 h-[2px] bg-white rounded-sm transition-all duration-300"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-[2px] bg-white rounded-sm transition-all duration-300"
              style={{ transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ background: 'var(--primary)', borderTop: '1px solid rgba(255,255,255,0.08)' }}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {NAV_ITEMS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => { scrollToSection(id); setMobileOpen(false); }}
              className="text-white/80 hover:text-white hover:bg-white/8 text-[0.95rem] font-medium py-3 px-4 rounded-lg text-left transition-all duration-300 min-h-[44px]"
            >
              {label}
            </button>
          ))}
          <a
            href="tel:+14087710169"
            className="flex items-center justify-center gap-2 mt-2 border-2 border-white/30 hover:border-white text-white font-bold text-[0.92rem] py-3 px-6 rounded-lg transition-all duration-300 min-h-[44px]"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            +1 (408) 771-0169
          </a>
          <button
            onClick={() => { scrollToSection('contact'); setMobileOpen(false); }}
            className="bg-accent hover:bg-accent-dark text-white font-bold text-[0.92rem] py-3 px-6 rounded-lg transition-all duration-300 min-h-[44px]"
          >
            Get Free Estimate
          </button>
        </div>
      </div>
    </header>
  );
}