const assessmentData = [
    {
        question: "Question 1: What are the primary colors?",
        options: ["Red", "Green", "Blue", "Yellow"],
        correct: ["Red", "Blue", "Yellow"]
    },
    {
        question: "Question 2: Who wrote 'Hamlet'?",
        options: ["Shakespeare", "Hemingway", "Fitzgerald", "Dickens"],
        correct: ["Shakespeare"]
    },
    {
        question: "Question 3: Which planet is closest to the Sun?",
        options: ["Mars", "Venus", "Mercury", "Earth"],
        correct: ["Mercury"]
    }
];

const assessmentContainer = document.getElementById('assessment');
const resultsContainer = document.getElementById('results-container');

let score = 0;

function loadAssessment() {
    assessmentData.forEach((questionData, index) => {
        const optionsHtml = questionData.options.map((option, optionIndex) => `
            <label class="assessment-option">
                <input type="checkbox" name="question${index}" value="${option}">
                ${option}
            </label>
        `).join('');

        const questionHtml = `
            <div class="assessment-question">${questionData.question}</div>
            <div class="assessment-options">${optionsHtml}</div>
        `;

        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = questionHtml;

        assessmentContainer.appendChild(questionElement);
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit Assessment';
    submitButton.classList.add('submit-button');
    submitButton.addEventListener('click', showResults);
    assessmentContainer.appendChild(submitButton);
}

function showResults() {
    const questions = document.querySelectorAll('.question');

    questions.forEach((question, index) => {
        const selectedOptions = Array.from(question.querySelectorAll('input[type="checkbox"]:checked'))
                                    .map(input => input.value);

        const correctOptions = assessmentData[index].correct;
        const isCorrect = arraysEqual(selectedOptions.sort(), correctOptions.sort());

        if (isCorrect) {
            score++;
            question.classList.add('correct');
        } else {
            question.classList.add('incorrect');
        }

        // Highlight correct options
        correctOptions.forEach(option => {
            const correctLabel = question.querySelector(`input[value="${option}"]`).parentNode;
            correctLabel.classList.add('correct-answer');
        });
    });

    const resultMessage = `You scored ${score}/${assessmentData.length}!`;
    resultsContainer.innerHTML = `<p>${resultMessage}</p>`;
    resultsContainer.style.display = 'block';

    // Disable submit button after submission
    this.disabled = true;
}

function arraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

loadAssessment();
