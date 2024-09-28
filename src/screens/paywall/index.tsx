import React, {useState} from 'react';

import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ImageResources} from '../../assets/Generated/ImageResources.g';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Sizes from '../../utils/Sizes';
import Colors from '../../utils/Colors';
import FeatureCard, {IFeatureCard} from './featureCard';

import {Scanner, Indicator, Leaf} from '../../assets/icons';
import OfferOption, {IOfferOption} from './offerOption';

const featuresData: Array<IFeatureCard> = [
  {
    icon: Scanner,
    promotion: {
      primary: 'Unlimeted',
      secondary: 'Plant Identify',
    },
  },
  {
    icon: Indicator,
    promotion: {
      primary: 'Faster',
      secondary: 'Process',
    },
  },
  {
    icon: Leaf,
    promotion: {
      primary: 'Detailed',
      secondary: 'Plant care',
    },
  },
];

const offerOptions: Array<IOfferOption> = [
  {
    id: 1,
    primaryLabel: '1 Month',
    secondaryLabel: '$2.99/month, auto renewable',
    promotion: undefined,
    period: 'month',
    price: '$2.99',
  },
  {
    id: 2,
    primaryLabel: '1 Year',
    secondaryLabel: 'First 3 days free, then $529,99/year',
    promotion: 'Save 50%',
    period: 'year',
    price: '$529.99',
  },
];

export default function Paywall() {
  const [selectedOfferID, setSelectedOfferID] = useState(2);

  const insets = useSafeAreaInsets();
  return (
    <ScrollView style={styles.container} bounces={false}>
      <Image
        source={ImageResources.paywallbackground}
        style={styles.backgroundImage}
      />

      <View
        style={{
          marginTop: backgroundHeight / 1.8,
          marginBottom: insets.bottom + 34,
        }}>
        <View style={styles.header}>
          <Text style={styles.appTitle}>
            PlantApp <Text style={styles.premiumTitle}>Premium</Text>
          </Text>

          <Text style={styles.promotion}>Access All Features</Text>
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

        <Pressable style={styles.startButton}>
          <Text style={styles.startLabel}>Try free for 3 days</Text>
        </Pressable>

        <Text style={styles.offerDetailLabel}>
          After the 3-day free trial period you’ll be charged{' '}
          {offerOptions[selectedOfferID - 1].price} per{' '}
          {offerOptions[selectedOfferID - 1].period} unless you cancel before
          the trial expires. Yearly Subscription is Auto-Renewable
        </Text>

        <View style={styles.contracts}>
          <Pressable>
            <Text style={styles.contractLbl}>Terms</Text>
          </Pressable>
          <Text style={styles.contractLbl}>
            {'  '}•{'  '}
          </Text>
          <Pressable>
            <Text style={styles.contractLbl}>Privacy</Text>
          </Pressable>
          <Text style={styles.contractLbl}>
            {'  '}•{'  '}
          </Text>
          <Pressable>
            <Text style={styles.contractLbl}>Restore</Text>
          </Pressable>
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
    backgroundColor: '#101E17',
  },
  backgroundImage: {
    width: width,
    height: backgroundHeight,
    position: 'absolute',
  },
  header: {
    marginBottom: 20,
    paddingLeft: 24,
  },
  appTitle: {
    color: Colors.white,
    fontSize: Sizes.h1,
    fontFamily: 'Rubik-ExtraBold',
  },
  premiumTitle: {
    fontSize: Sizes.h2,
    fontFamily: 'Rubik-Regular',
    lineHeight: 30,
  },
  promotion: {
    color: Colors.white,
    fontSize: Sizes.h3,
    opacity: 0.7,
    letterSpacing: 0.38,
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
    marginTop: 26,
    marginHorizontal: 24,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
    borderRadius: 12,
  },
  startLabel: {
    fontSize: Sizes.h3,
    color: Colors.white,
    fontFamily: 'Rubik-Medium',
  },
  offerDetailLabel: {
    marginHorizontal: 24,
    paddingTop: 8,
    textAlign: 'center',
    fontSize: 9,
    fontFamily: 'Rubik-Light',
    color: 'rgba(255,255,255,0.52)',
    lineHeight: 12,
  },
  contracts: {
    marginTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  contractLbl: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.52)',
  },
});
