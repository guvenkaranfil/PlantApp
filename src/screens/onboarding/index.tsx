import React, {useState, useRef} from 'react';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewToken,
} from 'react-native';

import Page from '../../components/Page';
import Dots from './Dots';
import Sizes from '../../utils/Sizes';
import Colors from '../../utils/Colors';
import {ImageResources} from '../../assets/Generated/ImageResources.g';
import {IOnboardingData, onboardingDatas} from './datas';
import OnboardingCarousel from './OnboardingCarousel';

const screenWidth = Dimensions.get('window').width;

export default function Onboarding() {
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
    } else if (flatListRef.current) {
      flatListRef.current.scrollToIndex({index: nextIndex, animated: true});
    }
  };

  return (
    <ImageBackground source={ImageResources.background} style={styles.flex}>
      <Page pageStyle={{backgroundColor: Colors.greenishWhite}} offsetTop={15}>
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
            ref={flatListRef}
          />

          <View style={styles.footer}>
            <Pressable style={styles.startButton} onPress={continueFlow}>
              <Text style={styles.startLabel}>Continue</Text>
            </Pressable>

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
  startButton: {
    width: '100%',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
    borderRadius: 12,
  },
  startLabel: {
    fontSize: Sizes.h4,
    color: Colors.white,
    fontFamily: 'Rubik-Medium',
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
    marginBottom: 12,
  },
});
