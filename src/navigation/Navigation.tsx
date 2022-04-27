import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import ForecastExtendedScreen from '../screens/ForecastExtendedScreen'
import { Text } from 'react-native'

const Stack = createStackNavigator()

function Navigation() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="ForecastExtendedScreen" component={ForecastExtendedScreen} />
    </Stack.Navigator>
  );
}

export default Navigation
