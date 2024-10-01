import {Dimensions, Platform, StyleSheet} from 'react-native';

import colors from '@src/theme/colors';
import fontSizes from '@src/theme/fontSizes';
import offsets from '@src/theme/offsets';

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
    paddingLeft: offsets._24,
  },
  searchIcon: {
    alignSelf: 'center',
  },
  search: {
    flexDirection: 'row',
    paddingLeft: offsets._12,
    paddingRight: offsets._48,
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
    marginLeft: offsets._12,
    flex: 1,
    fontSize: fontSizes.h5,
    fontFamily: 'Rubik-Regular',
    color: colors.green.dark,
  },
  premiumBanner: {
    marginBottom: offsets._12,
  },
  premiumBox: {
    marginLeft: offsets._24,
    width: width - offsets._24 * 2,
    height: premiumBoxHeight,
  },
  getStartedTitle: {
    paddingTop: offsets._12,
    paddingBottom: offsets._20,
    fontSize: fontSizes.mediumLarge,
    color: colors.green.dark,
    fontFamily: 'Rubik-Medium',
  },
  questionCardsContent: {
    gap: 10,
    marginBottom: 24,
    paddingLeft: offsets._24,
  },
  questionCardImage: {
    width: questionCardImageWidth,
    height: questionCardImageHeight,
    borderRadius: 12,
  },
  questionCardContent: {
    position: 'absolute',
    top: questionCardImageHeight / 1.7,
    padding: offsets._14,
  },
  questionCardLabel: {
    fontSize: fontSizes.mediumLarge,
    color: colors.white.main,
    fontFamily: 'Rubik-Medium',
  },
  categories: {
    paddingTop: 24,
  },
  categoryContent: {
    paddingBottom: categoryCardWidth / 2,
  },
  categoriesColumnWrapper: {
    justifyContent: 'space-between',
  },
  categoryCard: {
    marginBottom: offsets._16,
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
    paddingLeft: 16,
    paddingRight: categoryCardWidth * 0.2,
  },
});
