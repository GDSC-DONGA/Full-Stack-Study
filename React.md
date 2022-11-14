# React

: 사용자 정의 태그를 만드는 기술

- .js 확장자를 사용
- react 사이트

[시작하기 - React](https://ko.reactjs.org/docs/getting-started.html)

- 리액트 설치 : 실패! 💥

### 사용자 정의 태그 만들기

반드시 이름은 대문자로 시작!

```jsx
function Hearder(){
	return <header>
	<h1><a href="/">Web</a></h1>
	</header>
};

<!--구현할 때 -->
<Header></Header> 
```

🔼 header 태그를 함수로 만들어 봄

### props : 속성

```jsx
function Header(props) { //매개변수를 받아옴 props라고 지은 것뿐 이름 다르게 해도 됨
	return <header>
	<h1><a href="/">{props.title}</a></h1> //title에 있는 REAL 출력
	</header>
}

<Header tiltle="REAL"></Header> //title은 변수, 이름 바꿔도 됨
```

```jsx
import React from "react";
import "./style.css";

function Header(props) { 
	return <header>
	<h1><a href="/">{props.title}</a></h1> //title에 있는 REAL 출력
	</header>
}

function Nav(props) {
  const lis = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/' + t.id}>{t.title}</a></li>)
  }
  return <nav>
    <ol>
      {lis}
      </ol></nav>
}

function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
    </article>
}

function App() {
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'js', body:'js is ...'}
  ]
  return {
    <div>
      <Header title="WEB"></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello"></Article>
    </div>
  };
}
 
export default App;
```

💥빨간 부분 오류: JSX expressions must have one parent element.

### 이벤트 기능
