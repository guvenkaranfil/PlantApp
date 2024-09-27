import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function GetStarted() {
  return (
    <View style={styles.center}>
      <Text style={styles.label}>Getting Started</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: 'Rubik-SemiBold',
  },
});
