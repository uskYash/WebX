// main.ts
// Class representing a Circle
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    // Public method to calculate the area of the circle
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
// Create a circle instance
var myCircle = new Circle(5);
// Calculate and display the area of the circle
console.log("Area of the circle: ".concat(myCircle.calculateArea()));
