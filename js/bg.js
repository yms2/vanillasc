const body = document.querySelector("body");
//main에 있는 body라는 클래스를 body라고 설정해준다.
const IMG_NUMBER = 5;
// IMG_NUMBER을 5로 설정함
function randomNumber(){//랜덤 숫자 생성
    return Math.ceil((Math.random()*IMG_NUMBER));
}
// randomNumber이라는 변수 선언 
//Math.ceil = 주어진 숫자보다 크거나 같은 숫자중 가장 작은 숫자로
//Math.random = 주어진 범위 내에서 무작위로 숫자를 추출합니다.

function init(){
    const randomNum = randomNumber();
    IMGselect(randomNum);
}

function IMGselect(randomNum){
    const image = new Image();
    image.src = `./images/${randomNum}.jpg`
    image.className = 'bgIMG';
    body.prepend(image);
}//랜덤 숫자를 넣고 이미지 경로를 뽑아 body에 추가.

init();
