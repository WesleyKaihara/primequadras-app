import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Agendamentos,
  Equipe,
  Perfil,
  Quadras,
  Sobre,
} from '../../../presentation/screens/index';

export type PerfilStackParamList = {
  PerfilHome: undefined;
  Sobre: undefined;
  Quadras: undefined;
  Agendamentos: undefined;
  Equipe: undefined;
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
      <Screen name="Quadras" children={() => <Quadras />} />
      <Screen name="Agendamentos" children={() => <Agendamentos />} />
      <Screen name="Equipe" children={() => <Equipe />} />
    </Navigator>
  );
};
