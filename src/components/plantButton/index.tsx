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

interface IPlantButtonBase {
  testID?: string;
  hitSlop?: PressableProps['hitSlop'];
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  shouldDefaultStyle?: boolean;
  onPress?: () => void;
}

interface IPlantButtonWithLabel extends IPlantButtonBase {
  label: string;
  labelStyle?: StyleProp<TextStyle>;
  children?: never;
}

interface IPlantButtonWithChildren extends IPlantButtonBase {
  label?: never;
  children: React.ReactNode;
}

type IPlantButton = IPlantButtonWithLabel | IPlantButtonWithChildren;

/**
 * A customizable button component uses 'Pressable' that can render either a label or children.
 *
 * @param {Object} props - The props for the PlantButton component.
 * @param {string} [props.testID] - Optional test ID for testing purposes.
 * @param {PressableProps['hitSlop']} [props.hitSlop] - Hit slop for the Pressable component.
 * @param {StyleProp<ViewStyle>} [props.style] - Custom style for the button.
 * @param {StyleProp<TextStyle>} [props.labelStyle] - Custom style for the label text.
 * @param {React.ReactNode} [props.children] - Optional children to be rendered inside the button.
 * @param {boolean} [props.shouldDefaultStyle=true] - If true, applies default styling to the button.
 * @param {() => void} [props.onPress] - Called when a single tap gesture is detected.
 * @param {string} [props.label] - Required label text to display when children are not provided.
 * @example
 * ```tsx
 * <PlantButton label="Get Started" onPress={startOnBoarding} />
 * ```
 * @returns {JSX.Element} The rendered button component.
 *
 */
export default function PlantButton({
  testID,
  style,
  labelStyle,
  label,
  children,
  shouldDefaultStyle = true,
  onPress,
}: IPlantButton) {
  return (
    <Pressable
      testID={testID}
      style={[shouldDefaultStyle ? styles.startButton : null, style]}
      onPress={onPress}>
      {children ?? <Text style={[styles.startLabel, labelStyle]}>{label}</Text>}
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
