## 스프링부트와 리액트를 이용한 게시판 만들기 (1)
```
youtube : https://youtu.be/iaPii9o0kPA  
blog : https://blog.naver.com/gameedi/222554501227  
```  

- mongoDB 설치  
REF) https://joytk.tistory.com/74  
  
- 부트스트랩 설치  
REF) https://soulno.tistory.com/20  

- 이클립스에 스프링부트 플러그인 설치  
  Spring Tools 4 - for Spring Boot (aka Spring Tool Suite 4) 4.3.0 RELEASE  

- 이클립스에 노드 플러그인 설치  
  Nodeclipse.github.io 1.0.2  

- 스프링부트 프로젝트 생성  
  new > Others > Spring Starter Project 선택  
  Name : board-react-server  
  Available
    - Spring Boot DevTools  
    - Spring Web  

- 리액트 부트스트랩 설치 (커맨드창)
  ```
  npm install react-bootstrap bootstrap  
  npm add bootstrap  
  npm add reactstrap  
  ```  

- 리액트 프로젝트 생성 (커맨드창)  
  ```
  npx create-react-app 경로\폴더명
  ```  

- 리액트 프로젝트 실행 (커맨드창)  
  위에서 설치한 위치에서
  ```
  npm start
  ```  
  브라우저에서 http://localhost:? 실행  

+ [TROUBLE] 이클립스 Failed to create the part's controls  
  REF) https://dogsavestheworld.tistory.com/297  
  Spring Tools 4.14.1 버전에서는 tm4e를 제공해주지 않기 때문에 따로 설치해주면 된다고 함  

+ [TROUBLE] 이클립스 Spring Properties editor가 보이지 않을 때  
  REF) https://go-coding.tistory.com/63  
  Spring IDE - Spring IDE Boot Support 확장자를 설치해줘야 함  

<br>  

## 스프링부트와 리액트를 이용한 게시판 만들기 (2)  

- board-react-client > package.json 수정  
  -> "proxy": "http://localhost:8080", 추가  

- board-react-server > pom.xml 수정
  - workingDirectory 수정 - board-react-client의 위치
  - nodeVersion, npmVersion 수정
  - outputDirectory 수정  

- Maven Update  
  ```
  Run As > Maven install / Maven > Update Project  
  ```
- Maven 빌드 실행  
  ```
  Run As > Maven Build > Goals:package  
  ```  
  -> board-react-client - build 폴더가 생성됨  
  -> target > classes > static 에도 똑같이 생성됨  
  => 연동 완료  

<br>  

## 스프링부트와 리액트를 이용한 게시판 만들기 (3)  

### 리액트  
props : 부모 변수  
state : 자기 컴포넌트의 변수  

부모 변수를 받아서 자식 변수를 설정  
this.state = {  
  aaa = this.props.aaa  
}  

컴포넌트를 다시 그린다  
this.setState({  
  aaa: new aaa  
});  

부모에게 업데이트를 알린다  
this.props.onCreate(this.state)  

- board-react-client
- index.js의 root는 public/index.html의 root를 찾아감
- 쿠키 관련 함수 설치하기
  ```
  /src> npm install react-cookie
  ```  
- 리액트 부트스트랩 설치
  ```
  npm install react-bootstrap bootstrap  
  npm add bootstrap  
  npm add reactstrap  
  ```  
- [TROUBLE]  
  ```
  [eslint]  
  src\App.js  
  Line 31:19:  'Component' is not defined  no-undef  
  ```
  REF) https://athena7.tistory.com/entry/Error-react-Component-is-not-defined-no-undef  
  -> import React, {Component} from 'react'; 추가  


- Board.js
  - constructor() - React에서 Component를 생성할 때 state 값을 초기화하거나 메서드를 바인딩할 때 construcotr()를 사용.  
  - componentDidMount() - 컴포넌트가 마운트된 직후, 즉 트리에 삽입된 직후에 호출됨. DOM 노드가 있어야 하는 초기화 작업은 이 메서드에서 이루어지면 됨.  
  - componentWillUnmount() - 컴포넌트가 마운트 해제되어 제거되기 직전에 호출됨. 이 메서드 내에서 타이머 제거, 네트워크 요청 취소, componentDidMount() 내에서 생성된 구독 해제 등 필요한 모든 정리 작업을 수행함.  
  - render() - 클래스 컴포넌트에서 반드시 구현돼야하는 유일한 메서드. 컴포넌트의 state를 변경하지 않고, 호출될 때마다 동일한 결과를 반환해야 하며, 브라우저와 직접적으로 상호작용을 하지 않음.  


  - bind() - this를 가리키는 context를 변경하여 바로 실행시켜주는 메소드. 콜백에서 'this'가 작동하려면 바인딩 해주어야 함  

<br>  

## 스프링부트와 리액트를 이용한 게시판 만들기 (4)   

- 클라이언트  
  1. fetch  
  2. constructor => componentDidMount  
  3. setState => render  
  

- 화면 구조  
  Board  
    - List  
      - ListData  
    - Detail  
    - Image  

- [TROUBLE] 기존 코드로 파일 업로드, 로드 되지 않음  
  -> board-react-server > application.properties > user.file.upload 값 변경  
    ```
    user.file.upload=./upload
    // 로컬 upload 폴더에 파일 저장되도록 함
    ```  
  -> board-react-server > BoardMongoController > 코드 변경  
    ```
    '/img' request 부분에서 아래 제거
    HttpServletRequest request, HttpServletResponse response
    ```  
