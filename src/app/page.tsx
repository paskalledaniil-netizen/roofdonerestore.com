import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import TrustBar from './components/TrustBar';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhySection from './components/WhySection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import ScrollReveal from './components/ScrollReveal';

export default function HomePage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* 1. Hero — Cinematic full-bleed with dual CTA */}
        <HeroSection />

        {/* 2. Trust Bar — Orange strip with 5 trust signals */}
        <TrustBar />

        {/* 3. About — Split layout with image + company story */}
        <AboutSection />

        {/* 4. Services — 3-col grid with images and CTA card */}
        <ServicesSection />

        {/* 5. Why Choose Us — Dark navy 5-card grid */}
        <WhySection />

        {/* 6. Testimonials — 3-col grid with spanning card */}
        <TestimonialsSection />

        {/* 7. Contact — Split layout with form and clickable contacts */}
        <ContactSection />
      </main>

      <Footer />

      {/* Scroll reveal observer — client component, no UI */}
      <ScrollReveal />
    </>
  );
}