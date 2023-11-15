// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useEffect, useState } from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

//import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logout, retrieve, store } from '../helpers';

const CustomSidebarMenu = (props) => {  
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  
  const printAsyncStorage = () => { 
    AsyncStorage.getAllKeys((err, keys) => { 
      AsyncStorage.multiGet(keys, (error, stores) => { 
        let asyncStorage = {}
        stores.map((result, i, store) => {
          asyncStorage[store[i][0]] = store[i][1]
        });
        //console.log("STORE - "+JSON.stringify(asyncStorage))
        setName(asyncStorage.name)
        setEmail(asyncStorage.email)
        //console.log("EMAIL - "+asyncStorage.email);
        //console.log("NAME - "+asyncStorage.name)
      });
    });
  };
  const handleSingleWord = (name) =>{
    let _name = (name ? name : "BLANK") 
    return _name.charAt(0);
  }
  useEffect(() => {
    printAsyncStorage();
  }, []);

  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
          <Text style={{fontSize: 25, color: '#307ecc'}}>
            {handleSingleWord(name)}
          </Text>
        </View>
        <Text style={stylesSidebar.profileHeaderText}>
          {name}
        </Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={({color}) => 
            <Text style={{color: '#d8d8d8', fontWeight:'bold'}}>
              Logout
            </Text>
          }
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              'Logout',
              'Are you sure? You want to logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {
                    AsyncStorage.clear();
                    //logout();
                    props.navigation.replace('Auth');
                  },
                },
              ],
              {cancelable: false},
            );
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#307ecc',
    paddingTop: 40,
    color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#307ecc',
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
});