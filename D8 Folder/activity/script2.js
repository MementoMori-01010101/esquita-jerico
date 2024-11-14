// Task 1: Use arrow functions to calculate the square of a given number and log the result to the console.
const square = (num) => num * num;
let number = 5;

console.log(`The square of ${number} is ${square(number)}`);

// Task 2: Use template literals to create a welcome message that includes the name and age of a person.
const name = "Jane";
const age = 25;

const welcomeMessage = `Welcome, ${name}! You are ${age} years old.`;

console.log(welcomeMessage);

// Task 3: Use destructuring to extract the first and last name from a person object and log them to the console.
const person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 25,
};

const { firstName, lastName } = person;

console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);

// Task 4: Use the spread operator to merge two arrays into a single array.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = [...array1, ...array2];

console.log(mergedArray);

// Task 5: Use default parameters to create a function that calculates the area of a rectangle.
function calculateArea(length = 5, width = 10) {
  return length * width;
}

console.log(calculateArea());
console.log(calculateArea(7, 3));

// Task 6: Create a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("Alice", 28);

person1.introduce();
