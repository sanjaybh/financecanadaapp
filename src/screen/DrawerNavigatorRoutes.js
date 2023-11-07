// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from 'react';

// Import Navigators from React Navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {createNativeStackNavigator, createStackNavigator} from '@react-navigation/native-stack';

// Import Screens
import HomeScreen from '../drawerScreens/HomeScreen';
import SettingsScreen from '../drawerScreens/SettingsScreen';
import CustomSidebarMenu from '../components/CustomSidebarMenu';
import NavigationDrawerHeader from '../components/NavigationDrawerHeader';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const homeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const settingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = (props) => {
  return (
    <Text>Testing</Text>
    // <Drawer.Navigator
    //   drawerContentOptions={{
    //     activeTintColor: '#cee1f2',
    //     color: '#cee1f2',
    //     itemStyle: {marginVertical: 5, color: 'white'},
    //     labelStyle: {
    //       color: '#d8d8d8',
    //     },
    //   }}
    //   screenOptions={{headerShown: false}}
    //   drawerContent={CustomSidebarMenu}>
    //   <Drawer.Screen
    //     name="homeScreenStack"
    //     options={{drawerLabel: 'Home Screen'}}
    //     component={homeScreenStack}
    //   />
    //   <Drawer.Screen
    //     name="settingScreenStack"
    //     options={{drawerLabel: 'Setting Screen'}}
    //     component={settingScreenStack}
    //   />
    // </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;