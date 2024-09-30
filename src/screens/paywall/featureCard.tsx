import React from 'react';
import {
  Dimensions,
  ImageBackground,
  Platform,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import {ImageResources} from '@assets/Generated/ImageResources.g';
import PlantText from '@src/components/plantText';
import colors from '@src/theme/colors';

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
        <PlantText
          fontSize="h4"
          fontFamily="Rubik-Medium"
          colorName="white.main"
          letterSpacing={0.38}
          label={promotion.primary}
        />
        <PlantText
          paddingTop={Platform.OS === 'ios' ? 2 : 0}
          fontSize="medium"
          fontFamily="Rubik-Regular"
          colorName="white.translucent07"
          lineHeight={18}
          label={promotion.secondary}
        />
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
});
