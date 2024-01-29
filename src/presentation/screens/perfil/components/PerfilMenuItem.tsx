import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IconName} from '@icons';
import {Icon} from '@components';

export type PerfilMenuItens = {
  onPress?: () => void;
  titulo: string;
  iconName: IconName;
};

export type PerfilMenuItemProps = {
  item: PerfilMenuItens;
};

export function PerfilMenuItem({item}: PerfilMenuItemProps) {
  return (
    <TouchableOpacity onPress={item.onPress} style={styles.perfil_menu_item}>
      <Icon name={item.iconName} size={20} />
      <Text style={styles.perfil_menu_item_titulo}>{item.titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  perfil_menu_item: {
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  perfil_menu_item_titulo: {
    fontSize: 15,
    color: '#222',
  },
});
