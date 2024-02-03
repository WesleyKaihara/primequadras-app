import {FlatList, ListRenderItem, SafeAreaView, StyleSheet} from 'react-native';
import React, {useCallback, useContext} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {PerfilStackParamList} from 'src/main/routes/Perfil/PerfilStack';
import {AppLayout} from '../../layout/app/AppLayout';
import {PerfilHeader, PerfilMenuItem, PerfilMenuItens} from './components';
import {ContentTitle} from 'src/presentation/components';
import AuthContext from 'src/presentation/contexts/AuthContext';
import {PerfilEmpresa} from './components/empresa/PerfilEmpresas';

export const Perfil = () => {
  const {navigate} = useNavigation<NavigationProp<PerfilStackParamList>>();
  const {signOut} = useContext(AuthContext);
  async function handleSignOut() {
    await signOut();
  }

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
    {
      titulo: 'Sair da conta',
      iconName: 'leave',
      onPress: handleSignOut,
    },
  ];

  const profileRenderItem: ListRenderItem<PerfilMenuItens> = useCallback(
    ({item}) => {
      return <PerfilMenuItem item={item} />;
    },
    [],
  );

  return (
    <AppLayout>
      <PerfilHeader />
      <SafeAreaView style={styles.container}>
        <ContentTitle>Meu Resumo</ContentTitle>
        <PerfilEmpresa />
        <FlatList
          data={perfilMenu}
          renderItem={profileRenderItem}
          keyExtractor={item => item.titulo}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '5%',
  },
});
