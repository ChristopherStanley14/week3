// Create a variable to hold the answer.
var answer;

// Set up the game.
function setupGame() {
    // Clear out old values.
    $("#tbxGuess").val("");
    $("#message").val("");

    // Come up with the answer.
    answer = parseInt(Math.random() * 10);
    console.log("Cheater! Don't you dare enter " + answer);

    // Hide and show the appropriate divs.
    $("#intro").show();
    $("#game").hide();
}

// Handle the guess
function handleGuess() {
    var guess = $("#tbxGuess").val();
    if (+guess == answer) {
        // Tell them the answer is right.
        $("#message").text("You're right!");
    }
    else {
        // Tell them the answer is wrong.
        $("#message").text("Nope, try again!");
    }
}

// Set up the page for the game.
function playGame() {
    $("#intro").hide();
    $("#game").show();
}

// When the page loads, setup the game.
$(function() {
    // Wire up event handlers.
    $("#startGame").on("click", playGame);
    $("#btnGuess").on("click", handleGuess);
    // Start the game.
    setupGame();
});