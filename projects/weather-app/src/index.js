import './style.css';

const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";

const apiKey = "25ab02671e4a2079d81ab8a2c5b2c733";

function constructFetchURL(url, location, key){
    return url+location+"&appid="+key+"&units=metric";
}

async function getWeatherDataOfLocation(location){
    try {
        const text = constructFetchURL(apiURL, location, apiKey);
        // console.log(text);
        const response = await fetch(text, {mode: 'cors'});
        const info = await response.json();
        //console.log(info);
        return info;
    } catch (error) {
        console.log(error);
    };
};

async function extractData(arg){
    try {
/*         const name = data.name;
        const weather = {
            'type': data.weather,
            'description': data.weather,
            'temperature': data.main.temp,
            'humidity': data.main.humidity,
            'wind': data.wind,
        };
        return await Promise.all([name, weather]); */
        //const name = await arg;
        console.log(await arg);
        console.log(await arg.name);

    } catch (error) {
        console.log(error);
    }

}

const data = getWeatherDataOfLocation("london");
const extracted = extractData(data);
console.log(extracted);
