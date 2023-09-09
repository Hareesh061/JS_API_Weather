

const apiKey = "3265874a2c77ae4a04bb96236a642d2f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metrics&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city){
    const response = await fetch(apiUrl + city + '&appid=${apiKey}');

   if(response.status == 404){
    document.querySelector(".error").style.display ="block";
    document.querySelector(".weather").style.display ="none";
   }else{

    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

   if(data.weahter[0].main == "Clouds"){
    weatherIcon.src = "images/clouds.png";

   }else if(data.weahter[0].main == "clear"){
    weatherIcon.src = "images/clear.png";
   }

   else if(data.weahter[0].main == "rain"){
    weatherIcon.src = "images/rain.png";
   }

   else if(data.weahter[0].main == "drizzle"){
    weatherIcon.src = "images/drizzle.png";
   }

   else if(data.weahter[0].main == "mist"){
    weatherIcon.src = "images/mist.png";
   }

   document.querySelector(".weather").style.display = "block";
   document.querySelector(".error").style.display = "none";

   }


}



searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
    
});
checkWeather();
