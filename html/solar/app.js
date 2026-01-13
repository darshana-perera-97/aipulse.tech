// Image Fallback Utility
function createImageWithFallback(src, alt, className = '') {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.className = className;
  
  img.onerror = function() {
    const errorSvg = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';
    img.src = errorSvg;
    img.className = `${className} opacity-30`;
  };
  
  return img;
}

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

function observeElements() {
  document.querySelectorAll('.fade-in-on-scroll, .slide-in-left-on-scroll, .slide-in-right-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// Router
const routes = {
  '/': renderHomePage,
  '/packages': renderPackagesPage,
  '/about': renderAboutPage,
  '/contact': renderContactPage,
  '/privacy': renderPrivacyPage,
  '/terms': renderTermsPage,
  '/cookies': renderCookiesPage
};

function router() {
  const hash = window.location.hash.slice(1) || '/';
  const app = document.getElementById('app');
  
  // Update active nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-path') === hash) {
      link.classList.add('active');
    }
  });
  
  // Render page
  if (routes[hash]) {
    app.innerHTML = '';
    routes[hash]();
    observeElements();
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
    // Scroll to top when page loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Navigation
function updateNavigation() {
  const hash = window.location.hash.slice(1) || '/';
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-path') === hash) {
      link.classList.add('active');
    }
  });
}

