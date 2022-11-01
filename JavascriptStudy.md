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
      
