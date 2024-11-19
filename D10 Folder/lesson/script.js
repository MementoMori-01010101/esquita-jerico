// Object literal syntax
const circle = {
  // Property
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  // Method
  draw: function () {
    console.log("draw");
  },
};

circle.draw();

// Factory Function
function createCircle(radius) {
  // you can just return the object
  return {
    // when the key and value are the same you can remove the value
    radius,
    // Method
    draw: function () {
      console.log("draw2");
    },
  };
}

const circle2 = createCircle(2);
circle2.draw();

// Constructor Function
// when naming a constructor function the first letter should be uppercase
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw3");
  };
}

const circle3 = new Circle(3);
/* new operator will
(1)create an empty object then it will
(2)set "this" to point to that object and it will
(3)return that object from that function
*/

// Constructor Property
/* 
every object has a constructor property and that references
the function that was used to construct or create that object
 */

// Functions are Objects

// Value vs Reference Types

// Adding/Removing Properties
circle3.location = { x: 1 };
// using bracket notation
circle3["location2"] = { y: 2 };

delete circle3.location;
delete circle3["location2"];

// Enumerating Properties
// it returns both properties and methods
for (let key in circle3) {
  console.log(key);
}

// to get its value
for (let key in circle3) {
  console.log(key, circle3[key]);
}

// to get only the properties
for (let key in circle3) {
  if (typeof circle3[key] !== "function") console.log(key, circle3[key]);
}

// to get all the keys in the circle as array
const keys = Object.keys(circle);
console.log(keys);

// to check if an object has a given property or method
if ("radius" in circle3) console.log("Circle has a radius.");
