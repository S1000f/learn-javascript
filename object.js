// 배열은 객체의 일종이다. 배열은 인덱스로 접근이 가능하다.
var array = [1, 3, 4, 5];
console.log(array[2]);

// 객체는 키로 접근이 가능하다
var product = {
    name: 'apple',
    type: 'fruit',
    qty: 45,
    'with space': 'space is universe'
};
console.log(product.name);
console.log(product['qty']);
console.log(product["with space"]);

// 객체의 속성엔 모든 형태의 자료형을 가질 수 있으며, 특히 함수 자료형인 속성을 메서드라고 부른다
var object = {
    number: 54,
    string: 'StringisString',
    boolean: true,
    array: [45, 56, 32],
    method: function () {}
};
// for in 반복문으로 객체 프로퍼티에 접근
for (var key in object) {
    console.log(`${key} : ${object[key]}`);
}

// this Keyword
var cat = {
    name: "Milly",
    eat: function (food) {
        console.log(`${this.name} is eating ${food} now`);
    }
};
cat.eat("churu");

// in Keyword
var student = {
    name: "Yeon",
    kor: 76, math: 86, eng: 98
};
var output = '';
output += `"name" in student: ${"name" in student}\n`;
output += `"gender" in student: ${"gender" in student}`;
console.log(output);

// with Keyword
var output2 = '';
with (student) {
    output2 += `name: ${name}\n`;
    output2 += `kor: ${kor}\n`;
    output2 += `math: ${math}\n`;
    output2 += `eng: ${eng}\n`;
    output2 += `total sum: ${kor + math + eng}`
}
console.log(output2);

// add and delete properties in an object
var add = {};
add.name = "Milly";
add.favortie = "food";
add.gender = "female";

add.toString = function () {
    for (var key in this) {
        if (key != "toString") {
            console.log(`${key}\t${this[key]}`);
        }
    }
};
add.toString();

delete (add.gender);
add.toString();
