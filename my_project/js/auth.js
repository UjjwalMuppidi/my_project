// User authentication management
let users = [];

// Load users from localStorage
function loadUsers() {
    try {
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
            users = JSON.parse(storedUsers);
        } else {
            // Initialize with empty array if no users found
            users = [];
        }
    } catch (error) {
        console.error('Error loading users:', error);
        // Initialize with empty array if there's an error
        users = [];
    }
}

// Save users to localStorage
function saveUsers() {
    try {
        localStorage.setItem('users', JSON.stringify(users));
        return true;
    } catch (error) {
        console.error('Error saving users:', error);
        return false;
    }
}

// Form validation
function validateForm(formData) {
    const errors = [];
    
    if (!formData.username || formData.username.length < 3) {
        errors.push('Username must be at least 3 characters long');
    }
    
    if (formData.email && !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!formData.password || formData.password.length < 6) {
        errors.push('Password must be at least 6 characters long');
    }
    
    if (formData.confirmPassword && formData.password !== formData.confirmPassword) {
        errors.push('Passwords do not match');
    }
    
    return errors;
}

// Show form errors
function showErrors(errors) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-messages';
    errorDiv.innerHTML = errors.map(error => `<p class="error">${error}</p>`).join('');
    
    // Remove any existing error messages
    const existingErrors = document.querySelector('.error-messages');
    if (existingErrors) {
        existingErrors.remove();
    }
    
    const form = document.querySelector('form');
    form.insertBefore(errorDiv, form.firstChild);
}

// Handle registration
function handleRegister(e) {
    e.preventDefault();
    
    const formData = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirm-password').value
    };
    
    const errors = validateForm(formData);
    if (errors.length > 0) {
        showErrors(errors);
        return;
    }
    
    // Check if username already exists
    if (users.some(user => user.username === formData.username)) {
        showErrors(['Username already exists']);
        return;
    }
    
    // Add new user
    users.push({
        username: formData.username,
        email: formData.email,
        password: formData.password
    });
    
    const saved = saveUsers();
    if (saved) {
        alert('Registration successful! Please login.');
        window.location.href = 'login.html';
    } else {
        showErrors(['Error saving user data. Please try again.']);
    }
}

// Handle login
function handleLogin(e) {
    e.preventDefault();
    
    const formData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };
    
    const errors = validateForm(formData);
    if (errors.length > 0) {
        showErrors(errors);
        return;
    }
    
    // Check credentials
    const user = users.find(u => u.username === formData.username && u.password === formData.password);
    if (!user) {
        showErrors(['Invalid username or password']);
        return;
    }
    
    // Set logged in user
    sessionStorage.setItem('currentUser', formData.username);
    alert('Login successful!');
    window.location.href = 'index.html';
}

// Initialize authentication forms
document.addEventListener('DOMContentLoaded', () => {
    // Load users data first
    loadUsers();
    
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
    
    // Check if user is logged in
    const currentUser = sessionStorage.getItem('currentUser');
    updateNavigation(currentUser);
});

// Update navigation based on login status
function updateNavigation(username) {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;
    
    // Get all navigation links except the cart
    const links = Array.from(navLinks.querySelectorAll('a:not(.cart-icon)'));
    
    if (username) {
        // User is logged in
        links.forEach(link => {
            if (link.href.includes('login.html') || link.href.includes('register.html')) {
                link.style.display = 'none';
            }
        });
        
        // Add profile and logout links if they don't exist
        if (!document.querySelector('.nav-links a[href="#"].profile-link')) {
            const profileLink = document.createElement('a');
            profileLink.href = '#';
            profileLink.textContent = `Hello, ${username}`;
            profileLink.classList.add('profile-link');
            navLinks.insertBefore(profileLink, document.querySelector('.cart-icon'));
            
            // Add My Orders link
            const ordersLink = document.createElement('a');
            ordersLink.href = 'orders.html';
            ordersLink.textContent = 'My Orders';
            ordersLink.classList.add('orders-link');
            navLinks.insertBefore(ordersLink, document.querySelector('.cart-icon'));
            
            const logoutLink = document.createElement('a');
            logoutLink.href = '#';
            logoutLink.textContent = 'Logout';
            logoutLink.classList.add('logout-link');
            logoutLink.addEventListener('click', (e) => {
                e.preventDefault();
                sessionStorage.removeItem('currentUser');
                window.location.href = 'index.html';
            });
            navLinks.insertBefore(logoutLink, document.querySelector('.cart-icon'));
        }
    } else {
        // User is not logged in
        links.forEach(link => {
            if (link.href.includes('login.html') || link.href.includes('register.html')) {
                link.style.display = 'inline-block';
            }
        });
        
        // Remove profile and logout links if they exist
        const profileLink = document.querySelector('.nav-links .profile-link');
        const ordersLink = document.querySelector('.nav-links .orders-link');
        const logoutLink = document.querySelector('.nav-links .logout-link');
        
        if (profileLink) profileLink.remove();
        if (ordersLink) ordersLink.remove();
        if (logoutLink) logoutLink.remove();
    }
}