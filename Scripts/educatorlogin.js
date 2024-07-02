document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'educator@thutoNet.co.za' && password === 'Educator@123') {
        localStorage.setItem('authenticated', 'true');
        window.location.href = '/Html/EducatorManagement.html';
    } else {
        document.getElementById('login-message').textContent = 'Invalid username or password';
    }
});

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon').firstElementChild;
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.replace('bi-eye-slash', 'bi-eye');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.replace('bi-eye', 'bi-eye-slash');
    }
}