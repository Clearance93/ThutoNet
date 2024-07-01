// Function to generate random numbers for addition
function generateNumbers() {
    const num1 = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    const num2 = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    return { num1, num2 };
}

// Function to initialize the game
function initGame() {
    const { num1, num2 } = generateNumbers();
    document.getElementById('num1').textContent = num1;
    document.getElementById('num2').textContent = num2;
    document.getElementById('answer').value = ''; // Clear previous input
    document.getElementById('feedback').textContent = ''; // Clear previous feedback
    document.getElementById('correct-answer').textContent = ''; // Clear previous correct answer
}

// Function to handle submission of the answer
function submitAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const num1 = parseInt(document.getElementById('num1').textContent);
    const num2 = parseInt(document.getElementById('num2').textContent);
    const correctAnswer = num1 + num2;

    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = 'Correct!';
        document.getElementById('feedback').classList.remove('incorrect');
        document.getElementById('feedback').classList.add('correct');
    } else {
        document.getElementById('feedback').textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
        document.getElementById('feedback').classList.remove('correct');
        document.getElementById('feedback').classList.add('incorrect');
    }

    document.getElementById('correct-answer').textContent = `The correct answer is ${correctAnswer}.`; // Display correct answer
    
    // Reset for the next round
    const nextNumbers = generateNumbers();
    document.getElementById('num1').textContent = nextNumbers.num1;
    document.getElementById('num2').textContent = nextNumbers.num2;
    document.getElementById('answer').value = ''; // Clear input for next round
}

// Event listener for the submit button
document.getElementById('submit').addEventListener('click', submitAnswer);

// Initialize the game on page load
document.addEventListener('DOMContentLoaded', function() {
    initGame();
});
