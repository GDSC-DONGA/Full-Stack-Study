## html이란?

- html파일에서 !+enter 이나 !+tab 을 누르면 코드가 자동완성됨
- HTML
  - Hyper Text Markup Language
  - 태그로 이루어진 markup 언어
  - 프로그래민 언어 X

## tag

```
<h1 class="primary">제목</h1>
```

- h1 : 태그명
- class : 속성명
- primary : 속성값

## html 문서 기본구조

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Hello HTML!</title>
  </head>
  <body>

  </body>
</html>
```

- 주석처리

```
<!--주석-->
```

---

## Emmet

- 자식노드
  - div>ul>li 입력 시
  ```
  <div>
    <ul>
      <li></li>
    </ul>
  </div>
  ```
- 형제노드
  - div>ul+ol 입력 시
  ```
  <div>
    <ul></ul>
    <ol></ol>
  </div>
  ```
- 반복하기
  - div>ul>li\*3 입력 시
  ```
  <div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  ```
- 아이디
  - span#item 입력 시
  ```
  <span id="item"></span>
  ```
- 클래스
  - span.title 입력 시
  ```
  <span class="title"></span>
  ```
- 콘텐츠
  - p.container{Hello World~!} 입력 시
  ```
  <p class="container">Hello World~!</p>
  ```
- 자동 넘버링
  - p.container{item$}\*5 입력 시
  ```
  <p class="container">item1</p>
  <p class="container">item2</p>
  <p class="container">item3</p>
  <p class="container">item4</p>
  <p class="container">item5</p>
  ```

---

## HTML 태그

- 글꼴 태그
  - `<h1>` ~ `<h6>` - 제목 또는 부제목
  - `<p>` - 하나의 문단 표시
  - `<hr>` - 가로로 선
  - `<br>` - 줄바꿈, 개행 역할
  - `<i>` - 이텔릭체로 표시
  - `<em>` - 이텔릭체로 강조
  - `<b>` - 진하게 표시
  - `<strong>` - 진하게 강조  
    <br>
- 목록 태그
  - `<ol>` - 순서가 있는 목룍 표현
  - `<ul>` - 순서가 없는 목록 표현
  - `<li>` - 목록하위 항목으로 사용, `<ul> `또는 `<ol>` 태그의 하위에 위치
  - `<dl>` - 용어를 설명하는 목록을 만듦
  - `<dt>` - 정의되는 용어의 제목을 넣을 때 사용
  - `<dd>` - 용어를 설명할 때 사용  
    <br>
- 표 태그
  - Table 기본 태그
    - `<tables>` - 표를 만드는 태그, 표 전체를 감싸는데 사용
    - `<caption>` - 표의 제목이나 설명 작성
    - `<str>` - 표의 행을 의미, 자식으로 `<th>` 또는 `<td>` (필수)
    - `<th>` - 표의 제목 열을 의미
      - colspan - 열을 병합하는 속성
      - rowspan - 행을 병합하는 속성
    - `<td>` - 표의 일반 열을 의미
  - Table 그룹 관련 태그 - `<colgroup>` - 열을 그룹으로 묶을 수 있도록 함 - `<col>` - colgroup 태그의 자식으로 열 단위를 나눔  
     ex) `<col span="3">` -> 세 개의 열을 그룹으로 묶음 - span - 열을 그룹화 함 - `<thread>` - 표의 제목 열들을 묶음` -`<tbody>`- 표의 일반적인 데이터들을 묶는 그룹태그 -`<tfoot>` - 표의 하단 영역을 묶는 그룹태그

---

## Semantic 태그

- Semantic (의미론적)

- Semantic 태그 이점
  - 검색엔진 최적화
  - 웹 접근성 향상
  - 가독성 향상  
    <br>
- HTML Senamtic Element
  - `<header>` : 페이지에 대한 정보를 담음, 페이지 상단에 위치
  - `<nav>` : 네비게이션 링크, 구성된 섹선을 표현
  - `<aside>` : 주요 내용과는 직접적인 연관성은 없는 분리된 내용 담음
  - `<main>` : 문서의 body요소의 주 콘텐츠를 정의
  - `<section>` : 일반적인 섹션 표현
  - `<article>` : 여러가지 아이템을 묶어 재사용 가능하게 그룹화함
  - `<footer>` : 저작권 정보나 서비스 제공자 정보들을 나타냄, 사이트 하단에 위치
  - `<details>` : 추가적인 정보 나타내거나 사용자가 요청하는 정보 나타냄
  - `<summary>` : 부모요소인 details요소의 내용들에 대한 요약이나 캡션 등을 나타냄
  - `<figcaption>` : 부모요소인 figure요소의 내용들에 대한 캡션 혹은 제목 나타냄
  - `<figure>` : 일러스트, 다이어그램, 사진, 코드 등에 주석을 다는 용도로 사용
  - `<mark>` : 참조 목적으로 마킹되거나 하이라이트된 텍스트를 표현
  - `<time>` : 24시간에서의 시간 혹의 그레고리력에서의 정밀한 날짜를 나타냄

