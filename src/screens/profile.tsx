import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Profile() {
  return (
    <View style={styles.center}>
      <Text>Profile</Text>
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
