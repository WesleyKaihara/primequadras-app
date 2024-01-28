import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Perfil, Sobre} from '../../../presentation/screens/index';

export type PerfilStackParamList = {
  PerfilHome: undefined;
  Sobre: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<PerfilStackParamList>();

export const PerfilStack = () => {
  return (
    <Navigator>
      <Screen
        name="PerfilHome"
        children={() => <Perfil />}
        options={{
          headerShown: false,
        }}
      />
      <Screen name="Sobre" children={() => <Sobre />} />
    </Navigator>
  );
};
