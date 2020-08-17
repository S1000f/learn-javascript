// Object
var obj = { property: 544 };
var output = '';
output += `HOP('property'): ${obj.hasOwnProperty('property')}\n`;
output += `HOP('constructor'): ${obj.hasOwnProperty('constructor')}\n`;
output += `PIE('property'): ${obj.propertyIsEnumerable('property')}\n`;
output += `PIE('constructor'): ${obj.propertyIsEnumerable('constructor')}\n`;
console.log(output)

for (var key in obj) {
    console.log(obj[key]);
}

var object = new Object();
console.log(object);
console.log(object.toString());

// checking types by using typeof
var numLiteral = 544;
var numObj = new Number(544);
console.log(`numLiteral: ${typeof numLiteral}\nnumObj: ${typeof numObj}`);

// checking types with constructor()
var checkTypeNumber = function (some) {
    return some.constructor == Number ? true : false;
}
console.log(checkTypeNumber(numLiteral));
console.log(checkTypeNumber(numObj));

// add property or method to Object's prototype
Object.prototype.test = function () {
    console.log(this);
};
var nums = 445;
nums.test();

// Number
var number = 544.5546;
var output = '';
output += number.toFixed(1) +'\n';
output += number.toFixed(3);
console.log(output);

var fixed = (43.2324).toFixed(2);
console.log(fixed);
//
var a = Number.MAX_VALUE + 1;
console.log(a);

var addNum = Number('0.0000000000000001e+308');
var a = Number.MAX_VALUE + addNum;
console.log(a);

// String
var stringFromLiteral = 'Hello world';
var string = new String('Hello');
console.log(`${typeof stringFromLiteral}, ${typeof string}`);

// String property --length
if (string.length > 6) {
    console.log('more than 6 characters');
} else {
    console.log('less than 6 characters');
}

// String method
string.toUpperCase(); // wrong way
console.log(string.toString());
// 스트링 객체의 메서드는 자기자신을 변화시키지 않고 리턴한다. 따라서 문자열에 조작된 결과물은 리턴값을 이용
string = string.toUpperCase();
console.log(string.toString());

string = string.toLowerCase().substring(0, 3).anchor('name');
console.log(string.toString());

// String HTML methods
var string = 'JavaScript';
var output = '';
output += `anchor: ${string.anchor()}<br />`;
output += `big: ${string.big()}<br />`;
output += `fontcolor: ${string.fontcolor('dodgerblue')}`

document.write(output);

// Array

var arr1 = [1, 2, 3];
var arr2 = new Array();
var arr3 = new Array(3);
var arr4 = new Array(1, 2, 3);

var output = '';
for (var i = 0; i < arr1.length; i++) {
    output += `${i} th : ${arr1[i]}\n`;
}
console.log(output);

// Array methods
var arrtest = [234, 45, 105, 55];
arrtest.sort();
console.log(arrtest);

arrtest.sort((left, right) => {
    return left - right;
});
console.log(arrtest);

// delete elements from an array
Array.prototype.remove = function (index) {
    this.splice(index, 1);
}

var aaa = [54, 235, 145, 32, 211, 655];

// wrong way
for (var i = 0; i < aaa.length; i++) {
    if (aaa[i] > 100) {
        aaa.remove(i);
    }
}
console.log(aaa);

// 역 for문을 사용하여, 배열의 길이가 변해도 인덱스에 영향이 없도록 함
aaa = [54, 235, 145, 32, 211, 655];
for (var i = aaa.length - 1; i >= 0; i--) {
    if (aaa[i] > 100) {
        aaa.remove(i);
    }
}
console.log(aaa);

// Date
var date = new Date();
console.log(date)

var date = new Date('December 9, 1994 02:54:32');
var date = new Date(2077, 11, 23, 13, 34, 54);
console.log(date);

// a week later from today
var date = new Date();
date.setDate(date.getDate() + 7);
console.log(date);

var now = new Date();
var before = new Date(1986, 3, 3);

var interval = now.getTime() - before.getTime();
interval = Math.floor(interval / (1000* 60 * 60 * 24) / 365);
console.log(interval);

// Math
console.log(Math.random());

var max = Math.max;
console.log(max(4, 5, 6, 2));
