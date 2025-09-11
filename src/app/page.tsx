import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Results from '@/components/sections/Results';
import WhyUs from '@/components/sections/WhyUs';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Results />
      <WhyUs />
      <Contact />
    </div>
  );
}
