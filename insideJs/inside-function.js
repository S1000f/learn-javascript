
// function statement
function add(x ,y) { // will be converted to 'var add  = function add(x, y) {}'
    return x + y;
}
console.log(add(3, 4));

// function expression
var plus = function (x, y) {
    return x + y;
};
var adder = plus;
console.log(plus(1, 2));
console.log(adder(1, 2));

// named function expression
var adding = function sum(x, y) {
    return x + y;
};
console.log(adding(2, 3));
// console.log(sum(2, 3)); // ReferenceError

// recursion by using a named function expression
var factorialVar = function facto(n) {
    if (n <= 1) {
        return 1;
    }
    return n * facto(n - 1);
};
console.log(factorialVar(5));

// Function() : hardly use
var unusual = new Function('x', 'y', 'return x + y');
console.log(unusual(4, 5));

// function hoisting
console.log(notYet(3, 3)); // 6

function notYet(x, y) {
    return x + y;
}
console.log(notYet(3, 3));

// console.log(notHoisted(2, 2)); // TypeError, cause the function is not hoisted
var notHoisted = (x, y) => {
    return x + y;
};
console.log(notHoisted(2, 2));

// function is also a object
var foo = function (x, y) {
    return x + y;
};
foo.result = foo(2, 3);
foo.status = 'OK';
console.log(foo.result, foo.status); // 5 OK
console.dir(foo);

// function.length property
function zero() {}
function one(x) {}
function three(x,y,z) {}
console.log(zero.length, one.length, three.length); // 0 1 3

// prototype property
function myFunc() {
    return true;
}
console.dir(myFunc.prototype);
console.dir(myFunc.prototype.constructor);

// inner function
function parent() {
    var a = 100;
    var b = 200;

    function child() {
        var b = 300;
        console.log(a);
        console.log(b);
    }
    child();
}
parent();
// child(); // ReferenceError
