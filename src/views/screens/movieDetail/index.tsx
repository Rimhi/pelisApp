import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {MovieDetailProps} from '../../../models/interfaces/props/MovieDetailProps';
import {useMovieDetail} from '../../../hooks/movieDetailHook';
import {useComponents} from '../../components';

const {height} = Dimensions.get('screen');
export const MovieDetailScreen = ({route, navigation}: MovieDetailProps) => {
  const movie = route.params;
  const {movieDetails, cast, movieVideo, similarVideo} = useMovieDetail({
    id: movie.id.toString(),
  });
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const {MovieDetailsComponent, BackButtonComponent} = useComponents();
  const OS = Platform.OS;
  return (
    <>
      {OS === 'android' && (
        <BackButtonComponent onPress={() => navigation.pop()} />
      )}
      <ScrollView>
        <View style={style.imageContainer}>
          <Image
            source={{
              uri,
            }}
            style={style.image}
          />
        </View>
        <View style={style.titleContainer}>
          <Text style={style.original_title}>{movie.original_title}</Text>
          <Text style={style.title}>{movie.title}</Text>
        </View>
        <View>
          <MovieDetailsComponent
            movieDetail={movieDetails}
            cast={cast}
            videos={movieVideo}
            similar={similarVideo}
          />
        </View>
      </ScrollView>
      {OS === 'ios' && <BackButtonComponent onPress={() => navigation.pop()} />}
    </>
  );
};
const style = StyleSheet.create({
  image: {
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  imageContainer: {
    width: '100%',
    height: height * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    borderRadius: 20,
    elevation: 12,
  },
  titleContainer: {
    marginTop: 20,
    marginLeft: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  original_title: {
    fontSize: 15,
    opacity: 0.8,
  },
});
