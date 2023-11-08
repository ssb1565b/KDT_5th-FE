// Shape
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

// Rectangle
class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
}

// Triangle
class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    // over-riding
    return (this.width * this.height) / 2;
  }
}

// Circle
class Circle extends Shape {
  constructor(radius) {
    super();
    // 부모의 값을 받아오지않아도 super를 빈값으로 넣기
    this.radius = radius;
  }
  getArea() {
    return this.radius ** 2 * 3.14;
  }
}

const shape = new Shape(10, 10);
const rectangle = new Rectangle(10, 10);
const triangle = new Triangle(10, 10);
const circleWidth = new Circle(3);

console.log(shape.getArea());
console.log(rectangle.getArea());
console.log(triangle.getArea());
console.log(circleWidth.getArea());
