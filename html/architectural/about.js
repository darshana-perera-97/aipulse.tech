// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        projectType: document.getElementById('projectType').value,
        message: document.getElementById('message').value,
      };

      // Log form data (in a real application, you would send this to a server)
      console.log('Form submitted:', formData);

      // Show success message
      alert('Thank you for your inquiry! We will get back to you soon.');

      // Reset form
      contactForm.reset();
    });
  }
});

