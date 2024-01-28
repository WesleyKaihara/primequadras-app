import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Perfil, Sobre} from '../../../presentation/screens/index';

export type PerfilStackParamList = {
  PerfilHome: undefined;
  SobreApp: undefined;
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
      <Screen
        name="SobreApp"
        children={() => <Sobre />}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};
