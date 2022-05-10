import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SetupScreen} from '../screens/authentication/setup/setup-screen';
import {LoginScreen} from '../screens/authentication/login/login-screen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName= 'Login'>
      <Stack.Screen name="Login" component={LoginScreen } />
      <Stack.Screen name="setup" component={SetupScreen } />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
