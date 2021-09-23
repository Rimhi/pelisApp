import React from 'react';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';
import {Movie} from '../../../models/interfaces/movie';
import {MoviePoster} from '../MoviePoster';

import {HorizontalSliderProps} from '../../../models/interfaces/props/HorizontalSliderProps';

export const HorizontalSlider = ({
  height,
  title,
  movies,
}: HorizontalSliderProps) => {
  return (
    <View
      style={{
        height,
      }}>
      <Text
        style={{
          fontSize: 25,
          marginBottom: 10,
        }}>
        {title}
      </Text>
      <FlatList
        data={movies}
        renderItem={({item}: ListRenderItemInfo<Movie>) => (
          <MoviePoster movie={item} width={120} height={190} />
        )}
        keyExtractor={movie => movie.id.toString()}
        horizontal={true}
      />
    </View>
  );
};
