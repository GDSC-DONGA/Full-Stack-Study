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

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/796323d6-0633-4197-82a4-c7cf909a7e11/HTML_CSS.001.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/796323d6-0633-4197-82a4-c7cf909a7e11/HTML_CSS.001.jpeg)

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
    - `content-box` - 기본 CSS 박스 크기 결정법 입니다. 요소의 너비를 100px로 설정하면 콘텐츠 영역이 100px 너비를 가지고, 테두리와 안쪽 여백은 이에 더해집니다.
    - `border-box` - 테두리와 안쪽 여백도 요소의 크기(width, height)로 고려합니다. 너비를 100px로 설정하고 테두리와 안쪽 여백을 추가하면, 콘텐츠 영역이 줄어들어 총 너비 100px을 유지합니다. 대부분의 경우 이 편이 크기를 조절할 때 쉽습니다.
