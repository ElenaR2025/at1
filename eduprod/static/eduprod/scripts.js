// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Initialize the current question index
    let currentQuestionIndex = 0;
    // Parse the questions from the JSON data attribute of the content element
    const questions = JSON.parse(document.getElementById('content').getAttribute('data-questions'));
    // Select the content and button elements
    const content = document.getElementById('content');
    const btn = document.getElementById('revealBtn');

    // Function to display the current question
    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const question = questions[currentQuestionIndex].fields.question_text; // Get the question text
            const answer = questions[currentQuestionIndex].fields.answer_text; // Get the answer text
            // Set the content HTML to display the question and answer
            content.innerHTML = `<div class='question'>Question: ${question}</div><div class='answer' style='display: none;'>Answer: ${answer}</div>`;
            btn.textContent = "Reveal Answer"; // Set the button text to "Reveal Answer"
        } else {
            content.innerHTML = "No more questions."; // If there are no more questions, display a message
            btn.style.display = "none"; // Hide the button
        }
    }

    displayQuestion(); // Display the first question

    // Add a click event listener to the button
    btn.addEventListener("click", function() {
        const answerElement = content.querySelector('.answer'); // Select the answer element
        if (btn.textContent === "Reveal Answer") {
            answerElement.style.display = "block"; // Show the answer
            btn.textContent = "Next Question"; // Change the button text to "Next Question"
        } else {
            currentQuestionIndex++; // Move to the next question
            displayQuestion(); // Display the next question
        }
    });
});

// Function to show a specific flashcard
function showCard(index) {
    flashcards.forEach(card => card.classList.remove('active')); // Remove the 'active' class from all flashcards
    flashcards[index].classList.add('active'); // Add the 'active' class to the specified flashcard
}

// Add event listeners for the previous and next buttons
document.getElementById('prevBtn').addEventListener('click', function() {
    currentCardIndex = (currentCardIndex === 0) ? flashcards.length - 1 : currentCardIndex - 1; // Update the current card index
    showCard(currentCardIndex); // Show the updated flashcard
});

document.getElementById('nextBtn').addEventListener('click', function() {
    currentCardIndex = (currentCardIndex === flashcards.length - 1) ? 0 : currentCardIndex + 1; // Update the current card index
    showCard(currentCardIndex); // Show the updated flashcard
});

// Show the first flashcard initially
showCard(currentCardIndex);

// Function to flip a flashcard
function flipCard(button) {
    var card = button.parentNode.parentNode; // Select the parent card element
    card.classList.toggle('flipped'); // Toggle the 'flipped' class to flip the card
}

// Function to show the current question in a quiz
function showCurrentQuestion() {
    // Hide all questions
    for (var i = 0; i < questions.length; i++) {
        questions[i].style.display = 'none';
    }

    // Show the current question
    if (currentQuestionIndex < questions.length) {
        questions[currentQuestionIndex].style.display = 'block';
        currentQuestionIndex++;  // Increment the index for the next question
    } else {
        alert('Quiz finished!'); // Alert when the quiz is finished
    }
}
