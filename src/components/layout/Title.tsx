import { View, Text, StyleSheet } from 'react-native';
import React from 'react'

interface Props {
    title: string,
}

const Title = ({title}: Props) => {
  return (
    <View style={styles.textConteiner}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,        
    },
    textConteiner:{
        paddingHorizontal: 10,
        paddingVertical: 5,
    },


})