
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