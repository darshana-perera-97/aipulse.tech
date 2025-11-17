import React, { useState } from 'react';
import { FileText, Download, BookOpen, FileSpreadsheet, FileCode } from 'lucide-react';
import { Button } from '../components/ui/button';

export function Resources() {
  const [activeTab, setActiveTab] = useState('datasheets');

  const resources = {
    datasheets: [
      {
        title: 'AI Solutions Overview',
        description: 'Comprehensive guide to our AI and ML capabilities, including chatbots, predictive analytics, and automation.',
        fileSize: '2.4 MB',
        icon: FileSpreadsheet
      },
      {
        title: 'Web Development Services',
        description: 'Detailed information about our WordPress, custom web, and web application development services.',
        fileSize: '1.8 MB',
        icon: FileSpreadsheet
      },
      {
        title: 'Mobile App Development',
        description: 'Features, technologies, and process for iOS and Android app development.',
        fileSize: '2.1 MB',
        icon: FileSpreadsheet
      },
      {
        title: 'IoT Solutions Datasheet',
        description: 'Sensor technologies, monitoring systems, and smart automation capabilities.',
        fileSize: '3.2 MB',
        icon: FileSpreadsheet
      }
    ],
    whitepapers: [
      {
        title: 'The Future of AI in Business Operations',
        description: 'In-depth analysis of AI trends, implementation strategies, and ROI metrics for enterprise applications.',
        fileSize: '5.6 MB',
        icon: FileText
      },
      {
        title: 'Building Scalable Web Applications',
        description: 'Best practices for architecture, performance optimization, and cloud deployment strategies.',
        fileSize: '4.2 MB',
        icon: FileText
      },
      {
        title: 'IoT Security and Data Privacy',
        description: 'Comprehensive guide to securing IoT networks and ensuring data compliance.',
        fileSize: '3.8 MB',
        icon: FileText
      },
      {
        title: 'Digital Transformation Roadmap',
        description: 'Step-by-step guide for organizations embarking on digital transformation journeys.',
        fileSize: '6.1 MB',
        icon: FileText
      }
    ],
    ebooks: [
      {
        title: 'Complete Guide to AI Chatbots',
        description: 'Everything you need to know about designing, developing, and deploying intelligent chatbots.',
        fileSize: '8.4 MB',
        icon: BookOpen
      },
      {
        title: 'Modern Web Development Handbook',
        description: 'Covers React, Node.js, databases, APIs, and deployment for modern web applications.',
        fileSize: '12.3 MB',
        icon: BookOpen
      },
      {
        title: 'Mobile App Success Stories',
        description: 'Case studies and lessons learned from successful mobile app projects.',
        fileSize: '7.8 MB',
        icon: BookOpen
      },
      {
        title: 'SEO Masterclass 2025',
        description: 'Proven strategies for improving search rankings and driving organic traffic.',
        fileSize: '9.2 MB',
        icon: BookOpen
      }
    ],
    casestudies: [
      {
        title: 'FinTech AI Analytics Platform',
        description: 'How we built a platform processing 1M+ daily transactions with 99.2% fraud detection accuracy.',
        fileSize: '4.5 MB',
        icon: FileCode
      },
      {
        title: 'E-Commerce Platform Transformation',
        description: 'Scaling a retail business with custom e-commerce solution achieving 45% conversion increase.',
        fileSize: '3.9 MB',
        icon: FileCode
      },
      {
        title: 'Manufacturing IoT Implementation',
        description: 'Real-time monitoring system reducing downtime by 60% across 50+ machines.',
        fileSize: '5.2 MB',
        icon: FileCode
      },
      {
        title: 'Healthcare Telemedicine App',
        description: 'Mobile platform serving 10,000+ patients with AI-assisted diagnostics.',
        fileSize: '4.1 MB',
        icon: FileCode
      }
    ]
  };

  const tabs = [
    { id: 'datasheets', label: 'Datasheets', icon: FileSpreadsheet },
    { id: 'whitepapers', label: 'Whitepapers', icon: FileText },
    { id: 'ebooks', label: 'eBooks', icon: BookOpen },
    { id: 'casestudies', label: 'Case Studies', icon: FileCode }
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
            Knowledge{' '}
            <span className="bg-gradient-to-r from-[#005CFF] to-[#7B3FFF] text-transparent bg-clip-text">
              Resources
            </span>
          </h1>
          <p className="text-xl text-[#E7E9EF]">
            Download our comprehensive guides, whitepapers, and case studies to learn more about our solutions
          </p>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-xl transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-[#005CFF] to-[#7B3FFF] text-white shadow-lg'
                      : 'bg-[#F7F9FC] text-[#4A5568] hover:bg-[#E7E9EF]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-bold">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources[activeTab as keyof typeof resources].map((resource, index) => {
              const Icon = resource.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E7E9EF] group"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#005CFF] to-[#7B3FFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A0F1C] mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-[#4A5568] mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#4A5568]">{resource.fileSize}</span>
                    <Button
                      className="bg-[#F7F9FC] text-[#005CFF] hover:bg-gradient-to-r hover:from-[#005CFF] hover:to-[#7B3FFF] hover:text-white transition-all"
                      size="sm"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#0A0F1C] mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-[#4A5568] mb-8">
            Subscribe to receive our latest resources, insights, and updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl border border-[#E7E9EF] bg-white"
            />
            <Button className="bg-gradient-to-r from-[#005CFF] to-[#7B3FFF] text-white px-8 py-4 rounded-xl">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0A0F1C] to-[#1a1f3a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Custom Solutions?
          </h2>
          <p className="text-xl text-[#E7E9EF] mb-8">
            Let's discuss how we can help transform your business
          </p>
          <Button className="bg-gradient-to-r from-[#005CFF] to-[#7B3FFF] text-white px-8 py-4 rounded-full">
            Contact Our Team
          </Button>
        </div>
      </section>
    </div>
  );
}
