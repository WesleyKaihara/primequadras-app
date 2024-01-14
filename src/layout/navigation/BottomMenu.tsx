import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import HomeScreeen from '../../presentation/screens/home/Home';
import AgendamentosScreen from '../../presentation/screens/agendamentos/Agendamentos';
import EmpresasScreen from '../../presentation/screens/empresas/Empresas';
import TorneiosScreen from '../../presentation/screens/torneios/Torneios';
import PerfilScreen from '../../presentation/screens/perfil/Perfil';

export default function BottomMenu() {
  const Tab = createBottomTabNavigator();

  return (
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
      />
      <Tab.Screen
        name="Empresas"
        component={EmpresasScreen}
        options={{
          tabBarIcon: ({}) => (
            <AntDesignIcon
              name="pluscircle"
              size={50}
              style={{color: '#FECC33', top: -15}}
            />
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
      />
    </Tab.Navigator>
  );
}
