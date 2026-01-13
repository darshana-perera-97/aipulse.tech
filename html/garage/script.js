// Nexus Auto Care - JavaScript Functionality

// Smooth scroll to section
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Header scroll effect
function handleHeaderScroll() {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// Intersection Observer for scroll animations
function setupScrollAnimations() {
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

  // Observe elements that need animation
  const elementsToObserve = [
    ...document.querySelectorAll('.services-header'),
    ...document.querySelectorAll('.service-card'),
    ...document.querySelectorAll('.about-content'),
    ...document.querySelectorAll('.about-gallery'),
    ...document.querySelectorAll('.stat-item'),
    ...document.querySelectorAll('.contact-header'),
    ...document.querySelectorAll('.contact-form'),
    ...document.querySelectorAll('.contact-info')
  ];

  elementsToObserve.forEach(el => {
    observer.observe(el);
  });
}

// Form submission handler
function handleFormSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const submitBtn = document.getElementById('submitBtn');
  const formData = {
    name: form.name.value,
    email: form.email.value,
    vehicle: form.vehicle.value,
    service: form.service.value
  };

  // Disable button and show loading state
  submitBtn.disabled = true;
  submitBtn.classList.add('submitting');
  submitBtn.textContent = 'Submitting...';

  // Simulate form submission (replace with actual API call)
  setTimeout(() => {
    // Success state
    submitBtn.classList.remove('submitting');
    submitBtn.classList.add('submitted');
    submitBtn.textContent = '✓ Booking Received!';

    // Reset form
    form.reset();

    // Reset button after 3 seconds
    setTimeout(() => {
      submitBtn.classList.remove('submitted');
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Booking';
    }, 3000);
  }, 1500);
}

// Global image error handler
function handleImageError(img) {
  if (!img.dataset.fallbackHandled) {
    img.dataset.fallbackHandled = 'true';
    
    // Try alternative image sources based on alt text
    const altText = img.alt.toLowerCase();
    let alternativeSrc = '';
    
    if (altText.includes('garage') || altText.includes('interior')) {
      // Try alternative Unsplash source
      alternativeSrc = 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=1920&q=80';
    } else if (altText.includes('workshop')) {
      alternativeSrc = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80';
    } else if (altText.includes('shop')) {
      alternativeSrc = 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80';
    } else if (altText.includes('service')) {
      alternativeSrc = 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80';
    }
    
    // If alternative source exists, try it
    if (alternativeSrc) {
      img.src = alternativeSrc;
      return;
    }
    
    // Final fallback: use a placeholder gradient
    const fallbackSVG = `data:image/svg+xml;base64,${btoa(`
      <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#1e40af;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#grad)"/>
        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">${img.alt || 'Image'}</text>
      </svg>
    `)}`;
    img.src = fallbackSVG;
    img.alt = img.alt || 'Image not available';
    img.classList.add('loaded');
  }
}

// Image lazy loading with fallback
function setupImageFallbacks() {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    // Add loading attribute for lazy loading (except hero image)
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }

    // Handle image load
    img.addEventListener('load', function() {
      this.classList.add('loaded');
    });

    // Handle image error with fallback
    img.addEventListener('error', function() {
      handleImageError(this);
    });
  });
}

// Parallax effect for hero background
function setupParallax() {
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.5;
    heroBg.style.transform = `translate3d(0, ${rate}px, 0)`;
  });
}

// Stagger animation for service cards
function staggerServiceCards() {
  const cards = document.querySelectorAll('.service-card');
  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
  });
}

// Stagger animation for stat items
function staggerStatItems() {
  const items = document.querySelectorAll('.stat-item');
  items.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
  });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Header scroll effect
  window.addEventListener('scroll', handleHeaderScroll);
  handleHeaderScroll(); // Check initial state

  // Scroll animations
  setupScrollAnimations();

  // Form handling
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', handleFormSubmit);
  }

  // Image fallbacks
  setupImageFallbacks();

  // Parallax effect
  setupParallax();

  // Stagger animations
  staggerServiceCards();
  staggerStatItems();

  // Re-initialize Lucide icons after dynamic content loads
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});

// Re-initialize icons when needed (e.g., after dynamic content changes)
function refreshIcons() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Export functions for global access
window.scrollToSection = scrollToSection;
window.refreshIcons = refreshIcons;
window.handleImageError = handleImageError;

