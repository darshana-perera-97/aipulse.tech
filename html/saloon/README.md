# Lumière Salon - HTML/CSS/JS Version

This is a standalone HTML/CSS/JavaScript version of the Lumière Salon landing page, originally built with React/Vite. This version uses vanilla HTML, CSS, and JavaScript with Tailwind CSS (via CDN) to replicate all the functionality and design.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Scrolling**: Smooth scroll navigation between sections
- **Mobile Menu**: Hamburger menu for mobile devices
- **Gallery Filter**: Interactive gallery with category filters
- **Contact Form**: Functional contact form with validation
- **Image Fallback**: Automatic fallback for broken images
- **Toast Notifications**: Success notifications for form submissions

## File Structure

```
html/
├── index.html      # Main HTML file with all sections
├── gallery.html    # Dedicated gallery page
├── styles.css      # Custom CSS styles
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## Pages

### index.html (Home Page)
1. **Header**: Fixed navigation with logo, menu items, and mobile menu
2. **Hero**: Full-screen hero section with background image and CTA buttons
3. **About**: Text section describing the salon's philosophy
4. **Services**: Three service packages (The Minimalist, The Luminous, The Sanctuary)
5. **Gallery**: Preview section with filterable images and link to full gallery page
6. **Contact**: Contact form and salon information
7. **Footer**: Footer with links and contact information

### gallery.html (Gallery Page)
- **Header**: Same navigation as home page
- **Gallery**: Full gallery page with masonry grid layout and filterable images
- **Footer**: Same footer as home page

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom styles and animations
- **JavaScript (ES6+)**: Vanilla JavaScript for interactivity
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Google Fonts**: Playfair Display (serif) and Inter (sans-serif)

## How to Use

1. Open `index.html` in a web browser
2. No build process or dependencies required
3. All assets are loaded via CDN

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Color Palette

- **Champagne**: `#C5B358` (Primary accent)
- **Obsidian**: `#1A1A1A` (Text/Background)
- **Soft Shell**: `#F9F8F6` (Background)
- **Text Secondary**: `#757575` (Secondary text)

## Notes

- Images are loaded from Unsplash (external URLs)
- Form submissions are simulated (no backend integration)
- Toast notifications are shown for form submissions
- All interactive features work without any framework dependencies

