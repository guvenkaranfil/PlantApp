import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  alignCenter: {
    alignItems: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(19, 35, 27, 0.1)',
    justifyContent: 'space-evenly',
  },
  tabBarItem: {
    paddingTop: 6,
    flex: 1,
    alignItems: 'center',
  },
  scannerWrapper: {
    backgroundColor: '#5DC794',
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
    backgroundColor: '#28AF6E',
    borderRadius: 32,
  },
  tabBarLabel: {
    paddingTop: 5,
    fontSize: 13,
    fontFamily: 'Rubik-Regular',
  },
});
