import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import Page from '../../components/Page';
import greeting from './greeting';
import {useAppSelector} from '../../store/hooks';
import {
  CategoriesResponse,
  fetchCategories,
  fetchGetStartedQuestions,
  GetStartedQuestion,
} from '../../api';
import Sizes from '../../utils/Sizes';
import Colors from '../../utils/Colors';
import {ImageResources} from '../../assets/Generated/ImageResources.g';
import {Search} from '../../assets/icons';

type HomeProps = {
  getTime?: Date;
  navigation: any;
};

export default function Home({getTime = new Date(), navigation}: HomeProps) {
  const isUserPremium = useAppSelector(
    state => state.userReducer.isUserPremium,
  );
  const [searchKeyword, setsearchKeyword] = useState('');
  const [getStartedQuestions, setgetStartedQuestions] = useState<
    GetStartedQuestion[]
  >([]);
  const [categories, setcategories] = useState<CategoriesResponse>();

  useEffect(() => {
    fetchGetStartedQuestions().then(response => {
      if (response instanceof Error) {
      } else {
        setgetStartedQuestions(response);
      }
    });

    fetchCategories()
      .then(response => {
        setcategories(response);
      })
      .catch(() => {});
  }, []);

  const goToPaywall = () => {
    navigation.navigate('paywall');
  };

  return (
    <Page offsetTop={10} pageStyle={styles.container}>
      <ImageBackground
        source={ImageResources.homeheader}
        style={styles.headerBackground}>
        <View style={styles.welcome}>
          <Text style={styles.welcomeLabel}>Hi, plant lover!</Text>
          <Text style={styles.greetingLabel}>
            {greeting(getTime.getHours(), getTime.getMinutes())}
          </Text>
        </View>

        <View style={styles.search}>
          <Search width={20} height={20} style={styles.searchIcon} />
          <TextInput
            placeholderTextColor="#AFAFAF"
            style={styles.searchInput}
            placeholder="Search for plants"
            value={searchKeyword}
            onChangeText={setsearchKeyword}
          />
        </View>
      </ImageBackground>

      {!isUserPremium && (
        <Pressable
          testID="premiumBox"
          style={styles.premiumBanner}
          onPress={goToPaywall}>
          <Image source={ImageResources.premiumbox} style={styles.premiumBox} />
        </Pressable>
      )}

      {getStartedQuestions.length > 0 && (
        <View>
          <Text style={styles.getStartedTitle}>Get Started</Text>
          <FlatList
            horizontal
            data={getStartedQuestions}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.questionCardsContent}
            renderItem={({item}) => (
              <View>
                <Image
                  source={{uri: item.image_uri}}
                  style={styles.questionCardImage}
                />
                <View style={styles.questionCardContent}>
                  <Text style={styles.questionCardLabel}>{item.title}</Text>
                </View>
              </View>
            )}
          />
        </View>
      )}

      {categories && categories.data.length > 0 && (
        <FlatList
          style={styles.categories}
          contentContainerStyle={styles.categoryContent}
          data={categories.data}
          numColumns={2}
          columnWrapperStyle={styles.categoriesColumnWrapper}
          renderItem={({item}) => (
            <Pressable style={styles.categoryCard}>
              <View style={styles.categoryTitleWrapper}>
                <Text lineBreakMode="head" style={styles.categoryTitle}>
                  {item.title}
                </Text>
              </View>
              <Image
                source={{uri: item.image.url}}
                style={styles.categoryImage}
              />
            </Pressable>
          )}
        />
      )}
    </Page>
  );
}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFAFA',
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
    color: Colors.text,
    fontFamily: 'Rubik-Regular',
  },
  greetingLabel: {
    paddingTop: Platform.OS === 'ios' ? 6 : 0,
    fontSize: Sizes.h2,
    color: Colors.text,
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
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderWidth: 0.2,
    borderColor: 'rgba(60, 60, 67, 0.25)',
  },
  searchInput: {
    marginLeft: 12,
    flex: 1,
    fontSize: Sizes.h3,
    fontFamily: 'Rubik-Regular',
    color: Colors.text,
  },
  premiumBanner: {
    marginVertical: 24,
  },
  premiumBox: {
    alignSelf: 'center',
    width: width - 48,
    height: premiumBoxHeight,
  },
  getStartedTitle: {
    paddingLeft: 24,
    paddingBottom: 20,
    fontSize: 15,
    color: '#13231B',
    fontFamily: 'Rubik-Medium',
  },
  questionCardsContent: {
    gap: 10,
    paddingLeft: 24,
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
    color: '#ffffff',
    fontFamily: 'Rubik-Medium',
  },
  categories: {
    marginTop: 24,
  },
  categoryContent: {
    paddingHorizontal: 24,
  },
  categoriesColumnWrapper: {
    justifyContent: 'space-between',
  },
  categoryCard: {
    marginBottom: 16,
    width: categoryCardWidth,
    height: categoryCardWidth,
    backgroundColor: Colors.white,
    borderWidth: Platform.OS === 'ios' ? 0.2 : 0.5,
    borderColor: 'rgba(60, 60, 67, 0.1)',
    borderRadius: 12,
  },
  categoryImage: {
    flex: 1,
    resizeMode: 'contain',
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
    color: Colors.text,
    fontFamily: 'Rubik-Medium',
  },
});
