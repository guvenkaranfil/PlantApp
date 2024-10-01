import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {ImageResources} from '@assets/Generated/ImageResources.g';
import PlantText from '@src/components/plantText';
import colors from '@src/theme/colors';
import metrics from '@src/theme/metrics';
import normalize from '@src/utils/normalize';

import {IOnboardingData} from './datas';

const screenWidth = Dimensions.get('window').width;

const linearColors = colors.white.onboardingLinearBackground;
const OnboardingCarousel = ({
  titleLeftPrimary,
  titleLeftSecondary,
  titleRight,
  brushSize,
  contentSource,
  brushRightOffset,
}: IOnboardingData) => {
  const index = titleRight === 'care guides' ? 2 : 0;
  return (
    <View style={{width: screenWidth}}>
      <View style={styles.header}>
        <View>
          <PlantText
            label={titleLeftPrimary}
            fontSize="h2"
            fontFamily="Rubik-Medium"
            colorName="green.dark"
            lineHeight={36}
          />
          {titleLeftSecondary && (
            <PlantText
              label={titleLeftSecondary}
              fontSize="h2"
              fontFamily="Rubik-Medium"
              colorName="green.dark"
              lineHeight={36}
            />
          )}
        </View>

        <View>
          <PlantText
            label={titleRight}
            fontSize="h2"
            fontFamily="Rubik-ExtraBold"
            colorName="green.dark"
            lineHeight={36}
          />
          <Image
            source={ImageResources.brush}
            style={[styles.brush, {width: brushSize, right: brushRightOffset}]}
          />
        </View>
      </View>

      <Image
        source={contentSource}
        style={[styles.treeImage]}
        testID="contentImage"
      />

      {index === 2 && (
        <LinearGradient
          style={styles.linearBackground}
          colors={[...linearColors]}
          start={{x: 0, y: 0}} // Start at the top
          end={{x: 0, y: 1}} // End at the bottom
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
  brush: {
    position: 'absolute',
    width: 136,
    resizeMode: 'contain',
    top: 26,
  },
  treeImage: {
    marginBottom: 40,
    flex: 1,
    width: metrics.DEVICE_WIDTH,
    resizeMode: 'contain',
  },
  linearBackground: {
    position: 'absolute',
    bottom: 0,
    width: metrics.DEVICE_WIDTH,
    height: normalize(235),
  },
});

export default OnboardingCarousel;
