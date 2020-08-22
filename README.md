# learn-javascript
Inside JavaScript -송형주, 고현주, 한빛미디어(2014)

# 데이터 타입
>기본타입과 참조타입(객체)으로 나뉜다.

## 1. 기본타입

>숫자, 문자열, 불린, null, undefined 5가지. 그 외 모두는 참조타입.
><br />느슨한 타입 체크 언어

### 숫자
- 모든 숫자를 실수로 처리하므로 나눗셈 연산의 결과도 실수이다.
### 문자열
- 문자열은 배열처럼 인덱스를 이용하여 접근할 수 있다.
```javascript
var str = 'test';
console.log(str[0], str[1]); // t e
```
### null 과 undefined
- undefined 는 데이터 타입이자, 그 자체로 값을 나타낸다.
- null 은 개발자가 명시적으로 값이 비어있음을 나타낼 때 사용
- null을 확인할때는 `typeof`가 아니라 값을 직접 확인할 것
```javascript
console.log(typeof nullvar === null); // false
console.log(nullvar === null); // true
```

<br />

## 2. 참조타입(객체)
>객체는 key : value 형태의 프로퍼티(property)들을 저장하는 자료형태이다.
<br />함수도 프로퍼티가 될 수 있으며 이때 이러한 프로퍼티를 메서드라 부른다.

### 객체의 생성방법
- `Object()` 생성자 함수 이용
- 객체 리터럴 이용
- 생성자 함수 이용

### 프로퍼티의 삭제 연산자
- `delete` 연산자를 이용해 프로퍼티를 즉시 삭제할 수 있다.
```javascript
var foo = {
    name: 'foo',
    age: 20
};
delete foo.age;
console.log(foo.age); // undefined
```

<br />

## 3. 배열

### length 프로퍼티
- 배열 내에서 가장 큰 인덱스에 1을 더한 값이다.
- 따라서 마지막 인덱스값이 변하면 length 값 또한 변한다.
```javascript
var arr = [];
console.log(arr.length); // 0
arr[0] = 0;
console.log(arr.length); // 1
arr[100] = 100;
console.log(arr.length); // 101
```
- length 프로퍼티 역시 명시적으로 값을 변경할 수 있다.
- `push()` 메서드 경우 현재 length값 위치에 원소를 추가한다. 배열의 마지막 원소 뒤에 추가하는것이 아니다. 그리고 length의 값이 1 증가한다.
```javascript
var arr = ['zero', 'one', 'two']; // length 3
arr.push('three');
console.log(arr); // zero one two three
arr.length = 5;
arr.push('four');
console.log(arr); // zero one two three undefined four
```

### 배열의 프로퍼티
- 배열 역시 객체 이므로 동적으로 프로퍼티를 추가할 수 있다.
- 하지만 length 프로퍼티에 값에는 영향을 주지 않는다.
```javascript
var arr = [3, 4, 5];
arr.color = 'tomato';
console.log(arr.length); // 3, not 4
```
- 따라서 배열에 `for in` 문으로 접근하면 위의 color같은 프로퍼티까지 출력된다.
- 일반적으로 배열에 순차적으로 접근하는 목적은 배열의 원소 이므로 `for` 문을 사용하도록 한다.

### 배열 원소 삭제
- `delete` 연산자는 해당 요소를 `undefined`로 설정할 뿐 원소 자체를 삭제하지 않는다.
```javascript
var arr = [1, 2, 3];
delete arr[1];
console.log(arr.length); // 3 , not 2
console.log(arr); // 1 undefined 3
```
- 배열의 원소 삭제에는 `splice()` 메서드를 사용한다.
```javascript
var arr = [1, 2, 3];
arr.splice(1, 1);
console.log(arr); // 1 3
```

<br>

# 함수

## 1. 함수 정의

- 3가지 방법으로 함수를 생성한다.
    - 함수 선언문
    - 함수 표현식
    - 생성자 함수

