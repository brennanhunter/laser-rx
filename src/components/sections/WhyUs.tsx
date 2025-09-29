import { motion } from 'framer-motion';
import { Sparkle, FlowerLotus, Heart, ShieldChevron, Crown, PaintBrushBroad } from '@phosphor-icons/react';

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
    icon: Sparkle
  },
  {
    id: 'experienced-professionals',
    title: 'Experienced Professionals',
    description: 'Our certified technicians have years of experience delivering precise, comfortable treatments with exceptional results.',
    icon: FlowerLotus
  },
  {
    id: 'personalized-care',
    title: 'Personalized Treatment Plans',
    description: 'Every treatment is customized to your unique skin type, concerns, and goals for optimal results.',
    icon: Heart
  },
  {
    id: 'safety-first',
    title: 'Safety First',
    description: 'Comprehensive consultations, patch testing, and strict safety protocols ensure your comfort and wellbeing.',
    icon: ShieldChevron
  },
  {
    id: 'proven-results',
    title: 'Proven Results',
    description: 'Thousands of satisfied patients have achieved their aesthetic goals with our award-winning treatments.',
    icon: Crown
  },
  {
    id: 'comprehensive-services',
    title: 'Comprehensive Services',
    description: 'From hair removal to skin rejuvenation to body contouring - all your aesthetic needs under one roof.',
    icon: PaintBrushBroad
  }
];

// Animation variants based on FRAMER.md documentation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

export default function WhyUs() {
  return (
    <section className="py-20 bg-space-cadet">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="font-young-serif text-natural-white text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Why Choose Laser RX?
          </motion.h2>
          <motion.p 
            className="font-bagnard text-natural-white text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the difference that expertise, technology, and personalized care make. 
            We&apos;re committed to delivering exceptional results in a safe, comfortable environment.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.id} 
              className="group bg-natural-white rounded-2xl p-8 shadow-lg border border-pink-lavender/20"
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
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
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="bg-gradient-to-r from-pink-lavender/20 to-goldenrod/20 rounded-2xl p-8 max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="font-young-serif text-natural-white text-3xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Ready to Experience the Laser RX Difference?
            </motion.h3>
            <motion.p 
              className="font-bagnard text-natural-white text-lg mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Join thousands of satisfied patients who have transformed their confidence with our precision treatments.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.button 
                className="font-oswald text-natural-white bg-goldenrod px-8 py-4 rounded-lg text-lg font-bold tracking-wide"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#E5BEED",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                BOOK CONSULTATION
              </motion.button>
              <motion.button 
                className="font-oswald text-goldenrod bg-transparent border-2 border-goldenrod hover:bg-goldenrod hover:text-natural-white px-8 py-4 rounded-lg text-lg font-bold tracking-wide transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CALL NOW
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
