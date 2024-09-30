import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '@screens/getStarted/index';
import Onboarding from '@src/screens/onboarding';
import Paywall from '@src/screens/paywall';

export const Stack = createNativeStackNavigator();
export default function OnboardingFlow() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="getStarted" component={GetStarted} />
      <Stack.Screen name="onboarding" component={Onboarding} />
      <Stack.Screen name="paywall" component={Paywall} />
    </Stack.Navigator>
  );
}
