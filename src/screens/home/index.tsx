import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Page from '../../components/Page';
import greeting from './greeting';

type HomeProps = {
  getTime?: Date;
};

export default function Home({getTime = new Date()}: HomeProps) {
  return (
    <Page offsetTop={10}>
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Text>Hi, plant lover!</Text>
          <Text>{greeting(getTime.getHours(), getTime.getMinutes())}</Text>
        </View>
      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  container: {},
  welcome: {},
});
