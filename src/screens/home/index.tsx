import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
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
import {ImageResources} from '../../assets/Generated/ImageResources.g';
import {Search} from '../../assets/icons';

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
