'use client';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Results from '@/components/sections/Results';
import WhyUs from '@/components/sections/WhyUs';
import Contact from '@/components/sections/Contact';
import TestimonialBanner from '@/components/ui/Banner';

export default function Home() {
  return (
    <div>
      <Hero />
      <TestimonialBanner />
      <Services />
      <Results />
      <WhyUs />
      <Contact />
    </div>
  );
}
