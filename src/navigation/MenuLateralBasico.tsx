
import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import DrawerComponent from '../components/DrawerComponent';
import EnviarAlertaScreen from '../screens/EnviarAlertaScreen';

const Drawer = createDrawerNavigator();

const MenuLateralBasico = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerComponent {...props}/>}
      screenOptions={{
        drawerLabelStyle: {marginLeft: -25},
        drawerActiveBackgroundColor: '#004F79',
        drawerActiveTintColor: 'black',
      }}
      initialRouteName="Home">
        <Drawer.Screen name="EnviarAlerta" component={EnviarAlertaScreen}/>
    </Drawer.Navigator>
  );
}


export default MenuLateralBasico;