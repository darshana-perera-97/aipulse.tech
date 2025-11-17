import React from 'react';
import { Globe, Code, Smartphone, Monitor, Brain, MessageSquare, Cpu, Share2, Search, ArrowRight } from 'lucide-react';

interface SolutionsProps {
  onNavigate: (page: string) => void;
}

export function Solutions({ onNavigate }: SolutionsProps) {
  const solutions = [
    {
      id: 'wordpress',
      icon: Globe,
      title: 'Website Development (WordPress)',
      description: 'Fast, secure, SEO-friendly websites powered by WordPress.',
      features: ['Fully responsive designs', 'SEO-optimized structure', 'Custom themes & plugins', 'WooCommerce integration']
    },
    {
      id: 'custom-web',
      icon: Code,
      title: 'Custom Web Page Development',
      description: 'Tailor-made websites for business-specific requirements.',
      features: ['Fully custom UI & UX', 'Advanced animations', 'Backend integrations', 'Dashboard-based CMS']
    },
    {
      id: 'mobile-app',
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Android & iOS applications with modern UI/UX.',
      features: ['UI/UX-focused design', 'Android & iOS support', 'API integration', 'Push notifications']
    },
    {
      id: 'web-app',
      icon: Monitor,
      title: 'Web Application Creation',
      description: 'Cloud-ready, scalable web applications for startups & enterprises.',
      features: ['Cloud integration', 'Real-time dashboards', 'User authentication', 'Data automation']
    },
    {
      id: 'ai-ml',
      icon: Brain,
      title: 'AI & ML Solutions (Chatbots + Dashboards)',
      description: 'Data-driven automation using AI chatbots, ML models & analytics dashboards.',
      features: ['WhatsApp & Web chatbots', 'NLP-based AI assistants', 'Predictive analytics', 'Custom ML models']
    },
    {
      id: 'whatsapp',
      icon: MessageSquare,
      title: 'WhatsApp Messaging Gateways',
      description: 'Automated WhatsApp APIs, bot systems & customer engagement flows.',
      features: ['Auto-replies', 'Chatbot integration', 'Broadcast campaigns', 'CRM sync']
    },
    {
      id: 'iot',
      icon: Cpu,
      title: 'IoT Solutions',
      description: 'Sensor-based monitoring, tracking & smart automation.',
      features: ['Sensor-based monitoring', 'Real-time dashboards', 'Alerts & analytics', 'API connectivity']
    },
    {
      id: 'desktop',
      icon: Monitor,
      title: 'Windows Desktop Applications',
      description: 'Standalone software for internal business operations.',
      features: ['Inventory systems', 'POS software', 'Employee management', 'Automation tools']
    },
    {
      id: 'social-media',
      icon: Share2,
      title: 'Social Media Handling + Post Designs',
      description: 'Creative content, branding & monthly social media management.',
      features: ['Monthly content planning', 'Post & reel designs', 'Branding & strategy', 'Community management']
    },
    {
      id: 'seo',
      icon: Search,
      title: 'Website SEO',
      description: 'Search-engine optimization for organic traffic & long-term ranking.',
      features: ['Keyword research', 'Technical SEO fixes', 'Backlink building', 'Page speed optimization']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#0A0F1C] via-[#1a1f3a] to-[#0A0F1C]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#005CFF] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#7B3FFF] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Intelligent Digital Solutions for{' '}
            <span className="bg-gradient-to-r from-[#005CFF] to-[#7B3FFF] text-transparent bg-clip-text">
              Every Industry
            </span>
          </h1>
          <p className="text-xl text-[#E7E9EF] max-w-3xl mx-auto">
            Comprehensive technology services designed to transform your business with AI and automation
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <div
                  key={solution.id}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-[#E7E9EF] group cursor-pointer"
                  onClick={() => onNavigate(`solution-${solution.id}`)}
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#005CFF] to-[#7B3FFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A0F1C] mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-[#4A5568] mb-6">
                    {solution.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#4A5568]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#005CFF] mt-1.5"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="text-[#005CFF] flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0A0F1C] to-[#1a1f3a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-[#E7E9EF] mb-8">
            Let's discuss how our intelligent solutions can accelerate your growth
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-gradient-to-r from-[#005CFF] to-[#7B3FFF] text-white px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-[#005CFF]/50 transition-all"
          >
            Get Started
            <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
