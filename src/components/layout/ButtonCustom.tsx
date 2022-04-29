import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

interface Props {
    text: string,
    link?: string,
    isLink?: boolean,
    action?: () => void,
}

const ButtonCustom = ({ text = 'Boton', link , isLink = true, action }: Props ) => {

  const navigation = useNavigation();  

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity 
        onPress={
          isLink ? () => navigation.navigate(link)
                 : () => action()
        }
        style={styles.button}
      >
          <Text style={styles.textButon}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonCustom

const styles = StyleSheet.create({
    buttonContainer: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#2980B9",
      padding: 10,
      borderRadius: 10,
    },
    textButon: {
      fontSize: 15,
      color: "#ECF0F1"
    },
  });