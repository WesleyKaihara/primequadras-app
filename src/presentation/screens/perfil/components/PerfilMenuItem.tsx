import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export type PerfilMenuItens = {
  onPress?: () => void;
  titulo: string;
};

export type PerfilMenuItemProps = {
  item: PerfilMenuItens;
};

export function PerfilMenuItem({item}: PerfilMenuItemProps) {
  return (
    <TouchableOpacity onPress={item.onPress}>
      <Text>{item.titulo}</Text>
    </TouchableOpacity>
  );
}
