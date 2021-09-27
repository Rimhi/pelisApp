import React, {Suspense} from 'react';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';
import {Movie} from '../../../models/interfaces/movie';

import {HorizontalSliderProps} from '../../../models/interfaces/props/HorizontalSliderProps';
import {useComponents} from '../index';
import { useSkeleton } from "../../skeletons";

const HorizontalSlider = ({height, title, movies}: HorizontalSliderProps) => {
  const {MoviePoster} = useComponents();
  const {MoviePosterSkeleton} = useSkeleton();
  return (
    <View
      style={{
        height,
      }}>
      <Text
        style={{
          fontSize: 25,
          marginBottom: 10,
          marginLeft: 10,
        }}>
        {title}
      </Text>
      <FlatList
        data={movies}
        renderItem={({item}: ListRenderItemInfo<Movie>) => (
          <Suspense fallback={<MoviePosterSkeleton height={190} width={120} />}>
            <MoviePoster movie={item} width={120} height={190} />
          </Suspense>
        )}
        keyExtractor={movie => movie.id.toString()}
        horizontal={true}
      />
    </View>
  );
};
export default HorizontalSlider;
