document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = '';
    errorMessage.style.color = 'red';

    // Email validation (basic regex for email format)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
        errorMessage.textContent = 'Please enter your email';
        return;
    }

    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address';
        return;
    }

    if (!username) {
        errorMessage.textContent = 'Please choose a username';
        return;
    }

    if (!password) {
        errorMessage.textContent = 'Please enter a password';
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters';
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match';
        return;
    }

    // Retrieve stored users or create an empty array
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the email already exists
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
        errorMessage.textContent = 'This email is already registered. Try logging in.';
        return;
    }

    // Create user object
    const user = { email, username, password };

    // Store in localStorage
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(user));

    // Success message and redirect
    errorMessage.textContent = 'Sign up successful! Redirecting...';
    errorMessage.style.color = 'green';

    setTimeout(() => {
        window.location.href = '/login';
    }, 1500);
});