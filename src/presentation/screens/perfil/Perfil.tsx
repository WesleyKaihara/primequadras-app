import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useCallback} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {PerfilStackParamList} from 'src/main/routes/Perfil/PerfilStack';
import {AppLayout} from '../../layout/app/AppLayout';
import {PerfilHeader, PerfilMenuItem, PerfilMenuItens} from './components';
import {ContentTitle} from 'src/presentation/components';

export const Perfil = () => {
  const {navigate} = useNavigation<NavigationProp<PerfilStackParamList>>();

  const perfilMenu: Array<PerfilMenuItens> = [
    {
      titulo: 'Aspectos Legais',
      onPress: () => navigate('Sobre'),
    },
    {
      titulo: 'Atendimento',
      onPress: () => navigate('Sobre'),
    },
    {
      titulo: 'Sobre',
      onPress: () => navigate('Sobre'),
    },
    {
      titulo: 'Sair da conta',
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
    <AppLayout>
      <PerfilHeader />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <ContentTitle>Meu Resumo</ContentTitle>
        </ScrollView>
        <FlatList
          data={perfilMenu}
          renderItem={profileRenderItem}
          keyExtractor={item => item.titulo}
          style={{marginTop: 24}}
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
