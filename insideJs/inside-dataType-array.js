var colorarr = ['coral', 'dodgerblue', 'tomato'];
for (var i = 0; i < colorarr.length; i++) {
    console.log(colorarr[i]);
}

var emptyarr = [];
console.log(emptyarr[0]); // undefined

emptyarr[0] = 100;
emptyarr[3] = 'eight';
emptyarr[7] = true;
console.log(emptyarr); // 100, undefined x 2, "eight", undefined x 3, true
console.log(emptyarr.length); // 8

var arr = [];
console.log(arr.length); // 0
arr[0] = 0;
console.log(arr.length); // 1
arr[100] = 100;
console.log(arr.length); // 101

var ar = [0, 1, 2];
ar.length = 5;
console.log(ar); // 0, 1, 2, undefined x 2
ar[4] = 4;
console.log(ar); // 0, 1, 2, undefined, 4
ar.length = 2;
console.log(ar); // 0, 1
console.log(ar[2]); // undefined

var zero = ['zero', 'one', 'two'];
zero.push('three');
console.log(zero); // zero one two three
zero.length = 5;
zero.push('four');
console.log(zero); // zero one two three undefined four // not 'zero one two three four'

var colorsArray = ['coral', 'tomato', 'dodgerblue'];
var colorObj = {
    '0': 'coral',
    '1': 'tomato',
    '2': 'dodgerblue'
};
for (var i = 0; i < colorsArray.length; i++) {
    console.log(colorsArray[i] + ' : ' + colorObj[i]);
}
console.log(colorObj['2']); // dodgerblue
console.log(colorObj[2]); // dodgerblue

console.log(typeof colorsArray); // object
console.log(typeof colorObj); // object

console.log(colorObj.length); // undefined
//colorObj.push('red'); // TypeError:

var emptyArr = [];
var emptyObj = {};

console.log(emptyArr.__proto__);
console.log(emptyObj.__proto__);

// 3.5.5 to add something to the array as its property not as elemnets
var arr = [3, 4, 5];
arr.color = 'tomato';
arr.numbers = 33;
console.log(arr.length); // 3 // not '5'
arr.push(7);
console.log(arr.length); // 4
console.dir(arr);

// 3.5.6 iterating array
for (var prop in arr) {
    console.log(prop, arr[prop]); 
}
for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
}

// 3.5.7 to delete elements from the array
var arr = [1, 2, 3];
delete arr[1];
console.log(arr.length); // 3 // not a '2'
console.log(arr); // 1 undefined 3 // not a '1 3'

var arr = [1, 2, 3];
arr.splice(1, 1);
console.log(arr.length); // 2
console.log(arr); // 1 3

// 3.5.8 Array()
var foo = new Array(3);
console.log(foo); // undefined x 3
console.log(foo.length); // 3

// 3.5.9 array-like object
var obj = {
    name: 'foo',
    length: 1
};
Array.prototype.push.apply(obj, ['baz']);
console.log(obj);

// primitive type and standard mehod
var num = 0.5;
console.log(num.toExponential(1));
console.log("test".charAt(2));