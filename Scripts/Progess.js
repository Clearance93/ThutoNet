const progressList = document.getElementById('progress-list');

// Simulated learner data (replace with actual data or fetch from a server)
const learnerProgress = [
    { name: 'John Doe', progress: 80 },
    { name: 'Jane Smith', progress: 60 },
    { name: 'Michael Johnson', progress: 75 },
    { name: 'Emily Davis', progress: 90 },
    { name: 'David Wilson', progress: 70 }
];

// Display learner progress in the dashboard
function displayProgress() {
    progressList.innerHTML = '';
    learnerProgress.forEach(learner => {
        const progressItem = document.createElement('div');
        progressItem.classList.add('progress-item');
        progressItem.innerHTML = `<strong>${learner.name}</strong> - Progress: ${learner.progress}%`;
        progressList.appendChild(progressItem);
    });
}

// Check if user is authenticated as an educator (for demonstration purposes)
function isAuthenticated() {
    const authenticated = localStorage.getItem('authenticated');
    return authenticated === 'true';
}

// Main function to control access and display progress
function initDashboard() {
    if (isAuthenticated()) {
        displayProgress();
    } else {
        alert('Access denied. Please log in as an educator.');
        // Redirect to login page or handle access denial as needed
        window.location.href = 'login.html';
    }
}

// Initialize the dashboard when the page loads
document.addEventListener('DOMContentLoaded', initDashboard);
