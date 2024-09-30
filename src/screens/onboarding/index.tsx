import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  View,
  ViewToken,
} from 'react-native';

import {ImageResources} from '@assets/Generated/ImageResources.g';
import Page from '@components/Page';
import {StackParamList} from '@navigation/StackParamList';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import PlantButton from '@src/components/plantButton';
import colors from '@src/theme/colors';
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
    <ImageBackground source={ImageResources.background} style={styles.flex}>
      <Page pageStyle={{backgroundColor: colors.green.white}} offsetTop={15}>
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

          <View style={styles.footer}>
            <PlantButton label="Continue" onPress={continueFlow} />
            <View style={styles.dotsWrapper}>
              <Dots
                numberOfDots={onboardingDatas.length}
                activeIndex={activeIndex}
              />
            </View>
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
  },
  footer: {
    alignSelf: 'center',
    width: screenWidth - 24,
    height: 120,
    position: 'absolute',
    bottom: 0,
  },
  dotsWrapper: {
    alignSelf: 'center',
    marginTop: 32,
    marginBottom: offsets._12,
  },
});
