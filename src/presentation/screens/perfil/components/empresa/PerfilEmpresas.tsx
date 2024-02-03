import React, {useCallback, useContext, useEffect, useState} from 'react';

import {View, ListRenderItem, FlatList} from 'react-native';

import {PerfilMenuItem, PerfilMenuItens} from '../PerfilMenuItem';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {PerfilStackParamList} from 'src/main/routes/Perfil/PerfilStack';
import {ContentTitle} from '@components';

import PessoaEmpresaService from 'src/domain/services/pessoa/PessoaEmpresaService';
import AuthContext from 'src/presentation/contexts/AuthContext';

export const PerfilEmpresa = () => {
  const {navigate} = useNavigation<NavigationProp<PerfilStackParamList>>();
  const [pessoaEmpresasList, setPessoaEmpresasList] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const {data} = await PessoaEmpresaService.listarPessoaEmpresas(
          user?.id,
        );
        setPessoaEmpresasList(data);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [user]);

  const listarItensMenu: ListRenderItem<PerfilMenuItens> = useCallback(
    ({item}) => {
      return <PerfilMenuItem item={item} />;
    },
    [],
  );

  const listarEmpresasPessoa: ListRenderItem<any> = useCallback(
    ({item}) => {
      const {empresa} = item;

      const perfilMenu: Array<PerfilMenuItens> = [
        {
          titulo: 'Quadras',
          iconName: 'gavel',
          onPress: () => navigate('Quadras'),
        },
        {
          titulo: 'Agendamentos',
          iconName: 'comments',
          onPress: () => navigate('Agendamentos'),
        },
        {
          titulo: 'Equipe',
          iconName: 'about',
          onPress: () => navigate('Equipe'),
        },
      ];

      return (
        <View>
          <ContentTitle>{empresa.nome}</ContentTitle>
          <FlatList
            data={perfilMenu}
            renderItem={listarItensMenu}
            keyExtractor={menuItem => menuItem.titulo}
            showsVerticalScrollIndicator={false}
          />
        </View>
      );
    },
    [listarItensMenu, navigate],
  );

  return (
    <>
      {pessoaEmpresasList.length > 0 ? (
        <FlatList
          data={pessoaEmpresasList}
          renderItem={listarEmpresasPessoa}
          keyExtractor={item => item.nome}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View />
      )}
    </>
  );
};
