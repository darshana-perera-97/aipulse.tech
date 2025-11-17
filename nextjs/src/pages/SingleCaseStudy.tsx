import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';

interface SingleCaseStudyProps {
  caseStudyId: string;
  onNavigate: (page: string) => void;
}

export function SingleCaseStudy({ caseStudyId, onNavigate }: SingleCaseStudyProps) {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-br from-[#0A0F1C] to-[#1a1f3a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="px-4 py-2 bg-[#005CFF] text-white rounded-full">
              FinTech Industry
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI Analytics Dashboard for Financial Services
          </h1>
          <p className="text-xl text-[#E7E9EF] max-w-3xl">
            How we built an intelligent analytics platform that processes over 1 million data points daily
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?w=1400&h=700&fit=crop"
              alt="AI Dashboard"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-[#F7F9FC] rounded-xl">
              <h3 className="text-sm text-[#4A5568] mb-2">Client</h3>
              <p className="text-xl font-bold text-[#0A0F1C]">Global FinTech Corp</p>
            </div>
            <div className="text-center p-6 bg-[#F7F9FC] rounded-xl">
              <h3 className="text-sm text-[#4A5568] mb-2">Timeline</h3>
              <p className="text-xl font-bold text-[#0A0F1C]">6 Months</p>
            </div>
            <div className="text-center p-6 bg-[#F7F9FC] rounded-xl">
              <h3 className="text-sm text-[#4A5568] mb-2">Team Size</h3>
              <p className="text-xl font-bold text-[#0A0F1C]">8 Experts</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#0A0F1C] mb-6">Overview</h2>
          <p className="text-lg text-[#4A5568] leading-relaxed mb-8">
            A leading financial services company needed a sophisticated analytics platform to process vast amounts of transaction data in real-time. They were struggling with slow data processing, delayed insights, and difficulty identifying fraud patterns. Our team was brought in to design and develop an AI-powered solution that could handle their complex requirements.
          </p>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0A0F1C] mb-12">Challenges</h2>
          <div className="space-y-6">
            {[
              'Processing over 1 million transactions daily with minimal latency',
              'Detecting fraudulent activities in real-time using machine learning',
              'Providing intuitive visualizations for complex financial data',
              'Ensuring compliance with strict financial regulations and data security',
              'Integrating with existing legacy systems without disruption'
            ].map((challenge, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-[#005CFF]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#005CFF] font-bold">{index + 1}</span>
                </div>
                <p className="text-[#0A0F1C]">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0A0F1C] mb-6">Our Solution</h2>
          <p className="text-lg text-[#4A5568] leading-relaxed mb-8">
            We developed a comprehensive AI-powered analytics dashboard with the following key features:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              'Real-time data processing pipeline using Apache Kafka',
              'Machine learning models for fraud detection with 99.2% accuracy',
              'Interactive dashboard with customizable widgets',
              'Automated alert system for anomaly detection',
              'Advanced data visualization with drill-down capabilities',
              'Role-based access control and audit logging'
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#005CFF] flex-shrink-0 mt-1" />
                <p className="text-[#0A0F1C]">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0A0F1C] mb-12">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['React', 'Node.js', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis', 'Apache Kafka', 'AWS', 'Docker', 'Kubernetes', 'Power BI', 'FastAPI'].map((tech) => (
              <div
                key={tech}
                className="p-6 bg-white rounded-xl border border-[#E7E9EF] text-center hover:border-[#005CFF] transition-colors"
              >
                <p className="font-bold text-[#0A0F1C]">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0A0F1C] mb-12">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { metric: '80%', label: 'Faster Analysis', color: 'from-[#005CFF] to-[#1FA2FF]' },
              { metric: '99.2%', label: 'Fraud Detection Accuracy', color: 'from-[#7B3FFF] to-[#005CFF]' },
              { metric: '1M+', label: 'Daily Transactions', color: 'from-[#005CFF] to-[#7B3FFF]' },
              { metric: '$2.5M', label: 'Annual Cost Savings', color: 'from-[#1FA2FF] to-[#005CFF]' }
            ].map((result, index) => (
              <div key={index} className="text-center p-8 bg-[#F7F9FC] rounded-2xl border border-[#E7E9EF]">
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${result.color} text-transparent bg-clip-text mb-3`}>
                  {result.metric}
                </div>
                <p className="text-[#4A5568]">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gradient-to-br from-[#0A0F1C] to-[#1a1f3a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
              alt="Client"
              className="w-20 h-20 rounded-full mx-auto border-4 border-[#005CFF]"
            />
          </div>
          <blockquote className="text-2xl text-white mb-6 italic">
            "AI Pulse transformed our data analytics capabilities. The platform they built has become essential to our operations, helping us make faster, smarter decisions while significantly reducing fraud."
          </blockquote>
          <p className="text-[#E7E9EF]">
            Michael Rodriguez<br />
            <span className="text-sm">CTO, Global FinTech Corp</span>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0F1C] mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-[#4A5568] mb-8">
            Let's create your success story together
          </p>
          <Button
            onClick={() => onNavigate('contact')}
            className="bg-gradient-to-r from-[#005CFF] to-[#7B3FFF] text-white px-8 py-6 rounded-full"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
