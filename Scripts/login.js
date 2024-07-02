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

function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');

    const defaultEmail = "Student@thutoNet.co.za";
    const defaultPassword = "Student@123";

    if (email === defaultEmail && password === defaultPassword) {
        passwordError.style.display = 'none';
        window.location.href = "/Html/dahsboard.html"; 
    } else {
        passwordError.style.display = 'block';
        passwordError.textContent = "Invalid email or password.";
    }
}