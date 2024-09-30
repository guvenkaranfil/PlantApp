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
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {ImageResources} from '@assets/Generated/ImageResources.g';
import {StackParamList} from '@navigation/StackParamList';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import colors from '@src/theme/colors';
import Sizes from '@utils/Sizes';

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

      <Pressable
        testID="closeButton"
        hitSlop={{top: 48, right: 48, bottom: 48, left: 48}}
        onPress={goToHome}
        style={[styles.closeButton, {top: 16 + insets.top}]}>
        <Text style={styles.closeLabel}>X</Text>
      </Pressable>

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
    backgroundColor: colors.green.darker,
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
    color: colors.white.main,
    fontSize: Sizes.h1,
    fontFamily: 'Rubik-ExtraBold',
  },
  premiumTitle: {
    fontSize: Sizes.h2,
    fontFamily: 'Rubik-Regular',
    lineHeight: 30,
  },
  promotion: {
    color: colors.white.main,
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
    backgroundColor: colors.green.main,
    borderRadius: 12,
  },
  startLabel: {
    fontSize: Sizes.h3,
    color: colors.white.main,
    fontFamily: 'Rubik-Medium',
  },
  offerDetailLabel: {
    marginHorizontal: 24,
    paddingTop: 8,
    textAlign: 'center',
    fontSize: 9,
    fontFamily: 'Rubik-Light',
    color: colors.white.translucent52,
    lineHeight: 12,
  },
  contracts: {
    marginTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  contractLbl: {
    fontSize: 11,
    color: colors.white.translucent52,
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
    fontSize: Sizes.h5,
    fontFamily: 'Rubik-SemiBold',
    color: colors.white.main,
  },
});
