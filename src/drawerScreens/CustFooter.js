import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustFooter = ({type}) => {
  return (
    <View>
        <Text
            style={{
                fontSize: 18,
                textAlign: 'center',
                color: 'grey',
            }}>
            Splash, Login and Register Example{'\n'}React Native - {type}
        </Text>
    <Text
        style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
        }}>
        www.mrbhans.com
    </Text>
    </View>
  )
}

export default CustFooter

const styles = StyleSheet.create({})