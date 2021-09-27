import React from 'react';
import {StyleSheet, View} from 'react-native';
interface MoviePosterSkeletonProps {
  height: number;
  width: number;
}
const MoviePosterSkeleton = ({height, width}: MoviePosterSkeletonProps) => {
  return (
    <View
      style={{
        width,
        height,
        marginHorizontal: 7,
        shadowColor: '#000',
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
        style={style.image}
      ></View>
    </View>
  );
};
const style = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: 'gray',
  },
});
export default MoviePosterSkeleton;
