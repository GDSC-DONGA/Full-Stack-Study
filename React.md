## 설치  
nodejs : JavaScript 기반으로 구성된 서버 사이드 서비스를 JavaScript로 구현할 수 있게 만든 런타임  
npm : nodejs 기반의 모듈을 모아둔 집합 저장소

## 코드 수정 방법  
index.js : 입구파일, 여러가지 전역적인 설정들이 들어감  
<App /> : UI 전체  
function APP 내의 코드가 화면을 구성  
./App.css, ./index.css를 수정하여 페이지를 디자인  
id=root의 위치 : public > index.html

## 배포  
빌드(run build) : 배포판을 만드는 과정  
웹서버 실행(serve -s build) : build 폴더의 index.html을 서비스하는 웹서버가 실행 됌

## 컴포넌트  
사용자 정의 태그라고 생각하면 됌, 아주 효율적!

## props  
prop : 속성  
() 사이의 정보는 일반적인 문자열이 아닌 표현식으로 취급

for문과 배열을 이용하여 리스트를 생성하는 경우  
-- 배열명.push  
-- ()으로 동적으로 만들어줌  
!! 각각의 <li>태그, 즉 동적으로 만든 태그들은 각자 "key" prop을 가지고 있어햐함  
 "key" prop은 반복문 안에서 unique 해야함   
   
## 이벤트   
### 함수 기본형태  
함수명 = {funcion(파라미터)  
e.preventDefault();   
}     
onClick : 클릭했을 때 event가 매개변수로 들어와 함수가 실행됨  
event : 이벤트 상황을 제어할 수 있는 여러가지 정보와 기능이 들어있음  
e.preventDefault(); : 기본동작 방지  
event.target : 현재 이벤트를 발생시키는 <a> 태그, 즉 OnClick이 실행되는 태그를 말함  
event.tartget.id : <a> 태그 객체에 있는 속성의 id 값

## state
-- state : 컴포넌트의 속성값, 컴포넌트 안에서 관리됨  
-- 상단에 import {useState} from "react"; 적어줌  
-- const [name, name을 변경할 함수] = useState(초기값);  
-- const [name, setName] = useState('이름');  
-- 값을 변경 할 때는 setMode

## Create, UPdate, Delete  
    
<pre>
<code>

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Article(props){
return < article>

< h2>{props.title}< /h2>
{props.body}

  < /article>
}
function Header(props){
  return < header>
    < h1>< a href="/" onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}< /a>< /h1>
  < /header>
}
function Nav(props){
  const lis = []
  for(let i=0; i< props.topics.length; i++){
    let t = props.topics[i];
    lis.push(< li key={t.id}>
      < a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}< /a>
    < /li>)
  }
  return < nav>
    < ol>
      {lis}
    < /ol>
  < /nav>
}
function Create(props){
  return < article>
    < h2>Create< /h2>
    < form onSubmit={event=>{//submit 이후 form태그에서 발생하는 이벤트
      event.preventDefault();
      const title = event.target.title.value; //event.target : 이벤트가 발생한 태그
      const body = event.target.body.value;
      props.onCreate(title, body); //함수 호충
    }}>
      < p><input type="text" name="title" placeholder="title"/>< /p> //텍스트 입력, 데이터의 이름, 입력 해야 할 정보 제공
      < p><textarea name="body" placeholder="body"></textarea>< /p> //여러줄 입력
      < p><input type="submit" value="Create"></input>< /p> //전송
    < /form>
  < /article>
}
function Update(props){
  const [title, setTitle] = useState(props.title); //props 값을 state로   
  const [body, setBody] = useState(props.body); //props 값을 state로   
  return < article>
    < h2>Update< /h2>
    < form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onUpdate(title, body);
    }}>
      < p><input type="text" name="title" placeholder="title" value={title} onChange={event=>{ //이벤트 사용
        setTitle(event.target.value); //새로운 값으로 바꿔줌
      }}/>< /p>
      < p>< textarea name="body" placeholder="body" value={body} onChange={event=>{
        setBody(event.target.value);
      }}>< /textarea>< /p>
      < p>< input type="submit" value="Update">< /input>< /p>
    < /form>
  < /article>
}
function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4); //id값 별도로 관리, State 생성, 현재 id 3개라서 4
  const [topics, setTopics] = useState([ //상태로 승격시켜줌
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]); // [읽을 때, 쓸 때]
  let content = null;
  let contextControl = null; //맥락적으로 노출하기위해 지역변수 생성
  if(mode === 'WELCOME'){
    content = < Article title="Welcome" body="Hello, WEB">< /Article>
  } else if(mode === 'READ'){
    let title, body = null;
    for(let i=0; i< topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = < Article title={title} body={body}>< /Article>
    contextControl = <> //(mode === 'READ')일 때에만 노출
      < li>< a href={'/update/'+id} onClick={event=>{ //id를 주소에 추가, 클릭했을 때 이벤트발생
        event.preventDefault();
        setMode('UPDATE');
      }}>Update< /a>< /li>
      < li>< input type="button" value="Delete" onClick={()=>{ 
        const newTopics = [] // 빈 배열 생성
        for(let i=0; i< topics.length; i++){
          if(topics[i].id !== id){
            newTopics.push(topics[i]);
          }
        }
        setTopics(newTopics);
        setMode('WELCOME');
      }} />< /li>
    < />
  } else if(mode === 'CREATE'){
    content = < Create onCreate={(_title, _body)=>{ //Create버튼 클릭 후 실행되는 함수
      const newTopic = {id:nextId, title:_title, body:_body} //topics에 들어갈 새로운 원소(객체) 생성
      const newTopics = [...topics] // topics값 복제 (범객체 개념)
      newTopics.push(newTopic); //복제본 값 변경
      setTopics(newTopics); //값을 넣어줌, 컴포넌트 다시 실행
      setMode('READ'); //상세페이지로 이동
      setId(nextId);
      setNextId(nextId+1); //다음 글 추가를 위해
    }}>< /Create> //별도의 컴포넌트 만듬
  } else if(mode === 'UPDATE'){
    let title, body = null;
    for(let i=0; i< topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = < Update title={title} body={body} onUpdate={(title, body)=>{
      console.log(title, body);
      const newTopics = [...topics] //배열 복제
      const updatedTopic = {id:id, title:title, body:body} 
      for(let i=0; i< newTopics.length; i++){ 
        if(newTopics[i].id === id){
          newTopics[i] = updatedTopic;
          break;
        } 
      }
      setTopics(newTopics);
      setMode('READ');
    }} >< /Update>
  }
  return (
    < div>
      < Header title="WEB" onChangeMode={()=>{
        setMode('WELCOME');
      }}>< /Header>
      < Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');
        setId(_id);
      }}>< /Nav>
      {content}
      < ul>
        < li>< a href="/create" onClick={event=>{
          event.preventDefault();
          setMode('CREATE'); //모드를 CREATE로 바꿈
        }}>Create< /a>< /li>
        {contextControl}
      < /ul>
    < /div>
  );
}

export default App;   
    
</code>
</pre>

