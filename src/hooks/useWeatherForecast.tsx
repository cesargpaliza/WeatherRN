import { useEffect, useState } from "react"
import openWeather from "../api/openWeather"
import { WeatherForecast } from "../interfaces/openWeather"

export const useWeatherForecast = () => {

  const [isLoading, setIsloading ] = useState(true)
  const [weather, setWeather] = useState<WeatherForecast>()

  const getWeatherForecast = async () => {    
    const resp = await openWeather.get<WeatherForecast>('/weather?q=Ciudad Autónoma de Buenos Aires')
    setWeather(resp.data)
    setIsloading(false)
  }

  useEffect(() => {
    getWeatherForecast()
  }, [])

  return {
    weather,
    isLoading,
  }
}

