import {
  FlatList,
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
    <Page offsetTop={10}>
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Text>Hi, plant lover!</Text>
          <Text>{greeting(getTime.getHours(), getTime.getMinutes())}</Text>
        </View>

        <TextInput
          placeholder="Search for plants"
          value={searchKeyword}
          onChangeText={setsearchKeyword}
        />

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
      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  container: {},
  welcome: {},
});
