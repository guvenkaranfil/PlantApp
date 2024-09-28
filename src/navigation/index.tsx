import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import GetStarted from '../screens/getStarted';
import Onboarding from '../screens/onboarding';

export const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="getStarted" component={GetStarted} />
        <Stack.Screen name="onboarding" component={Onboarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
