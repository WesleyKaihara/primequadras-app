import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../../../presentation/screens/index';

export type PerfilStackParamList = {
  Sign: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<PerfilStackParamList>();

export const AuthStack = () => {
  return (
    <Navigator>
      <Screen
        name="Sign"
        children={() => <Login />}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};
