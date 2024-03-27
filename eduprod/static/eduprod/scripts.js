document.addEventListener("DOMContentLoaded", function() {
    let currentQuestionIndex = 0;
    const questions = JSON.parse(document.getElementById('content').getAttribute('data-questions'));
    const content = document.getElementById('content');
    const btn = document.getElementById('revealBtn');

    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const question = questions[currentQuestionIndex].fields.question_text;
            const answer = questions[currentQuestionIndex].fields.answer_text;
            content.innerHTML = `<div class='question'>Question: ${question}</div><div class='answer' style='display: none;'>Answer: ${answer}</div>`;
            btn.textContent = "Reveal Answer";
        } else {
            content.innerHTML = "No more questions.";
            btn.style.display = "none";
        }
    }
s
    displayQuestion();

    btn.addEventListener("click", function() {
        const answerElement = content.querySelector('.answer');
        if (btn.textContent === "Reveal Answer") {
            answerElement.style.display = "block";
            btn.textContent = "Next Question";
        } else {
            currentQuestionIndex++;
            displayQuestion();
        }
    });
});
   

    function  showCard(index) {
        flashcards.forEach(card => card.classList.remove('active'));
        flashcards[index].classList.add('active');
    }

    document.getElementById('prevBtn').addEventListener('click', function() {
        currentCardIndex = (currentCardIndex === 0) ? flashcards.length - 1 : currentCardIndex - 1;
        showCard(currentCardIndex);
    });

    document.getElementById('nextBtn').addEventListener('click', function() {
        currentCardIndex = (currentCardIndex === flashcards.length - 1) ? 0 : currentCardIndex + 1;
        showCard(currentCardIndex);
    });

    // Show the first card initially
    showCard(currentCardIndex);

    function flipCard(button) {
        var card = button.parentNode.parentNode;
        card.classList.toggle('flipped');
   
     
    }
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
        alert('Quiz finished!');
    }
}

