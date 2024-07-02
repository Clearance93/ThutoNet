document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple authentication (for demonstration purposes)
    if (username === 'educator' && password === 'password') {
        localStorage.setItem('authenticated', 'true');
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('login-message').textContent = 'Invalid username or password';
    }
});
