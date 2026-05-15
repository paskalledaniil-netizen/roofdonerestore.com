'use client';

import React, { useCallback } from 'react';
import AppImage from '@/components/ui/AppImage';

const HERO_STATS = [
{ value: '17+', label: 'Years Experience' },
{ value: '2,400+', label: 'Projects Done' },
{ value: '5★', label: 'Avg Rating' },
{ value: '100%', label: 'Insured Work' }];


export default function HeroSection() {
  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerEl = document.getElementById('site-header');
    const headerH = headerEl ? headerEl.offsetHeight : 72;
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerH;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-primary"
      aria-label="Hero section">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 animate-hero-scale">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_11a7e93a5-1773172935737.png"
          alt="Roofing crew working on residential roof replacement on a sunny day, dark steel shingles, wide suburban neighborhood background"
          fill
          priority
          className="object-cover object-center"
          style={{ opacity: 0.28 }}
          unoptimized />
        
      </div>

      {/* Gradient Overlay — ensures white text contrast */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(135deg, rgba(13,31,53,0.92) 0%, rgba(13,31,53,0.78) 55%, rgba(13,31,53,0.58) 100%)'
        }}
        aria-hidden="true" />
      

      {/* Content */}
      <div className="relative z-[2] max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-[720px] py-32 md:py-36">

          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/35 text-accent text-[0.78rem] font-bold tracking-[0.1em] uppercase px-[18px] py-2 rounded-full mb-7 animate-fade-in-up">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse-dot flex-shrink-0" aria-hidden="true" />
            Licensed &amp; Insured · Since 2007
          </div>

          {/* Headline */}
          <h1 className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-black text-white leading-[1.1] mb-6 animate-fade-in-up-delay-1">
            Expert Roofing &amp;
            <br />
            <span className="text-accent accent-underline">Storm Restoration</span>
            <br />
            You Can Trust
          </h1>

          {/* Description */}
          <p className="text-[1.08rem] text-white/78 leading-[1.75] mb-10 max-w-[580px] animate-fade-in-up-delay-2">
            From emergency roof repairs to full insurance claim restorations — we protect your home with speed, precision, and a warranty you can count on.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-in-up-delay-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold text-[1rem] px-8 py-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(244,124,32,0.45)] shadow-[0_4px_20px_rgba(244,124,32,0.35)]"
              aria-label="Get a free estimate">
              
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white flex-shrink-0" aria-hidden="true">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Get Free Estimate
            </button>
            <a
              href="tel:+14087710169"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/60 hover:border-white hover:bg-white/12 text-white font-bold text-[1rem] px-8 py-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
              aria-label="Call us now at +1 408 771 0169">
              
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current flex-shrink-0" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Call Now
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 animate-fade-in-up-delay-4">
            {HERO_STATS.map(({ value, label }) =>
            <div key={label} className="text-left">
                <strong className="block font-display text-[2rem] font-black text-accent leading-none">
                  {value}
                </strong>
                <span className="text-[0.8rem] text-white/60 font-medium uppercase tracking-[0.06em]">
                  {label}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-[0.7rem] tracking-[0.1em] uppercase animate-fade-in-delay-5 hover:text-white/60 transition-colors duration-300 cursor-pointer"
        onClick={() => scrollToSection('about')}
        aria-label="Scroll down">
        
        <div className="w-7 h-11 border-2 border-white/25 rounded-[14px] flex items-start justify-center pt-1.5">
          <span
            className="w-1 h-2 bg-accent rounded-sm animate-scroll-bounce block"
            aria-hidden="true" />
          
        </div>
        <span>Scroll</span>
      </button>
    </section>);

}