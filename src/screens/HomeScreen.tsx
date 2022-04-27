import React from 'react'
import { View, Text, SafeAreaView, SafeAreaViewBase } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicatorCustom } from '../components/layout/ActivityIndicatorCustom';
import Title from '../components/layout/Title';
import WeatherCard from '../components/WeatherCard';
import { useWeatherForecast } from '../hooks/useWeatherForecast';



const HomeScreen = () => {
  
  const { weather, isLoading } = useWeatherForecast()
  
  console.log(weather)
  
  if (isLoading) {
    return <ActivityIndicatorCustom/>
  }


  return (
    <SafeAreaView>
      <ScrollView>
        <Title title='Mi Ciudad Actual'/>
        <View>
          {
            weather && 
              <WeatherCard weather={weather}/>
          }
         </View>
         <Title title='Otras Ciudades'/>
      </ScrollView>
    </SafeAreaView>

    
  )
}

export default HomeScreen