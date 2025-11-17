import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const solutions = [
    'wordpress',
    'custom-web',
    'mobile-app',
    'web-app',
    'ai-ml',
    'whatsapp',
    'iot',
    'desktop',
    'social-media',
    'seo'
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E7E9EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#005CFF] to-[#7B3FFF] flex items-center justify-center">
              <span className="text-white font-bold text-xl">AI</span>
            </div>
            <span className="text-2xl font-bold text-[#0A0F1C]">AI Pulse</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-[#0A0F1C] hover:text-[#005CFF] transition-colors ${
                currentPage === 'home' ? 'text-[#005CFF]' : ''
              }`}
            >
              Home
            </button>
            
            <div className="relative">
              <button
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
                className="flex items-center gap-1 text-[#0A0F1C] hover:text-[#005CFF] transition-colors"
              >
                Solutions
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {solutionsOpen && (
                <div
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-[#E7E9EF] py-2"
                >
                  <button
                    onClick={() => onNavigate('solutions')}
                    className="w-full text-left px-4 py-2 hover:bg-[#F7F9FC] text-[#0A0F1C] text-sm"
                  >
                    All Solutions
                  </button>
                  <div className="border-t border-[#E7E9EF] my-2" />
                  {solutions.map((sol) => (
                    <button
                      key={sol}
                      onClick={() => onNavigate(`solution-${sol}`)}
                      className="w-full text-left px-4 py-2 hover:bg-[#F7F9FC] text-[#0A0F1C] text-sm"
                    >
                      {sol.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigate('about')}
              className={`text-[#0A0F1C] hover:text-[#005CFF] transition-colors ${
                currentPage === 'about' ? 'text-[#005CFF]' : ''
              }`}
            >
              About Us
            </button>
            
            <button
              onClick={() => onNavigate('case-studies')}
              className={`text-[#0A0F1C] hover:text-[#005CFF] transition-colors ${
                currentPage === 'case-studies' ? 'text-[#005CFF]' : ''
              }`}
            >
              Case Studies
            </button>
            
            <button
              onClick={() => onNavigate('blog')}
              className={`text-[#0A0F1C] hover:text-[#005CFF] transition-colors ${
                currentPage === 'blog' ? 'text-[#005CFF]' : ''
              }`}
            >
              Blog
            </button>
            
            <button
              onClick={() => onNavigate('resources')}
              className={`text-[#0A0F1C] hover:text-[#005CFF] transition-colors ${
                currentPage === 'resources' ? 'text-[#005CFF]' : ''
              }`}
            >
              Resources
            </button>

            <Button
              onClick={() => onNavigate('contact')}
              className="bg-gradient-to-r from-[#005CFF] to-[#7B3FFF] text-white rounded-full px-6"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#0A0F1C]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#E7E9EF]">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                }}
                className="text-[#0A0F1C] text-left"
              >
                Home
              </button>
              <button
                onClick={() => {
                  onNavigate('solutions');
                  setMobileMenuOpen(false);
                }}
                className="text-[#0A0F1C] text-left"
              >
                Solutions
              </button>
              <button
                onClick={() => {
                  onNavigate('about');
                  setMobileMenuOpen(false);
                }}
                className="text-[#0A0F1C] text-left"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  onNavigate('case-studies');
                  setMobileMenuOpen(false);
                }}
                className="text-[#0A0F1C] text-left"
              >
                Case Studies
              </button>
              <button
                onClick={() => {
                  onNavigate('blog');
                  setMobileMenuOpen(false);
                }}
                className="text-[#0A0F1C] text-left"
              >
                Blog
              </button>
              <button
                onClick={() => {
                  onNavigate('resources');
                  setMobileMenuOpen(false);
                }}
                className="text-[#0A0F1C] text-left"
              >
                Resources
              </button>
              <Button
                onClick={() => {
                  onNavigate('contact');
                  setMobileMenuOpen(false);
                }}
                className="bg-gradient-to-r from-[#005CFF] to-[#7B3FFF] text-white rounded-full"
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
