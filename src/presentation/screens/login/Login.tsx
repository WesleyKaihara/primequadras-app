import React, {useContext} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import InputField from '../../../components/InputField';
import AppButton from '../../../components/AppButton';
import AuthContext from 'src/presentation/contexts/AuthContext';

export function Login() {
  const {signIn} = useContext(AuthContext);

  async function handleSignIn() {
    await signIn();
  }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <Image source={require('../../../../assets/trofeu.png')} />
        </View>

        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Entrar
        </Text>

        <InputField
          label={'E-mail ou CPF'}
          icon={
            <AntDesignIcon
              name="user"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          keyboardType="email-address"
        />

        <InputField
          label={'Senha'}
          icon={
            <AntDesignIcon
              name="key"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
          fieldButtonLabel={'Esqueceu sua senha?'}
          fieldButtonFunction={() => {}}
        />

        <AppButton label={'Entrar'} onPress={handleSignIn} />

        <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
          Ou
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#DB4437',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <AntDesignIcon name="google" size={25} style={{color: '#DB4437'}} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#4267B2',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <FontAwesome name="facebook" size={25} style={{color: '#4267B2'}} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#000000',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <FontAwesome name="apple" size={25} style={{color: '#000000'}} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>Não possui cadastro?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#FECC33', fontWeight: '700'}}>
              {' '}
              Registrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
