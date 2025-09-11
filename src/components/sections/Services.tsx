import StackingCards from '@/components/ui/stacking-cards';

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-natural-white to-pink-lavender/10">
      <div className="container mx-auto px-6">
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
