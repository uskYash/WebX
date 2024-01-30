interface Shape {
    calculateArea(): number;
}

class Circle implements Shape {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const myCircle: Shape = new Circle(5);

console.log(`Area of the circle: ${myCircle.calculateArea()}`);