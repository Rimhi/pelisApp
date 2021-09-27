import React,{Suspense} from 'react';
import {
  Cast,
  MovieDetails,
  VideoMovie,
} from '../../../models/interfaces/movieDetails';
import {
  FlatList,
  ListRenderItemInfo,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import WebView from 'react-native-webview';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import {useComponents} from '../index';
import {useHelpers} from '../../../helpers';
import {Movie} from '../../../models/interfaces/movie';
interface MovieDetailsProps {
  movieDetail: MovieDetails;
  cast: Cast[];
  videos: VideoMovie[];
  similar: Movie[];
}
export const MovieDetailsComponent = ({
  movieDetail,
  cast,
  videos,
  similar,
}: MovieDetailsProps) => {
  const {CastComponent, HorizontalSlider} = useComponents();
  const {useConvertMinutesToHours} = useHelpers();
  return (
    <>
      {/*details*/}
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row', marginTop: 7}}>
          <Icon name={'star-outline'} color={'grey'} size={15} />
          <Text style={{marginLeft: 5, fontSize: 15}}>
            {`${movieDetail.vote_average} (${movieDetail.vote_count} votos)`}
          </Text>
          <ScrollView
            horizontal={true}
            style={{marginHorizontal: 10}}
            showsHorizontalScrollIndicator={false}>
            <Text>{` -  ${movieDetail.genres
              ?.map(g => g.name)
              .join(', ')}`}</Text>
          </ScrollView>
        </View>
        <View>
          <Text
            style={{
              ...styles.text,
              marginTop: 5,
            }}>{`Lanzamiento: ${movieDetail.release_date}`}</Text>
          <Text
            style={{
              ...styles.text,
              marginTop: 5,
            }}>{`Duracion: ${useConvertMinutesToHours(
            movieDetail.runtime,
          )}`}</Text>
          <Text style={styles.titile}>Sinopsis</Text>
          <Text style={styles.text}>{movieDetail.overview}</Text>
        </View>
        <View>
          <Text style={styles.titile}>Presupuesto</Text>
          <Text style={styles.text}>
            {movieDetail.budget != 0
              ? currencyFormatter.format(movieDetail.budget, {code: 'USD'})
              : 'no disponible'}
          </Text>
          <Text style={styles.titile}>Recaudado</Text>
          <Text style={styles.text}>
            {movieDetail.revenue != 0
              ? currencyFormatter.format(movieDetail.revenue, {code: 'USD'})
              : 'no disponible'}
          </Text>
          <Text style={styles.titile}>Trailers</Text>
          {videos.length > 1 ? (
            <FlatList
              data={videos}
              horizontal={true}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      width: 150,
                      height: 150,
                      marginTop: 10,
                      marginHorizontal: 7,
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                      padding: 7,
                      marginBottom: 7,
                    }}>
                    <WebView
                      javaScriptEnabled={true}
                      domStorageEnabled={true}
                      source={{
                        uri: `https://www.youtube.com/embed/${item.key}`,
                      }}
                      style={{
                        borderRadius: 30,
                      }}
                    />
                  </View>
                );
              }}
            />
          ) : (
            <Text>No disponible</Text>
          )}
        </View>
      </View>
      <View>
        <Text style={{...styles.titile, marginLeft: 20}}>Elenco</Text>
        <FlatList
          horizontal={true}
          data={cast}
          renderItem={({item}: ListRenderItemInfo<Cast>) => (
            <CastComponent cast={item} />
          )}
          style={{
            marginLeft: 13,
            paddingBottom: 30,
          }}
        />
        <Suspense fallback={<Text>Cargando ...</Text>}>
          <HorizontalSlider height={250} title={'Similares'} movies={similar} />
        </Suspense>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  titile: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    textAlign: 'justify',
    fontSize: 14,
  },
});
