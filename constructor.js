function Student(name, kor, math, eng) {
    this.name = name;
    this.kor = kor;
    this.math = math;
    this.eng = eng;

    this.getSum = function () {
        return this.kor + this.math + this.eng;
    };

    this.getAvg = function () {
        return this.getSum() / 4;
    };

    this.toString = function () {
        return `${this.name}\t${this.getSum()}\t${this.getAvg()}`;
    };
}

var students = [];
students.push(new Student('milly', 78, 97, 88));
students.push(new Student('sully', 89, 78, 98));

for (var e of students) {
    console.log(e.toString());
    console.log(e instanceof Student);
}

// using prototype
function Student2(name, kor, math, eng) {
    this.name = name;
    this.kor = kor;
    this.math = math;
    this.eng = eng;
}
Student2.prototype.getSum = function () {
    return this.kor + this.math + this.eng;
};
Student2.prototype.getAvg = function () {
    return this.getSum() / 4;
}
Student2.prototype.toString = function () {
    return `${this.name}\t${this.getSum()}\t${this.getAvg()}`;
}

var yeon = new Student2('yeon', 77, 58, 67);
console.log(yeon.toString());


// encapsulation
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}
Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};

var rectangle = new Rectangle(4, -6);
console.log(`area is : ${rectangle.getArea()}`);

function RectangleEncaps(w, h) {
    var width = w;
    var height = h;

    this.getWidth = function () { return width };
    this.getHeight = function () { return height };
    this.setWidth = function (w) {
        if (w < 0) {
            throw 'width must be a positive number'
        } else {
            width = w;
        }
    };
    this.setHeight = function (h) {
        if (h < 0) {
            throw 'height must be a positive number'
        } else {
            height = h;
        }
    };
}
RectangleEncaps.prototype.getArea = function () {
    return this.getWidth() * this.getHeight();
}

var rec2 = new RectangleEncaps();
rec2.setHeight(9);
rec2.setWidth(4);
console.log(rec2.getArea());

// inherit
function Square(length) {
    this.base = RectangleEncaps;
    this.base(length, length);
}
Square.prototype = RectangleEncaps.prototype;
Square.prototype.constructor = Square;

var square = new Square(5);
console.log(square.getArea());
console.log(square instanceof RectangleEncaps);
