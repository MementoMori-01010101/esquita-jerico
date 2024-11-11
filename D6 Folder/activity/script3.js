// Step 1: Declare a function named isEven that takes a number as a parameter and returns true if the number is even and false otherwise.
const isEven = function (number) {
  return number % 2 === 0;
};

// Step 2: Use a for loop to iterate from 0 to 10. Call the isEven function for each iteration and log the result to the console.
for (let i = 0; i <= 10; i++) {
  console.log(`Is ${i} even? ${isEven(i)}`);
}

// Step 3: Declare a function named multiply that takes two numbers as parameters and returns their product.
const multiply = function (a, b) {
  return a * b;
};

// Step 4: Use a while loop to repeatedly prompt the user to enter two numbers and calculate their product using the multiply function. Log the result to the console. Terminate the loop when the user enters a negative number as any of the inputs.
let num1, num2;

while (true) {
  // Prompt the user for two numbers
  num1 = parseFloat(prompt("Enter the first number:"));
  num2 = parseFloat(prompt("Enter the second number:"));

  // If either number is negative, terminate the loop
  if (num1 < 0 || num2 < 0) {
    console.log("Exiting the loop. You entered a negative number.");
    break;
  }

  // Calculate the product and log the result
  const product = multiply(num1, num2);
  console.log(`The product of ${num1} and ${num2} is: ${product}`);
}

// Step 5: Declare a function named reverseString that takes a string as a parameter and returns the reversed version of the string.
const reversedString = function (str) {
  return str.split("").reverse().join("");
};

// Step 6: Call the reverseString function with the string 'hello' and log the result to the console.
console.log(reversedString("hello"));

// Step 7: Declare a function named countVowels that takes a string as a parameter and returns the number of vowels in the string.
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  // Loop through the string and count the vowels
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }

  return count;
}

// Step 8: Call the countVowels function with the string 'JavaScript' and log the result to the console.
console.log(countVowels("Javascript"));

// Step 9: Declare a function named findMax that takes an array of numbers as a parameter and returns the maximum value in the array.
function findMax(arr) {
  return Math.max(...arr);
}

// Step 10: Call the findMax function with the array [4, 9, 2, 7, 5] and log the result to the console.
console.log(findMax([4, 9, 2, 7, 5]));

// Step 11: Declare a function named calculateFactorial that takes a number as a parameter and returns its factorial value.
function calculateFactorial(num) {
  if (num < 0) {
    return "Factorial is not defined for negative numbers";
  }
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

// Step 12: Call the calculateFactorial function with the number 5 and log the result to the console.
console.log(calculateFactorial(5));

// Step 13: Declare a function named isPalindrome that takes a string as a parameter and returns true if the string is a palindrome and false otherwise.
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase for case-insensitive comparison
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  // Reverse the cleaned string
  const reversedStr = cleanedStr.split("").reverse().join("");

  // Compare the original cleaned string with the reversed string
  return cleanedStr === reversedStr;
}

// Step 14: Call the isPalindrome function with the string 'level' and log the result to the console.
console.log(isPalindrome("level"));

// Step 15: Declare a function named sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.
function sumArray(arr) {
  let sum = 0;

  // Loop through the array and add each number to the sum
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// Step 16: Call the sumArray function with the array [1, 2, 3, 4, 5] and log the result to the console.
console.log(sumArray[(1, 2, 3, 4, 5)]);

// Step 17: Declare a function named capitalizeFirstLetter that takes a string as a parameter and returns the string with the first letter capitalized.
function capitalizeFirstLetter(str) {
  if (str.length === 0) return str; // Handle the case where the string is empty
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Step 18: Call the capitalizeFirstLetter function with the string 'javascript' and log the result to the console.
console.log(capitalizeFirstLetter("javascript"));

// Step 19: Declare a function named filterEvenNumbers that takes an array of numbers as a parameter and returns a new array with only the even numbers.
function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// Step 20: Call the filterEvenNumbers function with the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and log the result to the console.
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
