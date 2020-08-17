
function returnFunc() {
    return function () {
        console.log("returned from ...");
    };
}

returnFunc()();

function test(name) {
    var output = `Hello, ${name}..!!`;
    return function () {
        console.log(output);
    };
}

test("Milly")();

function test2(name) {
    var out = `Hi ${name}~`;
    return function () {
        console.log(out);
    };
}

var test_1 = test2("Web");
var test_2 = test2("JavaScript");
test_1();
test_2();

// why outputs are 3 3 3?
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}

// solve1: ES6 let Keyword
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}

// solve2: apply Closure
for (var i = 0; i < 3; i++) {
    (function (closed_i) {
        setTimeout(() => console.log(closed_i), 0);
    })(i);
}