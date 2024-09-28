import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Page from '../../components/Page';

export default function Home() {
  return (
    <Page offsetTop={10}>
      <View style={styles.container}>
        <Text>Hi, plant lover!</Text>
      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  container: {},
});
