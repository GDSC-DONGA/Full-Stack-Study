## 컴포넌트 (사용자 정의 태그)

react에서 사용자 정의 태그는 대문자로 시작해야함  
ex)

```javascript
function Header() {
  return (
    // html 코드
    <header>
      <h1>
        <a href="/">WEB</a>
      </h1>
    </header>
  );
}
```

```javascript
// 사용
<Header></Header>
```

<br>

---

## 컴포넌트 - 속성(PROP) 사용

- ```javascript
  function Header(props) {
    console.log('props', props, props.title);
    return (
      <header>
        <h1>
          <a href="/">{props.title}</a>
          // props.title -> 표현식으로 취급 (문자열X)
        </h1>
      </header>
    );
  }

  ...

  function App() {
    return (
      <div>
        <Header title="REACT"></Header>
      </div>
    );
  }
  ```

  console  
  ![3](https://user-images.githubusercontent.com/88132500/201528917-7b4d5107-ae3a-451d-b7ee-700754030742.PNG)

- 동적으로 생성

  ```javascript
  function Nav(props) {
    const lis = [];
    for (let i = 0; i < props.topics.length; i++) {
      let t = props.topics[i];
      lis.push(
        <li key={t.id}>
          {/* 자동으로 생성한 태그의 경우 추적할 때 근거가 있어야 하므로 key라는
          약속된 prop을 부여함으로 정확한 동작을 하게 함 */}
          <a href={'/read/' + t.id}>{t.title}</a>
        </li>
      );
    }
    return (
      <nav>
        <ol>{lis}</ol>
      </nav>
    );
  }
  ...

  function App() {
    const topics = [
      // 객체 사용
      { id: 1, title: 'html', body: 'html is ...' },
      { id: 2, title: 'css', body: 'css is ...' },
      { id: 3, title: 'js', body: 'js is ...' },
    ];
    return (
      <div>
        <Nav topics={topics}></Nav>
      </div>
    );
  }
  ```  
  
  ![4](https://user-images.githubusercontent.com/88132500/201528939-824be44c-f010-4667-8bab-d6576e94e24b.PNG)

---

## 이벤트

- ```javascript
  function Header(props) {
    console.log('props', props, props.title);
    return (
      // html 코드
      <header>
        <h1>
          <a href="/" onClick={function (event) {
              event.preventDefault(); // 클릭해도 리로드가 일어나지 않게 함
              props.onChangeMode();
          }}>{props.title}
          </a>
        </h1>
      </header>
    );
  }

  ...

  function App() {
    const topics = [
      // 객체 사용
      { id: 1, title: 'html', body: 'html is ...' },
      { id: 2, title: 'css', body: 'css is ...' },
      { id: 3, title: 'js', body: 'js is ...' },
    ];
    return (
      <div>
        <Header title="WEB" onChangeMode={function () {
          alert('Header');
          }}>
        </Header>
        <Nav topics={topics}></Nav>
        <Article title="Welcome" body="Hello, WEB"></Article>
      </div>
    );
  }
  ```  

  컴포넌트 사용자가 Header를 클릭했을 때 해야할 작업을 정의할 수 있도록 처리한 것  

---

## state

- Prop과 State 모두 이 값이 변경되면 새로운 리턴값을 만들어서 UI를 바꿈
- Prop : 컴포넌트를 사용하는 외부자를 위한 데이터
- State : 컴포넌트를 만드는 내부자를 위한 데이터

- ex) mode의 값을 이벤트가 발생했을 때 변경

- useState
  - 배열을 리턴
  - 배열의 0번째 원소는 상태의 값을 읽을 때 쓰는 데이터
  - 배열의 1번째 데이터는 그 상태의 값을 변경할 때 사용하는 함수
  - ex) 
    ```javascript  
    const _mode = useState('WELCOME'); // 상태를 만듦  
    console.log('_mode', _mode);
    ```  
      
    console  
    ![5](https://user-images.githubusercontent.com/88132500/201528950-e342610c-b0bb-4778-bf58-80bde2ea72af.PNG) 

    따라서 다음의 변수 선언을 통해 데이터를 사용할 수 있음
    ```javascript
    const mode = _mode[0]; // mode의 값을 통해서 상태의 값을 읽을 수 있음
    const setMode = _mode[1]; // 1번째 원소인 setMode를 통해서 mode값을 바꿀 수 있음
    ```
  - useState의 인자는 그 state의 초기값임  
    state 값은 0번째 인덱스의 값으로 읽음  
    state 값을 바꿀 때는 1번째 인덱스의 함수로 바꿈
  - 위의 코드를 간단히 하면 (축약형)
    ```javascript
    const [mode, setMode] = useState('WELCOME');

    ...

    <Header title="WEB" onChangeMode={()=>{
      setMode('WELCOME'); // setMode 사용
      }}>
    </Header>

    <Nav topics={topics} onChangeMode={(id)=>{
      setMode('READ');
    }}></Nav>
    ```  
- 숫자를 태그의 속성으로 넘기면 문자가 됨 (주의)  

---

## Create

- 
  ```javascript
  const [value, setValue] = useState(PRIMITIVE);
  ```
  PRIMITIVE 타입 : string, number, bigint, boolean, undefined, symbol, null  
  
  상태로 만드려는 데이터가 범객체라면?  
  ex) object, array  
  => 처리 방법이 달라져야 함  
  => 데이터를 복제  

  // object의 경우
  newValue = {...value} -> 데이터 복제
  newValue 변경
  setValue(newValue) -> 원래 데이터와 다를 때 컴포넌트를 다시 렌더링 해줌  

  // array 경우
  newValue = [...value]
  newValue 변경
  setValue(newValue)  

- ex) Create 클릭 > title, body 입력 > create 버튼 클릭 > 추가로 등록
  ```javascript
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

  ...

  function App() {
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

        <a href='/create' onClick={event=>{
          event.preventDefault();
          setMode('CREATE');
        }}>Create</a>
      </div>
    );
  }
  ```  

---  

## Update

- ```javascript
  <p><input type="test" name="title" placeholder="title" value={props.title}/></p>
  ```
  위의 코드는 사용자가 value 값을 수정할 수 없음
  => prop을 state로 환승해야 함

  - prop은 외부자(사용자)가 내부로 전달하는 값  
  - state는 내부자가 사용하는 값

  => 변경
  ```javascript
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  ...

  <p><input type="test" name="title" placeholder="title" value={l}/></p>
  <p><textarea name="body" placeholder="body" value={l}></textarea></p>  
  ```  
  위의 코드로 변경해도 사용자가 title과 body값을 변경할 수 없음
  -> 연결되어있는 state가 바뀌지 않기 때문
  => 이벤트 사용 (onChange - react에서는 값을 입력할 떄마다 onChange가 호출됨)  

  ```javascript
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

  ...

  function App(){
    ...
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
    ...
    return (
      ...
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
  }
  ```  

---  

## Delete

- create, update는 특정 페이지로 이동 (링크)  
  delete는 클릭 시 바로 삭제할 것이기 때문에 링크 사용하지 않음
- ```javascript
  contextControl = <>
    <li><a href={'/update/'+id} onClick={(event)=>{
      event.preventDefault();
      setMode('UPDATE');
    }}>Update</a></li>
  </>
  ```  
  제목이 없는 태그를 쓰면 복수의 태그를 그룹핑하는 용도로 사용하는 빈 태그  
  빈 태그를 쓰면 html 코드 상으로 어떤 태그도 존재하지 않게됨  
- ```javascript
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
  ```  
