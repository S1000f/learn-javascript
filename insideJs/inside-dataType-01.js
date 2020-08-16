// 3.1 primitive types

//// number
var intnum = 10;
var float = 0.1;

//// string
var singlequote = 'single quote';
var doublequote = "double quote";
var singlechar = 'a';

//// boolean
var bool = true;

//// undefined
var empty;

//// null
var nullvar = null;

console.log(typeof intnum, 
    typeof float, typeof singlequote, typeof doublequote, typeof singlechar, typeof bool, typeof empty, typeof nullvar);

// 3.1.1 number
var num = 5 / 2;
console.log(num);
console.log(Math.floor(num));

// 3.1.2 string
var str = 'test';
console.log(str[0], str[1], str[2], str[3]);
str[0] = 'T';
console.log(str);

// 3.1.4 undefined, null
console.log(typeof nullvar === null);
console.log(nullvar === null);

// 3.2 reference type (object type)
// 3.2.1 initialize object
//// Object()
var foo = new Object();
foo.name = 'foo';
foo.age = 20;

console.log(typeof foo);
console.log(foo)

//// object literal
var foos = {
    name: 'foo',
    age: 20
};
console.log(foos);