// Home Page
function renderHomePage() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0 animate-scale-in">
        ${createImageWithFallback('https://images.unsplash.com/photo-1756542713155-94f62d47d1b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMHNvbGFyJTIwcGFuZWxzJTIwcm9vZnxlbnwxfHx8fDE3Njc2NzkyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080', 'Solar panels on residential roof', 'w-full h-full object-cover opacity-20').outerHTML}
      </div>

      <div class="relative z-10 max-w-5xl mx-auto px-8 text-center">
        <h1 class="text-7xl tracking-tight mb-6 animate-fade-in-up" style="animation-delay: 0.2s">
          Power Your Home <br />
          <span class="bg-gradient-to-r from-[#84CC16] to-[#3B82F6] bg-clip-text text-transparent">
            with the Sun
          </span>
        </h1>

        <p class="text-xl text-[#475467] mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style="animation-delay: 0.4s">
          Sustainable energy solutions tailored for the modern home. Join thousands of families making the switch to clean, renewable power.
        </p>

        <div class="animate-fade-in-up" style="animation-delay: 0.6s">
          <a href="#/contact" class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#84CC16] to-[#3B82F6] text-white rounded-2xl hover:shadow-2xl hover:shadow-[#84CC16]/30 transition-all duration-300 hover:scale-105">
            Get Started
            <i data-lucide="arrow-right" class="w-5 h-5"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-24 bg-gradient-to-b from-white to-[#F9FAFB]">
      <div class="max-w-7xl mx-auto px-8">
        <div class="grid grid-cols-3 gap-16">
          <div class="text-center fade-in-on-scroll">
            <div class="text-6xl bg-gradient-to-r from-[#84CC16] to-[#3B82F6] bg-clip-text text-transparent mb-4">10k+</div>
            <div class="text-[#475467] text-lg">Homes Powered</div>
          </div>
          <div class="text-center fade-in-on-scroll" style="transition-delay: 0.1s">
            <div class="text-6xl bg-gradient-to-r from-[#84CC16] to-[#3B82F6] bg-clip-text text-transparent mb-4">30%</div>
            <div class="text-[#475467] text-lg">Average Savings</div>
          </div>
          <div class="text-center fade-in-on-scroll" style="transition-delay: 0.2s">
            <div class="text-6xl bg-gradient-to-r from-[#84CC16] to-[#3B82F6] bg-clip-text text-transparent mb-4">25-Year</div>
            <div class="text-[#475467] text-lg">Warranty</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-32 bg-white">
      <div class="max-w-7xl mx-auto px-8">
        <div class="text-center mb-20 fade-in-on-scroll">
          <h2 class="text-5xl tracking-tight mb-6">How It Works</h2>
          <p class="text-xl text-[#475467] max-w-2xl mx-auto">
            Four simple steps to a cleaner, more sustainable energy future
          </p>
        </div>

        <div class="grid grid-cols-4 gap-8">
          <div class="relative p-8 rounded-3xl bg-white border border-[#F2F4F7] hover:shadow-xl hover:shadow-[#84CC16]/10 transition-all duration-300 hover-scale fade-in-on-scroll">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#84CC16]/10 to-[#3B82F6]/10 flex items-center justify-center mb-6">
              <i data-lucide="zap" class="w-8 h-8 text-[#84CC16]"></i>
            </div>
            <h3 class="text-xl mb-3">Consult</h3>
            <p class="text-[#475467] leading-relaxed">Free energy assessment and custom solar design for your home</p>
          </div>
          <div class="relative p-8 rounded-3xl bg-white border border-[#F2F4F7] hover:shadow-xl hover:shadow-[#84CC16]/10 transition-all duration-300 hover-scale fade-in-on-scroll" style="transition-delay: 0.15s">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#84CC16]/10 to-[#3B82F6]/10 flex items-center justify-center mb-6">
              <i data-lucide="sun" class="w-8 h-8 text-[#84CC16]"></i>
            </div>
            <h3 class="text-xl mb-3">Design</h3>
            <p class="text-[#475467] leading-relaxed">Expert engineers create an optimal solar solution tailored to you</p>
            <div class="absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#84CC16] to-[#3B82F6] opacity-30 hidden xl:block"></div>
          </div>
          <div class="relative p-8 rounded-3xl bg-white border border-[#F2F4F7] hover:shadow-xl hover:shadow-[#84CC16]/10 transition-all duration-300 hover-scale fade-in-on-scroll" style="transition-delay: 0.3s">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#84CC16]/10 to-[#3B82F6]/10 flex items-center justify-center mb-6">
              <i data-lucide="shield" class="w-8 h-8 text-[#84CC16]"></i>
            </div>
            <h3 class="text-xl mb-3">Install</h3>
            <p class="text-[#475467] leading-relaxed">Professional installation with minimal disruption to your daily life</p>
            <div class="absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#84CC16] to-[#3B82F6] opacity-30 hidden xl:block"></div>
          </div>
          <div class="relative p-8 rounded-3xl bg-white border border-[#F2F4F7] hover:shadow-xl hover:shadow-[#84CC16]/10 transition-all duration-300 hover-scale fade-in-on-scroll" style="transition-delay: 0.45s">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#84CC16]/10 to-[#3B82F6]/10 flex items-center justify-center mb-6">
              <i data-lucide="arrow-right" class="w-8 h-8 text-[#84CC16]"></i>
            </div>
            <h3 class="text-xl mb-3">Save</h3>
            <p class="text-[#475467] leading-relaxed">Start generating clean energy and watch your electricity bills drop</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-32 bg-gradient-to-b from-white to-[#F9FAFB]">
      <div class="max-w-5xl mx-auto px-8">
        <div class="text-center mb-16 fade-in-on-scroll">
          <h2 class="text-5xl tracking-tight mb-6">What Our Customers Say</h2>
          <p class="text-xl text-[#475467]">
            Real stories from real families making a difference
          </p>
        </div>

        <div class="relative">
          <div id="testimonial-container" class="bg-white rounded-3xl p-12 shadow-lg shadow-[#101828]/5 border border-[#F2F4F7]">
            <!-- Testimonials will be dynamically loaded -->
          </div>

          <div class="flex items-center justify-center gap-4 mt-8">
            <button id="prev-testimonial" class="w-12 h-12 rounded-full bg-white border border-[#F2F4F7] flex items-center justify-center hover:border-[#84CC16] hover:text-[#84CC16] transition-all duration-300">
              <i data-lucide="chevron-left" class="w-5 h-5"></i>
            </button>

            <div id="testimonial-indicators" class="flex gap-2">
              <!-- Indicators will be dynamically loaded -->
            </div>

            <button id="next-testimonial" class="w-12 h-12 rounded-full bg-white border border-[#F2F4F7] flex items-center justify-center hover:border-[#84CC16] hover:text-[#84CC16] transition-all duration-300">
              <i data-lucide="chevron-right" class="w-5 h-5"></i>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-32 bg-gradient-to-br from-[#84CC16]/5 to-[#3B82F6]/5">
      <div class="max-w-4xl mx-auto px-8 text-center fade-in-on-scroll">
        <h2 class="text-5xl tracking-tight mb-6">
          Ready to Make the Switch?
        </h2>
        <p class="text-xl text-[#475467] mb-12">
          Get your free energy assessment and discover how much you could save
        </p>
        <a href="#/contact" class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#84CC16] to-[#3B82F6] text-white rounded-2xl hover:shadow-2xl hover:shadow-[#84CC16]/30 transition-all duration-300 hover:scale-105">
          Schedule Free Consultation
          <i data-lucide="arrow-right" class="w-5 h-5"></i>
        </a>
      </div>
    </section>
  `;
  
  // Initialize testimonials
  initTestimonials();
}

// Testimonials Data and Logic
const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Homeowner',
    content: 'Switching to solar with Lumina was the best decision. Our bills dropped by 40% in the first year!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  },
  {
    name: 'James Chen',
    role: 'Business Owner',
    content: 'Professional service from start to finish. The team was knowledgeable and the installation was seamless.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Environmental Advocate',
    content: 'Not only am I saving money, but I\'m also reducing my carbon footprint. Win-win with Lumina Solar!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
  },
];

let currentTestimonial = 0;

function initTestimonials() {
  const container = document.getElementById('testimonial-container');
  const indicators = document.getElementById('testimonial-indicators');
  
  if (!container || !indicators) return;
  
  // Render current testimonial
  function renderTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    const img = createImageWithFallback(testimonial.image, testimonial.name, 'w-20 h-20 rounded-full object-cover');
    
    container.innerHTML = `
      <div class="flex items-start gap-8">
        ${img.outerHTML}
        <div class="flex-1">
          <p class="text-2xl text-[#101828] mb-8 leading-relaxed">
            "${testimonial.content}"
          </p>
          <div>
            <div class="font-medium text-[#101828]">${testimonial.name}</div>
            <div class="text-[#475467]">${testimonial.role}</div>
          </div>
        </div>
      </div>
    `;
    
    // Update indicators
    indicators.innerHTML = testimonials.map((_, index) => `
      <button class="testimonial-indicator w-2 h-2 rounded-full transition-all duration-300 ${
        index === currentTestimonial
          ? 'bg-gradient-to-r from-[#84CC16] to-[#3B82F6] w-8'
          : 'bg-[#E5E7EB]'
      }" data-index="${index}"></button>
    `).join('');
    
    // Add click handlers to indicators
    document.querySelectorAll('.testimonial-indicator').forEach((btn, index) => {
      btn.addEventListener('click', () => {
        currentTestimonial = index;
        renderTestimonial();
        if (typeof lucide !== 'undefined') lucide.createIcons();
      });
    });
    
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
  
  // Navigation buttons
  document.getElementById('prev-testimonial')?.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    renderTestimonial();
  });
  
  document.getElementById('next-testimonial')?.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    renderTestimonial();
  });
  
  renderTestimonial();
}

// Packages Page
function renderPackagesPage() {
  const app = document.getElementById('app');
  
  const packages = [
    {
      icon: 'zap',
      name: 'Essential',
      bestFor: 'Small Apartments',
      price: '$8,999',
      system: '3kW System',
      features: [
        'Standard monitoring dashboard',
        'Basic energy analytics',
        '10-year equipment warranty',
        'Standard installation',
        'Email support',
        'Grid-tied system',
      ],
      gradient: 'from-[#84CC16]/10 to-[#3B82F6]/10',
    },
    {
      icon: 'home',
      name: 'Premium',
      bestFor: '3-4 Bedroom Homes',
      price: '$16,999',
      system: '6kW System',
      features: [
        'Advanced monitoring & analytics',
        'Battery backup included',
        '15-year equipment warranty',
        'Priority installation',
        'Phone & email support',
        'Smart home integration',
        'Energy storage optimization',
        'Remote monitoring app',
      ],
      gradient: 'from-[#84CC16]/20 to-[#3B82F6]/20',
      popular: true,
    },
    {
      icon: 'building-2',
      name: 'Ultimate',
      bestFor: 'Large Estates / Off-grid',
      price: '$34,999',
      system: '10kW+ System',
      features: [
        'Enterprise-grade monitoring',
        'Full battery backup system',
        '25-year equipment warranty',
        'White-glove installation',
        '24/7 priority support',
        'Complete smart home integration',
        'Advanced energy management',
        'Dedicated account manager',
        'Off-grid capability',
        'Multi-zone optimization',
      ],
      gradient: 'from-[#84CC16]/10 to-[#3B82F6]/10',
    },
  ];
  
  app.innerHTML = `
    <!-- Header -->
    <section class="py-32 bg-gradient-to-b from-white to-[#F9FAFB]">
      <div class="max-w-7xl mx-auto px-8">
        <div class="text-center mb-20 fade-in-on-scroll">
          <h1 class="text-6xl tracking-tight mb-6">
            Choose Your <span class="bg-gradient-to-r from-[#84CC16] to-[#3B82F6] bg-clip-text text-transparent">Solar Solution</span>
          </h1>
          <p class="text-xl text-[#475467] max-w-2xl mx-auto">
            Flexible packages designed to fit every home and budget. All systems include professional installation and comprehensive warranties.
          </p>
        </div>

        <!-- Package Cards -->
        <div class="grid grid-cols-3 gap-8">
          ${packages.map((pkg, index) => `
            <div class="relative rounded-3xl p-8 bg-white border-2 transition-all duration-300 ${
              pkg.popular
                ? 'border-transparent bg-gradient-to-br from-[#84CC16]/5 to-[#3B82F6]/5 shadow-2xl shadow-[#84CC16]/20'
                : 'border-[#F2F4F7] hover:border-[#84CC16]/30 hover:shadow-xl hover:shadow-[#84CC16]/10'
            } hover-lift fade-in-on-scroll" style="transition-delay: ${index * 0.15}s">
              ${pkg.popular ? `
                <div class="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div class="px-6 py-2 bg-gradient-to-r from-[#84CC16] to-[#3B82F6] text-white text-sm rounded-full shadow-lg">
                    Most Popular
                  </div>
                </div>
              ` : ''}

              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center mb-6">
                <i data-lucide="${pkg.icon}" class="w-8 h-8 ${pkg.popular ? 'text-[#84CC16]' : 'text-[#3B82F6]'}"></i>
              </div>

              <h3 class="text-2xl mb-2">${pkg.name}</h3>
              <p class="text-[#475467] mb-6">Best for: ${pkg.bestFor}</p>

              <div class="mb-6">
                <div class="text-5xl mb-2">
                  <span class="bg-gradient-to-r from-[#84CC16] to-[#3B82F6] bg-clip-text text-transparent">${pkg.price}</span>
                </div>
                <div class="text-[#475467]">${pkg.system}</div>
              </div>

              <div class="space-y-4 mb-8">
                ${pkg.features.map(feature => `
                  <div class="flex items-start gap-3">
                    <div class="w-5 h-5 rounded-full bg-gradient-to-br ${pkg.gradient} flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i data-lucide="check" class="w-3 h-3 ${pkg.popular ? 'text-[#84CC16]' : 'text-[#3B82F6]'}"></i>
                    </div>
                    <span class="text-[#475467]">${feature}</span>
                  </div>
                `).join('')}
              </div>

              <a href="#/contact" class="block w-full py-4 rounded-2xl text-center transition-all duration-300 ${
                pkg.popular
                  ? 'bg-gradient-to-r from-[#84CC16] to-[#3B82F6] text-white hover:shadow-lg hover:shadow-[#84CC16]/30'
                  : 'bg-white border-2 border-[#F2F4F7] text-[#101828] hover:border-[#84CC16] hover:text-[#84CC16]'
              }">
                Get Started
              </a>
            </div>
          `).join('')}
        </div>

        <!-- Additional Info -->
        <div class="mt-20 p-12 rounded-3xl bg-gradient-to-br from-[#84CC16]/5 to-[#3B82F6]/5 border border-[#F2F4F7] text-center fade-in-on-scroll">
          <h3 class="text-2xl mb-4">Not sure which package is right for you?</h3>
          <p class="text-[#475467] mb-6 text-lg">
            Our energy experts will analyze your home's specific needs and recommend the perfect solar solution.
          </p>
          <a href="#/contact" class="inline-block px-8 py-4 bg-gradient-to-r from-[#84CC16] to-[#3B82F6] text-white rounded-2xl hover:shadow-lg hover:shadow-[#84CC16]/30 transition-all duration-300">
            Schedule Free Consultation
          </a>
        </div>
      </div>
    </section>

    <!-- Comparison Section -->
    <section class="py-32 bg-white">
      <div class="max-w-7xl mx-auto px-8">
        <div class="text-center mb-16 fade-in-on-scroll">
          <h2 class="text-5xl tracking-tight mb-6">Package Comparison</h2>
          <p class="text-xl text-[#475467]">
            See what's included in each solar package
          </p>
        </div>

        <div class="bg-white rounded-3xl border border-[#F2F4F7] overflow-hidden fade-in-on-scroll">
          <table class="w-full">
            <thead>
              <tr class="border-b border-[#F2F4F7]">
                <th class="text-left px-8 py-6 text-[#101828]">Feature</th>
                <th class="px-8 py-6 text-[#101828]">Essential</th>
                <th class="px-8 py-6 text-[#101828] bg-gradient-to-br from-[#84CC16]/5 to-[#3B82F6]/5">Premium</th>
                <th class="px-8 py-6 text-[#101828]">Ultimate</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-[#F2F4F7]">
                <td class="px-8 py-6 text-[#475467]">System Size</td>
                <td class="px-8 py-6 text-center">3kW</td>
                <td class="px-8 py-6 text-center bg-gradient-to-br from-[#84CC16]/5 to-[#3B82F6]/5">6kW</td>
                <td class="px-8 py-6 text-center">10kW+</td>
              </tr>
              <tr class="border-b border-[#F2F4F7]">
                <td class="px-8 py-6 text-[#475467]">Battery Backup</td>
                <td class="px-8 py-6 text-center">–</td>
                <td class="px-8 py-6 text-center bg-gradient-to-br from-[#84CC16]/5 to-[#3B82F6]/5">✓</td>
                <td class="px-8 py-6 text-center">✓</td>
              </tr>
              <tr class="border-b border-[#F2F4F7]">
                <td class="px-8 py-6 text-[#475467]">Warranty Period</td>
                <td class="px-8 py-6 text-center">10 years</td>
                <td class="px-8 py-6 text-center bg-gradient-to-br from-[#84CC16]/5 to-[#3B82F6]/5">15 years</td>
                <td class="px-8 py-6 text-center">25 years</td>
              </tr>
              <tr class="border-b border-[#F2F4F7]">
                <td class="px-8 py-6 text-[#475467]">Smart Home Integration</td>
                <td class="px-8 py-6 text-center">–</td>
                <td class="px-8 py-6 text-center bg-gradient-to-br from-[#84CC16]/5 to-[#3B82F6]/5">✓</td>
                <td class="px-8 py-6 text-center">✓</td>
              </tr>
              <tr>
                <td class="px-8 py-6 text-[#475467]">Support Level</td>
                <td class="px-8 py-6 text-center">Email</td>
                <td class="px-8 py-6 text-center bg-gradient-to-br from-[#84CC16]/5 to-[#3B82F6]/5">Phone & Email</td>
                <td class="px-8 py-6 text-center">24/7 Priority</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
}

// About Page
function renderAboutPage() {
  const app = document.getElementById('app');
  
  const values = [
    {
      icon: 'leaf',
      title: 'Transparency',
      description: 'We believe in honest communication and clear pricing. No hidden fees, no surprises—just straightforward solar solutions.',
    },
    {
      icon: 'target',
      title: 'Innovation',
      description: 'We stay at the forefront of solar technology, bringing you the most efficient and reliable systems available.',
    },
    {
      icon: 'award',
      title: 'Longevity',
      description: 'Our systems are built to last decades, backed by industry-leading warranties and exceptional craftsmanship.',
    },
  ];
  
  const team = [
    {
      name: 'Michael Torres',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    },
    {
      name: 'Sarah Anderson',
      role: 'Director of Operations',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    },
    {
      name: 'David Kim',
      role: 'Head of Engineering',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400',
    },
    {
      name: 'Emma Wilson',
      role: 'Customer Success Lead',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    },
  ];
  
  app.innerHTML = `
    <!-- Hero Section -->
    <section class="py-32 bg-gradient-to-b from-white to-[#F9FAFB]">
      <div class="max-w-7xl mx-auto px-8">
        <div class="text-center mb-20 fade-in-on-scroll">
          <h1 class="text-6xl tracking-tight mb-6">
            Our <span class="bg-gradient-to-r from-[#84CC16] to-[#3B82F6] bg-clip-text text-transparent">Mission</span>
          </h1>
          <p class="text-2xl text-[#475467] max-w-3xl mx-auto leading-relaxed">
            Accelerating the world's transition to sustainable energy, one home at a time.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-12 items-center mb-32">
          <div class="slide-in-left-on-scroll">
            ${createImageWithFallback('https://images.unsplash.com/photo-1764885518733-6cb0b3473996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwdGVjaG5vbG9neSUyMGNsZWFufGVufDF8fHx8MTc2NzY3OTI5OXww&ixlib=rb-4.1.0&q=80&w=1080', 'Solar panel technology', 'w-full h-[500px] object-cover rounded-3xl').outerHTML}
          </div>

          <div class="space-y-6 slide-in-right-on-scroll">
            <h2 class="text-4xl tracking-tight">Building a Sustainable Future</h2>
            <p class="text-lg text-[#475467] leading-relaxed">
              Founded in 2015, Lumina Solar began with a simple vision: make clean, renewable energy accessible to every household. We've grown from a small team of passionate engineers to a leading provider of residential solar solutions.
            </p>
            <p class="text-lg text-[#475467] leading-relaxed">
              Today, we've powered over 10,000 homes and prevented millions of pounds of CO₂ emissions. But we're just getting started. Every installation brings us closer to a world powered by clean, sustainable energy.
            </p>
            <div class="grid grid-cols-2 gap-8 pt-8">
              <div>
                <div class="text-4xl bg-gradient-to-r from-[#84CC16] to-[#3B82F6] bg-clip-text text-transparent mb-2">10,000+</div>
                <div class="text-[#475467]">Homes Powered</div>
              </div>
              <div>
                <div class="text-4xl bg-gradient-to-r from-[#84CC16] to-[#3B82F6] bg-clip-text text-transparent mb-2">50M+</div>
                <div class="text-[#475467]">lbs CO₂ Prevented</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-32 bg-white">
      <div class="max-w-7xl mx-auto px-8">
        <div class="text-center mb-20 fade-in-on-scroll">
          <h2 class="text-5xl tracking-tight mb-6">Our Values</h2>
          <p class="text-xl text-[#475467] max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div class="grid grid-cols-3 gap-12">
          ${values.map((value, index) => `
            <div class="text-center fade-in-on-scroll" style="transition-delay: ${index * 0.1}s">
              <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#84CC16]/10 to-[#3B82F6]/10 flex items-center justify-center mx-auto mb-6">
                <i data-lucide="${value.icon}" class="w-10 h-10 text-[#84CC16]"></i>
              </div>
              <h3 class="text-2xl mb-4">${value.title}</h3>
              <p class="text-[#475467] leading-relaxed">${value.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-32 bg-gradient-to-b from-white to-[#F9FAFB]">
      <div class="max-w-7xl mx-auto px-8">
        <div class="text-center mb-20 fade-in-on-scroll">
          <h2 class="text-5xl tracking-tight mb-6">Meet Our Team</h2>
          <p class="text-xl text-[#475467] max-w-2xl mx-auto">
            Expert engineers and dedicated professionals committed to your solar success
          </p>
        </div>

        <div class="grid grid-cols-4 gap-8">
          ${team.map((member, index) => {
            const img = createImageWithFallback(member.image, member.name, 'w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110');
            return `
              <div class="group fade-in-on-scroll hover-scale" style="transition-delay: ${index * 0.1}s">
                <div class="relative mb-6 overflow-hidden rounded-3xl">
                  ${img.outerHTML}
                  <div class="absolute inset-0 bg-gradient-to-t from-[#101828]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 class="text-xl mb-2">${member.name}</h3>
                <p class="text-[#475467]">${member.role}</p>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </section>

    <!-- Sustainability Story -->
    <section class="py-32 bg-white">
      <div class="max-w-7xl mx-auto px-8">
        <div class="grid grid-cols-2 gap-12 items-center">
          <div class="space-y-6 slide-in-left-on-scroll">
            <div class="inline-block px-4 py-2 bg-gradient-to-r from-[#84CC16]/10 to-[#3B82F6]/10 rounded-full text-[#84CC16] mb-4">
              Our Commitment
            </div>
            <h2 class="text-4xl tracking-tight">More Than Just Solar Panels</h2>
            <p class="text-lg text-[#475467] leading-relaxed">
              Every Lumina Solar installation is a step toward a cleaner planet. We partner with environmental organizations to plant trees, support renewable energy research, and educate communities about sustainable living.
            </p>
            <p class="text-lg text-[#475467] leading-relaxed">
              Our manufacturing partners use eco-friendly processes, and we offset 100% of our operational carbon footprint. When you choose Lumina Solar, you're not just powering your home—you're powering change.
            </p>
            <div class="flex items-center gap-8 pt-8">
              <div class="flex items-center gap-3">
                <i data-lucide="users" class="w-8 h-8 text-[#84CC16]"></i>
                <div>
                  <div class="text-2xl">100%</div>
                  <div class="text-[#475467]">Carbon Neutral</div>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <i data-lucide="leaf" class="w-8 h-8 text-[#3B82F6]"></i>
                <div>
                  <div class="text-2xl">25K+</div>
                  <div class="text-[#475467]">Trees Planted</div>
                </div>
              </div>
            </div>
          </div>

          <div class="slide-in-right-on-scroll">
            ${createImageWithFallback('https://images.unsplash.com/photo-1720610784599-18c02b1cc9ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGluc3RhbGxhdGlvbiUyMGhvdXNlfGVufDF8fHx8MTc2NzY3OTI5OXww&ixlib=rb-4.1.0&q=80&w=1080', 'Solar installation', 'w-full h-[500px] object-cover rounded-3xl').outerHTML}
          </div>
        </div>
      </div>
    </section>
  `;
}

// Contact Page
function renderContactPage() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <!-- Header -->
    <section class="py-32 bg-gradient-to-b from-white to-[#F9FAFB]">
      <div class="max-w-7xl mx-auto px-8">
        <div class="text-center mb-20 fade-in-on-scroll">
          <h1 class="text-6xl tracking-tight mb-6">
            Get Your <span class="bg-gradient-to-r from-[#84CC16] to-[#3B82F6] bg-clip-text text-transparent">Free Quote</span>
          </h1>
          <p class="text-xl text-[#475467] max-w-2xl mx-auto">
            Ready to start your solar journey? Fill out the form below and our energy experts will contact you within 24 hours.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-16">
          <!-- Contact Form -->
          <div class="slide-in-left-on-scroll">
            <div class="bg-white rounded-3xl p-12 border border-[#F2F4F7] shadow-lg shadow-[#101828]/5">
              <h2 class="text-3xl mb-8">Request a Consultation</h2>

              <form id="contact-form" class="space-y-8">
                <div class="form-group">
                  <input type="text" name="name" id="name" required placeholder=" " class="w-full px-6 py-4 border-2 border-[#F2F4F7] rounded-2xl focus:border-[#84CC16] focus:outline-none transition-all duration-300">
                  <label for="name">Full Name</label>
                </div>

                <div class="form-group">
                  <input type="email" name="email" id="email" required placeholder=" " class="w-full px-6 py-4 border-2 border-[#F2F4F7] rounded-2xl focus:border-[#84CC16] focus:outline-none transition-all duration-300">
                  <label for="email">Email Address</label>
                </div>

                <div class="form-group">
                  <select name="electricityBill" id="electricityBill" required class="w-full px-6 py-4 border-2 border-[#F2F4F7] rounded-2xl focus:border-[#84CC16] focus:outline-none transition-all duration-300">
                    <option value="" selected>Select Monthly Electricity Bill</option>
                    <option value="0-100">$0 - $100</option>
                    <option value="100-200">$100 - $200</option>
                    <option value="200-300">$200 - $300</option>
                    <option value="300-400">$300 - $400</option>
                    <option value="400+">$400+</option>
                  </select>
                  <label for="electricityBill" id="electricityBill-label">Monthly Electricity Bill</label>
                </div>

                <div class="form-group">
                  <input type="text" name="address" id="address" required placeholder=" " class="w-full px-6 py-4 border-2 border-[#F2F4F7] rounded-2xl focus:border-[#84CC16] focus:outline-none transition-all duration-300">
                  <label for="address">Installation Address</label>
                </div>

                <div class="form-group">
                  <textarea name="message" id="message" rows="4" placeholder=" " class="w-full px-6 py-4 border-2 border-[#F2F4F7] rounded-2xl focus:border-[#84CC16] focus:outline-none transition-all duration-300 resize-none"></textarea>
                  <label for="message">Additional Details (Optional)</label>
                </div>

                <button type="submit" class="w-full py-4 bg-gradient-to-r from-[#84CC16] to-[#3B82F6] text-white rounded-2xl hover:shadow-lg hover:shadow-[#84CC16]/30 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105">
                  Get My Free Quote
                  <i data-lucide="send" class="w-5 h-5"></i>
                </button>

                <p class="text-sm text-[#475467] text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>

          <!-- Contact Info & Calendar -->
          <div class="space-y-8 slide-in-right-on-scroll">
            <!-- Contact Information -->
            <div class="bg-gradient-to-br from-[#84CC16]/5 to-[#3B82F6]/5 rounded-3xl p-12 border border-[#F2F4F7]">
              <h3 class="text-2xl mb-8">Contact Information</h3>

              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#84CC16]/10 to-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                    <i data-lucide="phone" class="w-6 h-6 text-[#84CC16]"></i>
                  </div>
                  <div>
                    <div class="text-[#475467] mb-1">Phone</div>
                    <div class="text-lg">(555) 123-4567</div>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#84CC16]/10 to-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                    <i data-lucide="mail" class="w-6 h-6 text-[#3B82F6]"></i>
                  </div>
                  <div>
                    <div class="text-[#475467] mb-1">Email</div>
                    <div class="text-lg">hello@luminasolar.com</div>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#84CC16]/10 to-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                    <i data-lucide="map-pin" class="w-6 h-6 text-[#84CC16]"></i>
                  </div>
                  <div>
                    <div class="text-[#475467] mb-1">Office</div>
                    <div class="text-lg">
                      123 Solar Street<br />
                      Green City, CA 90210
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Book a Site Visit -->
            <div class="bg-white rounded-3xl p-12 border border-[#F2F4F7] shadow-lg shadow-[#101828]/5">
              <h3 class="text-2xl mb-6">Book a Site Visit</h3>
              <p class="text-[#475467] mb-8 leading-relaxed">
                Want a personalized assessment? Schedule a free on-site consultation with our solar experts. We'll evaluate your property, discuss your energy goals, and provide a detailed proposal.
              </p>

              <div class="bg-gradient-to-br from-[#84CC16]/5 to-[#3B82F6]/5 rounded-2xl p-6 mb-6">
                <div class="text-sm text-[#475467] mb-2">Available Times</div>
                <div class="text-lg">Monday - Saturday</div>
                <div class="text-lg text-[#475467]">9:00 AM - 6:00 PM</div>
              </div>

              <button class="w-full py-4 bg-gradient-to-r from-[#84CC16] to-[#3B82F6] text-white rounded-2xl hover:shadow-lg hover:shadow-[#84CC16]/30 transition-all duration-300">
                Schedule Site Visit
              </button>
            </div>

            <!-- FAQ Prompt -->
            <div class="bg-gradient-to-br from-[#84CC16]/5 to-[#3B82F6]/5 rounded-3xl p-8 border border-[#F2F4F7]">
              <h4 class="text-lg mb-3">Have Questions?</h4>
              <p class="text-[#475467] mb-4">
                Check out our FAQ section or chat with our support team for instant answers.
              </p>
              <button class="text-[#84CC16] hover:text-[#3B82F6] transition-colors duration-300">
                View FAQs →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-0">
      <div class="w-full h-[400px] bg-gradient-to-br from-[#84CC16]/10 to-[#3B82F6]/10 relative">
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center">
            <i data-lucide="map-pin" class="w-16 h-16 text-[#84CC16] mx-auto mb-4"></i>
            <p class="text-[#475467] text-lg">Interactive Map Coming Soon</p>
          </div>
        </div>
      </div>
    </section>
  `;
  
  // Form handling
  const form = document.getElementById('contact-form');
  if (form) {
    // Handle select label positioning
    const select = document.getElementById('electricityBill');
    const selectLabel = document.getElementById('electricityBill-label');
    if (select && selectLabel) {
      select.addEventListener('change', function() {
        if (this.value !== '') {
          selectLabel.style.top = '-12px';
          selectLabel.style.left = '16px';
          selectLabel.style.fontSize = '14px';
          selectLabel.style.background = 'white';
          selectLabel.style.padding = '0 8px';
          selectLabel.style.color = '#84CC16';
        } else {
          selectLabel.style.top = '16px';
          selectLabel.style.left = '24px';
          selectLabel.style.fontSize = 'inherit';
          selectLabel.style.background = 'transparent';
          selectLabel.style.padding = '0';
          selectLabel.style.color = '#475467';
        }
      });
    }
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      console.log('Form submitted:', data);
      alert('Thank you for your interest! We will contact you within 24 hours.');
      form.reset();
      // Reset select label
      if (selectLabel) {
        selectLabel.style.top = '16px';
        selectLabel.style.left = '24px';
        selectLabel.style.fontSize = 'inherit';
        selectLabel.style.background = 'transparent';
        selectLabel.style.padding = '0';
        selectLabel.style.color = '#475467';
      }
    });
  }
}

// Privacy Policy Page
function renderPrivacyPage() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <section class="py-32 bg-gradient-to-b from-white to-[#F9FAFB]">
      <div class="max-w-4xl mx-auto px-8">
        <div class="text-center mb-16 fade-in-on-scroll">
          <h1 class="text-6xl tracking-tight mb-6">
            <span class="bg-gradient-to-r from-[#84CC16] to-[#3B82F6] bg-clip-text text-transparent">Privacy Policy</span>
          </h1>
          <p class="text-xl text-[#475467]">
            Last updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div class="bg-white rounded-3xl p-12 border border-[#F2F4F7] shadow-lg shadow-[#101828]/5 space-y-8 fade-in-on-scroll">
          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">1. Introduction</h2>
            <p class="text-[#475467] leading-relaxed mb-4">
              Lumina Solar ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p class="text-[#475467] leading-relaxed">
              By using our website, you consent to the data practices described in this policy. If you do not agree with the practices described, please do not use our services.
            </p>
          </div>

          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">2. Information We Collect</h2>
            <h3 class="text-xl mb-3 text-[#101828]">2.1 Personal Information</h3>
            <p class="text-[#475467] leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul class="list-disc list-inside space-y-2 text-[#475467] mb-4 ml-4">
              <li>Request a quote or consultation</li>
              <li>Fill out contact forms</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us via email or phone</li>
            </ul>
            <p class="text-[#475467] leading-relaxed mb-4">
              This information may include: name, email address, phone number, physical address, and any other information you choose to provide.
            </p>
            
            <h3 class="text-xl mb-3 text-[#101828]">2.2 Automatically Collected Information</h3>
            <p class="text-[#475467] leading-relaxed">
              We automatically collect certain information about your device when you visit our website, including IP address, browser type, operating system, and browsing behavior.
            </p>
          </div>

          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">3. How We Use Your Information</h2>
            <p class="text-[#475467] leading-relaxed mb-4">We use the information we collect to:</p>
            <ul class="list-disc list-inside space-y-2 text-[#475467] ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your requests and respond to inquiries</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Analyze website usage and trends</li>
              <li>Prevent fraud and ensure security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">4. Information Sharing and Disclosure</h2>
            <p class="text-[#475467] leading-relaxed mb-4">
              We do not sell your personal information. We may share your information only in the following circumstances:
            </p>
            <ul class="list-disc list-inside space-y-2 text-[#475467] ml-4">
              <li>With service providers who assist us in operating our website and conducting our business</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or merger</li>
              <li>With your explicit consent</li>
            </ul>
          </div>

          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">5. Data Security</h2>
            <p class="text-[#475467] leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">6. Your Rights</h2>
            <p class="text-[#475467] leading-relaxed mb-4">You have the right to:</p>
            <ul class="list-disc list-inside space-y-2 text-[#475467] ml-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your information</li>
            </ul>
          </div>

          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">7. Cookies and Tracking Technologies</h2>
            <p class="text-[#475467] leading-relaxed">
              We use cookies and similar tracking technologies to enhance your browsing experience. For more detailed information, please see our <a href="#/cookies" class="text-[#84CC16] hover:text-[#3B82F6] transition-colors underline">Cookie Policy</a>.
            </p>
          </div>

          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">8. Children's Privacy</h2>
            <p class="text-[#475467] leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </div>

          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">9. Changes to This Policy</h2>
            <p class="text-[#475467] leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </div>

          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">10. Contact Us</h2>
            <p class="text-[#475467] leading-relaxed mb-4">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <div class="bg-gradient-to-br from-[#84CC16]/5 to-[#3B82F6]/5 rounded-2xl p-6">
              <p class="text-[#101828] mb-2"><strong>Email:</strong> privacy@luminasolar.com</p>
              <p class="text-[#101828] mb-2"><strong>Phone:</strong> (555) 123-4567</p>
              <p class="text-[#101828]"><strong>Address:</strong> 123 Solar Street, Green City, CA 90210</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Terms of Service Page
function renderTermsPage() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <section class="py-32 bg-gradient-to-b from-white to-[#F9FAFB]">
      <div class="max-w-4xl mx-auto px-8">
        <div class="text-center mb-16 fade-in-on-scroll">
          <h1 class="text-6xl tracking-tight mb-6">
            <span class="bg-gradient-to-r from-[#84CC16] to-[#3B82F6] bg-clip-text text-transparent">Terms of Service</span>
          </h1>
          <p class="text-xl text-[#475467]">
            Last updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div class="bg-white rounded-3xl p-12 border border-[#F2F4F7] shadow-lg shadow-[#101828]/5 space-y-8 fade-in-on-scroll">
          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">1. Acceptance of Terms</h2>
            <p class="text-[#475467] leading-relaxed">
              By accessing and using the Lumina Solar website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </div>

          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">2. Use of Services</h2>
            <h3 class="text-xl mb-3 text-[#101828]">2.1 Eligibility</h3>
            <p class="text-[#475467] leading-relaxed mb-4">
              You must be at least 18 years old and have the legal capacity to enter into contracts to use our services.
            </p>
            
            <h3 class="text-xl mb-3 text-[#101828]">2.2 Permitted Use</h3>
            <p class="text-[#475467] leading-relaxed mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms.</p>
            
            <h3 class="text-xl mb-3 text-[#101828]">2.3 Prohibited Activities</h3>
            <p class="text-[#475467] leading-relaxed mb-4">You agree not to:</p>
            <ul class="list-disc list-inside space-y-2 text-[#475467] ml-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon intellectual property rights</li>
              <li>Transmit harmful code or malware</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the operation of our services</li>
            </ul>
          </div>

          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">3. Solar Installation Services</h2>
            <h3 class="text-xl mb-3 text-[#101828]">3.1 Quotes and Estimates</h3>
            <p class="text-[#475467] leading-relaxed mb-4">
              All quotes and estimates provided are subject to site assessment and may change based on actual conditions. Final pricing will be confirmed in a written contract.
            </p>
            
            <h3 class="text-xl mb-3 text-[#101828]">3.2 Installation Process</h3>
            <p class="text-[#475467] leading-relaxed mb-4">
              Installation timelines are estimates and may vary based on weather, permitting, and other factors beyond our control. We will keep you informed of any delays.
            </p>
            
            <h3 class="text-xl mb-3 text-[#101828]">3.3 Warranties</h3>
            <p class="text-[#475467] leading-relaxed">
              All installations come with manufacturer warranties as specified in your contract. Additional warranty terms will be provided in writing.
            </p>
          </div>

          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">4. Payment Terms</h2>
            <p class="text-[#475467] leading-relaxed mb-4">
              Payment terms will be specified in your installation contract. Generally:
            </p>
            <ul class="list-disc list-inside space-y-2 text-[#475467] ml-4">
              <li>A deposit may be required to begin work</li>
              <li>Progress payments may be due at various stages</li>
              <li>Final payment is due upon completion and inspection</li>
              <li>Late payments may incur fees as specified in your contract</li>
            </ul>
          </div>

          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">5. Intellectual Property</h2>
            <p class="text-[#475467] leading-relaxed">
              All content on this website, including text, graphics, logos, and software, is the property of Lumina Solar or its licensors and is protected by copyright and other intellectual property laws.
            </p>
          </div>

          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">6. Limitation of Liability</h2>
            <p class="text-[#475467] leading-relaxed mb-4">
              To the maximum extent permitted by law, Lumina Solar shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.
            </p>
            <p class="text-[#475467] leading-relaxed">
              Our total liability shall not exceed the amount you paid for the specific service giving rise to the claim.
            </p>
          </div>

          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">7. Indemnification</h2>
            <p class="text-[#475467] leading-relaxed">
              You agree to indemnify and hold harmless Lumina Solar from any claims, damages, or expenses arising from your violation of these Terms or your use of our services.
            </p>
          </div>

          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">8. Termination</h2>
            <p class="text-[#475467] leading-relaxed">
              We reserve the right to terminate or suspend your access to our services at any time, with or without cause, and with or without notice, for any reason including violation of these Terms.
            </p>
          </div>

          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">9. Governing Law</h2>
            <p class="text-[#475467] leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
            </p>
          </div>

          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">10. Changes to Terms</h2>
            <p class="text-[#475467] leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on this page and updating the "Last updated" date.
            </p>
          </div>

          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">11. Contact Information</h2>
            <p class="text-[#475467] leading-relaxed mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div class="bg-gradient-to-br from-[#84CC16]/5 to-[#3B82F6]/5 rounded-2xl p-6">
              <p class="text-[#101828] mb-2"><strong>Email:</strong> legal@luminasolar.com</p>
              <p class="text-[#101828] mb-2"><strong>Phone:</strong> (555) 123-4567</p>
              <p class="text-[#101828]"><strong>Address:</strong> 123 Solar Street, Green City, CA 90210</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Cookie Policy Page
function renderCookiesPage() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <section class="py-32 bg-gradient-to-b from-white to-[#F9FAFB]">
      <div class="max-w-4xl mx-auto px-8">
        <div class="text-center mb-16 fade-in-on-scroll">
          <h1 class="text-6xl tracking-tight mb-6">
            <span class="bg-gradient-to-r from-[#84CC16] to-[#3B82F6] bg-clip-text text-transparent">Cookie Policy</span>
          </h1>
          <p class="text-xl text-[#475467]">
            Last updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div class="bg-white rounded-3xl p-12 border border-[#F2F4F7] shadow-lg shadow-[#101828]/5 space-y-8 fade-in-on-scroll">
          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">1. What Are Cookies?</h2>
            <p class="text-[#475467] leading-relaxed">
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
          </div>

          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">2. How We Use Cookies</h2>
            <p class="text-[#475467] leading-relaxed mb-4">
              Lumina Solar uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device until deleted).
            </p>
          </div>

          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">3. Types of Cookies We Use</h2>
            
            <h3 class="text-xl mb-3 text-[#101828]">3.1 Essential Cookies</h3>
            <p class="text-[#475467] leading-relaxed mb-4">
              These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies.
            </p>
            
            <h3 class="text-xl mb-3 text-[#101828]">3.2 Analytics Cookies</h3>
            <p class="text-[#475467] leading-relaxed mb-4">
              We use analytics cookies to understand how visitors interact with our website. This helps us improve our site's performance and user experience. These cookies collect anonymous information about page views and navigation patterns.
            </p>
            
            <h3 class="text-xl mb-3 text-[#101828]">3.3 Functional Cookies</h3>
            <p class="text-[#475467] leading-relaxed mb-4">
              These cookies allow the website to remember choices you make (such as language preferences) and provide enhanced, personalized features.
            </p>
            
            <h3 class="text-xl mb-3 text-[#101828]">3.4 Marketing Cookies</h3>
            <p class="text-[#475467] leading-relaxed">
              These cookies are used to deliver advertisements relevant to you and your interests. They may also be used to limit the number of times you see an advertisement.
            </p>
          </div>

          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">4. Third-Party Cookies</h2>
            <p class="text-[#475467] leading-relaxed mb-4">
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics and deliver advertisements. These third parties may include:
            </p>
            <ul class="list-disc list-inside space-y-2 text-[#475467] ml-4">
              <li>Google Analytics for website analytics</li>
              <li>Social media platforms for sharing functionality</li>
              <li>Advertising networks for targeted advertising</li>
            </ul>
          </div>

          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">5. Managing Cookies</h2>
            <h3 class="text-xl mb-3 text-[#101828]">5.1 Browser Settings</h3>
            <p class="text-[#475467] leading-relaxed mb-4">
              Most web browsers allow you to control cookies through their settings preferences. You can set your browser to refuse cookies or delete certain cookies. However, if you disable cookies, some features of our website may not function properly.
            </p>
            
            <h3 class="text-xl mb-3 text-[#101828]">5.2 Cookie Preferences</h3>
            <p class="text-[#475467] leading-relaxed mb-4">
              You can manage your cookie preferences through our cookie consent banner when you first visit our website. You can also change your preferences at any time by clicking the cookie settings link in the footer.
            </p>
            
            <h3 class="text-xl mb-3 text-[#101828]">5.3 Opt-Out Links</h3>
            <p class="text-[#475467] leading-relaxed">
              For third-party cookies, you can opt out through the following links:
            </p>
            <ul class="list-disc list-inside space-y-2 text-[#475467] ml-4 mt-2">
              <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" class="text-[#84CC16] hover:text-[#3B82F6] transition-colors underline">Google Analytics Opt-out</a></li>
              <li><a href="http://www.youronlinechoices.com/" target="_blank" class="text-[#84CC16] hover:text-[#3B82F6] transition-colors underline">Your Online Choices</a></li>
            </ul>
          </div>

          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">6. Do Not Track Signals</h2>
            <p class="text-[#475467] leading-relaxed">
              Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Currently, there is no standard for how DNT signals should be interpreted, so we do not respond to DNT signals at this time.
            </p>
          </div>

          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">7. Updates to This Policy</h2>
            <p class="text-[#475467] leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page.
            </p>
          </div>

          <div>
            <h2 class="text-3xl mb-4 text-[#101828]">8. Contact Us</h2>
            <p class="text-[#475467] leading-relaxed mb-4">
              If you have questions about our use of cookies, please contact us:
            </p>
            <div class="bg-gradient-to-br from-[#84CC16]/5 to-[#3B82F6]/5 rounded-2xl p-6">
              <p class="text-[#101828] mb-2"><strong>Email:</strong> privacy@luminasolar.com</p>
              <p class="text-[#101828] mb-2"><strong>Phone:</strong> (555) 123-4567</p>
              <p class="text-[#101828]"><strong>Address:</strong> 123 Solar Street, Green City, CA 90210</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Initialize app
window.addEventListener('DOMContentLoaded', () => {
  router();
  updateNavigation();
});

window.addEventListener('hashchange', () => {
  router();
  updateNavigation();
});

// Initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  });
} else {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

