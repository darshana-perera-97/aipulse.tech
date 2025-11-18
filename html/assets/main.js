// Minimal site data for navbar and footer only
const siteData = {
  brand: {
    short: "AI",
    name: "AI Pulse",
    tagline: "Empowering Digital Future with AI-Driven Software"
  },
  navLinks: [
    { id: "home", label: "Home", href: "index.html" },
    { id: "about", label: "About Us", href: "about.html" },
    { id: "solutions", label: "Solutions", href: "solutions.html", dropdown: true },
    { id: "case-studies", label: "Case Studies", href: "case-studies.html" },
    { id: "blog", label: "Blog", href: "blog.html" },
    { id: "resources", label: "Resources", href: "resources.html" }
  ],
  solutions: [
    { id: "wordpress", icon: "globe", title: "Website Development (WordPress)", description: "Fast, secure, SEO-friendly websites powered by WordPress." },
    { id: "custom-web", icon: "code", title: "Custom Web Page Development", description: "Tailor-made websites for business-specific requirements." },
    { id: "mobile-app", icon: "smartphone", title: "Mobile App Development", description: "Android & iOS applications with modern UI/UX." },
    { id: "web-app", icon: "monitor", title: "Web Application Creation", description: "Cloud-ready, scalable web applications for startups & enterprises." },
    { id: "ai-ml", icon: "brain", title: "AI & ML Solutions", description: "Data-driven automation using AI chatbots, ML models & analytics dashboards." },
    { id: "whatsapp", icon: "message-square", title: "WhatsApp Messaging Gateways", description: "Automated WhatsApp APIs, bot systems & customer engagement flows." },
    { id: "iot", icon: "cpu", title: "IoT Solutions", description: "Sensor-based monitoring, tracking & smart automation." },
    { id: "desktop", icon: "monitor", title: "Windows Desktop Applications", description: "Standalone software for internal business operations." },
    { id: "social-media", icon: "share-2", title: "Social Media Handling & Design", description: "Creative content, branding & monthly social media management." },
    { id: "seo", icon: "search", title: "Website SEO Optimization", description: "Search-engine optimization for organic traffic & long-term ranking." }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page || "home";
  renderNavbar(page);
  renderFooter();
  
  // Check if it's a dynamic page
  if (page === "solution-detail" || page === "case-study-detail" || page === "blog-article") {
    renderDynamicPage();
  }
  
  initializeInteractions(page);
  // Initialize Lucide icons after a short delay to ensure DOM is ready
  setTimeout(() => {
    if (window.lucide) {
      lucide.createIcons();
    }
  }, 100);
});

