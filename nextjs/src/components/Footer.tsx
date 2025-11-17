import React from 'react';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#0A0F1C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#005CFF] to-[#7B3FFF] flex items-center justify-center">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <span className="text-2xl font-bold">AI Pulse</span>
            </div>
            <p className="text-[#E7E9EF] mb-6">
              Empowering Digital Future with AI-Driven Software
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#2A2F3A] flex items-center justify-center hover:bg-[#005CFF] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#2A2F3A] flex items-center justify-center hover:bg-[#005CFF] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#2A2F3A] flex items-center justify-center hover:bg-[#005CFF] transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#2A2F3A] flex items-center justify-center hover:bg-[#005CFF] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => onNavigate('solution-wordpress')} className="text-[#E7E9EF] hover:text-[#005CFF] transition-colors">
                  Website Development
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solution-ai-ml')} className="text-[#E7E9EF] hover:text-[#005CFF] transition-colors">
                  AI & ML Solutions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solution-mobile-app')} className="text-[#E7E9EF] hover:text-[#005CFF] transition-colors">
                  Mobile App Development
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solution-web-app')} className="text-[#E7E9EF] hover:text-[#005CFF] transition-colors">
                  Web Applications
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solution-iot')} className="text-[#E7E9EF] hover:text-[#005CFF] transition-colors">
                  IoT Solutions
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => onNavigate('about')} className="text-[#E7E9EF] hover:text-[#005CFF] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('case-studies')} className="text-[#E7E9EF] hover:text-[#005CFF] transition-colors">
                  Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="text-[#E7E9EF] hover:text-[#005CFF] transition-colors">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="text-[#E7E9EF] hover:text-[#005CFF] transition-colors">
                  Resources
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-[#E7E9EF] hover:text-[#005CFF] transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#E7E9EF] hover:text-[#005CFF] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E7E9EF] hover:text-[#005CFF] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <p className="text-[#E7E9EF] text-sm">
                📍 Sri Lanka
              </p>
              <p className="text-[#E7E9EF] text-sm mt-2">
                🌐 www.aipulse.tech
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2A2F3A] mt-12 pt-8 text-center">
          <p className="text-[#E7E9EF]">
            Copyright © 2025 AI Pulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
