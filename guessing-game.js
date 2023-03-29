var numberToGuess = Math.floor(Math.random() * 1000);

var guessInput = document.getElementById("guessInput");
var guessButton = document.getElementById("guessButton");

guessButton.addEventListener("click", function () {
  var guess = parseInt(guessInput.value);
  if (guess > 10) {
    alert("Please enter a number between 0 and 10!");
  } else {
    if (guess === numberToGuess) {
      alert("Congratulations. You guessed the number!");
      //numberToGuess = Math.floor(Math.random() * 1000);
    } else if (guess > numberToGuess) {
      alert("Too high. Try again.");
      guessInput.value = "";
    } else {
      alert("Too low. Try again.");
      guessInput.value = "";
    }
  }
});