function renderNavbar(currentPage) {
  const target = document.getElementById("site-navbar");
  if (!target) return;

  // Build mega menu content with icons and descriptions
  const megaMenuSolutions = siteData.solutions.map(solution => {
    return `
      <a href="solution.html?id=${solution.id}" class="group flex items-start gap-3 p-3 rounded-xl hover:bg-[#F7F9FC] transition-colors">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#005CFF] to-[#7B3FFF] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
          <i data-lucide="${solution.icon}" class="w-5 h-5 text-white"></i>
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="text-sm font-semibold text-[#0A0F1C] mb-1 group-hover:text-[#005CFF] transition-colors">${solution.title}</h3>
          <p class="text-xs text-[#4A5568] line-clamp-2">${solution.description}</p>
        </div>
      </a>
    `;
  }).join('');

  target.innerHTML = `
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E7E9EF]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <a href="index.html" class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#005CFF] to-[#7B3FFF] flex items-center justify-center">
              <span class="text-white font-bold text-xl">${siteData.brand.short}</span>
            </div>
            <span class="text-2xl font-bold text-[#0A0F1C]">${siteData.brand.name}</span>
          </a>

          <div class="hidden md:flex items-center gap-8">
            <a href="index.html" class="text-[#0A0F1C] hover:text-[#005CFF] transition-colors ${currentPage === 'home' ? 'text-[#005CFF]' : ''}">Home</a>
            
            <div class="relative" data-solutions-wrapper>
              <button class="flex items-center gap-1 text-[#0A0F1C] hover:text-[#005CFF] transition-colors ${currentPage === 'solutions' || currentPage === 'solution-detail' ? 'text-[#005CFF]' : ''}" data-solutions-trigger>
                Solutions
                <i data-lucide="chevron-down" class="w-4 h-4"></i>
              </button>
              <!-- Invisible bridge to prevent gap between trigger and menu -->
              <div class="absolute top-full left-1/2 -translate-x-1/2 w-screen h-4 pointer-events-none" data-solutions-bridge></div>
              <div class="fixed top-20 left-0 right-0 bg-white shadow-2xl border-b border-[#E7E9EF] hidden z-40" data-solutions-menu>
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <div class="grid grid-cols-3 gap-8">
                    <!-- Solutions Grid - Left Side -->
                    <div class="col-span-2">
                      <div class="grid grid-cols-2 gap-4">
                        ${megaMenuSolutions}
                      </div>
                    </div>
                    <!-- Image Asset - Right Side -->
                    <div class="col-span-1 flex flex-col">
                      <div class="mb-4 pb-3 border-b border-[#E7E9EF]">
                        <a href="solutions.html" class="inline-flex items-center gap-2 text-sm text-[#0A0F1C] font-semibold hover:text-[#005CFF] transition-colors">
                          View All Solutions
                          <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
                        </a>
                      </div>
                      <div class="flex-1 flex items-center justify-center">
                        <img src="assets/images/mega-nav-image.png" alt="Solutions" class="w-full h-auto object-contain rounded-xl">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="about.html" class="text-[#0A0F1C] hover:text-[#005CFF] transition-colors ${currentPage === 'about' ? 'text-[#005CFF]' : ''}">About Us</a>
            
            <a href="case-studies.html" class="text-[#0A0F1C] hover:text-[#005CFF] transition-colors ${currentPage === 'case-studies' || currentPage === 'case-study-detail' ? 'text-[#005CFF]' : ''}">Case Studies</a>
            
            <a href="blog.html" class="text-[#0A0F1C] hover:text-[#005CFF] transition-colors ${currentPage === 'blog' || currentPage === 'blog-article' ? 'text-[#005CFF]' : ''}">Blog</a>
            
            <a href="resources.html" class="text-[#0A0F1C] hover:text-[#005CFF] transition-colors ${currentPage === 'resources' ? 'text-[#005CFF]' : ''}">Resources</a>

            <a href="contact.html" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all bg-gradient-to-r from-[#005CFF] to-[#7B3FFF] text-white px-8 py-2.5">
              Contact Us
            </a>
          </div>

          <button class="md:hidden text-[#0A0F1C]" data-mobile-toggle>
            <i data-lucide="menu" class="w-6 h-6"></i>
          </button>
        </div>

        <div class="md:hidden py-4 border-t border-[#E7E9EF] hidden" data-mobile-menu>
          <div class="flex flex-col gap-4">
            <a href="index.html" class="text-[#0A0F1C] text-left">Home</a>
            <a href="solutions.html" class="text-[#0A0F1C] text-left">Solutions</a>
            <a href="about.html" class="text-[#0A0F1C] text-left">About Us</a>
            <a href="case-studies.html" class="text-[#0A0F1C] text-left">Case Studies</a>
            <a href="blog.html" class="text-[#0A0F1C] text-left">Blog</a>
            <a href="resources.html" class="text-[#0A0F1C] text-left">Resources</a>
            <a href="contact.html" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all bg-gradient-to-r from-[#005CFF] to-[#7B3FFF] text-white">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  `;
}

