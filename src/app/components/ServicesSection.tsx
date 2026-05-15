'use client';

import React, { useCallback } from 'react';
import AppImage from '@/components/ui/AppImage';

interface ServiceCardData {
  img: string;
  alt: string;
  icon: string;
  title: string;
  desc: string;
  delay: number;
}

const SERVICES: ServiceCardData[] = [
{
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_183b358e2-1773003522601.png",
  alt: 'Roofer replacing asphalt shingles on sloped residential roof, bright sunny conditions, tools and materials visible',
  icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10',
  title: 'Roof Repair',
  desc: 'Fast, reliable repairs for leaks, missing shingles, flashing failures, and storm damage. We restore your roof\'s integrity before small issues become major problems.',
  delay: 0.05
},
{
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_12ec4a5ec-1773250956166.png",
  alt: 'New roof installation in progress on modern suburban home, workers laying dark architectural shingles, clear blue sky',
  icon: 'M2 20h20M4 20V10l8-8 8 8v10',
  title: 'Roof Replacement',
  desc: 'Complete roof replacement using premium GAF and Owens Corning materials. We handle everything from tear-off to final inspection with minimal disruption.',
  delay: 0.1
},
{
  img: "https://images.unsplash.com/photo-1704822899786-8a29aed00031",
  alt: 'Storm damaged roof showing hail impact marks on shingles, overcast sky, visible damage documentation for insurance claim',
  icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  title: 'Storm Damage Restoration',
  desc: 'Rapid response to hail, wind, and flood damage. We document all damage thoroughly to support your insurance claim and restore your property to pre-storm condition.',
  delay: 0.15
},
{
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1e16450ae-1772128396786.png",
  alt: 'New seamless gutter installation on residential home exterior, aluminum gutters with downspout, clean siding visible',
  icon: 'M3 6h18M3 12h18M3 18h18',
  title: 'Gutter Installation',
  desc: 'Seamless gutter systems designed to protect your foundation and landscaping. Custom-fitted to your home with durable materials and professional installation.',
  delay: 0.05
},
{
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_16487e85a-1772083479313.png",
  alt: 'Insurance claim documents and clipboard on desk with pen, professional office setting, paperwork being reviewed',
  icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  title: 'Insurance Claim Assistance',
  desc: 'We navigate the insurance process with you — from initial damage assessment and documentation to working directly with your adjuster for maximum claim approval.',
  delay: 0.1
}];


function ServiceCard({ img, alt, icon, title, desc, delay, onGetQuote }: ServiceCardData & {onGetQuote: () => void;}) {
  return (
    <article
      className="service-card-hover bg-card rounded-xl border border-border hover:-translate-y-2 hover:shadow-lg hover:border-accent/20 transition-all duration-300 overflow-hidden"
      style={{ transitionDelay: `${delay}s` }}>
      
      <div className="service-img-wrap h-[200px]">
        <AppImage
          src={img}
          alt={alt}
          width={600}
          height={200}
          className="w-full h-full object-cover"
          loading="lazy"
          unoptimized />
        
      </div>
      <div className="p-7">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group"
          style={{ background: 'var(--accent-glow)' }}
          aria-hidden="true">
          
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-accent">
            <path d={icon} />
          </svg>
        </div>
        <h3 className="font-display text-[1.12rem] font-bold text-foreground mb-2.5">{title}</h3>
        <p className="text-[0.88rem] text-muted-foreground leading-[1.65]">{desc}</p>
        <button
          onClick={onGetQuote}
          className="inline-flex items-center gap-1.5 mt-4 text-[0.83rem] font-bold text-accent hover:gap-3 transition-all duration-300"
          aria-label={`Get a quote for ${title}`}>
          
          Get a Quote
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-accent" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </article>);

}

export default function ServicesSection() {
  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerEl = document.getElementById('site-header');
    const headerH = headerEl ? headerEl.offsetHeight : 72;
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerH;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  return (
    <section id="services" className="py-24 bg-background" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14 reveal" data-reveal>
          <span className="section-tag">What We Do</span>
          <h2
            id="services-heading"
            className="font-display text-[clamp(1.8rem,3.5vw,2.7rem)] font-black text-foreground leading-[1.2] mb-4">
            
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-[1.02rem] text-muted-foreground max-w-[580px] mx-auto leading-[1.7]">
            Comprehensive roofing and restoration solutions — from minor repairs to full insurance claim restorations.
          </p>
        </div>

        {/* Grid: 5 service cards + 1 CTA card */}
        {/* BENTO AUDIT: 6 cells, 3 cols, 2 rows — all filled */}
        {/* Row 1: [RoofRepair cs-1] [RoofReplacement cs-1] [StormDamage cs-1] */}
        {/* Row 2: [GutterInstall cs-1] [InsuranceClaim cs-1] [CTACard cs-1] */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((service) =>
          <div
            key={service.title}
            className="reveal"
            data-reveal
            style={{ transitionDelay: `${service.delay}s` }}>
            
              <ServiceCard {...service} onGetQuote={() => scrollToSection('contact')} />
            </div>
          )}

          {/* CTA Card — col 6 */}
          <div className="reveal" data-reveal style={{ transitionDelay: '0.15s' }}>
            <div className="bg-primary rounded-xl border border-primary h-full flex flex-col justify-center items-center text-center p-10 min-h-[380px]">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ background: 'rgba(244,124,32,0.15)' }}
                aria-hidden="true">
                
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-accent">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
              </div>
              <h3 className="font-display text-[1.18rem] font-bold text-white mb-3">
                Not Sure What You Need?
              </h3>
              <p className="text-[0.87rem] text-white/55 leading-[1.65] mb-6 max-w-[220px]">
                Get a free, no-obligation inspection and we&apos;ll tell you exactly what your roof needs.
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-accent hover:bg-accent-dark text-white font-bold text-[0.9rem] px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(244,124,32,0.45)]"
                aria-label="Book a free roof inspection">
                
                Book Free Inspection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

}