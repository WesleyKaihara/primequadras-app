import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function AppButton({label, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FECC33',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  label: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    color: '#fff',
  },
});
