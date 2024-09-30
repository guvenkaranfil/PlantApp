import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export default function Profile({navigation}: {navigation: any}) {
  return (
    <View style={styles.center}>
      <Text>Profile</Text>
      <Pressable onPress={() => navigation.replace('getStarted')}>
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
