console.log("this is a global context");

function ExContext1() {
    console.log("this is ExContext1");
};

function ExContext2() {
    ExContext1();
    console.log("this is ExContext2");
};
ExContext2();

//
function execute(param1, param2) {
    var a = 1, b = 2;
    function func() {
        return a + b;
    };
    return param1 + param2 + func();
}
console.log(execute(3, 3));

// scope chain
var var1 = 1;
var var2 = 2;
function fun() {
    var var1 = 10;
    var var2 = 20;
    console.log(var1); // 10
    console.log(var2); // 10
}
fun();
console.log(var1); // 1
console.log(var2); // 2

//
var value = 'value1';

function printFunc() {
    var value = 'value2';
    function printValue() {
        return value;
    }
    console.log(printValue());
}
printFunc(); // value2

//
var val = 'val1';

function printVal() {
    return val;
}
function printFuns(func) {
    var val = 'val2';
    console.log(func());
}
printFuns(printVal); // val1

// hoisting
bar();
// foo(); // TypeError
var foo = function () {
    console.log(x);
}
function bar() {
    console.log(x);
}
var x = 1; // undefined