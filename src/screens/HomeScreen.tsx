import React from 'react'
import { View, Text, SafeAreaView, SafeAreaViewBase } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicatorCustom } from '../components/layout/ActivityIndicatorCustom';
import DropdownCustom from '../components/layout/DropdownCustom';
import Title from '../components/layout/Title';
import WeatherCard from '../components/WeatherCard';
import { useWeatherForecast } from '../hooks/useWeatherForecast';
import AsyncStorage from '@react-native-async-storage/async-storage';


//import { getCountries } from '../api/fakeApi/getCountries';
import { getCities } from '../api/fakeApi/getCities';
import { useEffect, useState } from 'react';
import ButtonCustom from '../components/layout/ButtonCustom';


const HomeScreen = () => {
  
  const { weather, isLoading } = useWeatherForecast()  


  const [cities, setCities] = useState<any>({
    city_0: null,
    city_1: null,
    city_2: null,
    city_3: null,
    city_4: null,
    city_5: null,
  })
  
  useEffect(() => {
    const citiesStorage = getData()
    setCities(citiesStorage)
  }, [])
  

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@cities')
      console.log(jsonValue)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
    }
  }


  if (isLoading) {
    return <ActivityIndicatorCustom/>
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Title title='Mi Ciudad Actual'/>
        {
          cities.city_0 == null 
          ? <ButtonCustom text={'Selecciona una ciudad'} link={'ConfigCity'} isLink={true}/>
          : <WeatherCard weather={weather}/>
        }
        <Title title='Otras Ciudades'/>
        {
          cities.city_1 == null 
          ? <ButtonCustom text={'Selecciona una ciudad'} link={'ConfigCity'} isLink={true}/>
          : <WeatherCard weather={weather}/>
        }
        {
          cities.city_2 === null 
          ? <Text>Elegir Ciudad</Text>
          : <WeatherCard weather={weather}/>
        }
          
        

      </ScrollView>
    </SafeAreaView>

    
  )
}

export default HomeScreen