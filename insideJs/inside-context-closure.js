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

//
function HelloFunc() {
    this.greeting = 'hello';
}
HelloFunc.prototype.call = function(func) {
    func ? func(this.greeting) : this.func(this.greeting);
}

var userFunc = function (greeting) {
    console.log(greeting + '~');
}

var objHello = new HelloFunc();
objHello.func = userFunc;
objHello.call(); // hello~
objHello.call(function (arg) {
    console.log(arg + '!!!');
}); // hello!!!

function saySomething(obj, method, name) {
    return (function (greeting) {
        return obj[method](greeting, name);
    });
}
function NewObj(obj, name) {
    obj.func = saySomething(this, "who", name);
    return obj;
}
NewObj.prototype.who = function (greeting, name) {
    console.log(greeting + ' ' + (name || "everyone"));
}

var obj1 = new NewObj(objHello, "milly");
obj1.call();
