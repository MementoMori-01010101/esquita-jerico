// Calculate the square root of a given number
let number = 10;
let squareRoot = Math.sqrt(number);
console.log(`The square root of ${number} is ${squareRoot}`);

// Generate a random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(`Random number between 1 and 10: ${randomNumber}`);

// Convert a string representation of a number to an actual number
let str = "20";
let num = parseInt(str, 10);
console.log(num);

// Check if a value is not a number
let value = "Hello";
if (isNaN(value)) {
  console.log("The value is not a number.");
} else {
  console.log("The value is a number.");
}

// Convert a number to a string
let num2 = 20;
let str2 = num2.toString();
console.log(str2);
