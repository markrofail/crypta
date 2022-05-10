import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SetupScreen} from '../screens/authentication/setup/setup-screen';
import {LoginScreen} from '../screens/authentication/login/login-screen';


/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type NavigatorParamList = {
    'setup': undefined
    'login': undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<NavigatorParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='login'
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >

      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="setup" component={SetupScreen} />
    </Stack.Navigator>
  );
};
