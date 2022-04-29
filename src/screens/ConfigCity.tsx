import { View, Text, Button } from 'react-native'
import React from 'react'
import DropdownCustom from '../components/layout/DropdownCustom'
import { useEffect, useState } from 'react';
import { getCities } from '../api/fakeApi/getCities';
import { ActivityIndicatorCustom } from '../components/layout/ActivityIndicatorCustom';
import ButtonCustom from '../components/layout/ButtonCustom';
import Navigation from '../navigation/Navigation';

const ConfigCity = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [isValueSelected, setIsValueSelected ] = useState(false)
  const [cities, setCities] = useState<any>([])
  const [value, setValue] = useState<Object>({})

  useEffect(() => {
    const citiesOfBackend = getCities()
    setCities(citiesOfBackend)
    setIsLoading(false)
  }, [])

  const saveCity = (a) => {
    console.log('a')
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
          <View style={{flex: 1}}>
            <Text>Seleccione la Ciudad</Text>
            <DropdownCustom data={cities} value={value} setValue={setValue} setIsValueSelected = {setIsValueSelected} />
            <Text>Ciudad Seleccionada:</Text>
            {
              isValueSelected &&
              <View style={{height:200}}>
                <Text>{value.label}</Text>
                <ButtonCustom text={'Guardar Ciudad'} isLink={false} action={() => saveCity('a')} />
              </View>
            }
          </View>
        </>
      }
    </>
  )
}

export default ConfigCity