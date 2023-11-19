// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import CustFooter from './CustFooter';

import {asyncStoreGetData} from '../helpers/index';

const SettingsScreen = () => {
  const [accessToken, setAccessToken] = useState();

  const handleToken = (value) => {
    const _value = JSON.parse(value);
    setAccessToken(_value);
  }

  asyncStoreGetData('accessToken', handleToken);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Example of Splash, Login and Sign Up in React Native
            {'\n\n'}
            This is the Settings Screen
            {'\n\n'}
            {accessToken}
          </Text>
        </View>
        <CustFooter type="Settings Screen" />
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;