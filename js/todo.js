const toDoform = document.querySelector('#todoform'),
    toDoinput = toDoform.querySelector('input'),
    LS_TODO = 'TODO',
    todolist = document.querySelector('ul');
let todos = [];


    function LS_Save(){
        lacalStorage.setItem(LS_TODO,JSON.stringify(todos));
        //객체를 STRING으로 변환해서 저장 LOCAL은 STRING 밖에 저장이 안됨.
    }

    function saveTodo2(text){
        const li = document.createElement('li'), //LI 생성
        span = document.createElement('span'), //span 생성
        delBtn = document.createElement('button'), //button 생성
        newId = todos.length+1; //li에 만들어줄 id값 생성

        delBtn.innerText = '🤓'; //버튼에 텍스트 이모티콘 추가
        delBtn.addEventListener('click',deleteLiBtn);
        span.innerText = text; // span에 입력한 값 추가
        li.appendChild(delBtn); //li에 버튼 추가
        li.appendChild(span); //li 안에 span 추가
        li.id = newId; //li에 id 값 할당
        todolist.appendChild(li); // ul에 li 추가

        const todoObj = {
            text : text, //텍스트 값
            id : newId //li id값 지정
        }
        todos.push(todoObj); //객체를 배열에 저장
        LS_Save(); 
    }

    function deleteLiBtn(EVENT){ //버튼 클릭시 삭제 이벤트
        const BtnPaLi = event.target.parentElement;
        //버튼의 부모엘리먼트 li 찾음
        BtnPaLi.remove(BtnPaLi.id); //li의 id로 제거
        const newtodo = todos.filter(function(todo){
            //fiter 은 배열의 각각의 요소에 foreach처럼 접근해서
            //true 인 경우만 갖고 새로 배열을 만든다
            
            return todo.id !== parseInt(BtnPaLi.id)
            //true인지 false인지 확인중
        });

        todos = newtodo; //todo를 newtodo로 저장
        LS_Save(); //로컬스토리지 저장
    }

    function hanmdleSubmit2(event){  
        event.preventDefault(); //이벤트 초기화
        const todovalue = toDoinput.value;
        saveTodo2(todovalue); //text값 서브밋
        toDoinput.value = "";
    }

    function isTodo(){
        const LS_TODOSS = localStorage.getItem(LS_TODO); 
        if(LS_TODOSS !== null){
            const parseTodo = JSON.parse(LS_TODOSS); 
            //로컬 데이터를 객체로저장
           parseTodo.forEach(function(todo){ 
            //forEach로 각각 데이터 뽑기
            saveTodo2(todo.text);
           });
        }
    }

    function init(){
        isTodo();
        toDoform.addEventListener('submit',hanmdleSubmit2);
        
    }
    init();
