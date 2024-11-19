/* // Abstraction
function Circle(radius) {
  this.radius = radius;
  this.defaultLocation = { x: 0, y: 0 };
  this.computeOptimumLocation = function () {
    // ...
  };

  this.draw = function () {
    this.computeOptimumLocation();
    console.log("draw");
  };
}

const circle = new Circle(10);
circle.draw;

// Private Properties and Methods
function Circle2(radius) {
  this.radius = radius;

  // instead of a property make it a local variable
  let defaultLocation = { x: 0, y: 0 };

  // instead of a method make it a local variable
  let computeOptimumLocation = function (factor) {
    // ...
  };

  this.draw = function () {
    computeOptimumLocation(0, 1);
    console.log("draw");
  };
}

const circle2 = new Circle2(10);
circle2.draw; */

// Getters/Setters
function Circle3(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    console.log("draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      defaultLocation = value;
    },
  });
}

const circle3 = new Circle3(10);
circle3.getDefaultLocation();
circle3.draw();
