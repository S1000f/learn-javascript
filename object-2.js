var students = [];
students.push({ name: 'Milly', kor: 69, math: 98, eng: 87});
students.push({ name: 'Yeon', kor: 98, math: 68, eng: 89});
students.push({ name: 'Sully', kor: 98, math: 78, eng: 89});

for (var i in students) {
    students[i].getSum = function () {
        return this.kor + this.math + this.eng;
    };

    students[i].getAvg = function () {
        return this.getSum() / 3;
    };
}

for (var i in students) {
    with (students[i]) {
        console.log(`${name}\t${getSum()}\t${getAvg()}`);
    }
}

// 함수를 이용하기
function makeStudents(name, kor, math, eng) {
    var willReturn = {
        name: name,
        korean: kor,
        mathematics: math,
        english: eng,

        getSum: function () {
            return this.korean + this.mathematics + this.english
        },

        getAvg: function () {
            return this.getSum() / 4;
        },

        toString: function () {
            return `${this.name}\t${this.getSum()}\t${this.getAvg()}`;
        }
    };
    return willReturn;
};

var students2 = [];
students2.push(makeStudents('aaa', 86, 98, 68));
students2.push(makeStudents('bbb', 87, 88, 78));
students2.push(makeStudents('ccc', 78, 97, 97));

for (var i in students2) {
    console.log(students2[i].toString());
}
// for of 반복문 사용
for (var e of students2) {
    console.log(e.toString());
}

