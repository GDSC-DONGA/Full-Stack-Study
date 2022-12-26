### position  

> REF)
> - position : https://wonit.tistory.com/314
> - z-index : https://www.codingfactory.net/10878  

- fixed : 일반 흐름 배치X, 스크린의 viewpoint를 기준으로 한 위치에 배치
   ![1](https://user-images.githubusercontent.com/88132500/209548563-62c6c876-bd7c-4fbf-8146-d639ba801513.PNG)

- relative : 일반 흐름배치 / top, right, bottom, left 와 같은 속성에 의한 상대적인 위치에 배치됨  
  ![4](https://user-images.githubusercontent.com/88132500/209548578-aefb0667-e374-4802-8c6c-6073d79a256f.PNG)  
  
- z-index  
  : 어느 객체가 앞으로 나오고, 뒤에 나올지 배치 순서를 결정하는 속성  
    position(relative, absolute, fixed) 속성이 적용된 요소에만 작동함
  - z-index 값을 크게 설정해서 가장 위에 있도록 함  
      ![3](https://user-images.githubusercontent.com/88132500/209548597-30163700-7c4e-4f6a-80a2-cb22b772e678.PNG)
      ![1](https://user-images.githubusercontent.com/88132500/209548615-01056343-9146-4079-aac5-6767ff0d0b11.PNG)  
    
### display  

> REF)
> - display:flex : https://studiomeal.com/archives/197
> - text-align : https://aboooks.tistory.com/92  

- flexbox  
  : 뷰포트나 요소의 크기가 불명확하거나 동적으로 변할 때에도 효율적으로 요소를 배치, 정렬,   
    분산할 수 있는 방법을 제공하는 CSS3의 새로운 레이아웃 방식  
    
- justify-content : 메인축 방향으로 아이템들을 정렬하는 속성
  - ``` justify-content : center; ```  
    : 아이템들을 가운데로 정렬함  
    ![6](https://user-images.githubusercontent.com/88132500/209548915-3f288784-f76b-484e-a270-8c36d00d6124.PNG)  
    ![4](https://user-images.githubusercontent.com/88132500/209548955-34310891-7205-46c6-a216-df06a909255c.PNG)![5](https://user-images.githubusercontent.com/88132500/209548966-4c1b2494-1539-4e7e-ae35-655b925fb852.PNG)  
    
- align-items : 수직축 방향으로 아이템들을 정렬하는 속성  
  - ``` align-items: center; ```  
    : 아이템들을 가운데로 정렬함  
    ![8](https://user-images.githubusercontent.com/88132500/209549144-7f3ead5f-c172-4573-9fe5-8971e8e0b311.PNG)  
    ![7](https://user-images.githubusercontent.com/88132500/209549188-909843c2-fd93-4f2f-b589-a4ab201c26aa.PNG)  
    
- text-align : 문서를 수평으로 정렬할 때 사용  
  - ``` text-align: center; ```  
    : 중앙 정렬  


### React  

> REF)  
> https://breathtaking-life.tistory.com/123  
> https://m.blog.naver.com/grace915/222657700188


- 더보기/접기 버튼  
```js
function App() {
  const [proj_btn1_visibile, proj_btn1_setVisible] = useState(false);
  
  ...
  
  {/* Projects */}
  <section class="section" id="projects">
    <p><hr></hr></p>
    <h6 class="section-title">Projects</h6>
    <div class="projects_container">
      <div class="project_container">
        <h6 class="project_title">위드피스 : 공동주거공간 커뮤니티 서비스</h6>
        <p class="project_subtitle">3인 프로젝트</p>
        <button class="btn_more" id="project1" onClick={function (event) {
          event.preventDefault();
          proj_btn1_setVisible(!proj_btn1_visibile);
        }}>
          {proj_btn1_visibile ? "접기" : "더보기"}
        </button>
        {proj_btn1_visibile && <Project1 />}
      </div><br />
    </div>
  </section>
}
```  
  - proj_btn1_visibile이 true일 경우 Project1 컴포넌트가 보이고, false일 경우 컴포넌트는 보이지 않음 
  - 삼항연산자 사용, proj_btn1_visibile이 true면 버튼 이름을 "접기", false면 "더보기"로 나오게함
