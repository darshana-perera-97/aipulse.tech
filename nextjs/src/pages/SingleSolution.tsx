import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface SingleSolutionProps {
  solutionId: string;
  onNavigate: (page: string) => void;
}

export function SingleSolution({ solutionId, onNavigate }: SingleSolutionProps) {
  const solutions: Record<string, any> = {
    'wordpress': {
      title: 'Professional WordPress Websites Built for Speed & Growth',
      subtitle: 'We create secure, SEO-optimized WordPress websites tailored to your industry and business goals.',
      overview: 'Our WordPress development service helps businesses launch high-performing websites that are easy to manage and built for long-term scalability. From corporate sites to eCommerce platforms, we deliver clean, responsive, and conversion-focused experiences.',
      features: [
        'Fully responsive designs',
        'SEO-optimized structure',
        'Custom themes & plugin development',
        'WooCommerce integration',
        'Speed improvements & security hardening',
        'Easy admin dashboard management'
      ],
      technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'Elementor', 'WP Bakery', 'Figma'],
      benefits: [
        'Fast deployment',
        'Budget-friendly',
        'Highly customizable',
        'Easy content management'
      ],
      process: ['Discovery', 'Design', 'Development', 'Testing', 'Deployment', 'Support']
    },
    'custom-web': {
      title: 'Custom Web Experiences Tailored to Your Business',
      subtitle: 'Pixel-perfect UI, fast performance, and advanced functionalities',
      overview: 'We build custom-designed websites with pixel-perfect UI, fast performance, and advanced functionalities for brands that need unique digital experiences.',
      features: [
        'Fully custom UI & UX',
        'Advanced animations',
        'Backend integrations',
        'Dashboard-based CMS',
        'High-speed optimization',
        'Modern frameworks'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'PHP', 'Laravel'],
      benefits: [
        'Unique design',
        'Scalable architecture',
        'Enterprise-grade performance',
        'Full ownership'
      ],
      process: ['Requirements', 'Design', 'Development', 'Testing', 'Launch', 'Maintenance']
    },
    'mobile-app': {
      title: 'Native & Hybrid Mobile Apps for iOS and Android',
      subtitle: 'Performance-driven mobile apps with seamless user experiences',
      overview: 'We design and develop performance-driven mobile apps that deliver seamless user experiences across devices.',
      features: [
        'UI/UX-focused design',
        'Android & iOS support',
        'API integration',
        'Push notifications',
        'Secure authentication',
        'Offline functionality'
      ],
      technologies: ['Flutter', 'React Native', 'Kotlin', 'Swift', 'Firebase', 'Node.js'],
      benefits: [
        'Scalable',
        'Multi-platform',
        'Consistent performance',
        'Native feel'
      ],
      process: ['Planning', 'UI/UX Design', 'Development', 'Testing', 'Launch', 'Updates']
    },
    'web-app': {
      title: 'Powerful Web Applications Built for the Future',
      subtitle: 'Robust, scalable web applications with cloud readiness',
      overview: 'We develop robust, scalable web applications with cloud readiness and enterprise-grade performance.',
      features: [
        'Cloud integration',
        'Real-time dashboards',
        'User authentication',
        'Data automation',
        'High-speed backend',
        'API development'
      ],
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'AWS', 'Docker'],
      benefits: [
        'Scalable',
        'Secure',
        'High performance',
        'Cloud-ready'
      ],
      process: ['Analysis', 'Architecture', 'Development', 'Testing', 'Deployment', 'Monitoring']
    },
    'ai-ml': {
      title: 'AI-Driven Chatbots & Intelligent Dashboards',
      subtitle: 'Automate workflows and gain insights from data',
      overview: 'We create fully automated chatbots, ML-based systems, and AI dashboards to help businesses automate workflows and gain insights from data.',
      features: [
        'WhatsApp & Web chatbots',
        'NLP-based AI assistants',
        'Predictive analytics',
        'Custom ML models',
        'Smart dashboards',
        'Data visualization'
      ],
      technologies: ['Python', 'TensorFlow', 'OpenAI', 'LangChain', 'Node.js', 'Power BI'],
      benefits: [
        'Automate business processes',
        'Reduce human workload',
        'Gain real-time insights',
        'Data-driven decisions'
      ],
      process: ['Data Analysis', 'Model Training', 'Integration', 'Testing', 'Deployment', 'Optimization']
    },
    'whatsapp': {
      title: 'Automated WhatsApp Messaging Gateways for Business',
      subtitle: 'Send automated messages and run campaigns via WhatsApp',
      overview: 'Send automated messages, run campaigns, integrate chatbots, and manage customer communication via WhatsApp API.',
      features: [
        'Auto-replies',
        'Chatbot integration',
        'Broadcast campaigns',
        'CRM sync',
        'Rich-media messages',
        'Analytics dashboard'
      ],
      technologies: ['WhatsApp Cloud API', 'Node.js', 'Meta Graph API', 'DialogFlow'],
      benefits: [
        'Instant customer reach',
        'High engagement rate',
        'Scalable automation',
        'Cost-effective'
      ],
      process: ['Setup', 'Configuration', 'Bot Development', 'Testing', 'Launch', 'Monitoring']
    },
    'iot': {
      title: 'Smart IoT Solutions for Real-World Automation',
      subtitle: 'Sensor networks, dashboards, and data automation',
      overview: 'We build IoT systems powered by sensor networks, dashboards, and data automation for industries, agriculture, and smart infrastructure.',
      features: [
        'Sensor-based monitoring',
        'Real-time dashboards',
        'Alerts & analytics',
        'API connectivity',
        'Cloud data logging',
        'Remote control'
      ],
      technologies: ['ESP32', 'Arduino', 'MQTT', 'Firebase', 'AWS IoT', 'Python'],
      benefits: [
        'Real-time visibility',
        'Predictive insights',
        'Smart automation',
        'Cost savings'
      ],
      process: ['Design', 'Hardware Setup', 'Software Development', 'Integration', 'Testing', 'Deployment']
    },
    'desktop': {
      title: 'Custom Windows Software for Business Productivity',
      subtitle: 'Smooth, efficient desktop applications',
      overview: 'We create smooth, efficient Windows desktop applications for internal business operations.',
      features: [
        'Inventory systems',
        'POS software',
        'Employee management',
        'Automation tools',
        'Offline support',
        'Database integration'
      ],
      technologies: ['C#', '.NET', 'Electron.js', 'Python'],
      benefits: [
        'Reliable offline apps',
        'Fast performance',
        'Custom workflows',
        'Secure'
      ],
      process: ['Requirements', 'Design', 'Development', 'Testing', 'Deployment', 'Support']
    },
    'social-media': {
      title: 'Creative Social Media Management & Branding',
      subtitle: 'Professional social media presence',
      overview: 'We manage your social media, design modern content, and build online visibility.',
      features: [
        'Monthly content planning',
        'Post & reel designs',
        'Branding & strategy',
        'Community management',
        'Analytics reporting',
        'Campaign management'
      ],
      technologies: ['Photoshop', 'Illustrator', 'Canva', 'Meta Business Suite'],
      benefits: [
        'Strong brand visibility',
        'Professional presence',
        'Consistent posting',
        'Engagement growth'
      ],
      process: ['Strategy', 'Content Planning', 'Design', 'Scheduling', 'Monitoring', 'Reporting']
    },
    'seo': {
      title: 'SEO That Boosts Visibility and Drives Growth',
      subtitle: 'Rank higher with proven SEO strategies',
      overview: 'We help businesses rank higher with on-page, off-page, and technical SEO strategies.',
      features: [
        'Keyword research',
        'Technical SEO fixes',
        'Backlink building',
        'Page speed optimization',
        'Content optimization',
        'Local SEO'
      ],
      technologies: ['Ahrefs', 'SEMrush', 'Google Search Console', 'RankMath'],
      benefits: [
        'Long-term organic traffic',
        'Better ranking positions',
        'Increased visibility',
        'Higher conversions'
      ],
      process: ['Audit', 'Strategy', 'Implementation', 'Monitoring', 'Reporting', 'Optimization']
    }
  };

  const solution = solutions[solutionId] || solutions['wordpress'];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#0A0F1C] via-[#1a1f3a] to-[#0A0F1C]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#005CFF] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#7B3FFF] rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {solution.title}
          </h1>
          <p className="text-xl text-[#E7E9EF]">
            {solution.subtitle}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0F1C] mb-6">Overview</h2>
          <p className="text-xl text-[#4A5568] leading-relaxed">
            {solution.overview}
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0F1C] mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solution.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-xl border border-[#E7E9EF]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#005CFF] to-[#7B3FFF] flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-[#0A0F1C]">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0F1C] mb-12">Technologies Used</h2>
          <div className="flex flex-wrap gap-4">
            {solution.technologies.map((tech: string, index: number) => (
              <div
                key={index}
                className="px-6 py-3 bg-[#F7F9FC] border border-[#E7E9EF] rounded-full"
              >
                <span className="text-[#0A0F1C]">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0F1C] mb-12">Benefits for Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.benefits.map((benefit: string, index: number) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-[#E7E9EF] text-center"
              >
                <p className="text-[#0A0F1C]">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0F1C] mb-12">Process Breakdown</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {solution.process.map((step: string, index: number) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#005CFF] to-[#7B3FFF] flex items-center justify-center mx-auto mb-4 relative">
                  <span className="text-white text-xl">{index + 1}</span>
                </div>
                <p className="text-sm text-[#0A0F1C]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#0A0F1C] to-[#1a1f3a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-[#E7E9EF] mb-8">
            Let's discuss your project and create something amazing together
          </p>
          <Button
            onClick={() => onNavigate('contact')}
            className="bg-gradient-to-r from-[#005CFF] to-[#7B3FFF] text-white px-8 py-6 rounded-full hover:shadow-2xl hover:shadow-[#005CFF]/50 transition-all"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
