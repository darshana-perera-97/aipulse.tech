// Load Header
function loadHeader() {
    const header = document.getElementById('header');
    if (header) {
        const currentPath = window.location.pathname;
        const currentPage = currentPath.split('/').pop() || 'index.html';
        
        header.style.display = 'block';
        header.innerHTML = `
            <nav class="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 shadow-sm">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16">
                        <!-- Logo -->
                        <a href="index.html" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <p class="font-ubuntu font-bold text-xl bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">TOUR</p>
                        </a>

                        <!-- Desktop Navigation -->
                        <div class="hidden md:flex items-center gap-8">
                            <a href="index.html" class="font-ubuntu font-medium text-[15px] ${currentPage === 'index.html' || currentPage === '' ? 'text-purple-600 border-b-2 border-purple-600 pb-1' : 'text-gray-600 hover:text-purple-600'} transition-colors">
                                Home
                            </a>
                            <a href="destinations.html" class="font-ubuntu font-medium text-[15px] ${currentPage === 'destinations.html' ? 'text-purple-600 border-b-2 border-purple-600 pb-1' : 'text-gray-600 hover:text-purple-600'} transition-colors">
                                Destinations
                            </a>
                            <a href="packages.html" class="font-ubuntu font-medium text-[15px] ${currentPage === 'packages.html' ? 'text-purple-600 border-b-2 border-purple-600 pb-1' : 'text-gray-600 hover:text-purple-600'} transition-colors">
                                Packages
                            </a>
                            <a href="about.html" class="font-ubuntu font-medium text-[15px] ${currentPage === 'about.html' ? 'text-purple-600 border-b-2 border-purple-600 pb-1' : 'text-gray-600 hover:text-purple-600'} transition-colors">
                                About Us
                            </a>
                            <a href="contact.html" class="font-ubuntu font-medium text-[15px] ${currentPage === 'contact.html' ? 'text-purple-600 border-b-2 border-purple-600 pb-1' : 'text-gray-600 hover:text-purple-600'} transition-colors">
                                Contact
                            </a>
                        </div>

                        <!-- Mobile Menu Button -->
                        <button id="mobile-menu-btn" class="md:hidden text-gray-600 hover:text-purple-600 transition-colors" aria-label="Menu">
                            <svg id="menu-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                            <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Mobile Menu -->
                <div id="mobile-menu" class="md:hidden hidden border-t border-gray-100 bg-white">
                    <div class="px-4 py-4 space-y-3">
                        <a href="index.html" class="block font-ubuntu font-medium text-[15px] ${currentPage === 'index.html' || currentPage === '' ? 'text-purple-600 border-l-4 border-purple-600 pl-3' : 'text-gray-600 hover:text-purple-600'} transition-colors py-2">
                            Home
                        </a>
                        <a href="destinations.html" class="block font-ubuntu font-medium text-[15px] ${currentPage === 'destinations.html' ? 'text-purple-600 border-l-4 border-purple-600 pl-3' : 'text-gray-600 hover:text-purple-600'} transition-colors py-2">
                            Destinations
                        </a>
                        <a href="packages.html" class="block font-ubuntu font-medium text-[15px] ${currentPage === 'packages.html' ? 'text-purple-600 border-l-4 border-purple-600 pl-3' : 'text-gray-600 hover:text-purple-600'} transition-colors py-2">
                            Packages
                        </a>
                        <a href="about.html" class="block font-ubuntu font-medium text-[15px] ${currentPage === 'about.html' ? 'text-purple-600 border-l-4 border-purple-600 pl-3' : 'text-gray-600 hover:text-purple-600'} transition-colors py-2">
                            About Us
                        </a>
                        <a href="contact.html" class="block font-ubuntu font-medium text-[15px] ${currentPage === 'contact.html' ? 'text-purple-600 border-l-4 border-purple-600 pl-3' : 'text-gray-600 hover:text-purple-600'} transition-colors py-2">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        `;
        
        // Mobile menu toggle functionality
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', function() {
                const isHidden = mobileMenu.classList.contains('hidden');
                if (isHidden) {
                    mobileMenu.classList.remove('hidden');
                    menuIcon.classList.add('hidden');
                    closeIcon.classList.remove('hidden');
                    document.body.classList.add('menu-open');
                } else {
                    mobileMenu.classList.add('hidden');
                    menuIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                    document.body.classList.remove('menu-open');
                }
            });
            
            // Close mobile menu when clicking on a link
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.add('hidden');
                    menuIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                    document.body.classList.remove('menu-open');
                });
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', function(event) {
                if (!mobileMenu.contains(event.target) && 
                    !mobileMenuBtn.contains(event.target) && 
                    !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    menuIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                    document.body.classList.remove('menu-open');
                }
            });
        }
    }
}