function renderFooter() {
  const target = document.getElementById("site-footer");
  if (!target) return;

  target.innerHTML = `
    <footer class="bg-[#0A0F1C] text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div class="text-center md:text-left">
            <div class="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#005CFF] to-[#7B3FFF] flex items-center justify-center">
                <span class="text-white font-bold text-xl">${siteData.brand.short}</span>
              </div>
              <span class="text-2xl font-bold">${siteData.brand.name}</span>
            </div>
            <p class="text-[#E7E9EF] mb-6">${siteData.brand.tagline}</p>
            <div class="flex justify-center md:justify-start gap-3">
              ${["linkedin", "twitter", "github", "mail"]
                .map(
                  (icon) => `
                  <a href="#" class="w-10 h-10 rounded-full bg-[#2A2F3A] flex items-center justify-center hover:bg-[#005CFF] transition-colors">
                    <i data-lucide="${icon}" class="w-5 h-5"></i>
                  </a>`
                )
                .join("")}
            </div>
          </div>

          <div class="text-center md:text-left">
            <h3 class="font-semibold mb-4">Solutions</h3>
            <ul class="space-y-3 text-[#E7E9EF]">
              ${siteData.solutions
                .slice(0, 5)
                .map(
                  (solution) => `
                    <li>
                      <a href="solution.html?id=${solution.id}" class="hover:text-[#005CFF] transition-colors">${solution.title}</a>
                    </li>`
                )
                .join("")}
            </ul>
          </div>

          <div class="text-center md:text-left">
            <h3 class="font-semibold mb-4">Company</h3>
            <ul class="space-y-3 text-[#E7E9EF]">
              <li><a href="about.html" class="hover:text-[#005CFF] transition-colors">About Us</a></li>
              <li><a href="case-studies.html" class="hover:text-[#005CFF] transition-colors">Case Studies</a></li>
              <li><a href="blog.html" class="hover:text-[#005CFF] transition-colors">Blog</a></li>
              <li><a href="resources.html" class="hover:text-[#005CFF] transition-colors">Resources</a></li>
              <li><a href="contact.html" class="hover:text-[#005CFF] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div class="text-center md:text-left">
            <h3 class="font-semibold mb-4">Legal</h3>
            <ul class="space-y-3 text-[#E7E9EF]">
              <li><a href="#" class="hover:text-[#005CFF] transition-colors">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-[#005CFF] transition-colors">Terms of Service</a></li>
            </ul>
            <div class="mt-8 text-sm text-[#E7E9EF] space-y-2">
              <p>📍 Sri Lanka</p>
              <p>🌐 www.aipulse.tech</p>
            </div>
          </div>
        </div>

        <div class="border-t border-[#2A2F3A] mt-12 pt-8 text-center text-sm text-[#E7E9EF]">
          Copyright © 2025 AI Pulse. All rights reserved.
        </div>
      </div>
    </footer>
  `;
}

function initializeInteractions(page) {
  attachNavbarHandlers();
  switch (page) {
    case "blog":
      setupBlogFilters();
      break;
    case "resources":
      setupResourceTabs();
      setupNewsletter();
      break;
    case "contact":
      setupContactForm();
      break;
    default:
      break;
  }
}

