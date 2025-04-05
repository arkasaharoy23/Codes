document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');
    
    errorMessage.textContent = '';
    errorMessage.style.color = 'red';

    // Basic validation
    if (!email) {
        errorMessage.textContent = 'Please enter your email';
        return;
    }
    
    if (!password) {
        errorMessage.textContent = 'Please enter your password';
        return;
    }
    
    // Get stored users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    // Find user with matching email
    const user = storedUsers.find(user => user.email === email);
    
    if (!user) {
        errorMessage.textContent = 'No account found with this email';
        return;
    }
    
    // Check password
    if (user.password !== password) {
        errorMessage.textContent = 'Incorrect password';
        return;
    }
    
    // Login successful
    errorMessage.textContent = 'Login successful! Redirecting...';
    errorMessage.style.color = 'green';
    
    // Store current user in localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    // Redirect after a short delay
    setTimeout(() => {
        window.location.href = '/home';
    }, 1500);
});