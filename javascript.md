# **JS**

코드가 c랑 비슷하다고 느낌

다른 점)

- 출력 console.log()
- 입력 prompt();

변수 선언 타입을 안 씀 |

- 변수명 = ‘문자’;
- 변수명 = 숫자

const/let

`console.log()` : print같은 거 콘솔창에 보여줘!

`alert()` 팝업창 띄우는 거 // 웹 서버에서 보여줘!

`let 변수명` = 변수; 이렇게 선언하면

변수명이 겹쳤을 때 변수명 겹쳤다고 에러 뜸

그냥 변수명 = 변수; 하면 똑같은 변수명=변수; 써도 에러 X 마지막 선언된 변수 값으로 덮어 씌워짐

`const`: 상수 선언

define과 동일

const NAME = 이름; 이런 식으로 선언 (보통 대문자로 적어줌)

`prompt()` : scan/input 같이 입력 받을 때

prompt('날짜를 입력해주세요‘, ’2022-11‘); 하면 입력 창에 2022-11이 쳐져 있음 디폴트로

확인 누르면 변수 명에 입력 값을 넣고 , 취소 누르면 변수에 null을 반환

`confirm()` : alert는 확인 버튼만 있지만 컨펌은 확인, 취소 버튼이 2개임

result= confirm("결제하시겠습니까?“);

console.log(result); 하면 확인 누르면 true, 취소 누르면 false뜸 이 값으로 이후 코드를 실행할 수 있음

### 자료형

- Boolean : 참, 거짓
- Null :  값 없음
- Undefined : 값이 정의되지 않음
- Number : 숫자형
- String : 문자형
- Object :  객체

❓

===이 ==인가 ? <br>
== : 내용을 비교 <br>
=== : 내용 + 타입까지 

### 논리 연산자

|| OR

&& AND

! NOT

### 반복문 loop

- for문
- while문
- do while문 : 적어도 한번은 실행한다는 것이 특징

반복문을 빠져나오는 기능

- break : 멈추고 반복문도 종료
- continue : 멈추고 다음 반복 실행

![00EC6DDC-C6AA-486C-9F11-765EF20CF2F0.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ee5beefc-aa67-4b27-9a20-d8caaf8e25ce/00EC6DDC-C6AA-486C-9F11-765EF20CF2F0.jpeg)

i%2 나머지가 0이면 true // if문 실행 O

i%2 나머지가 0이 아니면 false // if문 실행 X

+) if문은 참일 때 실행!

### switch문

`default :`  case중 아무것도 아닐 때 실행

### 함수 선언문

- 형식

```jsx
function 함수이름(매개변수) {
	코드; 
}
```

- 예제

```jsx
function sayHello(name) {
	const msg = 'hello, ${name}';
	console.log(msg);
}
 
//호출 시
sayHello('하진');
```

### 함수 표현식

- 형식

```jsx
let add = function(num1, num2) {
}

//호출 시
add();
```

- 차이점
    - 함수 선언문 :  어디 서든 호출 가능 =⇒ 호이스팅
    - 함수 표현식 : 함수를 선언하기 전에 호출(사용) 불가능

### 화살표 함수

- 형식

```jsx
let add = (num1, num2) => {
}
```

+ this의 의미가 다름

### 객체(Object)

- 선언

```jsx
const superman = {
	name : 'clark',
	age : 30, 
}
```

- 프로퍼티 ( .머시기 )

```jsx
//출력 방법 1 [프로퍼티 . 사용]
console.log(superman.name)
//출력
"clark"
//출력 방법 2 [프로퍼티 [] 사용]
console.log(superman['age'])
//출력
30
//출력방법 3 [객체 자체를 출력]
console.log(superman)
//출력하면
Object {
	age: 30,
	name: "clark"
}
// 거꾸로 출력되는가보다
```

- 객체 추가

```jsx
super.hairColor = 'black';
superman['hobby'] = 'football';
console.log(superman)

//출력
Object {
	hairColor: "black",
	hobby: "football"
}
```

- 객체 삭제

```jsx
delete superman.age; //나이를 지움
console.log(superman)

//출력
Object {
	nmae: "clark"
}
```

- 단축 프로퍼티

```jsx
function makeObj(name, age) {
	return {
		name, //name: name 와 같은 의미
		age, //age: age 와 같은 의미
	};
}

const Mike = makeObj("Mike", 30);
// Mike와 30을 객체에 넣어서 출력해줌
```

- for … in 반복문

```jsx
for(x in makeObj) {
	console.log(makeObj[x]) //그냥 x만 해도 같은 의미
}

//출력
//makeObj 오브젝트 안에 있는 요소 name, age 출력
```

- method
    - 객체 프로퍼티로 할당 된 함수

```jsx
const superman = {
	fly : function() {  //fly() { 로도 생성가능 (function 키워드 생략)
		console.log('날아갑니다')
	}
}

superman.fly();
```

### array 배열

- 특징
    - 문자, 숫자, 객체, 불린, 함수 등 포함 가능
    - 메소드
        - push() : 맨 뒤에 요소 추가
        - pop(): 맨 뒤 요소 삭제
        - shift, unshift : 배열 맨 앞에 제거/추가
- for … of
