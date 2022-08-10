const realTime_div = document.querySelector(".realTime_div"),
    realTIme_H1 = realTIme_div.querySelector("h1");
    realTime_js = (function(){

const realDate = new Date(),
    getHours = realDate.getHours(), //시간 가져오기
    getMinute = realDate.getMinutes(), //분 가져오기
    getSecond = realDate.getSeconds(); // 초 가져오기

    realTIme_H1.innerText = `${getHours < 10 ? `0${getHours}` : getHours} :`;
    realTIme_H1.innerText = `${getMinute < 10 ? `0${getMinute}` : getMinute} :`;
    realTIme_H1.innerText = `${getSecond < 10 ? `0${getSecond}` : getSecond}`;

    //시분초가 각각 10 미만일 때 앞에 0을 붙혀서 출력
    });

    function init(){
        setInterval(realTime_js,1000);
    }
    init();