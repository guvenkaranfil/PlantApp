import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {Edges, SafeAreaView} from 'react-native-safe-area-context';

interface IPage {
  offsetTop?: number;
  edges?: Edges | undefined;
  pageStyle?: StyleProp<ViewStyle> | undefined;
  children: React.ReactNode;
}

export default function Page({
  children,
  edges,
  pageStyle,
  offsetTop = 0,
}: IPage) {
  return (
    <SafeAreaView
      edges={edges}
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
