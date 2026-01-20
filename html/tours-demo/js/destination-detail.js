const destinations = {
    1: {
        name: "Sigiriya",
        location: "Central Province, Sri Lanka",
        rating: "4.9 (234 reviews)",
        description: "Discover the ancient rock fortress of Sigiriya, a UNESCO World Heritage Site. Climb the 1,200 steps to the summit and marvel at the ancient frescoes, water gardens, and breathtaking panoramic views of the surrounding jungle.",
        image: "https://images.unsplash.com/photo-1603477849227-705c424d1d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNofGVufDF8fHx8MTc2ODgyODk2OHww&ixlib=rb-4.1.0&q=80&w=1080",
        highlights: [
            "Ancient rock fortress (UNESCO World Heritage)",
            "Famous Sigiriya frescoes (Cave paintings)",
            "Beautiful water gardens",
            "Stunning panoramic views",
            "Rich archaeological history"
        ]
    },
    2: {
        name: "Ella",
        location: "Uva Province, Sri Lanka",
        rating: "4.8 (189 reviews)",
        description: "Experience the cool mountain air and stunning landscapes of Ella. Famous for the Nine Arch Bridge, Ella Rock, and Little Adam's Peak, this charming hill station offers breathtaking views, tea plantations, and excellent hiking opportunities.",
        image: "https://images.unsplash.com/photo-1604223190546-a43e4c7f29d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3Njg4NDI2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        highlights: [
            "Nine Arch Bridge (Iconic railway bridge)",
            "Ella Rock hiking trail",
            "Little Adam's Peak",
            "Tea plantation tours",
            "Cool mountain climate"
        ]
    },
    3: {
        name: "Kandy",
        location: "Central Province, Sri Lanka",
        rating: "4.7 (312 reviews)",
        description: "Visit the cultural capital of Sri Lanka, home to the sacred Temple of the Tooth Relic. Explore the beautiful Kandy Lake, enjoy traditional Kandyan dance performances, and experience the rich Buddhist heritage of this historic city.",
        image: "https://images.unsplash.com/photo-1616036902568-fa623d8f0c0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGVhbiUyMGNpdHl8ZW58MXx8fHwxNzY4ODA0ODcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        highlights: [
            "Temple of the Tooth Relic (UNESCO)",
            "Kandy Lake and city views",
            "Traditional Kandyan dance shows",
            "Royal Botanical Gardens (Peradeniya)",
            "Rich cultural heritage"
        ]
    },
    4: {
        name: "Anuradhapura",
        location: "North Central Province, Sri Lanka",
        rating: "4.9 (267 reviews)",
        description: "Step back in time at Anuradhapura, one of the ancient capitals of Sri Lanka and a UNESCO World Heritage Site. Explore ancient stupas, monasteries, and the sacred Bodhi tree, dating back over 2,000 years.",
        image: "https://images.unsplash.com/photo-1655316281160-e3a9e78472e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHRlbXBsZXxlbnwxfHx8fDE3Njg4ODMwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        highlights: [
            "Ancient city (UNESCO World Heritage)",
            "Sacred Sri Maha Bodhi tree",
            "Ruwanwelisaya Stupa",
            "Ancient monasteries and ruins",
            "Rich Buddhist history"
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id')) || 1;
    const destination = destinations[id] || destinations[1];

    // Update page content
    document.getElementById('hero-image').src = destination.image;
    document.getElementById('hero-image').alt = destination.name;
    document.getElementById('destination-name').textContent = destination.name;
    document.getElementById('destination-location').textContent = destination.location;
    document.getElementById('destination-rating').textContent = destination.rating;
    document.getElementById('destination-description').textContent = destination.description;

    // Update highlights
    const highlightsList = document.getElementById('highlights-list');
    highlightsList.innerHTML = destination.highlights.map(highlight => `
        <li class="flex items-center gap-3">
            <div class="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <span class="font-ubuntu text-base text-gray-500">${highlight}</span>
        </li>
    `).join('');
});

