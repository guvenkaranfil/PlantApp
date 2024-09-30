import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '@screens/getStarted';
import Onboarding from '@screens/onboarding';
import Paywall from '@screens/paywall';
import {getStorage} from '@src/storage';

import Tabs from './tabs';

export const Stack = createNativeStackNavigator();
export default function App({initialRouteName}: {initialRouteName?: string}) {
  const onboardingCompleted = getStorage('onboardingCompleted');

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={onboardingCompleted ? 'tabs' : initialRouteName}>
        <Stack.Screen name="getStarted" component={GetStarted} />
        <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="paywall" component={Paywall} />
        <Stack.Screen name="tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
