import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import {MoviePosterPropsInterface} from '../../../models/interfaces/props/MoviePosterPropsInterface';
import { useNavigation } from "@react-navigation/native";

const MoviePoster = ({
  movie,
  height,
  width,
}: MoviePosterPropsInterface) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate('MovieDetailScreen', movie)}
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 7,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        borderRadius: 20,
        elevation: 12,
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <Image
          source={{
            uri,
          }}
          style={style.image}
        />
      </View>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 20,
  },
});
export default MoviePoster;
