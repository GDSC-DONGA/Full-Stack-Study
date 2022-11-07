## 변수

- 변수 : 어떤 정보에 이름을 붙여서 저장할 때 사용
- ex) `name = "Mike" age = 30;`
- `class = "수업"` -> 에러발생 (class는 변수명으로 사용할 수 X => Reserved Words)

- alert()
- console.log()

- 같은 변수명이 선언될 경우 마지막의 변수로 덮어쓰임 -> let, const 사용
- let
  - 한 번 선언 후 다른 값으로 바꿀 수 있음
    (변경할 경우 let을 쓰지 않음)
  - 같은 변수명으로 let을 쓸 경우 에러 발생
- const

  - 절대로 바뀌지 않는 상수를 입력할 때 사용
  - 수정할 수 없음
  - 변경할 경우 에러 발생

- => 자바스크립트에서 변수 선언 시 변하지 않는 값은 const, 변할 수 있는 값은 let으로 선언

- 변수는 문자와 숫자, $와 \_만 사용
- 첫글자는 숫자가 될 수 없음
- 예약어는 사용할 수 없음
- 가급적 상수는 대문자로 알리기
- 변수명은 읽기 쉽고 이해할 수 있게 선언

---

## 자료형

```
const name1 = "Mike";
const name2 = 'Mike';
const name3 = `Mike`;

const message1 = `My name is ${name}`;
const message2 = `나는 ${22+1}살 입니다.`;
console.log(message2)

```

<br>

```
const name = "Mike";
const y = name/2;

console.log(y)
```

-> console

```
NaN (숫자가 아님)
```

<br>

```
let age;
console.log(age)
```

-> console

```
undefined (값이 할당되지 않음)
```

<br>

```
let user = null;
// 존재하지 않음
```

- typeof

  - object : 객체형 (ex> null)

- 문자형 + 연산자 사용 가능
- 문자형 + 숫자형 => 문자형

---

## alert, prompt, confirm

- alert - 알려줌
  - 확인 버튼
- prompt - 입력받음

  - ```
    const name = prompt("이름을 입력하세요.");
    alert("환영합니다. " + name + "님");
    ```

  - prompt(메시지, 디폴트값)
  - 확인, 취소 버튼
    - 취소 -> null

- confirm - 확인 받음

  - ```
    const isAdult = confirm("당신은 성인 입니까?");
    console.log(isAdult)
    ```
  - 확인, 취소 버튼
    - 확인 -> true
    - 취소 -> false

- 단점
  - 스크립트 일시 정지
  - 스타일링 X

---

## 형변환 (Type Conversion)

- prompt 입력 -> 문자형  
  <br>
- 명시적 형변환
  - String() -> 문자형으로 변환
  - Number() -> 숫자형으로 변환
    - Number("문자") -> NaN
    - Number(true) -> 1
    - Number(false) -> 0
    - Number(null) -> 0
    - Number(undefined) -> NaN
  - Boolean() -> 불린형으로 변환
    - false
      - 숫자 0
      - 빈 문자열 ''
      - null
      - undefined
      - NaN

---

## 기본 연산자

- 연산자 줄여서 쓰기
  - ex) +=
- 증가 연산자, 감소 연산자
  - ex) num++, ++num, num--, --num

---

## 비교 연산자, 조건문

- 비교 연산자
  - <, >, <=, >=, ==, !=
  - === : 타입까지 비교  
    <br>
- 조건문
  - if, else, else if

---

## 논리 연산자

- || (OR)
- && (AND)
- ! (NOT)

---

## 반복문

- for
  - ```
    for(let i=0; i<10; i++){
      // 반복할 코드
    }
    ```
- while
  - ```
    let i = 0;
    while(i<10){
      // 코드
    }
    ```
- do while
  - ```
    let i = 0;
    do{
      // 코드
      i++;
    }while(i<10)
    ```

<br>
- break : 멈추고 빠져나옴
- continue : 멈추고 다음 반복으로 진행

---

## switch

```
switch(평가){
  case A:
    // A일때 코드
    break;
  case B:
    // B일때 코드
    break;
  ...
  default:
    // default 코드
}
```

---

## 함수(function)

```
function sayHello(name = 'friend'){
  let msg = `Hello, ${name}`;
  console.log(msg);
}

sayHello();
sayHello('Jane');
```

-> console

```
Hello, friend
Hello, Jane
```

<br>
- 한번에 한작업에 집중
- 읽기 쉬고 어떤 동작인지 알 수 있게 네이밍

---

## 함수 선언문, 화살표 함수(arrow function)

- 함수 선언문 vs 함수 표현식
  - 함수 선언문 : 어디서든 호출 가능
  - 함수 표현식 : 코드에 도달하면 생성
    - ```
      let sayHello = function(){
        console.log('Hello');
      }
      sayHello();
      ```

<br>

- 화살표 함수
  - ```
    let add = (num1, num2) => {
      return num1 + num2;
    }
    ```

---

## 객체 (Object)

```
const superman = {
  name:'clark',
  age:33
}
```

- 접근
  - superman.name // 'clark;
  - superman['age'] // 33
- 추가
  - superman.gender = 'male';
  - superman['hairColor'] = 'black';
- 삭제
  - delete superman.hairColor;

<br>

- 단축 프로퍼티

  - ```
    const name = 'clark';
    const age = 33;

    const superman = {
      name, // name:name
      age, // age:age
      gender:'male'
    }
    ```

<br>

- 프로퍼티 존재 여부 확인

  - ```
    const superman = {
      name:'clark',
      age:33
    }

    superman.birthDay;
    // undifined

    'birthDay' in superman;
    // false

    'age' in superman;
    // true
    ```

<br>

- for ... in 반복문
  - ```
    for(let key in superman){
      console.log(key); // 키값
      console.log(superman[key])
    }
    ```

<br>

- this

  - ```
    const user = {
      name:'Mike',
      sayHello:function(){
        console.log(`Hello, I'm ${this.name}`);
      }
    }

    user.sayHello(); // Hello, I'm Mike
    ```

  - 화살표 함수는 일반 함수와 달리 자신만의 this를 가지지 않음 <br>
    화살표 함수 내부에서 this를 사용하면, 그 this는 외부에서 값을 가져옴

---

## 배열 (Array)

- 문자 뿐만 아니라, 숫자, 객체, 함수 등로 포함할 수 있음
- length : 배열의 길이
- push() : 배열 끝에 추가
- pop() : 배열 끝 요소 제거
- shift() : 배열 앞에 제거
- unshift() : 배열 앞에 추가
