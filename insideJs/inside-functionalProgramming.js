// ex1; sum all elements from a certain array

// imperative programmings
function sum(arr) {
    var len = arr.length;
    var i = 0;
    var sum = 0;

    for (; i < len; i++) {
        sum += arr[i];
    }
    return sum;
}
var arr = [1, 2, 3, 4, 5];
console.log(sum(arr));

// functional programmings
function reduce(callback, arr, memo) {
    var len = arr.length,
        i = 0,
        accum = memo;

    for (; i < len; i++) {
        accum = callback(accum, arr[i]);
    }
    return accum;
}
var sum = function (x, y) {
    return x + y;
};
var multiply = function (x, y) {
    return x * y;
}
console.log(reduce(sum, arr, 0));
console.log(reduce(multiply, arr, 1));

// ex2; factorial
// imperative
function facto(num) {
    if (num === 0) {
        return 1;
    }
    return num * facto(num - 1);
}
console.log(facto(3));

// functional - memoization
var fact = function () {
    var cache = {
        '0' : 1
    };
    var facto = function (num) {
        var result = 0;

        if (typeof(cache[num]) === 'number') {
            result = cache[num];
        } else {
            result = cache[num] = num * facto(num - 1);
        }
        return result;
    };
    return facto;
}();
console.log(fact(10));

// memoization 2
function calculate(key, input, callback) {
    calculate.data = calculate.data || {};
    if (! calculate.data[key]) {
        var result;
        result = callback(input);
        calculate.data[key] = result;
    }
    return calculate.data[key];
}
var result = calculate(1, 5, function (input) {
    return input * input;
});
console.log(result); // 25
result = calculate(2, 5, function (input) {
    return input * input / 4;
});
console.log(result); // 6.25
console.log(calculate(1)); // 25
console.log(calculate(2)); // 6.25

// ex3; fibonacci seq
var fibo = function () {
    var cache = {
        '0' : 0,
        '1' : 1
    };
    var fibonacci = function (n) {
        if (typeof(cache[n]) === 'number') {
            result = cache[n];
        } else {
            result = cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
        }
        return result;
    };
    return fibonacci;
}();
console.log(fibo(3)); // 2

