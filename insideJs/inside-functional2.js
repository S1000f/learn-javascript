// currying
function calculate(a, b, c) {
    return a * b + c;
}
function currying(callback) {
    // args is an array contains arguments inputted while the currying function is called
    var argsArr = Array.prototype.slice.call(arguments, 1);
    return function () {
        // concatenate a new array contains arguments inputted while this closure is called with former array which is free variable
        return callback.apply(null, argsArr.concat(Array.prototype.slice.call(arguments)));
    }
}
var new_func1 = currying(calculate, 1);
console.log(new_func1(2, 3)); // 5
var new_func2 = currying(calculate, 1, 3);
console.log(new_func2(3)); // 6

// bind() simple implement
Function.prototype._bind = function (thisArg) {
    var fn = this;
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
        return fn.apply(thisArg, args.concat(Array.prototype.slice.call(arguments)));
    };
};

// bind() ES5
var print_all = function (args) {
    for (var i in this) {
        console.log(`${i} : ${this[i]} (this)`);
    }
    for (var i in arguments) {
        console.log(`${i} : ${arguments[i]} (arguments)`);
    }
};
var myobj = {
    name: "milly"
};
var myfunc = print_all.bind(myobj);
myfunc(); // name : milly

var myfunc1 = print_all.bind(myobj, "iamwho", "others");
myfunc1('insideJs'); // name : milly 0 : iamwho 1 : others 2 : insideJs

//
function Person(arg) {
    if (this.name === undefined) {
        this.name = arg ? arg : "sully";
    }
    console.log("name : " + this.name);
}
Person.prototype.setName = function (val) {
    this.name = val;
};
Person.prototype.getName = function () {
    return this.name;
};
var mobj = {
    name: 'milly the cat'
};
var newFunc = Person.bind(mobj);
newFunc(); // name : milly the cat
var ob = new newFunc(); // name : sully
console.log(ob.getName()); // sully

