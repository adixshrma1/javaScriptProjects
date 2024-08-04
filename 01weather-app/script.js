let api_key = 'e0a191f85e57ca9cfb2d9e288938c487';
let url = `https://api.openweathermap.org/data/2.5/weather?&appid=${api_key}&units=metric&q=`;

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function getWeather(city) {
    const response = await fetch(url + city);

    if (response.status == '404') {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }
    else {
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';

        const data = await response.json();

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == 'Clear') {
            weatherIcon.src = './images/clear.png'
        }
        else if (data.weather[0].main == "Clouds") {
            weatherIcon.src = 'images/clouds.png'
        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = './images/drizzle.png'
        }
        else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = './images/mist.png'
        }
        else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = './images/rain.png'
        }
        else if (data.weather[0].main == 'Snow') {
            weatherIcon.src = './images/snow.png'
        }
    }
}

searchBtn.addEventListener('click', () => {
    getWeather(searchBox.value);
})
