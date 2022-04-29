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
  
  // useEffect(() => {
  //   const citiesStorage = getData()
  //   setCities(citiesStorage)
  // })

  const getData = async () => {
    try {
      const value_0 = await AsyncStorage.getItem('city_0')
      // const value_1 = await AsyncStorage.getItem('city_1')
      // const value_2 = await AsyncStorage.getItem('city_2')
      // const value_3 = await AsyncStorage.getItem('city_3')
      // const value_4 = await AsyncStorage.getItem('city_4')
      // const value_5 = await AsyncStorage.getItem('city_5')
      if(value_0 !== null){ setCities({...cities, city_0 : value_0 }) }
      // if(value_1 !== null){ setCities({...cities, city_1 : value_1 }) }
      // if(value_2 !== null){ setCities({...cities, city_2 : value_2 }) }
      // if(value_3 !== null){ setCities({...cities, city_3 : value_3 }) }
      // if(value_4 !== null){ setCities({...cities, city_4 : value_4 }) }
      // if(value_5 !== null){ setCities({...cities, city_5 : value_5 }) }
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
        <View style={{flex: 1}}>
        </View>
        {
          cities.city_0 == null 
          ? <ButtonCustom text={'Selecciona una ciudad'} link={'ConfigCity'} payload={{city: 'city_0'}} isLink={true}/>
          : <WeatherCard weather={weather}/>
        }
        <Title title='Otras Ciudades'/>
        {
          cities.city_1 == null 
          ? <ButtonCustom text={'Selecciona una ciudad'} link={'ConfigCity'} payload={{city: 'city_1'}} isLink={true}/>
          : <WeatherCard weather={weather}/>
        }
        {
          cities.city_2 === null 
          ? <ButtonCustom text={'Selecciona una ciudad'} link={'ConfigCity'} payload={{city: 'city_2'}} isLink={true}/>
          : <WeatherCard weather={weather}/>
        }
      </ScrollView>
    </SafeAreaView>

    
  )
}

export default HomeScreen