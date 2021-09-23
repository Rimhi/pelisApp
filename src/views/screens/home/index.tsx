import React from 'react';
import {
  ListRenderItemInfo,
  ScrollView,
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
  const {MoviePoster, HorizontalSlider} = useComponets();
  const {top} = useSafeAreaInsets();
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        {/*{movies[0] && <MoviePoster movie={movies[0]} />}*/}
        <View style={{height: 470}}>
          <Carousel
            data={movies}
            renderItem={({item}: ListRenderItemInfo<Movie>) => (
              <MoviePoster
                movie={item}
                height={windowHeight / 1.9}
                width={300}
              />
            )}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>
        <HorizontalSlider
          height={(windowHeight * 30) / 100}
          title={'Populares'}
          movies={movies}
        />
      </View>
    </ScrollView>
  );
};
