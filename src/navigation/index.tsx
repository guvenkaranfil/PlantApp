import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Paywall from '@screens/paywall';
import {useAppSelector} from '@src/store/hooks';

import Tabs from './flows/home/tabs';
import Onboarding from './flows/onboarding';

export const Stack = createNativeStackNavigator();
export default function App() {
  const onboardingCompleted = useAppSelector(
    state => state.userReducer.onbardingCompleted,
  );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {onboardingCompleted ? (
          <>
            <Stack.Screen name="tabs" component={Tabs} />
            <Stack.Screen name="paywall" component={Paywall} />
          </>
        ) : (
          <Stack.Screen name="onboardingFlow" component={Onboarding} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
