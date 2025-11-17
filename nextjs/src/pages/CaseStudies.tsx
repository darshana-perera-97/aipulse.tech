import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface CaseStudiesProps {
  onNavigate: (page: string) => void;
}

export function CaseStudies({ onNavigate }: CaseStudiesProps) {
  const caseStudies = [
    {
      id: 'ai-dashboard',
      image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?w=800',
      industry: 'FinTech',
      title: 'AI Analytics Dashboard for Financial Services',
      description: 'Built an intelligent analytics platform processing 1M+ data points daily with real-time insights, reducing analysis time by 80%.'
    },
    {
      id: 'ecommerce-platform',
      image: 'https://images.unsplash.com/photo-1660810731526-0720827cbd38?w=800',
      industry: 'Retail',
      title: 'Scalable E-Commerce Platform with AI Recommendations',
      description: 'Developed a custom e-commerce solution with AI-powered product recommendations, increasing conversion rates by 45%.'
    },
    {
      id: 'iot-monitoring',
      image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?w=800',
      industry: 'Manufacturing',
      title: 'IoT-Based Manufacturing Monitoring System',
      description: 'Implemented real-time sensor monitoring across 50+ machines, reducing downtime by 60% and maintenance costs by 35%.'
    },
    {
      id: 'healthcare-app',
      image: 'https://images.unsplash.com/photo-1737573296361-75315239293a?w=800',
      industry: 'Healthcare',
      title: 'Telemedicine Mobile App with AI Diagnostics',
      description: 'Created a comprehensive telemedicine platform serving 10,000+ patients with AI-assisted preliminary diagnostics.'
    },
    {
      id: 'whatsapp-crm',
      image: 'https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?w=800',
      industry: 'Real Estate',
      title: 'WhatsApp-Based CRM for Real Estate Agency',
      description: 'Developed automated WhatsApp integration handling 500+ daily inquiries, improving response time by 90%.'
    },
    {
      id: 'smart-agriculture',
      image: 'https://images.unsplash.com/photo-1756908992154-c8a89f5e517f?w=800',
      industry: 'Agriculture',
      title: 'Smart Agriculture IoT Solution',
      description: 'Deployed sensor network monitoring soil conditions, weather data, and crop health across 1000 acres of farmland.'
    }
  ];

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
            Real Results.{' '}
            <span className="bg-gradient-to-r from-[#005CFF] to-[#7B3FFF] text-transparent bg-clip-text">
              Real Impact.
            </span>
          </h1>
          <p className="text-xl text-[#E7E9EF]">
            Explore how we've helped businesses transform with intelligent technology solutions
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-[#E7E9EF]"
                onClick={() => onNavigate(`case-study-${study.id}`)}
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-[#005CFF] text-white rounded-full text-sm">
                      {study.industry}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#0A0F1C] mb-4 group-hover:text-[#005CFF] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-[#4A5568] mb-6">
                    {study.description}
                  </p>
                  <button className="text-[#005CFF] flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0A0F1C] to-[#1a1f3a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-[#E7E9EF] mb-8">
            Let's discuss how we can help you achieve similar results
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-gradient-to-r from-[#005CFF] to-[#7B3FFF] text-white px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-[#005CFF]/50 transition-all"
          >
            Start Your Project
            <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
