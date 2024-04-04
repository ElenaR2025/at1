// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Add a click event listener to the button
    btn.addEventListener("click", function() {
        const answerElement = content.querySelector('.answer'); // Select the answer element
        if (btn.textContent === "Reveal Answer") { // Check if the button text is "Reveal Answer"
            answerElement.style.display = "block"; // Show the answer
            btn.textContent = "Next Question"; // Change the button text to "Next Question"
        } else {
            currentQuestionIndex++; // Move to the next question
            displayQuestion(); // Display the next question
        }
    });
});

// Initialize the current question index
let currentQuestionIndex = 0;

// Parse the questions from the JSON data attribute of the content element
const questions = JSON.parse(document.getElementById('content').getAttribute('data-questions'));

// Select the content and button elements
const content = document.getElementById('content');
const btn = document.getElementById('revealBtn');

// Function to display the current question
function displayQuestion() {
    if (currentQuestionIndex < questions.length) { // Check if there are more questions
        const question = questions[currentQuestionIndex].fields.question_text; // Get the question text
        const answer = questions[currentQuestionIndex].fields.answer_text; // Get the answer text

        // Set the content HTML to display the question and answer
        content.innerHTML = `<div class='question'>Question: ${question}</div><div class='answer' style='display: none;'>Answer: ${answer}</div>`;

        // Set the button text to "Reveal Answer"
        btn.textContent = "Reveal Answer";
    } else {
        // If there are no more questions, display a message and hide the button
        content.innerHTML = "No more questions.";
        btn.style.display = "none";
    }
}

// Display the first question
displayQuestion();

// Add a click event listener to the button
btn.addEventListener("click", function() {
    const answerElement = content.querySelector('.answer'); // Select the answer element
    if (btn.textContent === "Reveal Answer") { // Check if the button text is "Reveal Answer"
        answerElement.style.display = "block"; // Show the answer
        btn.textContent = "Next Question"; // Change the button text to "Next Question"
    } else {
        currentQuestionIndex++; // Move to the next question
        displayQuestion(); // Display the next question
    }
});
