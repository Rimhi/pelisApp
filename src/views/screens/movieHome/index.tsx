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
  const {popular, topRated, playingNow, upcoming} = useMovie();
  const {MoviePoster, HorizontalSlider} = useComponets();
  const {top} = useSafeAreaInsets();
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        {/*{movies[0] && <MoviePoster movie={movies[0]} />}*/}
        <View style={{height: 470}}>
          <Carousel
            data={playingNow}
            renderItem={({item}: ListRenderItemInfo<Movie>) => (
              <MoviePoster
                movie={item}
                height={windowHeight / 1.9}
                width={300}
              />
            )}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>
        <View
          style={{
            marginVertical: 20,
          }}>
          <HorizontalSlider
            height={(windowHeight * 30) / 100}
            title={'Populares'}
            movies={popular}
          />
          <HorizontalSlider
            height={(windowHeight * 30) / 100}
            title={'Top'}
            movies={topRated}
          />
          <HorizontalSlider
            height={(windowHeight * 30) / 100}
            title={'Proximas'}
            movies={upcoming}
          />
        </View>
      </View>
    </ScrollView>
  );
};
