import React from 'react'; 
import { Text, View, TextInput, ImageBackground, 
	StyleSheet, Dimensions } from 'react-native'; 

const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const backgroundImgs = [{
	id: '1', path: require('../assets/bgImg_1.jpg')
},{
	id: '2', path: require('../assets/bgImg_2.jpg')
},{
	id: '3', path: require('../assets/bgImg_3.jpg')
},{
	id: '4', path: require('../assets/bgImg_4.jpg')
},{
	id: '5', path: require('../assets/bgImg_5.jpg')
}];

const BackgroundImg = () => {
    let randomNum = randomIntFromInterval(1,5);

    console.log("No - "+randomNum)

    return ( 
        <View style={styles.container}> 
            <ImageBackground source={backgroundImgs[randomNum].path} resizeMode="stretch" style={styles.img}>
                <Text style={styles.textInput}>Some text</Text>
            </ImageBackground>
        </View>
    ); 
}; 

export default BackgroundImg; 

const styles = StyleSheet.create({ 
    container:{
        flex:1
    },
    img: { 
        height: screenHeight, 
        width: screenWidth, 
        justifyContent: 'center', 
        alignItems: 'center', 
    }, 
    textInput: { 
        fontSize: 40,
        fontWeight: 'bold',
        color: 'red',
        fontFamily: 'Ariel'     
    }
});
