const quizData = [
    { question: "Question 1: What is 2 + 2?", a: "3", b: "4", c: "5", correct: "b" },
    { question: "Question 2: What is the capital of France?", a: "Berlin", b: "Madrid", c: "Paris", correct: "c" },
    { question: "Question 3: Which planet is known as the Red Planet?", a: "Earth", b: "Mars", c: "Jupiter", correct: "b" },
    { question: "Question 4: Who wrote 'To Kill a Mockingbird'?", a: "Harper Lee", b: "J.K. Rowling", c: "Ernest Hemingway", correct: "a" },
    { question: "Question 5: What is the largest ocean on Earth?", a: "Atlantic Ocean", b: "Indian Ocean", c: "Pacific Ocean", correct: "c" },
    { question: "Question 6: What is the boiling point of water?", a: "90°C", b: "100°C", c: "110°C", correct: "b" },
    { question: "Question 7: Who painted the Mona Lisa?", a: "Vincent van Gogh", b: "Pablo Picasso", c: "Leonardo da Vinci", correct: "c" },
    { question: "Question 8: What is the chemical symbol for gold?", a: "Au", b: "Ag", c: "Gd", correct: "a" },
    { question: "Question 9: How many continents are there?", a: "5", b: "6", c: "7", correct: "c" },
    { question: "Question 10: Who is known as the Father of Computers?", a: "Alan Turing", b: "Charles Babbage", c: "Bill Gates", correct: "b" }
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results-container');
const balloonsContainer = document.getElementById('balloons-container');
let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestionIndex >= quizData.length) {
        showResults();
        return;
    }

    const currentQuestion = quizData[currentQuestionIndex];
    quizContainer.innerHTML = `
        <div class="quiz-question">${currentQuestion.question}</div>
        <button class="quiz-option" data-answer="a">${currentQuestion.a}</button>
        <button class="quiz-option" data-answer="b">${currentQuestion.b}</button>
        <button class="quiz-option" data-answer="c">${currentQuestion.c}</button>
    `;

    document.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', () => {
            const selectedAnswer = option.getAttribute('data-answer');
            if (selectedAnswer === currentQuestion.correct) {
                score++;
            }
            currentQuestionIndex++;
            loadQuestion();
        });
    });
}

function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';

    const resultMessage = score >= 8 ? `You scored ${score}/10! You passed!` : `You scored ${score}/10. Better luck next time!`;
    document.getElementById('results').textContent = resultMessage;

    if (score >= 8) {
        document.getElementById('trophy-container').style.display = 'block';
        startBalloons();
    }
}

function startBalloons() {
    balloonsContainer.style.display = 'block';
    for (let i = 0; i < 30; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.backgroundColor = getRandomColor();
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.animationDelay = `${Math.random() * 2}s`;
        balloonsContainer.appendChild(balloon);
    }
}

function getRandomColor() {
    const colors = ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#800080'];
    return colors[Math.floor(Math.random() * colors.length)];
}

loadQuestion();