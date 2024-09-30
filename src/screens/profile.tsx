import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {useAppDispatch} from '@src/store/hooks';
import {updateCompleteOnboarding} from '@src/store/slices/user';

export default function Profile() {
  const dispatch = useAppDispatch();

  const resetOnboarding = () => {
    dispatch(updateCompleteOnboarding(false));
  };

  return (
    <View style={styles.center}>
      <Text>Profile</Text>
      <Pressable onPress={resetOnboarding}>
        <Text>Get Started</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
