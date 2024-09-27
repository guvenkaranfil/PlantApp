import React from 'react';

import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {store} from './src/store';
import GetStarted from './src/screens/getStarted';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="getStarted" component={GetStarted} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
