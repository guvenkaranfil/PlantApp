import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Diagnose() {
  return (
    <View style={styles.center}>
      <Text>Diagnose</Text>
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
