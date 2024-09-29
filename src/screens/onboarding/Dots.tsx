import React from 'react';
import {StyleSheet, View} from 'react-native';

import Colors from '@utils/Colors';

interface IDots {
  numberOfDots: number;
  activeIndex: number;
}

const Dots = ({numberOfDots, activeIndex}: IDots) => {
  const activeDotSize = 10;
  const inactiveDotSize = 6;
  return (
    <View style={styles.dots}>
      {Array.from({length: numberOfDots}).map((_, index: number) => {
        const isActive = activeIndex === index;
        return (
          <View
            testID="dot"
            key={index}
            style={{
              width: isActive ? activeDotSize : inactiveDotSize,
              height: isActive ? activeDotSize : inactiveDotSize,
              borderRadius: isActive ? activeDotSize / 2 : inactiveDotSize / 2,
              backgroundColor: isActive ? Colors.text : Colors.darkIndigo,
            }}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dots: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
});

export default Dots;