### 함수 선언문
- 함수 리터럴 형식으로 정의.
- 반드시 함수 이름이 필요하다.
- 결국엔 실행시 함수표현식 형태로 변경되어 작동한다.
```javascript
function add(x, y) {
    return x + y;
}
console.log(add(2, 3)); // 5
```

### 함수 표현식
- 익명함수를 이용
```javascript
var add = function (x, y) {
    return x + y;
};
var adder = add;
console.log(add(1, 2)); // 3
console.log(adder(1, 2)); // 3
```
- 기명함수 이용
- 함수표현식의 함수이름(sum)은 외부에서 접근이 불가능하다.
```javascript
var add = function sum(x, y) {
    return x + y;
};
console.log(add(2, 3)); // 5
console.log(sum(2, 3)); // Error
```

### Function() 생성자 함수로 생성
- 잘 사용하지 않는다.
```javascript
var unusual = new Function('x', 'y', 'return x + y');
console.log(unusual(4, 5)); // 9
```

<br />


## 2. 함수 객체

- 함수는 일급객체이다(First Class)
    + 리터럴에 의해 생성
    + 변수나 배열의 요소, 객체의 프로퍼티로 할당가능
    + 함수의 인자로 전달가능
    + 함수의 리턴값으로 리턴 가능
    + 동적으로 프로퍼티 생성 및 할당가능

### 프로퍼티에 값으로 함수 할당
```javascript
var object = {};
object.foo = function () {
    return 200;
};
console.log(object.foo()); // 200
```

### 함수의 인자로 함수전달
```javascript
var foo = function (func) {
    func();
};
foo(function () {
    console.log('function as arguments');
}); // function as arguments
```

### 리턴값으로 활용
```javascript
var foo = function () {
    return function () {
        console.log('function as a return value');
    };
};
var bar = foo();
bar(); // function as a return value
```

<br />

## 3. 함수호출과 this 바인딩
- 객체의 메서드 호출 시 this 바인딩
- 생성자 함수로써 호출 시 this 바인딩
- 그 외 함수 호출 시

### 메서드로써 호출 시 this 바인딩

- this는 메서드를 호출한 객체에 바인딩된다.
- 아래 say() 메서드내의 this는 메서드를 호출한 객체에 바인딩 되므로, 두 객체의(myObje, otherObje) this는 각자 다르다.
```javascript
var myObje = {
    name: 'foo',
    say: function () {
        console.log(this.name);
    }
};
var otherObje = {
    name: 'bar'
};
otherObje.say = myObje.say;
myObje.say(); // foo
otherObje.say(); // bar
```

### 생성자 함수로써 호출 시 this 바인딩
- 생성자 함수는 별도의 형식이 존재하지 않는다.
- 따라서, 모든 함수가 생성자 함수로 될 수는 있다
- 생성자 함수로 사용할 함수는 이름의 첫 글자를 대문자로 한다.
- 생성자 함수의 동작과정
    1. 생성자 함수가 비어있는 객체를 생성 후, 이 객체의 prototype 프로퍼티가 가리키는 객체를 생성자 함수 본인의 프로토타입 객체로 설정한다.
    2. this를 이 생성된 객체에 바인딩하고, 동적으로 프로퍼티나 메소드를 추가한다.
    3. 특별한 리턴문이 없을 경우, this로 바인딩 된 이 새로운 객체를 리턴한다.

```javascript
var Person = function (name) {
    this.name = name;
};
var foo = new Person('foo');
console.log(foo.name); // foo
```

### 그 외의 함수 호출시 this 바인딩
- this는 전역객체에 바인딩된다.
- 전역객체란
    + 브라우저 환경 -> window 객체
    + 자바스크립트 런타임 환경 -> global 객체

```javascript
var test = 'this is a test';
console.log(window.test); // this is a test
var sayFoo = function () {
    var test = 'foo';
    console.log(this.test);
};
sayFoo(); // this is a test
```

- 내부 함수의 this 역시 전역객체에 바인딩되므로 주의
- 내부함수에서 this를 부모객체의 프로퍼티에 바인딩하려면, 다른 변수에 저장 후 그것을 사용한다.(관례적으로 변수명은 that)

