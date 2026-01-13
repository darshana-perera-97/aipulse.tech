// Fleet Filtering Functionality
function filterFleet(category) {
  const vehicles = document.querySelectorAll('.vehicle-card');
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  // Update active button
  filterButtons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.filter === category) {
      btn.classList.add('active');
    }
  });
  
  // Filter vehicles
  vehicles.forEach(vehicle => {
    if (category === 'all') {
      vehicle.style.display = 'block';
    } else {
      const vehicleCategories = vehicle.dataset.category.split(' ');
      if (vehicleCategories.includes(category)) {
        vehicle.style.display = 'block';
      } else {
        vehicle.style.display = 'none';
      }
    }
  });
  
  // Reinitialize icons after filtering
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Book Vehicle Function
function bookVehicle(vehicleName) {
  alert(`Booking ${vehicleName}. Redirecting to contact form...`);
  window.location.href = 'index.html#contact';
}

// Make functions globally available
window.filterFleet = filterFleet;
window.bookVehicle = bookVehicle;

