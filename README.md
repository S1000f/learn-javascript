# learn-javascript
Inside JavaScript -송형주, 고현주, 한빛미디어(2014)

# 데이터 타입
기본타입과 참조타입(객체)으로 나뉜다.

## 기본타입
---
숫자, 문자열, 불린, null, undefined 5가지. 그 외 모두는 참조타입.
<br />느슨한 타입 체크 언어

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
---
객체는 key : value 형태의 프로퍼티(property)들을 저장하는 자료형태이다.
<br />
함수도 프로퍼티가 될 수 있으며 이때 이러한 프로퍼티를 메서드라 부른다.

### 객체의 생성방법
- Object() 생성자 함수 이용
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
