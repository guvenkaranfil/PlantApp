import React from 'react';
import {
  Dimensions,
  ImageBackground,
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

import {ImageResources} from '@assets/Generated/ImageResources.g';
import colors from '@src/theme/colors';
import fontSizes from '@src/theme/fontSizes';

export interface IFeatureCard {
  viewStyle?: StyleProp<ViewStyle>;
  icon: (props: any) => React.JSX.Element;
  promotion: {
    primary: string;
    secondary: string;
  };
}

export default function FeatureCard({
  viewStyle,
  icon,
  promotion,
}: IFeatureCard) {
  const Icon = icon;
  return (
    <ImageBackground
      source={ImageResources.featuredbackground}
      style={[styles.container, viewStyle]}
      imageStyle={styles.imageBackground}>
      <View style={styles.iconSquare}>
        <Icon width={18} height={18} />
      </View>

      <View>
        <Text style={styles.primaryLabel}>{promotion.primary}</Text>
        <Text style={styles.secondaryLabel}>{promotion.secondary}</Text>
      </View>
    </ImageBackground>
  );
}

const {width} = Dimensions.get('window');
const CONTAINER_WIDTH = (width - 30 - 24 - 16) / 2;
const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: CONTAINER_WIDTH,
    height: 130,
    borderRadius: 14,
  },
  imageBackground: {
    borderRadius: 14,
  },
  iconSquare: {
    marginBottom: 16,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black.translucent24,

    borderRadius: 8,
  },
  primaryLabel: {
    fontSize: fontSizes.h4,
    fontFamily: 'Rubik-Medium',
    color: 'white',
    letterSpacing: 0.38,
  },
  secondaryLabel: {
    paddingTop: Platform.OS === 'ios' ? 2 : 0,
    fontSize: fontSizes.medium,
    fontFamily: 'Rubik-Regular',
    color: colors.white.main,
    opacity: 0.7,
    lineHeight: 18,
  },
});
