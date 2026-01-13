// Initialize Lucide icons when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Initialize smooth scrolling
  initSmoothScroll();
});

// Mobile Menu Toggle
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');
  const closeIcon = document.getElementById('closeIcon');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      const isOpen = !mobileMenu.classList.contains('hidden');
      
      if (isOpen) {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      } else {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      }
      
      // Reinitialize icons after toggle
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    });
  }
}

// Smooth Scroll to Section
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    
    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
  }
}

// Initialize smooth scroll for all navigation links
function initSmoothScroll() {
  // This is handled by the onclick handlers in HTML
  // But we can add additional smooth scroll behavior here if needed
}

// Image Error Handler
const ERROR_IMG_SRC = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

function handleImageError(img) {
  if (!img.dataset.errorHandled) {
    img.dataset.errorHandled = 'true';
    const originalSrc = img.src;
    img.onerror = null; // Prevent infinite loop
    img.src = ERROR_IMG_SRC;
    img.alt = 'Error loading image';
    img.classList.add('image-error');
    
    // Store original URL for potential retry
    img.dataset.originalUrl = originalSrc;
  }
}

// Search Handler
function handleSearch() {
  const destination = document.getElementById('destinationInput').value;
  const date = document.getElementById('dateInput').value;
  const vehicleType = document.getElementById('vehicleSelect').value;
  
  console.log('Search:', { destination, date, vehicleType });
  
  // You can add actual search logic here
  alert(`Searching for:\nDestination: ${destination || 'Any'}\nDate: ${date || 'Any'}\nVehicle: ${vehicleType || 'Any'}`);
}

// Contact Form Handler
function handleFormSubmit(event) {
  event.preventDefault();
  
  const formData = {
    fullName: document.getElementById('fullName').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value
  };
  
  console.log('Form submitted:', formData);
  
  // You can add actual form submission logic here
  alert('Thank you for your message! We will get back to you soon.');
  
  // Reset form
  event.target.reset();
}

// Newsletter Handler
function handleNewsletter() {
  const email = document.getElementById('newsletterEmail').value;
  
  if (!email) {
    alert('Please enter your email address');
    return;
  }
  
  console.log('Newsletter subscription:', email);
  
  // You can add actual newsletter subscription logic here
  alert('Thank you for subscribing to our newsletter!');
  
  // Clear input
  document.getElementById('newsletterEmail').value = '';
}

// Make functions globally available
window.scrollToSection = scrollToSection;
window.handleImageError = handleImageError;
window.handleSearch = handleSearch;
window.handleFormSubmit = handleFormSubmit;
window.handleNewsletter = handleNewsletter;

