'use client';

import React, { useCallback } from 'react';
import AppImage from '@/components/ui/AppImage';

const ABOUT_LIST = [
{
  icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z',
  title: 'Insurance Claim Specialists',
  desc: 'We work directly with your insurance provider so you don\'t have to navigate the process alone.'
},
{
  icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  title: 'Storm Damage Experts',
  desc: 'Hail, wind, lightning, or flooding — we assess, document, and restore your property fast.'
},
{
  icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  title: 'Certified & Warranted Work',
  desc: 'GAF and Owens Corning certified with a 5-year workmanship guarantee on every project.'
},
{
  icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  title: 'Family-Owned & Operated',
  desc: 'Every project is personal to us. We treat your home the way we\'d treat our own.'
}];


export default function AboutSection() {
  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerEl = document.getElementById('site-header');
    const headerH = headerEl ? headerEl.offsetHeight : 72;
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerH;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  return (
    <section id="about" className="py-24 bg-card" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[72px] items-center">

          {/* Image Column */}
          <div className="relative reveal" data-reveal>
            <div className="relative">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_123d2238a-1773431638523.png"
                alt="Professional roofer in safety gear working on residential roof replacement, bright daylight, suburban neighborhood visible below"
                width={700}
                height={480}
                className="w-full object-cover rounded-xl shadow-lg about-img-hover"
                style={{ height: '480px' }}
                loading="lazy"
                unoptimized />
              
              {/* Badge overlay */}
              <div
                className="absolute -bottom-6 -right-6 bg-primary text-white rounded-xl px-6 py-5 shadow-md text-center min-w-[140px]"
                aria-label="17 plus years of excellence">
                
                <strong className="block font-display text-[2.2rem] font-black text-accent leading-none">
                  17+
                </strong>
                <span className="text-[0.75rem] text-white/70 font-medium leading-snug">
                  Years of
                  <br />Excellence
                </span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="reveal" data-reveal style={{ transitionDelay: '0.15s' }}>
            <span className="section-tag">About Us</span>
            <h2
              id="about-heading"
              className="font-display text-[clamp(1.8rem,3.5vw,2.7rem)] font-black text-foreground leading-[1.2] mb-4">
              
              Your Trusted{' '}
              <span className="text-accent">Roofing &amp; Restoration</span>{' '}
              Partner
            </h2>
            <p className="text-[1.02rem] text-muted-foreground leading-[1.7] mb-8 max-w-[560px]">
              Since 2007, RoofDoneRestore has been the region&apos;s most reliable roofing and storm damage restoration contractor. We&apos;re a family-owned business built on integrity, craftsmanship, and a commitment to making the insurance claim process stress-free for every homeowner.
            </p>

            {/* List */}
            <ul className="flex flex-col gap-4 mb-10" aria-label="Key services and values">
              {ABOUT_LIST.map(({ icon, title, desc }) =>
              <li key={title} className="flex items-start gap-4">
                  <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'var(--accent-glow)' }}
                  aria-hidden="true">
                  
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-accent">
                      <path d={icon} />
                    </svg>
                  </div>
                  <p className="text-[0.93rem] text-muted-foreground leading-[1.6]">
                    <strong className="text-foreground font-semibold">{title}</strong>
                    {' '}— {desc}
                  </p>
                </li>
              )}
            </ul>

            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold text-[0.95rem] px-7 py-[14px] rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(244,124,32,0.4)] shadow-[0_4px_20px_rgba(244,124,32,0.25)]"
              aria-label="Schedule a free roof inspection">
              
              Schedule Free Inspection
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>);

}