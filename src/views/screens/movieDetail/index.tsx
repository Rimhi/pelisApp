import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {MovieDetailProps} from '../../../models/interfaces/props/MovieDetailProps';
import Icon from 'react-native-vector-icons/Ionicons';
import {useMovieDetail} from '../../../hooks/movieDetailHook';

const {height} = Dimensions.get('screen');
export const MovieDetailScreen = ({route}: MovieDetailProps) => {
  const movie = route.params;
  const {movieDetails, cast} = useMovieDetail({id: movie.id.toString()});
  console.log(cast, '*******');
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
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
        <Icon name={'star-outline'} color={'grey'} size={30} />
      </View>
    </ScrollView>
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
