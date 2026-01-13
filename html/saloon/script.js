// Gallery Images Data
const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1759134155377-4207d89b39ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBoYWlyJTIwc2Fsb258ZW58MXx8fHwxNzY3NTg0MjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Editorial Styling',
    alt: 'Luxury salon styling'
  },
  {
    src: 'https://images.unsplash.com/photo-1712641966973-327ce5829913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGluZyUyMG1vZGVybnxlbnwxfHx8fDE3Njc2NjgwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Precision Cuts',
    alt: 'Modern hair styling'
  },
  {
    src: 'https://images.unsplash.com/photo-1485290334039-a3c69043e517?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY29sb3IlMjBibG9uZGV8ZW58MXx8fHwxNzY3NjY4MDkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Organic Color',
    alt: 'Blonde hair color'
  },
  {
    src: 'https://images.unsplash.com/photo-1541533848490-bc8115cd6522?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyc3R5bGlzdCUyMGN1dHRpbmclMjBoYWlyfGVufDF8fHx8MTc2NzYyNzk2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Precision Cuts',
    alt: 'Hairstylist cutting hair'
  },
  {
    src: 'https://images.unsplash.com/photo-1605980625982-b128a7e7fde2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxvbiUyMGhhaXIlMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzY3NjY4MDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Editorial Styling',
    alt: 'Salon hair treatment'
  },
  {
    src: 'https://images.unsplash.com/photo-1619607146034-5a05296c8f9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc2Fsb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njc2NjE4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Organic Color',
    alt: 'Salon interior'
  },
  {
    src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1080&q=80',
    category: 'Precision Cuts',
    alt: 'Professional hair cutting'
  },
  {
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1080&q=80',
    category: 'Organic Color',
    alt: 'Hair coloring process'
  },
  {
    src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1080&q=80',
    category: 'Editorial Styling',
    alt: 'Hair styling session'
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1080&q=80',
    category: 'Precision Cuts',
    alt: 'Modern haircut'
  },
  {
    src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1080&q=80',
    category: 'Organic Color',
    alt: 'Hair color transformation'
  },
  {
    src: 'https://images.unsplash.com/photo-1599351431202-1e0f013b9a8a?w=1080&q=80',
    category: 'Editorial Styling',
    alt: 'Elegant hair styling'
  },
  {
    src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1080&q=80',
    category: 'Precision Cuts',
    alt: 'Haircut in progress'
  },
  {
    src: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1080&q=80',
    category: 'Organic Color',
    alt: 'Hair color application'
  },
  {
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1080&q=80',
    category: 'Editorial Styling',
    alt: 'Professional hair styling'
  },
  {
    src: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1080&q=80',
    category: 'Precision Cuts',
    alt: 'Stylist working on hair'
  },
  {
    src: 'https://images.unsplash.com/photo-1560869713-7d0a8b9b8b0c?w=1080&q=80',
    category: 'Organic Color',
    alt: 'Hair color treatment'
  },
  {
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03e3f3b1b?w=1080&q=80',
    category: 'Editorial Styling',
    alt: 'Fashion hair styling'
  },
  {
    src: 'https://images.unsplash.com/photo-1582095133170-bfd08e2fc6b3?w=1080&q=80',
    category: 'Precision Cuts',
    alt: 'Precision haircut'
  },
  {
    src: 'https://images.unsplash.com/photo-1594736797933-d0cbc0c0e0a8?w=1080&q=80',
    category: 'Organic Color',
    alt: 'Natural hair color'
  },
  {
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1080&q=80',
    category: 'Editorial Styling',
    alt: 'Editorial hair look'
  },
  {
    src: 'https://images.unsplash.com/photo-1582095133170-bfd08e2fc6b3?w=1080&q=80',
    category: 'Precision Cuts',
    alt: 'Hair cutting technique'
  },
  {
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03e3f3b1b?w=1080&q=80',
    category: 'Organic Color',
    alt: 'Hair color highlights'
  },
  {
    src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1080&q=80',
    category: 'Editorial Styling',
    alt: 'Stylish hair design'
  },
  {
    src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1080&q=80',
    category: 'Precision Cuts',
    alt: 'Professional hair cutting service'
  },
  {
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1080&q=80',
    category: 'Organic Color',
    alt: 'Hair coloring service'
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1080&q=80',
    category: 'Editorial Styling',
    alt: 'Modern hair styling'
  },
  {
    src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1080&q=80',
    category: 'Precision Cuts',
    alt: 'Haircut transformation'
  },
  {
    src: 'https://images.unsplash.com/photo-1599351431202-1e0f013b9a8a?w=1080&q=80',
    category: 'Organic Color',
    alt: 'Hair color highlights and lowlights'
  },
  {
    src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1080&q=80',
    category: 'Editorial Styling',
    alt: 'Elegant hair design'
  },
  {
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1080&q=80',
    category: 'Precision Cuts',
    alt: 'Expert hair cutting'
  },
  {
    src: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1080&q=80',
    category: 'Organic Color',
    alt: 'Vibrant hair color'
  },
  {
    src: 'https://images.unsplash.com/photo-1560869713-7d0a8b9b8b0c?w=1080&q=80',
    category: 'Editorial Styling',
    alt: 'Creative hair styling'
  },
  {
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03e3f3b1b?w=1080&q=80',
    category: 'Precision Cuts',
    alt: 'Precision hair cutting technique'
  },
  {
    src: 'https://images.unsplash.com/photo-1582095133170-bfd08e2fc6b3?w=1080&q=80',
    category: 'Organic Color',
    alt: 'Natural hair coloring'
  },
  {
    src: 'https://images.unsplash.com/photo-1594736797933-d0cbc0c0e0a8?w=1080&q=80',
    category: 'Editorial Styling',
    alt: 'Fashion-forward hair design'
  },
  {
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1080&q=80',
    category: 'Precision Cuts',
    alt: 'Master hairstylist at work'
  },
  {
    src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1080&q=80',
    category: 'Organic Color',
    alt: 'Hair color consultation'
  },
  {
    src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1080&q=80',
    category: 'Editorial Styling',
    alt: 'Editorial hair transformation'
  },
  {
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1080&q=80',
    category: 'Precision Cuts',
    alt: 'Detailed hair cutting'
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1080&q=80',
    category: 'Organic Color',
    alt: 'Hair color blending'
  },
  {
    src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1080&q=80',
    category: 'Editorial Styling',
    alt: 'Stylish hair makeover'
  },
  {
    src: 'https://images.unsplash.com/photo-1599351431202-1e0f013b9a8a?w=1080&q=80',
    category: 'Precision Cuts',
    alt: 'Professional haircut service'
  },
  {
    src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1080&q=80',
    category: 'Organic Color',
    alt: 'Hair color technique'
  },
  {
    src: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1080&q=80',
    category: 'Editorial Styling',
    alt: 'Luxury hair styling'
  },
  {
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1080&q=80',
    category: 'Precision Cuts',
    alt: 'Artistic hair cutting'
  },
  {
    src: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1080&q=80',
    category: 'Organic Color',
    alt: 'Hair color artistry'
  },
  {
    src: 'https://images.unsplash.com/photo-1560869713-7d0a8b9b8b0c?w=1080&q=80',
    category: 'Editorial Styling',
    alt: 'High-end hair design'
  },
  {
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03e3f3b1b?w=1080&q=80',
    category: 'Precision Cuts',
    alt: 'Expert precision cutting'
  },
  {
    src: 'https://images.unsplash.com/photo-1582095133170-bfd08e2fc6b3?w=1080&q=80',
    category: 'Organic Color',
    alt: 'Organic hair color process'
  },
  {
    src: 'https://images.unsplash.com/photo-1594736797933-d0cbc0c0e0a8?w=1080&q=80',
    category: 'Editorial Styling',
    alt: 'Editorial hair showcase'
  },
  {
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1080&q=80',
    category: 'Precision Cuts',
    alt: 'Masterful hair cutting'
  },
  {
    src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1080&q=80',
    category: 'Organic Color',
    alt: 'Hair color expertise'
  },
  {
    src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1080&q=80',
    category: 'Editorial Styling',
    alt: 'Premium hair styling'
  }
];

