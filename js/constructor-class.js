class Rectangle {

    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    set width(input) {
        this._width = input;
    }

    get height() {
        return this._height;
    }

    set height(input) {
        this._height = input;
    }

    getArea() {
        return this._height * this._width;
    }
}

let rect = new Rectangle(20, 20);
console.log(rect.getArea());

class Square extends Rectangle {

    constructor(length) {
        super(length, length);
    }

    set width(input) {
        this._height = input;
        this._width = input;
    }

    set height(input) {
        this._height = input;
        this._width = input;
    }
}

let square = new Square(10);
square.height = 8;
console.log(square.getArea());