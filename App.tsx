import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import React from 'react';
import {useNavigation} from './src/navigation';
import {GradientProvider} from './src/controllers/context/gradientContext';
const AppState = ({children}: any) => {
  return <GradientProvider>{children}</GradientProvider>;
};
const App = () => {
  const {Navigation} = useNavigation();
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
      </AppState>
    </NavigationContainer>
  );
};
export default App;