// Load Footer
function loadFooter() {
    const footer = document.getElementById('footer');
    if (footer) {
        footer.innerHTML = `
            <div class="bg-white border-t border-gray-200 py-16">
                <div class="w-full max-w-[1280px] mx-auto px-8">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <!-- Company Info -->
                        <div>
                            <div class="flex items-center gap-2 mb-6">
                                <p class="font-ubuntu font-bold text-2xl bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">TOUR</p>
                            </div>
                            <p class="text-gray-500 font-ubuntu text-sm leading-relaxed mb-6">
                                Plan for your next weekend and create a tour with Travys to any places you want at cheapest price
                            </p>
                            <div class="flex items-center gap-4">
                                <a href="#" class="text-gray-400 hover:text-purple-600 transition-colors">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"></path></svg>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-purple-600 transition-colors">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-purple-600 transition-colors">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-purple-600 transition-colors">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
                                </a>
                            </div>
                        </div>

                        <!-- Quick Links -->
                        <div>
                            <h3 class="font-ubuntu font-bold text-lg text-gray-800 mb-6">Quick Links</h3>
                            <ul class="space-y-3">
                                <li><a href="index.html" class="text-gray-500 font-ubuntu text-sm hover:text-purple-600 transition-colors">Home</a></li>
                                <li><a href="destinations.html" class="text-gray-500 font-ubuntu text-sm hover:text-purple-600 transition-colors">Destinations</a></li>
                                <li><a href="packages.html" class="text-gray-500 font-ubuntu text-sm hover:text-purple-600 transition-colors">Packages</a></li>
                                <li><a href="about.html" class="text-gray-500 font-ubuntu text-sm hover:text-purple-600 transition-colors">About Us</a></li>
                                <li><a href="contact.html" class="text-gray-500 font-ubuntu text-sm hover:text-purple-600 transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        <!-- Tour Packages -->
                        <div>
                            <h3 class="font-ubuntu font-bold text-lg text-gray-800 mb-6">Tour Packages</h3>
                            <ul class="space-y-3">
                                <li><a href="#" class="text-gray-500 font-ubuntu text-sm hover:text-purple-600 transition-colors">Beach Getaways</a></li>
                                <li><a href="#" class="text-gray-500 font-ubuntu text-sm hover:text-purple-600 transition-colors">Mountain Adventures</a></li>
                                <li><a href="#" class="text-gray-500 font-ubuntu text-sm hover:text-purple-600 transition-colors">City Tours</a></li>
                                <li><a href="#" class="text-gray-500 font-ubuntu text-sm hover:text-purple-600 transition-colors">Cultural Experiences</a></li>
                                <li><a href="#" class="text-gray-500 font-ubuntu text-sm hover:text-purple-600 transition-colors">Luxury Escapes</a></li>
                            </ul>
                        </div>

                        <!-- Subscribe -->
                        <div>
                            <h3 class="font-ubuntu font-bold text-lg text-gray-800 mb-6">Subscribe to Newsletter</h3>
                            <p class="text-gray-500 font-ubuntu text-sm mb-4">
                                Get updates on exclusive deals and travel tips
                            </p>
                            <div class="flex gap-2">
                                <input type="email" placeholder="Your email" class="flex-1 px-4 py-2 rounded-lg bg-gray-50 text-gray-800 placeholder:text-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                                <button class="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg font-ubuntu font-medium hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg">Submit</button>
                            </div>
                        </div>
                    </div>

                    <!-- Bottom Bar -->
                    <div class="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p class="text-gray-400 font-ubuntu text-sm">
                            © 2026 TOUR. All rights reserved.
                        </p>
                        <div class="flex items-center gap-6">
                            <a href="#" class="text-gray-400 font-ubuntu text-sm hover:text-purple-600 transition-colors">Privacy Policy</a>
                            <a href="#" class="text-gray-400 font-ubuntu text-sm hover:text-purple-600 transition-colors">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
});

