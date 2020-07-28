function test(options) {
    options.valueA = options.valueA || 10;
    options.valueB = options.valueB || 20;
    options.valueC = options.valueC || 30;

    console.log(`${options.valueA} : ${options.valueB} : ${options.valueC}`);
}

test({
    valueA: 54,
    valueB: 333
});

var origin = 10;
var copy = origin;

origin = 1343;
console.log(origin, copy);

// shallow copy
var originArr = [1, 2, 3];
var copyArr = originArr;

originArr[0] = 245;
console.log(originArr);
console.log(copyArr);

// deep copy for Object
function clone(obj) {
    var out = {};
    for (var i in obj) {
        out[i] = obj[i];
    }
    return out;
}

var original = { a: 10, b: 20 };
var shallow = original;
var deep = clone(original);

original.a = 300;

console.log(JSON.stringify(shallow, null, 2));
console.log(JSON.stringify(deep, null, 2));

// copy array -ES5
var arr = [1, 2, 3];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
}

// copy array -ES6
const oarr = [4, 5, 6];
const carr = [...oarr];

oarr[0] = 44;
console.log(oarr);
console.log(carr);

// merge arrays -ES6
const marr = [...arr, ...oarr];
console.log(marr);

const newArray = [1, 3, 5, ...arr];
console.log(newArray);