```javascript
var value = 100;
var obje = {
    value: 1,
    func1: function () {
        this.value += 1;
        console.log(this.value);
        func2 = function () {
            this.value += 1;
            console.log(this.value);
        };
        func2();
    }
};
obje.func1(); // 2 101

var objeThat = {
    one: 1,
    func1: function () {
        var that = this; // define that = this
        this.one += 1;
        console.log(this.one);
        func2 = function () {
            that.one += 1;
            console.log(that.one); // using that
        };
        func2();
    }
};
objeThat.func1(); // 2 3
```

<br />

## 4. 함수의 리턴값

- 자바스크립트 함수는 항상 리턴값을 반환한다
- 즉, 리턴문이 있는 경우와 없는 경우도 모두 무언가를 반환한다.

### 일반함수, 메서드의 경우
- 리턴문이 있는 경우 -> 해당 리턴값 반환.
- 리턴문이 없는 경우 -> `undefined` 를 반환한다.

### 생성자 함수의 경우
- 리턴문이 있는 경우 -> 해당 리턴값 반환
    + 단, 리턴값이 객체가 아니라 숫자, 불린, 문자같은 원시타입일 경우 -> 해당 리턴값을 무시하고 this 바인딩 객체를 리턴한다.

    ```javascript
    function ReturnWillBeIgnored(name) {
        this.name = name;
        return 200;
    }
    var ignore = new ReturnWillBeIgnored('Milly');
    console.log(ignore); // name: Milly
    ```

- 리턴문이 없는 경우 -> this 바인딩 객체를 반환한다.

### new 없이 생성자 함수를 사용할 경우 강제 인스턴스 생성하기

- 특정 함수를 생성자 함수의 역할로 만들었다고 하더라도, 정작 호출 시 `new` 키워드를 빠트리면 일반 함수의 호출과 다름이 없어진다.
- 따라서, `new` 키워드 없이 생성자 함수를 호출시 해당 생성자 함수안에 this를 사용한 값의 할당이 있다면, 그 this는 전역객체에 바인딩 되므로 의도치 않은 버그가 발생할 수 있다.
- 다음과 같은 패턴을 사용하여 의도치 않은 전역객체의 오염을 피할 수 있다

```javascript
function A(arg) {
    if (!(this instanceof A)) {
        return new A(arg);
    }
    this.val = arg;
}
var a = new A(100);
var b = A(10);
console.log(a.val); // 100
console.log(b.val); // 10
console.log(window.val); // undefined (keep safe)
```

<br />

## 5. 프로토타입 체이닝(prototype chaining)

- 자바스크립트의 __모든__ 객체는 [[prototype]] (크롬에서는 \_\_proto\_\_ 로 표기된다) 이라는 내부 프로퍼티를 가지고 있다.
- 자바스크립트의 __모든__ 함수는 prototype 이라는 프로퍼티를 가진다.
- 자바스크립트에선 함수 역시 객체이다.
- 따라서, 함수는 [[prototype]] 프로퍼티와 prototype 프로퍼티 두 가지를 모두 가지고있다.
- 이 두 프로퍼티는 서로 다른 것이므로 구분되어야 한다.
    + [[prototype]] 프로퍼티 -> 자신의 부모 프로토타입객체를 가리킨다.
    + prototype 프로퍼티 -> 자신이 부모가 될 경우를 대비하여, 자신의 아들이 사용하게 될 프로토타입 객체를 가리키고 있다.

### Object.prototype 객체
- 자바의 Object 클래스와 유사한 개념이다.
- 즉, 자바스크립트의 __모든__ 객체의 최종적인 부모는 Object.prototype 객체이다.
- 함수의 프로토타입 객체 역시 결국 '객체'이므로, 모든 함수의 prototype 객체의 최고 조상은 당연히 Object.prototype 이다

