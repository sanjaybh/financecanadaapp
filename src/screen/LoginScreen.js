// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

import {AIRCODE_BASE_API_URL} from '../../Constants/ExternalLinks'

//import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import {AIRCODE_BASE_API_URL} from 'react-native-dotenv';

import Loader from '../components/Loader';

const LoginScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('sanjay@gmail.com');
  const [userPassword, setUserPassword] = useState('sanjay');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

  const storeData = async (key, value) => {
    try {      
      //const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, value);
      //console.log("setting data 1")
      //console.log("jsonValue 1 - "+jsonValue)
    } catch (e) {
      console.log(e)
    }
  };

  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);
    let dataToSend = {email: userEmail, password: userPassword};
    // let formBody = [];
    // for (let key in dataToSend) {
    //   let encodedKey = encodeURIComponent(key);
    //   let encodedValue = encodeURIComponent(dataToSend[key]);
    //   formBody.push(encodedKey + '=' + encodedValue);
    // }
    // formBody = formBody.join('&');

    //console.log("LOGGING - "+JSON.stringify(dataToSend))

    fetch(`${AIRCODE_BASE_API_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: {
        //Header Defination
        //'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', 
        'Content-Type': 'application/json',   
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        //console.log("======>"+JSON.stringify(responseJson));
        // If server response message same as Data Matched
        if (responseJson.success === true) {
          //AsyncStorage.setItem('user_id', responseJson.data.email);
          //AsyncStorage.setItem('user_data', JSON.stringify(responseJson));

          //Storing data in async storage
          const name = responseJson.data.name;
          const email = responseJson.data.email;
          //console.log("Name / Email - ", name, email)
          storeData("name", name);
          storeData("email", email);

          //storeData("user_name", responseJson.data.name);

          //AsyncStorage.setItem('accessToken', responseJson.data.accessToken);
          //console.log(responseJson.data);
          //console.log("Success --->")
          navigation.replace('DrawerNavigationRoutes');
        } else {
          setErrortext(responseJson.msg);
          console.log('Please check your email id or password');
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../Image/aboutreact.png')}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) =>
                  setUserEmail(UserEmail)
                }
                value={userEmail}
                placeholder="Enter Email" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                value={userPassword}
                onChangeText={(UserPassword) =>
                  setUserPassword(UserPassword)
                }
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
              New Here ? Register
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});