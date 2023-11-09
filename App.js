// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
import 'react-native-gesture-handler';

// Import React and Component
import React from 'react';

// Import Navigators from React Navigation
import {createNativeStackNavigator, createStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'

// Import Screens
import LoginScreen from './src/screen/LoginScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import SplashScreen from './src/screen/SplashScreen';
import DrawerNavigatorRoutes from './src/screen/DrawerNavigatorRoutes';

const Stack = createNativeStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register', //Set Header Title
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

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup */}        
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />      
        {/* Navigation Drawer as a landing page */}         
        
        <Stack.Screen
          name="DrawerNavigationRoutes" 
          component={DrawerNavigatorRoutes} 
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />   
         
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;