import './style.css';

// constants
const apiURLCurrent = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiURLForecast = "https://api.openweathermap.org/data/2.5/forecast?q=";
const apiKey = "25ab02671e4a2079d81ab8a2c5b2c733";

// DOM item references
const contentCurrentLocation = document.querySelector('.location');
const contentCurrentTemperature = document.querySelector('.weather-current>.temperature');
const contentCurrentWeatherType = document.querySelector('.weather-current>.type');
const contentCurrentHumidity = document.querySelector('.weather-current>.humidity');
const contentCurrentWind = document.querySelector('.weather-current>.wind-info');

const contentForecastTable = document.querySelector('.weather-forecast');

const searchbar = document.querySelector('#search-bar');
const searchbutton = document.querySelector('#search-button');

//global variables
const forecastCount = 8;

// DOM manipulation events
searchbutton.addEventListener('click', event => {
    event.preventDefault();
    const location = searchbar.value;
    getCurrentWeatherOfLocation(location)
    .then(data => {
        const filteredData = extractCurrentWeatherData(data);
        displayCurrentData(filteredData);
    });
    getForecastWeatherOfLocation(location)
    .then(data => {
        const filteredData = extractForecastWeatherData(data);
        console.log(filteredData);
        clearForecastDOM();
        displayForecastData(filteredData);
    });
    searchbar.value = "";
});

function constructFetchURL(url, location, key){
    return url+location+"&appid="+key+"&units=metric";
}

async function getCurrentWeatherOfLocation(location){
    try {
        const text = constructFetchURL(apiURLCurrent, location, apiKey);
        const response = await fetch(text, {mode: 'cors'});
        const info = await response.json();
        console.log(info);
        return info;
    } catch (error) {
        console.log(error);
    };
};

async function getForecastWeatherOfLocation(location){
    try {
        const text = constructFetchURL(apiURLForecast, location, apiKey);
        const response = await fetch(text, {mode: 'cors'});
        const info = await response.json();
        console.log(info);
        return info;
    } catch (error) {
        console.log(error);
    };
};

function extractCurrentWeatherData(data){
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

function extractForecastWeatherData(data){
    let weather = [];
    for (let i = 0; i < forecastCount; i++){
        let [date, time] = data.list[i].dt_txt.split(" ");
        let timezone = data.city.timezone/3600;
        let timeHour = parseInt(time.split(":")[0]);
        timeHour += timezone;
        if (timeHour > 23) timeHour -= 24;
        // console.log(timeHour);
        let AMorPM = timeHour<13 ? "AM" : "PM";
        if (timeHour > 12) timeHour -= 12;
        const set = {
            'date': date,
            'time': timeHour.toString() + AMorPM,
            'type': data.list[i].weather[0].main,
            'description': data.list[i].weather[0].description,
            'temperature': data.list[i].main.temp,
            // 'humidity': data.list[i].main.humidity,
            // 'wind': data.list[i].wind,
        };
        weather.push(set);
    }
    
    return weather;
};

// DOM manipulation functions
function displayCurrentData(data){
    contentCurrentLocation.textContent = data.name;
    contentCurrentTemperature.textContent = formatTemperature(data.weather.temperature);
    contentCurrentWeatherType.textContent = data.weather.description;
    // contentCurrentWeatherType.textContent = data.weather.type;
    contentCurrentHumidity.textContent = formatHumidity(data.weather.humidity);
    contentCurrentWind.textContent = `${data.weather.wind.speed}m/s ${degToCompass(data.weather.wind.deg)}`;
};

function displayForecastData(data){
    data.forEach(forecast => {
        const row = createForecastRow(forecast);
        contentForecastTable.appendChild(row);
    });
};

function clearForecastDOM() {
    contentForecastTable.replaceChildren();
};

function createForecastRow(data){
    const row = document.createElement('div');
    row.classList.add('forecast-info');

    const dateColumn = createComponent('date', data.date);
    row.appendChild(dateColumn);
    const timeColumn = createComponent('time', data.time);
    row.appendChild(timeColumn);
    // const typeColumn = createComponent('forecast type', data.type);
    const typeColumn = createComponent('type', data.description);
    row.appendChild(typeColumn);
    const temperatureColumn = createComponent('temperature', formatTemperature(data.temperature));
    row.appendChild(temperatureColumn);

    return row;
};

function createComponent(className, content){
    const component = document.createElement('div');
    component.classList.add(className);
    component.textContent = content;
    return component;
}

// util
function degToCompass(num) {
    const val = Math.floor((num / 45) + 0.5);
    const arr = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    return arr[(val % 8)];
};

function formatTemperature(num) {
    return num.toFixed(1).toString() + "°C";
};

function formatHumidity(num) {
    return num + "%";
}