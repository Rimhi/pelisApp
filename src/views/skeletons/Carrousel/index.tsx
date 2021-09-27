import React from 'react';
import {useWindowDimensions, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const CarrouselSkeleton = () => {
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  return (
    <Carousel
      data={[1, 2, 3]}
      renderItem={() => (
        <View
          style={{
            backgroundColor: 'gray',
            height: windowHeight / 1.9,
            width: 300,
            borderRadius: 30,
          }}
        />
      )}
      sliderWidth={windowWidth}
      itemWidth={300}
      inactiveSlideOpacity={0.9}
    />
  );
};
export default CarrouselSkeleton;
