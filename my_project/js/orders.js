// Orders management

// Load orders from localStorage
function loadOrders() {
    const currentUser = sessionStorage.getItem('currentUser');
    if (!currentUser) {
        // Redirect to login if not logged in
        window.location.href = 'login.html';
        return [];
    }
    
    // Get orders from localStorage
    const allOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    
    // Filter orders for current user
    return allOrders.filter(order => order.username === currentUser);
}

// Display orders
function displayOrders() {
    const ordersList = document.getElementById('orders-list');
    const noOrdersMessage = document.getElementById('no-orders-message');
    
    if (!ordersList) return;
    
    const orders = loadOrders();
    
    // Show message if no orders
    if (orders.length === 0) {
        if (noOrdersMessage) {
            noOrdersMessage.style.display = 'block';
        }
        return;
    }
    
    // Hide no orders message
    if (noOrdersMessage) {
        noOrdersMessage.style.display = 'none';
    }
    
    // Clear previous orders
    ordersList.innerHTML = '';
    
    // Display each order
    orders.forEach((order, index) => {
        const orderElement = document.createElement('div');
        orderElement.className = 'order-item';
        
        // Create order header
        const orderHeader = document.createElement('div');
        orderHeader.className = 'order-header';
        orderHeader.innerHTML = `
            <h3>Order #${index + 1}</h3>
            <p>Date: ${new Date(order.date).toLocaleDateString()}</p>
            <p>Total: ₹${order.total.toFixed(2)}</p>
        `;
        
        // Create order items list
        const orderItems = document.createElement('div');
        orderItems.className = 'order-items';
        
        // Add each item in the order
        order.items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'order-item-detail';
            itemElement.innerHTML = `
                <p>${item.name} x ${item.quantity}</p>
                <p>$${(item.price * item.quantity).toFixed(2)}</p>
            `;
            orderItems.appendChild(itemElement);
        });
        
        // Add delivery address if available
        if (order.address) {
            const addressElement = document.createElement('div');
            addressElement.className = 'order-address';
            addressElement.innerHTML = `
                <h4>Delivery Address:</h4>
                <p>${order.address}</p>
            `;
            orderElement.appendChild(addressElement);
        }
        
        // Append all elements to the order
        orderElement.appendChild(orderHeader);
        orderElement.appendChild(orderItems);
        
        // Add the order to the list
        ordersList.appendChild(orderElement);
    });
}

// Initialize orders page
document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    const currentUser = sessionStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }
    
    // Update navigation
    updateNavigation(currentUser);
    
    // Display orders
    displayOrders();
});