import React from 'react';
import {Pressable,View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  Garden as SvgGarden,
  Healthcare as SvgDiagnose,
  Home as SvgHome,
  Profile as SvgProfile,
  Scanner as SvgScanner,
} from '@assets/icons';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Diagnose from '@screens/diagnose';
import Home from '@screens/home';
import MyGarden from '@screens/myGarden';
import Profile from '@screens/profile';
import Scanner from '@screens/scanner';

import styles from './styles';
import TabIcon from './tabIcon';

const getTabBarIcon = (
  routeName: string,
): React.FC<React.SVGProps<SVGSVGElement>> => {
  if (routeName === 'home') {
    return SvgHome;
  }
  if (routeName === 'diagnose') {
    return SvgDiagnose;
  }
  if (routeName === 'myGarden') {
    return SvgGarden;
  }
  if (routeName === 'profile') {
    return SvgProfile;
  }

  throw new Error(
    'Developer Error! Invalid route name. Please provide valid rout name or update `getTabBarIcon` mapper function',
  );
};

function MyTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const TAB_BAR_SIZE = 64 + insets.bottom;
  const SCANNER_OFFSET_TOP = (TAB_BAR_SIZE - insets.bottom) / 2.5;
  return (
    <View style={[styles.tabBar, {height: TAB_BAR_SIZE}]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel as string;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}>
            {route.name === 'scanner' ? (
              <View style={[styles.scannerWrapper, {top: -SCANNER_OFFSET_TOP}]}>
                <View style={styles.scannerCircle}>
                  <SvgScanner width={25} height={25} />
                </View>
              </View>
            ) : (
              <TabIcon
                focused={isFocused}
                label={label}
                icon={getTabBarIcon(route.name)}
              />
            )}
          </Pressable>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      // Disabled eslint for this line because react navigation provide this solution on their official documentation
      // it does not cause any performance issue https://reactnavigation.org/docs/bottom-tab-navigator/
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="diagnose"
        component={Diagnose}
        options={{
          tabBarLabel: 'Diagnose',
        }}
      />
      <Tab.Screen name="scanner" component={Scanner} />
      <Tab.Screen
        name="myGarden"
        component={MyGarden}
        options={{
          tabBarLabel: 'My Garden',
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
