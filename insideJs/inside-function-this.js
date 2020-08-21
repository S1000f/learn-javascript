
function a(arg1, arg2) {
    console.log(arg1, arg2);
}
a(); // undefined undefined
a(1); // 1 undefined
a(1, 2); // 1 2
a(1, 2, 3); // 1 2

// to see arguments object
function add(a, b) {
    console.dir(arguments);
    return a + b;
}
console.log(add(1)); // NaN
console.log(add(1, 2)); // 3
console.log(add(1, 2, 3)); // 3

function sum() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

// this binding
// 1. this in calling method
var myObje = {
    name: 'foo',
    say: function () {
        console.log(this.name);
    }
};
var otherObje = {
    name: 'bar'
};
otherObje.say = myObje.say;

myObje.say();
otherObje.say();

// 2. this in calling functions
// global object
var foo = "foobar";
console.log(foo); // foobar
console.log(window.foo); // foobar

//
var test = 'this is a test';
console.log(window.test); // this is a test

var sayFoo = function () {
    console.log(this.test);
};
sayFoo(); // this is a test

// 3. this binding in an inner function
var value = 100;

var obje = {
    value: 1,
    func1: function () {
        this.value += 1;
        console.log('func1 called. this.value : ' + this.value);
        func2 = function () {
            this.value += 1;
            console.log('func2 called. this.value : ' + this.value);
            func3 = function () {
                this.value += 1;
                console.log('func3 called. this.value : ' + this.value);
            };
            func3();
        };
        func2();
    }
};
obje.func1();

var objeThat = {
    one: 1,
    func1: function () {
        var that = this;
        this.one += 1;
        console.log('func1 called. this.one : ' + this.one);
        func2 = function () {
            that.one += 1;
            console.log('func2 called. this.one : ' + that.one);
            func3 = function () {
                that.one += 1;
                console.log('func3 called. this.one : ' + that.one);
            };
            func3();
        };
        func2();
    }
};
objeThat.func1();

// 4. constructor and this binding
var Person = function (name) {
    this.name = name;
    // function return
};
Person.prototype.sayhello = function () {
    console.log('hello, i am ' + this.name);
}

var foo = new Person('foo');
console.log(foo.name); // foo
foo.sayhello();
console.dir(foo);

// compare a literal way and a constructor
var foo = {
    name: 'foo',
    age: 20
};
console.dir(foo);

function Foo(name, age) {
    this.name = name;
    this.age = age;
}
var bar = new Foo('bar', 23);
console.dir(bar);
var baz = new Foo('baz', 26);
console.dir(baz);

// call a constructor function without new Keyword
var qux = Foo('qux', 16);
console.log(qux); // undefined
console.log(window.name, window.age); // qux 16

// forced-instantiation pattern
function A(arg) {
    if (!(this instanceof A)) {
        return new A(arg);
    }
    this.aaa = arg ? arg : 0;
}
var a = new A(100);
var b = A(10);

console.log(a.aaa); // 100
console.log(b.aaa); // 10
console.log(window.aaa); // undefined - global object(in this case, window)is safe

// call() and apply() to bind this object
function People(name, age) {
    this.name = name;
    this.age = age;
}
var foo = {};
People.apply(foo, ['foo', 342]);
console.log(foo);

//
function mafu() {
    console.log(arguments);
    // arguments.shift(); // Error
    var args = Array.prototype.slice.apply(arguments);
    console.dir(args);
}
mafu(1, 2, 3);

// function's return cases
var noReturnStatement = function () {
    console.log('this function has no return statement.');
};
var result = noReturnStatement();
console.log(result); // undefined

function ReturnSomethingElse(name, age) {
    this.name = name;
    this.age = age;
    return { name: 'else', age: 133 };
}
var forced = new ReturnSomethingElse('any', 33);
console.log(forced); // name: else, age: 133

function ReturnWillBeIgnored(name, gender) {
    this.name = name;
    this.gender = gender;
    return 200;
}
var ignore = new ReturnWillBeIgnored('Milly', 'girl');
console.log(ignore); // name: Milly, gender: girl
