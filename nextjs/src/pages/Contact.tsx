import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', company: '', projectType: '', message: '' });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#0A0F1C] via-[#1a1f3a] to-[#0A0F1C]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#005CFF] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#7B3FFF] rounded-full filter blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-[#005CFF] to-[#7B3FFF] text-transparent bg-clip-text">
              Intelligent Together
            </span>
          </h1>
          <p className="text-xl text-[#E7E9EF]">
            Have a project in mind? Get in touch with our team of experts
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#0A0F1C] mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#0A0F1C] mb-2">Name *</label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-[#0A0F1C] mb-2">Email *</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-[#0A0F1C] mb-2">Phone</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full"
                    placeholder="+94 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label className="block text-[#0A0F1C] mb-2">Company</label>
                  <Input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-[#0A0F1C] mb-2">Project Type</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E7E9EF] bg-white text-[#0A0F1C]"
                  >
                    <option value="">Select a service</option>
                    <option value="website">Website Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="web-app">Web Application</option>
                    <option value="ai-ml">AI & ML Solutions</option>
                    <option value="whatsapp">WhatsApp Integration</option>
                    <option value="iot">IoT Solutions</option>
                    <option value="desktop">Desktop Application</option>
                    <option value="social-media">Social Media Management</option>
                    <option value="seo">SEO Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#0A0F1C] mb-2">Message *</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full min-h-[150px]"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#005CFF] to-[#7B3FFF] text-white py-6 rounded-xl"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#0A0F1C] mb-8">Get in Touch</h2>
                <p className="text-[#4A5568] mb-8">
                  We're here to answer your questions and discuss how we can help transform your business with intelligent technology solutions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#005CFF] to-[#7B3FFF] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A0F1C] mb-1">Email</h3>
                    <a href="mailto:contact@aipulse.tech" className="text-[#005CFF] hover:underline">
                      contact@aipulse.tech
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#005CFF] to-[#7B3FFF] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A0F1C] mb-1">Phone</h3>
                    <a href="tel:+94123456789" className="text-[#005CFF] hover:underline">
                      +94 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#005CFF] to-[#7B3FFF] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A0F1C] mb-1">Office</h3>
                    <p className="text-[#4A5568]">
                      Colombo, Sri Lanka<br />
                      www.aipulse.tech
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-[#E7E9EF] h-64 bg-[#F7F9FC] flex items-center justify-center">
                <p className="text-[#4A5568]">📍 Google Map Integration</p>
              </div>

              {/* Business Hours */}
              <div className="bg-[#F7F9FC] rounded-2xl p-6 border border-[#E7E9EF]">
                <h3 className="font-bold text-[#0A0F1C] mb-4">Business Hours</h3>
                <div className="space-y-2 text-[#4A5568]">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
