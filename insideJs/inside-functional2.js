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

// wrapper
function _wrap(object, method, wrapper) {
    var fn = object[method];
    return object[method] = function () {
        return wrapper.apply(this, [ fn ].concat(Array.prototype.slice.call(arguments)));
    };
}
Function.prototype.original = function (val) {
    this.val = val;
    console.log(`value : ${this.val}`);
};
var mywrap = _wrap(Function.prototype, 'original', function(origin_func, val) {
    this.val = 20;
    origin_func(val);
    console.log('wrapper value : ' + this.val);
});
var obj = new mywrap("milly"); // value : milly wrapper value : 20

// iteration functions
// each()
function _each(obj, fn, args) {
    if (obj.length === undefined) {
        for (var i in obj) {
            fn.apply(obj[i], args || [i, obj[i]]);
        }
    } else {
        for (var i = 0; i < obj.length; i++) {
            fn.apply(obj[i], args || [i, obj[i]]);
        }
    }
    return obj;
};
_each([1, 2, 3], function (index, num) {
    console.log(arguments[0] + ' : ' + num);
});
var obje = {
    name : 'Sully',
    age : 10,
    gender : 'girl'
};
_each(obje, (index, value) => 
    console.log(index + ' : ' + value));

// map
Array.prototype._map = function(callback) {
    var array = this;
    var A = new Array(array.length);

    for (var i = 0; i < array.length; i++) {
        A[i] = callback.call(null, array[i]);
    }
    return A;
};

var arr = [1, 2, 3];
var new_arr = arr._map(val => val * val);
console.log(new_arr);

// reduce
Array.prototype._reduce = function (callback, memo) {
    var obj = this;
    var value, accumValue = 0;
    for (var i = 0; i < obj.length; i++) {
        value = obj[i];
        accumValue = callback.call(null, accumValue, value);
    }
    return accumValue;
};
var ar = [1, 2, 3];
var accumulated = ar._reduce((pre, curr) => pre + curr * curr);
console.log(accumulated);
