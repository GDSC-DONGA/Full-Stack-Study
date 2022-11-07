# 자바스크립트

## 기본 사용법

### 자바스크립트 사용법
- `<script>javascript~</script>` : script 태그 안에 Javascript 코드 사용
- `<script src="파일경로" />` : script 태그안에 src속성에 자바스크립트 파일 경로 삽입

### console.log
콘솔 화면에 메시지를 출력합니다.

### 변수, 상수
#### 변수
  - 변수를 선언할 때는 let 이라는 예약어(또는 키워드)로 변수를 선언합니다.
#### 상수
  - 상수도 변수와 마찬가지로 값을 할당받을 수 있지만, 한 번 할당한 값을 바꿀 수는 없습니다.

### 스코프 (Scope)
- 전역 스코프
  - 자바스크립트 최상단에 선언한 변수의 영역은 `전역 스코프` 이며, `전역 스코프`에 선언된 변수를 `전역 변수`라고 합니다.

- 블록 스코프
  - 블록 `{}` 으로 묶인 영역이 블록 스코프이며, 블록안에 선언된 변수는 블록 안에서만 접근 가능합니다.
```jsx
{
  let a = '부모변수';
  {
    let a = '다시선언';
    let b = '자식변수';
    console.log('a: ', a);
    console.log('c: ', a);
  }
  console.log('c: ', a);
  console.log('c: ', c);
}
```

### 식별자 이름
변수와 상수, 함수 이름을 식별자(identifier)라 부릅니다. 그리고 식별자에는 규칙이 있습니다.
- 식별자는 반드시 글자나 달러 기호($), 밑줄(_)로 시작해야 합니다.
- 식별자에는 글자와 숫자, 달러 기호, 밑줄만 쓸 수 있습니다.
- 유니코드 문자도 사용 가능합니다.
- 예약어는 사용하지 못합니다. 예) let, const, funciton, for, if

## 데이터 타입
### 기본 타입 (Primitive Type)
자바스크립트에서 객체가 아닌 것들이며, 더 이상 작은 단위로 나뉘어 지지 않는 값이며, 그 자체로 변수에 저장 된다. 그리고 이미 생성한 프리미티브 타입 값은 객체, 배열, 함수와 달리 변형할 수 없습니다.
- 프리미티브 타입 종류
    - 숫자 (number)
    - 문자열 (string)
    - 불리언 (boolean)
    - null
    - undefined
- typeof
  - `typeof` 연산자는 피연산자의 데이터 타입을 문자열로 반환 합니다.

## 대화상자
### alert
브라우저에서 경고창을 띄웁니다.

### prompt
사용자에게 값 입력을 받을 때 사용합니다.
```jsx
const name = prompt("예약을 입력하세요","2020-")
```

### confirm
확인 할 때 사용한다. (boolean 값을 리턴받음)
```jsx
const isAdult = confirm("당신은 성인입니까?");
```

- 단점 
  - 스크립트 일시정지
  - 스타일링 x

### 함수 

#### 함수 선언식
함수는 `function` 이라는 예약어와 함수이름(`sayHello`), 함수블록(`{ ... }`) 으로 이루어져 있습니다.
```jsx
function sayHello() {
	console.log('이름과 나이를 출력합니.');
	console.log('name: 홍길동, age: 20세');
}
sayHello();
```

#### 함수 표현식
```jsx
let sayHello = function() {
	console.log('이름과 나이를 출력합니.');
	console.log('name: 홍길동, age: 20세');
};
sayHello();
```
- 두 가지의 차이는 함수 선언식은 호이스팅의 영양을 받지만, 함수 표현식은 호이스팅의 영향을 받지 않는다는 거에요!

#### 화살표 함수 
Arrow Function 특징
    - function 예약어를 생략할 수 있습니다.
    - 함수에 매개변수(Parameter)가 단 하나 뿐이라면 괄호(())도 생략할 수 있습니다.
    - 함수 바디가 표현식 하나라면 중괄호와 return 문도 생략할 수 있습니다.
```jsx
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
## Object
객체는 연관된 데이터를 담는 그릇입니다. 프리미티브 타입(Primitive Type)은 단 하나의 값만 나타낼 수 있고 불변이지만, 
이와 달리 객체는 여러가지 값이나 복잡한 값을 나타낼 수 있으며, 값(내용물)이 변할 수도 있습니다.

### 객체 구성
객체는 `키(key)`와 `값(value)`으로 구성되어 있습니다.
객체는 여러가지 값을 가질 수 있습니다. 그리고 객체가 가지고 있는 값을 프로퍼티(Property)라고 하며, 
프로퍼티가 함수인 경우 즉! 객체가 가지고 있는 함수를 메서드라고 합니다
```jsx
const obj = {
	name: '짐코딩',    // name 프로퍼티
	age: 20,         // age 프로퍼티
	sayHello: function() {   // sayHello 메서드
		console.log('Hello!');
	},
	sayHi() {  // 이렇게도 선언할 수 있다.
		console.log('Hi!');
	}
};
```

## 배열

### 배열의 생성
- **배열 리터럴 표기법 (array literal syntax)**
    
    ```jsx
    const fruits = ['사과', '바나나', '딸기'];
    ```
    
- **배열 생성자 표기법 (array constructor syntax)**
```jsx
const fruits = new Array('사과', '바나나', '딸기');
```
### 배열 접근
 대괄호(`[]`)를 통하여 배열안의 값에 접근할 수 있다. 그리고 배열의 `**index`는 0부터 시작**한다.
 ```jsx
const fruits = ['사과', '바나나', '딸기'];
console.log(fruits[0]);  // "사과"
console.log(fruits[1]);  // "바나나"
fruit[2] = '포도';
console.log(fruits[2]);  // "포도"
```

## 자주 사용하는 배열 API
- `**length` - 배열의 길이**
    - 배열 길이 가져오기 
        ```jsx
        const fruits = ['사과', '바나나', '딸기'];
        console.log('fruits.length: ', fruits.length); // 3
        ```        
    - 배열의 마지막 항목 가져오기    
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
- **`push` - 배열 끝에 항목 추가하기**
    ```jsx
    const fruits = ['사과', '바나나', '딸기'];
    fruits.push('포도');
    fruits.push('오렌지');
    console.log('fruits: ', fruits);
    // ['사과', '바나나', '딸기', '포도', '오렌지']
    ```
- **`pop` - 배열 끝에 항목 제거하기**    
    ```jsx
    const fruits = ['사과', '바나나', '딸기'];
    fruits.pop();
    console.log('fruits: ', fruits);   // ['사과', '바나나']
    ```   
- **`shift` - 배열 앞에 항목 제거하기**    
    ```jsx
    const fruits = ['사과', '바나나', '딸기'];
    fruits.shift();
    console.log('fruits: ', fruits);   // ['바나나', '딸기']
    ```   
- **`unshift` - 배열 앞에 항목 추가하기**
    ```jsx
    const fruits = ['사과', '바나나', '딸기'];
    fruits.unshift('포도');
    fruits.unshift('오렌지');
    console.log('fruits: ', fruits);
    // ['오렌지', '포도', '사과', '바나나', '딸기']
    ```
