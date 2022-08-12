const form = document.querySelector("#form"), 
    h4 = document.querySelector("#h4");
    input = form.querySelector("input");

function showuser(){
    h4.classList.remove('h4');
    form.classList.remove('show');
    form.classList.add('form');
    h4.classList.add('show');
    h4.innerText =localStorage.getItem("user");
}
function saveName(text){
    localStorage.setItem('user',text);
    showuser();
    //저장소에 user : 이름 저장
}

function handleSubmit(event){
    event.preventDefault(); //이벤트 초기화
    form.addEventListener("submit",saveName(input.value));

}

function isuser() {
    if(localStorage.getItem("user") === null){
        form.classList.remove('form');
        form.classList.add('show');
        form.addEventListener("submit",handleSubmit);
        //user 가 없으면 user입력
    } else {
        showuser(); //form 가리고 h4에 input.value 보여준다
        //user가 있으면 user 보여준다
    }
}

function init() {
    isuser();
}

init();
