import {Dimensions, Platform, StyleSheet} from 'react-native';

import colors from '@src/theme/colors';
import Sizes from '@utils/Sizes';

const calculateAspectRatio = (
  originalWidth: number,
  originalHeight: number,
) => {
  return Number((originalWidth / originalHeight).toFixed(2));
};

const {width} = Dimensions.get('window');
const originalWidth = 375;
const originalHeight = 135;
const aspectRatio = Number((originalWidth / originalHeight).toFixed(2));
const backgroundHeight = width / aspectRatio;

const premiumBoxOriginalWidth = 327;
const premiumOriginalHeight = 64;
const premiumBoxAspectRatio = Number(
  (premiumBoxOriginalWidth / premiumOriginalHeight).toFixed(2),
);
const premiumBoxHeight = (width - 48) / premiumBoxAspectRatio;

const questionCardImageWidth = (width - 24 - 10) / 1.5;
const aspectRatioQuestionCardImage = calculateAspectRatio(260, 184);
const questionCardImageHeight =
  questionCardImageWidth / aspectRatioQuestionCardImage;

const categoryCardWidth = (width - 48 - 11) / 2;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white.off,
  },
  headerBackground: {
    width: width,
    height: backgroundHeight,
  },
  welcome: {
    paddingLeft: 24,
  },
  welcomeLabel: {
    fontSize: Sizes.h3,
    color: colors.green.dark,
    fontFamily: 'Rubik-Regular',
  },
  greetingLabel: {
    paddingTop: Platform.OS === 'ios' ? 6 : 0,
    fontSize: Sizes.h2,
    color: colors.green.dark,
    fontFamily: 'Rubik-Medium',
    letterSpacing: 0.35,
    lineHeight: 30,
  },
  searchIcon: {
    alignSelf: 'center',
  },
  search: {
    flexDirection: 'row',
    paddingLeft: 12,
    paddingRight: 48,
    width: width - 48,
    position: 'absolute',
    bottom: 14,
    height: 44,
    borderRadius: 12,
    marginHorizontal: 24,
    marginTop: 14,
    backgroundColor: colors.white.translucent95,
    borderWidth: 0.5,
    borderColor: colors.black.grayTranslucent25,
  },
  searchInput: {
    marginLeft: 12,
    flex: 1,
    fontSize: Sizes.h3,
    fontFamily: 'Rubik-Regular',
    color: colors.green.dark,
  },
  premiumBanner: {
    marginTop: 24,
    marginBottom: 12,
  },
  premiumBox: {
    alignSelf: 'center',
    width: width - 48,
    height: premiumBoxHeight,
  },
  getStartedTitle: {
    paddingTop: 12,
    paddingBottom: 20,
    fontSize: 15,
    color: colors.green.dark,
    fontFamily: 'Rubik-Medium',
  },
  questionCardsContent: {
    gap: 10,
    marginBottom: 24,
  },
  questionCardImage: {
    width: questionCardImageWidth,
    height: questionCardImageHeight,
    borderRadius: 12,
  },
  questionCardContent: {
    position: 'absolute',
    top: questionCardImageHeight / 1.7,
    padding: 14,
  },
  questionCardLabel: {
    fontSize: 15,
    color: colors.white.main,
    fontFamily: 'Rubik-Medium',
  },
  categories: {
    marginTop: 24,
  },
  categoryContent: {
    paddingLeft: 24,
  },
  categoriesColumnWrapper: {
    justifyContent: 'space-between',
  },
  categoryCard: {
    marginBottom: 16,
    width: categoryCardWidth,
    height: categoryCardWidth,
    backgroundColor: colors.white.main,
    borderWidth: Platform.OS === 'ios' ? 1 : 0.5,
    borderColor: colors.black.grayTranslucent10,
    borderRadius: 12,
  },
  categoryImage: {
    flex: 1,
    right: 0,
  },
  categoryTitleWrapper: {
    zIndex: 999,
    position: 'absolute',
    top: 16,
    width: categoryCardWidth * 0.5,
    paddingLeft: 16,
  },
  categoryTitle: {
    fontSize: Sizes.h3,
    color: colors.green.dark,
    fontFamily: 'Rubik-Medium',
  },
});
