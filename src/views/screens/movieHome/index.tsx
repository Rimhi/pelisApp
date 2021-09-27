import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  useWindowDimensions,
  View,
} from 'react-native';
import {useMovie} from '../../../hooks/movieHook';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useComponents} from '../../components';
import {usePromiseTracker} from 'react-promise-tracker';
import {useLayouts} from '../../layouts';

const HomeScreen = () => {
  const {popular, topRated, upcoming, playingNow} = useMovie();
  const {HorizontalSlider, CarrouselComponent} = useComponents();
  const {GradientBackground} = useLayouts();
  const {top} = useSafeAreaInsets();
  const {height: windowHeight} = useWindowDimensions();
  const {promiseInProgress} = usePromiseTracker();
  return (
    <ScrollView>
      <GradientBackground>
        {promiseInProgress ? (
          <ActivityIndicator
            size={50}
            color={'red'}
            style={{height: windowHeight, alignItems: 'center'}}
          />
        ) : (
          <View style={{marginTop: top + 20}}>
            <View style={{height: 470}}>
              <CarrouselComponent playingNow={playingNow} />
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
        )}
      </GradientBackground>
    </ScrollView>
  );
};
export default HomeScreen;
