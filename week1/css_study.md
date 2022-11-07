## CSS

- CSS : Cascading Style Shhets
- CSS 적용 방법
  - 인라인 스타일
  - 내부 스타일
  - 외부 스타일 (선호)
- CSS 출처
  - 제작자 스타일
  - 사용자 스타일
  - 브라우저 스타일

* 출처 적용 우선순위
  - 사용자 !important > 제작자 !important > 제작자 > 사용자 > 브라우저

---

## Selector (선택자)

- 기본선택자

  - 전체 선택자
  - Type 선택자
  - Class 선택자(.)

  * ID 선택자(#) : 고유 해야함

  - 속성선택자

    - [attr] : 속성이 존재하는 요소
    - [attr=value] : 속성 값과 일치하는
    - [attr~=value] : 속성에 단어가 포함하는
    - [attr|=value]
    - [attr^=value] : 속성 값으로 시작하는
    - [attr$=value] : 속성 값으로 끝나는
    - [attr*=value] : 속성 값을 포함하는

- 그룹선택자
  - 선택자1, 선택자2 { 스타일 규칙 }

* 결합자
  - 자손 결합자 : A B
  - 자식 결합자 : A > B
  - 일반 형제 결합자 : A ~ B
  - 인접 형제 결합자 : A + B

---

## CSS 속성 - 폰트

- 글꼴 관련 속성
  - font-family : 글꼴 종류 지정
  - font-size : 글자 크기 지정
  - font-style : 글자 이텔릭체로 표시
  - font-weight : 글자 굵기 지정
  - font-variant : 소문자를 작은 대문자로

* 웹 폰트 : 온라인 특정 서버에 위치한 폰트 파일로 표시해주는 웹 전용 폰트
  - `<link>` 또는 @import문을 사용하여 웹 폰트 적용

- 단위
  - px : 픽셀 단위
  - rem : 루트 요소의 글꼴 크기
  - em : 요소의 글꼴 크기
  - vw : viewport 너비의 1%
  - vh : viewport 높이의 1%

* 글자 색상
  - color 속성으로 지정
  - 색상 지정 방법
    - 색상 키워드 표기법
    - RGB/RGBA 표기법
    - 16진수 표기법
    - hsl/hsla 표기법

---

## CSS 속성 - Table

- 표 관련 속성
  - `<table>` 태그에 border 속성을 활용해 테두리
  - border-collapse: collapse; 속성을 사용해 중복된 테두리를 하나로 합침

---

## Box Model

- Content : HTML 요소의 실질적인 내용

  - width, height로 조정
  - 인라인 레벨 요소는 width, height가 적용되지 X

- Padding : 안쪽 여백

- Border : Content를 감싸는 테두리

  - 속성
    - border
    - border-width
    - border-style
    - border-color
    - border-radius

- Margin : 바깥쪽 여백
  - 속성
    - margin-top
    - margin-bottom
    - margin-left
    - margin-right
  * 마진 중첩
    - margin과 margin이 만날 때 margin 값이 큰 쪽으로 겹쳐지는 것
    - 요소를 가로로 배치할 경우에는 상관X, 세로로 배치할 경우에는 값이 큰 margin만 적용됨

* box-sizing 속성 : 너비와 높이를 계산하는 방법 지정
  - 속성 값
    - content-box
    - border-box

---

## CSS 속성 - Display

- HTML 요소를 어떻게 표시할지를 결정
- 속성 값
  - none : 요소를 보이지 않게, 영역 차지X
  - block : 가로 영역을 모두 채움
  - inline : 컨텐츠만큼 영역 차지
  - inline-block : 요소는 inline인데 내부는 block처럼 표시
    - inline처럼 컨텐츠 만큼 영역 차지하여 가로로 배치되지만
    - block처럼 내부 속성인 width, height 등과 값은 값을 변경할 수 있음

---

## CSS 속성 - Float

- 인접하는 텍스트 또는 인라인 요소가 그 주위를 자연스럽게 감싸게 함
- 속성 값
  - none : 기본적으로 요소를 띄우지 않음
  - left
  - right
  - inherit : 부모 요소로부터 상속
  - initial : 기본값으로 설정

* clear 속성
  - 취소하다 라는 뜻, float: left; 혹은 float: right; 값을 취소함
  * clear: none;
  * clear: left;
  * clear: right;
  * clear: both;

---

## CSS 속성 - Position

- HTML 요소를 배치하는 방법을 지정
- 속성 값
  - static (기본값) : 일반 흐름 배치
  - relative : 일반 흐름배치 / top, right, bottom, left 와 같은 속성에 의한 상대적인 위치에 배치됨
  - absolute : 일반 흐름 배치X
  - fixed : 일반 흐름 배치X, 스크린의 viewpoint를 기준으로 한 위치에 배치됨
  - sticky : 일반 흐름 배치, 스크롤 위치가 임계점에 이르면 fixed와 같이 박스를 화면에 고정함

* z-index 속성
  - 어느 객체가 앞으로 나오고, 뒤에 나올지 배치 순서를 결정하는 속성
  - position(relative, absolute, fixed) 속성이 적용된 요소에만 작동함

---

## Background

- background-color : 배경색 지정
- background-image : 배경 이미지를 한 개 이상 지정
- background-repeat : 배경 이미지의 반복 방법을 지정
  - repeat : 가로, 세로 반복
  - no-repeat
  - repeat-x
  - repeat-y
- background-position : 배경 이미지의 초기 위치를 설정
- background-attachment : 배경 이미지를 뷰포트 내에서 고정할지 말지를 지정
  - scroll
  - fixed
  - local : 선택한 요소와 같이 움직임, 스크롤하면 배경 이미지 같이 움직임
  - initial
  - inherit : 부모 요소의 속성값을 상속받음
- background-size : 배경 이미지의 크기를 설정
  - contain
  - cover (많이 사용)
  - auto
  - `<length>`
  - `<percentage>`  
    <br>

* 그라데이션 : 두 가이 이상의 색상이 연결되면서 자연스럽게 보여주는 것
  - 선형 그라데이션
    - linear-gradient() : 두 개 이상의 색상이 직선을 따라 점진적으로 변화
      - to : 방향 결정
      - deg : 각도값 지정
  - 원형 그라데이션

---

## Pseudo Class&Element

- Pseudo Class (가상클래스)
  - 선택하고자 하는 HTML 요소의 특별한 상태를 명시할 때 사용
  - 선택자:가상클래스이름 {속성: 속성값;}
- 대표적인 CSS 가상클래스

  - :link - 아직 방문하지 않은 요소
  - :visited - 사용자가 방문한적 있는 링크
  - :active - 사용자가 활서오하한 요소(버튼 등)
  - :hover - 사용자의 마우스 포인터가 요소 위에 있을 때 선택됨
  - :focus - 양식의 입력 칸 등 포커스를 받은 요소 나타냄
  - :nth-child - 형제 사이에서의 순서에 따라 요소 선택
  - :not(selector) - not(selector) 안에 포함된 요소를 제외시킴

- Pseudo element (가상요소)
  - 해당 HTML 요소의 특정 부분만을 선택할 때 사용
  - 선택자::가상요소이름 {속성: 속성값;}
- 대표적인 CSS 가상 요소
  - ::first-letter - 텍스트의 첫 글자만 선택, 블록 레벨 요소에만
  - ::first-line - 텍스트의 첫 라인만 선택, 블록 레벨 요소에만
  - ::before
  - ::after
  - ::selection - 사용자가 선택한 부분만을 선택할 때

---

## CSS 속성 - Transform

- HTML 요소를 회전, 크기 조절, 기울이기, 이동 효과를 나타낼 때 사용
- 속성 값으로 특수한 함수를 넣어 사용
- transform 함수
  - translate(tx, ty) : 지정한 크기만큼 x축, y축으로 이동
  - translateX(tx)
  - translateY(ty)
  - scale(sx, sy) : 지정한 크기만틈 x축과 y축으로 확대,축소함
  - scaleX(sx)
  - scaleY(sy)
  - rotate(각도) : 지정한 각도만큼 회전 (+:시계방향, -:반시계반향)
  - rotateX(각도)
  - rotateY(각도)
  - rotataeZ(각도)
  - skew(ax, ay) : 지정한 각도만큼 x축과 y축으로 왜곡
  - skewX(ax)
  - skewY(ay)

---

## CSS 속성 - Transition

- 속성 값이 변할 때 더욱더 부드럽게 전환할 수 있도록 도와줌
- transition 속성
  - transition-property
    - transition-property: <속성1>, <속성2>;
    - all
    - none
  - transition-duration
  - transition-delay
  - transition-timing-function
  - linear
  - ease-in : 완료될 때 속도 증가
  - ease-out : 완료될 때 속도 낮아짐
  - transition

---

## Animation

- keyframes 정의하기

  - @keyframes으로 애니메이션을 생성
    - from(시작)~to(끝)를 이용한 애니메이션 shape 생성
    - from~{percent}~to를 이용한 애니메이션 background 생성

- Animation 속성
  - animation-name
  - animation-duration
  - animation-delay
  - animation-iteration-count : 몇 번 반복될지
  - animation-play-state
  - animation-timing-function : 중간 상태들의 전환을 어떤 시간간격으로 진행할지
  - animation-fill-mode : 시작되기 전이나 끝나고 난 후 어떤 값이 적용될지
  - animation

---

## 반응형 웹 사이트

- 웹 사이트에서 PC화면 뿐만 아니라 여러가지 디바이스의 해상도에 반응하여 각각에 맞는 최적의 화면을 보여주는 홈페이지
- 뷰포트(viewport)
  - 웹 브라우저에서 실제 내용이 표시되는 영역
  - 뷰포트 메타태그
  - 메타 뷰포트 태그 지정하는 법
    - `<meta name="viewport" content="속성1=값1, 속성2=값2 ...... >`
  - 메타 뷰포트 태그 속성
    - width
    - height
    - user-scaleable
    - initial-scale
    - maximum-scale
    - minimum-scale
  * 뷰포트 단위
    - vw
    - vh
    - vmin
    - vmax

* 미디어 쿼리
  - 접속하는 디바이스나 뷰포트에 따라 특정 CSS 스타일을 사용하는 방법
  - @media [only | not] 미디어 유형 [and 조건] \* [and 조건]

---

## Flexbox

- 뷰포트나 요소의 크기가 불명확하거나 동적으로 변할 때에도 효율적으로 요소를 배치, 정렬, 분산할 수 있는 방법을 제공하는 CSS3의 새로운 레이아웃 방식
- 구성
  - flex container : 전체적인 정렬이나 흐름 관련
    - diaplay
    - flex-direction
    - flex-wrap
    - flex-flow
    - justify-content
    - align-items
    - align-content
  - flex item : 자식 요소의 크기나 순서에 관련
    - flex
    - flex-grow
    - flex-shrink
    - flex-basis
    - order
    - align-self
- display: flex
- flexbox 주축
  - flex-direction 속성으로 결정됨 (기본값 row)
  - row : 주축의 방향이 왼->오
  - column : 주축의 방향이 위->아래
