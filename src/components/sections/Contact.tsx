'use client';

import { useState } from 'react';
import { Phone, MapPin, Clock, PaperPlaneRight } from '@phosphor-icons/react';

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
  'Skin Rejuvenation',
  'Laser Hair Removal',
  'Hydra Spa Treatment',
  'Body Slimming',
  'Allegra Laser Treatment',
  'General Consultation'
];

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
    
    // Dummy Formspree URL - replace with actual URL when ready
    const formspreeUrl = 'https://formspree.io/f/dummy123';
    
    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Thank you! Your message has been sent. We\'ll contact you soon.');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        alert('Sorry, there was an error sending your message. Please call us directly.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      alert('Sorry, there was an error sending your message. Please call us directly.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-space-cadet/5 to-pink-lavender/10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-young-serif text-space-cadet text-5xl font-bold mb-6">
            Contact Us
          </h2>
          <p className="font-bagnard text-space-cadet text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to start your transformation? Get in touch to schedule your consultation 
            or ask any questions about our treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-natural-white rounded-2xl p-8 shadow-lg border border-pink-lavender/20">
              <h3 className="font-young-serif text-space-cadet text-2xl font-bold mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-goldenrod mt-1" />
                  <div>
                    <p className="font-oswald text-space-cadet font-bold">Phone</p>
                    <a 
                      href="tel:18109563272" 
                      className="font-bagnard text-goldenrod hover:text-yellow-600 transition-colors"
                    >
                      (810) 956-3272
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-goldenrod mt-1" />
                  <div>
                    <p className="font-oswald text-space-cadet font-bold">Address</p>
                    <p className="font-bagnard text-space-cadet">
                      46825 Garfield Rd<br />
                      Macomb Township, MI 48044
                    </p>
                    <a 
                      href="https://maps.google.com/?q=46825+Garfield+Rd,+Macomb+Township,+MI+48044"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 font-oswald text-goldenrod hover:text-yellow-600 transition-colors text-sm font-bold"
                    >
                      GET DIRECTIONS →
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-goldenrod mt-1" />
                  <div>
                    <p className="font-oswald text-space-cadet font-bold mb-2">Business Hours</p>
                    <p className="font-bagnard text-goldenrod text-sm font-bold mb-2">By Appointment Only</p>
                    <div className="space-y-1">
                      {businessHours.map((schedule) => (
                        <div key={schedule.day} className="flex justify-between text-sm">
                          <span className="font-bagnard text-space-cadet font-medium">{schedule.day}</span>
                          <span className={`font-bagnard ${schedule.hours === 'Closed' ? 'text-gray-500' : 'text-space-cadet'}`}>
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-natural-white rounded-2xl p-4 shadow-lg border border-pink-lavender/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2938.123456789!2d-82.9876543!3d42.6543210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s46825+Garfield+Rd%2C+Macomb+Township%2C+MI+48044!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Laser RX Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-natural-white rounded-2xl p-8 shadow-lg border border-pink-lavender/20">
            <h3 className="font-young-serif text-space-cadet text-2xl font-bold mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-oswald text-space-cadet font-bold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-pink-lavender/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-goldenrod focus:border-transparent font-bagnard"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-oswald text-space-cadet font-bold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-pink-lavender/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-goldenrod focus:border-transparent font-bagnard"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block font-oswald text-space-cadet font-bold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-pink-lavender/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-goldenrod focus:border-transparent font-bagnard"
                  placeholder="(123) 456-7890"
                />
              </div>

              {/* Service Interest */}
              <div>
                <label htmlFor="service" className="block font-oswald text-space-cadet font-bold mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-pink-lavender/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-goldenrod focus:border-transparent font-bagnard"
                >
                  <option value="">Select a service...</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-oswald text-space-cadet font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-pink-lavender/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-goldenrod focus:border-transparent font-bagnard resize-vertical"
                  placeholder="Tell us about your goals or ask any questions..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-oswald text-natural-white bg-goldenrod disabled:bg-gray-400 px-8 py-4 rounded-lg text-lg font-bold tracking-wide transition-colors duration-300 flex items-center justify-center space-x-2"
                style={{
                  backgroundColor: '#98D9C2'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7BC4A8'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#98D9C2'}
              >
                <PaperPlaneRight className="w-5 h-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