function attachNavbarHandlers() {
  const mobileToggle = document.querySelector("[data-mobile-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      const isCurrentlyOpen = !mobileMenu.classList.contains("hidden");
      mobileMenu.classList.toggle("hidden");
      // After toggle: if it was open (now closed), show menu icon; if it was closed (now open), show X icon
      mobileToggle.innerHTML = isCurrentlyOpen
        ? '<i data-lucide="menu" class="w-6 h-6"></i>'
        : '<i data-lucide="x" class="w-6 h-6"></i>';
      if (window.lucide) lucide.createIcons();
    });
  }

  // Mega menu with 2 second delay and hover persistence
  const wrapper = document.querySelector("[data-solutions-wrapper]");
  const trigger = document.querySelector("[data-solutions-trigger]");
  const menu = document.querySelector("[data-solutions-menu]");
  const bridge = document.querySelector("[data-solutions-bridge]");
  
  if (wrapper && trigger && menu) {
    let closeTimeout = null;
    let isMenuHovered = false;
    let isTriggerHovered = false;
    let isWrapperHovered = false;

    const openMenu = () => {
      // Clear any pending close timeout
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
      
      // Open menu immediately
      menu.classList.remove("hidden");
      if (window.lucide) lucide.createIcons();
    };

    const closeMenu = () => {
      // Don't close if menu, trigger, or wrapper is being hovered
      if (isMenuHovered || isTriggerHovered || isWrapperHovered) {
        return;
      }
      
      // Clear any existing close timeout
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
      
      // Keep menu open for 0.2 seconds after mouse leaves
      closeTimeout = setTimeout(() => {
        // Double check before closing
        if (!isMenuHovered && !isTriggerHovered && !isWrapperHovered) {
          menu.classList.add("hidden");
        }
      }, 200);
    };

    // When mouse enters wrapper (includes trigger)
    wrapper.addEventListener("mouseenter", () => {
      isWrapperHovered = true;
      openMenu();
    });
    
    // When mouse leaves wrapper
    wrapper.addEventListener("mouseleave", (e) => {
      isWrapperHovered = false;
      // Check if moving to menu or bridge
      const relatedTarget = e.relatedTarget;
      if (relatedTarget && (menu.contains(relatedTarget) || (bridge && bridge.contains(relatedTarget)))) {
        return; // Moving to menu or bridge, don't close
      }
      closeMenu();
    });

    // Bridge hover handling (if bridge exists)
    if (bridge) {
      bridge.addEventListener("mouseenter", () => {
        isWrapperHovered = true;
        openMenu();
      });
      
      bridge.addEventListener("mouseleave", (e) => {
        // Check if moving to menu
        const relatedTarget = e.relatedTarget;
        if (relatedTarget && menu.contains(relatedTarget)) {
          return; // Moving to menu, don't close
        }
        isWrapperHovered = false;
        closeMenu();
      });
    }

    // When mouse enters Solutions button
    trigger.addEventListener("mouseenter", () => {
      isTriggerHovered = true;
      isWrapperHovered = true;
      openMenu();
    });
    
    // When mouse leaves Solutions button
    trigger.addEventListener("mouseleave", (e) => {
      isTriggerHovered = false;
      // Check if moving to menu
      const relatedTarget = e.relatedTarget;
      if (relatedTarget && (menu.contains(relatedTarget) || wrapper.contains(relatedTarget))) {
        return; // Moving to menu or staying in wrapper
      }
      // Small delay before checking if we should close
      setTimeout(() => {
        if (!isMenuHovered && !isWrapperHovered) {
          closeMenu();
        }
      }, 100);
    });
    
    // When mouse enters the mega menu, keep it open
    menu.addEventListener("mouseenter", () => {
      isMenuHovered = true;
      // Clear any pending close timeout
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
      // Ensure menu is open immediately
      menu.classList.remove("hidden");
      if (window.lucide) lucide.createIcons();
    });
    
    // When mouse leaves the mega menu, close it
    menu.addEventListener("mouseleave", (e) => {
      isMenuHovered = false;
      // Check if moving back to trigger/wrapper
      const relatedTarget = e.relatedTarget;
      if (relatedTarget && (trigger.contains(relatedTarget) || wrapper.contains(relatedTarget))) {
        return; // Moving back to trigger, don't close
      }
      closeMenu();
    });
  }
}

