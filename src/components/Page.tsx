import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface IPage {
  offsetTop?: number;
  pageStyle?: StyleProp<ViewStyle> | undefined;
  children: React.ReactNode;
}

export default function Page({children, pageStyle, offsetTop = 0}: IPage) {
  return (
    <SafeAreaView
      style={[styles.container, {paddingTop: offsetTop}, pageStyle]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
