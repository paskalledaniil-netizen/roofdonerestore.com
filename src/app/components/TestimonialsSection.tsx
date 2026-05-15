'use client';

import React, { useCallback } from 'react';

interface Review {
  text: string;
  name: string;
  location: string;
  initials: string;
  avatarBg: string;
  span?: boolean;
  delay: number;
}

const REVIEWS: Review[] = [
  {
    text: 'After a major hailstorm, I didn\'t know where to start. RoofDoneRestore handled everything — the inspection, the insurance claim, and the full replacement. The crew was professional, fast, and my new roof looks incredible. Couldn\'t be happier!',
    name: 'Michael R.',
    location: 'Homeowner · San Jose, CA',
    initials: 'MR',
    avatarBg: '#1e3d5c',
    delay: 0.05,
  },
  {
    text: 'Sara and the team were absolutely amazing. They responded within hours of my call, assessed the storm damage the same day, and had my roof repaired within the week. The insurance claim process was seamless — they handled all the paperwork!',
    name: 'Jennifer L.',
    location: 'Homeowner · Santa Clara, CA',
    initials: 'JL',
    avatarBg: '#f47c20',
    delay: 0.1,
  },
  {
    text: 'I was skeptical at first, but RoofDoneRestore exceeded every expectation. They found damage my insurance company missed, documented it properly, and got me a much better settlement. The new roof is beautiful and the 5-year warranty gives me real peace of mind.',
    name: 'David K.',
    location: 'Property Owner · Fremont, CA',
    initials: 'DK',
    avatarBg: '#162d4a',
    delay: 0.15,
  },
  {
    text: 'Hired them for a full gutter replacement after the old ones were destroyed in a storm. The team arrived on time, worked cleanly, and finished ahead of schedule. The gutters look great and the price was very fair. Will definitely use them again.',
    name: 'Amanda T.',
    location: 'Homeowner · Milpitas, CA',
    initials: 'AT',
    avatarBg: '#1e3d5c',
    delay: 0.05,
  },
  {
    text: 'As a commercial property manager, I\'ve worked with many contractors over the years. RoofDoneRestore stands out for their professionalism, communication, and quality of work. They replaced the roof on our 12-unit building on time and on budget, and their insurance claim expertise saved us thousands. Highly recommend for both residential and commercial projects.',
    name: 'Robert P.',
    location: 'Commercial Property Manager · Sunnyvale, CA',
    initials: 'RP',
    avatarBg: '#f47c20',
    span: true,
    delay: 0.1,
  },
];

const StarIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" style={{ fill: '#f5a623' }} aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

function ReviewCard({ review }: { review: Review }) {
  return (
    <article
      className={`review-quote relative bg-background rounded-xl p-8 border border-border hover:-translate-y-1.5 hover:shadow-md hover:border-accent/20 transition-all duration-300 reveal ${review.span ? 'md:col-span-2' : ''}`}
      data-reveal
      style={{ transitionDelay: `${review.delay}s` }}
      aria-label={`Review from ${review.name}`}
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-4" role="img" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
      </div>

      {/* Quote text */}
      <p className="text-[0.91rem] text-muted-foreground leading-[1.75] mb-6 italic">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Reviewer */}
      <div className="flex items-center gap-3.5">
        <div
          className="w-[46px] h-[46px] rounded-full flex items-center justify-center font-display text-[0.95rem] font-black text-white flex-shrink-0"
          style={{ background: review.avatarBg }}
          aria-hidden="true"
        >
          {review.initials}
        </div>
        <div>
          <strong className="block text-[0.9rem] font-bold text-foreground">
            {review.name}
          </strong>
          <span className="text-[0.76rem] text-muted-foreground">
            {review.location}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerEl = document.getElementById('site-header');
    const headerH = headerEl ? headerEl.offsetHeight : 72;
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerH;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  return (
    <section id="reviews" className="py-24 bg-card" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14 reveal" data-reveal>
          <span className="section-tag">Customer Reviews</span>
          <h2
            id="reviews-heading"
            className="font-display text-[clamp(1.8rem,3.5vw,2.7rem)] font-black text-foreground leading-[1.2] mb-4"
          >
            What Our <span className="text-accent">Clients Say</span>
          </h2>
          <p className="text-[1.02rem] text-muted-foreground max-w-[560px] mx-auto leading-[1.7]">
            Real stories from real homeowners who trusted us with their most important investment.
          </p>
        </div>

        {/* Reviews Grid */}
        {/* BENTO AUDIT: 5 cards, 3 cols */}
        {/* Row 1: [Michael cs-1] [Jennifer cs-1] [David cs-1] */}
        {/* Row 2: [Amanda cs-1] [Robert cs-2] */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal" data-reveal>
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold text-[1rem] px-9 py-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(244,124,32,0.45)] shadow-[0_4px_20px_rgba(244,124,32,0.25)]"
            aria-label="Get a free estimate"
          >
            Join Our Happy Customers — Get Free Estimate
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}