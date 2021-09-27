import {Cast} from '../../../models/interfaces/movieDetails';
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface CastProps {
  cast: Cast;
}
export const CastComponent = ({cast}: CastProps) => {
  if (cast) {
    const uri = `https://image.tmdb.org/t/p/w500${cast?.profile_path}`;
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          backgroundColor: 'beige',
          padding: 8,
          borderRadius: 10,
          marginHorizontal: 7,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          marginBottom: 7,
        }}>
        <Image
          source={{uri}}
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
          }}
        />
        <View>
          <Text style={styles.name}>{cast?.name}</Text>
          <Text style={styles.character}>{cast?.character}</Text>
        </View>
      </View>
    );
  } else {
    return <Text>... loading</Text>;
  }
};
const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  character: {
    marginLeft: 5,
    opacity: 0.7,
  },
});
