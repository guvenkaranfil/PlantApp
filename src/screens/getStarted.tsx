import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {ImageResources} from '@assets/Generated/ImageResources.g';
import Page from '@components/Page';
import {StackParamList} from '@navigation/StackParamList';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import colors from '@src/theme/colors';
import fontSizes from '@src/theme/fontSizes';

interface GetStartedProps {
  navigation: NativeStackNavigationProp<StackParamList, 'getStarted'>;
}

export default function GetStarted({navigation}: GetStartedProps) {
  const startOnBoarding = () => {
    navigation.replace('onboarding');
  };

  const openTermsAndUse = () => {};

  const openPrivacyPolicy = () => {};

  return (
    <ImageBackground source={ImageResources.background} style={styles.flex}>
      <Page offsetTop={15}>
        <View style={styles.content}>
          <Text style={styles.welcome}>
            Welcome to <Text style={styles.welcomeBold}>PlantApp</Text>
          </Text>
          <Text style={styles.promotion}>
            Identify more than 3000+ plants and 88% accuracy.
          </Text>
          <View style={styles.tree}>
            <Image
              source={ImageResources.getstartedtree}
              style={styles.treeImage}
            />
          </View>
          <Pressable style={styles.startButton} onPress={startOnBoarding}>
            <Text style={styles.startLabel}>Get Started</Text>
          </Pressable>
          <View style={styles.footer}>
            <Text style={styles.contractLabel}>
              By tapping next, you are agreeing to PlantID
            </Text>
            <Text style={styles.contractLabel}>
              <Text onPress={openTermsAndUse} style={styles.underline}>
                Terms of Use
              </Text>{' '}
              &{' '}
              <Text onPress={openPrivacyPolicy} style={styles.underline}>
                Privacy Policy
              </Text>
              .
            </Text>
          </View>
        </View>
      </Page>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  welcome: {
    color: colors.green.dark,
    fontSize: fontSizes.h2,
    fontFamily: 'Rubik-Regular',
  },
  welcomeBold: {
    fontFamily: 'Rubik-SemiBold',
  },
  promotion: {
    paddingTop: 8,
    color: colors.green.dark,
    opacity: 0.7,
    fontSize: fontSizes.h5,
  },
  tree: {
    marginTop: 12,
    flex: 1,
  },
  treeImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
  },
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
  footer: {
    paddingTop: 17,
    paddingBottom: 42,
  },
  contractLabel: {
    textAlign: 'center',
    fontSize: fontSizes.small,
    color: colors.green.gray,
    fontFamily: 'Rubik-Regular',
  },
  underline: {
    textDecorationLine: 'underline',
  },
});
