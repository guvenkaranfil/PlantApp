import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Keyboard,
  Platform,
  TextInput,
  View,
} from 'react-native';

import {
  CategoriesResponse,
  fetchCategories,
  fetchGetStartedQuestions,
  GetStartedQuestion,
} from '@api/index';
import {ImageResources} from '@assets/Generated/ImageResources.g';
import {Search} from '@assets/icons';
import Page from '@components/Page';
import PlantButton from '@src/components/plantButton';
import PlantText from '@src/components/plantText';
import colors from '@src/theme/colors';
import offsets from '@src/theme/offsets';
import {useAppSelector} from '@store/hooks';

import GetStartedQuestions from './getStartedQuestions';
import greeting from './greeting';
import styles from './styles';

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
    <Page edges={['top']} offsetTop={10} pageStyle={styles.container}>
      <ImageBackground
        source={ImageResources.homeheader}
        style={styles.headerBackground}>
        <View style={styles.welcome}>
          <PlantText
            label="Hi, plant lover!"
            fontFamily="Rubik-Regular"
            fontSize="h5"
            colorName="green.dark"
          />
          <PlantText
            label={greeting(getTime.getHours(), getTime.getMinutes())}
            paddingTop={Platform.OS === 'ios' ? 6 : 0}
            fontSize="h3"
            fontFamily="Rubik-Medium"
            colorName="green.dark"
            letterSpacing={0.35}
            lineHeight={30}
          />
        </View>
        <View style={styles.search}>
          <Search width={20} height={20} style={styles.searchIcon} />
          <TextInput
            placeholderTextColor={colors.gray.mediumDark}
            style={styles.searchInput}
            placeholder="Search for plants"
            value={searchKeyword}
            onChangeText={setsearchKeyword}
          />
        </View>
      </ImageBackground>

      {(!categories?.data.length && !isUserPremium) ? (
        <PlantButton
          shouldDefaultStyle={false}
          testID="premiumBox"
          style={[styles.premiumBanner, {marginTop: offsets._24}]}
          onPress={goToPaywall}>
          <Image source={ImageResources.premiumbox} style={styles.premiumBox} />
        </PlantButton>
      ) : undefined}

      {categories && categories.data.length > 0 && (
        <FlatList
          ListHeaderComponent={
            <>
              {!isUserPremium ? (
                <PlantButton
                  shouldDefaultStyle={false}
                  testID="premiumBox"
                  style={styles.premiumBanner}
                  onPress={goToPaywall}>
                  <Image
                    source={ImageResources.premiumbox}
                    style={styles.premiumBox}
                  />
                </PlantButton>
              ) : undefined}
              <GetStartedQuestions data={getStartedQuestions} />
            </>
          }
          style={styles.categories}
          contentContainerStyle={styles.categoryContent}
          data={categories.data}
          numColumns={2}
          columnWrapperStyle={styles.categoriesColumnWrapper}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <PlantButton
              shouldDefaultStyle={false}
              style={[
                styles.categoryCard,
                {
                  marginRight: index % 2 === 0 ? offsets._0 : offsets._24,
                  marginLeft: index % 2 === 0 ? offsets._24 : offsets._0,
                },
              ]}>
              <View style={styles.categoryTitleWrapper}>
                <PlantText
                  label={item.title}
                  fontSize="h5"
                  colorName="green.dark"
                  fontFamily="Rubik-Medium"
                />
              </View>
              <Image
                source={{uri: item.image.url}}
                style={styles.categoryImage}
              />
            </PlantButton>
          )}
          onScroll={Keyboard.dismiss}
        />
      )}
    </Page>
  );
}
