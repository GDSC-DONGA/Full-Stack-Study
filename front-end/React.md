<h1>풀스택 스터디 - 3주차 React 정리 </h1>
<h4>React의 중요한 파일 3가지</h4>

1. index.js -> src 폴더에 포함되어 있다. 메인 프로그램이라고 할 수 있다. 여기에서 HTML 템플릿 및 JavaScript의 컴포넌트를 조합하여 렌더링하고 실제 표시한다.
2. App.js -> src 폴더에 있다. 이것은 컴포넌트를 정의하는 프로그램이다. 실제로 화면에 표시되는 내용 등은 여기에서 정의된다.
3. index.html -> public 폴더에 있다. 메인 프로그램인 index.js에 대응되는 것으로, HTML 템플릿 파일이다. 이 파일이 직접 표시되는 것은 아니고, index.js에 의해 일어 와서 렌더링된 결과가 표시된다. (index.html 이름을 바꿀시 오류발생
<h4>빌드 명령어</h4>
npm run build

serve -s build
<h4>컴포넌트</h4>

```javascript
function Header(){
 return <Header>
  <h1><a href="/">React</a></h1>
 <Header>
}
function App() {
 return {
  <div>
   <Header></Header>
}
```

<h4>Props</h4>

<h4>Event</h4>

<h4>State</h4>

<h4>Create</h4>

<h4>Update</h4>

<h4>Delete</h4>


















아래 링크를 참조했습니다.

[생활코딩](https://www.youtube.com/watch?v=AoMv0SIjZL8&list=PLuHgQVnccGMCOGstdDZvH41x0Vtvwyxu7&index=2&ab_channel=%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9)
 
 [블로그](https://velog.io/@khw970421/React-%ED%8C%8C%EC%9D%BC%EB%93%A4%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C-index.js-App.js-index.html)


