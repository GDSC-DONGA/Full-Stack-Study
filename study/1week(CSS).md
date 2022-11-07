# css

## css란
- Cascading Style Sheets

### 구조
- 선택자(태그)와 속성명 속성값으로 이루어짐
-  선택자{속성명:속성값}

### 적용법
- 인라인 스타일 - Inline Style Sheet
  - 태그안에 style을 적용
  - ' ; '을 이용하여 여러 style 적용가능
  - 현업에서는 잘 사용하지 않음
- 인터널 스타일 - Internal Style Sheet
  - head태그안에 style태그를 사용하여 style규칙을 선언한다. 
  - 현업에서는 잘 사용하지 않음
- 외부 스타일 - External Style Sheet
  - 외부에 css파일을 생성한다.
  - style태그없이 style 바로 규칙을 정한다.
  - head태그 안에 링크태그 선언 ex(link rel="stylesheet" href="./style.css")

## 선택자

### 기본선택자
- 전체 선택자 (*)
  - 브라우저 가지고 있는 기본 style을 초기화 할 떄 사용
- Type 선택자 (타입이름)
  - 태그의 style 설정
- Class 선택자 (.)
  - class의 style을 설정 (class명에 스타일형식을 암시하게 만드는게 좋다)
- ID 선택자ㅍ(#)
  - id의 style을 설정
  - id는 고유해야 한다. 
- 속성 선택자(태그[속성], [속성])
  - 태그에 속성이 있으면 style적용
  - 사용방법
    - 속성이 존재하는 요소
      - h2[class] { ~ }
      - [target] { ~ }
    - 속성 값과 일치하는 요소
      - h2[class = ' 속성값 ' ] { ~ }
    - 속성 값을 포함하는 요소
      - a[href *= ' 속성값 ' ] { ~} 
    - 속성 값으로 시작하는 요소
      - h2[class^=' 속성값 ']{} 
    - 속성 값으로 끝나는 요소
      - a[href$=" 속성값 "]{}
    - 속성에 단어를 포함하는 요소 
      - h2[class~=' 단어 '] {}
  
### 그룹선택자
선택자를 쉼표(,)로 구분해 여러 선택자를 나열함.
같은 스타일을 여러 선택자에 한꺼번에 정의할 수 있다.

## 결합자
### 자손 결합자
자손 (공백) 결합자는 첫 번째 요소의 자손인 태그를 선택합니다.
- 문법    
    `A B` A선택자의 하위에 있는 B선택자를 모두 선택함.   

### 자식 결합자
자식`>` 결합자는 첫 번째 요소의 바로 아래 자식인 태그를 선택합니다.
- 문법    
    `A > B`
    
### 일반 형제 결합자
일반 형제`~` 결합자는 형제, 즉 첫 번째 요소를 **뒤따르면서** 같은 부모를 공유하는 두 번째 요소를 선택합니다.
- 문법
    `A ~ B`

### 인접 형제 결합자
인접 형제`+` 결합자는 형제, 즉 첫 번째 요소의 **바로 뒤에** 위치하면서 같은 부모를 공유하는 두 번째 요소를 선택합니다.
- 문법
    `A + B`

## 글꼴

### 글꼴 관련 속성 
- `font-family` - 글꼴 종류를 지정합니다.
    기본값 : 웹브라우저 기본 글꼴
- `font-size` - 글자 크기를 지정합니다.
- `font-style` - 글자를 이텔릭체로 표시할지 지정합니다.
- `font-weight` - 글자 굵기를 지정합니다.
- `font-variant` - 소문자를 작은 대문자로 바꾸는 속성

### 웹 폰트
사용자의 컴퓨터에 설치된 폰트와 상관 없이 **온라인의 특정 서버에 위치한 폰트 파일**을 다운로드하여 화면에 표시해주는 **웹 전용 폰트**입니다.
구글 웹 폰트 사이트에 방문하여 `<link>` 또는 `@import` 문을 사용하여 웹 폰트를 적용할 수 있다.

### 단위 em, rem
- `px` : 픽셀 단위
- `rem` : 루트 요소의 글꼴 크기
- `em` : 요소의 글꼴 크기
- `vw` : viewport 너비의 1%
- `vh` : viewport 높이의 1%

## 글자 색상
글자 색상은 `color` 속성으로 지정하며 색상 값으로는 `16진수 값` `rgb 값` `hsl 값` `색상 이름`이 사용된다.
### `RGB/RGBA` 표기법
RGB 색상 모델은 빨강, 초록, 파랑을 통해 특정 색을 표현합니다. **선택사항으로 색의 투명도**를 알파 채널로 표현할 수 있습니다. 함수형 표기법(`rgb()`, `rgba()`)으로 표현할 수 있습니다.
- 예시
    rgb(0,0,0), rgba(0,0,0,0)
    
### `16진수` 표기법
RGB 색상 모델은 빨강, 초록, 파랑을 통해 특정 색을 표현합니다. 선택사항으로 색의 투명도를 알파 채널로 표현할 수 있습니다. # 뒤의 16진수 표기법으로 표현할 수 있습니다.
- 예시
    #ff0000, #ff00ff, #808000 등 16진수
    
## 그 외 글자 관련 속성
- `text-align` 
    블록 요소(block element), 테이블 셀 박스(table-cell box)안에서 글자를 가로 정렬 하는 데 사용합니다.
    값 으로는 `left`, `right`, `center`키워드가 올 수 있습니다.
- `line-height`
    줄 간격을 설정합니다.
- `letter-spacing`
       글자 사이의 간격
## Box Model
모든 HTML 요소는 웹 페이지에서 일정 공간을 차지하게 됩니다. 그리고 이러한 공간을 CSS에서는 박스 모델(Box Model)로 정의하고 있습니다.

HTML 요소의 박스 모델은 Content, Padding, Border, Margin으로 구성되어 있습니다.
 ![image](https://user-images.githubusercontent.com/100742454/199740700-3fa0e642-099a-4cd5-8be3-f8fbd70ab59a.png)
 
 ### Content
- `width` - Content 영역은 `width` 값을 이용하여 가로 너비를 지정할 수 있습니다.
- `height` - Content 영역은 `height` 값을 이용하여 세로 너비를 지정할 수 있습니다.

### Padding
- `padding` - `padding` 값을 조절하여 안쪽 여백을 지정할 수 있습니다.
- `padding-{direction}` - `padding-top` `padding-left` `padding-right` `padding-bottom` 속성을 사용하여 각각 지정할 수도 있습니다.
    
### Border
- `border` - `border` 속성을 사용하여 테두리를 설정할 수 있습니다.

### Margin
- `margin` - `margin` 속성을 사용하여 바깥쪽 여백을 지정할 수 있습니다.
- `margin-{direction}` -  `margin-top` `margin-left` `margin-right` `margin-bottom` 속성을 사용하여 각각 지정할 수도 있습니다.

### Box Sizing
Box Sizing 속성은 HTML요소의 너비와 높이를 **계산하는 방법**을 지정합니다.
CSS 박스 모델에서 지정한 너비(width)와 높이(height)는 HTML 요소의 Content크기에 적용됩니다. 요소에 테두리(Border)나 안쪽 여백(Padding)이 있으면 너비와 높이에 더해서 화면에 그립니다. 따라서 크기를 설정할 때 원하는 크기를 얻으려면 테두리나 안쪽 여백을 고려해야 합니다.
이때 `box-sizing` 속성을 사용해 이 방식을 변경할 수 있습니다.
- `box-sizing` 값
    - `content-box` - 기본 CSS 박스 크기 결정법 입니다. 요소의 너비를 100px로 설정하면 콘텐츠 영역이 100px 너비를 가지고, 테두리와 안쪽 여백은 이에 더해집니다.
    - `border-box` - 테두리와 안쪽 여백도 요소의 크기(width, height)로 고려합니다. 너비를 100px로 설정하고 테두리와 안쪽 여백을 추가하면, 콘텐츠 영역이 줄어들어 총 너비 100px을 유지합니다. 대부분의 경우 이 편이 크기를 조절할 때 쉽습니다.
  
  ### 테두리 Border

CSS `border` `border-width` `border-style` `border-color` 속성으로 요소의 테두리를 설정합니다.

- `border-style`
    - 어떤 형태의 테두리 스타일을 지정할지 나타냅니다.
    - 4개 방향의 값을 한꺼번에 지정할 때는 방향 순서를 지켜야 합니다. top → right → bottom → left
    - 테두리 스타일 종류 [MDN](https://developer.mozilla.org/ko/docs/Web/CSS/border-style)

- `border-width`
    - 테두리 두께를 지정합니다.
    - 값으로 `<크기>` 또는 키워드 `thin` `medium` `thick` 가 올 수 있습니다.

- `border-color`
    - 테두리 색상을 지정합니다.

- `border`
    - 단축 속성으로서 다음의 하위 속성을 포함합니다. `border-width` `border-style` `border-color`
    - 즉, 테두리 두께, 스타일, 색상을 한꺼번에 표기할 수 있습니다.
    - `border-top` `border-right` `border-left` `border-bottom` 을 사용하여 스타일을 각각 지정할 수 있습니다.

- `border-radius`
    - 테두리 꼭짓점을 둥글게 만듭니다.

### 바깥 여백 Margin
- `margin` 속성은 HTML 요소의 바깥 여백을 지정합니다.
- `margin-top` `margin-bottom` `margin-left` `margin-right` 속성을 사용하여 각각 지정할 수도 있습니다.
   
### 마진 중첩
HTML 요소를 세로로 배치할 경우 `margin`과 `margin`이 만날 때 `margin` 값이 큰 쪽으로 겹쳐지는 것. 요소를 가로로 배치할 경우에는 상관없지만 세로로 배치할 경우에는 값이 큰 `margin`만 적용 된다.

### 안쪽 여백 Padding
- `padding` 속성은 HTML 요소의 안쪽 여백을 지정합니다.
- `padding-top` `padding-bottom` `padding-left` `padding-right` 속성을 사용하여 각각 지정할 수도 있습니다.

## display 속성
`display` 속성은 HTML 요소를 어떻게 표시할지를 결정합니다.
HTML 요소마다 기본적으로 갖고 있는 display 속성 값이 다른데요.
이 기본값이 `display: block` 이면 Block Level Element 이며, `display: inline` 일 경우 Inline Level Element 입니다.
그리고 display 속성은 주로 4가지 속성 값이 쓰입니다.

### `none`
요소를 보이지 않게 설정합니다. `visibility` 속성을 `hidden`으로 설정한 것과 달리, 영역도 차지하지 않습니다.

### `block`
기본적으로 가로 영역을 모두 채우며, block 요소 다음에 등장하는 태그는 줄바꿈이 된 것처럼 보입니다. 문서에서 문단을 표시할 때 주로 사용합니다.
`width`, `height` 속성을 지정 할 수 있습니다.
`div` `p`  `h1~h6` 태그 등이 이에 해당됩니다.

### `inline`
컨텐츠만큼 영역을 차지합니다. 
block 과 달리 줄 바꿈이 되지 않고, `width`와 `height`를 지정 할 수 없습니다.
word 같은 문서에서 볼드, 이탤릭, 색상, 밑줄 등 글자나 문장에 효과를 주기 위해 존재하는 단위라고 할 수 있습니다.

### `inline-block`
block과 inline의 중간 형태로 요소는 inline인데 내부는 block처럼 표시함
inline 처럼 컨텐츠 만큼 영역을 차지하여 가로로 배치되지만
block 처럼 내부 속성인 width, height 등과 같은 값을 변경할 수 있습니다. 


### float 속성
`float` 의 사전적인 의미는 '뜨다"라는 뜻입니다.
만약 HTML 요소에 float이 적용되면 HTML 요소는 원래의 흐름에서 벗어나 둥둥 떠다니듯 배치가 됩니다.
그리하여 인접한 텍스트 또는 인라인 요소가 그 주위를 자연스럽게 감싸게 합니다. 
자주 사용하는 `float` 속성 값은
- `none` - 기본값으로 요소를 띄우지 않음
- `left` - 왼쪽에 띄움
- `right` - 오른쪽에 띄움
- `inherit` - 부모 요소로부터 상속함
- `initial` - 기본값으로 설정함
-
### clear 속성
clear는 취소하다 라는 뜻으로 `float: left;` 혹은 `float: right;` 값을 취소합니다.
- `clear: none;` - 기봇값
- `clear: left;` - 왼쪽을 취소
- `clear: right;` - 오른쪽을 취소
- `clear: both;` - 왼쪽 오른쪽 둘다 취소


## position 속성
`position` 속성은 HTML 요소를 배치하는 방법을 지정합니다.
- `static` (기본값)
    static은 요소가 HTML 문서에서 일반적인 흐름을 따라 배치가 되게하며, 기본값이다.
- `relative`
    `static`과 마찬가지로 요소가 문서의 일반적인 흐름에 따라 배치되게 합니다. static과 차이점은 요소가 자신의 `static` 위치에서 `top` `right` `bottom` `left`와 같은 속성에 의한 상대적인 위치에 배치된다는 점입니다.
- `absolute`
    `absolute`는 요소가 문서의 일반적인 흐름을 따르지 않게한다. `absolute`는 **position: static 속성을 가지고 있지 않은 부모를 기준**으로 움직입니다. 만약 부모 중에 포지션이 relative, absolute, fixed인 태그가 없다면 가장 위의 태그(body)가 기준이 됩니다.
- `fixed`
    `fixed` 역시 `absolute`와 마찬가지로 요소가 문서의 일반적인 흐름에서 제거됩니다. 대신, 스크린의 뷰포트(viewport)를 기준으로 한 위치에 배치됩니다. 즉, 스크롤되어도 움직이지 않는 고정된 자리를 갖게 됩니다.
- `sticky`
    `sticky`는 요소가 HTML 문서안에서 `static`과 같이 일반적인 흐름에 따라가다가 스크롤 위치가 임계점에 이르면 `fixed`와 같이 박스를 화면에 고정할 수 있는 속성입니다.
    - top속성을 적용해야 스크롤 임계점에서 고정이됨.
    - left, right, bottom 속성을 사용할 수 없음.
   
### 위치 속성
position 속성이 배치하는 방법이라면 top left bottom right 속성은 요소를 원하는 곳으로 최종적으로 위치 시키는 속성이다. 이 속성은 `position: static;` 에서는 적용되지 않는다.
- `top`
- `left`
- `bottom`
- `right`

## 배경 이미지 스타일

### `background-color`
HTML 요소의 배경 색을 지정합니다.

### `background-image`
HTML요소에 배경 이미지를 한 개 또는 여러 개를 지정할 수 있습니다.

### `background-repeat`
배경 이미지의 반복 방법을 지정합니다. 가로축 및 세로축을 따라 반복할 수 있고, 아예 반복하지 않을 수도 있습니다.
- `repeat` - 가로, 세로 반복
- `no-repeat` - 반복하지 않음
- `repeat-x` - 가로 반복
- `repeat-y` - 세로 반복

### `background-posiiton`
배경 이미지의 초기 위치를 설정합니다.
```css
/* <percentage> values */
background-position: 25% 75%;
/* Edge offsets values */
background-position: bottom 10px right 20px;
```

### `background-attachment`
배경 이미지를 뷰포트 내에서 고정할지 말지를 지정하는 속성입니다.
- scroll : 선택한 요소와 같이 움직입니다. 내용을 스크롤하면 배경 이미지는 스크롤되지 않습니다. (기본값)
- fixed : 움직이지 않습니다.
- local : 선택한 요소와 같이 움직입니다. 내용을 스크롤하면 배경 이미지도 스크롤됩니다.
- initial : 기본값으로 설정합니다.
- inherit : 부모 요소의 속성값을 상속받습니다.

```css
/* 키워드 값 */
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;

/* 전역 값 */
background-attachment: inherit;
background-attachment: initial;
background-attachment: unset;
```

### `background`
`background-image` `background-repeat` `background-position` `background-attachment` 속성을 한꺼번에 선언할 수 있습니다.
보통 이렇게 `backgound` 속성으로 많이 사용합니다.
### `background-size`
요소 배경 이미지의 크기를 설정합니다. 그대로 두거나, 늘리고 줄이거나, 공간에 맞출 수 있습니다.
- `contain` - 이미지가 잘리거나 찌그러지지 않는 한도 내에서 제일 크게 설정.
- `cover` - 이미지가 찌그러지지 않는 한도 내에서 제일 크게 설정. 이미지의 가로세로비가 요소와 다르다면 이미지를 세로 또는 가로방향으로 잘라내어 빈 공간이 생기지 않도록 설정합니다. (많이 사용함)
- `auto` -  배경 이미지의 원본 크기를 유지.
- `<length>` - 원본 크기의 너비/높이를 주어진 값으로 늘리거나 줄임. 음수는 유효하지 않습니다.
- `<percentage>` - 배경 위치 지정 영역의 지정된 백분율에 해당하는 크기로 이미지를 늘립니다.
- 
## 그라데이션 이란
그라데이션은 두 가지 이상의 색상이 연결되면서 자연스럽게 보여주는 것을 말합니다. 그라데이션은 크게 선형 그라데이션과 원형 그라데이션이 있습니다.

### 선형 그라데이션
`linear-gradient()` 함수는 두 개 이상의 색상이 직선을 따라 점진적으로 변화하는 것을 말합니다.
- `to` 키워드를 사용하여 방향을 결정 할 수 있다.
- `deg` 키워드를 사용하여 각도값을 지정할 수 있다.
    ```css
    background: linear-gradient(#e66465, #9198e5);
    background: linear-gradient(to bottom, white, blue);
    background: linear-gradient(45deg, white, blue);
    background: linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%);
    ```
### 원형 그라데이션
- 타원형
    `radial-gradient()` 함수를 사용하여 타원형 그라데이션을 만들 수 있다. 
    ```css
    background: radial-gradient(white, yellow, red);
   ```
- 정원
    `radial-gradient(circle)` 함수를 사용하여 타원형 그라데이션을 만들 수 있다.
    ```css
    background: radial-gradient(circle at 20% 20%, white, yellow, red);
    ```
 
## 가상 클래스/요소
### 가상 클래스 (Pseudo class)
가상 클래스(pseudo-class)는 선택하고자 하는 HTML 요소의 특별한 '상태(state)'를 명시할 때 사용합니다.
- 문법
    `선택자:가상클래스이름 {속성: 속성값;}`       
- 대표적인 CSS 가상 클래스
    - `:link` - 아직 방문하지 않은 요소를 나타냅니다. href 속성을 가진 `<a>` `<area>` `<link>` 중 방문하지 않은 모든 요소를 선택합니다.
    - `:visited` - 사용자가 방문한 적이 있는 링크를 나타냅니다
    - `:active` - 사용자가 활성화한 요소(버튼 등)를 나타냅니다.
    - `:hover` - 사용자의 마우스 포인터가 요소 위에 올라가 있으면 선택됩니다
    - `:focus` - 양식의 입력 칸 등 포커스를 받은 요소를 나타냅니다. 보통 사용자가 요소를 클릭 또는 탭하거나, 키보드 `Tab` 키로 선택했을 때 발동합니다.
    - `:nth-child` - 형제 사이에서의 순서에 따라 요소를 선택합니다. [MDN](https://developer.mozilla.org/ko/docs/Web/CSS/:nth-child)
    - `:not(selector)` - `not(selector)` 안에 포함된 요소를 제외시키겠다는 뜻입니다.

대표적인 가상 클래스를 사용할 때는 link → visited → hover → active 순으로 선언하여 사용하길 권장합니다. 왜냐하면 순서가 달라지면 적용이 안될 수도 있습니다.


### 가상 요소 (Pseudo element)
가상 요소(pseudo-element)는 해당 HTML 요소의 특정 부분만을 선택할 때 사용합니다.
- 문법   
    `선택자::가상요소이름 {속성: 속성값;}
- 예시   
    ```css
    /* 모든 p 요소의 첫 번째 줄. */
    p::first-line {
      color: blue;
      text-transform: uppercase;
    }
    ```    
- 대표적인 CSS 가상 요소
    - `::first-letter` - 텍스트의 첫 글자만을 선택합니다. 단, 블록 레벨 요소(block-level-element)에만 사용할 수 있습니다.
    - `::first-line` - 텍스트의 첫 라인만을 선택합니다. 단, 블록 레벨 요소(block-level-element)에만 사용할 수 있습니다.
    - `::before` - 특정 요소의 내용(content) 부분 바로 앞에 다른 요소를 삽입할 때 사용합니다.
    - `::after` - 특정 요소의 내용(content) 부분 바로 뒤에 다른 요소를 삽입할 때 사용합니다.
    - `::selection` - 해당 요소에서 사용자가 선택한 부분만을 선택할 때 사용합니다.

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
> 주의사항
  >`transform`을 사용하려면 해당 요소의 `display` 속성이 `block` 또는 `inline-block` 이어야 합니다.
## transform 함수
- `translate(tx, ty)`    
    지정한 크기만큼 x축, y축으로 이동합니다.    
- `translateX(tx)`   
    지정한 크기만큼 x축으로 이동합니다.    
- `translateY(ty)`    
    지정한 크기만큼 y축으로 이동합니다.  
- `scale(sx, sy)`  
    지정한 크기만큼 x축과 y축으로 확대·축소합니다.    
- `scaleX(sx)`   
    지정한 크기만큼 x축으로 확대·축소합니다.   
- `scaleY(sx)`   
    지정한 크기만큼 y축으로 확대·축소합니다.   
- `rotate(각도)`  
    지정한 각도만큼 회전합니다. (`+`시계방향, `-`시계반대방향)    
- `rotateX(각도)`   
    x축을 기준으로 회전합니다. 이때 입체감 있게 표현하려면 `perspective` 속성을 **부모 요소**에 적용해야 합니다.   
- `rotateY(각도)`    
    y축을 기준으로 회전합니다. 이때 입체감 있게 표현하려면 `perspective` 속성을 **부모 요소**에 적용해야 합니다.   
- `rotateZ(각도)`  
    z축을 기준으로 회전합니다. 이때 입체감 있게 표현하려면 `perspective` 속성을 **부모 요소**에 적용해야 합니다.   
- `skew(ax, ay)`  
    지정한 각도만큼 x축과 y축으로 왜곡합니다.    
- `skewX(ax)`   
    지정한 각도만큼 x축으로 왜곡합니다.   
- `skewY(ax)`    
    지정한 크기만큼 y축으로 왜곡합니다.

## Transition
transition의 사전적 의미는 "전환"이라는 뜻 입니다. CSS에서 transition은 속성 값이 변할 때 더욱더 부드럽게 전환할 수 있도록 도와준다 라고 보시면 될 것 같습니다.
예를들면 100x100 사과 이미지에 마우스를 올려놓으면 사과 이미지를 200x200으로 변환 한다라고 했을 때 한번에 딱! 변하는 것보다 서서히~ 스무스하게~ 변하는게 더 아름다워 보일 것 입니다. Transition은 이러한 작업을 도와줍니다.

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
## Animation

---

요소에 적용되는 CSS 스타일을 다른 CSS 스타일로 부드럽게 전환시켜 주는것을 말합니다. 이때 CSS 스타일이 변화되는 중간지점을 `키프레임`이라고 합니다. 즉 `@keyframes`은 애니메이션의 중간 상태라고 할 수 있습니다.

애니메이션은 트랜지션보다 훨씬 더 규모가 크고 복잡하며 다양한 능력을 가지고 있기 때문에 좀 더 정밀한 효과를 구현할 수 있습니다.

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
- from ~ {percent} ~ to 를 이용한 애니메이션 `background` 생성    
    ```css
    @keyframes background {
    	from { background-color: red; }
    	50% { background-color: green; } /* percentage로 중간 스타일을 적용 */
    	to { background-color: blue; }
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
    엘리먼트가 로드되고 나서 언제 애니메이션이 시작될지 지정합니다    
- `animation-iteration-count`    
    애니메이션이 몇 번 반복될지 지정합니다. `infinite` 로 지정하여 무한히 반복할 수 있습니다.    
- `animation-play-state`    
    애니메이션을 멈추거나 다시 시작할 수 있습니다.    
- `animation-timing-function`   
    중간 상태들의 전환을 어떤 시간간격으로 진행할지 지정합니다.   
- `animation-fill-mode`    
    애니메이션이 시작되기 전이나 끝나고 난 후 어떤 값이 적용될지 지정합니다.   
- `animation`    
    `animation-*` 들의 단일속성으로 한꺼번에 작성할 수 있습니다.

## 반응형 웹 사이트란?
웹 사이트에서 PC화면 뿐만 아니라 모바일, 태블릿, 노트북 등 여러가지 디바이스의 해상도에 반응하여 각각에 맞는 최적의 화면을 보여주는 홈페이지 입니다.

## 뷰포트(viewport)
뷰포트란 웹 브라우저에서 실제 내용이 표시되는 영역입니다. 모바일 viewport와 PC의 viewport는 그 크기가 다릅니다. 그렇기 때문에 반응형 웹 에서는 viewport에 맞게 화면을 보여줘야 할 필요가 있습니다.
이럴때 사용하는 메타태그가 `뷰포트 메타태그` 입니다.

### 메타 뷰포트 태그 지정하는 법
`<meta name="viewport" content="속성1=값1, 속성2=값2 ......">`

### 메타 뷰포트 태그 속성
- `width` : 뷰포트 가로
- `height` : 뷰포트 세로
- `user-scalable` : 사용자 확대/축소 가능 여부
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
**기본형**
`@media [only | not] 미디어 유형 [and 조건] * [and 조건]`
- `only` : 미디어쿼리를 지원하지 않는 웹 브라우저에서는 미디어 쿼리를 무시하고 실행하지 않습니다. **(거의 사용 안함)**
- `not` : `not` 다음에 지정하는 미디어 유형을 제외합니다.
- `and` : 조건을 여러개 연결해서 추가할 수 있습니다.    
    예) 미디어 유형이 screen이면서 최소 너비가 768px 이고 최대 너비는 1439px일 경우에 적용할 CSS    
    `@media screen and (min-width: 768px) and (max-width: 1439px)`
    
### 미디어 유형
- `all` : 모든 장치에 적합합니다.
- `print` : 인쇄 결과물 및 출력 미리보기 화면에 표시 중인 문서입니다.
- `screen` : 주로 화면이 대상입니다.
- `speech` : 음성 합성장치 대상입니다.

### 자주 사용하는 미디어쿼리 조건
- `min-width` : 웹 뷰포트의 최소 너비
- `max-width`: 웹 뷰포트의 최대 너비

출처:[짐코딩 HTML&CSS](https://gymcoding.notion.site/HTML-CSS-706749085a29449bb066957e56686365)
