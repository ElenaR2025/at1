var score = 0;
var totalMatches = 3;
var matchesMade = [];

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.textContent);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text").toLowerCase().trim(); // Convert to lowercase for comparison
    var word = ev.target.getAttribute("data-word").toLowerCase(); // Convert to lowercase for comparison
    var messageElement = ev.target.querySelector('.message');
    var droppedWordElement = ev.target.querySelector('.dropped-word');

    var index = matchesMade.indexOf(data);
   
    if (index === -1) {
        matchesMade.push(data);
    }
   
    if (data === word) {
        ev.target.style.backgroundColor = "#E79482";
        messageElement.textContent = "Correct!";
        if (index === -1) { // Only increment score if it's a new correct match
            score++;
        }
    } else {
        ev.target.style.backgroundColor = "lightcoral";
        messageElement.textContent = "Try again.";
    }
    droppedWordElement.textContent = "Dropped word: " + data;

    if (matchesMade.length === totalMatches) {
        showScoreMessage();
    }
}

function resetGame() {
    var descriptions = document.querySelectorAll('.description');
    descriptions.forEach(function(description) {
        description.style.backgroundColor = "";
        description.querySelector('.message').textContent = "";
        description.querySelector('.dropped-word').textContent = "";
    });

    score = 0;
    matchesMade = [];
}

function showScoreMessage() {
    var scoreMessage = "Your score: " + score + " / " + totalMatches;
    alert(scoreMessage);
}
