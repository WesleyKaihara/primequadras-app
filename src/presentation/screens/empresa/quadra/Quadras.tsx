import React, {useState, useRef} from 'react';
import {Text, Dimensions, StyleSheet, Switch, View} from 'react-native';

import AppButton from 'src/components/AppButton';
import BottomSheet, {BottomSheetMethods} from '@devvie/bottom-sheet';
import InputField from 'src/components/InputField';
import {useNavigation} from '@react-navigation/native';

export function Quadras() {
  const navigation = useNavigation();
  const navigationState = navigation.getState();
  console.log(navigationState.routes[1].params.empresaId);

  const sheetRef = useRef<BottomSheetMethods>(null);
  const height = Dimensions.get('window').height;

  const [definirLimitePessoas, setDefinirLimitePessoas] = useState(false);
  const [bottomSheetIsOpen, setBottomSheetIsOpen] = useState(false);
  const [nomeQuadra, setNomeQuadra] = useState<string>('');
  const [limitePessoas, setLimitePessoas] = useState<null | number>(null);

  const disabledButton =
    bottomSheetIsOpen &&
    (nomeQuadra.length === 0 || (definirLimitePessoas && !limitePessoas));

  function toggleSwitch() {
    setDefinirLimitePessoas(previousState => !previousState);
  }

  function handleSubmit() {
    setBottomSheetIsOpen(true);
    sheetRef.current?.open();
  }

  function getLabelValue() {
    if (disabledButton) {
      return 'Informe os dados da quadra';
    }
    return 'Adicionar nova quadra';
  }

  return (
    <>
      <Text>Quadras</Text>
      <BottomSheet
        ref={sheetRef}
        height={height * 0.6}
        style={styles.bottomSheet}
        closeOnBackdropPress={false}
        disableBodyPanning={true}>
        <View style={styles.limite_pessoas}>
          <Text>Definir Limite de pessoas</Text>
          <Switch
            trackColor={{false: '#767577', true: '#46c74c'}}
            thumbColor={definirLimitePessoas ? '#62d967' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={definirLimitePessoas}
          />
        </View>
        <InputField
          label="Nome"
          onChangeText={(nome: string) => setNomeQuadra(nome)}
        />
        {definirLimitePessoas ? (
          <InputField
            label="Limite de Pessoas"
            keyboardType="numeric"
            onChangeText={(limitePessoas: number) =>
              setLimitePessoas(limitePessoas)
            }
          />
        ) : (
          ''
        )}
      </BottomSheet>
      <AppButton
        label={getLabelValue()}
        isBottonButton={true}
        onPress={handleSubmit}
        disabled={disabledButton}
      />
    </>
  );
}

const styles = StyleSheet.create({
  bottomSheet: {
    backgroundColor: 'white',
    paddingHorizontal: '5%',
  },
  limite_pessoas: {
    flexDirection: 'row',
    marginBottom: 15,
    gap: 10,
  },
});
