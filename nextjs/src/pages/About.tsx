import React from 'react';
import { Target, Eye, Brain, Code, Shield, Cloud, Users, Headphones } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Brain,
      title: 'AI-Driven Engineering',
      description: 'Leveraging artificial intelligence to build smarter solutions'
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Complete end-to-end software development expertise'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Solutions',
      description: 'Robust, secure, and scalable applications for businesses'
    },
    {
      icon: Cloud,
      title: 'Scalable Cloud Architecture',
      description: 'Cloud-native solutions that grow with your business'
    },
    {
      icon: Headphones,
      title: 'Dedicated Support & Consultation',
      description: '24/7 support and expert technical consultation'
    }
  ];

  const team = [
    { name: 'Sarah Chen', role: 'Chief Technology Officer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop' },
    { name: 'Michael Rodriguez', role: 'Lead AI Engineer', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop' },
    { name: 'Priya Sharma', role: 'Product Design Lead', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop' },
    { name: 'David Kim', role: 'Solutions Architect', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#0A0F1C] via-[#1a1f3a] to-[#0A0F1C] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#005CFF] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#7B3FFF] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Driving Innovation Through{' '}
            <span className="bg-gradient-to-r from-[#005CFF] to-[#7B3FFF] text-transparent bg-clip-text">
              AI-Powered Engineering
            </span>
          </h1>
          <p className="text-xl text-[#E7E9EF] max-w-3xl mx-auto">
            We are a Sri Lanka–based AI software company delivering intelligent digital solutions globally.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#005CFF] to-[#7B3FFF] opacity-20"></div>
              <div className="relative bg-[#F7F9FC] rounded-3xl p-12 border border-[#E7E9EF]">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#005CFF] to-[#7B3FFF] flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#0A0F1C] mb-4">Our Mission</h2>
                <p className="text-xl text-[#4A5568]">
                  "To transform business processes through AI, automation, and advanced engineering."
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7B3FFF] to-[#005CFF] opacity-20"></div>
              <div className="relative bg-[#F7F9FC] rounded-3xl p-12 border border-[#E7E9EF]">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7B3FFF] to-[#005CFF] flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#0A0F1C] mb-4">Our Vision</h2>
                <p className="text-xl text-[#4A5568]">
                  "A world where organizations operate smarter with intelligent technology."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0F1C] mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-[#4A5568]">
              Excellence in every aspect of software development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E7E9EF]"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#005CFF] to-[#7B3FFF] flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A0F1C] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#4A5568]">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0F1C] mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-[#4A5568]">
              Talented professionals driving innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold text-[#0A0F1C] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#4A5568]">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-[#0A0F1C] to-[#1a1f3a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Projects Delivered' },
              { number: '50+', label: 'Happy Clients' },
              { number: '15+', label: 'Team Members' },
              { number: '8+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#005CFF] to-[#7B3FFF] text-transparent bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-[#E7E9EF]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
