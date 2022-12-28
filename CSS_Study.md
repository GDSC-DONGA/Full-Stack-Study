22.10.28
## CSS란?

Cascading Style Sheets의 약자로, **HTML문서를 꾸밀 때** 사용하는 스타일을 잘 정리한 시트(문서)이다.

## CSS 적용 방법

- **인라인 스타일 - Inline Style Sheet**
- **내부 스타일 - Internal Style Sheet**
- **외부 스타일 - External Style Sheet**


### **외부 스타일 - External Style Sheet**

외부 스타일은 CSS 파일을 외부에 정의해 놓고, 외부에 정의한 CSS를 HTML파일에 연결하여 사용하는 것을 말합니다.

- 외부 style.css 파일 정의
    
    ```css
    /* style.css File */
    h1 {
      color: cyan;
    }
    .article {
      border: 1px solid black;
      padding: 30px;
    }
    ```
    
- HTML 파일에서 외부 style.css 파일 연결
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Apply CSS</title>
      <!-- 외부 스타일(External Style)-->
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <!-- 외부 스타일 적용 -->
      <h1>코딩</h1>
      <div class="article">우리는 코딩을 배우고 있어요!</div>
    </body>
    </html>
    ```
22.10.29
## CSS 선택자

### 전체 선택자 (Universal selector)

모든 요소를 선택합니다.

- 문법
    
    `*`
    
### 타입 선택자 (Type selector)

특정 태그 이름을 가진 모든 요소를 선택합니다.

- 문법
    
    `tagname`

### 클래스 선택자 (Class selector)

주어진 class명을 가진 모든 요소를 선택합니다.

- 문법
    
    `.classname`
    
### ID 선택자 (ID selector)

id 속성에 맞는 요소를 선택합니다. id 선택자는 웹 문서에서 **고유한 하나의 태그**에만 사용해야 함. 

- 문법
    
    `#idname`
    
    
### 속성 선택자 (Attribute selector)

주어진 속성을 가진 모든 요소를 검색

- 문법
    
    `[attr]` `[attr=value]` 
    `[attr^=value]`  : <a>태그의 href 속성에 "value" 문자열을 포함하는 요소.
    `[attr$=value]`  : <a>태그의 href 속성이 "value"로 끝나는 요소.
    `[attr*=value]`  : <a>태그의 href 속성에 "value" 문자열을 포함하는 요소.

## 그룹선택자


같은 스타일을 여러 선택자에 한꺼번에 정의할 수 있다.

- 문법
    
    `선택자1, 선택자2 { 스타일 규칙 }`
    
    
## 결합자

### 자손 결합자

- 문법
    
    `A B` A선택자의 하위에 있는 B선택자를 모두 선택함.
    
### 자식 결합자

자식`>` 결합자는 첫 번째 요소의 바로 아래 자식인 태그를 선택\

- 문법
    
    `A > B`

### 일반 형제 결합자

일반 형제`~` 결합자는 형제, 즉 첫 번째 요소를 **뒤따르면서** 같은 **부모를 공유** 하는 두 번째 요소를 선택

- 문법
    
    `A ~ B`

## 글꼴 관련 속성


- `font-family` - 글꼴 종류를 지정. / 기본값 : 웹브라우저 기본 글꼴
    
- `font-size` - 글자 크기를 지정.
- `font-style` - 글자를 이텔릭체로 표시할지 지정.
- `font-weight` - 글자 굵기를 지정.
- `font-variant` - 소문자를 작은 대문자로 바꾸는 속성

## 웹 폰트


사용자의 컴퓨터에 설치된 폰트와 상관 없이 **온라인의 특정 서버에 위치한 폰트 파일**을 다운로드하여 화면에 표시해주는 **웹 전용 폰트**

