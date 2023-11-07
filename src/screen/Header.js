import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native'

import { useSelector } from 'react-redux';

const Header = () => {
const [cartItem, setCartItem] = useState(0);

  const cartData = useSelector((state)=>state.reducer)
 
  useEffect(()=> {
    setCartItem(cartData.length);
  }, [cartData]);

  return (
    <View style={styles.container}>
      <Text style={styles.context}> 
        <View style={styles.innContainer}>
          <Text style={styles.cartItem}>{cartItem}</Text>
        </View>
      </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
       textAlign:'right', padding:7, backgroundColor:'orange'
    },
    context:{
      textAlign:'right', fontSize:30,  padding:3, backgroundColor:'orange', alignItems:'center'
    },
    innContainer:{
      backgroundColor:'yellow', borderRadius:20, height:40, width:40
    },
    cartItem:{
      fontSize:25, textAlign:'center'
    }
})