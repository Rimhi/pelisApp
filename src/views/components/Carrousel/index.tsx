import React, { Suspense, useContext, useEffect } from "react";
import {ListRenderItemInfo, useWindowDimensions} from 'react-native';
import {Movie} from '../../../models/interfaces/movie';
import Carousel from 'react-native-snap-carousel';
import {useSkeleton} from '../../skeletons';
import {useComponents} from '../index';
import {useHelpers} from '../../../helpers';
import {GradientContext} from '../../../controllers/context/gradientContext';

interface Props {
  playingNow: Movie[];
}
const CarrouselComponent = ({playingNow}: Props) => {
  const {MoviePosterSkeleton} = useSkeleton();
  const {MoviePoster} = useComponents();
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  const {getImageColor} = useHelpers();
  const {setMainColors} = useContext(GradientContext);
  useEffect(()=>{
    if(playingNow.length>0){
      getPosterColors(0);
    }
  },[playingNow])
  const getPosterColors = async (index: number) => {
    try {
      const uri = `https://image.tmdb.org/t/p/w500${playingNow[index].poster_path}`;
      const {primary, secondary, tertiary} = await getImageColor(uri);
      setMainColors({primary, secondary, tertiary});
    } catch (e) {
      console.log(e.message, 'function');
    }
  };
  return (
    <Carousel
      data={playingNow}
      renderItem={({item}: ListRenderItemInfo<Movie>) => (
        <Suspense
          fallback={
            <MoviePosterSkeleton height={windowHeight / 1.9} width={300} />
          }>
          <MoviePoster movie={item} height={windowHeight / 1.9} width={300} />
        </Suspense>
      )}
      sliderWidth={windowWidth}
      itemWidth={300}
      inactiveSlideOpacity={0.9}
      onSnapToItem={index => getPosterColors(index)}
    />
  );
};
export default CarrouselComponent;
