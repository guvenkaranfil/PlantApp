import {
  Dimensions,
  FlatList,
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
        <Pressable onPress={goToPaywall}>
          <Text>Free Premium Available</Text>
          <Text>Tap to upgrade your account!</Text>
        </Pressable>
      )}

      {getStartedQuestions.length > 0 && (
        <View>
          <Text>Get Started</Text>
          <FlatList
            data={getStartedQuestions}
            renderItem={({item}) => <Text>{item.title}</Text>}
          />
        </View>
      )}

      {categories && categories.data.length > 0 && (
        <FlatList
          data={categories.data}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
      )}
    </Page>
  );
}

const {width} = Dimensions.get('window');
const originalWidth = 375;
const originalHeight = 135;
const aspectRatio = Number((originalWidth / originalHeight).toFixed(2));
const backgroundHeight = width / aspectRatio;

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
});
