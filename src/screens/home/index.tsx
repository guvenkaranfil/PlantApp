import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Page from '../../components/Page';
import greeting from './greeting';

type HomeProps = {
  getTime?: Date;
};

export default function Home({getTime = new Date()}: HomeProps) {
  const [searchKeyword, setsearchKeyword] = useState('');

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

        <View>
          <Text>Free Premium Available</Text>
          <Text>Tap to upgrade your account!</Text>
        </View>
      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  container: {},
  welcome: {},
});
