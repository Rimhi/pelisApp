import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {MoviePosterPropsInterface} from '../../../models/interfaces/props/MoviePosterPropsInterface';

export const MoviePoster = ({
  movie,
  height,
  width,
}: MoviePosterPropsInterface) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <View
      style={{
        width,
        height,
        marginHorizontal: 7,
      }}>
      <View
        style={{
          flex: 1,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,

          elevation: 10,
        }}>
        <Image
          source={{
            uri,
          }}
          style={style.image}
        />
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 20,
  },
});
