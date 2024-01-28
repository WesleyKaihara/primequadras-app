import {View, Text} from 'react-native';
import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {PerfilStackParamList} from 'src/main/routes/Perfil/PerfilStack';

export const Perfil = () => {
  const {navigate} = useNavigation<NavigationProp<PerfilStackParamList>>();

  const perfilMenu: Array<ProfileItens> = [
    {
      title: 'Sobre',
      onPress: () => navigate('SobreApp'),
    },
  ];

  return (
    <View>
      <Text>Perfil</Text>
    </View>
  );
};
