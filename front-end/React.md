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
 return <header>
  <h1><a href="/">React</a></h1>
 </header>
}
function App() {
 return {
  <div>
   <Header></Header>
}
```
Header라는 컴포넌트를 생성해서 사용하는 예제이다. 컴포넌트는 리액트로 만들어진 앱을 이루는 최소한의 단위이다. 

<h4>Props</h4>

```javascript
function Nav(props){
 const lis = []
 for(let i=0; i<props.topics.length; i++){
  let t = props.topics[i];
  lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
 }
 return <nav>
  <ol>
   {lis}
  </ol>
 </nav>
}
function App() {
 const topics = [
 {id:1, title:'html', body:'html is ...'},
 {id:2, title:'css', body:'css is ...'},
 {id:3, title:'javascript', body:'javascript is ...'}
 ]
 return {
  <div>
   <Nav topics={topics}></Nav>
}
```

- {변수명}으로 감싸면 변수를 태그 안에서 사용할 수 있다. 
- 어떠한 값을 컴포넌트에게 전달해줘야 할 때, props 를 사용한다.

<h4>Event</h4>

```javascript
function Nav(props){
 const lis = []
 for(let i=0; i<props.topics.length; i++){
  let t = props.topics[i];
  lis.push(<li key={t.id}>
  <a id={t.id} href={'/read/'+t.id} onClick={event=>{
  event.preventDefault();  //새로고침 방지
  props.onChangeMode(event.target.id);
  }}>{t.title}</a>
  </li>)
 }
 return <nav>
  <ol>
   {lis}
  </ol>
 </nav>
}
function App() {
 const topics = [
 {id:1, title:'html', body:'html is ...'},
 {id:2, title:'css', body:'css is ...'},
 {id:3, title:'javascript', body:'javascript is ...'}
 ]
 return (
  <div>
   <Nav topics={topics} onChangeMode={(id)=>{
    alert(id);
   }}></Nav>
)
```

- onChangeMode : 해당 태그의 함수 호출

<h4>State</h4>

```javascript
function Nav(props){
 const lis = []
 for(let i=0; i<props.topics.length; i++){
  let t = props.topics[i];
  lis.push(<li key={t.id}>
  <a id={t.id} href={'/read/'+t.id} onClick={event=>{
  event.preventDefault();  //새로고침 방지
  props.onChangeMode(Number(event.target.id)) ;
  }}>{t.title}</a>
  </li>)
 }
 return <nav>
  <ol>
   {lis}
  </ol>
 </nav>
}
function App() {
 const _mode = useState('WELCOME');   
 const mode = _mode[0];
 const setMode = _mode[1];
 const topics = [
 {id:1, title:'html', body:'html is ...'},
 {id:2, title:'css', body:'css is ...'},
 {id:3, title:'javascript', body:'javascript is ...'}
 ]
 let content = null;
 if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if(mode === 'READ'){
    content = <Article title="Read" body="Hello, Read"></Article>
 return (
  <div>
   <Nav topics={topics} onChangeMode={(id)=>{
    alert(id);
   }}></Nav>
}
```

- function App() 은 한번밖에 실행되지 않음. 따라서 상태가 변할 때 마다 재실행하는 과정이 필요함
- import {useState} from 'react'; 을 사용하면 state를 사용할 수 있음 
- const _mode = useState('WELCOME'); _mode를 상태(state)로 선언함
- useState의 리턴값은 배열이므로, _mode[0] = 'WELCOME' (값), _mode[1] = 상태 값을 변경하는데 사용하는 함수 
```
const [mode, setMode] = useState('WELCOME');
``` 
은 위에 코드에서 
```
const _mode = useState('WELCOME');   
const mode = _mode[0];
const setMode = _mode[1];
``` 
와 같은 말임
<h4>Create</h4>

```javascript
function Create(props){
  return <article>
    <h2>Create</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title, body);
    }}>
      <p><input type="text" name="title" placeholder="title"/></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><input type="submit" value="Create"></input></p>
    </form>
  </article>
}
function App() {
 const [nextId, setNextId] = useState(4);
 const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
 ]);
 if(mode === 'CREATE') {
  content = <Create onCreate={(_title, _body)=>{
   const newTopic = {id:nextId, title:_title, body:_body}
   const newTopics = [...topics]
   newTopics.push(newTopic);
   setTopics(newTopics);
   setMode('READ');
   setId(nextId);
   setNextId(nextId+1);
  }}></Create>
 }
``` 

- placeholder -> 텍스트 필드의 hint 텍스트
- const [value, setValue] = useState(Object); 일 경우, 
newValue = {...value}로 value값을 복제하여 newValue로 setValue를 수행한다.
```javascript
const [value, setValue] = useState([1]); //array -> object(객체)
newValue = {...value]  //value값을 복제
newValue.push(2);
setValue(newValue);  
``` 

<h4>Update</h4>

```javascript
function Update(props){
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return <article>
    <h2>Update</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onUpdate(title, body);
    }}>
      <p><input type="text" name="title" placeholder="title" value={title} onChange={event=>{
        setTitle(event.target.value);
      }}/></p>
      <p><textarea name="body" placeholder="body" value={body} onChange={event=>{
        setBody(event.target.value);
      }}></textarea></p>
      <p><input type="submit" value="Update"></input></p>
    </form>
  </article>
}
``` 

<h4>Delete</h4>

```javascript
contextControl = <>
 <li><a href={'/update/'+id} onClick={event=>{
  event.preventDefault();
  setMode('UPDATE');
 }}>Update</a></li>
 <li><input type="button" value="Delete" onClick={()=>{
   const newTopics = []
   for(let i=0; i<topics.length; i++){
     if(topics[i].id !== id){
       newTopics.push(topics[i]);
     }
   }
   setTopics(newTopics);
   setMode('WELCOME');
  }} /></li>
</>
```



아래 링크를 참조했습니다.

[생활코딩](https://www.youtube.com/watch?v=AoMv0SIjZL8&list=PLuHgQVnccGMCOGstdDZvH41x0Vtvwyxu7&index=2&ab_channel=%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9)
 
 [블로그](https://velog.io/@khw970421/React-%ED%8C%8C%EC%9D%BC%EB%93%A4%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C-index.js-App.js-index.html)

