import React from 'react';
import {Text,View} from 'react-native';

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
      <Text
        style={[
          styles.tabBarLabel,
          {
            color: focused ? colors.green.main : colors.gray.light,
          },
        ]}>
        {label}
      </Text>
    </View>
  );
};

export default TabIcon;
