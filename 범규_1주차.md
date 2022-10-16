# HTML
1. HTML 기본 구성  
```html
<html>
  <head>
    <title>
      제목
    </title>
  </head>
  <body>
    내용
  </body>
</html>
```
2. 태그의 구조
```html
<태그이름 속성이름="속성값"> 내용 </태그이름>
```
3. 태그의 종류
> ### 제목 태그  
> < h1 > ~ < h6 > 까지 있다  
> ```html
> <h1>제목1</h1>
> <h2>제목2</h2>
> <h3>제목3</h3>
> ```
> <h1>제목1</h1>
> <h2>제목2</h2>
> <h3>제목3</h3>
    
> ### 한 단락 태그 및 줄 바꿈 태그
> < p > 와 < br > 사용
> ```html
> <p>
> 한 단락 태그
> </p>
> ------
> <br> <br>
> 한줄 띄우기 태그
> ```
> <p>
> 한 단락 태그
> </p>
> ------
> <br> <br>
> 한줄 띄우기 태그(br을 두번해서 두칸 띄움)
  
> ### 강조 태그
> < strong > 사용
> ```html
> <strong>여기를</strong> 강조 할거예요
> ```
> <strong>여기를</strong> 강조 할거예요
  
> ### 주석 태그  
> 코드에는 적용 안되지만 메모를 하고 싶은 경우
> ```html
> <!-- 주석내용 -->
> ```
  
> ### 스타일 태그  
> CSS 기능이지만 HTML에서 직접 사용 가능  
> 사용법
> ```html
> <태그이름 style="속성이름:속성값">
> ```
> 
> 1. 배경색(rgb 색상값이나, 16진수 색상값으로도 가능)
> ```html
> <body style="background-color:black">
> ```
>
> 2. 글자색 변경
> ```html
> <span style="color:blue"> 글자색 변경 </span>
> ```
  
> ### 링크 태그  
> 하이퍼링크를 걸어주는 태그
> ```html
> <a href="링크주소">링크</a>
> ```
> 링크의 속성으로 _blank를 많이 사용 
> ```html
> <a href="링크주소" target="_blank">새창으로 열기</a>
> ```
  
> ### 리스트 태그  
> 리스트를 나열할때 사용  
>```html
> 순서없는 리스트
> <ul> 
>	 <li>사과</li>
>    <li>멜론</li>
>	 <li>바나나</li>
> </ul>
>
> 순서 있는 리스트
> <ol>
>   <li>사과</li>
>   <li>멜론</li>
>   <li>바나나</li>
> </ol>
> ```
  
> ### Form 태그  
> 클라이언트에서 서버로 데이터를 보낼때 사용
>```html
> <form action="처리할페이지주소" method="get|post">
> 아이디: <input type="text" name="id"> <br>
> 비밀번호:<input type="password" name="password">
> </form>
> ```
