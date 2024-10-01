import React from 'react';
import {View} from 'react-native';

import PlantText from '@src/components/plantText';
import colors from '@src/theme/colors';

import styles from './styles';

interface ITabIcon {
  focused: boolean;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
}

const TabIcon = ({focused, icon, label}: ITabIcon) => {
  const Icon = icon;
  return (
    <View style={styles.alignCenter}>
      <Icon
        width={25}
        height={25}
        fill={focused ? colors.green.main : colors.gray.mediumLight}
      />
      <PlantText
        label={label}
        paddingTop={5}
        fontSize="extraSmallMedium"
        fontFamily="Rubik-Regular"
        colorName={focused ? 'green.main' : 'gray.light'}
      />
    </View>
  );
};

export default TabIcon;
