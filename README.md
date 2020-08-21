# learn-javascript
Inside JavaScript -송형주, 고현주, 한빛미디어(2014)

# 데이터 타입
기본타입과 참조타입(객체)으로 나뉜다.

## 기본타입

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

## 참조타입(객체)
>객체는 key : value 형태의 프로퍼티(property)들을 저장하는 자료형태이다.
<br />
함수도 프로퍼티가 될 수 있으며 이때 이러한 프로퍼티를 메서드라 부른다.

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

## 배열

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
