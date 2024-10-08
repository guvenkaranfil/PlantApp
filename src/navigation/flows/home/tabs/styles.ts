import {StyleSheet} from 'react-native';

import colors from '@src/theme/colors';
import offsets from '@src/theme/offsets';

export default StyleSheet.create({
  alignCenter: {
    alignItems: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: colors.white.translucent92,
    borderTopWidth: 0.5,
    borderTopColor: colors.green.translucent10,
    justifyContent: 'space-evenly',
  },
  tabBarItem: {
    paddingTop: offsets._6,
    flex: 1,
    alignItems: 'center',
  },
  scannerWrapper: {
    backgroundColor: colors.green.light,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
  },
  scannerCircle: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green.main,
    borderRadius: 32,
  },
});
