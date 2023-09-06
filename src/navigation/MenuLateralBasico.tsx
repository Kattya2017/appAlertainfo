
import React from 'react'

import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import EnviarAlertaScreen from '../screens/EnviarAlertaScreen';
import { useWindowDimensions, View, Image } from 'react-native';


const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      //drawerType={ width>=768 ? 'permanent' : 'front'}
      drawerContent={(props)=><MenuInterno { ...props }/>}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="EnviarAlerta" component={EnviarAlertaScreen} />
    </Drawer.Navigator>
  );
}


const MenuInterno = (props: DrawerContentComponentProps) =>{
  return (
    <DrawerContentScrollView>
      <View>
        <Image
          source={require('../assets/img/usuario.png')}
        />
      </View>
    </DrawerContentScrollView>
  );
}