import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Header(props) {
  console.log('props', props, props.title);
  return (
    // html 코드
    <header>
      <h1>
        <a href="/" onClick={(event)=>{
            event.preventDefault(); // 클릭해도 리로드가 일어나지 않게 함
            props.onChangeMode();
        }}>{props.title}
        </a>
      </h1>
    </header>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        {/* 자동으로 생성한 태그의 경우 추적할 때 근거가 있어야 하므로 key라는
        약속된 prop을 부여함으로 정확한 동작을 하게 함 */}
        <a id={t.id} href={'/read/' + t.id} onClick={event=>{
          event.preventDefault();
          props.onChangeMode(Number(event.target.id));
          // target은 이벤트를 유발시킨 태그를 가리킴 (a 태그)
        }}>{t.title}</a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Create(props){
  return <article>
    <h2>Create</h2>
    <form onSubmit={(event)=>{
      event.preventDefault();
      const title = event.target.title.value; // .target : 이벤트가 발생한 태그를 가리킴
      const body = event.target.body.value;
      props.onCreate(title, body);
    }}>
      <p><input type="test" name="title" placeholder="title"/></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><input type="submit" value="Create"></input></p>
    </form>
  </article>
}

function Update(props){
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  return <article>
    <h2>Update</h2>
    <form onSubmit={(event)=>{
      event.preventDefault();
      const title = event.target.title.value; // .target : 이벤트가 발생한 태그를 가리킴
      const body = event.target.body.value;
      props.onUpdate(title, body);
    }}>
      <p><input type="test" name="title" placeholder="title" value={title} onChange={(event)=>{
        // 키보드를 입력할 때마다 title의 값이 바뀌고 컴포넌트가 다시 렌더링되면서 새로운 값이 value값이 됨
        setTitle(event.target.value);
      }}/></p>
      <p><textarea name="body" placeholder="body" value={body} onChange={(event)=>{
        setBody(event.target.value);
      }}></textarea></p>
      <p><input type="submit" value="Update"></input></p>
    </form>
  </article>
}

function App() {
  // const _mode = useState('WELCOME'); // 상태를 만듦
  // const mode = _mode[0]; // mode의 값을 통해서 상태의 값을 읽을 수 있음
  // const setMode = _mode[1]; // 1번째 원소인 setMode를 통해서 mode값을 바꿀 수 있음
  const [mode, setMode] = useState('WELCOME');

  const [id, setId] = useState(null);

  const [nextid, setNextIdx] = useState(4);
  // topics를 상태로 승격
  const [topics, setTopics] = useState([
    // 객체 사용
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'js', body: 'js is ...' },
  ]);

  let content = null;

  let contextControl = null; // 맥락적으로 노출되는 UI

  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } 
  else if(mode === 'READ'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      console.log(topics[i].id, id)
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
    contextControl = <>
      {/* Update */}
      <li><a href={'/update/'+id} onClick={(event)=>{
        event.preventDefault();
        setMode('UPDATE');
      }}>Update</a></li>

      {/* Delete */}
      <li><input type="button" value="Delete" onClick={()=>{
        const newTopics = []; // 빈 배열 생성
        for(let i=0; i<topics.length; i++){
          if(topics[i].id !== id){
            // 현재 선택된 것이 아닌 것만 빈 배열에 넣음
            newTopics.push(topics[i]);
          }
        }
        setTopics(newTopics);
        setMode('WELCOME');
      }}></input></li>
    </>
  } 
  else if(mode === 'CREATE'){
    content = <Create onCreate={(_title, _body)=>{ // 사용자가 Create 버튼을 눌렀을 때 
      const newTopic = {id:nextid, title:_title, body:_body}
      const newTopics = [...topics]; // topics의 복제본
      newTopics.push(newTopic); // 추가
      setTopics(newTopics)
      setMode('READ');
      setId(nextid);
      setNextIdx(nextid+1);
    }}></Create>
  } 
  else if(mode === 'UPDATE'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      console.log(topics[i].id, id)
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(title, body)=>{
      const updatedTopic = {id:id, title:title, body:body}
      const newTopics = [...topics];
      for(let i=0; i<newTopics.length; i++){
        if(newTopics[i].id === updatedTopic.id){
          newTopics[i] = updatedTopic;
          break;
        }
      }
      setTopics(newTopics);
      setMode('READ');
    }}></Update>
  }

  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        setMode('WELCOME');
        }}>
      </Header>

      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');
        setId(_id);
      }}></Nav>

      {content};

      <ul>
        <li><a href='/create' onClick={event=>{
          event.preventDefault();
          setMode('CREATE');
        }}>Create</a></li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
