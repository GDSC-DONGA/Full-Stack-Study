# CSS

## CSS 스타일 적용 방식

1. inline-style
    
    ```html
    <!-- inline-style-->
        <h1 sytle="color:blue">제목</h1>
    ```
    
2. internal-style
    
    ```html
    <!--internal-style-->
    	<head>
    		<style>
            h1{
                color:blue;
            }
            .content{
                border: 2px solid red;
                background-color: yellow;
            }
            
        </style>
    </head>
    <body>
        <h1>헬스</h1>
        <p class="content">안녕하세요 헬스장에 오신걸</p>
    </body>
    ```
    
3. external-style
    
    외부에 css파일을 만들어서 스타일을 모아둠
    
    ```css
    /* style.css */
    h2{
        color: red;
    }
    .article{
        border:1px solid black;
        padding: 30px;
    }
    ```
    
    ```html
    <!-- external-style -->
    <head>
    <link rel="stylesheet" href="style.css"/>
    </head>
    <body>
        <h2>코딩</h2>
        <p class="article">codecode</p>
    </body>
    ```
    

## CSS 출처 적용 우선 순위

사용자 !important > 제작자 !important > 제작자 > 사용자 > 브라우저

- 주의사항
    
    !important는 폭포의 흐름을 깰수 있으니 주의해서 사용하자!
    

## Cascading 뜻

폭포와 같이 스타일이 우선순위에 맞게 연속적으로 적용됨을 의미한다

- 제작사 스타일을 적용후, 브라우저 사용자 스타일 적용후, 브라우저 기본 스타일이 적용된다

## 선택자

1. 전체 선택자
    
    모든 스타일에 적용할때
    
    ```css
    *{
    	내용
    }
    ```
    
2. Type 선택자
    
    ```css
    태그명{
    	내용
    }
    ```
    
3. class 선택자
    
    ```css
    .클래스명{
    	내용
    )
    ```
    
4. ID 선택자
    
    ```css
    /* id는 중복되면 안됨 하나만 있어야한다 */
    #아이디명{
    	내용
    }
    ```
    
5. 속성 선택자
    
    ```css
    /*속성값 제외하고 태그명과 속성값 중 하나만 존재해도 된다 */ 
    태그명[속성명="속성값"]{
    	내용
    }
    ```
    
    ```css
    /* 속성값을 포함하는 요소 */
    태그명[속성명*="속성값"]{
    	내용
    }
    
    /* 속성값으로 시작하는 요소 */
    태그명[속성명^="속성값"]{
    	내용
    }
    
    /* 속성값으로 끝나는 요소 */
    태그명[속성명$="속성값"]{
    	내용
    }
    
    /* 속성에 단어가 포함하는 요소 */
    태그명[속성명~="속성값"]{
    	내용
    }
    ```
    
6. 그룹 선택자
    
    ```css
    태그명, 태그명{
    	내용
    }
    ```
    

## 결합자

1. 자손 결합자
    
    ```css
    /*태그2는 태그1의 하위 태그다 */
    태그1 태그2{
    	내용
    }
    ```
    
2. 자식 결합자
    
    ```css
    /*태그2는 태그1의 바로 하위 태그다 */
    태그1 > 태그2{
    	내용
    }
    ```
    
3. 일반 형제 결합자
    
    ```css
    /*태그2는 태그1의 밑에중 형제 태그다 */
    태그1  ~ 태그2{
    	내용
    }
    ```
    
4. 인접 형제 결합자
    
    ```css
    /*태그2는 태그1의 인접한 형제 태그다 */
    태그1  ~ 태그2{
    	내용
    }
    ```
    

## 폰트 단위 em, rem

- px : 픽셀 단위
- rem : 루트 요소의 글꼴 크기
- em : 요소의 글꼴 크기
- vw : viewport 너비의 1%
- vh : viewport 높이의 1%

## 마진 중첩

위 아래의 두 영역이 둘다 마진이 있을때 마진이 겹치는 현상

- 더 큰 쪽으로 겹쳐진다

## Box sizing

1. **`box-sizing: content-box;`**
    - width, height 값이 컨텐츠 영역이 됨
2. **`box-sizing: border-box;`**
    - width, height 값이 border영역까지의 크기가 됨

## Display

display속성은 HTML요소를 어떻게 표시할지를 결정한다

HTML요소마다 기본적으로 들고있지만 `**display:값**` 을 통하여 변경할수있음

### 기본값 4가지

1. none
    
    요소를 보이지 않게함 hidden과 달리 영역을 차지않함
    
2. block
    
    가로 영역을 다 채우며 다음 태그가 등장하면 줄바꿈이 됨
    
3. inline
    
    컨텐츠 영역만 차지함, 줄바꿈이 적용안되며 width, height를 지정못함
    
4. inline-block
    
    inline처럼 자기 영역만큼 차지하지만 width, height를 지정해줄 수 있음
    

## Float

텍스트나 인라인 요소 옆에 이미지등을 둥둥 떠있는 형태를 만들때 사용

1. left
    - 왼쪽에 띄움
2. right
    - 오른쪽에 띄움

### clear

float를 어디서부터 취소할지 정할때 사용

1. none
    - 기본값
2. left
    - 왼쪽을 취소
3. right
    - 오른쪽을 취소

## Position

HTML요소를 배치하는 방법

1. static
    - 기본값
2. relative
    - 문서의 일반적인 흐름에따라 상대적인 top, bottom, right, left값이 적용됨
3. absolute
    - 문서의 흐름을 안따르고 position속성이 없는 부모기준으로 움직임
4. fixed
    - 문서의 흐름을 안따르고 스크롤해도 고정된 위치에 있음
5. sticky
    - 문서의 흐름에 따르다가 스크롤위치가 임계점에 이르면 fixed와같이 고정됨

## Overflow

영역을 벗어난 텍스트를 어떻게 할것인지

1. hidden
    - 숨김
2. scroll
    - 스크롤가능하도록 만듬

## Background-attachment

1. scroll
    - 전체, 영역안에서 스크롤해도 배경이 고정되있음
2. fixed
    - 전체에서 스크롤하면 사진이 움직임
3. local
    - 영역안에서 스크롤하면 사진이 움직임

## 고급 선택자

1. a:link
    - 링크태그를 어떻게 할지 정함
2. :visited
    - 방문한 태그를 어떻게 할지 정함
3. :hover
    - 마우스 위에 갔을때 어떻게 할지 정함
4. :active
    - 클릭하고 있을때 어떻게 할지 정함
5. :focus
    - input속성 등 선택 되있을때 어떻게 할지 정함

## Transition

어떤 상황에서 변형 시킬수있음

```css
/* 영역(박스)에 마우스를 댈때 커지면서 색상이 변하고 180도 돌리고 싶을때 */
.box1{
	/* transition: 1s; */ /*모든 속성을 1초동안 변형 시킴*/
	transition-property: all; /* .box1:hover의 모든 속성을 들고옴 */
	transition-duration: 1s; /* 1초동안 변형 시킴 */
	transition-delay: 1s; /* 1초 후 변형 시킴 */
}
.box1:hover{
	width: 200px;
	height: 200px;
	background-color:red;
	transform: rotate(180deg); /* 180도 돌림 */
}
```

## Animation

특정 상황 없이도 움직이게 할수있음

[coolcssanimation.com](https://coolcssanimation.com/) (참고)
