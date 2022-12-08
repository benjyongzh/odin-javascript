import './style.css';

const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";

const apiKey = "25ab02671e4a2079d81ab8a2c5b2c733";

function constructFetchURL(url, location, key){
    return url+location+"&appid="+key;
}

async function getWeatherDataOfLocation(location){
    const text = constructFetchURL(apiURL, location, apiKey);
    console.log(text);
    const response = await fetch(text, {mode: 'cors'});
    console.log(response);
};

getWeatherDataOfLocation("london");