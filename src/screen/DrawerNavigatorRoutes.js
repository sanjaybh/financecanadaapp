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
import ContactScreen from '../drawerScreens/ContactScreen';

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

const ContactScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="ContactScreen"
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
        name="ContactScreen"
        component={ContactScreen}
        options={{
          title: 'Contact Us', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

//drawerContentOptions / screenOptions

const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      screenOptions_={{
        activeTintColor: '#2acb18',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: '#898a48'},
        labelStyle: {
          color: '#d94c4c',
        },
        overlayColor: 'transparent',
        drawerStatusBarAnimation:'fade',
        drawerStyle: {
          backgroundColor: '#ebef0c',
          width: 240,
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="HomeScreenStack"
        options={{drawerLabel: 'Home'}}
        component={HomeScreenStack}
      />
      <Drawer.Screen
        name="SettingScreenStack"
        options={{drawerLabel: 'Setting'}}
        component={SettingScreenStack}
      />
      <Drawer.Screen
        name="ContactScreenStack"
        options={{drawerLabel: 'Contact Us'}}
        component={ContactScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;