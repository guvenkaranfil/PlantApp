import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';

import colors from '@src/theme/colors';
import fontSizes from '@src/theme/fontSizes';

interface IPlantButton {
  testID?: string;
  hitSlop?: PressableProps['hitSlop'];
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  label: string;
  onPress?: () => void;
}

export default function PlantButton({
  testID,
  style,
  labelStyle,
  label,
  onPress,
}: IPlantButton) {
  return (
    <Pressable
      testID={testID}
      style={[styles.startButton, style]}
      onPress={onPress}>
      <Text style={[styles.startLabel, labelStyle]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  startButton: {
    width: '100%',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green.main,
    borderRadius: 12,
  },
  startLabel: {
    fontSize: fontSizes.mediumLarge,
    color: colors.white.main,
    fontFamily: 'Rubik-Medium',
  },
});
