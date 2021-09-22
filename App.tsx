import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import React from 'react';
import {useNavigation} from './src/navigation';

const App = () => {
  const {Navigation} = useNavigation();
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};
export default App;
