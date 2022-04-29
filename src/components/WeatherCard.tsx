import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { WeatherForecast } from '../interfaces/openWeather';
import { useNavigation } from '@react-navigation/native';
import ForecastExtendedScreen from '../screens/ForecastExtendedScreen';

interface Props {
    weather: WeatherForecast
}

const WeatherCard = ({ weather } : Props) => {

  const { description } = weather.weather[0]
  const { temp, temp_max, temp_min } = weather.main
  const { country } = weather.sys
  const { name } = weather
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{ `${name} (${country.toUpperCase()})`}</Text>
      <Text>{ description.toUpperCase() }</Text>
      <Text>Temperatura Actual: { temp  }°</Text>
      <Text>{ `Max: ${temp_max}° - Mín: ${temp_min}°` }</Text>
      <TouchableOpacity 
          onPress={() => navigation.navigate('ForecastExtended')}
      >
          <View style={styles.textButtonContainter}>
              <Text style={styles.textButton}>VER PRONOSTICO EXTENDIDO</Text>
          </View>
      </TouchableOpacity>

      <TouchableOpacity 
          onPress={() => navigation.navigate('ForecastExtended')}
      >
          <View style={styles.textButtonContainter}>
              <Text style={styles.textButton}>CAMBIAR CIUDAD</Text>
          </View>
      </TouchableOpacity>


    </View>
  )
}

export default WeatherCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        margin: 10,
        padding: 20,
        borderRadius: 7,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 7,
        elevation: 6,
    }, 
    title: {
      fontSize: 20,
      fontWeight: 'bold',      
    },
    textButton: {
      color: '#2980B9',
      textAlign: 'center',
    },
    textButtonContainter: {
      paddingTop: 10,
    },




})
