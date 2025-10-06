import StackingCards from '@/components/ui/stacking-cards';
import Image from 'next/image';

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-natural-white to-pink-lavender/10 relative min-h-[250vh]">
      {/* Background decoration images */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left side decorations - extending off screen */}
        <Image
          src="/images/decoration.png"
          alt="Decorative pattern"
          width={400}
          height={400}
          className="absolute -left-32 opacity-15"
          style={{ transform: 'scale(1.33)', top: '20vh' }}
        />
        
        <Image
          src="/images/decoration.png"
          alt=""
          width={350}
          height={350}
          className="absolute -left-20 opacity-12"
          style={{ transform: 'scale(1.33) rotate(-45deg) scaleX(-1)', top: '100vh' }}
        />
        
        <Image
          src="/images/decoration.png"
          alt=""
          width={320}
          height={320}
          className="absolute -left-24 opacity-10"
          style={{ transform: 'scale(1.33) rotate(-30deg)', top: '200vh' }}
        />
        
        <Image
          src="/images/decoration.png"
          alt=""
          width={380}
          height={380}
          className="absolute -left-28 opacity-13"
          style={{ transform: 'scale(1.33) rotate(120deg) scaleY(-1)', top: '350vh' }}
        />
        
        {/* Right side decorations - extending off screen */}
        <Image
          src="/images/decoration.png"
          alt=""
          width={400}
          height={400}
          className="absolute -right-32 opacity-15"
          style={{ transform: 'scale(1.33) rotate(45deg)', top: '60vh' }}
        />
        
        <Image
          src="/images/decoration.png"
          alt=""
          width={350}
          height={350}
          className="absolute -right-20 opacity-11"
          style={{ transform: 'scale(1.33) rotate(90deg) scaleX(-1)', top: '150vh' }}
        />
        
        <Image
          src="/images/decoration.png"
          alt=""
          width={370}
          height={370}
          className="absolute -right-26 opacity-12"
          style={{ transform: 'scale(1.33) rotate(15deg)', top: '280vh' }}
        />
        
        <Image
          src="/images/decoration.png"
          alt=""
          width={340}
          height={340}
          className="absolute -right-18 opacity-10"
          style={{ transform: 'scale(1.33) rotate(-60deg) scaleY(-1)', top: '400vh' }}
        />
        
        {/* Subtle center decorations for depth */}
        <Image
          src="/images/decoration.png"
          alt=""
          width={250}
          height={250}
          className="absolute left-1/4 opacity-8"
          style={{ transform: 'scale(1.33) rotate(75deg)', top: '120vh' }}
        />
        
        <Image
          src="/images/decoration.png"
          alt=""
          width={280}
          height={280}
          className="absolute right-1/3 opacity-8"
          style={{ transform: 'scale(1.33) rotate(-105deg) scaleX(-1)', top: '320vh' }}
        />
      </div>

      {/* Fade-out overlay at bottom to blend with Results section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(254,254,254,0) 0%, rgba(254,254,254,0.3) 40%, rgba(254,254,254,0.7) 70%, rgba(254,254,254,1) 100%)'
      }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-young-serif text-space-cadet text-5xl font-bold mb-6">
            Our Services
          </h2>
          <p className="font-bagnard text-space-cadet text-xl max-w-3xl mx-auto leading-relaxed">
            Experience precision laser treatments designed to enhance your natural beauty 
            and restore your confidence with our state-of-the-art technology.
          </p>
        </div>

        {/* Stacking Cards */}
        <StackingCards />
      </div>
    </section>
  );
}