// Error image fallback
const ERROR_IMG_SRC = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

// State
let activeFilter = 'All';
let mobileMenuOpen = false;

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
  // Only initialize gallery if gallery grid exists
  if (document.getElementById('galleryGrid')) {
    initializeGallery();
  }
  updateCopyrightYear();
  setupImageErrorHandling();
  
  // Setup form handler only if form exists
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
});

// Smooth scroll to section
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    const header = document.getElementById('header');
    const headerHeight = header ? header.offsetHeight : 0;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (mobileMenuOpen) {
      toggleMobileMenu();
    }
  } else {
    // If element not found, might be on different page - navigate to home page
    if (id !== 'home' && window.location.pathname.includes('gallery.html')) {
      window.location.href = `index.html#${id}`;
    }
  }
}

// Toggle mobile menu
function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');
  const closeIcon = document.getElementById('closeIcon');
  
  if (mobileMenuOpen) {
    mobileMenu.classList.remove('hidden');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  } else {
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  }
}

// Initialize gallery
function initializeGallery() {
  renderGallery();
}

// Render gallery images
function renderGallery() {
  const galleryGrid = document.getElementById('galleryGrid');
  if (!galleryGrid) return;

  // Check if we're on the home page (not gallery.html)
  const isHomePage = !window.location.pathname.includes('gallery.html');
  const maxImages = isHomePage ? 6 : galleryImages.length;

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  // Limit images on home page
  const imagesToShow = isHomePage 
    ? filteredImages.slice(0, maxImages)
    : filteredImages;

  galleryGrid.innerHTML = '';

  imagesToShow.forEach((image, index) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('data-category', image.category);
    
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    img.loading = 'lazy';
    img.onerror = function() {
      this.onerror = null;
      this.src = ERROR_IMG_SRC;
    };
    
    item.appendChild(img);
    galleryGrid.appendChild(item);
  });
}

