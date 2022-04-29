import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import DropdownCustom from '../components/layout/DropdownCustom'
import { useEffect, useState } from 'react';
import { getCities } from '../api/fakeApi/getCities';
import { ActivityIndicatorCustom } from '../components/layout/ActivityIndicatorCustom';
import ButtonCustom from '../components/layout/ButtonCustom';
import Navigation from '../navigation/Navigation';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ConfigCity = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [isValueSelected, setIsValueSelected ] = useState(false)
  const [cities, setCities] = useState<any>([])
  const [value, setValue] = useState<Object>({})
  const { city } = useRoute().params;

  useEffect(() => {
    const citiesOfBackend = getCities()
    setCities(citiesOfBackend)
    setIsLoading(false)
  }, [])

  const saveCity = () => {    
    storeData(city)
  }

  const storeData = async (city) => {
    try {
      await AsyncStorage.setItem(city, value.label)
    } catch (e) {
      
    }
  }
  
  if (isLoading) {
    return <ActivityIndicatorCustom />
  }


  return (
    <>
      {
        !isLoading
        &&
        <>
          <View style={{flex: 1, padding:10}}>
            <Text style={styles.title}>Seleccione la Ciudad</Text>
            <DropdownCustom data={cities} value={value} setValue={setValue} setIsValueSelected = {setIsValueSelected} />
            <Text style={styles.title}>Ciudad Seleccionada:</Text>
            {
              isValueSelected &&
              <View style={{height:150, paddingTop: 20}}>
                <Text style={styles.textCitySelected}>{value.label}</Text>
                <ButtonCustom text={'Guardar Ciudad'} isLink={false} action={() => saveCity()} />
              </View>
            }
          </View>
        </>
      }
    </>
  )
}

export default ConfigCity

const styles = StyleSheet.create({  
  title: {
    fontSize: 20,
    fontWeight: 'bold',      
  },
  textCitySelected: {
    fontSize: 20,
    color: '#2980B9',
    textAlign: 'center'
  }
})