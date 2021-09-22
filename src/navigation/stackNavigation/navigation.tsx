import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useViews} from '../../views';
const Stack = createStackNavigator();

export const Navigation = () => {
  const {useScreen} = useViews();
  const {HomeScreen, MovieDetailScreen} = useScreen();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
      <Stack.Screen name={'MovieDetailScreen'} component={MovieDetailScreen} />
    </Stack.Navigator>
  );
};
