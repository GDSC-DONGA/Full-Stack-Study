## React 시작하기

Stackblitz에서 바로 시작할 수도 있음  
https://ko.reactjs.org/docs/getting-started.html

vscode에서 진행

- 설치

  ```javascript
  npx create-react-app .
  ```

  npx 명령어가 실행되기 위해서는 nodejs가 설치되어있어야 함
  nodejs 설치 후 환경변수 설정 필요
  REF) https://han.gl/PdSQIr

  위의 명령어 실행 -> 오류 발생  

  ![1](https://user-images.githubusercontent.com/88132500/201027778-858d0fe9-1040-4d99-bda1-67dea2525f46.PNG)

  VSCode의 기본 터미널이 powershell로 설정되어 있기 때문  
  command prompt로 변경  
  REF) https://dhdl-it.tistory.com/55

  ```
  npm start
  // 리액트 개발환경 실행
  ```

- 수정

  - index.js : 여러가지 전역적인 설정이 들어감
  - App.js : UI를 만듦
  - App.css : 디자인

- 배포

  ```
  npm run build
  // build - 배포판을 만드는 과정
  ```

  위의 명령을 실행하면 build 폴더가 생성됨

  ```
  npx serve -s build
  // 사용자가 어떤 경로로 들어오든 build/index.html 파일을 서비스해줌
  ```  
  
  ![2](https://user-images.githubusercontent.com/88132500/201027891-7d4012b3-19cf-46cf-8b41-88e959cb0a3b.PNG)

  실제로 서비스에서 사용할 수 있는 버전의 파일이 만들어지고 서비스됨
