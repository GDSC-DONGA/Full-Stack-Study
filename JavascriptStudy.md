## 변수

`let` : 변할 수 있는 값에 선언

`const` : 절대로 바뀌지 않는 상수

## 자료형
- 자바스크립트에서는 문자열을 표현할 때 작은따옴표(') 큰따옴표(") 백틱(`)을 사용

```javascript
console.log(`내 이름은 ${name} 입니다. 그리고 나이는 ${age}살 입니다.`);
```

## alert prompt confirm

- `alert`

- `prompt` : 사용자에게 어떤 값을 입력 받음 / 문자형으로 입력받아짐
```javascript
const name = prompt("예약일을 입력해주세요.", "2020-10-");
```

-  `confirm` : 사용자에게 확인/취소 값을 받음 (ex 결제하시겠습니까?)

## 형변환

- `String()` : 괄호안의 타입을 문자형으로

- `Number()` : 괄호안의 타입을 숫자형으로

- `Boolean()` :
      false : 숫자 0, 빈 문자열, null, undefined, NaN
      true : 나머지
      
      
## 논리 연산자


- 논리 연산자는 `불리언(boolean)` 값만 다룰 수 있으며 물리언에는 false 와 true 두 가지 값밖에 없습니다. 수학에서 그리고 대부분의 프로그래밍 언어에서 논리 연산자는 `불리언(boolean)` 값에서만 동작하며 불리언 값만 반환합니다. 반면 **자바스크립트의 논리 연산자는 불리언이 아닌 값도 다룰 수 있고, 놀랍게도 불리언이 아닌 값을 반환하기도 합니다.**

- 거짓 같은 값은 false로 간주됩니다. /  null, 0, NaN, 빈 문자열(""), undefined

## 반복문

## switch문

## 함수

함수는 하나의 단위로 실행할 수 있도록 코드! 즉, 명령문을 그룹화한 것입니다.

괄호() 안에 파라미터(또는 매개변수)를 선언하여, 함수 호출시 값을 전달할 수 있습니다.

```javascript
function sayHello(name, age) {
	console.log('이름과 나이를 출력합니다.');
	console.log(`name: ${name}, age: ${age}세`);
}
sayHello('김진수', 23);
```

### 함수 선언식

- 함수는 `function` 이라는 예약어와 함수이름(`sayHello`), 함수블록(`{ ... }`) 으로 이루어져 있습니다.
- 어디서든 호출 가능 / 호출이 위에 있고 함수 선언이 밑에 있어도 돌아감
- hoisting

```javascript
function sayHello() {
	console.log('이름과 나이를 출력합니.');
	console.log('name: 홍길동, age: 20세');
}
sayHello();
```


### 함수 표현식

- 자바스크립트에서 함수는 객체입니다.  즉 함수를 변수에 담아 생성할 수 있습니다.

```javascript
let sayHello = function() {
	console.log('이름과 나이를 출력합니.');
	console.log('name: 홍길동, age: 20세');
};
sayHello();
```


### 반환 값

`return` 키워드를 사용하여 함수에서 값을 반환할 수 있습니다.

```javascript
function sum(number1, number2) {
	return number1 + number2;
}
let result = sum(5, 3);
console.log('result: ', result); // result: 8
```


## Arrow Function

- Arrow Function 특징
    - function 예약어를 생략할 수 있습니다.
    - 함수에 매개변수(Parameter)가 단 하나 뿐이라면 괄호(())도 생략할 수 있습니다.
    - 함수 바디가 표현식 하나라면 중괄호와 return 문도 생략할 수 있습니다.
    - 일반 함수와는 달리 자신만의 this를 갖지 않습니다.

```javascript
const f1 = function() { return "hello"; }
// 또는
const f1 = () => "hello";

const f2 = function(name) { return `Hello, ${name}`; }
// 또는
const f2 = name => `Hello, ${name}`;

const f3 = function(a, b) { return a + b; }
// 또는
const f3 = (a, b) => a + b;
```


## 객체 구성

객체는 `키(key)`와 `값(value)`으로 구성되어 있습니다.

## 객체 프로퍼티 접근

객체 안에 있는 프로퍼티나 함수에 접근하기 위에서는 크게 두 가지 방법이 있다.

- `점표기법` - `예) 객체.key`
    
- `괄호 표기법` - `예) 객체['key']`

### 객체 프로퍼티 동적으로 생성 및 제거

- **프로퍼티 생성**
```javascript
person['hobby'] = '프로그래밍';
```

- **프로퍼티 제거**
    
`delete` 연산자는 객체 프로퍼티를 제거합니다.
    
## for...in 반복문
```javascript
for(let key in superman) {
console.log(key)
console.log(superman[key])
```


## 키 존재 여부 확인

- **in operator** - `key in object`

```javascript
console.log('name' in person)  // true
```


## method

```javascript
const user {
  name : "Mike",
  sayHello : function() {
  console.log(`hello, I',m ${this.name}`);
  }
}
```

## 배열

## 자주 사용하는 배열 API(프로퍼티, 메서드)

- `**length` - 배열의 길이**
    - 배열 길이 가져오기
        
        ```jsx
        const fruits = ['사과', '바나나', '딸기'];
        console.log('fruits.length: ', fruits.length); // 3
        ```
        
- `**push` - 배열 끝에 항목 추가하기**
    
    ```jsx
    const fruits = ['사과', '바나나', '딸기'];
    fruits.push('포도');
    fruits.push('오렌지');
    console.log('fruits: ', fruits);
    // ['사과', '바나나', '딸기', '포도', '오렌지']
    ```
    
- **`forEach` - 배열의 항목을 순환하며 처리하기**
    
    ```jsx
    const fruits = ['사과', '바나나', '딸기'];
    fruits.forEach(function (item, index, array) {
      console.log(item, index)
    })
    // 사과 0
    // 바나나 1
    // 딸기 2
    ```
    
- `**pop` - 배열 끝에 항목 제거하기**
    
    ```jsx
    const fruits = ['사과', '바나나', '딸기'];
    fruits.pop();
    console.log('fruits: ', fruits);   // ['사과', '바나나']
    ```
    
- `**shift` - 배열 앞에 항목 제거하기**
    
    ```jsx
    const fruits = ['사과', '바나나', '딸기'];
    fruits.shift();
    console.log('fruits: ', fruits);   // ['바나나', '딸기']
    ```
    
- `**unshift` - 배열 앞에 항목 추가하기**
    
    ```jsx
    const fruits = ['사과', '바나나', '딸기'];
    fruits.unshift('포도');
    fruits.unshift('오렌지');
    console.log('fruits: ', fruits);
    // ['오렌지', '포도', '사과', '바나나', '딸기']
    ```
