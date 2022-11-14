# HTML이란

- 태그로 이루어진 마크업 언어

### tag

<태그명 속성명=”속성값”>내용</태그>

### 기본 구조

![image](https://user-images.githubusercontent.com/101108440/200315779-092644c2-d3ce-480a-971c-97fe49ad4306.png)

### 주석

<!— 내용—>

+ 쫘아아악 드래그하고 ctrl+/하면 주석 처리됨 

# Emmet

: 자동 완성 확장 프로그램

### 글꼴 태그

- `<h1>` 제목 표시 2,3,4,5,6  있음
- `<hr>` 구분선
- `<p>` 한칸 뜀
- `<br>` 줄바꿈
- `<strong>` 진하게 강조
- `<b>` 진하게 표시
- `<em>` 이탤릭체
- `<i>` 이탤릭체

`<strong>과 <b>` `<em>과 <i>` : 각각 두 개의 기능은 같음 (둘 다 볼드체, 둘 다 이탤릭체)

<strong>과 <em>은 낭독기 기능이 가능 / 나중에 시각장애인들을 위한 화면 출력 시 유용
  
### 목록 태그

- `<ol>` : 순서가 있는 목록 표현 (type속성으로 글머리 기호 변경 가능)
- `<ul>` : 순서가 없는 목록 표현
- `<li>` : 목록 하위 항목으로 사용 `<ul>` 태그 or `<ol>` 태그 하위에 위치
- `<dl>` : definition list(정의 목록), 사전처럼 용어를 설명하는 목록
    
    ex) A는 B이다. key = value로 사용
    
- `<dt>` : definition term(정의 용어), 정의되는 용어의 제목을 넣을 때  - <dl> 태그 하위
- `<dd>` : definition description / 용어를 설명하는 데 사용, <dt>에 적은 제목에 대한 설명 - <dl>태그 하위

### 주의사항

- `<dl>` 태그는 하나 이상의 `<dt>-<dd>` 쌍의 태그  `<dl>`쓸 때  `<dt>`나 `<dd>`하나는 있어야함
    
    단, `<dt>-<dd>` 태그가 반드시 하나의 짝일 필요는 없음 
    
- `<li>` 태그는  `<ul>`의 하위 태그

## 표 태그

### table 기본 태그

`<table>` : 표를 만듦 , `<table border = "1">` 하면 두께 1의 선으로 표 만듦 → 웹 표준이 아님

`<tr>` : 행 , `<th>` 두껍게 가운데 정렬 (표 제목)

`<td>` : 열 (<tr>태그 안에 있어야함)

### table 그룹 태그

`<colgroup>` :열을 그룹으로 묶음

`<col>` : 열 단위를 나눌 수 있음 ㄴ 자식 태그

<col span = “3”> → 세 개의 열을 그룹으로 묶음

`<thead>` :표 제목 묶어

`<tbody>` : 표의 일반적인 데이터 묶음

`<tfoot>` : 표 마지막행 묶음
  
  ## semantic (의미론적) 태그 — 의미를 가지는 태그

### 이점

- 검색엔진 최적화
- 웹 접근성 향상
- 가독성 향상

`<div> </div>` : (division) 가상의 레이아웃을 설계 / 영역을 구분 (컨테이너 역할)  **block-level element**  *display값이 block*

`<span> </span>` : 영역을 구분  **inline-level element**  *display값이 inline*

![image](https://user-images.githubusercontent.com/101108440/200314647-2f5e91b0-ecff-42eb-9a52-08286027be95.png)

red는 div태그 - 칸 자체를 차지함

yellow는 span태그 - 특정 부분만 공간 차지

- display값을 변경할 수도 있음

### block element VS inline element

block : 전체 공간 차지, 세로 배치 `<div>1</div><div>2</div>`하면 <div>1</div><div>2</div> 이렇게 1줄 쫙 공간 차지 그 다음 줄에 2 공간이 생김, width&height 적용o

inline: 콘텐츠만큼 공간 차지, 가로 배치 `<span>1</span><span>2</span>`하면 <br>
  <span>1</span><span>2</span><br>
  이렇게 1 다음 바로 2나옴 1의 콘텐츠 만큼만 공간을 차지하기 때문, width&height 적용x
  
  ## 이미지 & 멀티미디어 태그

### 이미지 태그

`<img>` 

`src 속성` 을 통해 이미지 링크 넣기 

`alt 속성` 을 통해 이미지 안 나올 때 대신할 문구

예시)

