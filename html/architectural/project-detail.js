// Project detail page functionality
document.addEventListener('DOMContentLoaded', function() {
  const projects = {
    1: {
      id: 1,
      title: 'Skyline Residences',
      category: 'Residential',
      location: 'New York, USA',
      year: '2025',
      area: '15,000 sq ft',
      client: 'Private Developer',
      image: 'https://images.unsplash.com/photo-1756227584303-f1400daaa69d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjkzMDM5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: `
        <p>Skyline Residences represents a new standard in urban living, combining minimalist design principles with sustainable architecture. This residential complex features clean lines, expansive glass facades, and thoughtful integration with the surrounding cityscape.</p>
        <p>The project emphasizes natural light, open spaces, and a seamless connection between indoor and outdoor environments. Each unit is designed to maximize views while maintaining privacy and comfort.</p>
        <p>Our approach focused on creating a sense of community through shared spaces, including rooftop gardens, fitness facilities, and co-working areas that encourage interaction among residents.</p>
      `,
      services: ['Architectural Design', 'Interior Design', 'Project Management'],
      gallery: [
        'https://images.unsplash.com/photo-1756227584303-f1400daaa69d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      ]
    },
    2: {
      id: 2,
      title: 'Minimal Living Space',
      category: 'Interior',
      location: 'Los Angeles, USA',
      year: '2025',
      area: '2,500 sq ft',
      client: 'Private Residence',
      image: 'https://images.unsplash.com/photo-1571273033940-89c3e9bb18b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5MzQzMTkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: `
        <p>This interior design project embodies the "less is more" philosophy, creating a serene living environment through careful curation of space, light, and materials. The design focuses on functionality without compromising aesthetic beauty.</p>
        <p>Natural materials such as wood, stone, and linen create warmth and texture, while a neutral color palette ensures timeless appeal. Custom-built storage solutions maintain the minimalist aesthetic while maximizing space efficiency.</p>
        <p>Large windows flood the space with natural light, creating a sense of openness and connection to the outdoors. The open-plan layout encourages flow between living, dining, and kitchen areas.</p>
      `,
      services: ['Interior Design', 'Space Planning', 'Custom Furniture Design'],
      gallery: [
        'https://images.unsplash.com/photo-1571273033940-89c3e9bb18b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1556912172-45b7abe8b7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      ]
    },
    3: {
      id: 3,
      title: 'Urban Complex',
      category: 'Commercial',
      location: 'Chicago, USA',
      year: '2024',
      area: '85,000 sq ft',
      client: 'Commercial Developer',
      image: 'https://images.unsplash.com/photo-1681216868987-b7268753b81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcmNoaXRlY3R1cmUlMjBleHRlcmlvcnxlbnwxfHx8fDE3NjkzODA4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: `
        <p>Urban Complex is a mixed-use development that seamlessly integrates commercial, retail, and office spaces within a single architectural vision. The design responds to the urban context while creating a distinctive identity.</p>
        <p>The building's facade features a dynamic interplay of solid and void, creating visual interest while optimizing natural light and views. Sustainable design principles are integrated throughout, including energy-efficient systems and green building materials.</p>
        <p>Public spaces within the complex are designed to encourage interaction and create a sense of community. The ground floor retail spaces open to the street, activating the urban environment and contributing to the neighborhood's vitality.</p>
      `,
      services: ['Architectural Design', 'Commercial Planning', 'Sustainable Design'],
      gallery: [
        'https://images.unsplash.com/photo-1681216868987-b7268753b81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      ]
    },
    4: {
      id: 4,
      title: 'Luxury Villa',
      category: 'Residential',
      location: 'Miami, USA',
      year: '2024',
      area: '12,000 sq ft',
      client: 'Private Residence',
      image: 'https://images.unsplash.com/photo-1640109229792-a26a0ee366ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZXxlbnwxfHx8fDE3NjkzODEwODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: `
        <p>This luxury villa represents the pinnacle of residential design, combining sophisticated architecture with breathtaking ocean views. The design emphasizes indoor-outdoor living, with expansive terraces and floor-to-ceiling glass walls.</p>
        <p>Premium materials including natural stone, exotic woods, and custom metalwork create a sense of luxury and refinement. The interior spaces flow seamlessly, with each room designed to maximize both privacy and connection to the surrounding landscape.</p>
        <p>The property features state-of-the-art amenities including a private pool, spa facilities, and a wine cellar. Sustainable design elements are integrated throughout, including solar panels and rainwater collection systems.</p>
      `,
      services: ['Architectural Design', 'Interior Design', 'Landscape Design', 'Project Management'],
      gallery: [
        'https://images.unsplash.com/photo-1640109229792-a26a0ee366ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      ]
    }
  };

  // Get project ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = parseInt(urlParams.get('id')) || 1;
  const project = projects[projectId];

  if (!project) {
    // Redirect to portfolio if project not found
    window.location.href = 'portfolio.html';
    return;
  }

  // Load project data
  function loadProject() {
    // Update page title
    document.title = `${project.title} - ATELIER`;

    // Load header
    const projectHeader = document.getElementById('projectHeader');
    if (projectHeader) {
      projectHeader.innerHTML = `
        <div class="mb-4">
          <span class="inline-block px-4 py-2 bg-[#87CEEB]/10 text-[#87CEEB] text-xs tracking-[0.2em]">${project.category}</span>
        </div>
        <h1 class="text-5xl md:text-7xl tracking-[0.15em] font-light mb-6">${project.title}</h1>
        <div class="w-20 h-px bg-[#87CEEB] mb-8"></div>
        <p class="text-lg text-gray-600 max-w-2xl leading-relaxed">
          ${project.location} • ${project.year}
        </p>
      `;
    }

    // Load hero image
    const heroImage = document.getElementById('projectHeroImage');
    if (heroImage) {
      heroImage.src = project.image;
      heroImage.alt = project.title;
    }

    // Load description
    const description = document.getElementById('projectDescription');
    if (description) {
      description.innerHTML = project.description;
    }

    // Load project details
    const projectDetails = document.getElementById('projectDetails');
    if (projectDetails) {
      projectDetails.innerHTML = `
        <div>
          <span class="text-gray-900 font-medium">Location:</span>
          <span class="ml-2">${project.location}</span>
        </div>
        <div>
          <span class="text-gray-900 font-medium">Year:</span>
          <span class="ml-2">${project.year}</span>
        </div>
        <div>
          <span class="text-gray-900 font-medium">Area:</span>
          <span class="ml-2">${project.area}</span>
        </div>
        <div>
          <span class="text-gray-900 font-medium">Client:</span>
          <span class="ml-2">${project.client}</span>
        </div>
      `;
    }

    // Load services
    const projectServices = document.getElementById('projectServices');
    if (projectServices) {
      projectServices.innerHTML = project.services.map(service => 
        `<div class="flex items-center gap-2">
          <i data-lucide="check" class="w-4 h-4 text-[#87CEEB]"></i>
          <span>${service}</span>
        </div>`
      ).join('');
    }

    // Load gallery
    const projectGallery = document.getElementById('projectGallery');
    if (projectGallery) {
      projectGallery.innerHTML = project.gallery.map((img, index) => `
        <div class="group relative overflow-hidden aspect-[4/3]">
          <img
            src="${img}"
            alt="${project.title} - Image ${index + 1}"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      `).join('');
    }

    // Initialize icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  loadProject();
});

