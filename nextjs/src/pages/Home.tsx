import React from 'react';
import { ArrowRight, Globe, Smartphone, Brain, MessageSquare, Cpu, Monitor, Share2, Search, Code, Lightbulb, Rocket, Target, CheckCircle, FileText } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const solutions = [
    {
      id: 'wordpress',
      icon: Globe,
      title: 'Website Development (WordPress)',
      description: 'Fast, secure, SEO-friendly websites powered by WordPress.'
    },
    {
      id: 'custom-web',
      icon: Code,
      title: 'Custom Web Page Development',
      description: 'Tailor-made websites for business-specific requirements.'
    },
    {
      id: 'mobile-app',
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Android & iOS applications with modern UI/UX.'
    },
    {
      id: 'web-app',
      icon: Monitor,
      title: 'Web Application Creation',
      description: 'Cloud-ready, scalable web applications for startups & enterprises.'
    },
    {
      id: 'ai-ml',
      icon: Brain,
      title: 'AI & ML Solutions',
      description: 'Data-driven automation using AI chatbots, ML models & analytics dashboards.'
    },
    {
      id: 'whatsapp',
      icon: MessageSquare,
      title: 'WhatsApp Messaging Gateways',
      description: 'Automated WhatsApp APIs, bot systems & customer engagement flows.'
    },
    {
      id: 'iot',
      icon: Cpu,
      title: 'IoT Solutions',
      description: 'Sensor-based monitoring, tracking & smart automation.'
    },
    {
      id: 'desktop',
      icon: Monitor,
      title: 'Windows Desktop Applications',
      description: 'Standalone software for internal business operations.'
    },
    {
      id: 'social-media',
      icon: Share2,
      title: 'Social Media Handling & Creative Design',
      description: 'Creative content, branding & monthly social media management.'
    },
    {
      id: 'seo',
      icon: Search,
      title: 'Website SEO Optimization',
      description: 'Search-engine optimization for organic traffic & long-term ranking.'
    }
  ];

  const workSteps = [
    { icon: Lightbulb, title: 'Strategy & Planning', description: 'Understanding your business goals and requirements' },
    { icon: Target, title: 'Design & Prototype', description: 'Creating intuitive and modern user experiences' },
    { icon: Code, title: 'Development & Engineering', description: 'Building robust and scalable solutions' },
    { icon: CheckCircle, title: 'Testing & Optimization', description: 'Ensuring quality and performance' },
    { icon: Rocket, title: 'Launch & Support', description: 'Deployment and ongoing maintenance' }
  ];

  const caseStudies = [
    {
      id: 'ai-dashboard',
      image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'AI Analytics Dashboard',
      industry: 'FinTech',
      summary: 'Built an intelligent analytics platform processing 1M+ data points daily with real-time insights.'
    },
    {
      id: 'ecommerce-platform',
      image: 'https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'E-Commerce Platform',
      industry: 'Retail',
      summary: 'Developed a scalable e-commerce solution that increased conversion rates by 45%.'
    },
    {
      id: 'iot-monitoring',
      image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'IoT Monitoring System',
      industry: 'Manufacturing',
      summary: 'Implemented real-time sensor monitoring reducing downtime by 60%.'
    }
  ];

  const trustedLogos = ['TechCorp', 'NovaAI', 'CloudEdge', 'VectorLabs', 'SmartPulse Systems'];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A0F1C] via-[#1a1f3a] to-[#0A0F1C] overflow-hidden">
        {/* ECG Pulse Animation Background */}
        <div className="hero-ecg-pulse">
          <svg className="ecg-line" viewBox="0 0 2000 200" preserveAspectRatio="none">
            <path className="ecg-path" d="M0,100 L150,100 L160,90 L170,110 L180,100 L200,100 L210,95 L220,105 L230,100 L380,100 L390,30 L400,170 L410,100 L420,100 L430,95 L440,105 L450,100 L600,100 L610,90 L620,110 L630,100 L780,100 L790,30 L800,170 L810,100 L820,100 L830,95 L840,105 L850,100 L1000,100 L1010,90 L1020,110 L1030,100 L1180,100 L1190,30 L1200,170 L1210,100 L1220,100 L1230,95 L1240,105 L1250,100 L1400,100 L1410,90 L1420,110 L1430,100 L1580,100 L1590,30 L1600,170 L1610,100 L1620,100 L1630,95 L1640,105 L1650,100 L1800,100 L1810,90 L1820,110 L1830,100 L2000,100" 
                  fill="none" 
                  stroke="rgba(255, 255, 255, 0.2)" 
                  strokeWidth="2"/>
          </svg>
          <svg className="ecg-line ecg-line-2" viewBox="0 0 2000 200" preserveAspectRatio="none">
            <path className="ecg-path" d="M0,100 L200,100 L210,90 L220,110 L230,100 L400,100 L410,25 L420,175 L430,100 L440,100 L450,95 L460,105 L470,100 L650,100 L660,90 L670,110 L680,100 L850,100 L860,25 L870,175 L880,100 L890,100 L900,95 L910,105 L920,100 L1100,100 L1110,90 L1120,110 L1130,100 L1300,100 L1310,25 L1320,175 L1330,100 L1340,100 L1350,95 L1360,105 L1370,100 L1550,100 L1560,90 L1570,110 L1580,100 L1750,100 L1760,25 L1770,175 L1780,100 L1790,100 L1800,95 L1810,105 L1820,100 L2000,100" 
                  fill="none" 
                  stroke="rgba(0, 92, 255, 0.15)" 
                  strokeWidth="2"/>
          </svg>
          <svg className="ecg-line ecg-line-3" viewBox="0 0 2000 200" preserveAspectRatio="none">
            <path className="ecg-path" d="M0,100 L250,100 L260,85 L270,115 L280,100 L550,100 L560,35 L570,165 L580,100 L590,100 L600,95 L610,105 L620,100 L900,100 L910,85 L920,115 L930,100 L1200,100 L1210,35 L1220,165 L1230,100 L1240,100 L1250,95 L1260,105 L1270,100 L1550,100 L1560,85 L1570,115 L1580,100 L1850,100 L1860,35 L1870,165 L1880,100 L1890,100 L1900,95 L1910,105 L1920,100 L2000,100" 
                  fill="none" 
                  stroke="rgba(123, 63, 255, 0.12)" 
                  strokeWidth="2"/>
          </svg>
        </div>
        {/* Bubble Animation Background */}
        <div className="hero-bubbles">
          <div className="hero-bubble"></div>
          <div className="hero-bubble"></div>
          <div className="hero-bubble"></div>
          <div className="hero-bubble"></div>
          <div className="hero-bubble"></div>
          <div className="hero-bubble"></div>
          <div className="hero-bubble"></div>
          <div className="hero-bubble"></div>
        </div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#005CFF] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7B3FFF] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Empowering Digital Future with{' '}
                <span className="bg-gradient-to-r from-[#005CFF] to-[#7B3FFF] text-transparent bg-clip-text">
                  AI-Driven Software
                </span>
              </h1>
              <p className="text-xl text-[#E7E9EF] mb-8 max-w-2xl">
                We build intelligent software solutions that accelerate business growth through AI, automation, and cutting-edge engineering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => onNavigate('solutions')}
                  className="bg-gradient-to-r from-[#005CFF] to-[#7B3FFF] text-white rounded-full px-8 py-6 hover:shadow-2xl hover:shadow-[#005CFF]/50 transition-all"
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  onClick={() => onNavigate('contact')}
                  variant="outline"
                  className="rounded-full px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-[#0A0F1C] transition-all"
                >
                  Contact Us
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1756908992154-c8a89f5e517f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="AI Technology"
                  className="rounded-3xl shadow-2xl shadow-[#005CFF]/30"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-gradient-to-br from-[#005CFF] to-[#7B3FFF] rounded-3xl opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[#4A5568] mb-8">Trusted By Leading Organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {trustedLogos.map((logo, index) => (
              <div key={index} className="text-2xl font-bold text-[#2A2F3A] opacity-50 hover:opacity-100 transition-opacity">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0F1C] mb-4">
              Our Intelligent Solutions
            </h2>
            <p className="text-xl text-[#4A5568] max-w-3xl mx-auto">
              Comprehensive technology services designed to transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <div
                  key={solution.id}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E7E9EF] group cursor-pointer"
                  onClick={() => onNavigate(`solution-${solution.id}`)}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#005CFF] to-[#7B3FFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A0F1C] mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-[#4A5568] mb-4">
                    {solution.description}
                  </p>
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

      {/* How We Work */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0F1C] mb-4">
              How We Work
            </h2>
            <p className="text-xl text-[#4A5568]">
              Our proven process for delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {workSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#005CFF] to-[#7B3FFF] flex items-center justify-center mx-auto shadow-lg shadow-[#005CFF]/30">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-[#005CFF] flex items-center justify-center mx-auto">
                      <span className="text-sm font-bold text-[#005CFF]">{index + 1}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-[#0A0F1C] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#4A5568]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0F1C] mb-4">
              Case Studies Highlight
            </h2>
            <p className="text-xl text-[#4A5568]">
              Real results from our intelligent solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => onNavigate(`case-study-${study.id}`)}
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#005CFF] text-white rounded-full text-sm">
                    {study.industry}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0A0F1C] mb-2">
                    {study.title}
                  </h3>
                  <p className="text-[#4A5568] mb-4">
                    {study.summary}
                  </p>
                  <button className="text-[#005CFF] flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Case Study
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0F1C] mb-4">
              Resources Preview
            </h2>
            <p className="text-xl text-[#4A5568] mb-8">
              Explore our collection of insights, whitepapers, and case studies
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {['Datasheets', 'Whitepapers', 'eBooks', 'Case Studies'].map((type) => (
              <div key={type} className="flex items-center gap-3 px-6 py-4 bg-[#F7F9FC] rounded-xl border border-[#E7E9EF]">
                <FileText className="w-6 h-6 text-[#005CFF]" />
                <span className="font-bold text-[#0A0F1C]">{type}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={() => onNavigate('resources')}
              className="bg-gradient-to-r from-[#005CFF] to-[#7B3FFF] text-white rounded-full px-8"
            >
              Browse Resources
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
