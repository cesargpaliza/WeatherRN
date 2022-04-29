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
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Weather RN' }}/>
      <Stack.Screen name="ConfigCity" component={ConfigCity} options={{ title: 'Configurar Ciudad' }}/>
      <Stack.Screen name="ForecastExtended" component={ForecastExtendedScreen} options={{ title: 'Pronóstico Extendido' }} />
    </Stack.Navigator>
  );
}

export default Navigation
