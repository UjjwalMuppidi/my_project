// Menu items data

// Helper function to get image path or fallback to SVG
const getImagePath = (filename, fallbackSvg) => {
    // Return the correct path to the image file
    return `images/${filename}`;
};

const menuItems = [
        {
            id: 1,
            name: 'Margherita Pizza',
            price: 250, // Approximate price in INR
            category: 'main',
            image: getImagePath('margerita-pizza.jpg', 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="%23f0ad4e"/><circle cx="50" cy="50" r="35" fill="%23d9534f"/><circle cx="35" cy="40" r="5" fill="%23fff"/><circle cx="50" cy="60" r="5" fill="%23fff"/><circle cx="65" cy="40" r="5" fill="%23fff"/></svg>'),
            description: 'Classic Italian pizza with tomato sauce and mozzarella'
        },
        {
            id: 2,
            name: 'Chicken Burger',
            price: 180, // Approximate price in INR
            category: 'main',
            image: getImagePath('chicken-burger.jpeg', 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="20" y="30" width="60" height="40" rx="20" fill="%23d4a017"/><rect x="25" y="40" width="50" height="5" fill="%2334a853"/><rect x="25" y="55" width="50" height="5" fill="%23fbbc05"/></svg>'),
            description: 'Grilled chicken patty with fresh vegetables'
        },
        {
            id: 3,
            name: 'Caesar Salad',
            price: 150, // Approximate price in INR
            category: 'appetizer',
            image: getImagePath('caesar-salad.jpeg', 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="%2334a853"/><path d="M30 40 L70 40 L50 70 Z" fill="%23fbbc05"/></svg>'),
            description: 'Fresh romaine lettuce with Caesar dressing'
        },
        {
            id: 4,
            name: 'Pasta Carbonara',
            price: 350, // Approximate price in INR
            category: 'main',
            image: getImagePath('pasta-carbonara.jpg', 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="%23f5f5dc"/><path d="M20 50 Q50 20 80 50" stroke="%23d4a017" stroke-width="5" fill="none"/><path d="M20 60 Q50 30 80 60" stroke="%23d4a017" stroke-width="5" fill="none"/></svg>'),
            description: 'Creamy pasta with bacon and parmesan'
        },
        {
            id: 5,
            name: 'Chocolate Cake',
            price: 180, // Approximate price in INR
            category: 'dessert',
            image: getImagePath('chocolate-cake.jpg', 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="20" y="30" width="60" height="40" fill="%23654321"/><rect x="20" y="40" width="60" height="5" fill="%23964B00"/></svg>'),
            description: 'Rich chocolate cake with ganache'
        },
        {
            id: 6,
            name: 'Garlic Bread',
            price: 120, // Approximate price in INR
            category: 'appetizer',
            image: getImagePath('garlic-bread.jpg', 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="20" y="40" width="60" height="20" fill="%23d4a017"/><circle cx="30" cy="50" r="3" fill="%23fff"/><circle cx="40" cy="50" r="3" fill="%23fff"/><circle cx="50" cy="50" r="3" fill="%23fff"/></svg>'),
            description: 'Freshly baked bread with garlic butter'
        },
        {
            id: 7,
            name: 'Mozzarella Sticks',
            price: 150, // Approximate price in INR
            category: 'appetizer',
            image: getImagePath('mozzarella-sticks.jpg', 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="30" y="30" width="10" height="40" fill="%23f0ad4e"/><rect x="45" y="30" width="10" height="40" fill="%23f0ad4e"/><rect x="60" y="30" width="10" height="40" fill="%23f0ad4e"/></svg>'),
            description: 'Crispy fried mozzarella with marinara sauce'
        },
        {
            id: 8,
            name: 'Vegetable Lasagna',
            price: 300, // Approximate price in INR
            category: 'main',
            image: getImagePath('vegetable-lasagna.jpg', 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="20" y="30" width="60" height="40" fill="%23d9534f"/><rect x="20" y="40" width="60" height="5" fill="%23fff"/><rect x="20" y="50" width="60" height="5" fill="%23fff"/></svg>'),
            description: 'Layered pasta with seasonal vegetables and cheese'
        },
        {
            id: 9,
            name: 'Roasted Chicken',
            price: 450, // Approximate price in INR
            category: 'main',
            image: getImagePath('roasted-chicken.jpg', 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M30 40 Q50 30 70 40 Q80 50 70 60 Q50 70 30 60 Q20 50 30 40 Z" fill="%23a52a2a"/></svg>'),
            description: 'Roasted chicken with vegetables and sauce'
        },
        {
            id: 10,
            name: 'Tiramisu',
            price: 250, // Approximate price in INR
            category: 'dessert',
            image: getImagePath('tiramisu.jpg', 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="20" y="30" width="60" height="40" fill="%23d2b48c"/><rect x="20" y="40" width="60" height="5" fill="%23654321"/><rect x="20" y="50" width="60" height="5" fill="%23654321"/></svg>'),
            description: 'Classic Italian dessert with coffee and mascarpone'
        },
        {
            id: 11,
            name: 'Fruit Salad',
            price: 130, // Approximate price in INR
            category: 'dessert',
            image: getImagePath('fruit-salad.jpg', 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="30" cy="40" r="10" fill="%23ff0000"/><circle cx="50" cy="40" r="10" fill="%23ffa500"/><circle cx="70" cy="40" r="10" fill="%23008000"/><circle cx="40" cy="60" r="10" fill="%23800080"/><circle cx="60" cy="60" r="10" fill="%23ffff00"/></svg>'),
            description: 'Fresh seasonal fruits with honey drizzle'
        },
        {
            id: 12,
            name: 'Seafood Paella',
            price: 500, // Approximate price in INR
            category: 'main',
            image: getImagePath('seafood-paella.jpg', 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%23f0ad4e"/><circle cx="40" cy="40" r="5" fill="%23ff0000"/><circle cx="60" cy="40" r="5" fill="%23ff0000"/><circle cx="40" cy="60" r="5" fill="%23000"/><circle cx="60" cy="60" r="5" fill="%23000"/></svg>'),
            description: 'Spanish rice dish with mixed seafood and saffron'
        } 
];

// Function to display menu items
function displayMenu(category = 'all') {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = '';

    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);

    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="menu-item-price">₹${item.price.toFixed(2)}</div>
                <button class="btn primary-btn" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
        `;
        menuContainer.appendChild(menuItem);
    });
}

// Function to get menu item by ID
function getMenuItem(id) {
    return menuItems.find(item => item.id === id);
}

// Initialize menu and event listeners when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayMenu();

    // Add click event listeners to filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Display filtered menu items
            displayMenu(button.dataset.category);
        });
    });
});