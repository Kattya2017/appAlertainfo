
import React from 'react'

import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions, View, Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import EnviarAlertaScreen from '../screens/EnviarAlertaScreen';
import MenuInternoComponent from '../components/MenuInternoComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AlertasScreen from '../screens/AlertasScreen';
import MisAlertasScreen from '../screens/MisAlertasScreen';


const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuInternoComponent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor:'#004F79',
        drawerActiveTintColor:'#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle:{marginLeft:-20, fontSize:15}}}
      >
      <Drawer.Screen name="Home" component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-sharp" size={22} color={color} />
          )
        }} />

      <Drawer.Screen name="Enviar Alerta" component={EnviarAlertaScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="paper-plane-sharp" size={22} color={color} />
          )
        }}
      />

      <Drawer.Screen name="Mis alertas" component={MisAlertasScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="notifications-sharp" size={22} color={color} />
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