```html
<img src="이미지 주소" alt="문구">
```

- 절대 경로
    - 웹 이미지 절대경로 ex) http://www. 걍 링크 주소
    - 파일의 폴더 ex) C:\user\ 파일의 경로
- 상대경로
    - 현 위치와 같은 파일이면 `이름.확장자` or `./이름.확장자`
    - 상위 폴더 → `../이름.확장자`
    - 하위 폴더 → `하위폴더/이름.확장자`

### 오디오 태그 & 비디오 태그

`<audio>` 태그 : html문서에 소리를 넣을 때

예시)

```html
<audio src="오디오 주소" controls></audio>
```

- `controls` 속성은 컨트롤 바(재생막대)를 띄워줌

![image](https://user-images.githubusercontent.com/101108440/200314993-b3a60fa4-0ad5-46dc-bb2e-e8ff2061fb86.png)

`<video>` 태그

예시)

```html
<video src="비디오 주소" controls></video>
```

### 하이퍼링크 태그

`<a>` 태그는 `href` 속성을 사용해서 다른 페이지나 특정위치, 다른 url로 이동할 수 있음

이때, `target="_blank"` 속성을 사용하면 새 탭을 열 수 있다.

- 다른 페이지로 이동

```html
<a href="링크주소">다른 페이지로 이동</a>
```

- 새 탭을 열어서 이동
 ```html
  <a href="링크주소" target="_blank">새 탭으로 페이지 열기</a>
  ```
  
  ## form 태그

### 속성

- action :
- method :

## input 태그

- lable : 입력받는 필드를 설명

```html
<lable for = "email">이메일</lable>
<input type="email" id="email" requred />
```

lable의 for와 input의 id이름 맞춰주기

### type

- 타입 tel
    - 키패드를 띄워줌
- 타입 url
- 타입 number
    - 우측에 숫자 up, down 화살표가 생김
- range
    - 정도를 표현할 수 있는 바가 생성됨
    
    ![image](https://user-images.githubusercontent.com/101108440/200315413-0dd942bc-30a8-41fa-93e7-e502f7b9757d.png)
    
- date
    - 날짜를 선택할 수 있음
    - 년, 월, 일
    
    ![image](https://user-images.githubusercontent.com/101108440/200315449-64d86af5-0db3-4674-aaf1-06e29824403e.png)
    
- password
    - 입력하면 ***로 보여
    

### form 데이터 태그 속성

- required
    - 입력값이 필수라는 것을 명시
- autofocus
    - 화면 초기에 해당 필드에 커서를 깜빡이는 거
- placeholder
    - 입력해야하는 칸에 멘트를 적을 수 있음
    
    ![image](https://user-images.githubusercontent.com/101108440/200315514-72251e74-4526-4622-a67a-73eee56f8110.png)
    
- textarea
- 칸에 줄 글 입력 받기

![image](https://user-images.githubusercontent.com/101108440/200315570-95655365-c012-4f3f-a7e7-545a3097697d.png)

cols 가로 길이, rows 세로 길이 조절

![image](https://user-images.githubusercontent.com/101108440/200315623-f2665b01-38b6-4238-8ed5-508f6664f335.png)

fieldset으로 영역 정하기 

legend에 field의 이름 적어줌

- select
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bfbc9be1-b3d7-4fff-8775-d6e9def94d36/Untitled.png)
    
- button
    - reset : 선택한 거 초기화
    - submit : 기본 디폴트값 (안 적어도 디폴트임) , 서버로 정보 전송
  
  ## head 태그

: 문서 정보를 담고 있는 태그

- title
- base
- link
    - 팝잇콘 설정가능
    
    ![유튜브 그림/  탭창에 뜨는 아이콘](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9846eda3-4d40-4cde-8370-710d853f34ae/Untitled.png)
    
    유튜브 그림/  탭창에 뜨는 아이콘
    
- style
  
  