- 구글 웹 폰트
    
    [Google Fonts](https://fonts.google.com/)
    
    구글 웹 폰트 사이트에 방문하여 `<link>` 또는 `@import` 문을 사용하여 웹 폰트를 적용할 수 있다.

## 단위 em, rem


- `px` : 픽셀 단위
- `rem` : 루트 요소의 글꼴 크기
- `em` : 요소의 글꼴 크기
- `vw` : viewport 너비의 1%  /  50vw = 50프로
- `vh` : viewport 높이의 1%

## 표 관련 속성

- `border-collapse: collapse;` 속성을 사용하여 중복된 테두리를 하나로 합친다.
- `class명 tr:hover {} 마우스가 올라간 행을 스타일


## Box Model

HTML 요소의 박스 모델은 Content, Padding, Border, Margin으로 구성

![image](https://user-images.githubusercontent.com/97269799/198814959-cb760c55-8eed-425e-ad62-2824c28953ca.png

- `Content` - 텍스트나 이미지가 들어있는 HTML 요소의 실직적인 내용
- `Padding` - Content와 Border사이의 영역으로 쉽게 말해 안쪽 여백
- `Border` - Content를 감싸는 테두리
- `Margin` - 테두리와 이웃하는 요소 사이의 간격으로 쉽게 말해 바깥쪽 여백

### Content

- `width` - Content 영역은 `width` 값을 이용하여 가로 너비를 지정할 수 있음.
- `height` - Content 영역은 `height` 값을 이용하여 세로 너비를 지정할 수 있음.
### Padding

- `padding` - `padding` 값을 조절하여 안쪽 여백을 지정할 수 있음.
- `padding-{direction}` - `padding-top` `padding-left` `padding-right` `padding-bottom` 속성을 사용하여 각각 지정할 수도 있음.

### Border

- `border` - `border` 속성을 사용하여 테두리를 설정

### Margin

- `margin` - `margin` 속성을 사용하여 바깥쪽 여백을 지정
- `margin-{direction}` -  `margin-top` `margin-left` `margin-right` `margin-bottom` 속성을 사용하여 각각 지정할 수도 있습니다.

## 테두리 Border

- `border-style`
    - 어떤 형태의 테두리 스타일을 지정할지 나타냄
- `border-width`
    - 테두리 두께를 지정
- `border-color`
    - 테두리 색상을 지정
- `border-radius`
    - 테두리 꼭짓점을 둥글게 만듦
- `border`
    - 단축 속성으로서 다음의 하위 속성을 포함합니다. `border-width` `border-style` `border-color`
    
## Box Sizing


Box Sizing 속성은 HTML요소의 너비와 높이를 **계산하는 방법**을 지정합니다.
- `box-sizing` 값
    - `content-box` - 기본 CSS 박스 크기 결정법 입니다. 요소의 너비를 100px로 설정하면 콘텐츠 영역이 100px 너비를 가지고, 테두리와 안쪽 여백은 이에 더해짐
    - `border-box` - 테두리와 안쪽 여백도 요소의 크기(width, height)로 고려. 너비를 100px로 설정하고 테두리와 안쪽 여백을 추가하면, 콘텐츠 영역이 줄어들어 총 너비 100px을 유지함. 대부분의 경우 이 편이 크기를 조절할 때 쉬움.

## display 속성

`display` 속성은 HTML 요소를 어떻게 표시할지를 결정.
    
### 기본 4가지 값

### `none`  요소를 보이지 않게 설정

### `block` 기본적으로 가로 영역을 모두 채움, block 요소 다음에 등장하는 태그는 줄바꿈이 된 것처럼 보임.
`width`, `height` 속성을 지정 할 수 있다..
    
`div` `p`  `h1~h6` 태그 등이 이에 해당됨

### `inline` 컨텐츠만큼 영역을 차지

block 과 달리 줄 바꿈이 되지 않고, `width`와 `height`를 지정 할 수 없다.

### `inline-block`  **navbar**만들 때 많이 

inline 처럼 컨텐츠 만큼 영역을 차지하여 가로로 배치되지만

block 처럼 내부 속성인 width, height 등과 같은 값을 변경할 수 있다.

## float 속성

`float` 의 사전적인 의미는 '뜨다"라는 뜻
인접한 텍스트 또는 인라인 요소가 그 주위를 자연스럽게 감싸게 함

자주 사용하는 `float` 속성 값은

- `none` - 기본값으로 요소를 띄우지 않음
- `left` - 왼쪽에 띄움
- `right` - 오른쪽에 띄움

### clear 속성

clear는 취소하다 라는 뜻으로 `float: left;` 혹은 `float: right;` 값을 취소

## position 속성


`position` 속성은 HTML 요소를 배치하는 방법을 지정

- `static` (기본값)
    
    static은 요소가 HTML 문서에서 일반적인 흐름을 따라 배치가 되게하며, 기본값이다.
    
- `relative`
    
    `static`과 마찬가지로 요소가 문서의 일반적인 흐름에 따라 배치되게 함. static과 차이점은 요소가 자신의 `static` 위치에서 `top` `right` `bottom` `left`와 같은 속성에 의한 상대적인 위치에 배치된다
    
- `absolute`
    
    `absolute`는 요소가 문서의 일반적인 흐름을 따르지 않게한다. `absolute`는 **position: static 속성을 가지고 있지 않은 부모를 기준**으로 움직입니다. 만약 부모 중에 포지션이 relative, absolute, fixed인 태그가 없다면 가장 위의 태그(body)가 기준이 됩니다.
    
- `fixed`
    
    `fixed` 역시 `absolute`와 마찬가지로 요소가 문서의 일반적인 흐름에서 제거됨. 대신, 스크린의 뷰포트(viewport)를 기준으로 한 위치에 배치. 즉, 스크롤되어도 움직이지 않는 고정된 자리를 갖게 됨
    
- `sticky`
    
    `sticky`는 요소가 HTML 문서안에서 `static`과 같이 일반적인 흐름에 따라가다가 스크롤 위치가 임계점에 이르면 `fixed`와 같이 박스를 화면에 고정할 수 있는 속성
    top 옵션만 적용된다. right left bottom은 안 됨
    
### 관련속성

- `z-index`
    
    어느 HTML 요소가 앞으로 나오고, 뒤에 나올지 배치 순서를 결정하는 속성
    z-index는 position (relative, absolute, fixed)속성이 적용된 요소에서만 작동함.
    수가 높을 수록 앞에 나온다.

## 배경 이미지 스타일

### `background-color`

HTML 요소의 배경 색을 지정합니다.

```css
/* 키워드 값 */
background-color: red;
```

### `background-image`
    HTML요소에 배경 이미지를 한 개 또는 여러 개를 지정할 수 있습니다.

```css
background-image: url("../../media/examples/lizard.png");
background-image: url("../../media/examples/star.png"),
                url("../../media/examples/lizard.png");
```

### `background-attachment`

배경 이미지를 뷰포트 내에서 고정할지 말지를 지정하는 속성입니다.

- scroll : 선택한 요소와 같이 움직입니다. 내용을 스크롤하면 배경 이미지는 스크롤되지 않습니다. (기본값)
- fixed : 움직이지 않습니다.
- local : 선택한 요소와 같이 움직입니다. 내용을 스크롤하면 배경 이미지도 스크롤됩니다.
    
### `background-size`

요소 배경 이미지의 크기를 설정합니다. 그대로 두거나, 늘리고 줄이거나, 공간에 맞출 수 있습니다.

- `contain` - 이미지가 잘리거나 찌그러지지 않는 한도 내에서 제일 크게 설정.
- `cover` - 이미지가 찌그러지지 않는 한도 내에서 제일 크게 설정. 이미지의 가로세로비가 요소와 다르다면 이미지를 세로 또는 가로방향으로 잘라내어 빈 공간이 생기지 않도록 설정합니다. **(많이 사용함)**
    
## 그라데이션 이란

---

그라데이션은 두 가지 이상의 색상이 연결되면서 자연스럽게 보여주는 것을 말합니다. 그라데이션은 크게 선형 그라데이션과 원형 그라데이션이 있습니다.

### 선형 그라데이션

`linear-gradient()` 함수는 두 개 이상의 색상이 직선을 따라 점진적으로 변화하는 것을 말합니다.


## 가상 클래스/요소


### 가상 클래스 (Pseudo class)

가상 클래스(pseudo-class)는 선택하고자 하는 HTML 요소의 특별한 '상태(state)'를 명시할 때 사용합니다.

- 문법
    
    `선택자:가상클래스이름 {속성: 속성값;}`
    
- 예제
    
    ```css
    a:hover {
      color: orange;
    }
    input:focus {
    	color: red;
    }	
    ```
    
- 대표적인 CSS 가상 클래스
    - `:link` - 아직 방문하지 않은 요소를 나타냅니다. href 속성을 가진 `<a>` `<area>` `<link>` 중 방문하지 않은 모든 요소를 선택합니다.
    - `:visited` - 사용자가 방문한 적이 있는 링크를 나타냅니다
    - `:active` - 사용자가 활성화한 요소(버튼 등)를 나타냅니다. (클릭하고 있을 때)
    - `:hover` - 사용자의 마우스 포인터가 요소 위에 올라가 있으면 선택됩니다
    - `:focus` - 양식의 입력 칸 등 포커스를 받은 요소를 나타냅니다. 보통 사용자가 요소를 클릭 또는 탭하거나, 키보드 `Tab` 키로 선택했을 때 발동합니다.
    - `:nth-child` - 형제 사이에서의 순서에 따라 요소를 선택합니다.
    - `:not(selector)` - `not(selector)` 안에 포함된 요소를 제외시키겠다는 뜻입니다.
    
- 대표적인 CSS 가상 요소
    - `::first-letter` - 텍스트의 첫 글자만을 선택합니다. 단, 블록 레벨 요소(block-level-element)에만 사용할 수 있습니다.
    - `::first-line` - 텍스트의 첫 라인만을 선택합니다. 단, 블록 레벨 요소(block-level-element)에만 사용할 수 있습니다.
    - `::before` - 특정 요소의 내용(content) 부분 바로 앞에 다른 요소를 삽입할 때 사용합니다.
    - `::after` - 특정 요소의 내용(content) 부분 바로 뒤에 다른 요소를 삽입할 때 사용합니다.
    - `::selection` - 해당 요소에서 사용자가 선택한 부분만을 선택할 때 사용합니다. (드래그 시)

    
## transform


**`transform`** 속성은 HTML 요소를 **회전**, **크기 조절**, **기울이기**, **이동 효과**를 나타낼 때 사용합니다.
    
    
사용법은 `transform` 속성 값으로 특수한 함수를 넣어주면 됩니다.

```css
/* x축(가로)으로 20px 이동 */
transform: translateX(20px);

/* y축(세로)으로 40px 이동 */
transform: translateY(40px);

/* x축(가로)으로 20px, y축(세로)으로 40px 이동 */
transform: translate(20px, 40px);
```
    
## Transition

transition의 사전적 의미는 "전환"이라는 뜻
    
    
### Transition 속성

- `transition-property`
    
    어떤 속성에 트랜지션 효과를 줄 것인지 지정합니다.
    
    - `transitino-property: <속성1>, <속성2>;` 와 같이 지정할 수 있습니다.
    - `all` : 모든 속성을 지정합니다. (all은 생략 가능합니다.)
    - `none` : 아무것도 지정하지 않습니다.
- `transition-duration`
    
    트랜지션 효과를 몇 초 동안 실행할 것이지 지정합니다.
    
- `transition-delay`
    
    지정한 초 만큼 기다렸다가 실행할 때 사용합니다.
    
- `transition-timing-function`
    
    트랜지션이 시작하면서 끝날때의 타이밍! 즉 속도를 지정하는 것입니다.
    
    - `linear` : 트랜지션의 시작과 끝의 속도가 일정함
    - `ease-in` : 천천히 시작했다가 완료될 때 속도가 증가합니다.
    - `ease-out` : 빨리 시작했다가 완료될 때 속도가 낮아집니다.
    - `transition`
    
    `transition` 단축속성으로 위 속성을 한꺼번에 표기할 수 있습니다.
    
    ```css
    transition: all 2s ease-in;
    
    /* all은 대부분 생략해서 사용합니다. */
    transition: 2s ease-in;
    
    /* 2s실행시간 1s지연시간 */
    transition: 2s 1s ease-in;
    ```

## Animation

CSS 스타일이 변화되는 중간지점을 `키프레임`이라고 합니다. 즉 `@keyframes`은 애니메이션의 중간 상태라고 할 수 있습니다.

## keyframes 정의하기


`@keyframes` 으로 애니메이션을 생성할 수 있습니다.

- from(시작) ~ to(끝) 를 이용한 애니메이션 `shape` 생성
    
```css
@keyframes shape {
    from {
        border: 1px solid transparent;
    }
    to {
        border: 1px solid #000;
        border-radius: 50%;
    }
}
```

## Animation 속성

- `animation-name`
    
    애니메이션의 중간 상태를 지정하기 위한 이름을 정의합니다. 중간 상태는 `@keyframes` 규칙을 이용하여 기술합니다. 
    
    ```css
    animation-name: shape;
    
    @keyframes shape {
    ...
    ```
    
- `animation-duration`
    
    한 싸이클의 애니메이션이 얼마에 걸쳐 일어날지 지정합니다.
    
- `animation-delay`
    
    엘리먼트가 로드되고 나서 언제 애니메이션이 시작될지 지정합니다.
    
- `animation-iteration-count`
    
    애니메이션이 몇 번 반복될지 지정합니다. `infinite` 로 지정하여 무한히 반복할 수 있습니다.
    
## 뷰포트(viewport)


뷰포트란 웹 브라우저에서 실제 내용이 표시되는 영역입니다. 모바일 viewport와 PC의 viewport는 그 크기가 다릅니다. 그렇기 때문에 반응형 웹 에서는 viewport에 맞게 화면을 보여줘야 할 필요가 있습니다.

### 메타 뷰포트 태그 지정하는 법

`<meta name="viewport" content="속성1=값1, 속성2=값2 ......">`

### 메타 뷰포트 태그 속성

- `width` : 뷰포트 가로
- `height` : 뷰포트 세로
- `user-scalable` : 사용자 확대/축소 가능 여부 / no, yes
- `initial-scale` : 초기 화면 비율
- `maximum-scale` : 최대 화면 비율
- `minimum-scale` : 최소 화면 비율

### 일반적인 사용법
    
뷰포트의 너비를 디바이스(스마트폰) 화면 너비에 맞추고 초기화면 배율을 1로 지정

`<meta name="viewport" content="width=device-width, initial-scale=1">`
    
### 뷰포트 단위

- `vw`(viewport width): 뷰포트 너비. 100vw = 뷰포트 width 의 100%
- `vh`(viewport height): 뷰포트 높이. 100vh = 뷰포트 height 의 100%
- `vmin`(viewport minimum): 뷰포트의 너비와 높이 중에서 작은 값.
- `vmax`(viewport maximum): 뷰포트의 너비와 높이 중에서 큰 값.
    
## 미디어 쿼리


접속하는 디바이스나 뷰포트에 따라 특정 CSS 스타일을 사용하는 방법이다.

### 미디어 쿼리 문법

`@media` 키워드를 사용해 특정 미디어(디바이스)에서 어떤 CSS를 적용할 것인지 지정함. 이때 그 특정 구간을 `중단점(breakpoint)`이라고도 한다.
    
### 자주 사용하는 미디어쿼리 조건

- `min-width` : 웹 뷰포트의 최소 너비
- `max-width`: 웹 뷰포트의 최대 너비
    
```css
    @media (min-width: 401px) and (max-width: 400px) {
    body {
    background-color:blue;
        }
    }
```

## flexbox란?


flexbox는 뷰포트나 요소의 크기가 불명확하거나 동적으로 변할 때에도 효율적으로 **HTML 요소를 배치, 정렬, 분산할 수 있는 방법을 제공하는 CSS3의 새로운 레이아웃 방식**이다.


## flexbox 구성


`flexbox`는 우리가 배치하고 싶은 HTML 요소인 `flex item`과 이것을 감싸고 있는 상위 부모 요소인 `flex container`로 구성된다.

### flexbox 만들기


```css
/* 일반적으로 display: flex를 지정한다. */
.flex-container {
	display: flex;
}
```

위 코드처럼 `display: flex` 속성이 적용된 요소는 flex container가 되고, flex container의 자식 요소는 flex item이 된다.

## flexbox 주축


flex item은 주축(main axis)에 따라 **정렬**된다.
![image](https://user-images.githubusercontent.com/97269799/198953179-1ccbac23-3bc8-4893-8697-589b0b0d41ec.png)
	
### flex container

전체적인 정렬이나 흐름에 관련된 속성은 flex container에 정의한다.

- `display`
- `flex-direction`
- `flex-wrap`
- `flex-flow`
- `justify-content` : flex container의 main axis를 기준으로 flex item을 수평 정렬한다.
- `align-items`  : flex item을 flex container의 수직 방향(cross axis)으로 정렬한다
- `align-content` : flex container의 cross axis를 기준으로 flex item을 수직 정렬한다.

### flex item

자식 요소의 크기나 순서에 관련된 속성은 flex item에 정의한다.

- `flex`
- `flex-grow`  : flex item의 너비에 대한 확대 인자를 지정한다
- `flex-shrink`  : flex item의 너비에 대한 축소 인자를 지정한다
- `flex-basis`
- `order`  : flex item의 배치 순서를 지정한다(자주사용 X)
- `align-self`  : 개별 flex item을 정렬한다
