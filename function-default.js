function dft(a, b, c) {
    if (!b) {
        b = 54;
    }
    if (!c) {
        c = 233;
    }

    console.log(`a = ${a}, b = ${b}, c = ${c}`);
}

dft(1, 3);

// using Short Condition
function dft2(a, b, c) {
    b = b || 54;
    c = c || 233;
    console.log(`a = ${a}, b = ${b}, c = ${c}`);
}

dft2(2, 4);

// ES6 default parameter
function es6(a, b = 54, c = 233) {
    console.log(`a = ${a}, b = ${b}, c = ${c}`);
}

es6(3, 7);