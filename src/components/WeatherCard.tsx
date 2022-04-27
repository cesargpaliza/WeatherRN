import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { WeatherForecast } from '../interfaces/openWeather';

interface Props {
    weather: WeatherForecast
}


const WeatherCard = ({ weather } : Props) => {

  const { description } = weather.weather[0]
  const { temp, temp_max, temp_min } = weather.main
  const { country } = weather.sys
  const { name } = weather

  return (
    <View style={styles.card}>
      <Text>{  name }</Text><Text>{  country }</Text>
      <Text>{ description }</Text>
      <Text>Temperatura Actual: { temp  }°</Text>
      <Text>{ temp_max }</Text>
      <Text>{  temp_min }</Text>
      <TouchableOpacity>
          <View>
              <Text>Ver detalle</Text>
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
    }
})
