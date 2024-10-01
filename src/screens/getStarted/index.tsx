import React from 'react';
import {Image, Text, View} from 'react-native';

import {ImageResources} from '@assets/Generated/ImageResources.g';
import Page from '@components/Page';
import {StackParamList} from '@navigation/StackParamList';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import PlantButton from '@src/components/plantButton';
import PlantText from '@src/components/plantText';
import offsets from '@src/theme/offsets';
import normalize from '@src/utils/normalize';

import styles from './styles';

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
    <Page offsetTop={12}>
      <Image source={ImageResources.background} style={styles.background} />
      <View style={styles.content}>
        <View style={styles.header}>
          <PlantText
            colorName="green.dark"
            fontSize="h2"
            letterSpacing={0.07}
            fontFamily="Rubik-Regular">
            Welcome to <Text style={styles.welcomeBold}>PlantApp</Text>
          </PlantText>

          <PlantText
            fontFamily="Rubik-Regular"
            paddingTop={8}
            fontSize="h5"
            lineHeight={22}
            letterSpacing={0.07}
            paddingRight={normalize(50)}
            label="Identify more than 3000+ plants and 88% accuracy."
            colorName="green.translucent70"
          />
        </View>
        <View style={styles.tree}>
          <Image
            source={ImageResources.getstartedtree}
            style={styles.treeImage}
          />
        </View>
        <View style={styles.footerWrapper}>
          <PlantButton
            label="Get Started"
            labelStyle={styles.getStartedLabel}
            onPress={startOnBoarding}
            style={{width: undefined, marginHorizontal: offsets._24}}
          />
          <View style={styles.footer}>
            <PlantText
              textAlign="center"
              label="By tapping next, you are agreeing to PlantID"
              fontSize="smallLarge"
              fontFamily="Rubik-Regular"
              colorName="green.mos"
              letterSpacing={0.07}
            />
            <PlantText
              textAlign="center"
              fontSize="smallLarge"
              lineHeight={15}
              fontFamily="Rubik-Regular"
              colorName="green.mos">
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
      </View>
    </Page>
  );
}
