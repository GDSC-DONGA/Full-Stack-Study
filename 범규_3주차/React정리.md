# React

## React는 사용자 정의 함수를 만드는것

### 1. 기본 구성

1. index.js가 실행돼서 웹페이지가 보인다.
2. index.js에서 index.css를 들고와 css를 초기화 해주는 것 같다.
3. 실제로는 index.js에서 App.js파일을 들고와 화면에 보여준다.
4. App.css는 App.js파일의 css를 담당한다.
5. 결론은 index.js만 만들면 된다.

### 2. App.js 구성

```jsx
function App(){ // 페이지에 보일 내용
	return (
		// 내용
	);
}
export default App; // 함수 App를 보내줌
```

### 3. 컴포넌트 만들기

```jsx
function Header() { // 함수의 첫번째 글자는 무조건 대문자
	return (
		<div>
			<header>
				<h1><a href = "/">React</a><h1>
			</header>
		</div>
	);
}

function App() {
	return (
		<Header></Header> // Header 함수 출력
	);
}
export default App;
```

### 4. pros, 이벤트

1. pros는 함수의 인자 같은것
2. 이벤트는 특정 반응에 대한 할 일

```jsx
function Header(props){
  console.log('props',props);
  return (<header>
    <h1><a href="/" onClick={function(event){ // 이벤트
      event.preventDefault(); // 페이지가 reload안되게 방지
      props.onChangeMode(); // 콜백 함수인것 같다. App함수의 onChangeMode 함수 부름
    }}>{props.title}</a></h1>
  </header>
  );
}

function Nav(props){
//리턴문 위에는 상수 및 작동할 코드를 적어도 됨
  const lis=[]
  for(let i = 0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key = {t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{t.title}</a>
      </li>
      )
  }
  return (<nav>
    <ol>
      {lis}
    </ol>
  </nav>
  );
}

function Article(props){ // props인자는 다른 이름으로도 가능하지만 보통 props사용
  return <article>
    {props.title} <p></p> // 인자로 받아온것중 title을 가져옴
    {props.body} // 인자로 받아온것중 body을 가져옴
  </article>
}

function App() {
	const topics = [ // Map형식으로 topics 생성
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'js', body:'js is...'}
  ]
	return (
    <div>
      <Header title="React" onChangeMode={function(){ // onChangeMode함수를 콜백함수로 만듬
        alert('Header'); //onCangeMode함수로 인해 클릭했을때 'Header' alert (이벤트)
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{ // JS이므로 이렇게 arrow함수로도 가능
        alert(id);
      }}></Nav>
      <Article title="welcome" body="Hello, Web"></Article> // 인자를 보내주는 형태
    </div>
  );
}
```

### 5. state

1. 이벤트로는 페이지를 바꿀 수 없기 때문에 state를 사용하여 페이지를 동적으로 바꿈
    
    useState() 사용
    

```jsx
import {useState} from 'react'; // useState() 사용하기 위해서
function App() {
  // const _mode = useState('WELCOME') // mode[0]를 WELCOME으로 만듬
  // const mode = _mode[0] // mode에 mode[0]를 넣음
  // const setMode = _mode[1] // 변경시엔 setMode를 사용하고 _mode[1]을 저장
  const [mode, setMode] = useState('WELCOME'); //위에 코드 축약형
  //mode와 setMode는 아무렇게나 이름 지어도됨

  const [id,setId] = useState(null);

  const topics = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'js', body:'js is...'}
  ]

  let content = null
  if(mode === 'WELCOME'){ //여기선 mode변수를 읽는것이기에 setMode 아님
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if(mode === 'READ'){
    // 만약 id와 topics의 인덱스와 연관성이 없다면
    // for(let i=0; i<topics.length; i++){
    //   if(topics[i]===id){
    //     title=topics[i].title
    //     body=topics[i].body
    //   }
    // }
    content = <Article title={topics[id-1].title} body={topics[id-1].body}></Article>
  }
  return (
    <div>
      <Header title="React" onChangeMode={function(){
        setMode('WELCOME') // mode = "WELCOME" 이 아닌 setMode로 해야 변경 가능
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        setMode('READ')
        setId(id)
      }}></Nav>
      {content}
    </div>
  );
}
```

