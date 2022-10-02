const API_KEY = 'e8e244f92147d6c0f01888c0244dcc74';


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang={us}}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
    
}
function onGeoError(){
    alert("Can't find you. No weather for you.")

}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
