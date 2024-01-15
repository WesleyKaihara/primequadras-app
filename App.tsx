import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './src/layout/navigation/bottomNavigation/bottomNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
};

export default App;
