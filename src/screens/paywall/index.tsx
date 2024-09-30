import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {ImageResources} from '@assets/Generated/ImageResources.g';
import {StackParamList} from '@navigation/StackParamList';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import PlantButton from '@src/components/plantButton';
import PlantText from '@src/components/plantText';
import colors from '@src/theme/colors';
import fontSizes from '@src/theme/fontSizes';
import offsets from '@src/theme/offsets';

import FeatureCard from './featureCard';
import OfferOption from './offerOption';
import {featuresData, offerOptions} from './staticDatas';

interface PaywallProps {
  navigation: NativeStackNavigationProp<StackParamList, 'paywall'>;
}

export default function Paywall({navigation}: PaywallProps) {
  const [selectedOfferID, setSelectedOfferID] = useState(2);

  const goToHome = () => {
    navigation.navigate('tabs');
  };

  const insets = useSafeAreaInsets();
  return (
    <ScrollView style={styles.container} bounces={false}>
      <Image
        source={ImageResources.paywallbackground}
        style={styles.backgroundImage}
      />

      <PlantButton
        testID="closeButton"
        hitSlop={{top: 48, right: 48, bottom: 48, left: 48}}
        label="X"
        style={[styles.closeButton, {top: 16 + insets.top}]}
        onPress={goToHome}
        labelStyle={styles.closeLabel}
      />
      <View
        style={{
          marginTop: backgroundHeight / 1.8,
          marginBottom: insets.bottom + 34,
        }}>
        <View style={styles.header}>
          <PlantText
            fontSize="h2"
            fontFamily="Rubik-ExtraBold"
            colorName="white.main">
            PlantApp <Text style={styles.premiumTitle}>Premium</Text>
          </PlantText>

          <PlantText
            label="Access All Features"
            fontSize="h5"
            fontFamily="Rubik-Regular"
            colorName="white.translucent07"
            letterSpacing={0.38}
          />
        </View>

        <FlatList
          style={styles.featuredList}
          contentContainerStyle={styles.featuredListContent}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={featuresData}
          renderItem={({item}) => <FeatureCard {...item} />}
        />

        <View style={styles.offers}>
          {offerOptions.map(option => (
            <OfferOption
              key={option.id}
              {...option}
              isSelected={option.id === selectedOfferID}
              onPress={setSelectedOfferID}
            />
          ))}
        </View>
        <PlantButton
          label="Try free for 3 days"
          style={styles.startButton}
          labelStyle={styles.startLabel}
        />
        <PlantText
          marginHorizontal={24}
          paddingTop={8}
          fontFamily="Rubik-Light"
          textAlign="center"
          fontSize="extraSmall"
          colorName="white.translucent52"
          lineHeight={12}
          label={`After the 3-day free trial period you’ll be charged${' '} ${
            offerOptions[selectedOfferID - 1].price
          } per${' '} ${
            offerOptions[selectedOfferID - 1].period
          } unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable`}
        />

        <View style={styles.contracts}>
          <PlantButton
            shouldDefaultStyle={false}
            label="Terms"
            labelStyle={styles.contractLbl}
          />
          <PlantText
            fontSize="small"
            colorName="white.translucent52"
            fontFamily="Rubik-Regular"
            label={`${'  '}•${'  '}`}
          />
          <PlantButton
            shouldDefaultStyle={false}
            label="Privacy"
            labelStyle={styles.contractLbl}
          />
          <PlantText
            fontSize="small"
            colorName="white.translucent52"
            fontFamily="Rubik-Regular"
            label={`${'  '}•${'  '}`}
          />
          <PlantButton
            shouldDefaultStyle={false}
            label="Restore"
            labelStyle={styles.contractLbl}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const {width} = Dimensions.get('window');

// Background Aspect ratio calculation
const originalWidth = 378;
const originalHeight = 571;
const aspectRatio = Number((originalWidth / originalHeight).toFixed(2));
const backgroundHeight = width / aspectRatio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green.darker,
  },
  backgroundImage: {
    width: width,
    height: backgroundHeight,
    position: 'absolute',
  },
  header: {
    marginBottom: 20,
    paddingLeft: offsets._24,
  },
  premiumTitle: {
    fontSize: fontSizes.h3,
    fontFamily: 'Rubik-Regular',
    lineHeight: 30,
  },
  featuredList: {
    marginBottom: 24,
  },
  featuredListContent: {
    gap: 8,
    paddingHorizontal: 24,
  },
  offers: {
    marginHorizontal: 24,
    gap: 16,
  },
  startButton: {
    width: undefined,
    marginTop: 26,
    marginHorizontal: 24,
  },
  startLabel: {
    fontSize: fontSizes.h5,
  },
  contracts: {
    marginTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  contractLbl: {
    fontSize: fontSizes.small,
    color: colors.white.translucent52,
    fontFamily: 'Rubik-Regular',
  },
  closeButton: {
    top: 8,
    right: 19,
    position: 'absolute',
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: colors.black.translucent40,
  },
  closeLabel: {
    fontSize: fontSizes.small,
    fontFamily: 'Rubik-SemiBold',
  },
});
