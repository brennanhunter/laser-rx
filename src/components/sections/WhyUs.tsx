import { Zap, UserCheck, Target, Shield, Star, Building2 } from 'lucide-react';

interface WhyUsFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const features: WhyUsFeature[] = [
  {
    id: 'advanced-technology',
    title: 'Advanced Technology',
    description: 'State-of-the-art laser systems including Allegra Laser and TrimLaze, FDA-cleared for safe and effective treatments.',
    icon: Zap
  },
  {
    id: 'experienced-professionals',
    title: 'Experienced Professionals',
    description: 'Our certified technicians have years of experience delivering precise, comfortable treatments with exceptional results.',
    icon: UserCheck
  },
  {
    id: 'personalized-care',
    title: 'Personalized Treatment Plans',
    description: 'Every treatment is customized to your unique skin type, concerns, and goals for optimal results.',
    icon: Target
  },
  {
    id: 'safety-first',
    title: 'Safety First',
    description: 'Comprehensive consultations, patch testing, and strict safety protocols ensure your comfort and wellbeing.',
    icon: Shield
  },
  {
    id: 'proven-results',
    title: 'Proven Results',
    description: 'Thousands of satisfied patients have achieved their aesthetic goals with our award-winning treatments.',
    icon: Star
  },
  {
    id: 'comprehensive-services',
    title: 'Comprehensive Services',
    description: 'From hair removal to skin rejuvenation to body contouring - all your aesthetic needs under one roof.',
    icon: Building2
  }
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-space-cadet">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-young-serif text-natural-white text-5xl font-bold mb-6">
            Why Choose Laser RX?
          </h2>
          <p className="font-bagnard text-natural-white text-xl max-w-3xl mx-auto leading-relaxed">
            Experience the difference that expertise, technology, and personalized care make. 
            We&apos;re committed to delivering exceptional results in a safe, comfortable environment.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="group bg-natural-white rounded-2xl p-8 shadow-lg border border-pink-lavender/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6 text-center">
                <feature.icon className="w-12 h-12 mx-auto text-goldenrod" />
              </div>
              
              {/* Title */}
              <h3 className="font-young-serif text-space-cadet text-2xl font-bold mb-4 text-center">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="font-bagnard text-space-cadet text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-lavender/20 to-goldenrod/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-young-serif text-natural-white text-3xl font-bold mb-4">
              Ready to Experience the Laser RX Difference?
            </h3>
            <p className="font-bagnard text-natural-white text-lg mb-6">
              Join thousands of satisfied patients who have transformed their confidence with our precision treatments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="font-oswald text-natural-white bg-goldenrod hover:bg-yellow-600 px-8 py-4 rounded-lg text-lg font-bold tracking-wide transition-colors duration-300">
                BOOK CONSULTATION
              </button>
              <button className="font-oswald text-goldenrod bg-transparent border-2 border-goldenrod hover:bg-goldenrod hover:text-natural-white px-8 py-4 rounded-lg text-lg font-bold tracking-wide transition-all duration-300">
                CALL NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
