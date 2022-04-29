import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import ForecastExtendedScreen from '../screens/ForecastExtendedScreen'
import ConfigCity from '../screens/ConfigCity';

const Stack = createStackNavigator()

function Navigation() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="ConfigCity" component={ConfigCity} />
    <Stack.Screen name="ForecastExtendedScreen" component={ForecastExtendedScreen} />
    </Stack.Navigator>
  );
}

export default Navigation