### 6. Create

1. 배열에 새로운 값을 넣을 때는 state가 쉽게 변하지 않음 

```jsx
function Create(props){
  return <article>
    <h2>Create</h2>
    <form onSubmit={event=>{ //submit이 발생 했을때
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title, body); //배열에 새로운 값 넣기
    }}>
      <p><input type="text" name= "title" placeholder="title"></input></p>
      <p><textarea name = "body" placeholder="body"></textarea></p>
      <p><input type="submit" value="Create"></input></p>
    </form>
  </article>
}
// mode의 또 다른 else if문
	else if(mode === 'CREATE'){
    content = <Create onCreate={(_title, _body)=>{
      const newTopic = {id:nextId, title:_title, body:_body}
			//잘못된 예제
			//topics.push(newTopic); //원시 데이터를 고치면
			//setTopics(topics); //topics가 바뀐지 제대로 확인 못함 (아마 주소로 구분 하는듯)
      const newTopics = [...topics] // 배열의 값들을 그대로 들고옴
      newTopics.push(newTopic); // 새로운 배열에 새로운 값 넣음
      setTopics(newTopics); // 새로운 배열을 topics에 넣음
      setMode('READ');
      setId(nextId);
      setnextId(nextId+1); // nextId 1증가
    }}></Create>
  }
// App() return문
			<a href = "/create" onClick={event=>{
        event.preventDefault();
        setMode('CREATE');
      }}>Create</a>
```

### 7. Update

```jsx
function Update(props){
	// title 과 body가 변경가능하도록 state를 사용
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return <article>
    <h2>Update</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value; // 새로 입력 받은 값 저장
      const body = event.target.body.value;
      props.onUpdate(title, body);
    }}>
      <p><input type="text" name= "title" placeholder="title" value={title} onChange={event=>{
        setTitle(event.target.value); //이벤트가 있을 경우 값 변환
      }}></input></p>
      <p><textarea name = "body" placeholder="body" value={body} onChange={event=>{
        setBody(event.target.value);
      }}></textarea></p>
      <p><input type="submit" value="Update"></input></p>
    </form>
  </article>
}
//else if(mode === 'READ')
contextControll = <li><a href ={"/update/"+id} onClick={event=>{
			event.preventDefault();
      setMode('UPDATE');
    }}>Update</a></li>
//Update else if문
else if(mode === 'UPDATE'){
    content = <Update title = {topics[id-1].title} body = {topics[id-1].body} onUpdate={(_title, _body)=>{
      //onUpdate가 발생하면 밑에 부분 실행
			const updateTopic = {id:id, title:_title, body:_body}
      const newTopics = [...topics]
      // for(let i = 0; i<newTopics.length;i++){
      //   if(newTopics[i].id===id){
      //     newTopics[i] = updateTopic;
      //     break;
      //   }
      // }
      newTopics[id-1] = updateTopic;
      setTopics(newTopics);
      setMode('READ');
    }}></Update>
  }
```

### 8.Delete
```jsx
contextControll = <> // html에 영향이 안가는 주석 li태그를 하나 더 묶으려고 사용
      <li><a href ={"/update/"+id} onClick={event=>{
        event.preventDefault();
        setMode('UPDATE');
      }}>Update</a></li>
      <li><input type="button" value="Delete" onClick={()=>{
        const newTopics = []
        for(let i=0; i<topics.length; i++){
          if(topics[i].id!=id){
            newTopics.push(topics[i]);
          }
        }
        setTopics(newTopics);
        setMode('WELCOME');
      }}></input></li>
    </>
```
