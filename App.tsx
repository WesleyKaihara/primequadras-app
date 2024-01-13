import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomMenu from './src/layout/navigation/BottomMenu';

const App = () => {
  return (
    <NavigationContainer>
      <BottomMenu />
    </NavigationContainer>
  );
};

export default App;
