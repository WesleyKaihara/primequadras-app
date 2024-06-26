import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import {useRef} from 'react';
import {Animated, Dimensions, TouchableOpacity, View} from 'react-native';
import {DashboardStack} from './Dashboard/DashboardStack';
import {AgendamentoStack} from './Agendamento/AgendamentoStack';
import {TorneioStack} from './Torneio/TorneioStack';
import {PerfilStack} from './Perfil/PerfilStack';
import {EmpresaStack} from './Empresa/EmpresaStack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const tabBarStyle: any = {
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
};

export const AppStack = () => {
  const Tab = createBottomTabNavigator();

  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: tabBarStyle,
        }}>
        <Tab.Screen
          name="Inicio"
          component={DashboardStack}
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
          component={AgendamentoStack}
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
          component={EmpresaStack}
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
          component={TorneioStack}
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
          component={PerfilStack}
          options={({route}) => {
            return {
              tabBarIcon: ({focused}) => (
                <AntDesignIcon
                  name="user"
                  size={25}
                  style={{color: focused ? '#FECC33' : '#444'}}
                />
              ),
              tabBarStyle: (routeName => showTabNavigation(routeName))(route),
            };
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
};

function getWidth() {
  let width = Dimensions.get('window').width;
  width = width - 80;
  return width / 5;
}

function showTabNavigation(route: any) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? '';
  const fullScreenPages = ['Quadras', 'Agendamentos', 'Equipe'];
  if (fullScreenPages.includes(routeName)) {
    return {display: 'none'};
  }
  return tabBarStyle;
}
