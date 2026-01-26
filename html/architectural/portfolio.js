// Portfolio filtering functionality
document.addEventListener('DOMContentLoaded', function() {
  const projects = [
    {
      id: 1,
      title: 'Skyline Residences',
      category: 'Residential',
      location: 'New York, USA',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1756227584303-f1400daaa69d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjkzMDM5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Minimal Living Space',
      category: 'Interior',
      location: 'Los Angeles, USA',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1571273033940-89c3e9bb18b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5MzQzMTkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Urban Complex',
      category: 'Commercial',
      location: 'Chicago, USA',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1681216868987-b7268753b81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcmNoaXRlY3R1cmUlMjBleHRlcmlvcnxlbnwxfHx8fDE3NjkzODA4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Luxury Villa',
      category: 'Residential',
      location: 'Miami, USA',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1640109229792-a26a0ee366ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZXxlbnwxfHx8fDE3NjkzODEwODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      title: 'Blueprint Studios',
      category: 'Commercial',
      location: 'San Francisco, USA',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1721244653757-b76cc4679dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50JTIwZGVzaWdufGVufDF8fHx8MTc2OTMwOTM5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      title: 'Modern Sanctuary',
      category: 'Residential',
      location: 'Seattle, USA',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1656081635010-2e2636b61c6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmFsJTIwZGV0YWlsc3xlbnwxfHx8fDE3Njk0MDI5Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  let currentFilter = 'All';
  const portfolioGrid = document.getElementById('portfolioGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  // Render projects
  function renderProjects(filter = 'All') {
    const filteredProjects = filter === 'All'
      ? projects
      : projects.filter((project) => project.category === filter);

    if (portfolioGrid) {
      portfolioGrid.innerHTML = filteredProjects.map(project => `
        <div class="group relative overflow-hidden aspect-[3/4] cursor-pointer">
          <img
            src="${project.image}"
            alt="${project.title}"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div class="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <p class="text-xs tracking-[0.15em] mb-2 text-[#87CEEB]">
                ${project.category}
              </p>
              <h3 class="text-2xl tracking-[0.1em] mb-4">${project.title}</h3>
              <div class="flex items-center gap-4 text-xs tracking-[0.15em] text-gray-300">
                <span>${project.location}</span>
                <span>•</span>
                <span>${project.year}</span>
              </div>
            </div>
          </div>
          <div class="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-500"></div>
        </div>
      `).join('');
    }
  }

  // Filter button event listeners
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      currentFilter = filter;

      // Update button styles
      filterButtons.forEach(btn => {
        if (btn.getAttribute('data-filter') === filter) {
          btn.classList.remove('bg-white/60', 'text-gray-600', 'border', 'border-[#87CEEB]/20');
          btn.classList.add('bg-[#87CEEB]', 'text-white');
        } else {
          btn.classList.remove('bg-[#87CEEB]', 'text-white');
          btn.classList.add('bg-white/60', 'text-gray-600', 'backdrop-blur-sm', 'border', 'border-[#87CEEB]/20');
        }
      });

      renderProjects(filter);
    });
  });

  // Initial render
  renderProjects('All');
});

