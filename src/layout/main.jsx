import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import {useRef} from 'react';
import {Animated, Dimensions, TouchableOpacity, View} from 'react-native';
import HomeScreeen from '../presentation/screens/home/Home';
import AgendamentosScreen from '../presentation/screens/agendamentos/Agendamentos';
import PerfilScreen from '../presentation/screens/perfil/Perfil';
import TorneiosScreen from '../presentation/screens/torneios/Torneios';
import EmpresasScreen from '../presentation/screens/empresas/Empresas';

export default function MainLayout() {
  const Tab = createBottomTabNavigator();

  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 30,
            marginHorizontal: 20,
            height: 60,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            paddingHorizontal: 20,
          },
        }}>
        <Tab.Screen
          name="Inicio"
          component={HomeScreeen}
          options={{
            tabBarIcon: ({focused}) => (
              <AntDesignIcon
                name="home"
                size={25}
                style={{color: focused ? '#FECC33' : '#444'}}
              />
            ),
          }}
          listeners={() => ({
            tabPress: () => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
              Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
                delay: 0,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name="Agendamentos"
          component={AgendamentosScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <AntDesignIcon
                name="calendar"
                size={25}
                style={{color: focused ? '#FECC33' : '#444'}}
              />
            ),
          }}
          listeners={() => ({
            tabPress: () => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true,
              }).start();
              Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
                delay: 0,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name="Empresas"
          component={EmpresasScreen}
          options={{
            tabBarIcon: () => (
              <TouchableOpacity
                onPress={() => {
                  Animated.spring(tabOffsetValue, {
                    toValue: getWidth() * 2,
                    useNativeDriver: true,
                  }).start();
                  Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 450,
                    useNativeDriver: true,
                    delay: 0,
                  }).start();
                }}>
                <View
                  style={{
                    width: 55,
                    height: 55,
                    backgroundColor: '#FECC33',
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 50,
                  }}>
                  <AntDesignIcon
                    name="plus"
                    size={35}
                    style={{
                      color: '#FFF',
                    }}
                  />
                </View>
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name="Torneios"
          component={TorneiosScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <AntDesignIcon
                name="Trophy"
                size={25}
                style={{color: focused ? '#FECC33' : '#444'}}
              />
            ),
          }}
          listeners={() => ({
            tabPress: () => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3,
                useNativeDriver: true,
              }).start();
              Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
                delay: 0,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name="Perfil"
          component={PerfilScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <AntDesignIcon
                name="user"
                size={25}
                style={{color: focused ? '#FECC33' : '#444'}}
              />
            ),
          }}
          listeners={() => ({
            tabPress: () => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4,
                useNativeDriver: true,
              }).start();
              Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
                delay: 0,
              }).start();
            },
          })}
        />
      </Tab.Navigator>
      <Animated.View
        style={{
          width: getWidth() - 20,
          height: 2,
          backgroundColor: '#FECC33',
          position: 'absolute',
          bottom: 90,
          left: 50,
          borderRadius: 20,
          transform: [{translateX: tabOffsetValue}],
          opacity: fadeAnim,
        }}></Animated.View>
    </>
  );
}

function getWidth() {
  let width = Dimensions.get('window').width;
  width = width - 80;
  return width / 5;
}
