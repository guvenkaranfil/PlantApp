import React from 'react';
import {View, Text} from 'react-native';

import Colors from '../../utils/Colors';
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
        fill={focused ? Colors.background : '#BDBDBD'}
      />
      <Text
        style={[
          styles.tabBarLabel,
          {
            color: focused ? Colors.background : Colors.lighGray,
          },
        ]}>
        {label}
      </Text>
    </View>
  );
};

export default TabIcon;