// Filter gallery
function filterGallery(filter) {
  activeFilter = filter;
  renderGallery();
  
  // Update filter button styles
  const filterButtons = document.querySelectorAll('.gallery-filter');
  filterButtons.forEach(btn => {
    const btnFilter = btn.getAttribute('data-filter');
    if (btnFilter === filter) {
      btn.classList.remove('bg-white', 'text-[#1A1A1A]', 'border-gray-200');
      btn.classList.add('bg-[#C5B358]', 'text-white');
    } else {
      btn.classList.remove('bg-[#C5B358]', 'text-white');
      btn.classList.add('bg-white', 'text-[#1A1A1A]', 'border', 'border-gray-200');
    }
  });
}

// Handle form submission
function handleFormSubmit(event) {
  if (event && event.preventDefault) {
    event.preventDefault();
  }
  
  const form = event && event.target ? event.target : document.getElementById('contactForm');
  if (!form) return;
  
  const formData = new FormData(form);
  
  // Get form values
  const name = formData.get('name');
  const email = formData.get('email');
  const service = formData.get('service');
  const stylist = formData.get('stylist');
  const preferredDate = formData.get('preferredDate');
  const notes = formData.get('notes');
  
  // Simulate form submission
  showToast('Booking request received! We\'ll contact you shortly to confirm your appointment.', 'success');
  
  // Reset form
  form.reset();
}

// Show toast notification
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  
  container.appendChild(toast);
  
  // Remove toast after 3 seconds
  setTimeout(() => {
    toast.style.animation = 'slideIn 0.3s ease-out reverse';
    setTimeout(() => {
      container.removeChild(toast);
    }, 300);
  }, 3000);
}

// Update copyright year
function updateCopyrightYear() {
  const copyrightElement = document.getElementById('copyright');
  if (copyrightElement) {
    const currentYear = new Date().getFullYear();
    copyrightElement.textContent = `© ${currentYear} Lumière Salon. All rights reserved.`;
  }
}

// Setup image error handling for all images
function setupImageErrorHandling() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (!img.hasAttribute('data-error-handled')) {
      img.setAttribute('data-error-handled', 'true');
      img.addEventListener('error', function() {
        if (this.src !== ERROR_IMG_SRC) {
          this.src = ERROR_IMG_SRC;
        }
      });
    }
  });
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const header = document.getElementById('header');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  
  if (mobileMenuOpen && 
      !header.contains(event.target) && 
      event.target !== mobileMenuBtn) {
    toggleMobileMenu();
  }
});

// Close mobile menu on window resize (if resized to desktop)
window.addEventListener('resize', function() {
  if (window.innerWidth >= 768 && mobileMenuOpen) {
    toggleMobileMenu();
  }
});

