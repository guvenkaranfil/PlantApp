import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

import {ImageResources} from '@assets/Generated/ImageResources.g';
import colors from '@src/theme/colors';
import fontSizes from '@src/theme/fontSizes';

import {IOnboardingData} from './datas';

const screenWidth = Dimensions.get('window').width;

const OnboardingCarousel = ({
  titleLeftPrimary,
  titleLeftSecondary,
  titleRight,
  brushSize,
  contentSource,
  brushRightOffset,
}: IOnboardingData) => {
  return (
    <View style={{width: screenWidth}}>
      <View style={styles.header}>
        <View>
          <Text style={[styles.welcome]}>{titleLeftPrimary}</Text>
          <Text style={styles.welcome}>{titleLeftSecondary}</Text>
        </View>

        <View>
          <Text style={[styles.welcome, styles.welcomeBold]}>{titleRight}</Text>
          <Image
            source={ImageResources.brush}
            style={[styles.brush, {width: brushSize, right: brushRightOffset}]}
          />
        </View>
      </View>

      <View style={styles.tree}>
        <Image
          source={contentSource}
          style={styles.treeImage}
          testID="contentImage"
        />
      </View>

      <View style={styles.carouselFooterWrapper} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
  welcome: {
    color: colors.green.dark,
    fontSize: fontSizes.h2,
    fontFamily: 'Rubik-Medium',
    lineHeight: 36,
  },
  welcomeBold: {
    fontFamily: 'Rubik-ExtraBold',
  },
  brush: {
    position: 'absolute',
    width: 136,
    resizeMode: 'contain',
    top: 26,
  },
  tree: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    bottom: 0,
  },
  treeImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
  },
  carouselFooterWrapper: {
    width: screenWidth - 48,
    height: 120,
    backgroundColor: colors.green.white,
    position: 'absolute',
    bottom: 0,
  },
});

export default OnboardingCarousel;
