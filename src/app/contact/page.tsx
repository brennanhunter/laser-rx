'use client';

import { useState } from 'react';
import { Phone, MapPin, Clock, PaperPlaneRight, EnvelopeSimple, Check } from '@phosphor-icons/react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const businessHours = [
  { day: 'Monday', hours: 'Closed' },
  { day: 'Tuesday', hours: '10:00am - 5:00pm' },
  { day: 'Wednesday', hours: '10:00am - 5:00pm' },
  { day: 'Thursday', hours: '10:00am - 7:30pm' },
  { day: 'Friday', hours: '10:00am - 5:00pm' },
  { day: 'Saturday', hours: '12:00pm - 4:00pm' },
  { day: 'Sunday', hours: 'Closed' }
];

const services = [
  'Laser Hair Removal',
  'Hydra Facial',
  'Body Contouring',
  'Skin Rejuvenation',
  'General Consultation'
];

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    setIsSuccess(false);
    
    // Formspree endpoint - using FormData approach
    const formspreeUrl = 'https://formspree.io/f/mvgwnppj';
    
    try {
      // Use FormData instead of JSON for better compatibility
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('service', formData.service);
      formDataToSend.append('message', formData.message);

      const response = await fetch(formspreeUrl, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json',
        },
      });
      
      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        const data = await response.json();
        console.error('Formspree error response:', response.status, data);
        setIsError(true);
        setTimeout(() => setIsError(false), 5000);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setIsError(true);
      setTimeout(() => setIsError(false), 5000);
    }
    
    setIsSubmitting(false);
  };

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
              Let&apos;s Start Your
              <span className="block bg-gradient-to-r from-goldenrod via-pink-lavender to-goldenrod bg-clip-text text-transparent">
                Transformation
              </span>
            </h1>
            <p className="font-bagnard text-natural-white/90 text-xl leading-relaxed">
              Ready to experience the Laser RX difference? Reach out to schedule your consultation
              or ask any questions about our advanced laser treatments.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Quick Contact Cards - Left Side */}
            <div className="lg:col-span-1 space-y-6">
              {/* Phone Card */}
              <div className="bg-gradient-to-br from-goldenrod to-pink-lavender p-[2px] rounded-2xl group hover:scale-105 transition-transform duration-300">
                <div className="bg-space-cadet rounded-2xl p-6 h-full">
                  <div className="w-14 h-14 bg-goldenrod/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Phone className="w-7 h-7 text-goldenrod" weight="fill" />
                  </div>
                  <h3 className="font-oswald text-natural-white text-lg font-bold mb-2">
                    Call Us Now
                  </h3>
                  <a 
                    href="tel:18109563272" 
                    className="font-bagnard text-goldenrod hover:text-pink-lavender transition-colors text-xl font-bold"
                  >
                    (810) 956-3272
                  </a>
                  <p className="font-bagnard text-natural-white/70 text-sm mt-2">
                    Speak with our team directly
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-gradient-to-br from-pink-lavender to-goldenrod p-[2px] rounded-2xl group hover:scale-105 transition-transform duration-300">
                <div className="bg-space-cadet rounded-2xl p-6 h-full">
                  <div className="w-14 h-14 bg-pink-lavender/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <EnvelopeSimple className="w-7 h-7 text-pink-lavender" weight="fill" />
                  </div>
                  <h3 className="font-oswald text-natural-white text-lg font-bold mb-2">
                    Email Us
                  </h3>
                  <a 
                    href="mailto:info@laserrx.com" 
                    className="font-bagnard text-pink-lavender hover:text-goldenrod transition-colors text-lg break-all"
                  >
                    info@laserrx.com
                  </a>
                  <p className="font-bagnard text-natural-white/70 text-sm mt-2">
                    We&apos;ll respond within 24 hours
                  </p>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-gradient-to-br from-goldenrod via-pink-lavender to-goldenrod p-[2px] rounded-2xl group hover:scale-105 transition-transform duration-300">
                <div className="bg-space-cadet rounded-2xl p-6 h-full">
                  <div className="w-14 h-14 bg-goldenrod/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <MapPin className="w-7 h-7 text-goldenrod" weight="fill" />
                  </div>
                  <h3 className="font-oswald text-natural-white text-lg font-bold mb-2">
                    Visit Our Clinic
                  </h3>
                  <p className="font-bagnard text-natural-white mb-2">
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

              {/* Hours Card */}
              <div className="bg-gradient-to-br from-pink-lavender to-goldenrod p-[2px] rounded-2xl">
                <div className="bg-space-cadet rounded-2xl p-6 h-full">
                  <div className="w-14 h-14 bg-pink-lavender/20 rounded-xl flex items-center justify-center mb-4">
                    <Clock className="w-7 h-7 text-pink-lavender" weight="fill" />
                  </div>
                  <h3 className="font-oswald text-natural-white text-lg font-bold mb-2">
                    Business Hours
                  </h3>
                  <p className="font-bagnard text-goldenrod text-sm font-bold mb-3">
                    By Appointment Only
                  </p>
                  <div className="space-y-1.5">
                    {businessHours.map((schedule) => (
                      <div key={schedule.day} className="flex justify-between text-sm">
                        <span className="font-bagnard text-natural-white/90">{schedule.day}</span>
                        <span className={`font-bagnard ${schedule.hours === 'Closed' ? 'text-natural-white/40' : 'text-pink-lavender font-bold'}`}>
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-goldenrod via-pink-lavender to-goldenrod p-[3px] rounded-3xl">
                <div className="bg-space-cadet/95 backdrop-blur-xl rounded-3xl p-8 md:p-10">
                  <div className="text-center mb-8">
                    <h2 className="font-young-serif text-natural-white text-4xl font-bold mb-3">
                      Send Us a Message
                    </h2>
                    <p className="font-bagnard text-natural-white/80">
                      Fill out the form below and we&apos;ll get back to you as soon as possible
                    </p>
                  </div>

                  {/* Success Message */}
                  {isSuccess && (
                    <div className="mb-6 bg-gradient-to-r from-goldenrod/20 to-pink-lavender/20 border-2 border-goldenrod/50 rounded-xl p-4 flex items-center space-x-3 animate-pulse">
                      <div className="w-12 h-12 bg-gradient-to-br from-goldenrod to-pink-lavender rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-7 h-7 text-space-cadet" weight="bold" />
                      </div>
                      <div>
                        <p className="font-oswald text-natural-white font-bold text-lg">Message Sent Successfully!</p>
                        <p className="font-bagnard text-goldenrod text-sm">We&apos;ll contact you soon.</p>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {isError && (
                    <div className="mb-6 bg-gradient-to-r from-pink-lavender/20 to-goldenrod/20 border-2 border-pink-lavender/50 rounded-xl p-4 flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-lavender to-goldenrod rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-space-cadet font-bold text-2xl">!</span>
                      </div>
                      <div>
                        <p className="font-oswald text-natural-white font-bold text-lg">Error Sending Message</p>
                        <p className="font-bagnard text-pink-lavender text-sm">Please call us at (810) 956-3272 instead.</p>
                      </div>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block font-oswald text-natural-white font-bold mb-2 tracking-wide">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 bg-space-cadet/50 border-2 border-goldenrod/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-goldenrod focus:border-goldenrod font-bagnard text-natural-white placeholder-natural-white/40 transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block font-oswald text-natural-white font-bold mb-2 tracking-wide">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 bg-space-cadet/50 border-2 border-goldenrod/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-goldenrod focus:border-goldenrod font-bagnard text-natural-white placeholder-natural-white/40 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Phone and Service Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block font-oswald text-natural-white font-bold mb-2 tracking-wide">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 bg-space-cadet/50 border-2 border-pink-lavender/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-lavender focus:border-pink-lavender font-bagnard text-natural-white placeholder-natural-white/40 transition-all"
                          placeholder="(123) 456-7890"
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="block font-oswald text-natural-white font-bold mb-2 tracking-wide">
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 bg-space-cadet/50 border-2 border-pink-lavender/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-lavender focus:border-pink-lavender font-bagnard text-natural-white transition-all"
                        >
                          <option value="" className="bg-space-cadet">Select a service...</option>
                          {services.map((service) => (
                            <option key={service} value={service} className="bg-space-cadet">{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block font-oswald text-natural-white font-bold mb-2 tracking-wide">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 bg-space-cadet/50 border-2 border-goldenrod/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-goldenrod focus:border-goldenrod font-bagnard text-natural-white placeholder-natural-white/40 resize-vertical transition-all"
                        placeholder="Tell us about your goals, concerns, or any questions you have about our treatments..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full font-oswald text-space-cadet bg-gradient-to-r from-goldenrod via-pink-lavender to-goldenrod hover:shadow-2xl hover:shadow-goldenrod/50 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-5 rounded-xl text-lg font-bold tracking-wide transition-all duration-300 flex items-center justify-center space-x-3 group"
                    >
                      <span className="text-xl">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                      <PaperPlaneRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" weight="fill" />
                    </button>

                    <p className="text-center font-bagnard text-natural-white/60 text-sm">
                      * Required fields. We respect your privacy and will never share your information.
                    </p>
                  </form>
                </div>
              </div>

              {/* Google Maps */}
              <div className="mt-8 bg-gradient-to-br from-goldenrod to-pink-lavender p-[2px] rounded-2xl overflow-hidden">
                <div className="bg-space-cadet rounded-2xl p-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2938.123456789!2d-82.9876543!3d42.6543210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s46825+Garfield+Rd%2C+Macomb+Township%2C+MI+48044!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="400"
                    style={{ border: 0, borderRadius: '12px' }}
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
    </main>
  );
}
