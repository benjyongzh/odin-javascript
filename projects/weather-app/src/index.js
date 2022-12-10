import './style.css';

const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";

const apiKey = "25ab02671e4a2079d81ab8a2c5b2c733";

const searchbar = document.querySelector('#search-bar');
const searchbutton = document.querySelector('#search-button');
searchbutton.addEventListener('click', event => {
    event.preventDefault();
    const location = searchbar.value;
    getWeatherDataOfLocation(location);
});

const contentLocation = document.querySelector('.location');

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

function displayData(data){
    contentLocation.textContent = data.name;
}





