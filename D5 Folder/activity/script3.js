let secretNumber = Math.floor(Math.random() * 10 + 1);
let attempts = 0;
let guessedNumber = 0;

console.log("Welcome Player!");
console.log(secretNumber);

do {
  guessedNumber = parseInt(prompt("Guess a number between 1-10"));
  if (guessedNumber < secretNumber) {
    console.log("Too low! Try again.");
  } else if (guessedNumber > secretNumber) {
    console.log("Too high! Try again.");
  } else {
    console.log(
      "Congratulations! You guessed the correct number: " + secretNumber
    );
  }
  attempts++;
} while (guessedNumber !== secretNumber);

alert("It took you " + attempts + " attempt/s.");
