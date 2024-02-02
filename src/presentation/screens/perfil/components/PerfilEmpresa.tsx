import React, {useCallback, useContext, useEffect} from 'react';

import {View, Text, ListRenderItem, FlatList} from 'react-native';

import {PerfilMenuItem, PerfilMenuItens} from './PerfilMenuItem';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {PerfilStackParamList} from 'src/main/routes/Perfil/PerfilStack';
import {ContentTitle} from '@components';

import PessoaEmpresaService from 'src/domain/services/pessoa/PessoaEmpresaService';
import AuthContext from 'src/presentation/contexts/AuthContext';

export const PerfilEmpresa = () => {
  const {navigate} = useNavigation<NavigationProp<PerfilStackParamList>>();
  const {user} = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await PessoaEmpresaService.listarPessoaEmpresa(user?.id);
        console.log(res.data);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [user]);

  const perfilMenu: Array<PerfilMenuItens> = [
    {
      titulo: 'Aspectos Legais',
      iconName: 'gavel',
      onPress: () => navigate('Sobre'),
    },
    {
      titulo: 'Atendimento',
      iconName: 'comments',
      onPress: () => navigate('Sobre'),
    },
    {
      titulo: 'Sobre',
      iconName: 'about',
      onPress: () => navigate('Sobre'),
    },
  ];

  const profileRenderItem: ListRenderItem<PerfilMenuItens> = useCallback(
    ({item}) => {
      return <PerfilMenuItem item={item} />;
    },
    [],
  );

  return (
    <View>
      <ContentTitle>Nome Empresa</ContentTitle>
      <FlatList
        data={perfilMenu}
        renderItem={profileRenderItem}
        keyExtractor={item => item.titulo}
        style={{marginTop: 24}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
