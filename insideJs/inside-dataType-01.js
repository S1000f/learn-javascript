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
//// by Object()
var foo = new Object();
foo.name = 'foo';
foo.age = 20;

console.log(typeof foo);
console.log(foo)

//// by object literal
var foos = {
    name: 'foo',
    age: 20,
    major: 'something'
};
console.log(foos);

// 3.2.2. Object Property read/write/update
// read
console.log(foo.name);
console.log(foo['name']);
console.log(foo.nickname);

// update
foo.major = 'Economics';
console.log(foo.major);

// dynamic property creating
foo.height = 180;
console.log(foo.height);

// []
foo['full-name'] = 'foo bar';
console.log(foo.full-name);
console.log(foo['full-name']);

// 3.2.3 for in and printing properties
var prop;
for (prop in foos) {
    console.log(prop, foo[prop])
}

// delete operation - delete only object's properties but an object
delete foo.major;
console.log(foo.major);

// 3.3 Reference Type
// 3.3.1 comparing operator
var a = 100;
var b = 100;

var objA = { value: 100 };
var objB = { value: 100 };
var objC = objB;

console.log(a == b);
console.log(objA == objB);
console.log(objB == objC);

// 3.3.2 CBV CBR
var a = 100;
var objA = { value: 100 };

function change(num, obj) {
    num = 200;
    obj.value = 200;

    console.log(num);
    console.log(obj);
}

change(a, objA);
console.log(a);
console.log(objA)

console.log(objA.toString());
console.dir(objA);