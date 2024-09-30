import React, {ReactNode} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import PlantButton from '@src/components/plantButton';
import PlantText from '@src/components/plantText';
import colors from '@src/theme/colors';
import fontSizes from '@src/theme/fontSizes';
import offsets from '@src/theme/offsets';

export interface IOfferOption {
  id: number;
  primaryLabel: string;
  secondaryLabel: string;
  period: string;
  price: string;
  promotion?: string;
}

interface IOfferOptionProps {
  isSelected: boolean;

  onPress: (id: number) => void;
}

const Background = ({
  isSelected,
  children,
}: {
  isSelected: boolean;
  children: ReactNode;
}) => {
  const selectStateStyle = isSelected ? styles.active : styles.inactive;
  const linearColors = [...colors.green.paywallOfferButtonLinear];

  return isSelected ? (
    <LinearGradient
      colors={linearColors}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={[styles.container, selectStateStyle]}>
      {children}
    </LinearGradient>
  ) : (
    <View style={styles.container}>{children}</View>
  );
};

export default function OfferOption({
  id,
  primaryLabel,
  secondaryLabel,
  promotion,
  isSelected,

  onPress,
}: IOfferOption & IOfferOptionProps) {
  const pickSquareStyle = isSelected
    ? styles.activeSquareStyle
    : styles.inactiveSquareStyle;
  return (
    <PlantButton shouldDefaultStyle={false} onPress={() => onPress(id)}>
      <Background isSelected={isSelected}>
        <View style={[styles.squareStyle, pickSquareStyle]}>
          {isSelected && <View style={styles.dot} />}
        </View>

        <View style={styles.labels}>
          <PlantText
            paddingBottom={Platform.OS === 'ios' ? 2 : 0}
            fontSize="h5"
            colorName="white.main"
            fontFamily="Rubik-Medium"
            label={primaryLabel}
          />
          <PlantText
            fontSize="smallLarge"
            colorName="white.translucent07"
            fontFamily="Rubik-Regular"
            label={secondaryLabel}
            lineHeight={12}
          />
        </View>

        {promotion && (
          <View style={styles.promotion}>
            <PlantText
              fontSize="smallLarge"
              colorName="white.main"
              fontFamily="Rubik-Medium"
              label={promotion}
            />
          </View>
        )}
      </Background>
    </PlantButton>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 13,
    paddingHorizontal: 16,
    flexDirection: 'row',
    height: 60,
    borderRadius: 14,
    backgroundColor: colors.white.translucent05,
  },
  active: {
    borderWidth: 1.5,
    borderColor: colors.green.main,
    backgroundColor: colors.black.gray,
  },
  inactive: {
    borderWidth: 0.5,
    borderColor: colors.white.translucent30,
  },
  squareStyle: {
    marginVertical: 5,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  activeSquareStyle: {
    backgroundColor: colors.green.main,
  },
  inactiveSquareStyle: {
    backgroundColor: colors.white.translucent08,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.white.main,
  },
  labels: {
    marginLeft: offsets._12,
  },
  promotion: {
    paddingTop: offsets._5,
    paddingBottom: offsets._8,
    paddingLeft: offsets._12,
    paddingRight: offsets._9,
    position: 'absolute',
    right: 0,
    top: -1,
    backgroundColor: colors.green.main,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 12,
    fontSize: fontSizes.small,
    zIndex: 999,
  },
});
