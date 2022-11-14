## React

- 사용자 정의 테그를 만드는 기술


### 컴포넌트 만들기

- 컴포넌트란 HTML 태그를 반환하는 함수

```js
function Header(){
  return <header>
    <h1><a href="/">WEB</a></h1>
  </header>
}
function Nav(){
  return <nav>
    <ol>
      <li><a href="/read/1">html</a></li>
      <li><a href="/read/2">css</a></li>
      <li><a href="/read/3">js</a></li>
    </ol>
  </nav>
}
function Article(){
  return <article>
    <h2>Welcome</h2>
    Hello, WEB
  </article>
}
function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}
```