function setupBlogFilters() {
  const buttons = document.querySelectorAll("[data-category]");
  const container = document.getElementById("blog-list");
  const popularTags = document.getElementById("popular-tags");
  const recentPosts = document.getElementById("recent-posts");

  if (!container) return;

  function renderPosts(category = "All") {
    const postsData = JSON.parse(document.getElementById("blog-posts-data")?.textContent || "[]");
    const posts =
      category === "All" ? postsData : postsData.filter((post) => post.category === category);
    container.innerHTML = posts
      .map(
        (post) => `
          <article class="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#E7E9EF] hover:shadow-xl transition-all">
            <div class="md:flex">
              <div class="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
                <div class="absolute top-4 left-4">
                  <span class="px-3 py-1 bg-[#005CFF] text-white rounded-full text-sm">${post.category}</span>
                </div>
              </div>
              <div class="md:w-3/5 p-8">
                <div class="flex items-center gap-4 text-sm text-[#4A5568] mb-4">
                  <span class="flex items-center gap-1"><i data-lucide="calendar" class="w-4 h-4"></i>${post.date}</span>
                  <span class="flex items-center gap-1"><i data-lucide="clock" class="w-4 h-4"></i>${post.readTime}</span>
                </div>
                <h2 class="text-2xl font-bold text-[#0A0F1C] mb-3 group-hover:text-[#005CFF] transition-colors">${post.title}</h2>
                <p class="text-[#4A5568] mb-6">${post.description}</p>
                <a href="blog-article.html?id=${post.id}" class="text-[#005CFF] inline-flex items-center gap-2 font-semibold">
                  Read More
                  <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
              </div>
            </div>
          </article>`
      )
      .join("");
    if (window.lucide) lucide.createIcons();
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("bg-gradient-to-r", "from-[#005CFF]", "to-[#7B3FFF]", "text-white", "border-transparent"));
      buttons.forEach((btn) => btn.classList.add("bg-[#F7F9FC]", "text-[#4A5568]", "border-[#E7E9EF]"));
      button.classList.remove("bg-[#F7F9FC]", "text-[#4A5568]", "border-[#E7E9EF]");
      button.classList.add("bg-gradient-to-r", "from-[#005CFF]", "to-[#7B3FFF]", "text-white", "border-transparent");
      renderPosts(button.dataset.category || "All");
    });
  });

  if (recentPosts) {
    const postsData = JSON.parse(document.getElementById("blog-posts-data")?.textContent || "[]");
    recentPosts.innerHTML = postsData
      .slice(0, 3)
      .map(
        (post) => `
          <a href="blog-article.html?id=${post.id}" class="block hover:text-[#005CFF] transition-colors">
            <p class="text-sm mb-1">${post.title}</p>
            <p class="text-xs text-[#4A5568]">${post.date}</p>
          </a>`
      )
      .join("");
  }

  if (popularTags) {
    const tags = ["AI", "Machine Learning", "Web Development", "Mobile Apps", "IoT", "Cloud", "SEO", "Automation", "Chatbots"];
    popularTags.innerHTML = tags
      .map((tag) => `<span class="px-3 py-1 bg-white border border-[#E7E9EF] rounded-full text-sm text-[#4A5568]">${tag}</span>`)
      .join("");
  }

  renderPosts();
}

function setupResourceTabs() {
  const buttons = document.querySelectorAll("[data-resource-tab]");
  const grid = document.getElementById("resources-grid");
  if (!grid || !buttons.length) return;

  function renderItems(tabId) {
    const resourcesData = JSON.parse(document.getElementById("resources-data")?.textContent || "{}");
    const items = resourcesData.items?.[tabId] || [];
    grid.innerHTML = items
      .map(
        (resource) => `
          <article class="bg-white rounded-2xl p-8 shadow-sm border border-[#E7E9EF] flex flex-col">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#005CFF] to-[#7B3FFF] flex items-center justify-center mb-6">
              <i data-lucide="${resource.icon}" class="w-7 h-7 text-white"></i>
            </div>
            <h3 class="text-xl font-bold text-[#0A0F1C] mb-3">${resource.title}</h3>
            <p class="text-[#4A5568] mb-4 flex-1">${resource.description}</p>
            <div class="flex items-center justify-between text-sm text-[#4A5568]">
              <span>${resource.size}</span>
              <button class="inline-flex items-center gap-2 text-[#005CFF] font-semibold">
                <i data-lucide="download" class="w-4 h-4"></i>
                Download
              </button>
            </div>
          </article>`
      )
      .join("");
    if (window.lucide) lucide.createIcons();
  }

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) =>
        btn.className = "flex items-center gap-3 px-8 py-4 rounded-xl border font-semibold bg-[#F7F9FC] text-[#4A5568] border-[#E7E9EF]"
      );
      button.className =
        "flex items-center gap-3 px-8 py-4 rounded-xl border font-semibold bg-gradient-to-r from-[#005CFF] to-[#7B3FFF] text-white border-transparent shadow-lg";
      renderItems(button.dataset.resourceTab);
    });
    if (index === 0) {
      renderItems(button.dataset.resourceTab);
    }
  });
}

