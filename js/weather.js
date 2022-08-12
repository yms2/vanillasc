const LS_GPSName = 'GPS';
const API_KEY = 'bbbe8e78fd3bb0a021fe0b1924927d8a';
const weather = document.querySelector(".weather");

function getWeather(lat,lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        ).then(function(data) {
            return data.json();
        }).then(function(json){
            const temper = json.main.temp;
            const place = json.name;
            weather.innerText = `장소 : ${place} @ 온도 : ${temper}`;

                        //속성으로 css 설정
            //weather.setAttribute('style','font-size : 30px; color : white;');

                        //프로퍼티로 css 설정
            weather.style.color = 'white';
            weather.style.fontSize = '30px';
        });        
    }


function LS_SaveGPS(GPSObj){
    localStorage.setItem(LS_GPSName,JSON.stringify(GPSObj));
}
function SaveGPSSuccess(position){
    const lat = position.coords.latitude; //위도 얻기
    const lon = position.coords.longitude; //경도 얻기
    const GPSObj = {
        lat,
        lon
    }
    LS_SaveGPS(GPSObj);
    getWeather(lat,lon);
}

function SaveGPSError(){
    console.log("failed");
}

function SaveGPS(){
    navigator.geolocation.getCurrentPosition (SaveGPSSuccess,SaveGPSError);
    //navigator.geolocation 객체를 이용해서 gps 정보를 얻는다
    //getCurrentPosition빠른 응답 / 정확도는 낮음
    // getCurrentPosition 은 (첫번째인자,두번쨰인자)\
}

function loadGPS(){
    const LS_GPSInfo = localStorage.getItem(LS_GPSName);
    if(LS_GPSInfo === null || LS_GPSInfo === undefined){
        //GPS정보얻기
        SaveGPS();
    } else {
        const parseGPS = JSON.parse(LS_GPSInfo);
        //GPS 정보 가져오기
        getWeather(parseGPS.lat,parseGPS.lon);
    }
}

function init(){
    loadGPS();
}

init();
