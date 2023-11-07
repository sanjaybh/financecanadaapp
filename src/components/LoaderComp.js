import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'

const LoaderComp = () => {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.main}>
      <ActivityIndicator size={'large'} animating={show}/>

      <ActivityIndicator size={80} color="gold" animating={show}/>
      <ActivityIndicator size={30} color="blue" animating={show}/>
      <ActivityIndicator size={30} color="red" animating={show}/>

      <Button title="show loader" onPress={()=>setShow(!show)} />

    </View>
  )
}

export default LoaderComp

const styles = StyleSheet.create({
  main:{
    flex:1, alignItems: 'center', justifyContent:'center'
},
})