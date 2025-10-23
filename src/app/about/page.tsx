'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, Sparkle, Heart, ShieldCheck, Users } from '@phosphor-icons/react';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Client-Centered Care',
      description: 'Your comfort, safety, and satisfaction are our top priorities. We take the time to understand your unique goals and concerns.'
    },
    {
      icon: ShieldCheck,
      title: 'Safety & Excellence',
      description: 'State-of-the-art technology combined with rigorous safety protocols ensure the highest quality treatments.'
    },
    {
      icon: Sparkle,
      title: 'Proven Results',
      description: 'We use only FDA-cleared devices and evidence-based techniques to deliver visible, lasting results.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our highly trained professionals stay current with the latest advances in laser technology and aesthetic treatments.'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-space-cadet via-space-cadet to-goldenrod/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-goldenrod/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-lavender/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-young-serif text-natural-white text-6xl md:text-7xl font-bold mb-6 leading-tight">
              About
              <span className="block bg-gradient-to-r from-goldenrod via-pink-lavender to-goldenrod bg-clip-text text-transparent">
                Laser RX
              </span>
            </h1>
            <p className="font-bagnard text-natural-white/90 text-xl leading-relaxed">
              Where precision meets perfection in advanced laser treatments
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Side */}
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-goldenrod to-pink-lavender p-[3px] rounded-3xl overflow-hidden">
                  <div className="bg-space-cadet rounded-3xl overflow-hidden">
                    <Image
                      src="/images/procedure-room1.png"
                      alt="Laser RX treatment room"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-goldenrod via-pink-lavender to-goldenrod p-[3px] rounded-3xl">
                  <div className="bg-space-cadet/95 backdrop-blur-xl rounded-3xl p-8 md:p-10">
                    <h2 className="font-young-serif text-natural-white text-4xl font-bold mb-6">
                      Our Story
                    </h2>
                    <div className="space-y-4 font-bagnard text-natural-white/90 leading-relaxed">
                      <p>
                        Welcome to Laser RX, your trusted partner in advanced aesthetic treatments in Macomb Township, Michigan. 
                        We&apos;ve built our reputation on delivering safe, effective, and personalized laser treatments that help 
                        our clients look and feel their best.
                      </p>
                      <p>
                        Founded on the principles of precision, performance, and perfection, Laser RX combines cutting-edge 
                        technology with a warm, welcoming environment. Our modern facility features state-of-the-art laser 
                        systems and a team dedicated to your comfort and results.
                      </p>
                      <p>
                        Whether you&apos;re seeking hair removal, skin rejuvenation, body slimming, or other aesthetic treatments, 
                        we provide customized solutions tailored to your unique needs and goals. Every treatment is performed 
                        with meticulous attention to detail and your safety.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-young-serif text-natural-white text-5xl font-bold mb-6">
                Our Values
              </h2>
              <p className="font-bagnard text-natural-white/80 text-xl max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-gradient-to-br from-goldenrod to-pink-lavender p-[2px] rounded-2xl group hover:scale-105 transition-transform duration-300">
                  <div className="bg-space-cadet rounded-2xl p-8 h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-goldenrod to-pink-lavender rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <value.icon className="w-8 h-8 text-space-cadet" weight="fill" />
                    </div>
                    <h3 className="font-oswald text-natural-white text-xl font-bold mb-3">
                      {value.title}
                    </h3>
                    <p className="font-bagnard text-natural-white/80 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-goldenrod via-pink-lavender to-goldenrod p-[3px] rounded-3xl">
              <div className="bg-space-cadet/95 backdrop-blur-xl rounded-3xl p-8 md:p-12">
                <h2 className="font-young-serif text-natural-white text-4xl font-bold mb-8 text-center">
                  Why Choose Laser RX?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-goldenrod rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-oswald text-natural-white font-bold mb-2">Advanced Technology</h3>
                        <p className="font-bagnard text-natural-white/80">
                          We invest in the latest FDA-cleared laser systems to ensure safe, effective treatments with minimal downtime.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-goldenrod rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-oswald text-natural-white font-bold mb-2">Personalized Approach</h3>
                        <p className="font-bagnard text-natural-white/80">
                          No two clients are alike. We create customized treatment plans based on your specific skin type, concerns, and goals.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-goldenrod rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-oswald text-natural-white font-bold mb-2">Comfortable Environment</h3>
                        <p className="font-bagnard text-natural-white/80">
                          Our modern, welcoming facility is designed for your comfort and privacy throughout your treatment experience.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-pink-lavender rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-oswald text-natural-white font-bold mb-2">Experienced Professionals</h3>
                        <p className="font-bagnard text-natural-white/80">
                          Our team is extensively trained and certified in laser technology and aesthetic treatments.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-pink-lavender rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-oswald text-natural-white font-bold mb-2">Proven Results</h3>
                        <p className="font-bagnard text-natural-white/80">
                          We use evidence-based techniques and have helped countless clients achieve their aesthetic goals.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-pink-lavender rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-oswald text-natural-white font-bold mb-2">Flexible Scheduling</h3>
                        <p className="font-bagnard text-natural-white/80">
                          By appointment only to ensure you receive our full attention and minimize wait times.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-young-serif text-natural-white text-5xl font-bold mb-6">
                Visit Us
              </h2>
              <p className="font-bagnard text-natural-white/80 text-xl">
                Conveniently located in Macomb Township, Michigan
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                {/* Address Card */}
                <div className="bg-gradient-to-br from-goldenrod to-pink-lavender p-[2px] rounded-2xl">
                  <div className="bg-space-cadet rounded-2xl p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-goldenrod mt-1" weight="fill" />
                      <div>
                        <h3 className="font-oswald text-natural-white font-bold mb-2">Address</h3>
                        <p className="font-bagnard text-natural-white/90 mb-3">
                          46825 Garfield Rd<br />
                          Macomb Township, MI 48044
                        </p>
                        <a 
                          href="https://maps.google.com/?q=46825+Garfield+Rd,+Macomb+Township,+MI+48044"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block font-oswald text-goldenrod hover:text-pink-lavender transition-colors text-sm font-bold"
                        >
                          GET DIRECTIONS →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="bg-gradient-to-br from-pink-lavender to-goldenrod p-[2px] rounded-2xl">
                  <div className="bg-space-cadet rounded-2xl p-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-pink-lavender mt-1" weight="fill" />
                      <div>
                        <h3 className="font-oswald text-natural-white font-bold mb-2">Phone</h3>
                        <a 
                          href="tel:18109563272"
                          className="font-bagnard text-natural-white/90 hover:text-goldenrod transition-colors text-lg"
                        >
                          (810) 956-3272
                        </a>
                        <p className="font-bagnard text-natural-white/60 text-sm mt-2">
                          Call us to schedule your consultation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-gradient-to-br from-goldenrod to-pink-lavender p-[2px] rounded-2xl">
                  <div className="bg-space-cadet rounded-2xl p-6">
                    <h3 className="font-oswald text-natural-white font-bold mb-3">Business Hours</h3>
                    <p className="font-bagnard text-goldenrod text-sm font-bold mb-3">By Appointment Only</p>
                    <div className="space-y-2 font-bagnard text-natural-white/80 text-sm">
                      <div className="flex justify-between">
                        <span>Monday</span>
                        <span className="text-natural-white/40">Closed</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tuesday - Wednesday</span>
                        <span>10:00am - 5:00pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Thursday</span>
                        <span>10:00am - 7:30pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Friday</span>
                        <span>10:00am - 5:00pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>12:00pm - 4:00pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="text-natural-white/40">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-gradient-to-br from-goldenrod to-pink-lavender p-[2px] rounded-2xl h-full min-h-[500px]">
                <div className="bg-space-cadet rounded-2xl p-4 h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2938.123456789!2d-82.9876543!3d42.6543210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s46825+Garfield+Rd%2C+Macomb+Township%2C+MI+48044!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '12px', minHeight: '468px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Laser RX Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-goldenrod via-pink-lavender to-goldenrod p-[3px] rounded-3xl">
              <div className="bg-space-cadet rounded-3xl p-12 text-center">
                <h2 className="font-young-serif text-natural-white text-4xl md:text-5xl font-bold mb-6">
                  Ready to Get Started?
                </h2>
                <p className="font-bagnard text-natural-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Schedule your consultation today and discover how Laser RX can help you achieve your aesthetic goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="font-oswald bg-gradient-to-r from-goldenrod to-pink-lavender hover:shadow-2xl hover:shadow-goldenrod/50 text-space-cadet px-8 py-4 rounded-xl text-lg font-bold tracking-wide transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/services"
                    className="font-oswald bg-space-cadet/50 border-2 border-goldenrod/50 hover:bg-goldenrod/10 hover:border-goldenrod text-natural-white px-8 py-4 rounded-xl text-lg font-bold tracking-wide transition-all duration-300"
                  >
                    View Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
