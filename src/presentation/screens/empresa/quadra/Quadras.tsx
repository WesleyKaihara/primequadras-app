import React, {useState, useRef} from 'react';
import {Text, Dimensions, StyleSheet, Switch, View} from 'react-native';

import AppButton from 'src/components/AppButton';
import BottomSheet, {BottomSheetMethods} from '@devvie/bottom-sheet';
import InputField from 'src/components/InputField';

export function Quadras() {
  const sheetRef = useRef<BottomSheetMethods>(null);
  const height = Dimensions.get('window').height;

  const [definirLimitePessoas, setDefinirLimitePessoas] = useState(false);
  const toggleSwitch = () =>
    setDefinirLimitePessoas(previousState => !previousState);

  return (
    <>
      <Text>Quadras</Text>
      <BottomSheet
        ref={sheetRef}
        height={height * 0.6}
        style={styles.bottonSheet}>
        <View style={styles.limite_pessoas}>
          <Text>Definir Limite de pessoas</Text>
          <Switch
            trackColor={{false: '#767577', true: '#46c74c'}}
            thumbColor={definirLimitePessoas ? '#62d967' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={definirLimitePessoas}
          />
        </View>
        <InputField label="Nome" />
        {definirLimitePessoas ? (
          <InputField label="Limite de Pessoas" keyboardType="numeric" />
        ) : (
          ''
        )}
      </BottomSheet>
      <AppButton
        label="Adicionar Nova Quadra"
        isBottonButton={true}
        onPress={() => sheetRef.current?.open()}
      />
    </>
  );
}

const styles = StyleSheet.create({
  bottonSheet: {
    backgroundColor: 'white',
    paddingHorizontal: '5%',
  },
  limite_pessoas: {
    flexDirection: 'row',
    marginBottom: 15,
    gap: 10,
  },
});
