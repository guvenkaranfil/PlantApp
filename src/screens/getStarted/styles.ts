import { StyleSheet } from 'react-native';

import metrics from '@src/theme/metrics';
import offsets from '@src/theme/offsets';

export default StyleSheet.create({
  content: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    width: metrics.DEVICE_WIDTH,
    height: metrics.DEVICE_HEIGHT,
  },
  header: {
    paddingHorizontal: 24,
  },
  welcomeBold: {
    fontFamily: 'Rubik-SemiBold',
  },
  tree: {
    flex: 1,
    marginTop: offsets._12,
  },
  treeImage: {
    flex: 1,
    width: undefined,
    resizeMode: 'contain',
  },
  footerWrapper: {
    top: -offsets._40,
  },
  footer: {
    paddingLeft: offsets._24,
    paddingTop: offsets._17,
  },
  getStartedLabel: {
    fontFamily: 'Rubik-Medium',
  },
  underline: {
    textDecorationLine: 'underline',
  },
});
