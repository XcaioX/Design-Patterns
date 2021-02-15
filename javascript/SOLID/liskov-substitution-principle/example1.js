class Shape {
  area() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }
}

class Square extends Shape {
  constructor(width) {
    super();
    this.width = width;
    this.height = width;
  }

  setWidth(width) {
    this.width = width;
    this.height = height;
  }

  setHeight(height) {
    this.height = height;
    this.width = width;
  }
}

const rect = new Rectangle(2, 5);
const square = new Square(2);

console.log(rect.area());
console.log(square.area());
