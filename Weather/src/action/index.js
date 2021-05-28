import axios from 'axios'

// const API_KEY ='854a47f74df0c6977f85936faa792b87'

const API_KEY = 'b3aaa0b3323c0baab93aff38f75b44cb'

const ROOT_URL= `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url =`${ROOT_URL}&q=${city}`;
    const request = axios.get(url)
    console.log('request', request)

    return {
        type: FETCH_WEATHER,
        payload : request
    }
}