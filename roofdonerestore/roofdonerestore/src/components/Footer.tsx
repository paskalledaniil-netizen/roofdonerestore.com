'use client';

import React, { useCallback } from 'react';

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About Us', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Why Choose Us', id: 'why' },
  { label: 'Reviews', id: 'reviews' },
  { label: 'Contact', id: 'contact' },
];

const serviceLinks = [
  { label: 'Roof Repair', id: 'services' },
  { label: 'Roof Replacement', id: 'services' },
  { label: 'Storm Damage Restoration', id: 'services' },
  { label: 'Gutter Installation', id: 'services' },
  { label: 'Insurance Claims', id: 'services' },
  { label: 'Free Inspection', id: 'contact' },
];

export default function Footer() {
  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerEl = document.getElementById('site-header');
    const headerH = headerEl ? headerEl.offsetHeight : 72;
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerH;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  return (
    <footer className="bg-primary border-t border-white/5" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-0">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3 mb-5 group"
              aria-label="Scroll to top"
            >
              <div className="w-10 h-10 bg-accent rounded-[10px] flex items-center justify-center group-hover:bg-accent-dark transition-colors duration-300 flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
                  <path d="M3 12L12 3l9 9v9H3V12zm2 1v7h14v-7l-7-7-7 7z"/>
                </svg>
              </div>
              <div className="leading-tight">
                <strong className="block font-display text-[1rem] font-bold text-white tracking-tight">
                  RoofDoneRestore
                </strong>
                <span className="text-[0.65rem] text-accent font-semibold tracking-[0.08em] uppercase">
                  Roofing &amp; Restoration
                </span>
              </div>
            </button>
            <p className="text-[0.87rem] text-white/50 leading-relaxed mb-6">
              Your trusted partner for roofing, storm damage restoration, and insurance claim assistance. Licensed, bonded, and insured since 2007.
            </p>
            <div className="flex gap-2">
              {[
                { label: 'Facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                { label: 'Instagram', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01', isRect: true },
                { label: 'Google', path: 'M21.35 11.1H12.18V13.83H18.69C18.36 17.64 15.19 19.27 12.19 19.27C8.36 19.27 5 16.25 5 12C5 7.9 8.2 4.73 12.2 4.73C15.29 4.73 17.1 6.7 17.1 6.7L19 4.72C19 4.72 16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12C2.03 17.05 6.16 22 12.25 22C17.6 22 21.5 18.33 21.5 12.91C21.5 11.76 21.35 11.1 21.35 11.1Z' },
              ].map(({ label, path, isRect }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 bg-white/6 border border-white/8 rounded-lg flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-white/70 hover:stroke-white" strokeWidth={isRect ? 1.5 : 0} fill="none" aria-hidden="true">
                    {isRect && <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={1.5}/>}
                    <path d={path} fill={isRect ? 'none' : 'rgba(255,255,255,0.7)'} strokeWidth={isRect ? 1.5 : 0}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[0.82rem] font-bold text-white uppercase tracking-[0.1em] mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-[10px]">
              {quickLinks.map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-[0.87rem] text-white/50 hover:text-accent transition-colors duration-300 text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[0.82rem] font-bold text-white uppercase tracking-[0.1em] mb-5">
              Services
            </h3>
            <ul className="flex flex-col gap-[10px]">
              {serviceLinks.map(({ label, id }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-[0.87rem] text-white/50 hover:text-accent transition-colors duration-300 text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[0.82rem] font-bold text-white uppercase tracking-[0.1em] mb-5">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4">
              <a href="tel:+14087710169" className="flex items-start gap-3 group">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-accent flex-shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                <span className="text-[0.86rem] text-white/55 group-hover:text-accent transition-colors duration-300">
                  +1 (408) 771-0169
                </span>
              </a>
              <a href="mailto:sara@roofdonerestore.com" className="flex items-start gap-3 group">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-accent flex-shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <path d="M22 6L12 13 2 6" fill="none" stroke="var(--accent)" strokeWidth="1.5"/>
                </svg>
                <span className="text-[0.86rem] text-white/55 group-hover:text-accent transition-colors duration-300 break-all">
                  sara@roofdonerestore.com
                </span>
              </a>
              <div className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-accent flex-shrink-0 mt-0.5" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2" fill="none" stroke="var(--primary)" strokeWidth="1.5"/>
                </svg>
                <span className="text-[0.86rem] text-white/55 leading-relaxed">
                  Mon–Fri: 7:00 AM – 7:00 PM
                  <br />Sat–Sun: Emergency Only
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/7 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 flex-wrap">
          <p className="text-[0.78rem] text-white/35">
            © 2026 RoofDoneRestore. All rights reserved. Licensed &amp; Insured.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[0.78rem] text-white/35 hover:text-accent transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}