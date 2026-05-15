'use client';

import React, { useState, useCallback } from 'react';

type FormState = 'idle' | 'sending' | 'sent';

const SERVICE_OPTIONS = [
  'Roof Repair',
  'Roof Replacement',
  'Storm Damage Restoration',
  'Gutter Installation',
  'Insurance Claim Assistance',
  'Free Inspection',
  'Other',
];

export default function ContactSection() {
  const [formState, setFormState] = useState<FormState>('idle');

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('sent');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setFormState('idle'), 5000);
    }, 1800);
  }, []);

  return (
    <section id="contact" className="py-24 bg-background" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Contact Info */}
          <div className="reveal" data-reveal>
            <span className="section-tag">Get In Touch</span>
            <h2
              id="contact-heading"
              className="font-display text-[clamp(1.8rem,3.5vw,2.7rem)] font-black text-foreground leading-[1.2] mb-4"
            >
              Ready to <span className="text-accent">Protect Your Roof?</span>
            </h2>
            <p className="text-[1.02rem] text-muted-foreground leading-[1.7] mb-10 max-w-[480px]">
              Contact us today for a free, no-obligation inspection. Our team responds within hours — not days.
            </p>

            {/* Phone */}
            <a
              href="tel:+14087710169"
              className="contact-detail-item flex items-center gap-4 p-5 bg-card rounded-xl mb-4 border border-border hover:border-accent hover:shadow-sm"
              aria-label="Call us at +1 408 771 0169"
            >
              <div
                className="w-12 h-12 rounded-[10px] flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--accent-glow)' }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-accent">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
              </div>
              <div>
                <strong className="block text-[0.76rem] font-bold text-muted-foreground uppercase tracking-[0.08em] mb-0.5">
                  Phone
                </strong>
                <span className="text-[1rem] font-semibold text-foreground">
                  +1 (408) 771-0169
                </span>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:sara@roofdonerestore.com"
              className="contact-detail-item flex items-center gap-4 p-5 bg-card rounded-xl mb-8 border border-border hover:border-accent hover:shadow-sm"
              aria-label="Email us at sara@roofdonerestore.com"
            >
              <div
                className="w-12 h-12 rounded-[10px] flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--accent-glow)' }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-none" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="var(--accent)"/>
                  <path d="M22 6L12 13 2 6" stroke="white" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <div>
                <strong className="block text-[0.76rem] font-bold text-muted-foreground uppercase tracking-[0.08em] mb-0.5">
                  Email
                </strong>
                <span className="text-[1rem] font-semibold text-foreground break-all">
                  sara@roofdonerestore.com
                </span>
              </div>
            </a>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+14087710169"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold text-[0.92rem] px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(244,124,32,0.4)] min-h-[44px]"
                aria-label="Call us now"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                Call Now
              </a>
              <a
                href="mailto:sara@roofdonerestore.com"
                className="inline-flex items-center gap-2 bg-primary hover:bg-navy-mid text-white font-bold text-[0.92rem] px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md min-h-[44px]"
                aria-label="Send us an email"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <path d="M22 6L12 13 2 6" fill="none" stroke="white" strokeWidth="1.5"/>
                </svg>
                Send Email
              </a>
            </div>
          </div>

          {/* Form */}
          <div
            className="bg-card rounded-xl p-10 shadow-md border border-border reveal"
            data-reveal
            style={{ transitionDelay: '0.15s' }}
          >
            <h3 className="font-display text-[1.35rem] font-bold text-foreground mb-2">
              Get Your Free Estimate
            </h3>
            <p className="text-[0.87rem] text-muted-foreground mb-7">
              Fill out the form below and we&apos;ll get back to you within 2 hours.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="fname" className="block text-[0.8rem] font-semibold text-foreground mb-1.5 tracking-[0.02em]">
                    First Name <span className="text-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="John"
                    required
                    className="w-full px-4 py-3 border-[1.5px] border-border rounded-lg text-[0.91rem] text-foreground bg-background focus:border-accent focus:bg-card focus:shadow-[0_0_0_3px_rgba(244,124,32,0.12)] outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="lname" className="block text-[0.8rem] font-semibold text-foreground mb-1.5 tracking-[0.02em]">
                    Last Name <span className="text-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Smith"
                    required
                    className="w-full px-4 py-3 border-[1.5px] border-border rounded-lg text-[0.91rem] text-foreground bg-background focus:border-accent focus:bg-card focus:shadow-[0_0_0_3px_rgba(244,124,32,0.12)] outline-none transition-all duration-300"
                  />
                </div>
              </div>

              {/* Email + Phone row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-[0.8rem] font-semibold text-foreground mb-1.5 tracking-[0.02em]">
                    Email Address <span className="text-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 border-[1.5px] border-border rounded-lg text-[0.91rem] text-foreground bg-background focus:border-accent focus:bg-card focus:shadow-[0_0_0_3px_rgba(244,124,32,0.12)] outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[0.8rem] font-semibold text-foreground mb-1.5 tracking-[0.02em]">
                    Phone Number <span className="text-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 (408) 000-0000"
                    required
                    className="w-full px-4 py-3 border-[1.5px] border-border rounded-lg text-[0.91rem] text-foreground bg-background focus:border-accent focus:bg-card focus:shadow-[0_0_0_3px_rgba(244,124,32,0.12)] outline-none transition-all duration-300"
                  />
                </div>
              </div>

              {/* Service */}
              <div className="mb-4">
                <label htmlFor="service" className="block text-[0.8rem] font-semibold text-foreground mb-1.5 tracking-[0.02em]">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border-[1.5px] border-border rounded-lg text-[0.91rem] text-foreground bg-background focus:border-accent focus:bg-card focus:shadow-[0_0_0_3px_rgba(244,124,32,0.12)] outline-none transition-all duration-300 appearance-none"
                >
                  <option value="">Select a service...</option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-[0.8rem] font-semibold text-foreground mb-1.5 tracking-[0.02em]">
                  Tell Us About Your Project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Describe the damage or work needed, your address, and any relevant details..."
                  className="w-full px-4 py-3 border-[1.5px] border-border rounded-lg text-[0.91rem] text-foreground bg-background focus:border-accent focus:bg-card focus:shadow-[0_0_0_3px_rgba(244,124,32,0.12)] outline-none transition-all duration-300 resize-y min-h-[110px]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={formState !== 'idle'}
                className={`w-full flex items-center justify-center gap-2 font-bold text-[1rem] py-4 rounded-lg transition-all duration-300 min-h-[52px] ${
                  formState === 'sent' ?'bg-green-500 text-white cursor-default' :'bg-accent hover:bg-accent-dark text-white hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(244,124,32,0.4)]'
                }`}
                aria-label="Submit free estimate request"
              >
                {formState === 'idle' && (
                  <>
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white" aria-hidden="true">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                    </svg>
                    Send My Free Estimate Request
                  </>
                )}
                {formState === 'sending' && (
                  <>
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white animate-spin-icon" aria-hidden="true">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                    </svg>
                    Sending...
                  </>
                )}
                {formState === 'sent' && '✅ Request Sent! We\'ll contact you within 2 hours.'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}