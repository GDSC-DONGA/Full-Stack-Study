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

id 속성에 맞는 요소를 선택합니다. id 선택자는 웹 문서에서 **고유한 하나의 태그**에만 사용해야 합니다. 이를 어긴다고 해서 오류가 표시되지 않지만 하나의 요소에만 사용하는 것이 웹 표준이며 우리는 웹 표준을 준수 할 필요가 있습니다.

- 문법
    
    `#idname`
