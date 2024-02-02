import React, {useContext} from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import AuthContext from 'src/presentation/contexts/AuthContext';

export const PerfilHeader = () => {
  const {user} = useContext(AuthContext);
  StatusBar.setHidden(true);
  return (
    <>
      <View style={styles.background}>
        <View>
          <View style={styles.box}>
            <Svg
              height={370}
              width={Dimensions.get('screen').width}
              viewBox="0 0 1440 320">
              <Path
                fill="#FECC33"
                d="M0,256L80,261.3C160,267,320,277,480,272C640,267,800,245,960,229.3C1120,213,1280,203,1360,197.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
              />
            </Svg>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.titulo}>perfil</Text>
        <View style={styles.perfil_detalhes}>
          <Image
            style={styles.perfil_imagem}
            source={require('../../../assets/images/default-profile.png')}
          />
          <View>
            <Text style={styles.perfil_nome}>{user ? user.nome : ''}</Text>
            <Text style={styles.perfil_detalhes_info}>
              Acompanhe suas estatísticas e configurações
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  box: {
    backgroundColor: '#FECC33',
    height: 140,
  },
  container: {
    paddingTop: 50,
    paddingHorizontal: '5%',
    marginBottom: 80,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#222',
    textTransform: 'uppercase',
  },
  perfil_imagem: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  perfil_nome: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  perfil_detalhes: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    gap: 15,
  },
  perfil_detalhes_info: {
    fontSize: 12,
  },
});
