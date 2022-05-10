import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { AccountListScreen } from '../screens/account-list/account-list-screen';


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
    'account-list': undefined
    'account-details': undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<NavigatorParamList>();

export const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='account-list'
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="account-list" component={AccountListScreen} />
    </Stack.Navigator>
  );
};
