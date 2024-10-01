import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  View,
  ViewToken,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {ImageResources} from '@assets/Generated/ImageResources.g';
import {StackParamList} from '@navigation/StackParamList';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import PlantButton from '@src/components/plantButton';
import metrics from '@src/theme/metrics';
import offsets from '@src/theme/offsets';

import {IOnboardingData, onboardingDatas} from './datas';
import Dots from './Dots';
import OnboardingCarousel from './OnboardingCarousel';

interface OnboardingProps {
  navigation: NativeStackNavigationProp<StackParamList, 'onboarding'>;
}

const screenWidth = Dimensions.get('window').width;

export default function Onboarding({navigation}: OnboardingProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<any>(null);

  const insets = useSafeAreaInsets();

  const handleViewableItemsChanged = useRef(
    ({
      viewableItems,
    }: {
      viewableItems: ViewToken<IOnboardingData & {index: number}>[];
    }) => {
      if (typeof viewableItems[0].index === 'number') {
        setActiveIndex(viewableItems[0].index);
      }
    },
  ).current;

  const continueFlow = () => {
    let nextIndex = activeIndex + 1;

    if (nextIndex >= onboardingDatas.length) {
      navigation.replace('paywall');
    } else if (flatListRef.current) {
      flatListRef.current.scrollToIndex({index: nextIndex, animated: true});
    }
  };

  const onCarouselScrollToIndexFailed = () => {
    navigation.replace('paywall');
  };

  return (
    <View style={[styles.content, {paddingTop: insets.top + 15}]}>
      <Image source={ImageResources.background} style={styles.background} />
      <View style={styles.content}>
        <FlatList
          testID="list"
          data={onboardingDatas}
          renderItem={({item}) => <OnboardingCarousel {...item} />}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => String(index)}
          onViewableItemsChanged={handleViewableItemsChanged}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 50,
          }}
          onScrollToIndexFailed={onCarouselScrollToIndexFailed}
          ref={flatListRef}
        />

        <View
          style={[styles.footer, {paddingBottom: offsets._13 + insets.bottom}]}>
          <PlantButton
            style={styles.continueButton}
            label="Continue"
            onPress={continueFlow}
          />
          <View style={styles.dotsWrapper}>
            <Dots
              numberOfDots={onboardingDatas.length}
              activeIndex={activeIndex}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    width: metrics.DEVICE_WIDTH,
    height: metrics.DEVICE_HEIGHT,
  },
  content: {
    flex: 1,
  },
  footer: {
    bottom: 0,
    position: 'absolute',
    alignSelf: 'center',
    width: screenWidth,
  },
  dotsWrapper: {
    marginTop: 32,
    alignSelf: 'center',
  },
  continueButton: {
    marginHorizontal: 24,
    width: undefined,
  },
});
