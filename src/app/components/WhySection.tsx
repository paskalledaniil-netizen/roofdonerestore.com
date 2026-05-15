import React from 'react';

const WHY_CARDS = [
  {
    icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z',
    title: 'Licensed & Insured',
    desc: 'Fully licensed, bonded, and insured in every state we operate. Your property is always protected.',
    delay: 0.05,
  },
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Fast Response',
    desc: 'Storm damage doesn\'t wait — neither do we. Emergency response available 24/7 for urgent situations.',
    delay: 0.1,
  },
  {
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    title: 'Experienced Team',
    desc: '17+ years of combined expertise. Our certified crews have completed over 2,400 successful projects.',
    delay: 0.15,
  },
  {
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    title: 'Free Inspections',
    desc: 'No cost, no commitment. We inspect your roof and provide a detailed report before any work begins.',
    delay: 0.05,
  },
  {
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'Warranty Included',
    desc: 'Every project comes with a 5-year workmanship guarantee plus manufacturer\'s limited lifetime warranty.',
    delay: 0.1,
  },
];

export default function WhySection() {
  return (
    <section
      id="why"
      className="py-24 bg-primary relative overflow-hidden"
      aria-labelledby="why-heading"
    >
      {/* Decorative radial glow */}
      <div
        className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(244,124,32,0.08) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-6 relative z-[1]">
        {/* Header */}
        <div className="text-center mb-14 reveal" data-reveal>
          <span className="section-tag section-tag-light">Why Choose Us</span>
          <h2
            id="why-heading"
            className="font-display text-[clamp(1.8rem,3.5vw,2.7rem)] font-black text-white leading-[1.2] mb-4"
          >
            The <span className="text-accent">RoofDoneRestore</span> Difference
          </h2>
          <p className="text-[1.02rem] text-white/60 max-w-[580px] mx-auto leading-[1.7]">
            We don&apos;t just fix roofs — we deliver peace of mind backed by credentials, experience, and a warranty you can hold us to.
          </p>
        </div>

        {/* Why Cards Grid */}
        {/* BENTO AUDIT: 5 cards, 5 cols desktop / 3 cols tablet / 2 cols mobile */}
        {/* Row 1: [Licensed cs-1] [FastResponse cs-1] [Experienced cs-1] [FreeInspections cs-1] [Warranty cs-1] */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {WHY_CARDS?.map(({ icon, title, desc, delay }) => (
            <div
              key={title}
              className="why-card-border relative bg-white/4 border border-white/8 rounded-xl p-8 text-center hover:bg-white/7 hover:border-accent/25 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden reveal"
              data-reveal
              style={{ transitionDelay: `${delay}s` }}
            >
              <div
                className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center mx-auto mb-5 transition-colors duration-300"
                style={{ background: 'rgba(244,124,32,0.12)' }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-accent">
                  <path d={icon} />
                </svg>
              </div>
              <h3 className="font-display text-[0.93rem] font-bold text-white mb-2.5 leading-[1.3]">
                {title}
              </h3>
              <p className="text-[0.8rem] text-white/50 leading-[1.6]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}