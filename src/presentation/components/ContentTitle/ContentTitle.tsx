import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TextProps} from './ContentTitleProps';

export const ContentTitle = ({children}: TextProps) => {
  return (
    <View style={styles.content_title_container}>
      <View style={styles.title_decoration} />
      <Text style={styles.content_title}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content_title_container: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  title_decoration: {
    width: 5,
    height: 25,
    backgroundColor: '#FECC33',
  },
  content_title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
