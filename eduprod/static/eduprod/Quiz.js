var score = 0; // Initialize the score
var totalMatches = 3; // Total number of matches to be made
var matchesMade = []; // Array to keep track of matches made

// Allow the drop event by preventing the default behavior
function allowDrop(ev) {
    ev.preventDefault();
}

// Set the data to be transferred during drag
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.textContent);
}

// Handle the drop event
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text").toLowerCase().trim(); // Get the dragged data and convert to lowercase
    var word = ev.target.getAttribute("data-word").toLowerCase(); // Get the target word and convert to lowercase
    var messageElement = ev.target.querySelector('.message'); // Get the message element
    var droppedWordElement = ev.target.querySelector('.dropped-word'); // Get the element to display the dropped word

    var index = matchesMade.indexOf(data); // Check if the word has already been matched

    if (index === -1) {
        matchesMade.push(data); // Add the word to matchesMade if it hasn't been matched yet
    }

    if (data === word) { // If the dragged word matches the target word
        ev.target.style.backgroundColor = "#E79482"; // Change background color to indicate correct match
        messageElement.textContent = "Correct!"; // Display a correct message
        if (index === -1) { // Only increment score if it's a new correct match
            score++;
        }
    } else { // If the dragged word does not match the target word
        ev.target.style.backgroundColor = "lightcoral"; // Change background color to indicate incorrect match
        messageElement.textContent = "Try again."; // Display a try again message
    }
    droppedWordElement.textContent = "Dropped word: " + data; // Display the dropped word

    if (matchesMade.length === totalMatches) { // If all matches have been made
        showScoreMessage(); // Show the score message
    }
}

// Reset the game to its initial state
function resetGame() {
    var descriptions = document.querySelectorAll('.description'); // Get all description elements
    descriptions.forEach(function(description) {
        description.style.backgroundColor = ""; // Reset background color
        description.querySelector('.message').textContent = ""; // Reset message text
        description.querySelector('.dropped-word').textContent = ""; // Reset dropped word text
    });

    score = 0; // Reset score
    matchesMade = []; // Reset matches made
}

// Show the score message in an alert
function showScoreMessage() {
    var scoreMessage = "Your score: " + score + " / " + totalMatches; // Create the score message
    alert(scoreMessage); // Display the score message in an alert
}
