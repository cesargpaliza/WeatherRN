import { View, ActivityIndicator } from 'react-native'
import React from 'react'

export const ActivityIndicatorCustom = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color='#2980B9' size={50} />
    </View>
  )
}

