let ApiKey = "a3a11c96534a06acf8d9a34f4e5b36d3";
let ApiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric";
let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");

let weatherIcon = document.querySelector(".weather-icon");

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    weatherData(searchBox.value);
});

async function weatherData() {
    const response = await fetch(ApiUrl + "&q=" + searchBox.value + "&appid=" + ApiKey);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else{
        document.querySelector(".error").style.display = "none";
    }

    const data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed +"km/h"


if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/clouds.png";
} else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png";
} else if (data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png";
} else if (data.weather[0].main == "Mist"){
    weatherIcon.src = "images/mist.png";
} else if (data.weather[0].main == "Snow"){
    weatherIcon.src = "images/snow.png";
} else if (data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/drizzle.png";
}

document.querySelector(".weather").style.display = "block";

}

