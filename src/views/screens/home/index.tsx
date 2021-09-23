import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {useMovie} from '../../../hooks/movieHook';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useComponets} from '../../components';
import Carousel from 'react-native-snap-carousel';
import {Movie} from '../../../models/interfaces/movie';

export const HomeScreen = () => {
  const {movies} = useMovie();
  const {MoviePoster} = useComponets();
  const {top} = useSafeAreaInsets();
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  return (
    <View style={{marginTop: top + 20}}>
      {/*{movies[0] && <MoviePoster movie={movies[0]} />}*/}
      <View style={{height: 470}}>
        <Carousel
          data={movies}
          renderItem={({item}: ListRenderItemInfo<Movie>) => (
            <MoviePoster movie={item} />
          )}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>
      <View
        style={{
          backgroundColor: 'red',
          height: (windowHeight * 25) / 100,
        }}>
        <Text
          style={{
            fontSize: 25,
          }}>
          Populares
        </Text>
        <FlatList
          data={movies}
          renderItem={({item}: ListRenderItemInfo<Movie>) => (
            <MoviePoster movie={item} />
          )}
          keyExtractor={movie => movie.id.toString()}
          horizontal={true}
        />
      </View>
    </View>
  );
};
