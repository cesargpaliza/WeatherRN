import axios from "axios"

const openWeather = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    params: {
        appid: '8bfea5c6e402e9be190e56f7fb60a17a',
        lang: 'es',
        units: 'metric',
    }
})

export default openWeather