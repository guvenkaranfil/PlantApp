import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

import {ImageResources} from '@assets/Generated/ImageResources.g';
import Page from '@components/Page';
import {StackParamList} from '@navigation/StackParamList';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import PlantButton from '@src/components/plantButton';
import PlantText from '@src/components/plantText';

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
          <PlantText
            colorName="green.dark"
            fontSize="h2"
            fontFamily="Rubik-Regular">
            Welcome to <Text style={styles.welcomeBold}>PlantApp</Text>
          </PlantText>

          <PlantText
            fontFamily="Rubik-Regular"
            paddingTop={8}
            fontSize="h5"
            label="Identify more than 3000+ plants and 88% accuracy."
            colorName="green.translucent70"
          />
          <View style={styles.tree}>
            <Image
              source={ImageResources.getstartedtree}
              style={styles.treeImage}
            />
          </View>
          <PlantButton label="Get Started" onPress={startOnBoarding} />
          <View style={styles.footer}>
            <PlantText
              textAlign="center"
              label="By tapping next, you are agreeing to PlantID"
              fontSize="small"
              fontFamily="Rubik-Regular"
              colorName="green.gray"
            />
            <PlantText
              textAlign="center"
              fontSize="small"
              fontFamily="Rubik-Regular"
              colorName="green.gray">
              <Text onPress={openTermsAndUse} style={styles.underline}>
                Terms of Use
              </Text>{' '}
              &{' '}
              <Text onPress={openPrivacyPolicy} style={styles.underline}>
                Privacy Policy
              </Text>
              .
            </PlantText>
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
  welcomeBold: {
    fontFamily: 'Rubik-SemiBold',
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
  footer: {
    paddingTop: 17,
    paddingBottom: 42,
  },
  underline: {
    textDecorationLine: 'underline',
  },
});
