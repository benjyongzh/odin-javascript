import './style.css';

// constants
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "25ab02671e4a2079d81ab8a2c5b2c733";

// DOM item references
const contentCurrentLocation = document.querySelector('.location');
const contentCurrentTemperature = document.querySelector('.weather-current>.temperature');
const contentCurrentWeatherType = document.querySelector('.weather-current>.weather-type');
const contentCurrentHumidity = document.querySelector('.weather-current>.humidity');
const contentCurrentWind = document.querySelector('.weather-current>.wind-info');

const searchbar = document.querySelector('#search-bar');
const searchbutton = document.querySelector('#search-button');

// DOM manipulation events
searchbutton.addEventListener('click', event => {
    event.preventDefault();
    const location = searchbar.value;
    getWeatherDataOfLocation(location);
});


function constructFetchURL(url, location, key){
    return url+location+"&appid="+key+"&units=metric";
}

async function getWeatherDataOfLocation(location){
    try {
        const text = constructFetchURL(apiURL, location, apiKey);
        // console.log(text);
        const response = await fetch(text, {mode: 'cors'});
        const info = await response.json();
        const filteredData = extractRelevantData(info);
        displayData(filteredData);
        console.log(filteredData);
        return filteredData;
    } catch (error) {
        console.log(error);
    };
};

function extractRelevantData(data){
    const name = data.name;
    const weather = {
        'type': data.weather[0].main,
        'description': data.weather[0].description,
        'temperature': data.main.temp,
        'humidity': data.main.humidity,
        'wind': data.wind,
    };
    return {name, weather};
};

// DOM manipulation function
function displayData(data){
    contentCurrentLocation.textContent = data.name;
    contentCurrentTemperature.textContent = data.weather.temperature;
    contentCurrentWeatherType.textContent = data.weather.type;
    contentCurrentHumidity.textContent = data.weather.humidity;
    //contentCurrentWind.textContent = data.wind;
}