function setupNewsletter() {
  const form = document.getElementById("newsletter-form");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = form.querySelector("input[type='email']");
    if (input && input.value) {
      alert(`Thanks! We'll send updates to ${input.value}.`);
      input.value = "";
    }
  });
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    form.reset();
  });
}

function getQueryParam(key) {
  if (typeof window === "undefined") return "";
  return new URLSearchParams(window.location.search).get(key);
}

// Dynamic page rendering functions
function renderDynamicPage() {
  const page = document.body.dataset.page;
  const target = document.getElementById("page-content");
  if (!target) return;

  if (page === "solution-detail") {
    renderSolutionDetail();
  } else if (page === "case-study-detail") {
    renderCaseStudyDetail();
  } else if (page === "blog-article") {
    renderBlogArticle();
  }
}

function renderSolutionDetail() {
  const solutionId = getQueryParam("id") || "wordpress";
  const solutionsData = JSON.parse(document.getElementById("solutions-data")?.textContent || "{}");
  const solution = solutionsData[solutionId];
  const target = document.getElementById("page-content");
  
  if (!solution || !target) {
    target.innerHTML = "<div class='pt-20 text-center'><p>Solution not found</p></div>";
    return;
  }

  target.innerHTML = `
    <div class="pt-20">
      <section class="relative py-32 bg-gradient-to-br from-[#0A0F1C] via-[#1a1f3a] to-[#0A0F1C]">
        <div class="absolute inset-0 opacity-20">
          <div class="absolute top-20 left-20 w-72 h-72 bg-[#005CFF] rounded-full filter blur-3xl animate-pulse"></div>
          <div class="absolute bottom-20 right-20 w-96 h-96 bg-[#7B3FFF] rounded-full filter blur-3xl animate-pulse"></div>
        </div>
        <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">${solution.title}</h1>
          <p class="text-xl text-[#E7E9EF] max-w-3xl mx-auto">${solution.subtitle}</p>
        </div>
      </section>

      <section class="py-24 bg-white">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-[#0A0F1C] mb-6">Overview</h2>
          <p class="text-lg text-[#4A5568] leading-relaxed mb-12">${solution.overview}</p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 class="text-2xl font-bold text-[#0A0F1C] mb-6">Key Features</h3>
              <ul class="space-y-3">
                ${solution.features.map(f => `<li class="flex items-start gap-3"><i data-lucide="check-circle" class="w-5 h-5 text-[#005CFF] mt-0.5 flex-shrink-0"></i><span class="text-[#4A5568]">${f}</span></li>`).join("")}
              </ul>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-[#0A0F1C] mb-6">Technologies</h3>
              <div class="flex flex-wrap gap-3">
                ${solution.technologies.map(t => `<span class="px-4 py-2 bg-[#F7F9FC] rounded-xl text-[#0A0F1C] border border-[#E7E9EF]">${t}</span>`).join("")}
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-2xl font-bold text-[#0A0F1C] mb-6">Benefits</h3>
              <ul class="space-y-3">
                ${solution.benefits.map(b => `<li class="flex items-start gap-3"><i data-lucide="star" class="w-5 h-5 text-[#005CFF] mt-0.5 flex-shrink-0"></i><span class="text-[#4A5568]">${b}</span></li>`).join("")}
              </ul>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-[#0A0F1C] mb-6">Our Process</h3>
              <div class="space-y-4">
                ${solution.process.map((p, i) => `<div class="flex items-center gap-4"><div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#005CFF] to-[#7B3FFF] flex items-center justify-center text-white font-bold">${i + 1}</div><span class="text-[#4A5568]">${p}</span></div>`).join("")}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-24 bg-gradient-to-br from-[#0A0F1C] to-[#1a1f3a]">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p class="text-xl text-[#E7E9EF] mb-8">Let's discuss how this solution can transform your business</p>
          <a href="contact.html" class="inline-flex items-center justify-center bg-gradient-to-r from-[#005CFF] to-[#7B3FFF] text-white px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-[#005CFF]/50 transition-all">
            Contact Us
            <i data-lucide="arrow-right" class="ml-2 w-5 h-5"></i>
          </a>
        </div>
      </section>
    </div>
  `;
  
  if (window.lucide) lucide.createIcons();
}

function renderCaseStudyDetail() {
  const caseStudyId = getQueryParam("id") || "ai-dashboard";
  const caseStudiesData = JSON.parse(document.getElementById("case-studies-data")?.textContent || "{}");
  const caseStudy = caseStudiesData[caseStudyId];
  const target = document.getElementById("page-content");
  
  if (!caseStudy || !target) {
    target.innerHTML = "<div class='pt-20 text-center'><p>Case study not found</p></div>";
    return;
  }

  target.innerHTML = `
    <div class="pt-20">
      <section class="relative py-24 bg-gradient-to-br from-[#0A0F1C] to-[#1a1f3a]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="mb-6">
            <span class="px-4 py-2 bg-[#005CFF] text-white rounded-full">${caseStudy.industry}</span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">${caseStudy.title}</h1>
          <p class="text-xl text-[#E7E9EF] max-w-3xl">${caseStudy.summary}</p>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="rounded-2xl overflow-hidden">
            <img src="${caseStudy.heroImage}" alt="${caseStudy.title}" class="w-full h-[500px] object-cover">
          </div>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div class="text-center p-6 bg-[#F7F9FC] rounded-xl">
              <h3 class="text-sm text-[#4A5568] mb-2">Client</h3>
              <p class="text-xl font-bold text-[#0A0F1C]">${caseStudy.client}</p>
            </div>
            <div class="text-center p-6 bg-[#F7F9FC] rounded-xl">
              <h3 class="text-sm text-[#4A5568] mb-2">Timeline</h3>
              <p class="text-xl font-bold text-[#0A0F1C]">${caseStudy.timeline}</p>
            </div>
            <div class="text-center p-6 bg-[#F7F9FC] rounded-xl">
              <h3 class="text-sm text-[#4A5568] mb-2">Team Size</h3>
              <p class="text-xl font-bold text-[#0A0F1C]">${caseStudy.teamSize}</p>
            </div>
          </div>

          <h2 class="text-3xl font-bold text-[#0A0F1C] mb-6">Overview</h2>
          <p class="text-lg text-[#4A5568] leading-relaxed mb-8">${caseStudy.overview || "A comprehensive case study showcasing our solution."}</p>
        </div>
      </section>

      <section class="py-16 bg-[#F7F9FC]">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-[#0A0F1C] mb-12">Challenges</h2>
          <div class="space-y-6">
            ${caseStudy.challenges.map((c, i) => `<div class="flex items-start gap-4 bg-white p-6 rounded-xl"><div class="w-8 h-8 rounded-full bg-[#005CFF]/10 flex items-center justify-center flex-shrink-0 mt-1"><span class="text-[#005CFF] font-bold">${i + 1}</span></div><p class="text-[#0A0F1C]">${c}</p></div>`).join("")}
          </div>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-[#0A0F1C] mb-6">Our Solution</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${caseStudy.solution.map((s, i) => `<div class="flex items-start gap-4 bg-[#F7F9FC] p-6 rounded-xl"><i data-lucide="check-circle" class="w-6 h-6 text-[#005CFF] mt-1 flex-shrink-0"></i><p class="text-[#0A0F1C]">${s}</p></div>`).join("")}
          </div>
        </div>
      </section>

      <section class="py-16 bg-[#F7F9FC]">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-[#0A0F1C] mb-12">Results</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            ${caseStudy.stats.map(s => `<div class="text-center p-6 bg-white rounded-xl"><div class="text-3xl font-bold bg-gradient-to-r from-[#005CFF] to-[#7B3FFF] text-transparent bg-clip-text mb-2">${s.number}</div><div class="text-[#4A5568]">${s.label}</div></div>`).join("")}
          </div>
        </div>
      </section>
    </div>
  `;
  
  if (window.lucide) lucide.createIcons();
}

function renderBlogArticle() {
  const blogId = getQueryParam("id") || "ai-transformation";
  const blogsData = JSON.parse(document.getElementById("blog-posts-data")?.textContent || "[]");
  const blogContentData = JSON.parse(document.getElementById("blog-content-data")?.textContent || "{}");
  const blog = blogsData.find(b => b.id === blogId);
  const content = blogContentData[blogId] || [];
  const target = document.getElementById("page-content");
  
  if (!blog || !target) {
    target.innerHTML = "<div class='pt-20 text-center'><p>Article not found</p></div>";
    return;
  }

  let articleHTML = content.map(item => {
    if (item.type === "heading") {
      return `<h2 class="text-3xl font-bold text-[#0A0F1C] mb-4 mt-12">${item.content}</h2>`;
    } else if (item.type === "paragraph") {
      return `<p class="text-[#4A5568] mb-6 leading-relaxed">${item.content}</p>`;
    } else if (item.type === "list") {
      return `<ul class="list-disc pl-6 space-y-2 text-[#4A5568] mb-8">${item.content.map(li => `<li>${li}</li>`).join("")}</ul>`;
    } else if (item.type === "quote") {
      return `<div class="bg-[#F7F9FC] border-l-4 border-[#005CFF] p-6 rounded-r-xl my-8"><p class="text-[#0A0F1C] italic">"${item.content}"</p></div>`;
    }
    return "";
  }).join("");

  target.innerHTML = `
    <div class="pt-20">
      <section class="relative py-24 bg-gradient-to-br from-[#0A0F1C] to-[#1a1f3a]">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="mb-6">
            <span class="px-4 py-2 bg-[#005CFF] text-white rounded-full text-sm">${blog.category}</span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">${blog.title}</h1>
          <div class="flex flex-wrap items-center gap-6 text-[#E7E9EF]">
            <div class="flex items-center gap-2">
              <i data-lucide="calendar" class="w-5 h-5"></i>
              <span>${blog.date}</span>
            </div>
            <div class="flex items-center gap-2">
              <i data-lucide="clock" class="w-5 h-5"></i>
              <span>${blog.readTime}</span>
            </div>
            <div class="flex items-center gap-2">
              <span>By ${blog.author}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="rounded-2xl overflow-hidden mb-12">
            <img src="${blog.image}" alt="${blog.title}" class="w-full h-[500px] object-cover">
          </div>

          <div class="flex items-center gap-4 mb-12 pb-8 border-b border-[#E7E9EF]">
            <span class="text-[#4A5568]">Share:</span>
            <button class="w-10 h-10 rounded-full bg-[#F7F9FC] flex items-center justify-center hover:bg-[#005CFF] hover:text-white transition-colors">
              <i data-lucide="facebook" class="w-5 h-5"></i>
            </button>
            <button class="w-10 h-10 rounded-full bg-[#F7F9FC] flex items-center justify-center hover:bg-[#005CFF] hover:text-white transition-colors">
              <i data-lucide="twitter" class="w-5 h-5"></i>
            </button>
            <button class="w-10 h-10 rounded-full bg-[#F7F9FC] flex items-center justify-center hover:bg-[#005CFF] hover:text-white transition-colors">
              <i data-lucide="linkedin" class="w-5 h-5"></i>
            </button>
          </div>

          <article class="prose prose-lg max-w-none">
            ${articleHTML}
          </article>
        </div>
      </section>
    </div>
  `;
  
  if (window.lucide) lucide.createIcons();
}