- 아래에서 foo 객체와 People.prototype 객체에는 `hasOwnProperty()` 라는 메소드는 존재하지 않지만, People 생성자 함수로 생성된 foo 객체는 `hasOwnProperty()` 메소드를 사용할 수 있다.
```javascript
function People(name) {
    this.name = name;
}
var foo = new People('foo');
console.log(Object.hasOwnProperty(
    People.prototype.hasOwnProperty)); // false
console.log(foo.hasOwnProperty('name')); // true
```
- foo 객체는 자신과 부모 prototype 객체에 `hasOwnProperty()` 메소드가 없더라도 프로토타입 체이닝을 통해 부모의 부모를 검색하고 다시 그 부모의 부모를 검색하는 것을 반복하여, 최종적으론 Object.prototype 까지 도달하여 `hasOwnProperty()` 메소드를 찾을 수 있는 것이다.

### prototype 객체에 동적으로 프로퍼티 추가/삭제
- prototype 객체 역시 객체이므로, 당연히 프로퍼티의 추가, 변경이 가능하다.
- 이러한 변경된 사항은 실시간으로 프로토타입 체이닝에 반영된다.
- 따라서 prototype 객체의 프로퍼티가 변경되기 전에 생성됬든, 이후에 생성됬든지 상관없이, 해당 prototype 객체를 링크한 객체라면 언제든지 변경된 프로퍼티에 접근이 가능하다.

- 또한 prototype 객체안의 함수 역시 메서드 이므로, prototype 메서드의 this 바인딩 규칙 또한 메서드 방식을 그대로 따른다.
    + Power.prototype.say() 의 this는 Power.prototype 객체를 가리키며
    + foo.say() 의 this는 foo 객체를 가리킨다.

```javascript
function Power(name) {
    this.name = name;
}
var foo = new Power('foo');
Power.prototype.say = function () {
    console.log('hey~ ' + this.name);
};
foo.say(); // hey~ foo

Power.prototype.say(); // undefined
Power.prototype.name = 'Power';
foo.say(); // hey~ foo
Power.prototype.say(); // hey~ Power
```

### prototype 객체 자체를 다른 객체로 변경
- prototype 객체를 다른 것으로 변경 가능하다
- 단, 프로토타입 체이닝과 다르게 변경된 내용은 이후에 새로 생성된 객체에만 적용된다([[prototype]] 링크가 가리키는 객체가 달라졌기 때문)

- 아래에서, foo는 생성될 당시에 prototype 객체에 country 라는 프로퍼티가 없었다. 즉 비어있는 객체가 만들어지고 this에 그 객체가 바인딩 되었고, this.name = name을 통해 name : 'foo'가 입력되었을 뿐이다.
- 그러나 bar 가 생성될 당시에는 prototype 객체에 country : 'korea' 라는 프로퍼티가 존재하므로 그 프로퍼티를 포함하여 새로운 객체가 만들어지면서 this가 바인딩 되고, this.name = name 을 통해서 name : 'bar'가 입력되는 것이다.

```javascript
function Change(name) {
    this.name = name;
}
var foo = new Change('foo');
console.log(foo.country); // undefined

Change.prototype = {
    country: 'korea',
};
var bar = new Change('bar');
console.log(foo.name, foo.country); // foo undefined
console.log(bar.name, bar.country); // bar korea
```

### 프로토타입 체이닝은 객체의 프로퍼티를 읽거나 메서드를 실행할 때만 작동한다

- 아래에서 foo와 bar 객체에 nation 이라는 프로퍼티가 존재하지 않기 때문에 프로토타입 체이닝이 작동하여 둘 다 Korea가 출력된다.
- 하지만 동적으로 foo 객체에 nation 프로퍼티가 추가된 이후에는 foo 객체는 프로토타입 체이닝을 통해 자신의 부모 prototype 객체를 탐색하지 않고 바로 자기자신의 프로퍼티를 사용한다.
- 자바의 override와 유사하게 작동한다.

```javascript
function Person(name) {
    this.name = name;
}
Person.prototype.nation = "Korea";
var foo = new Person("foo");
var bar = new Person("bar");
console.log(foo.nation); // Korea
console.log(bar.nation); // Korea
foo.nation = "USA";
console.log(foo.nation); // USA
console.log(bar.nation); // Korea
```
