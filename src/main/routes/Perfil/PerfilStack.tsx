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
  Quadras: {empresaId: number};
  Agendamentos: {empresaId: number};
  Equipe: {empresaId: number};
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
        name="Sobre"
        options={{headerTransparent: true}}
        children={() => <Sobre />}
      />
      <Screen
        name="Quadras"
        options={{headerTransparent: true}}
        children={() => <Quadras />}
      />
      <Screen
        name="Agendamentos"
        options={{headerTransparent: true}}
        children={() => <Agendamentos />}
      />
      <Screen
        name="Equipe"
        options={{headerTransparent: true}}
        children={() => <Equipe />}
      />
    </Navigator>
  );
};
