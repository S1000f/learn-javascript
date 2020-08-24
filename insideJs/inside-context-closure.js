function outerFunc() {
    var x = 10;
    var innerFunc = function () {
        console.log(x);
    };
    return innerFunc;
}
var inner = outerFunc();
inner(); // 10

//
function outer(arg1, arg2) {
    var local = 8;
    function inners(innerArg) {
        console.log((arg1 + arg2) / (innerArg + local));
    }
    return inners;
}
var exam1 = outer(2, 4);
exam1(2); // 0.6

// usage of closure 1;
function HelloFunc() {
    this.greeting = 'hello';
}
HelloFunc.prototype.call = function () {
    this.func(this.greeting);
}
var objHello = new HelloFunc();
objHello.func = function (greeting) {
    console.log(greeting + '~');
}
objHello.call(); // hello~

function getClosure(obj, methodName, name) {
    // free variables
    var object = obj;
    var mn = methodName;
    var n = name;
    // return closure
    return (function (greeting) {
        object[mn](greeting, n);
    });
}
// by creating additional constructor and prototype object
function NewObj(obj, methodName, name) {
    obj.func = getClosure(this, methodName, name);
    return obj;
}
NewObj.prototype.who = function (greeting, name) {
    console.log(greeting + ' ' + (name || "everyone"));
}
var obj1 = new NewObj(objHello, "who", "milly!");
obj1.call();

// by adding a new method to original prototype object
HelloFunc.prototype.who = function (greeting, name) {
    console.log(greeting + ' ' + (name || "everyone"));
};
objHello.func = getClosure(objHello, "who", "sully");
objHello.call();

// usage of closure 2;
var str = (function () {
    var buffer = [
        'I am ',
        '',
        '. I live in ',
        '',
        '. I\'m ',
        '',
        ' years old.',
    ];
    return (function (name, city, age) {
        buffer[1] = name;
        buffer[3] = city;
        buffer[5] = age;
        return buffer.join('');
    });
})();
var resultStr = str('milly', 'Daegu', 9);
console.log(resultStr);

// usage of closure 3;
function callLater(obj, a, b) {
    return (function () {
        obj['sum'] = a + b;
        console.log(obj['sum']);
    });
}
var sumObj = {
    sum: 0
}
var call = callLater(sumObj, 1, 2);
setTimeout(call, 500);

// caution
function outer(argNum) {
    var num = argNum;
    return function (x) {
        num += x;
        console.log('num: ' + num);
    }
}
var exam = outer(40);
exam(5); // 45
exam(-10); // 35

//
function double() {
    var x = 1;
    return {
        fun1: function () { console.log(++x) },
        fun2: function () { console.log(++x) }
    };
}
var d = double();
d.fun1(); // 2
d.fun2(); // 3

//
function count(times) {
    for (var i = 1; i <= times; i++) {
        (function (current) {
            setTimeout(function () {
                console.log('i -> ' + current);
            }, current * 1000);
        })(i);
    }
}
count(3);