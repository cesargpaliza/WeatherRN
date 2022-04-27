import 'react-native-gesture-handler';
import React from 'react'
import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';

import HomeScreem  from  './src/screens/HomeScreen'
//import HomeScreem  from  "/Users/cesarpaliza/Desktop/react-native/WeatherRN/src/screens/HomeScreen.jsx"


import Navigation from './src/navigation/Navigation';
import HomeScreen from './src/screens/HomeScreen'

const App = () => {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  )
}

export default App