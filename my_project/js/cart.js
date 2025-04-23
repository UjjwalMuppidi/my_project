// Cart management
let cart = [];

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('foodCart');
    cart = savedCart ? JSON.parse(savedCart) : [];
    updateCartCount();
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('foodCart', JSON.stringify(cart));
    updateCartCount();
}

// Update cart count in navigation
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
}

// Add item to cart
function addToCart(itemId) {
    const item = getMenuItem(itemId);
    if (!item) return;

    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1
        });
    }
    saveCart();
    showNotification(`Added ${item.name} to cart`);
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Display cart items
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div>
                <h3>${item.name}</h3>
                <p>₹${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <div>
                <button class="btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <span>${item.quantity}</span>
                <button class="btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                <button class="btn" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    updateTotal();
}

// Update item quantity
function updateQuantity(itemId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(itemId);
        return;
    }

    const item = cart.find(item => item.id === itemId);
    if (item) {
        item.quantity = newQuantity;
        saveCart();
        displayCart();
    }
}

// Remove item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    displayCart();
}

// Update total price
function updateTotal() {
    const totalElement = document.getElementById('total-price');
    if (!totalElement) return;

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalElement.textContent = total.toFixed(2);
}

// Handle checkout process
function initializeCheckout() {
    const proceedBtn = document.getElementById('proceed-btn');
    const checkoutForm = document.getElementById('checkout-form');
    const deliveryForm = document.getElementById('delivery-form');

    if (proceedBtn && checkoutForm && deliveryForm) {
        proceedBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            checkoutForm.classList.remove('hidden');
            proceedBtn.classList.add('hidden');
        });

        deliveryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get current user
            const currentUser = sessionStorage.getItem('currentUser');
            
            // Save order to localStorage if user is logged in
            if (currentUser) {
                const address = document.getElementById('address').value;
                
                // Create order object
                const order = {
                    username: currentUser,
                    date: new Date().toISOString(),
                    items: [...cart],
                    total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
                    address: address
                };
                
                // Get existing orders
                const orders = JSON.parse(localStorage.getItem('orders') || '[]');
                
                // Add new order
                orders.push(order);
                
                // Save orders
                localStorage.setItem('orders', JSON.stringify(orders));
            }
            
            alert('Order placed successfully!');
            cart = [];
            saveCart();
            window.location.href = 'index.html';
        });
    }
}

// Get menu item by ID
function getMenuItem(id) {
    const menuItems = [
        { id: 1, name: 'Margherita Pizza', price: 250 },
        { id: 2, name: 'Chicken Burger', price: 180 },
        { id: 3, name: 'Caesar Salad', price: 150 },
        { id: 4, name: 'Pasta Carbonara', price: 350 },
        { id: 5, name: 'Chocolate Cake', price: 180 },
        { id: 6, name: 'Garlic Bread', price: 120 },
        { id: 7, name: 'Mozzarella Sticks', price: 150 },
        { id: 8, name: 'Vegetable Lasagna', price: 300 },
        { id: 9, name: 'Roasted Chicken', price: 450 },
        { id: 10, name: 'Tiramisu', price: 250 },
        { id: 11, name: 'Fruit Salad', price: 130 },
        { id: 12, name: 'Seafood Paella', price: 500 }
    ];
    return menuItems.find(item => item.id === id);
}

// Function to display menu items dynamically
function displayMenu() {
    const menuContainer = document.getElementById('menu-items');
    if (!menuContainer) return;

    const menuItems = [
        { id: 1, name: 'Margherita Pizza', price: 250 },
        { id: 2, name: 'Chicken Burger', price: 180 },
        { id: 3, name: 'Caesar Salad', price: 150 },
        { id: 4, name: 'Pasta Carbonara', price: 350 },
        { id: 5, name: 'Chocolate Cake', price: 180 },
        { id: 6, name: 'Garlic Bread', price: 120 },
        { id: 7, name: 'Mozzarella Sticks', price: 150 },
        { id: 8, name: 'Vegetable Lasagna', price: 300 },
        { id: 9, name: 'Roasted Chicken', price: 450 },
        { id: 10, name: 'Tiramisu', price: 250 },
        { id: 11, name: 'Fruit Salad', price: 130 },
        { id: 12, name: 'Seafood Paella', price: 500 }
    ];

    menuItems.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.className = 'menu-item';
        menuItemElement.innerHTML = `
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
            <button class="btn" onclick="addToCart(${item.id})">Add to Cart</button>
        `;
        menuContainer.appendChild(menuItemElement);
    });
}

// Initialize cart functionality
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    displayCart();
    initializeCheckout();
    displayMenu();  // This will display the menu dynamically with all items
});

// Expose functions to global scope
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
