# JavaScript
사진이 안보이기 때문에 [Notion 필기 링크](https://bumku.notion.site/JavaScript-5d2841f352394aacab008802b1d0d05d)를 첨부
## 변수

```jsx
// ;는 생략가능
name = "Bumku"; // 문자열은 "", '', ``로 가능
age = 23; // 숫자는 그냥 적음

// 단, 협업중 다른 코드에 변수명이 같으면 이후에 코드로 변수명이 바뀌기 때문에 const나 let을 붙임
const age1 = 23; // 상수
let age2 = 23; // 변수
```

## 출력

```jsx
alert(name); // 웹브라우저 메세지로 뜸
console.log(name); // 웹브라우저 콘솔로그로 뜸

console.log(`My name is ${name}`); // 문자열에 변수를 넣고 싶으면 `` 사용
```

### 오류라고 생각 할 수 있는것

```jsx
console.log("Name"/2); // NaN 출력, Not a number

console.log(abcde); // abcde라는 변수가 없으면 undefined 출력

console.log(1/0); // Infinity 출력
```

## 입력

```jsx
const age = prompt("나이를 입력하시오", "20"); // 입력 가능한 메세지로 날라옴 // 두번째 인자는 default값, 없어도 됨
const isAdult = confirm("당신은 성인 입니까?"); // 확인 최소 버튼이 있는 메세지가 옴 // 확인 = true, 취소=false
```

### 입력시 주의사항

- prompt는 문자열로 받기 때문에 숫자를 받을 때는 형변환이 필요
- `String()` 문자열로 변환
- `Number()` 숫자로 변환
- `Boolenan()` 0, “”, null, undefined, NaN만 false로 반환

## 조건문 및 연산자

```jsx
const a = 1;
const b = "1";

console.log(a==b); // true, 타입은 비교안하고 값만 비교
console.log(a===b); // false, 타입까지 비교
```

```jsx
const isAdult = age > 19; // 이런식으로도 가능

if(!isAdult){
	console.log("성인이 아닙니다.");
}else{
	console.log("성인입니다.");
}
```

## 함수

```jsx
// 함수 선언문: 어디서든 함수 접근 가능
function sayHello(name){ // 함수에 타입 없어도 됨
	console.log(`Hello, ${name}`);
	return; // 생략 가능
}

// 함수 표현식: 이 코드 밑에서만 함수 접근가능
let sayHello = function(name){
	console.log(`Hello, ${name}`);
	return;
}

// 화살표 함수
// 방법1
const add = (num1, num2) => {
	const result = num1 + num2;
	return result;
};

//방법2
const add = (num1, num2) => (
num1 + num2;
);

//방법3
const add = (num1, num2) => num1 + num2;
```

## 객체

```jsx
const person ={ // 아마도 JS에서 객체는 맵 형식인듯하다
	name:'clark',
	age: 30,
}

console.log(person.name); // clark 출력
console.log(person['age']); // person.age와 동일

person.hairColor = 'black';
person['hobby'] = 'football';

// delete person.age; // 삭제도 가능
console.log(person);
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dc225fe0-fa1e-49a7-a61b-f61ff1abb5f1/Untitled.png)

### 함수로 객체 리턴하기

```jsx
function makeObject(name, age){
	return {
		name: name,
		age, // 이름이 같으므로 생략가능한 문법
		hobby: "football"
	};
}

const Mike = makeObject("Mike", 30);
console.log(Mike);
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5841773f-0a51-4694-b22b-8e2e54f1bb3b/Untitled.png)

### 객체 함수
