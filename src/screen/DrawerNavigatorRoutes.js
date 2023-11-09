// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from 'react';
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


const HomeScreenStack = ({navigation}) => {
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

const SettingScreenStack = ({navigation}) => {
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
  //screenOptions, drawerContentOptions
  return (
    <Drawer.Navigator
      screenOptions={{
        activeTintColor: '#e91e63',
        color: '#f2f0ce',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
        backgroundColor: '#c6cbef',
        width: 240
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="HomeScreenStack"
        options={{drawerLabel: 'Home Screen'}}
        component={HomeScreenStack}
      />
      <Drawer.Screen
        name="SettingScreenStack"
        options={{drawerLabel: 'Setting Screen'}}
        component={SettingScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;