import React from 'react';
import {FlatList, Image, View} from 'react-native';

import {GetStartedQuestion} from '@api/index';
import PlantText from '@src/components/plantText';
import offsets from '@src/theme/offsets';

import styles from './styles';

const GetStartedQuestions = ({data}: {data: GetStartedQuestion[]}) => {
  return (
    <View>
      <PlantText
        paddingTop={12}
        paddingBottom={20}
        paddingLeft={offsets._24}
        fontSize="mediumLarge"
        fontFamily="Rubik-Medium"
        colorName="green.dark"
        label="Get Started"
      />
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
              <PlantText
                label={item.title}
                fontFamily="Rubik-Medium"
                fontSize="mediumLarge"
                colorName="white.main"
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default GetStartedQuestions;
