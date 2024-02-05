import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';

export default function AppButton({label, onPress, isBottonButton, disabled}) {
  const bottonButtonStyle = () => {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    if (isBottonButton) {
      return {
        position: 'absolute',
        top: height - 80,
        width: width - width * 0.1,
        marginHorizontal: width * 0.05,
      };
    }
  };

  return (
    <TouchableOpacity
      onPress={!disabled ? onPress : () => {}}
      disabled={disabled}
      style={{
        ...styles.button,
        ...bottonButtonStyle(),
        backgroundColor: disabled? '#ccc': '#FECC33' 
      }}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
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
