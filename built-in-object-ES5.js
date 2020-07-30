// Array.isArray()
console.log(Array.isArray([4, 5, 3]));
console.log(Array.isArray({}));
console.log(Array.isArray(1));

// indexOf() and lastIndexOf()
var array = [1, 2, 3, 3, 2, 1];

var output = array.indexOf(2);
var output1 = array.lastIndexOf(2);
var output2 = array.indexOf(5);
console.log(output, output1, output2);

// forEach() and map()
var array = [1, 2, 3, 4, 5];

var sum = 0;
var output = '';
array.forEach((element, index) => {
    sum += element;
    output += `${index} : ${element} --> ${sum}\n`;
});
console.log(output);

var output = array.map((value, index) => index * value);
console.log(output);

// filter(), every() and some()
array.map(e => e * 2)
    .filter(e => e < 10)
    .forEach(e => console.log(e));

// reduce()
var result = array.reduce((p, c) => p + c);
console.log(result);

// String
var text = '  text  ';
var output = '';
output += `++${text}++\n`;
output += `++${text.trim()}++`;
console.log(output);

// JSON
var object = {
    name: 'milly',
    region: 'Deagu'
};
console.log(object);
for (var i in object) {
    console.log(`${i} : ${object[i]}`);
}
console.log(JSON.stringify(object));

var tojson = {
    name: 'yeon',
    age: 10,
    toJSON: () => {
        return { custom: 'custom' };
    }
};
console.log(JSON.stringify(tojson));

// Underscore.js
var students = [
    { name: 'a', kor: 98, eng: 65},
    { name: 'bb', kor: 56, eng: 94},
    { name: 'cc', kor: 46, eng: 85}
];

var sortByEng = _.sortBy(students, ((item) => -1 * item.eng));
console.log(JSON.stringify(sortByEng, null, 2));
