
import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'react-native';
import MenuInternoComponent from '../components/MenuInternoComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MisAlertasScreen from '../screens/MisAlertasScreen';
import SedeScreen from '../screens/SedeScreen';
import StackAlertaNavigator from './StackAlertaNavigator';
import MiperfilScreen from '../screens/MiperfilScreen';

export type RootDrawerParams = {
  Inicio: undefined,
  EnviarAlerta: {
    tipo_alerta: number,
    tipo_area: number,
    area: number
  },
  Misalertas: undefined,
  Sede: undefined
}

const Drawer = createDrawerNavigator<RootDrawerParams>();

export const MenuLateralBasico = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuInternoComponent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#004F79',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: { marginLeft: -20, fontSize: 15 },
        unmountOnBlur: true,
        headerStyle: {
          backgroundColor: '#004F79',
        },
        headerTintColor: 'white',
        headerTitle: () => {
          return <>
              <Image
                source={require('../assets/img/menu/barra.png')}
                style={{
                  width: 90,
                  height: '85%',
                  alignItems: 'center',
                  left: 75
                }}
              />
          </>
        }
      }}

      backBehavior="none"
    >
      <Drawer.Screen name="Inicio" component={StackAlertaNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-sharp" size={22} color={color} />
          )
        }} />

      {/* <Drawer.Screen name="EnviarAlerta" component={EnviarAlertaScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="paper-plane-sharp" size={22} color={color} />
          )
        }}
      /> */}

      <Drawer.Screen name="Mis alertas" component={MisAlertasScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="notifications-sharp" size={22} color={color} />
          )
        }}
      />
      <Drawer.Screen name="Sede" component={SedeScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="location-sharp" size={22} color={color} />
          )
        }}
      />
      <Drawer.Screen name="Perfil" component={MiperfilScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-sharp" size={22} color={color} />
          )
        }}
      />
    </Drawer.Navigator>
  );
}


{/*const MenuInterno = (props: DrawerContentComponentProps) =>{
  return (
    <DrawerContentScrollView>
      <View>
        <Image
          source={require('../assets/img/usuario.png')}
        />
      </View>
    </DrawerContentScrollView>
  );
}*/}