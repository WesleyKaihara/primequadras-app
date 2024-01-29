import React from 'react';
import {Pressable} from 'react-native';

import {IconProps, iconRegistry} from './IconProps';

export const Icon = ({name, color = 'gray500', size, onPress}: IconProps) => {
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable onPress={onPress} hitSlop={10}>
        <SVGIcon size={size} />
      </Pressable>
    );
  }

  return <SVGIcon size={size} color={color} />;
};
