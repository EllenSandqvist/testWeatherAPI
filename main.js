// 1) add variables
// 2) async funktion
// 3) response = await och fetch json-fil/url
// 4) if-sats för response.ok och else för "HTTP-erros: " + response.status;
// 5) funktionsanrop!
// 6) console.log(response.ok)
// 7) omvandla respons till js med await och .json();
// 8) om varje element i json-filen är intressant = loopa, annars = välj element med dot notation eller []
// 9) Skapa ev. html element där hämtad data kommer att läggas in
// 10) Fyll skapade element med data
// 11) Lägg ev. till klass för styling eller styla direkt i js
// 12) Appendchild för skapat element
// 13) Behövs eventListener på något element?

//import apiKey from config.js 
import { apiKey } from "./config.js";

// 1)
const Umeå = `https://api.openweathermap.org/data/2.5/weather?lat=63.8284&lon=20.2597&units=metric&appid=${apiKey}`;

const London = `https://api.openweathermap.org/data/2.5/weather?lat=51.509865&lon=-0.118092&units=metric&appid=${apiKey}`;

const Stockholm = `https://api.openweathermap.org/data/2.5/weather?lat=59.334591&lon=18.063240&units=metric&appid=${apiKey}`;

const NewYork = `https://api.openweathermap.org/data/2.5/weather?lat=40.7143&lon=-74.0060&units=metric&appid=${apiKey}`;

const Lissabon = `https://api.openweathermap.org/data/2.5/weather?lat=38.71667&lon=-9.13333&units=metric&appid=${apiKey}`;

const container = document.querySelector('.container');

//2)
async function getWeather(city){
    //3)
    let response = await fetch(city);
    //4)
    if(response.ok){
        //6)
        console.log(response.ok);
        //7)
        const cityWeather = await response.json();
        console.log(cityWeather);

        //8) Vilka element i cityWeather är intressanta:
        const cityTemp = Math.round(cityWeather.main.temp);

        const weatherDescription = cityWeather.weather[0].description;

        const cityName = cityWeather.name;
        console.log(cityName);
        
        //9)
        const weatherCard = document.createElement('div');
        const cityH2 = document.createElement('h2');
        const cityParagrapgh = document.createElement('p');
        const weatherIcon = document.createElement('i');
        const figCapDescription = document.createElement('figcaption');

        //10) 
        cityH2.textContent = cityName;
        cityParagrapgh.textContent = cityTemp + "\u00B0C";
        figCapDescription.textContent = weatherDescription;
        
        if (weatherDescription === 'overcast clouds'|| weatherDescription === 'scattered clouds'){
            //mulet
            weatherIcon.innerHTML = '<i class="fa-solid fa-cloud"></i>';
        } else if (weatherDescription === 'broken clouds' || weatherDescription === 'few clouds'){
            //växlande molnighet
            weatherIcon.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>';
        } else if (weatherDescription === 'clear sky'){
            //soligt
            weatherIcon.innerHTML = '<i class="fa-regular fa-sun"></i>';
        } else if (weatherDescription === 'shower rain' || weatherDescription === 'rain'){
            //regn
            weatherIcon.innerHTML = '<i class="fa-solid fa-cloud-rain"></i>';
        } else if (weatherDescription === 'thunderstorm'){
            //åska
            weatherIcon.innerHTML = '<i class="fa-solid fa-cloud-bolt"></i>';
        } else if (weatherDescription === 'snow'|| weatherDescription === 'light snow'){
            //snö
            weatherIcon.innerHTML = '<i class="fa-regular fa-snowflake"></i>';
        } else if (weatherDescription === 'mist' || weatherDescription === 'fog'){
            //dimma
            weatherIcon.innerHTML = '<i class="fa-solid fa-smog"></i>';
        }
        
        //11
        weatherCard.classList.add('weather-card');
        cityH2.classList.add('city');
        cityParagrapgh.classList.add('temp');
        figCapDescription.classList.add('description');
        weatherIcon.classList.add('icon');
        
        //12
        container.appendChild(weatherCard);
        weatherCard.appendChild(cityH2);
        weatherCard.appendChild(cityParagrapgh);
        weatherCard.appendChild(weatherIcon);
        weatherCard.appendChild(figCapDescription);
        
        

    //4)
    } else {
        console.log("HTTP-erros: " + response.status);
    } 
}

//5)
getWeather(Umeå);
getWeather(Stockholm);






// function success(position) {
//     const userLat = position.coords.latitude;
//     const userLon = position.coords.longitude;

//     console.log(userLat);
//     console.log(userLon);

//     const userApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${userLat}&lon=${userLon}&units=metric&lang=sv&appid=ea8b9b802d78dd4cf2eea6e36255a0ac`;

//     getWeather(userApiUrl);
// }

// function error(){
//     console.log("Unable to retrieve your location");
//     alert(`ERROR(${error.code}): ${error.message}`);
// }

// if(!navigator.geolocation){
//     console.log("Geolocation is not supported by your browser");
// } else {
//     navigator.geolocation.getCurrentPosition(success, error);
// }


// const api5dayUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=63.8284&lon=20.2597&units=metric&lang=sv&appid=ea8b9b802d78dd4cf2eea6e36255a0ac";


// async function getForecast(){
//     //3)
//     let response = await fetch(api5dayUrl);
//     //4)
//     if(response.ok){
//         //6)
//         console.log(response.ok);
//         //7)
//         const cityForecast = await response.json();
//         console.log(cityForecast);
 
//     //4)
//     } else {
//         console.log("HTTP-erros: " + response.status);
//     } 
// }

// getForecast();