---

## Inline VS Block Element

- div VS span
  - div 태그 : 박스 모양을 가짐 -> 영역태그, 컨테이너, display : block
  - span 태그 : 문장의 컨텐트 만큼만 차지함 -> 영역태그, 특정아이템, display : inline
- block VS inline
  - block : 전체공간, 세로배치, width&height 적용O
  - inline : 콘텐츠만큼, 가로배치, width&height 적용X
- display 속성값
  - none : 보이지 않음
  - block : block 요소로 표시
  - inline : inline 요소로 표시
  - inline-block : block과 inline의 중간 형태로 요소는 inline인데 내부는 block처럼 표시함
  - flex : Layout을 만들 때 자주 사용

---

## 이미지 & 멀티미디어

- `<img>` : HTML 문서에 이미지를 넣음
  - 속성
    - src : 이미지 경로 지정
    - alt : 이미지의 텍스트 설명
    - height
    - width
- 절대경로 VS 상대경로
  - 절대경로 : 절대적인 고유한 경로를 지정하는 것
  - 상대경로 : 현재 문서를 기준으로 경로를 인식하는 방법
- 오디오 태그 `<audio>` : HTML 문서에 소리 콘텐츠를 넣을 때 사용
  - src 속성 또는 `<source>` Element를 사용
  - 다수를 지정한 경우 가장 적절한 소스를 브라우저가 선택함

* 비디오 태그 `<video>` : 영상 콘텐츠를 HTML 문서에 삽입할 때 사용
  - src 속성 또는 `<source>` Element를 사용
  - 다수를 지정한 경우 가장 적절한 소스를 브라우저가 선택함
* 오디오&비디오 태그 속성
  - controls
  - autoplay
  - loop
  - muted
  - preload
  - width, height
  - poster="파일 이름"
* 하이퍼링크 태그 `<a>`
  - href 속성을 사용해 하이퍼링크를 만듦
  - target="\_blank" 속성을 사용해 새탭에서 화면 열 수 있음

---

## Form

- Form : 입력받는 데이터들의 묶음
- Form Data 또는 Field : 데이터
- `<form>` : 정보를 제출하기 위하여 어디서부터 어디까지가 양신인지 지정
  - action : 서버프로그램의 URI
  - method : HTTP 메소드
    - post : 요청 본문으로 정송
    - get : URL의 쿼리스트링으로 붙여서 전송

* `<input>` : 데이터를 입력받음
  - type 속성
    - text : input 태그의 기본값
    - email
    - tel
    - checkbox : 여러개 체크가능
    - radio : name을 일치시켜주어야 함
* `<label>` : 입력받는 필드를 설명할 때 사용
  - label 태그 하위에 input 태그 위치시키거나
  - id와 for 속성 사용하여 input 태그와 연결지을 수 있음
* `<fieldset>` : 양식의 여러 컨트롤과 `<label>`을 묶을 때 사용
* `<legend>` : 부모 `<fieldset>` 콘텐츠의 설명을 나타냄

- Form 데이터 태그 속성
  - required
  - readonly
  - disabled : 비활성화 가능 (서버 전송X)
  - autofocus : 커서 위치
  - placeholder : 가이드 문구 삽입

* `<textarea>` : 여러줄의 데이터를 입력받을 수 있음
  - rows : 행수 지정
  - cols : 컬럼 수 지정

- `<select>` : 옵션 메뉴 제공
  - `<option>` 태그로 각 항목을 나타내며 `<select>` 태그는 `<option>` 태그를 감싸줌

* `<datalist>` : `<option>` 요소 여럿을 담음
* `<buttion>` : 버튼 기능
  - type - submit - reset - button

---

## head tag

- `<head>` : 문서정보(메타데이터)를 담음

* head 태그 안에 배치할 수 있는 요소
  - `<title>`
  - `<base>` : 모든 상대 URL이 사용할 기준 URL을 지정
  - `<link>` : 현재 문서와 외부 리소스의 관계를 명시
  - `<style>`
  - `<meta>`
  - `<script>`
* Open Graph
  - 콘텐츠의 요약내용이 SNS에 게시되는데 최적화된 데이터를 가지고 갈 수 있도록 설정하는 것
