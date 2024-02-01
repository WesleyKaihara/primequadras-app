import React, {useContext} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AuthContext from 'src/presentation/contexts/AuthContext';

import {AuthStack} from './Auth/AuthStack';
import {AppStack} from './AppStack';

export const Router = () => {
  const {signed} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {signed ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
