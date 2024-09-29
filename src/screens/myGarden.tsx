import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function MyGarden() {
  return (
    <View style={styles.center}>
      <Text>MyGarden</Text>
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
