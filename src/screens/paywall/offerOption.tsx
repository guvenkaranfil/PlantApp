import React, {ReactNode} from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '@utils/Colors';
import Sizes from '@utils/Sizes';

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

  return isSelected ? (
    <LinearGradient
      colors={[
        'rgba(40, 175, 110, 0)',
        'rgba(40, 175, 110, 0.05)',
        'rgba(40, 175, 110, 0.08)',
        'rgba(40, 175, 110, 0.15)',
      ]}
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
    <Pressable onPress={() => onPress(id)}>
      <Background isSelected={isSelected}>
        <View style={[styles.squareStyle, pickSquareStyle]}>
          {isSelected && <View style={styles.dot} />}
        </View>

        <View style={styles.labels}>
          <Text style={styles.primaryLabel}>{primaryLabel}</Text>
          <Text style={styles.secondaryLabel}>{secondaryLabel}</Text>
        </View>

        {promotion && (
          <View style={styles.promotion}>
            <Text style={styles.promotionLabel}>{promotion}</Text>
          </View>
        )}
      </Background>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 13,
    paddingHorizontal: 16,
    flexDirection: 'row',
    height: 60,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  active: {
    borderWidth: 1.5,
    borderColor: Colors.background,
    backgroundColor: '#1E1E1E',
  },
  inactive: {
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.3)',
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
    backgroundColor: Colors.background,
  },
  inactiveSquareStyle: {
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.white,
  },
  labels: {
    marginLeft: 12,
  },
  primaryLabel: {
    fontSize: Sizes.h3,
    color: 'white',
    fontFamily: 'Rubik-Medium',
  },
  secondaryLabel: {
    marginTop: Platform.OS === 'ios' ? 2 : 0,
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
    fontFamily: 'Rubik-Regular',
    lineHeight: 12,
  },
  promotion: {
    paddingTop: 5,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 9,
    position: 'absolute',
    right: 0,
    top: -1,
    backgroundColor: Colors.background,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 12,
    fontSize: Sizes.h5,
    zIndex: 999,
  },
  promotionLabel: {
    fontSize: 12,
    color: Colors.white,
    fontFamily: 'Rubik-Medium',
  },
});
