import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';

import {GetStartedQuestion} from '@api/index';
import styles from './styles';

const GetStartedQuestions = ({data}: {data: GetStartedQuestion[]}) => {
  return (
    <View>
      <Text style={styles.getStartedTitle}>Get Started</Text>
      <FlatList
        horizontal
        data={data}
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
  );
};

export default GetStartedQuestions;
